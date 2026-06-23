#!/usr/bin/env python3
"""Busca Web Services internos da Senior no scrape consolidado (lido sob demanda).

Uso:
    python3 buscar_ws.py <termo>            # por pacote, nome de WS ou porta (substring, case-insensitive)
    python3 buscar_ws.py <termo> --porta P  # detalha os campos de UMA porta específica
    python3 buscar_ws.py <termo> --full     # detalha os campos de TODAS as portas (não só de escrita)
    python3 buscar_ws.py --indice           # regenera o índice (reference/webservices.md) no stdout

Por padrão, para cada WS encontrado mostra: pacote, descrição, WSDL, portas e — para cada
porta de ESCRITA (Gravar/Importar/Incluir/Cadastrar/Inserir/Atualizar/…) — os campos
(`bloco.campo`, tipo, obrigatoriedade) e a linha pronta:

    Definir interno.<pacote>.<Porta>_<versao> vObj;

Os nomes de pacote/porta/bloco/campo vêm DESTA doc (não do functions.json). Em LSP o proxy
capitaliza a 1ª letra de cada segmento: envelope `produto.codPro` → `vObj.Produto.CodPro`.

A fonte é o .md de ~12 MB do scrape; o script o lê uma seção por vez (não carrega tudo em
memória nem o inlina). Localize-o por, nesta ordem:
    1. variável de ambiente  SENIOR_WS_MD=/caminho/para/senior_erp_webservices_completo.md
    2. caminhos candidatos conhecidos (ver achar_md()).
"""
import os
import re
import sys

# Verbos de porta que ESCREVEM (criam/alteram cadastro) — preferir ao INSERT cru.
# NÃO inclui "exportar": Exportar lê/integra registros existentes, não cria cadastro.
VERBOS_ESCRITA = (
    "gravar", "importar", "incluir", "cadastrar", "inserir",
    "atualizar", "alterar", "criar", "salvar",
)

CABECALHO_SOAP = {"user", "password", "encryption", "parameters"}


def achar_md():
    """Localiza o .md do scrape: env var, depois caminhos candidatos."""
    env = os.environ.get("SENIOR_WS_MD")
    if env and os.path.isfile(env):
        return os.path.abspath(env)
    here = os.path.dirname(os.path.abspath(__file__))
    candidatos = [
        os.path.join(here, "webservices_completo.md"),          # se algum dia bundlar
        os.path.join(here, "..", "reference", "webservices_completo.md"),
        os.path.expanduser(
            "~/GitHub/WebScraping/output/_consolidado/"
            "senior_erp_webservices_completo.md"
        ),
        "/Users/eliezer.organ/GitHub/WebScraping/output/_consolidado/"
        "senior_erp_webservices_completo.md",
    ]
    for c in candidatos:
        if os.path.isfile(c):
            return os.path.abspath(c)
    return None


def limpar(texto):
    """Remove lixo de UI e placeholders do scrape."""
    texto = re.sub(r"!\[Closed\]\([^)]*transparent\.gif\)", "", texto)
    texto = texto.replace("(javascript:void(0);)", "").replace("javascript:void(0);", "")
    texto = texto.replace("http://example.com", "")
    texto = texto.replace("\\_", "_")   # markdown escapa underscores no scrape
    return texto.strip()


def iter_secoes(caminho):
    """Gera (pacote_bruto, [linhas]) por WS, lendo o arquivo uma seção por vez."""
    pacote = None
    buffer = []
    with open(caminho, encoding="utf-8") as f:
        for linha in f:
            if linha.startswith("### Web service "):
                if pacote is not None:
                    yield pacote, buffer
                pacote = linha[len("### Web service "):].strip()
                buffer = []
            elif pacote is not None:
                buffer.append(linha.rstrip("\n"))
    if pacote is not None:
        yield pacote, buffer


def header_de_porta(linha):
    """Se a linha é um cabeçalho colapsável de porta, devolve o nome; senão None.

    Ex.: '[![Closed](...gif)GravarClientes](javascript:void(0);)' -> 'GravarClientes'
    Ignora os blocos '**Requisição:**', '**Resposta:**', '**Parâmetros…**' (têm '*').
    """
    m = re.search(r"transparent\.gif\)([^\]*]+)\]\(javascript:void", linha)
    if not m:
        return None
    nome = m.group(1).strip()
    if not nome or "*" in nome or nome.endswith(":"):
        return None
    return nome


