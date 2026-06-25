#!/usr/bin/env python3
"""Busca Identificadores de Regras da Senior no scrape (lido sob demanda).

Identificador de Regra = o PONTO DE ACOPLAMENTO onde uma regra LSP customizada é
acionada pelo ERP. O sistema, em pontos do código-fonte, consulta a tabela E098REG;
se o identificador estiver cadastrado e ATIVO (SitReg='A'), executa a regra vinculada,
passando variáveis de contexto. Cadastro/ativação: tela F098REG, por empresa.

Uso:
    python3 buscar_identificador.py <termo>         # por código, módulo, tela ou finalidade
    python3 buscar_identificador.py <termo> --full  # mostra também o exemplo de Regra
    python3 buscar_identificador.py --indice        # regenera reference/identificadores.md no stdout

Para cada identificador encontrado mostra: módulo, finalidade, tela, transação e a
tabela de variáveis SEPARADA em ENTRADA (Retorna Valor = N — você lê) e SAÍDA
(Retorna Valor = S — sua regra preenche). Com --full, imprime também o exemplo de Regra.

Sufixo `<9>` no nome de variável = grade multi-registro: repita o campo com 1, 2, 3...
(ex.: ChaACodCmp1, ChaACodCmp2). Pare na primeira numeração ausente.

A fonte é a pasta `identificadores_regras/` do scrape (3157 fichas .md, uma por
identificador). Localize-a por, nesta ordem:
    1. variável de ambiente  SENIOR_IR_DIR=/caminho/para/identificadores_regras
    2. caminhos candidatos conhecidos (ver achar_dir()).
"""
import os
import re
import sys

# Rótulos em negrito das fichas (com variações de grafia encontradas no scrape).
CAMPOS = {
    "modulo": ("Módulo", "Modulo"),
    "finalidade": ("Finalidade",),
    "caracteristicas": ("Características", "Caracteristicas", "Característica"),
    "tela": ("Telas", "Tela", "TelaS"),
    "transacao": ("Transação", "Transacao"),
}


def achar_dir():
    """Localiza a pasta identificadores_regras/: env var, depois candidatos."""
    env = os.environ.get("SENIOR_IR_DIR")
    if env and os.path.isdir(env):
        return os.path.abspath(env)
    here = os.path.dirname(os.path.abspath(__file__))
    candidatos = [
        os.path.join(here, "identificadores_regras"),          # se algum dia bundlar
        os.path.join(here, "..", "reference", "identificadores_regras"),
        os.path.expanduser(
            "~/GitHub/WebScraping/output/documentacao.senior.com.br/"
            "gestaoempresarialerp/5.10.4/identificadores_regras"
        ),
        "/Users/eliezer.organ/GitHub/WebScraping/output/documentacao.senior.com.br/"
        "gestaoempresarialerp/5.10.4/identificadores_regras",
    ]
    for c in candidatos:
        if os.path.isdir(c):
            return os.path.abspath(c)
    return None


def limpar(texto):
    """Remove escapes/links de markdown do scrape."""
    texto = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", texto)  # [txt](link) -> txt
    texto = texto.replace("\\_", "_").replace("\\*", "*")
    return texto.strip()


def _normaliza_codigo(texto):
    """'CPA\\_501INTHI01' / 'IMP–690FORNF01' / 'GER- 000INWMS04' -> 'CPA-501INTHI01'.

    Devolve None se o texto não é um código de identificador (ex.: 'Identificador
    de Regra', que tem mais de um token).
    """
    s = texto.replace("\\_", "_").strip()
    m = re.match(r"^([A-Za-z]{2,4})\s*[-–_]\s*([A-Za-z0-9]+)\s*$", s)
    if m:
        return f"{m.group(1).upper()}-{m.group(2).upper()}"
    return None


