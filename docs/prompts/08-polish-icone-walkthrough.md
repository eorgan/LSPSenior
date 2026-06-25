# Prompt — Implementar item 8 do backlog: Polish (ícone de arquivo + Walkthrough)

Cole este bloco numa **nova conversa** do agente, dentro de `/Users/eliezer.organ/GitHub/LSPSenior`.

---

## Contexto

Extensão VS Code para a LSP (Linguagem Senior de Programação) do ERP Senior.
JavaScript puro, sem build, API VS Code `^1.60.0`. Branch: `main`.

Dois ajustes de *polish* que sobem juntos num release:

- **8a — Ícone próprio para arquivos `.lsp`/`.lspt`** no explorer (identidade visual).
- **8b — Walkthrough "Primeiros passos"** na tela de boas-vindas do VS Code, listando os
  recursos da extensão (descoberta + vitrine na store).

Hoje o `package.json` tem `contributes` com as chaves: `languages`, `grammars`, `snippets`,
`commands`, `configuration`. O ícone do marketplace já existe em `images/icon.png`.
Os comandos existentes são `lspt.buscarFuncao` e `lspt.inserirCabecalho`.

## Tarefa

Modificar `package.json` (contributes) e **criar assets** (SVG do ícone + arquivos markdown
do walkthrough). Nenhuma mudança em `extension.js` é necessária.

### 8a — Ícone de arquivo `.lsp`/`.lspt`

1. Criar `icons/lspt-file.svg` — ícone simples e legível em 16–32px. Sugestão: um quadrado/
   documento com as letras **"SP"** ou um glifo que remeta à Senior. Use `currentColor` ou
   cores neutras que funcionem em tema claro e escuro. Manter o SVG pequeno (sem fontes
   embutidas; converter texto em paths ou usar `<text>` com fonte genérica).

2. Em `package.json`, adicionar a propriedade `icon` ao objeto de linguagem existente em
   `contributes.languages[0]` (o de `id: "lspt"`):

   ```json
   "icon": {
     "light": "./icons/lspt-file.svg",
     "dark": "./icons/lspt-file.svg"
   }
   ```

   > Observação: o ícone de linguagem aparece quando o icon theme ativo delega ao ícone da
   > linguagem (comportamento padrão de "Seti" e do tema de ícones do VS Code). Se quiser
   > garantir versão clara/escura distinta, criar dois SVGs; um só já basta para o MVP.

### 8b — Walkthrough "Primeiros passos"

1. Criar a pasta `walkthroughs/` com um arquivo markdown curto por passo (conteúdo em PT-BR,
   2–5 linhas cada, pode incluir imagem/gif se houver). Passos sugeridos:

   - `01-autocomplete.md` — Autocomplete + signature help + hover das 647 funções do catálogo.
   - `02-buscar-funcao.md` — Comando **"LSPT: Buscar função"** (`lspt.buscarFuncao`) para
     inserir a chamada já com parâmetros.
   - `03-cabecalho.md` — Comando **"LSPT: Inserir cabeçalho"** (`lspt.inserirCabecalho`) que
     preenche Autor/E-mail/Data via Git e atualiza ao salvar.
   - `04-formatter-linter.md` — Format Document + linter (Pare/Continue fora de loop, operação
     em parâmetro, cursor `SQL_*` não fechado com Quick Fix).
   - `05-snippets.md` — 62 snippets e a gramática de realce.

2. Em `package.json`, adicionar a chave `walkthroughs` em `contributes`:

   ```json
   "walkthroughs": [
     {
       "id": "lsptGettingStarted",
       "title": "Primeiros passos com LSPT",
       "description": "Conheça os recursos do LSPT Language Support para a Linguagem Senior.",
       "steps": [
         {
           "id": "autocomplete",
           "title": "Autocomplete inteligente",
           "description": "Complete as 647 funções do catálogo com signature help e hover.",
           "media": { "markdown": "walkthroughs/01-autocomplete.md" }
         },
         {
           "id": "buscarFuncao",
           "title": "Buscar função",
           "description": "Use \"LSPT: Buscar função\" para inserir a chamada com parâmetros.",
           "media": { "markdown": "walkthroughs/02-buscar-funcao.md" },
           "completionEvents": ["onCommand:lspt.buscarFuncao"]
         },
         {
           "id": "cabecalho",
           "title": "Cabeçalho automático",
           "description": "Insira o cabeçalho preenchido pelo Git e atualizado ao salvar.",
           "media": { "markdown": "walkthroughs/03-cabecalho.md" },
           "completionEvents": ["onCommand:lspt.inserirCabecalho"]
         },
         {
           "id": "formatterLinter",
           "title": "Formatter e Linter",
           "description": "Formate o documento e veja avisos com Quick Fix.",
           "media": { "markdown": "walkthroughs/04-formatter-linter.md" }
         },
         {
           "id": "snippets",
           "title": "Snippets e realce",
           "description": "62 snippets e gramática de sintaxe da LSP.",
           "media": { "markdown": "walkthroughs/05-snippets.md" }
         }
       ]
     }
   ]
   ```

   > Os `completionEvents` com `onCommand:` marcam o passo como concluído quando o usuário
   > executa o comando — feedback de progresso real. Passos sem evento podem ser marcados
   > manualmente pelo usuário.

3. **Empacotamento dos assets:** confirmar que `icons/` e `walkthroughs/` entram no `.vsix`.
   O `.vscodeignore` atual ignora `docs/*.md` e `docs/prompts/**`, mas **não** ignora
   `walkthroughs/` nem `icons/` — então eles serão incluídos por padrão. Rodar
   `npx @vscode/vsce@latest ls` (ou inspecionar o `.vsix`) e confirmar que
   `icons/lspt-file.svg` e os `walkthroughs/*.md` aparecem na lista de arquivos empacotados.

## Validação manual

- **Ícone:** com um icon theme padrão ativo, abrir uma pasta com `.lspt`/`.lsp` e confirmar o
  ícone customizado no explorer.
- **Walkthrough:** após instalar/recarregar, abrir **Help → Welcome** (ou
  `Welcome: Open Walkthrough`) e confirmar que "Primeiros passos com LSPT" aparece com os 5
  passos e renderiza o markdown de cada um. Executar `lspt.buscarFuncao` e confirmar que o
  passo correspondente marca como concluído.

## Release

```bash
# Bump (minor — features novas de contribuição):
# package.json: "version": "1.12.0"  (ou 1.13.0 se o item 7 já tiver saído em 1.12.0)
# CHANGELOG.md: entrada nova

npx @vscode/vsce@latest package
# conferir conteúdo do pacote:
npx @vscode/vsce@latest ls | grep -E "icons/|walkthroughs/"

set -a; . ./.env; set +a
npx ovsx publish lspt-language-support-<versao>.vsix

git add package.json CHANGELOG.md icons walkthroughs
git commit -m "feat(ux): ícone de arquivo .lsp/.lspt e walkthrough de primeiros passos (item 8 do backlog) (<versao>)
Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
git push origin main
```

## Restrições

- Não introduzir dependências npm.
- SVG do ícone leve e legível em 16px; sem fontes externas embutidas.
- Conteúdo do walkthrough em PT-BR, enxuto.
- Não alterar `extension.js` — tudo é declarativo via `contributes` + assets.
- Se for publicado no mesmo release do item 7, unificar o bump de versão (um único minor).
