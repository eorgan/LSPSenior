#!/usr/bin/env python3
"""Busca tabelas, campos, joins e enums do dicionário de dados do ERP Senior.

Fontes (CSVs exportados da base Oracle, mesma pasta):
    R996TBL — 3120 tabelas: nome (TBLNAM), descrição (DESTBL), chave primária (PKFLDS).
    R996FLD — 53210 campos: FLDNAM, tipo (DATTYP), tamanho (LENFLD), título (SHRTIT),
              descrição (DESFLD), lista de enum (ENUNAM).
    R996LNK — 14887 chaves estrangeiras: TBLSRC.FLDNAM → TBLTRG.FLDRST (campo descrição).
    R996LST — 1223 listas/enums: nome (LSTNAM) e tipo.
    R996LSF — 6771 valores de listas: LSTNAM → KEYNAM (código) / VALKEY (texto exibido).

Uso:
    python3 buscar_tabela.py <termo>              # busca tabelas por nome ou descrição
    python3 buscar_tabela.py <TABELA> --campos    # lista campos (com enum quando houver)
    python3 buscar_tabela.py <TABELA> --joins     # mostra FKs: campo → tabela destino
    python3 buscar_tabela.py --enum <LSTNAM>      # valores possíveis de uma lista/enum
    python3 buscar_tabela.py --indice             # regenera reference/tabelas.md no stdout

Tipos de dados (DATTYP):
    1 = Alfa (texto)   2 = Num (numérico)   3 = Data
    4 = Lóg (lógico)   5 = Memo             8 = Bin (binário)

Localize os CSVs por, nesta ordem:
    1. variável de ambiente  SENIOR_DB_DIR=/caminho/para/pasta/com/os/csvs
    2. caminhos candidatos conhecidos (ver achar_dir()).
"""
import csv
import os
import re
import sys

TIPOS = {"1": "Alfa", "2": "Num", "3": "Data", "4": "Lóg", "5": "Memo", "8": "Bin"}


def achar_dir():
    """Localiza a pasta com os CSVs R996*.csv."""
    env = os.environ.get("SENIOR_DB_DIR")
    if env and os.path.isdir(env):
        return os.path.abspath(env)
    here = os.path.dirname(os.path.abspath(__file__))
    candidatos = [
        os.path.join(here, "db"),
        os.path.join(here, "..", "reference", "db"),
        os.path.expanduser("~/GitHub/WebScraping/output/_consolidado"),
        "/Users/eliezer.organ/GitHub/WebScraping/output/_consolidado",
    ]
    for c in candidatos:
        if os.path.isdir(c) and os.path.isfile(os.path.join(c, "R996TBL.csv")):
            return os.path.abspath(c)
    return None


def _ler(path):
    with open(path, encoding="iso-8859-1", newline="") as f:
        reader = csv.DictReader(f, quotechar="'")
        return list(reader)


def ler_tabelas(diretorio):
    """dict TBLNAM → row (R996TBL)."""
    rows = _ler(os.path.join(diretorio, "R996TBL.csv"))
    return {r["TBLNAM"]: r for r in rows}


def ler_campos(diretorio):
    """dict TBLNAM → [rows] (R996FLD), ordenado por FLDORD."""
    rows = _ler(os.path.join(diretorio, "R996FLD.csv"))
    d = {}
    for r in rows:
        d.setdefault(r["TBLNAM"], []).append(r)
    for v in d.values():
        try:
            v.sort(key=lambda x: int(x.get("FLDORD") or 0))
        except ValueError:
            pass
    return d


def ler_links(diretorio):
    """dict TBLSRC → [(FLDNAM, TBLTRG, FLDRST)] (R996LNK)."""
    path = os.path.join(diretorio, "R996LNK.csv")
    if not os.path.isfile(path):
        return {}
    d = {}
    for r in _ler(path):
        d.setdefault(r["TBLSRC"], []).append(
            (r["FLDNAM"], r["TBLTRG"], r.get("FLDRST", ""))
        )
    return d


def ler_listas(diretorio):
    """dict LSTNAM → [(KEYNAM, VALKEY)] ordenado por KEYORD (R996LSF)."""
    path = os.path.join(diretorio, "R996LSF.csv")
    if not os.path.isfile(path):
        return {}
    rows = _ler(path)
    d = {}
    for r in rows:
        d.setdefault(r["LSTNAM"], []).append(r)
    result = {}
    for lstnam, lst_rows in d.items():
        try:
            lst_rows.sort(key=lambda x: int(x.get("KEYORD") or 0))
        except ValueError:
            pass
        result[lstnam] = [(r["KEYNAM"], r["VALKEY"]) for r in lst_rows]
    return result