def ler_ficha(caminho):
    """Parseia uma ficha .md de identificador num dict estruturado."""
    with open(caminho, encoding="utf-8") as f:
        linhas = f.read().splitlines()

    info = {
        "codigo": "", "modulo": "", "finalidade": "", "caracteristicas": "",
        "tela": "", "transacao": "", "regra": [], "variaveis": [],
    }

    # código: primeiro heading (qualquer nível) no formato MOD-CODE. O scrape varia:
    # '## CHA-900BACMC01', '#### CPA\\_501INTHI01' (underscore), '# IMP–690FORNF01'
    # (en-dash), 'CPA - 510DDAAT01' (espaços). Fallback: derivar do nome do arquivo.
    for ln in linhas:
        m = re.match(r"#{1,6}\s+(.+?)\s*$", ln)
        if m:
            cod = _normaliza_codigo(m.group(1))
            if cod:
                info["codigo"] = cod
                break
    if not info["codigo"]:
        base = os.path.basename(caminho)[:-3]  # sem '.md'
        m = re.match(r"^([a-z]{2,4})[-_]([a-z0-9]+)$", base)
        if m and not base.startswith("particularidades"):
            info["codigo"] = f"{m.group(1).upper()}-{m.group(2).upper()}"

    # campos em negrito **Rótulo:** valor  (valor pode seguir na mesma linha)
    rotulo_de = {}
    for chave, variantes in CAMPOS.items():
        for v in variantes:
            rotulo_de[v.lower()] = chave
    for ln in linhas:
        m = re.match(r"\*\*([^:*]+):\*\*\s*(.*)$", ln)
        if m:
            rot = m.group(1).strip().lower()
            chave = rotulo_de.get(rot)
            if chave and not info[chave]:
                info[chave] = limpar(m.group(2))

    # Regra: bloco entre '**Regra:**' e '**Variáveis' / 'Atenção' / fim
    capt = False
    for ln in linhas:
        s = ln.strip()
        if re.match(r"\*\*Regra:?\*\*", s) or re.match(r"\*\*Exemplo de regra:?\*\*", s):
            capt = True
            continue
        if capt:
            if (re.match(r"\*\*Vari[aá]ve", s) or s == "Atenção"
                    or re.match(r"\*\*Vari[aá]veis", s)):
                capt = False
                continue
            info["regra"].append(ln)
    # tira linhas em branco das pontas
    while info["regra"] and not info["regra"][0].strip():
        info["regra"].pop(0)
    while info["regra"] and not info["regra"][-1].strip():
        info["regra"].pop()

    info["variaveis"] = parse_tabela_variaveis(linhas)
    return info


def parse_tabela_variaveis(linhas):
    """Extrai variáveis da tabela. Devolve lista de dicts {nome, tipo, obs, retorna}.

    O cabeçalho varia ('Retorna Valor'/'Retorna valor'/ausente; 'Observações'/
    'Observação'/'Descrição'). Localiza colunas por nome, com tolerância.
    """
    saida = []
    header_idx = None
    cols = []
    for i, ln in enumerate(linhas):
        s = ln.strip()
        if s.startswith("|") and re.search(r"\|\s*Nome\s*\|", s, re.IGNORECASE):
            cols = [c.strip().lower() for c in s.strip("|").split("|")]
            header_idx = i
            break
    if header_idx is None:
        return saida

    def idx(*nomes):
        for n in nomes:
            if n in cols:
                return cols.index(n)
        return None

    i_nome = idx("nome") or 0
    i_tipo = idx("tipo")
    i_obs = idx("observações", "observação", "observacao", "descrição", "descricao")
    i_ret = idx("retorna valor", "retorno", "retorna")

    for ln in linhas[header_idx + 1:]:
        s = ln.strip()
        if not s.startswith("|"):
            break
        celulas = [c.strip() for c in s.strip("|").split("|")]
        if not celulas or set("".join(celulas)) <= set("-: "):
            continue  # separador '--- | ---'

        def cel(j):
            return celulas[j] if (j is not None and j < len(celulas)) else ""

        nome = limpar(cel(i_nome))
        if not nome or nome.lower() == "nome":
            continue
        saida.append({
            "nome": nome,
            "tipo": cel(i_tipo),
            "obs": limpar(cel(i_obs)),
            "retorna": cel(i_ret).strip().upper(),
        })
    return saida


def imprimir(info, full=False):
    print("=" * 72)
    print(f"Identificador: {info['codigo']}")
    if info["modulo"]:
        print(f"Módulo: {info['modulo']}")
    if info["finalidade"]:
        print(f"Finalidade: {info['finalidade']}")
    if info["tela"]:
        print(f"Tela: {info['tela']}")
    if info["transacao"]:
        print(f"Transação: {info['transacao']}")
    if info["caracteristicas"]:
        print(f"Características: {info['caracteristicas']}")

    entrada = [v for v in info["variaveis"] if v["retorna"] not in ("S", "SIM")]
    saida = [v for v in info["variaveis"] if v["retorna"] in ("S", "SIM")]
    if not info["variaveis"]:
        print("\n(sem tabela de variáveis — identificador funciona como parâmetro/flag;"
              " ative em F098REG, sem regra vinculada)")
    else:
        if entrada:
            print("\n  ENTRADA (você lê — contexto que o ERP fornece):")
            for v in entrada:
                t = f" [{v['tipo']}]" if v["tipo"] else ""
                print(f"    • {v['nome']}{t} — {v['obs']}")
        if saida:
            print("\n  SAÍDA (sua regra preenche para devolver ao ERP):")
            for v in saida:
                t = f" [{v['tipo']}]" if v["tipo"] else ""
                print(f"    • {v['nome']}{t} — {v['obs']}")
    if full and info["regra"]:
        print("\n  Exemplo de Regra (LSP):")
        for ln in info["regra"]:
            print(f"    {ln}")


