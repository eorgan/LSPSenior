#!/usr/bin/env python3
"""Busca funções no catálogo functions.json da LSP (fonte da verdade do projeto).

Uso:
    python3 buscar_funcao.py <termo>            # busca por nome (substring, case-insensitive)
    python3 buscar_funcao.py <termo> --full     # inclui descrição completa e código de exemplo
    python3 buscar_funcao.py --listar SQL_      # lista nomes que contêm o prefixo, sem detalhe

Sempre confira a coluna `direction` de cada parâmetro:
    in  = você fornece o valor
    out = parâmetro de saída (marcado com `End`/`end`) — é por aqui que a função "retorna".

ATENÇÃO: o functions.json cobre ~600 funções, mas NÃO inclui as APIs SQL_* (cursores)
nem Http* (requisições). Para essas, veja reference/quick-reference.md (nomes validados
nos exemplos reais .lspt) ou a documentação oficial da Senior.
"""
import json
import os
import sys


def achar_catalogo():
    """Procura functions.json: na pasta da skill, subindo até a raiz do projeto."""
    here = os.path.dirname(os.path.abspath(__file__))
    candidatos = [
        os.path.join(here, "functions.json"),              # bundle dentro da skill
        os.path.join(here, "..", "functions.json"),        # pasta da skill
    ]
    # sobe a árvore procurando functions.json (raiz do projeto)
    d = here
    for _ in range(8):
        candidatos.append(os.path.join(d, "functions.json"))
        d = os.path.dirname(d)
    for c in candidatos:
        if os.path.isfile(c):
            return os.path.abspath(c)
    return None


def main(argv):
    if not argv:
        print(__doc__)
        return 2

    full = "--full" in argv
    listar = "--listar" in argv
    termos = [a for a in argv if not a.startswith("--")]
    if not termos:
        print("Informe um termo de busca.")
        return 2
    termo = termos[0].lower()

    caminho = achar_catalogo()
    if not caminho:
        print("ERRO: functions.json não encontrado (procurei na skill e na raiz do projeto).")
        return 1

    with open(caminho, encoding="utf-8") as f:
        dados = json.load(f)

    nomes = sorted(k for k in dados if termo in k.lower())
    if not nomes:
        print(f"Nenhuma função contém '{termos[0]}'. (catálogo: {caminho})")
        print("Lembre: SQL_* e Http* NÃO estão no functions.json — veja reference/quick-reference.md.")
        return 0

    if listar:
        for n in nomes:
            print(n)
        print(f"\n{len(nomes)} função(ões). Catálogo: {caminho}")
        return 0

    for n in nomes:
        fn = dados[n]
        print("=" * 72)
        print(f"{n}")
        print(f"  {fn.get('signature', '(sem assinatura)')}")
        params = fn.get("params") or []
        if params:
            print("  Parâmetros:")
            for p in params:
                seta = "→ SAÍDA" if p.get("direction") == "out" else "  entrada"
                print(f"    [{seta}] {p.get('name','?')} : {p.get('type','?')}"
                      + (f"  — {p['description']}" if p.get("description") else ""))
        rets = fn.get("returns") or []
        if rets:
            print(f"  Retorna: {rets}")
        desc = (fn.get("description") or "").strip()
        if desc:
            if not full and len(desc) > 280:
                desc = desc[:280] + " […] (use --full)"
            print(f"  Descrição: {desc}")
        if full and fn.get("code"):
            print("  Exemplo:")
            for linha in str(fn["code"]).splitlines():
                print(f"    {linha}")
    print("=" * 72)
    print(f"{len(nomes)} resultado(s). Catálogo: {caminho}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