def eh_escrita(porta):
    p = porta.lower()
    return any(p.startswith(v) for v in VERBOS_ESCRITA)


def parse_secao(pacote_bruto, linhas):
    """Extrai pacote, descrição, WSDL, portas declaradas e blocos de porta."""
    pacote = pacote_bruto.lower()
    info = {
        "pacote": pacote,
        "nome": pacote_bruto,
        "descricao": "",
        "wsdl": {},
        "portas": [],          # nomes declarados em #### Portas
        "blocos": {},          # nome_porta -> {versao, envelope:[linhas], tabela:[linhas]}
    }

    # 1) descrição: 1º parágrafo útil ANTES do primeiro '####' (evita boilerplate
    #    "Tipo de execução/Autenticação/Campos numéricos"). Pode ficar vazia.
    callouts = {"importante", "observação", "observacao", "atenção", "atencao",
                "nota", "dica", "aviso"}
    for ln in linhas:
        s = limpar(ln)
        if s.startswith("####"):
            break
        if not s or s.startswith("[") or s.startswith("![") or s.lower().rstrip(":.") in callouts:
            continue
        info["descricao"] = s
        break

    # 2) varredura por estado
    estado = None          # 'wsdl' | 'portas' | None
    porta_atual = None
    captura = None         # 'envelope_wait' | 'envelope' | 'tabela' | None
    for ln in linhas:
        s = ln.strip()

        if s.startswith("#### WSDL"):
            estado, porta_atual, captura = "wsdl", None, None
            continue
        if s.startswith("#### Portas"):
            estado, porta_atual, captura = "portas", None, None
            continue
        if s.startswith("####"):
            estado = None
            continue

        if estado == "wsdl":
            m = re.match(r"-\s*(Síncrono|Assíncrono|Agendado)\s*:\s*(.+)", s)
            if m:
                info["wsdl"][m.group(1)] = limpar(m.group(2))
            continue
        if estado == "portas":
            m = re.match(r"-\s*\[([^\]]+)\]", s)
            if m:
                # nomes na lista às vezes vêm com a versão embutida ('ConsultarGeral\_3')
                nome = re.sub(r"\\?_\d+$", "", m.group(1).strip()).replace("\\", "").strip()
                if nome and nome not in info["portas"]:
                    info["portas"].append(nome)
            # não 'continue': as portas terminam quando começam os blocos colapsáveis

        nome_porta = header_de_porta(ln)
        if nome_porta:
            estado = None
            porta_atual = nome_porta
            captura = None
            info["blocos"].setdefault(porta_atual, {"versao": None, "envelope": [], "tabela": []})
            continue

        if porta_atual:
            bloco = info["blocos"][porta_atual]
            mv = re.search(r"\*\*Vers[aã]o:\*\*\s*(\d+)", s)
            if mv and bloco["versao"] is None:
                bloco["versao"] = mv.group(1)
            if "**Requisição:**" in s:
                captura = "envelope_wait"
                continue
            if "**Parâmetros da requisição:**" in s or "**Parâmetros**" in s:
                captura = "tabela"
                continue
            if "**Resposta:**" in s:
                captura = None
                continue
            if captura == "envelope_wait":
                if s.startswith("```"):
                    captura = "envelope"
                continue
            if captura == "envelope":
                if s.startswith("```"):
                    captura = None
                else:
                    bloco["envelope"].append(ln)
                continue
            if captura == "tabela":
                if s.startswith("|"):
                    bloco["tabela"].append(s)
                elif s and not s.startswith("["):
                    captura = None
                continue
    return info


