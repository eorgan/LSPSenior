# Handoff de Gerenciamento — LSPSenior

> **Para iniciar uma nova conversa de gerenciamento:** cole o bloco abaixo (a partir do
> `---`) como primeira mensagem. Ele dá todo o contexto sem precisar reler o histórico.
> Esta conversa é de **gestão/planejamento** — a implementação acontece em conversas
> separadas, colando os prompts de `docs/prompts/`.

---

## Papel desta conversa

Você é meu parceiro de **gerenciamento e planejamento** do projeto LSPSenior. Aqui a gente
**decide, planeja e gera prompts**; a implementação roda em **outra conversa** (eu colo o
prompt correspondente de `docs/prompts/`). Não implemente features pesadas aqui — gere o
prompt e me entregue. Mantenha respostas enxutas (esta conversa tende a ficar longa e cara).

## O projeto

- **LSPT Language Support** — extensão VS Code / Open VSX para a **LSP (Linguagem Senior de
  Programação)** do ERP Senior. JavaScript puro (sem build), API VS Code `^1.60.0`.
- **Publicada:** `eorgan.lspt-language-support` no Open VSX (publisher **verificado ✅**).
  Token de publicação em `.env` (`OVSX_PAT`, gitignored).
- **Repo:** `github.com/eorgan/LSPSenior`, branch `main`.
- **Editor do usuário:** Antigravity IDE (Google), baseado em VS Code — adaptar nomes de
  menu; instalar/atualizar pela galeria Open VSX para receber updates (VSIX manual não
  auto-atualiza).

## Estado atual (atualizar a cada release)

- **Versão:** v1.11.4 (confira `package.json` e `git log` — pode ter avançado).
- **Catálogo:** ~644 funções em `functions.json` (369 do CSV + manuais + APIs SQL_*/Http*).
- **Recursos da extensão:** autocomplete geral, signature help, hover (com params, retorno
  e link da doc oficial), go-to-definition (built-in + funções do usuário), outline,
  folding melhorado, linter das armadilhas, comando "Buscar função", cabeçalho automático
  com Git, formatter (Format Document), 62 snippets, gramática com ~644 funções +
  reservadas + variáveis de sistema.

## Pipeline do catálogo (idempotente)

```
funcoes.csv ─┐
manuais ─────┼─→ extract-from-docs.js  ──→ data/functions-doc.json
(LSPSeniorDoc│   extract-from-erp-docs.js → data/functions-doc-erp.json
 + WebScraping)         │
                        ▼
            generate-functions.js ──→ functions.json + docs/functions/*.md
                        ▼
            build-grammar-functions.js ──→ syntaxes/lspt.tmLanguage.json
```
Fontes externas (irmãs deste repo): `../LSPSeniorDoc/...` (manual comunitário),
`../WebScraping/output/_consolidado/` (manuais oficiais Senior).

## Fluxo de release (referência)

```bash
# bump package.json + entrada no CHANGELOG.md, então:
npx @vscode/vsce@latest package
set -a; . ./.env; set +a
npx ovsx publish lspt-language-support-<versao>.vsix
git commit ...   # Conventional Commits
git push origin main
```
`.vsix` e `.env` são gitignored. `docs/prompts/` está no `.vscodeignore` (não vaza pro pacote).

## Documentos de estado (leia se precisar de detalhe)

- `docs/BACKLOG.md` — itens e status (1–5 concluídos; 6 pendente).
- `docs/prompts/HANDOFF.md` — progresso de implementação dos itens.
- `docs/PLANO-ENRIQUECIMENTO.md` — as 7 fases do enriquecimento do catálogo.
- `docs/MIGRACAO-OPENVSX.md` — migração de publisher e verificação de namespace.
- `docs/EXPORTAR-SKILL.md` + `scripts/export-skill.sh` — exportar a skill `lsp-senior`
  para outros projetos (já exportada para `../Gemma`).

## Suporte a agentes de IA

- `.claude/skills/lsp-senior/` — SKILL.md + functions.json + docs/functions + reference/ +
  scripts/buscar_funcao.py. Autodispara no Claude Code ao editar `.lsp`/`.lspt`.
- `AGENTS.md` (raiz) — guia para agentes que não autodescobrem skills (Antigravity).

## Backlog

| # | Item | Release |
|---|------|---------|
| 1 | Cabeçalho automático com Git | ✅ v1.8.1 |
| 2 | Formatter (Format Document) | ✅ v1.9.0 |
| 3 | Catalogar `SQL_*` e `Http*` | ✅ v1.11.0 |
| 4 | Folding melhorado | ✅ v1.10.0 |
| 5 | Linter: cursor `SQL_AbrirCursor` sem fechar | ✅ v1.11.2–1.11.3 |
| 6 | Índice navegável dos web services Senior | 🔲 pendente |

## Pendências em aberto (não-bloqueantes)

1. ✅ ~~**Validação manual no Antigravity**~~ — validado pelo usuário (releases 1.8.1–1.11.1).
2. **~114 funções** do CSV ainda com descrição genérica (não constam em nenhuma fonte
   parseada). Só enriquecem com uma nova fonte de documentação.

## Convenções que venho seguindo

- Cada item de backlog vira um **prompt autocontido** em `docs/prompts/` (com diagnóstico
  pré-feito, decisões já tomadas, validação e fluxo de release) — executado em conversa nova.
- Conventional Commits; commits terminam com `Co-Authored-By: Claude ...`.
- Não introduzir dependências npm (extensão é zero-deps em runtime).
- UI/mensagens/docs em PT-BR.

---

**Primeira ação sugerida na nova conversa:** rodar `git log --oneline -5` e
`grep '"version"' package.json` para sincronizar o estado real, e então me perguntar o que
eu quero fazer.