def _tipo(r):
    return TIPOS.get(str(r.get("DATTYP", "")).strip(), r.get("DATTYP", ""))


def _tam(r):
    v = str(r.get("LENFLD", "")).strip()
    p = str(r.get("PREFLD", "")).strip()
    if not v or v == "0":
        return ""
    if p and p != "0":
        return f"{v},{p}"
    return v


def imprimir_tabela(tbl, campos=None):
    print("=" * 72)
    print(f"Tabela   : {tbl['TBLNAM']}")
    print(f"Descrição: {tbl['DESTBL']}")
    pk = tbl.get("PKFLDS", "").strip()
    if pk:
        print(f"PK       : {pk}")
    if campos is not None:
        if not campos:
            print("(nenhum campo encontrado)")
        else:
            print(f"\n  {'Campo':<20} {'Tipo':<6} {'Tam':<7} {'Título':<22} Descrição / Enum")
            print(f"  {'-'*20} {'-'*6} {'-'*7} {'-'*22} {'-'*35}")
            for r in campos:
                tip = _tipo(r)
                tam = _tam(r)
                tit = r.get("SHRTIT", "").strip()
                des = r.get("DESFLD", "").strip()
                enu = r.get("ENUNAM", "").strip()
                sufixo = f"  [enum: {enu}]" if enu else ""
                print(f"  {r['FLDNAM']:<20} {tip:<6} {tam:<7} {tit:<22} {des}{sufixo}")


def imprimir_joins(tbl, links):
    """Exibe as chaves estrangeiras de uma tabela (R996LNK)."""
    print("=" * 72)
    print(f"Tabela   : {tbl['TBLNAM']}")
    print(f"Descrição: {tbl['DESTBL']}")
    fks = links.get(tbl["TBLNAM"], [])
    if not fks:
        print("\n(nenhuma FK registrada em R996LNK para esta tabela)")
    else:
        print(f"\n  {'Campo FK':<20} {'→ Tabela':<16} {'Campo descrição'}")
        print(f"  {'-'*20} {'-'*16} {'-'*20}")
        for fldnam, tbltrg, fldrst in sorted(fks, key=lambda x: x[0]):
            dest = fldrst if fldrst else "(—)"
            print(f"  {fldnam:<20} {tbltrg:<16} {dest}")
        print(f"\n  JOIN típico: {tbl['TBLNAM']}.CodXxx = <TBLTRG>.CodXxx")
        print("  Use --campos para ver o tipo/tam de cada campo FK.")


def imprimir_enum(lstnam, listas):
    """Exibe os valores de uma lista/enum (R996LSF)."""
    print("=" * 72)
    print(f"Lista: {lstnam}")
    valores = listas.get(lstnam)
    if valores is None:
        # busca case-insensitive
        key = next((k for k in listas if k.upper() == lstnam.upper()), None)
        if key:
            lstnam = key
            valores = listas[key]
    if not valores:
        print(f"(lista '{lstnam}' não encontrada em R996LSF)")
        print("Dica: o nome da lista aparece na coluna ENUNAM em --campos.")
    else:
        print(f"\n  {'Código':<12} Texto exibido")
        print(f"  {'-'*12} {'-'*35}")
        for keynam, valkey in valores:
            print(f"  {keynam:<12} {valkey}")
    print("=" * 72)


def _modulo(destbl):
    """Extrai o nome do módulo da descrição (primeiro segmento antes de ' - ')."""
    parts = destbl.split(" - ")
    m = parts[0].strip() if len(parts) > 1 else ""
    m = re.sub(r"^C\.\s*Receber$", "C.Receber", m)
    m = re.sub(r"^C\.\s*Pagar$", "C.Pagar", m)
    m = re.sub(r"^Integrações?$", "Integrações", m)
    m = re.sub(r"^Tabelas?$", "Tabelas", m)
    return m or "(sem módulo)"