def campos_do_envelope(envelope):
    """Devolve [(caminho_bloco.campo, tipo)] a partir do XML de requisição.

    Usa pilha de tags; ignora o cabeçalho SOAP e a raiz <parameters>.
    """
    pilha = []
    saida = []
    tipos_primitivos = {
        "String", "Integer", "Double", "Long", "Boolean",
        "DateTime", "Date", "Short", "Float",
    }
    for ln in envelope:
        s = ln.strip()
        # ignora prefixados ser:/soapenv:
        if re.match(r"</?(?:ser|soapenv):", s):
            continue
        # <tag>Tipo</tag>  (folha numa linha)
        m = re.match(r"<([A-Za-z0-9_.]+)>([A-Za-z0-9_]+)</\1>$", s)
        if m:
            nome, tipo = m.group(1), m.group(2)
            if nome in CABECALHO_SOAP:
                continue
            caminho = [p for p in pilha if p not in CABECALHO_SOAP] + [nome]
            if tipo in tipos_primitivos:
                saida.append((".".join(caminho), tipo))
            continue
        # fechamento </tag>
        m = re.match(r"</([A-Za-z0-9_.]+)>$", s)
        if m:
            if pilha and pilha[-1] == m.group(1):
                pilha.pop()
            continue
        # abertura <tag>  (container)
        m = re.match(r"<([A-Za-z0-9_.]+)>$", s)
        if m:
            pilha.append(m.group(1))
            continue
    return saida


def info_da_tabela(tabela):
    """Da tabela de parâmetros devolve (obrig, repetiveis).

    obrig: campo(lower, nome completo E último segmento) -> 'Obrigatório'/'Opcional'/''.
    repetiveis: set de blocos (lower) cujo Tipo é 'Set'/'List' -> exigem CriarLinha().
    O Nome na tabela às vezes é o caminho completo ('produto.codEmp'), às vezes o
    segmento solto ('codEmp'); indexamos pelos dois para casar com o envelope.
    """
    obrig, repetiveis = {}, set()
    if not tabela:
        return obrig, repetiveis
    header = [c.strip().lower() for c in tabela[0].strip("|").split("|")]
    i_nome = header.index("nome") if "nome" in header else 0
    i_tipo = header.index("tipo") if "tipo" in header else None
    i_preench = header.index("preenchimento") if "preenchimento" in header else None
    i_desc = None
    for cand in ("descrição", "descricao", "ajuda", "condição", "condicao"):
        if cand in header:
            i_desc = header.index(cand)
            break
    for linha in tabela[2:]:  # pula cabeçalho e separador '---'
        cols = [c.strip() for c in linha.strip("|").split("|")]
        if len(cols) <= i_nome:
            continue
        nome = cols[i_nome].strip().lower()
        if not nome or nome.startswith("---"):
            continue
        if i_tipo is not None and i_tipo < len(cols) and cols[i_tipo].strip().lower() in ("set", "list"):
            repetiveis.add(nome)
            repetiveis.add(nome.split(".")[-1])
        marca = ""
        if i_preench is not None and i_preench < len(cols):
            marca = cols[i_preench]
        elif i_desc is not None and i_desc < len(cols):
            d = cols[i_desc].lower()
            if "obrigat" in d:
                marca = "Obrigatório"
            elif "opcional" in d:
                marca = "Opcional"
        marca = marca.strip()
        for chave in (nome, nome.split(".")[-1]):
            obrig.setdefault(chave, marca)
    return obrig, repetiveis


def proxy_path(caminho):
    """envelope 'produto.codPro' -> proxy LSP 'Produto.CodPro' (1ª letra de cada segmento)."""
    return ".".join(seg[:1].upper() + seg[1:] for seg in caminho.split("."))


def imprimir_porta(pacote, porta, bloco):
    versao = bloco.get("versao") or "?"
    print(f"  ▸ Porta: {porta}  (versão {versao})")
    print(f"    Definir interno.{pacote}.{porta}_{versao} vObj;")
    campos = campos_do_envelope(bloco.get("envelope") or [])
    if not campos:
        print("    (sem envelope de requisição mapeável)")
        return
    obrig, repetiveis = info_da_tabela(bloco.get("tabela") or [])
    if repetiveis:
        print("    Blocos repetíveis (exigem CriarLinha()): "
              + ", ".join(sorted(b for b in repetiveis if b)))
    print("    Campos (bloco.campo : tipo — preenchimento) — em LSP capitalize cada segmento:")
    for caminho, tipo in campos:
        chave_full = caminho.lower()
        chave_ult = caminho.split(".")[-1].lower()
        marca = obrig.get(chave_full) or obrig.get(chave_ult) or ""
        suf = f" — {marca}" if marca else ""
        print(f"      {caminho} : {tipo}{suf}    (proxy: vObj.{proxy_path(caminho)})")