def iter_fichas(diretorio):
    for nome in sorted(os.listdir(diretorio)):
        if not nome.endswith(".md") or nome.startswith("indice"):
            continue
        yield os.path.join(diretorio, nome)


def gerar_indice(diretorio):
    """Emite o índice condensado (reference/identificadores.md) no stdout."""
    fichas = []
    for caminho in iter_fichas(diretorio):
        info = ler_ficha(caminho)
        if info["codigo"]:
            fichas.append(info)
    # agrupa por prefixo de módulo (CHA, VEN...) usando o campo Módulo
    grupos = {}
    nomes_mod = {}
    for info in fichas:
        pref = info["codigo"].split("-")[0].upper()
        grupos.setdefault(pref, []).append(info)
        if pref not in nomes_mod and info["modulo"]:
            nomes_mod[pref] = info["modulo"].rstrip(".")

    print("# Índice de Identificadores de Regras da Senior")
    print()
    print(f"> Índice navegável de {len(fichas)} identificadores de regras do ERP Senior. "
          "Gerado por `scripts/buscar_identificador.py --indice`.")
    print("> Identificador de Regra = ponto onde o ERP aciona sua regra LSP (consulta "
          "**E098REG**; ativa em **F098REG**, `SitReg='A'`, por empresa).")
    print("> Detalhes (variáveis de ENTRADA/SAÍDA + exemplo de regra): "
          "`python3 scripts/buscar_identificador.py <código|tela|termo> [--full]`.")
    print()
    for pref in sorted(grupos):
        titulo = nomes_mod.get(pref, pref)
        print(f"## {titulo}")
        print()
        print("| Identificador | Tela | Finalidade (resumo) |")
        print("| --- | --- | --- |")
        for info in sorted(grupos[pref], key=lambda x: x["codigo"]):
            fin = re.sub(r"\s+", " ", info["finalidade"]).strip()
            if len(fin) > 140:
                fin = fin[:137] + "..."
            fin = fin.replace("|", "\\|")
            tela = info["tela"].replace("|", "\\|") or "—"
            print(f"| `{info['codigo']}` | {tela} | {fin} |")
        print()
    print(f"_Total: {len(fichas)} identificadores de regras._")


def main(argv):
    if not argv:
        print(__doc__)
        return 2

    diretorio = achar_dir()
    if not diretorio:
        print("ERRO: pasta de identificadores não encontrada. Defina "
              "SENIOR_IR_DIR=/caminho/para/identificadores_regras", file=sys.stderr)
        return 1

    if "--indice" in argv:
        gerar_indice(diretorio)
        return 0

    full = "--full" in argv
    termos = [a for a in argv if not a.startswith("--")]
    if not termos:
        print("Informe um termo de busca (código, módulo, tela ou finalidade).")
        return 2
    termo = termos[0].lower()

    achados = 0
    for caminho in iter_fichas(diretorio):
        nome_arq = os.path.basename(caminho)
        # filtro barato pelo nome do arquivo (código) antes de abrir
        casa_arq = termo in nome_arq.lower().replace("_", "-").replace(".md", "")
        if not casa_arq:
            with open(caminho, encoding="utf-8") as f:
                conteudo = f.read().lower()
            if termo not in conteudo:
                continue
        info = ler_ficha(caminho)
        imprimir(info, full=full)
        achados += 1
        if achados >= 40:
            print("\n... (mais de 40 resultados; refine o termo)")
            break

    if not achados:
        print(f"Nenhum identificador contém '{termos[0]}'. (fonte: {diretorio})")
        print("Dica: tente o código (ex.: CHA-900BACMC01), a tela (F900BAC) ou "
              "um termo da finalidade. Veja reference/identificadores.md.")
        return 0
    print("=" * 72)
    print(f"{achados} identificador(es). Fonte: {diretorio}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
