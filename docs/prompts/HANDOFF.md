# Handoff — estado dos itens do backlog

Registro de progresso entre sessões. Cada item do backlog é implementado em uma
**conversa nova** colando o prompt correspondente em `docs/prompts/`.

---

## ✅ Item 1 — Cabeçalho automático com dados do Git — **CONCLUÍDO (1.8.1)**

- **Release atual:** `1.8.1`, publicado no Open VSX (`eorgan.lspt-language-support v1.8.1`).
- **Commits em `origin/main`:**
  - `d98edd4` — `feat: cabeçalho LSP automático com dados do Git` (1.8.0).
  - `f6eb875` — `fix: cabeçalho preenche Author/Email mesmo em arquivo sem título` (1.8.1).
- **Prompt usado:** [01-cabecalho-git.md](01-cabecalho-git.md).

### O que entregou
- Comando **"LSPT: Inserir cabeçalho"** (`lspt.inserirCabecalho`) e completions
  `header`/`lspt-header` inserem o bloco já preenchido: `@Author`/`@Email` via
  `git config`, `@Date` da criação do arquivo (`birthtimeMs`, fallback `Date.now()`),
  cursor parando em `Description`.
- `onWillSaveTextDocument` atualiza `@Last Modified by`/`@Last Modified time` ao salvar —
  só essas duas linhas do primeiro bloco de comentário, idempotente (sem loop) e sem
  apagar autor digitado à mão quando não há identidade Git.
- Settings: `lspt.header.autoUpdate`, `lspt.header.fallback.author`,
  `lspt.header.fallback.email`.
- Snippets estáticos `header`/`lspt-header` removidos (agora dinâmicos).

### Bug encontrado e corrigido (1.8.0 → 1.8.1)
- **Sintoma:** ao inserir o cabeçalho num arquivo **sem título (untitled)**, `@Author` e
  `@Email` saíam **vazios** (e `@Date` caía no `Date.now()`); ao salvar, só `@Last
  Modified by` resolvia.
- **Causa:** `workspaceRootFor()` retornava `undefined` para untitled → identidade Git
  vazia na inserção; o save não tocava em Author/Email.
- **Correção (1.8.1):** `workspaceRootFor()` cai para a **1ª pasta do workspace** quando o
  documento não tem raiz; e o save **preenche `@Author`/`@Email` vazios** (sem sobrescrever
  valor digitado), autocorrigindo cabeçalhos antigos no primeiro save.

### Validação feita / pendente
- ✅ `node --check extension.js`, JSONs válidos, lógica de data/regex/idempotência testada
  isoladamente.
- ✅ Teste manual do usuário no 1.8.0 (que revelou o bug acima, já corrigido no 1.8.1).
- ✅ Validação manual no Antigravity concluída pelo usuário (releases 1.8.1–1.11.1).

### Notas / dívidas deixadas (fora do escopo do item 1)
- `docs/prompts/` está sendo **incluído no `.vsix`** (a pasta nova não está no
  `.vscodeignore`). Se não quiser empacotar os prompts, adicionar `docs/prompts/` lá.
- Mudanças pré-existentes não relacionadas ficaram **fora** do commit:
  `AGENTS.md`, `.claude/skills/lsp-senior/SKILL.md` e os diretórios não rastreados
  `.claude/skills/lsp-senior/reference/` e `.../scripts/`.

---

## ✅ Item 2 — Formatter de arquivos LSP — **CONCLUÍDO (1.9.0)**

- **Release atual:** `1.9.0`, publicado no Open VSX (`eorgan.lspt-language-support v1.9.0`).
- **Commits em `origin/main`:**
  - `2573944` — `feat: formatter de arquivos LSP com reindentação conservadora (item 2 do backlog)`.
  - `f03579c` — `docs: adiciona Format Document ao guia rápido do usuário (1.9.0)`.
- **Prompt usado:** [02-formatter.md](02-formatter.md).

### O que entregou
- `DocumentFormattingEditProvider` + `DocumentRangeFormattingEditProvider` para `lspt`
  (Format Document e Format Selection) — acaba o aviso "no formatter installed".
- **Reindentação conservadora** (`computeFormatEdits`): ajusta só o recuo à esquerda,
  nunca o conteúdo. Estilo do projeto — `{`/`Inicio` um nível abaixo do cabeçalho de
  controle (`Se`/`Senao`/`Para`/`Enquanto`/`Funcao`), corpo um nível abaixo.
- **Recuo sob comentário de seção** `@-- ... --@` preservado (decisão do usuário: manter o
  recuo cosmético das declarações sob a seção, em vez de achatar para a coluna 0).
- Config `lspt.format.indentSize` (padrão 3).

### Decisões de robustez (riscos reais encontrados nos arquivos de exemplo)
- **Pilha por tokens** (varre todos `{`/`}`/`Inicio`/`Fim`): `Se(x) {` na mesma linha não
  desbalanceia a indentação das linhas seguintes.
