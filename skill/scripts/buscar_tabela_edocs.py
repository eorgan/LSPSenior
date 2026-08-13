#!/usr/bin/env python3
"""Busca tabelas e campos do dicionário de dados do eDocs (base separada do ERP).

Fonte: reference/tabelas-edocs.md — 344 tabelas exportadas do GSBD do SDE
(versão 5.08.16.90). Tabelas com prefixo `Nxxx` (por módulo/documento eletrônico)
e as tabelas legadas da camada de interface (`INTERF_*`, `LOTE_*`, `EVENTO_NFE`…).

Uso:
    python3 buscar_tabela_edocs.py <termo> [termo...]   # busca por nome ou descrição
    python3 buscar_tabela_edocs.py <TABELA> --campos    # campos (tipos por SGBD), FKs, índices
    python3 buscar_tabela_edocs.py --modulo N130        # lista as tabelas de um módulo
    python3 buscar_tabela_edocs.py --modulos            # índice de módulos

Observações:
    - O detalhamento campo a campo existe hoje para os módulos N130 (NF-e),
      N140 (NFS-e) e N220 (GNRE). Para as demais tabelas, `--campos` mostra o
      resumo do índice (nº de campos, FKs, índices, versão de criação).
    - eDocs é um banco DIFERENTE do ERP Senior. Para tabelas `E0*`/`R9*` use
      `buscar_tabela.py`.
"""
import os
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
REF = os.path.join(AQUI, "..", "reference", "tabelas-edocs.md")


def achar_ref():
    env = os.environ.get("EDOCS_DICT")
    if env and os.path.isfile(env):
        return os.path.abspath(env)
    if os.path.isfile(REF):
        return os.path.abspath(REF)
    return None


def _linhas(path):
    with open(path, encoding="utf-8") as f:
        return f.read().splitlines()


def parse(path):
    """Lê o markdown e devolve (tabelas, modulos, detalhes).

    tabelas: dict NOME -> {nome, desc, campos, fks, idx, versao, modulo}
    modulos: lista [(titulo, [nomes de tabela])] na ordem do arquivo
    detalhes: dict NOME -> {desc, versao, campos: [(campo, nulo, ora, mss, pg, desc)],
                            fks: str, indices: str}
    """
    tabelas, modulos, detalhes = {}, [], {}
    modulo_atual = None
    secao_campos = False           # dentro de "# Detalhamento de Campos"
    det_atual = None

    for ln in _linhas(path):
        if ln.startswith("# Detalhamento de Campos"):
            secao_campos = True
            det_atual = None
            continue

        if ln.startswith("## "):
            titulo = ln[3:].strip()
            if not secao_campos and titulo not in ("Índice de Módulos", "Observações"):
                modulo_atual = titulo
                modulos.append((titulo, []))
            continue

        if ln.startswith("### ") and secao_campos:
            cab = ln[4:].strip()
            nome, _, desc = cab.partition("—")
            det_atual = {
                "nome": nome.strip(),
                "desc": desc.strip(),
                "versao": "",
                "campos": [],
                "fks": "",
                "indices": "",
            }
            detalhes[det_atual["nome"].upper()] = det_atual
            continue

        if secao_campos and det_atual is not None:
            if ln.startswith("Versão de criação:"):
                det_atual["versao"] = ln.split(":", 1)[1].strip()
            elif ln.startswith("**FKs:**"):
                det_atual["fks"] = ln.split("**FKs:**", 1)[1].strip()
            elif ln.startswith("**Índices:**"):
                det_atual["indices"] = ln.split("**Índices:**", 1)[1].strip()
            elif ln.startswith("|"):
                cels = [c.strip() for c in ln.strip().strip("|").split("|")]
                if len(cels) == 6 and cels[0] not in ("Campo",) and not set(cels[0]) <= set("-: "):
                    det_atual["campos"].append(tuple(cels))
            continue

        # linhas do índice por módulo
        if modulo_atual and ln.startswith("|"):
            cels = [c.strip() for c in ln.strip().strip("|").split("|")]
            if len(cels) != 6:
                continue
            if cels[0] in ("Tabela", "Prefixo") or set(cels[0]) <= set("-: "):
                continue
            nome = cels[0].strip("`")
            tabelas[nome.upper()] = {
                "nome": nome,
                "desc": cels[1],
                "campos": cels[2],
                "fks": cels[3],
                "idx": cels[4],
                "versao": cels[5],
                "modulo": modulo_atual,
            }
            modulos[-1][1].append(nome)

    return tabelas, modulos, detalhes


def imprimir_resumo(t):
    print("=" * 76)
    print(f"Tabela   : {t['nome']}")
    print(f"Descrição: {t['desc']}")
    print(f"Módulo   : {t['modulo']}")
    print(f"Campos: {t['campos']}  FKs: {t['fks']}  Índices: {t['idx']}  Criada em: {t['versao']}")


