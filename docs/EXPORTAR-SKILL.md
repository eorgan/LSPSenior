# Exportar a skill LSP para outros projetos

A skill **lsp-senior** ajuda agentes de IA a programar em LSP com segurança (regras da
linguagem + catálogo de ~600 funções). Para reusá-la em outro projeto, o agente precisa
de **dois artefatos**: o texto da skill e o **catálogo** (`functions.json`).

## Opção 1 — Script (recomendado)

No diretório deste projeto (`LSPSenior`):

```bash
# bundle COMPLETO (SKILL.md + functions.json + reference + scripts + docs/functions + AGENTS.md)
bash scripts/export-skill.sh /caminho/do/outro/projeto

# bundle ENXUTO (sem docs/functions; reference/ e scripts/ continuam incluídos)
bash scripts/export-skill.sh /caminho/do/outro/projeto --lean
```

Isso cria no destino:

```
/outro/projeto/
├── AGENTS.md                              # lido por qualquer agente (Antigravity etc.)
└── .claude/skills/lsp-senior/
    ├── SKILL.md                           # autodispara no Claude Code
    ├── functions.json                     # catálogo (assinatura, params, retorno, descrição)
    ├── reference/*.md                     # sintaxe, erros, padrões, web services, parâmetros CLI
    ├── scripts/*.py                       # buscar_funcao.py, buscar_ws.py (referenciados no SKILL.md)
    └── docs/functions/*.md                # exemplos por função (omitido com --lean)
```

> `reference/` e `scripts/` são **sempre** copiados (mesmo em `--lean`): o `SKILL.md` aponta
> para esses arquivos, então omiti-los deixaria referências quebradas no destino. O `--lean`
> só omite `docs/functions/` (a parte volumosa).

## Opção 2 — Manual (3 passos)

1. Copie a pasta `.claude/skills/lsp-senior/` para `.claude/skills/` do outro projeto.
2. Copie o `functions.json` (raiz deste projeto) para **dentro** de
   `.claude/skills/lsp-senior/` no destino (a skill procura o catálogo na própria pasta
   ou na raiz do projeto).
3. (Opcional, p/ exemplos) Copie `docs/functions/` para
   `.claude/skills/lsp-senior/docs/functions/` no destino.
4. (Opcional) Copie o `AGENTS.md` para a raiz do destino, para agentes que não leem
   `.claude/skills/`.

## Como cada agente usa

- **Claude Code:** detecta `.claude/skills/lsp-senior/` automaticamente; a skill dispara
  pela `description` quando você mexe em `.lsp`/`.lspt`. Nada a configurar.
- **Antigravity / outros:** não autodescobrem skills. Aponte/anexe o `AGENTS.md` (ou o
  `SKILL.md`) no contexto ao pedir código LSP.

## Manter atualizado

O catálogo deste projeto evolui (novas funções, descrições). Para atualizar um projeto
que já recebeu o bundle, rode o export de novo (sobrescreve `SKILL.md` e `functions.json`).
Se a fonte de documentação mudar aqui, regenere antes:

```bash
node scripts/extract-from-docs.js
node scripts/extract-from-erp-docs.js
node scripts/generate-functions.js
```

> Observação: esses artefatos são para **desenvolvimento** (agentes/repos). Eles ficam
> fora do pacote `.vsix` da extensão (`.vscodeignore`).
