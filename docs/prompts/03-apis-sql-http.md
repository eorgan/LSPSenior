# Prompt — Implementar item 3 do backlog: Catalogar APIs `SQL_*` e `Http*`

Cole o bloco abaixo numa **nova conversa** do agente, dentro de `/Users/eliezer.organ/GitHub/LSPSenior`.
Este item gera o release **1.11.0**.

---

## 🎯 Tarefa

Implementar o **item 3** de [docs/BACKLOG.md](../BACKLOG.md): trazer as APIs `SQL_*` (cursores)
e `Http*` (requisições) para o catálogo canônico `functions.json`, para que apareçam em
hover, autocomplete, signature help, gramática e linter como as ~600 funções de regra.

## 📦 Contexto do projeto (leitura obrigatória)

- Extensão VS Code "LSPT Language Support" (`eorgan.lspt-language-support`), v1.10.0 publicada
  no Open VSX. JS puro, sem build. Versão alvo: **1.11.0**.
- **Pipeline de catálogo** (idempotente — releia antes de mexer):
  - `Exemplos de Arquivos/funcoes.csv` → fonte base (369 funções de regra).
  - `scripts/extract-from-docs.js` → lê manual comunitário (`../LSPSeniorDoc/...`),
    gera `data/functions-doc.json`.
  - `scripts/extract-from-erp-docs.js` → lê manuais oficiais
    (`../WebScraping/output/_consolidado/senior_erp_completo.md` e
    `senior_tecnologia_completo.md`), gera `data/functions-doc-erp.json`.
  - `scripts/generate-functions.js` → mescla CSV + overlays (merge campo-a-campo,
    chave case-insensitive) → `functions.json` + `docs/functions/*.md`. Funções do overlay
    com `signature` que **não** estão no CSV são **adicionadas** ao catálogo.
  - `scripts/build-grammar-functions.js` → injeta as chaves do `functions.json` na
    gramática `syntaxes/lspt.tmLanguage.json`.
- `extension.js` — hover/signature/autocomplete/definition/outline/folding/diagnostics já
  consomem `functions.json`. Já existe `getFunc()` com lookup case-insensitive.
- `.claude/skills/lsp-senior/reference/quick-reference.md` — cartões com nomes `SQL_*`/`Http*`
  **validados nos exemplos reais `.lspt`** (fonte de verdade do uso prático).

## 🔍 Diagnóstico já feito (use como ponto de partida — NÃO re-descobrir do zero)

Estado atual confirmado:
- `Http*` em `functions.json`: **0** · `SQL_*` em `functions.json`: **0**
- `Http*` no overlay ERP (`data/functions-doc-erp.json`): **0** · `SQL_*` no overlay: **0**
- `senior_tecnologia_completo.md`: tem **~35 seções `### Http...`** no formato padrão
  (`**Sintaxe:**`, `**Parâmetros:**` em tabela, `**Exemplo:**`) — mesmo formato que o
  `extract-from-erp-docs.js` já processa para outras funções.
- `senior_tecnologia_completo.md`: tem **0 seções `### SQL_`** — as funções `SQL_*` **não
  estão** nos manuais consolidados como headings.

Conclusão: são **duas trilhas distintas**.

### Trilha A — `Http*` (gap no pipeline a corrigir)

As ~35 funções `Http*` **deveriam** ter sido capturadas pelo `extract-from-erp-docs.js`
(têm `### heading` + `**Sintaxe:**`), mas não entraram no overlay. **Fase 0 da tarefa:
investigar por que foram puladas** e corrigir o extrator. Hipóteses a checar:
- O nome derivado da assinatura/heading está sendo rejeitado por algum filtro.
- A seção é descartada por `if (!parsed.description && !parsed.params && !parsed.example) continue;`.
- Dedup entre os dois arquivos-fonte sobrescrevendo entradas.
- A assinatura `Http*` não casa o regex de `signature` (formato inline `**Sintaxe:** HttpGet(...)`).

Depois de corrigir, rode `node scripts/extract-from-erp-docs.js` e confirme que os `Http*`
aparecem em `data/functions-doc-erp.json`.

### Trilha B — `SQL_*` (curadoria, sem fonte em heading)

As `SQL_*` não estão nos manuais consolidados. Fontes possíveis, em ordem de preferência:
1. **Manual comunitário** `../LSPSeniorDoc/Documentacao-LSP-Linguagem-Senior-de-Programacao/README.md`
   — tem seções de cursores `SQL_Criar`, `SQL_AbrirCursor`, etc. (a gramática antiga já as
   listava). Verifique e, se houver, estenda `extract-from-docs.js` para capturá-las.
2. **`reference/quick-reference.md`** e os exemplos `.lspt` (em `Exemplos de Arquivos/` e no
   projeto `../Gemma/`) — para os nomes e a ordem/direção dos parâmetros validados na prática.
3. Se nenhuma fonte estruturada cobrir, **criar um overlay curado manualmente**
   (`data/functions-api.json`) com as principais `SQL_*`/`Http*` (lista mínima abaixo),
   preenchido à mão a partir da doc oficial Senior e dos exemplos.

**Lista mínima obrigatória de `SQL_*`** (ciclo de cursor completo — confirme assinatura/
direção nos exemplos reais):
`SQL_Criar`, `SQL_DefinirComando`, `SQL_UsarSqlSenior2`, `SQL_UsarAbrangencia`,
`SQL_AbrirCursor`, `SQL_Proximo`, `SQL_EOF`, `SQL_RetornarAlfa`, `SQL_RetornarInteiro`,
`SQL_RetornarData`, `SQL_RetornarFlutuante`, `SQL_FecharCursor`, `SQL_Destruir`.

