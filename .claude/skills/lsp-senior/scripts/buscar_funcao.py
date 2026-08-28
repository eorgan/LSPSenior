#!/usr/bin/env python3
"""Busca funções no catálogo functions.json da LSP (fonte da verdade do projeto).

Uso:
    python3 buscar_funcao.py <termo>            # busca por nome (substring, case-insensitive)
    python3 buscar_funcao.py <termo> --full     # inclui descrição completa e exemplo de uso
    python3 buscar_funcao.py --listar SQL_      # lista nomes que contêm o prefixo, sem detalhe

Sempre confira a coluna `direction` de cada parâmetro:
    in  = você fornece o valor
    out = parâmetro de saída (marcado com `End`/`end`) — é por aqui que a função "retorna".

O functions.json cobre 670 funções, INCLUINDO as APIs SQL_* (cursores, categoria sql),
Http* (requisições, categoria http) e Ftp* (transferência de arquivos, categoria ftp).
Use este script para confirmar a assinatura de qualquer uma; reference/quick-reference.md
traz os padrões de uso prontos.
"""
import json
import os
import re
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


def exemplo_do_doc(catalogo, nome):
    """Exemplo de uso da função, lido de docs/functions/<Nome>.md (bundle da skill).

    O campo `code` do catálogo é o *código* da função no ERP (ex: 895), não um exemplo;
    os exemplos vivem nas docs, ao lado do catálogo ou na pasta da skill.
    """
    base = os.path.dirname(catalogo)
    here = os.path.dirname(os.path.abspath(__file__))
    for docs in (os.path.join(base, "docs", "functions"),
                 os.path.join(here, "..", "docs", "functions")):
        caminho = os.path.join(docs, f"{nome}.md")
        if not os.path.isfile(caminho):
            continue
        with open(caminho, encoding="utf-8") as f:
            texto = f.read()
        m = re.search(r"## Exemplo de Uso\s*\n+```lspt\n(.*?)\n```", texto, re.S)
        if m and "Adicione exemplo de uso aqui" not in m.group(1):
            return m.group(1)
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
        print("Dica: SQL_*, Http* e Ftp* já estão no functions.json; veja também reference/quick-reference.md para padrões prontos.")
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
        if full:
            exemplo = exemplo_do_doc(caminho, n)
            if exemplo:
                print("  Exemplo:")
                for linha in exemplo.splitlines():
                    print(f"    {linha}")
    print("=" * 72)
    print(f"{len(nomes)} resultado(s). Catálogo: {caminho}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
