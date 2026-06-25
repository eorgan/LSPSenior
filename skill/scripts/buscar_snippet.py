#!/usr/bin/env python3
"""Busca snippets LSP por keyword, categoria ou tipo."""

import os
import re
import sys
import argparse

SNIPPETS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                            '..', 'reference', 'snippets')

HEADER = re.compile(
    r'^## (BLOCO|PADRÃO): (.+?)\n'
    r'\*\*Uso:\*\* (.+?)\n'
    r'\*\*Tags:\*\* (.+?)\n'
    r'\n```lspt\n(.*?)```',
    re.MULTILINE | re.DOTALL
)


def _norm_tipo(tipo_str):
    return 'padrao' if tipo_str.upper() == 'PADRÃO' else 'bloco'


def parse_snippets(filepath):
    categoria = os.path.splitext(os.path.basename(filepath))[0]
    with open(filepath, encoding='utf-8') as f:
        content = f.read()
    snippets = []
    for m in HEADER.finditer(content):
        tipo_raw, nome, uso, tags_str, codigo = m.groups()
        snippets.append({
            'tipo': _norm_tipo(tipo_raw),
            'tipo_display': tipo_raw,
            'nome': nome.strip(),
            'uso': uso.strip(),
            'tags': [t.strip() for t in tags_str.split(',')],
            'codigo': codigo.strip(),
            'categoria': categoria,
        })
    return snippets


def load_all():
    if not os.path.isdir(SNIPPETS_DIR):
        print(f'Diretório não encontrado: {SNIPPETS_DIR}', file=sys.stderr)
        sys.exit(1)
    result = []
    for fname in sorted(os.listdir(SNIPPETS_DIR)):
        if fname.endswith('.md') and not fname.startswith('_'):
            result.extend(parse_snippets(os.path.join(SNIPPETS_DIR, fname)))
    return result


def print_snippet(s, full=False):
    label = f"[{s['tipo_display']}]"
    print(f"{label} {s['nome']}  (categoria: {s['categoria']})")
    print(f"  Uso:  {s['uso']}")
    print(f"  Tags: {', '.join(s['tags'])}")
    if full:
        print()
        print(s['codigo'])
    print()


def main():
    parser = argparse.ArgumentParser(
        description='Busca snippets LSP por keyword, categoria ou tipo.')
    parser.add_argument('keyword', nargs='?',
                        help='Palavra-chave (nome, uso ou tags)')
    parser.add_argument('--categoria',
                        help='Filtrar por categoria: sql, ws, http, parametros, funcoes, log')
    parser.add_argument('--tipo', choices=['bloco', 'padrao'],
                        help='Filtrar por granularidade')
    parser.add_argument('--lista', action='store_true',
                        help='Listar todos os snippets sem código')
    parser.add_argument('--full', action='store_true',
                        help='Exibir código LSP completo')
    args = parser.parse_args()

    snippets = load_all()

    if args.categoria:
        snippets = [s for s in snippets if s['categoria'] == args.categoria]
    if args.tipo:
        snippets = [s for s in snippets if s['tipo'] == args.tipo]
    if args.keyword and not args.lista:
        kw = args.keyword.lower()
        snippets = [s for s in snippets
                    if kw in s['nome'].lower()
                    or kw in s['uso'].lower()
                    or any(kw in t.lower() for t in s['tags'])]

    if not snippets:
        print('Nenhum snippet encontrado.')
        return

    for s in snippets:
        print_snippet(s, full=args.full)


if __name__ == '__main__':
    main()
