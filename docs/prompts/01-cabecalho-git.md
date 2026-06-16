# Prompt — Implementar item 1 do backlog: Cabeçalho automático com dados do Git

Cole o bloco abaixo numa **nova conversa** do agente, dentro de `/Users/eliezer.organ/GitHub/LSPSenior`.

---

## 🎯 Tarefa

Implementar o **item 1** de [docs/BACKLOG.md](../BACKLOG.md): cabeçalho LSP que se autopreenche
com dados do Git na criação e se autoatualiza ao salvar.

## 📦 Contexto do projeto (leitura obrigatória antes de codar)

- Repositório: extensão VS Code "LSPT Language Support" (`eorgan.lspt-language-support`),
  publicada no Open VSX. JavaScript puro (sem build), API VS Code `^1.60.0`.
- Versão atual: **1.7.1** em `package.json`.
- Arquivos relevantes:
  - `extension.js` — providers atuais (completion, signature, hover, definition, outline,
    folding, diagnostics, comando "buscar função") e o aviso de migração de publisher.
  - `snippets/lspt-snippets.json` — **já tem dois snippets de cabeçalho estáticos** com
    prefixos `lspt-header` ("LSPT Header") e `header` ("File Header") usando variáveis do
    VS Code (`$CURRENT_YEAR` etc.). Eles serão substituídos pela versão dinâmica.
  - `package.json` — `contributes.commands` e `contributes.configuration` (já há
    `lspt.diagnostics.*`).
  - `CHANGELOG.md` e `README.md` (seção de Configurações).
  - `.env` — `OVSX_PAT` para publicar (gitignored).
- Spec completa: [docs/BACKLOG.md](../BACKLOG.md) item 1. **Leia antes de implementar.**

## ✅ Decisões já tomadas (não re-decidir)

- **Gatilho do "modified": ao salvar** (`onWillSaveTextDocument`), não vincular a commit Git.
- **`@Description`: manual** no MVP. Mantém o placeholder; agente não infere automaticamente.
- **`@Date` (criação)**: `fs.statSync(file).birthtimeMs` quando válido; fallback para `Date.now()`.
- **Sem Git no projeto**: degrada graciosamente — campos Author/Email/Last Modified by ficam vazios
  ou pegam fallback de `lspt.header.fallback.*` em settings.
- **Substituir os snippets estáticos `lspt-header`/`header`**: remova-os do
  `snippets/lspt-snippets.json` — o cabeçalho passa a ser gerado dinamicamente pela
  extensão (não há como snippets estáticos lerem `git config`).

## 🏗️ Implementação esperada

### Configuração (em `package.json` → `contributes.configuration`)

```json
"lspt.header.autoUpdate": {
   "type": "boolean", "default": true,
   "description": "Atualiza @Last Modified by/time ao salvar arquivos .lspt/.lsp."
},
"lspt.header.fallback.author": { "type": "string", "default": "" },
"lspt.header.fallback.email":  { "type": "string", "default": "" }
```

### Comando "LSPT: Inserir cabeçalho" (e atalhos via completion)

- Registrar `lspt.inserirCabecalho` (palette + ativar `onCommand:` em `activationEvents`).
- Adicionar **CompletionItemProvider** que, quando o usuário digita `header` ou `lspt-header`,
  oferece um item que insere o cabeçalho **já preenchido** (substituindo a palavra digitada).
- Template do cabeçalho:
  ```
  /*
   * @Author: ${author}
   * @Email: ${email}
   * @Date: ${createdAt}
   * @Last Modified by: ${author}
   * @Last Modified time: ${createdAt}
   * @Description: Description
   */
  ```
- Posicionar o cursor em `Description` (selecionado) para edição imediata.

### Leitura do Git

