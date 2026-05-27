# AGENTS.md — Guia para agentes de IA

Este repositório é a extensão **LSPT Language Support** e também serve de base de
conhecimento da **LSP (Linguagem Senior de Programação)** do ERP Senior.

## Ao escrever/editar/revisar código LSP (`.lsp` / `.lspt`)

Leia primeiro a skill **[.claude/skills/lsp-senior/SKILL.md](.claude/skills/lsp-senior/SKILL.md)**
— contém as regras críticas, convenções e padrões seguros. As regras essenciais (resumo):

1. **Manipule primeiro, chame a função depois.** Nada de concatenação, conversão,
   matemática ou chamada de função **dentro dos parâmetros**. Faça antes, guarde em
   variável, passe a variável. (A função `Mensagem` é a que mais sofre com isso.)
2. **Funções retornam por parâmetro de saída (`end`), não por `=`.**
   `RetDiaSemana(vnData, vnDia);` — `vnDia` recebe o resultado.
3. **Confirme toda função no catálogo antes de usar** (não invente assinaturas).
4. **Declare variáveis no topo**, com prefixo de tipo: `va` (Alfa), `vn` (Numero), `vd` (Data).
5. A LSP é **case-insensitive**; comandos terminam com `;`; blocos `{ }` ou `Inicio/Fim;`.

## Catálogo de funções (fonte da verdade deste projeto)

- **`functions.json`** — ~600 funções: `Nome → { signature, params[{name,type,direction,description}], returns[], description }`.
  Busque com `grep -i '"nome"' functions.json`. Cheque `direction`: `in` (você fornece) vs `out`/`end` (recebe).
- **`docs/functions/<Nome>.md`** — doc completa por função, com exemplo de uso real.

## Como regenerar a base (se a documentação-fonte mudar)

```bash
node scripts/extract-from-docs.js        # manual -> data/functions-doc.json
node scripts/extract-from-erp-docs.js    # manuais consolidados -> data/functions-doc-erp.json
node scripts/generate-functions.js       # CSV + overlays -> functions.json + docs/functions/
node scripts/build-grammar-functions.js  # functions.json -> gramática (syntaxes/)
```

Detalhes da iniciativa de enriquecimento: [docs/PLANO-ENRIQUECIMENTO.md](docs/PLANO-ENRIQUECIMENTO.md).