def imprimir_campos(det, t=None):
    print("=" * 76)
    print(f"Tabela   : {det['nome']}")
    print(f"Descrição: {det['desc']}")
    if t:
        print(f"Módulo   : {t['modulo']}")
    if det["versao"]:
        print(f"Versão de criação: {det['versao']}")
    print()
    larg = max([len(c[0]) for c in det["campos"]] + [8])
    print(f"  {'Campo':<{larg}} {'Nulo':<9} {'Oracle':<20} {'SQL Server':<16} Descrição")
    print(f"  {'-'*larg} {'-'*9} {'-'*20} {'-'*16} {'-'*30}")
    for campo, nulo, ora, mss, _pg, desc in det["campos"]:
        print(f"  {campo.replace('`', ''):<{larg}} {nulo:<9} {ora:<20} {mss:<16} {desc}")
    if det["fks"]:
        print(f"\n  FKs     : {det['fks']}")
    if det["indices"]:
        print(f"  Índices : {det['indices']}")


def main(argv):
    if not argv:
        print(__doc__)
        return 2

    path = achar_ref()
    if not path:
        print(
            "ERRO: reference/tabelas-edocs.md não encontrado.\n"
            "Defina EDOCS_DICT=/caminho/para/tabelas-edocs.md",
            file=sys.stderr,
        )
        return 1

    tabelas, modulos, detalhes = parse(path)

    if "--modulos" in argv:
        print(f"{'Módulo':<62} Tabelas")
        print(f"{'-'*62} -------")
        for titulo, nomes in modulos:
            print(f"{titulo:<62} {len(nomes)}")
        print(f"\nTotal: {len(tabelas)} tabelas. Fonte: {path}")
        return 0

    if "--modulo" in argv:
        i = argv.index("--modulo")
        alvo = argv[i + 1] if len(argv) > i + 1 else ""
        if not alvo:
            print("Uso: buscar_tabela_edocs.py --modulo <prefixo|termo>  (ex.: N130)")
            return 2
        alvo_l = alvo.lower()
        achou = False
        for titulo, nomes in modulos:
            if alvo_l in titulo.lower():
                print("=" * 76)
                print(titulo)
                print("=" * 76)
                for n in nomes:
                    t = tabelas[n.upper()]
                    marca = " *" if n.upper() in detalhes else "  "
                    print(f"{marca}{t['nome']:<24} {t['desc']}")
                achou = True
        if not achou:
            print(f"Módulo '{alvo}' não encontrado. Use --modulos para ver a lista.")
            return 1
        print("\n(* = tem detalhamento campo a campo; use --campos)")
        return 0

    modo_campos = "--campos" in argv
    termos = [a for a in argv if not a.startswith("--")]
    if not termos:
        print("Informe um termo de busca ou nome de tabela.")
        return 2

    if modo_campos:
        nome = termos[0].upper()
        det = detalhes.get(nome)
        t = tabelas.get(nome)
        if det:
            imprimir_campos(det, t)
            print("=" * 76)
            print(f"{len(det['campos'])} campo(s). Fonte: {path}")
            return 0
        if t:
            imprimir_resumo(t)
            print("=" * 76)
            print(
                "Sem detalhamento campo a campo neste dicionário "
                "(hoje só N130, N140 e N220).\n"
                "Para os campos exatos, consulte o GSBD do SDE."
            )
            return 0
        print(f"Tabela '{termos[0]}' não encontrada no dicionário do eDocs.")
        print("Dica: `buscar_tabela_edocs.py <termo>` para achar o nome exato,")
        print("      ou `buscar_tabela.py` se a tabela for do ERP (E0*/R9*).")
        return 1

    termos_l = [t.lower() for t in termos]
    achados = 0
    for nome in sorted(tabelas):
        t = tabelas[nome]
        busca = f"{t['nome']} {t['desc']} {t['modulo']}".lower()
        if all(x in busca for x in termos_l):
            imprimir_resumo(t)
            if nome in detalhes:
                print("(tem detalhamento campo a campo — use --campos)")
            achados += 1
            if achados >= 50:
                print("\n... (mais de 50 resultados; refine o termo)")
                break
    if not achados:
        print(f"Nenhuma tabela do eDocs encontrada para '{' '.join(termos)}'.")
        print("Dica: busque pelo prefixo do módulo (N130, N140…) ou por parte da descrição.")
        print("      Tabelas do ERP (E0*/R9*) estão em buscar_tabela.py.")
        return 0
    print("=" * 76)
    print(f"{achados} tabela(s). Fonte: {path}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