- **Strings multi-linha com `\`** e blocos `/* ... */` **não são reindentados** (mudaria o
  conteúdo) — `scanStringContinuation` rastreia a continuação de string entre linhas.
- Idempotente; só emite edits para linhas que mudam.

### Validação feita
- ✅ [scripts/test_formatter.js](../../scripts/test_formatter.js) (mock do `vscode`): roda
  nos 6 `.lspt` reais de `Exemplos de Arquivos/` + casos sintéticos. Verifica idempotência,
  preservação de conteúdo (só whitespace inicial) e balanceamento. Rode com
  `node scripts/test_formatter.js`.
- ✅ Teste manual do usuário no Antigravity (via `.vsix` instalado) antes de publicar.

### Limitações conhecidas (documentadas no CHANGELOG/README)
- Várias instruções na mesma linha (`Se(x) { y }`): a indentação da própria linha não é
  refeita (o balanceamento é mantido).
- Sem alinhamento de operadores/espaçamento — apenas o recuo.

---

## ✅ Item 4 — Melhorar dobramento (folding) — **CONCLUÍDO (1.10.0)**

- **Release:** `1.10.0`, publicado no Open VSX. **Prompt usado:** [04-folding-melhorias.md](04-folding-melhorias.md).
- Preview da dobra mostra o cabeçalho (`Funcao Nome(); ⋯`); seções `@-- ... --@` viram
  regiões dobráveis; suporte a blocos `{`/`}` além de `Inicio`/`Fim`. Detalhes no CHANGELOG.

---

## ✅ Item 3 — Catalogar APIs `SQL_*` e `Http*` — **CONCLUÍDO (1.11.0)**

- **Release atual:** `1.11.0`, publicado no Open VSX (`eorgan.lspt-language-support v1.11.0`).
- **Prompt usado:** [03-apis-sql-http.md](03-apis-sql-http.md).

### O que entregou
- **13 `SQL_*` + 31 `Http*` no catálogo** (`functions.json`, categorias `sql`/`http`), com
  hover/autocomplete/signature/outline/gramática/linter — assinaturas e direção dos
  parâmetros validadas nos exemplos reais `.lspt`.
- **Trilha A (`Http*`):** sem bug no extrator — o overlay ERP estava **desatualizado**.
  Reexecutar o pipeline trouxe as ~35 funções dos manuais (29 com assinatura entram no
  catálogo; +2 de cookie via overlay curado).
- **Trilha B (`SQL_*`):** sem *heading* nos manuais → overlay curado
  [`../../data/functions-api.json`](../../data/functions-api.json), mesclado pelo
  `generate-functions.js` (mesma lógica *case-insensitive*).
- **Esquema:** novo campo `category` (`rule`/`sql`/`http`) em cada função.
- **Higiene:** `docs/prompts/` agora está no `.vscodeignore` — **não vaza mais** para o `.vsix`
  (confirmado no `vsce package`: só `docs/functions/` é empacotado).

### Validação feita
- ✅ `functions.json` parseia; `grep '"SQL_'` = 26 linhas, `grep '"Http[A-Z]'` = 62 linhas.
- ✅ Pipeline **idempotente** (rodar 2× → `functions.json` com hash estável).
- ✅ `buscar_funcao.py` encontra `SQL_AbrirCursor`/`HttpGet` com direção correta dos params.

### Item futuro anotado
- Checagem leve no linter: cursor `SQL_AbrirCursor` sem `SQL_FecharCursor`/`SQL_Destruir` no
  mesmo escopo (WARNING). Deixado para um item de backlog futuro (baixo risco).

---

## ✅ Item 5 — Linter: cursor `SQL_AbrirCursor` sem fechamento — **CONCLUÍDO (1.11.2 + 1.11.3)**

- **Release atual:** `1.11.3`, publicado no Open VSX (`eorgan.lspt-language-support v1.11.3`).
- **Prompt usado:** [05-linter-sql-cursor.md](05-linter-sql-cursor.md).

### O que entregou
- **Linter detecta `SQL_AbrirCursor` sem `SQL_FecharCursor`/`SQL_Destruir` correspondente**
  no mesmo escopo, tanto dentro de funções (`Funcao...Inicio...Fim`) quanto no nível raiz
  do arquivo (código fora de qualquer função).
- Rastreamento por escopo: `cursorScopes` (pilha de Maps para funções) + `rootCursorScope`
  (Map para o nível raiz). O 1º argumento é normalizado (`trim().toLowerCase()`); argumentos
  complexos são ignorados (conservador, sem falso positivo).
- **Nova configuração `lspt.diagnostics.sqlCursorLeak`** (boolean, padrão `true`) permite
  desabilitar individualmente sem desativar o linter inteiro.
- Warning na **linha do `SQL_AbrirCursor`**, colunas 0–fim.

### Validação feita
- ✅ Exemplos reais em `Exemplos de Arquivos/` — 0 warnings indevidos.
- ✅ Caso leak em função → Warning correto.
- ✅ Caso leak no nível raiz → Warning correto (1.11.3).
- ✅ `SQL_Destruir` sem `SQL_FecharCursor` também suprime o warning.

---

## 🎉 Backlog concluído

Os cinco itens de [../BACKLOG.md](../BACKLOG.md) estão entregues: item 1 (cabeçalho, 1.8.x),
item 2 (formatter, 1.9.0), item 4 (folding, 1.10.0), item 3 (APIs `SQL_*`/`Http*`, 1.11.0)
e item 5 (linter cursor leak, 1.11.2–1.11.3).

### Dívidas/notas ainda abertas
- (Resolvida em 1.11.0) ~~`docs/prompts/` incluído no `.vsix`~~ — agora no `.vscodeignore`.
