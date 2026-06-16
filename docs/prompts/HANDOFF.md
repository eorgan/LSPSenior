# Handoff — estado dos itens do backlog

Registro de progresso entre sessões. Cada item do backlog é implementado em uma
**conversa nova** colando o prompt correspondente em `docs/prompts/`.

---

## ✅ Item 1 — Cabeçalho automático com dados do Git — **CONCLUÍDO**

- **Release:** `1.8.0`, publicado no Open VSX (`eorgan.lspt-language-support v1.8.0`).
- **Commit:** `d98edd4` em `origin/main` (`feat: cabeçalho LSP automático com dados do Git`).
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

### Validação feita / pendente
- ✅ `node --check extension.js`, JSONs válidos, lógica de data/regex/idempotência testada
  isoladamente.
- ⏳ **Falta validação manual no VS Code/Antigravity** (pontos da seção "Validação" do
  prompt 01): inserir em arquivo novo, salvar/re-salvar, pasta sem Git, `autoUpdate:false`.

### Notas / dívidas deixadas (fora do escopo do item 1)
- `docs/prompts/` está sendo **incluído no `.vsix`** (a pasta nova não está no
  `.vscodeignore`). Se não quiser empacotar os prompts, adicionar `docs/prompts/` lá.
- Mudanças pré-existentes não relacionadas ficaram **fora** do commit:
  `AGENTS.md`, `.claude/skills/lsp-senior/SKILL.md` e os diretórios não rastreados
  `.claude/skills/lsp-senior/reference/` e `.../scripts/`.

---

## ⏭️ Item 2 — Formatter de arquivos LSP — **PRONTO PARA INICIAR**

- **Pré-requisito (item 1 / 1.8.0):** ✅ atendido.
- **Próximo passo:** abrir uma conversa nova e colar [02-formatter.md](02-formatter.md).
- **Release alvo:** `1.9.0`.