def gerar_indice(diretorio):
    """Emite reference/tabelas.md no stdout."""
    tabelas = ler_tabelas(diretorio)
    grupos = {}
    for tbl in tabelas.values():
        mod = _modulo(tbl["DESTBL"])
        grupos.setdefault(mod, []).append(tbl)

    total = len(tabelas)
    print("# Índice de Tabelas do Dicionário de Dados Senior (R996TBL)")
    print()
    print(f"> Índice navegável de {total} tabelas nativas do ERP Senior.")
    print("> Gerado a partir de R996TBL.csv exportado da base Oracle.")
    print("> Comandos úteis:")
    print(">   `python3 scripts/buscar_tabela.py <termo>`              — busca por nome/descrição")
    print(">   `python3 scripts/buscar_tabela.py <TABELA> --campos`   — campos com tipo e enum")
    print(">   `python3 scripts/buscar_tabela.py <TABELA> --joins`    — chaves estrangeiras")
    print(">   `python3 scripts/buscar_tabela.py --enum <LSTNAM>`     — valores de uma lista")
    print()

    for mod in sorted(grupos):
        tbls_mod = sorted(grupos[mod], key=lambda x: x["TBLNAM"])
        print(f"## {mod}")
        print()
        print("| Tabela | Descrição | PK |")
        print("| --- | --- | --- |")
        for t in tbls_mod:
            desc = t["DESTBL"].replace("|", "\\|")
            desc_short = re.sub(r"^[^-]+ - ", "", desc, count=1).strip() or desc
            pk = t.get("PKFLDS", "").strip().replace("|", "\\|")
            print(f"| `{t['TBLNAM']}` | {desc_short} | {pk} |")
        print()

    print(f"_Total: {total} tabelas._")


def _resolver_tabela(termo, tabelas):
    """Resolve nome de tabela (case-insensitive). Retorna row ou None."""
    tbl = tabelas.get(termo.upper())
    if not tbl:
        tbl = next((v for k, v in tabelas.items() if k.upper() == termo.upper()), None)
    return tbl


def main(argv):
    if not argv:
        print(__doc__)
        return 2

    diretorio = achar_dir()
    if not diretorio:
        print(
            "ERRO: pasta com R996TBL.csv / R996FLD.csv não encontrada.\n"
            "Defina SENIOR_DB_DIR=/caminho/para/a/pasta",
            file=sys.stderr,
        )
        return 1

    if "--indice" in argv:
        gerar_indice(diretorio)
        return 0

    # --enum <LSTNAM>
    if "--enum" in argv:
        idx = argv.index("--enum")
        lst_args = [a for a in argv[idx + 1:] if not a.startswith("--")]
        if not lst_args:
            print("Uso: buscar_tabela.py --enum <LSTNAM>")
            return 2
        listas = ler_listas(diretorio)
        for lstnam in lst_args:
            imprimir_enum(lstnam, listas)
        print(f"Fonte: {diretorio}")
        return 0

    modo_campos = "--campos" in argv
    modo_joins = "--joins" in argv
    termos = [a for a in argv if not a.startswith("--")]
    if not termos:
        print("Informe um termo de busca ou nome de tabela.")
        return 2

    termo = termos[0]

    if modo_joins:
        tabelas = ler_tabelas(diretorio)
        tbl = _resolver_tabela(termo, tabelas)
        if not tbl:
            print(f"Tabela '{termo}' não encontrada em R996TBL.")
            print("Dica: use `buscar_tabela.py <termo>` para encontrar o nome exato.")
            return 1
        links = ler_links(diretorio)
        imprimir_joins(tbl, links)
        print("=" * 72)
        print(f"Fonte: {diretorio}")
        return 0

    if modo_campos:
        tabelas = ler_tabelas(diretorio)
        tbl = _resolver_tabela(termo, tabelas)
        if not tbl:
            print(f"Tabela '{termo}' não encontrada em R996TBL.")
            print("Dica: use `buscar_tabela.py <termo>` para encontrar o nome exato.")
            return 1
        campos_dict = ler_campos(diretorio)
        campos = campos_dict.get(tbl["TBLNAM"], [])
        imprimir_tabela(tbl, campos)
        print("=" * 72)
        print(f"{len(campos)} campo(s). Fonte: {diretorio}")
        return 0

    # busca por nome/descrição de tabela
    termos_lower = [t.lower() for t in termos]
    tabelas = ler_tabelas(diretorio)
    achados = 0
    for tbl in sorted(tabelas.values(), key=lambda x: x["TBLNAM"]):
        busca = (tbl["TBLNAM"] + " " + tbl["DESTBL"]).lower()
        if all(t in busca for t in termos_lower):
            imprimir_tabela(tbl)
            achados += 1
            if achados >= 50:
                print("\n... (mais de 50 resultados; refine o termo)")
                break
    if not achados:
        print(f"Nenhuma tabela encontrada para '{' '.join(termos)}'.")
        print("Dica: busque por trecho da descrição (ex.: 'nota fiscal entrada')")
        print("      ou pelo prefixo do nome (ex.: 'E028').")
        print("      Veja reference/tabelas.md para o índice completo.")
        return 0
    print("=" * 72)
    print(f"{achados} tabela(s). Use --campos / --joins para mais detalhes. Fonte: {diretorio}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