def imprimir_ws(info, mostrar_porta=None, full=False):
    print("=" * 72)
    print(f"Pacote: {info['pacote']}")
    if info["descricao"]:
        print(f"Descrição: {info['descricao']}")
    sinc = info["wsdl"].get("Síncrono", "")
    if sinc:
        print(f"WSDL síncrono: {sinc}")
    if info["portas"]:
        marcadas = [f"{p}{' [escrita]' if eh_escrita(p) else ''}" for p in info["portas"]]
        print("Portas: " + ", ".join(marcadas))
    if mostrar_porta:
        alvos = [p for p in info["blocos"] if p.lower() == mostrar_porta.lower()]
    elif full:
        alvos = list(info["blocos"].keys())
    else:
        alvos = [p for p in info["blocos"] if eh_escrita(p)]
    for p in alvos:
        imprimir_porta(info["pacote"], p, info["blocos"][p])
    if not alvos and not full:
        print("  (nenhuma porta de escrita; use --full ou --porta <Nome> para detalhar)")


def gerar_indice(caminho):
    """Emite o índice condensado (reference/webservices.md) no stdout."""
    secoes = [parse_secao(p, l) for p, l in iter_secoes(caminho)]
    secoes.sort(key=lambda i: i["pacote"])
    print("# Índice de Web Services internos da Senior")
    print()
    print(f"> Índice navegável de {len(secoes)} web services do ERP Senior. "
          "Gerado por `scripts/buscar_ws.py --indice`.")
    print("> Detalhes (campos, envelopes, versões por porta): "
          "`python3 scripts/buscar_ws.py <pacote|porta>`.")
    print("> **[escrita]** = porta que cria/atualiza cadastro — prefira ao `INSERT` cru.")
    print()
    print("| Pacote (`interno.<pacote>`) | Portas de escrita (versão) | Demais portas |")
    print("| --- | --- | --- |")
    for info in secoes:
        escrita, outras = [], []
        for p in info["portas"]:
            v = (info["blocos"].get(p) or {}).get("versao")
            if eh_escrita(p):
                escrita.append(f"`{p}`_{v}" if v else f"`{p}`")
            else:
                outras.append(p)
        col_e = ", ".join(escrita) if escrita else "—"
        col_o = ", ".join(outras) if outras else "—"
        print(f"| `{info['pacote']}` | {col_e} | {col_o} |")
    print()
    print(f"_Total: {len(secoes)} web services._")


def main(argv):
    if not argv:
        print(__doc__)
        return 2

    caminho = achar_md()
    if not caminho:
        print("ERRO: scrape não encontrado. Defina SENIOR_WS_MD=/caminho/para/"
              "senior_erp_webservices_completo.md", file=sys.stderr)
        return 1

    if "--indice" in argv:
        gerar_indice(caminho)
        return 0

    full = "--full" in argv
    mostrar_porta = None
    if "--porta" in argv:
        i = argv.index("--porta")
        if i + 1 < len(argv):
            mostrar_porta = argv[i + 1]

    termos, skip = [], False
    for a in argv:
        if skip:
            skip = False
            continue
        if a == "--porta":
            skip = True
            continue
        if a.startswith("--"):
            continue
        termos.append(a)
    if not termos:
        print("Informe um termo de busca (pacote, nome de WS ou porta).")
        return 2
    termo = termos[0].lower()

    achados = 0
    for pacote_bruto, linhas in iter_secoes(caminho):
        # filtro barato antes de parsear a seção inteira
        if termo not in pacote_bruto.lower() and termo not in "\n".join(linhas).lower():
            continue
        info = parse_secao(pacote_bruto, linhas)
        casa_pacote = termo in info["pacote"]
        casa_porta = any(termo in p.lower() for p in info["portas"])
        if not (casa_pacote or casa_porta):
            continue
        alvo = mostrar_porta
        if not alvo and not full and casa_porta and not casa_pacote:
            for p in info["portas"]:
                if termo in p.lower():
                    alvo = p
                    break
        imprimir_ws(info, mostrar_porta=alvo, full=full)
        achados += 1

    if not achados:
        print(f"Nenhum WS/porta contém '{termos[0]}'. (fonte: {caminho})")
        print("Dica: tente o nome da entidade (cliente, produto, fornecedor, pedido, titulo) "
              "ou veja reference/webservices.md.")
        return 0
    print("=" * 72)
    print(f"{achados} web service(s). Fonte: {caminho}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