## ✅ Decisões já tomadas (não re-decidir)

- **Esquema:** adicionar um campo `category` em cada função: `"rule"` (default, as 600
  atuais), `"sql"`, `"http"`. Útil para futuras checagens do linter e para filtrar.
- **Fonte para `Http*`:** corrigir o pipeline (Trilha A) — preferir extração automática
  do manual oficial em vez de digitar à mão.
- **Fonte para `SQL_*`:** o que existir de estruturado (Trilha B item 1/2); o que faltar,
  overlay curado `data/functions-api.json` mesclado pelo `generate-functions.js` junto dos
  outros overlays (mesma lógica de merge case-insensitive).
- **Não duplicar:** se uma função já existe no catálogo (case-insensitive), enriquecer, não
  recriar.
- **Sem dependência npm nova.**
- **Idempotência:** re-rodar todo o pipeline deve dar o mesmo resultado.

## 🏗️ Passos

1. **Fase 0 — Diagnóstico Trilha A:** descobrir por que `Http*` não entram no overlay;
   corrigir `extract-from-erp-docs.js`; confirmar `Http*` em `data/functions-doc-erp.json`.
2. **Trilha B:** localizar fonte das `SQL_*`; estender `extract-from-docs.js` se houver
   seção no README comunitário; senão criar `data/functions-api.json` curado.
3. **`generate-functions.js`:** carregar o novo overlay (se criado) na mescla; adicionar o
   campo `category` (derivar de prefixo: começa com `SQL_` → `sql`; `Http` + maiúscula →
   `http`; senão `rule`).
4. **Regenerar:** `node scripts/extract-from-docs.js && node scripts/extract-from-erp-docs.js
   && node scripts/generate-functions.js && node scripts/build-grammar-functions.js`.
5. **(Opcional) Linter:** em `extension.js`, considerar uma checagem leve — cursor
   `SQL_AbrirCursor` sem `SQL_FecharCursor`/`SQL_Destruir` no mesmo escopo (WARNING). Só se
   for de baixo risco; caso contrário, deixar anotado para um item futuro.
6. **`reference/quick-reference.md`:** trocar a nota "não constam no functions.json" por
   "agora no catálogo" e apontar para `buscar_funcao.py`.

## 🧪 Validação

- `node -e "JSON.parse(require('fs').readFileSync('functions.json','utf8'))"` ok.
- `grep -cE '"SQL_' functions.json` ≥ 13 e `grep -cE '"Http[A-Z]' functions.json` ≥ 30.
- Re-rodar o pipeline duas vezes → `git diff` estável (idempotente).
- Abrir um `.lspt` real (ex: de `Exemplos de Arquivos/` ou `../Gemma/`): hover sobre
  `SQL_AbrirCursor` e `HttpGet` mostra assinatura + params; autocomplete sugere `SQL_`/`Http`.
- Gramática: `SQL_*`/`Http*` destacados (já cobertos pela regra `builtin-functions` após
  rodar `build-grammar-functions.js`).
- Cada função nova tem `direction` correta nos parâmetros de saída (`end`).

## 📦 Release

1. Bump `package.json` → **1.11.0**.
2. CHANGELOG `## [1.11.0]`: catálogo agora inclui APIs `SQL_*`/`Http*`; campo `category`;
   correção do pipeline de extração de `Http*`.
3. README: mencionar suporte às APIs de cursor/HTTP no catálogo.
4. `npx @vscode/vsce@latest package` → `lspt-language-support-1.11.0.vsix`.
5. Publicar: `set -a; . ./.env; set +a; npx ovsx publish lspt-language-support-1.11.0.vsix`.
6. Commit (Conventional Commits) + push para `origin/main`.
7. Marcar item 3 em [docs/BACKLOG.md](../BACKLOG.md) como ✅ e atualizar
   [docs/prompts/HANDOFF.md](HANDOFF.md).

## ⚠️ Restrições

- Não quebrar as 600 funções existentes (o merge é aditivo/enriquecedor).
- Sem dependência npm; UI/mensagens em PT-BR.
- `.vsix` e `.env` continuam gitignored.
- **Nota de higiene (corrigir de passagem se trivial):** `docs/prompts/` está vazando para
  o `.vsix` — adicionar `docs/prompts/` ao `.vscodeignore` neste release.

## 📚 Referências

- [docs/BACKLOG.md](../BACKLOG.md) — spec do item 3
- [scripts/extract-from-erp-docs.js](../../scripts/extract-from-erp-docs.js) — extrator a corrigir (Trilha A)
- [scripts/extract-from-docs.js](../../scripts/extract-from-docs.js) — extrator do manual comunitário (Trilha B)
- [scripts/generate-functions.js](../../scripts/generate-functions.js) — mescla + geração
- [.claude/skills/lsp-senior/reference/quick-reference.md](../../.claude/skills/lsp-senior/reference/quick-reference.md) — nomes `SQL_*`/`Http*` validados
- Manuais: `../WebScraping/output/_consolidado/senior_tecnologia_completo.md` (Http*),
  `../LSPSeniorDoc/Documentacao-LSP-Linguagem-Senior-de-Programacao/README.md` (cursores)