Preferir a API da extensão Git embutida do VS Code:
```js
const gitExt = vscode.extensions.getExtension('vscode.git');
const git = gitExt && gitExt.isActive ? gitExt.exports.getAPI(1) : null;
// repository.state.HEAD?.commit etc.; ou git.repositories[0]
```
Para `user.name`/`user.email`, o caminho mais robusto é `git config user.name|user.email`
via `child_process.execFileSync('git', ['-C', workspaceRoot, 'config', '--get', 'user.name'])`.
Cache os valores por workspace para não chamar a cada save.

Fallback: `lspt.header.fallback.author`/`.email` das settings → string vazia.

### Atualização no save

`vscode.workspace.onWillSaveTextDocument(event => event.waitUntil(...))`:

1. Só atuar se `languageId === 'lspt'` e `lspt.header.autoUpdate` true.
2. Procurar no documento o **primeiro bloco `/* ... */`** que contenha
   `@Last Modified time:` e `@Last Modified by:`.
3. Calcular `now = formato("YYYY-MM-DD HH:mm:ss")`.
4. Substituir somente essas duas linhas via `TextEdit.replace` (retornado em
   `event.waitUntil(Promise.resolve([...]))`). **Não tocar em mais nada** do arquivo.
5. **Evitar loop infinito de save**: se as duas linhas já estão com o `now` atual, não
   retornar edits.
6. Idempotência: salvar duas vezes seguidas → segunda vez não muda nada.

### Formato de data

`YYYY-MM-DD HH:mm:ss` (ex: `2026-05-28 19:39:13`), zona local do usuário.

### Sem Git no projeto

`@Author`/`@Email` ficam o fallback (settings) ou string vazia. O cabeçalho **ainda é
inserido**; só os campos ficam vazios. O save não falha.

## 🧪 Validação

1. Em workspace COM Git configurado:
   - `Cmd+Shift+P` → "LSPT: Inserir cabeçalho" em arquivo novo `.lsp` vazio: cabeçalho
     aparece com Author/Email do git config, Date = criação, Last Modified igual.
   - Editar uma linha qualquer, salvar: `@Last Modified by` permanece, `@Last Modified time`
     atualiza.
   - Salvar de novo sem alterar nada: `@Last Modified time` **não** muda (evita loop).
2. Em pasta SEM Git: comando ainda funciona, Author/Email vazios (ou fallback se
   configurado).
3. Digitar `header` no editor: completion sugere a versão dinâmica preenchida (e os
   snippets estáticos antigos não aparecem mais).
4. `lspt.header.autoUpdate: false`: salvar não toca no cabeçalho.

## 📦 Release

1. Bump `package.json` para **1.8.0** (feature minor).
2. CHANGELOG: nova entrada `## [1.8.0]` documentando o cabeçalho automático e a remoção
   dos snippets estáticos de header.
3. README: atualizar seção Configurações (adicionar `lspt.header.*`).
4. `npx @vscode/vsce@latest package` → gera `lspt-language-support-1.8.0.vsix`.
5. Publicar: `set -a; . ./.env; set +a; npx ovsx publish lspt-language-support-1.8.0.vsix`.
6. Commit (Conventional Commits) + push para `origin/main`.

## ⚠️ Restrições

- **Nunca tocar em outro conteúdo do arquivo** no save além das duas linhas Last Modified.
- **Não introduzir dependências npm** (o projeto é zero-deps em runtime). Use só
  `vscode`, `fs`, `path`, `child_process` nativos.
- Mensagens/UI em PT-BR; código em inglês quando fizer sentido.
- O `.vsix` é gitignored — não commitar binário.
- O `.env` está gitignored — não commitar token.

## 📚 Referências

- [docs/BACKLOG.md](../BACKLOG.md) — spec do item 1
- [extension.js](../../extension.js) — padrão dos providers existentes (use-os como modelo)
- [snippets/lspt-snippets.json](../../snippets/lspt-snippets.json) — snippets `header`/`lspt-header` a remover
- [Formatação/Exemplo de formatação e codigos.md](../../Formatação/Exemplo%20de%20formatação%20e%20codigos.md) — formato do cabeçalho de referência
