# Prompt — Implementar item 7 do backlog: Code Actions / Quick Fixes

Cole este bloco numa **nova conversa** do agente, dentro de `/Users/eliezer.organ/GitHub/LSPSenior`.

---

## Contexto

Extensão VS Code para a LSP (Linguagem Senior de Programação) do ERP Senior.
JavaScript puro, sem build, API VS Code `^1.60.0`. Branch: `main`.

O linter (`computeDiagnostics` em `extension.js`) já emite um `Warning` quando um
`SQL_AbrirCursor(cursor)` não tem `SQL_FecharCursor`/`SQL_Destruir` correspondente no mesmo
escopo de função. Hoje o aviso aparece, mas o usuário precisa corrigir **na mão**.

**Novo item:** registrar um **CodeActionProvider** que oferece a lâmpada 💡 de *Quick Fix*
para esses avisos de cursor não fechado, inserindo a chamada de fechamento automaticamente.

Este é o primeiro Quick Fix da extensão — o objetivo é estabelecer o padrão (provider +
`diagnostic.code` estável) para que futuros fixes sejam fáceis de adicionar.

## Tarefa

Modificar **somente** `extension.js`.

### 1. Marcar os diagnósticos de cursor com `code` e `data` estáveis

Em `computeDiagnostics`, nos **três** pontos onde hoje se cria o `vscode.Diagnostic` de cursor
não fechado (o loop dentro do pop de escopo de função, por volta da linha 621, e o loop de
`rootCursorScope` no fim da função, por volta da linha 717), após `new vscode.Diagnostic(...)`
e antes do `diags.push`, atribuir:

```js
const d = new vscode.Diagnostic(range, mensagem, vscode.DiagnosticSeverity.Warning);
d.code = 'sqlCursorLeak';
d.source = 'lspt';
// guarda o nome do cursor para o Quick Fix não precisar re-parsear a mensagem
d.cursorName = cursor;
diags.push(d);
```

> Use a variável `cursor` já disponível em cada loop. Mantenha o range atual (linha do
> `SQL_AbrirCursor`, colunas 0..fim). Não altere a lógica de detecção — só anexe `code`,
> `source` e `cursorName`.

### 2. Registrar o `CodeActionProvider`

Em `activate`, junto aos demais `vscode.languages.register...` (perto do
`foldingProvider`/`formattingProvider`), adicionar:

```js
const quickFixProvider = vscode.languages.registerCodeActionsProvider(
   'lspt',
   {
      provideCodeActions(document, range, ctx) {
         const actions = [];
         for (const diag of ctx.diagnostics) {
            if (diag.code !== 'sqlCursorLeak') continue;
            const cursor = diag.cursorName || '<cursor>';
            const openLine = diag.range.start.line;
            const indent = (document.lineAt(openLine).text.match(/^\s*/) || [''])[0];
            const eol = document.eol === vscode.EndOfLine.CRLF ? '\r\n' : '\n';
            const insertPos = new vscode.Position(openLine + 1, 0);

            for (const fn of ['SQL_FecharCursor', 'SQL_Destruir']) {
               const action = new vscode.CodeAction(
                  `Fechar cursor '${cursor}' com ${fn}`,
                  vscode.CodeActionKind.QuickFix
               );
               action.diagnostics = [diag];
               action.isPreferred = fn === 'SQL_FecharCursor';
               action.edit = new vscode.WorkspaceEdit();
               action.edit.insert(
                  document.uri,
                  insertPos,
                  `${indent}${fn}(${cursor});${eol}`
               );
               actions.push(action);
            }
         }
         return actions;
      },
   },
   { providedCodeActionKinds: [vscode.CodeActionKind.QuickFix] }
);
```

> Decisão de design: o fix insere a chamada de fechamento **na linha logo após** o
> `SQL_AbrirCursor`, com a mesma indentação. É conservador e previsível — não tenta localizar
> o `Fim` da função (frágil). O usuário pode mover a linha se quiser, mas o cursor passa a
> estar fechado e o warning some na próxima análise.

### 3. Adicionar ao `context.subscriptions.push(...)`

Incluir `quickFixProvider` na lista de subscriptions (junto de `foldingProvider`,
`formattingProvider`, etc.).

## Casos de teste para validar manualmente

Abrir um `.lspt` com:

```lsp
Funcao TestarLeak();
Inicio
   SQL_AbrirCursor(cCursor);
   SQL_ExecutarSQL(cCursor, "SELECT ...");
Fim;
```

1. Confirmar o Warning sublinhando a linha do `SQL_AbrirCursor`.
2. Posicionar o cursor na linha, abrir a lâmpada 💡 (Ctrl+. / Cmd+.).
3. Devem aparecer **2 ações**: "Fechar cursor 'cCursor' com SQL_FecharCursor" (preferida) e
   "...com SQL_Destruir".
4. Aplicar a primeira → deve inserir `   SQL_FecharCursor(cCursor);` logo abaixo, com a
   indentação correta, e o warning deve sumir após a re-análise (~400ms).
5. Validar nos arquivos reais de `Exemplos de Arquivos/*.lspt` que não há lâmpada indevida.

## Validação e release

```bash
# Validar manualmente na extensão instalada no Antigravity (F5 / Extension Host)

# Bump (minor, é feature nova):
# package.json: "version": "1.12.0"
# CHANGELOG.md: entrada nova

npx @vscode/vsce@latest package
set -a; . ./.env; set +a
npx ovsx publish lspt-language-support-1.12.0.vsix

git add extension.js CHANGELOG.md package.json
git commit -m "feat(linter): Quick Fix para cursor SQL não fechado (item 7 do backlog) (1.12.0)
Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
git push origin main
```

## Restrições

- Não introduzir dependências npm.
- Mudança cirúrgica: anexar `code`/`source`/`cursorName` aos diagnósticos existentes +
  registrar 1 provider. Não refatorar `computeDiagnostics`.
- Respeitar EOL do documento (`document.eol`) ao montar a string inserida.
- Não tocar `package.json` além do bump de versão (o provider é registrado por código, não
  exige entrada em `contributes`).
