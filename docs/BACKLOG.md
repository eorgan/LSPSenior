# Backlog da extensão

Ideias aprovadas para implementar depois (não priorizadas no código ainda).

---

## 1. Cabeçalho automático com dados do Git (snippet `header`)

**Objetivo:** ao inserir o cabeçalho (snippet `header`/`lspt-header`), preencher
automaticamente os campos a partir do Git, e mantê-los atualizados ao salvar.

**Cabeçalho de referência:**
```lsp
/*
 * @Author: Eliezer Organ
 * @Email: eorgan@organ.eti.br
 * @Date: 2025-05-28 19:39:13
 * @Last Modified by: Eliezer Organ
 * @Last Modified time: 2025-10-04 22:20:34
 * @Description: Description
 */
```

### Comportamento desejado

**Na criação do cabeçalho** (quando o projeto tem Git):
1. `@Author` ← nome do Git (`git config user.name`)
2. `@Email` ← e-mail do Git (`git config user.email`)
3. `@Date` ← data/hora de criação do arquivo

**Ao alterar/salvar o arquivo (ou mudar a versão no Git):**
1. `@Last Modified by` ← nome de quem fez a alteração (usuário Git atual)
2. `@Last Modified time` ← data/hora da alteração
3. `@Description` ← descrição do que o arquivo faz

### Viabilidade — ✅ possível

Abordagem técnica (padrão das extensões de file-header):
- **Inserção:** um comando "LSPT: Inserir cabeçalho" (ou interceptar o snippet) que monta
  o bloco já com `@Author`/`@Email` lidos via API Git do VS Code
  (`vscode.extensions.getExtension('vscode.git').exports`) ou `git config user.name/email`,
  `@Date` via `fs.stat().birthtime` (fallback: data atual).
- **Atualização automática:** listener `vscode.workspace.onWillSaveTextDocument` que, se o
  arquivo já tem o cabeçalho, atualiza `@Last Modified by` (usuário Git atual) e
  `@Last Modified time` (agora). Editar apenas as linhas do header, sem reformatar o resto.
- **Config:** habilitar/desabilitar e personalizar campos via `settings.json`
  (ex: `lspt.header.autoUpdate`, template customizável).

### Pontos a decidir (antes de implementar)

- **"Mudar a versão no Git"**: definir o gatilho — atualizar a cada **save** (mais simples
  e imediato) ou só em **commit** (exigiria hook git / observar o índice). Recomendado:
  on-save.
- **`@Description`**: não há como inferir automaticamente "para que serve o arquivo".
  Opções: manter manual (placeholder) ou oferecer preenchimento assistido por IA. Provável:
  manual no MVP.
- **`@Date` (criação)**: `birthtime` é confiável na maioria dos sistemas; alternativa é a
  data do primeiro commit do arquivo (`git log --diff-filter=A`).
- **Sem Git no projeto**: cair para nome/e-mail vazios ou de `settings.json`.
- Evitar "modified time" mudar em saves automáticos/formatação que não alteram conteúdo real.

### Critério de pronto

- [ ] Inserir cabeçalho preenche Author/Email (do Git) e Date (criação) automaticamente.
- [ ] Salvar um `.lsp`/`.lspt` com cabeçalho atualiza "Last Modified by/time".
- [ ] Funciona sem Git (degrada graciosamente) e é configurável/desativável.
