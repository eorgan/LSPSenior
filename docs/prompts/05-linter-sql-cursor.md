# Prompt — Implementar item 5 do backlog: Linter SQL cursor leak

Cole este bloco numa **nova conversa** do agente, dentro de `/Users/eliezer.organ/GitHub/LSPSenior`.

---

## Contexto

Extensão VS Code para a LSP (Linguagem Senior de Programação) do ERP Senior.
JavaScript puro, sem build, API VS Code `^1.60.0`.
Branch: `main`.

O linter da extensão (`computeDiagnostics` em `extension.js`) já detecta:
- `Pare`/`Continue` fora de loops
- Operações dentro de parâmetros de função

**Novo item:** emitir `Warning` quando `SQL_AbrirCursor(cursorVar)` é chamado numa função
sem um `SQL_FecharCursor(cursorVar)` ou `SQL_Destruir(cursorVar)` correspondente no **mesmo
escopo de função**.

As funções `SQL_AbrirCursor`, `SQL_FecharCursor` e `SQL_Destruir` já estão no catálogo
(`functions.json`) com `category: "sql"` e assinatura `Funcao SQL_*(Alfa Cursor);`.

## Tarefa

Modificar **somente** `extension.js` e `package.json` (contributes.configuration).

### 1. `extension.js` — `computeDiagnostics`

Adicionar rastreamento de escopo de função e mapa de cursores abertos.

**Lógica de escopo:**
- Ao detectar `\bFuncao\b` em linha não-comentário: marcar `pendingFuncao = true`.
- Ao detectar `\bInicio\b` com `pendingFuncao === true`: iniciar novo escopo de função
  (`cursorScopes.push(new Map())`), `pendingFuncao = false`.
- Ao detectar `\bFim\b` e `cursorScopes.length > 0`: pop o escopo e emitir Warning para
  cada cursor ainda aberto no map (na linha onde foi aberto).

**Lógica de cursores (dentro de cada iteração de linha):**
- Se linha contém `SQL_AbrirCursor\s*\(`: extrair o 1º argumento com `extractArgs`.
  Se o argumento for uma palavra simples (`/^[A-Za-z_]\w*$/`), registrar no escopo atual:
  `cursorScopes.at(-1).set(argNormalizado, lineNo)`.
- Se linha contém `SQL_FecharCursor\s*\(` ou `SQL_Destruir\s*\(`: extrair 1º argumento.
  Se for palavra simples, remover do escopo atual: `cursorScopes.at(-1)?.delete(argNormalizado)`.
- Normalização: `.trim().toLowerCase()`.
- Se argumento não for palavra simples (expressão complexa): ignorar (conservador).

**Guard:** verificar `cfg.get('diagnostics.sqlCursorLeak', true)` antes de executar toda
essa lógica nova (o resto do `computeDiagnostics` continua igual independentemente).

**Mensagem do Warning:**
```
`Cursor '${cursor}' aberto com SQL_AbrirCursor mas não fechado com SQL_FecharCursor/SQL_Destruir nesta função.`
```
Range: a linha onde `SQL_AbrirCursor` foi chamado, colunas 0 até fim da linha.

### 2. `package.json` — `contributes.configuration`

Adicionar a propriedade `lspt.diagnostics.sqlCursorLeak`:

```json
"lspt.diagnostics.sqlCursorLeak": {
  "type": "boolean",
  "default": true,
  "description": "Avisar quando um cursor SQL_AbrirCursor não for fechado com SQL_FecharCursor ou SQL_Destruir na mesma função."
}
```

## Casos de teste para validar manualmente

**Deve gerar Warning:**
```lsp
Funcao TestarLeak();
Inicio
   SQL_AbrirCursor(cCursor);
   SQL_ExecutarSQL(cCursor, "SELECT ...");
   @ SQL_FecharCursor ausente
Fim;
```

**Não deve gerar Warning:**
```lsp
Funcao TestarOk();
Inicio
   SQL_AbrirCursor(cCursor);
   SQL_ExecutarSQL(cCursor, "SELECT ...");
   SQL_FecharCursor(cCursor);
Fim;
```

**Não deve gerar Warning (SQL_Destruir também fecha):**
```lsp
Funcao TestarDestruir();
Inicio
   SQL_AbrirCursor(cCursor);
   SQL_Destruir(cCursor);
Fim;
```

**Não deve gerar falso positivo nos exemplos reais** (`Exemplos de Arquivos/*.lspt`).

## Validação e release

```bash
# Validar manualmente na extensão instalada no Antigravity
# Confirmar 0 warnings indevidos nos arquivos de exemplo

# Bump de versão (patch):
# package.json: "version": "1.11.2"
# CHANGELOG.md: entrada nova

# Package e publish:
npx @vscode/vsce@latest package
set -a; . ./.env; set +a
npx ovsx publish lspt-language-support-1.11.2.vsix

git add extension.js package.json CHANGELOG.md
git commit -m "feat(linter): detectar cursor SQL_AbrirCursor sem fechamento (item 5 do backlog) (1.11.2)
Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push origin main
```

## Restrições

- Não introduzir dependências npm.
- Não refatorar nada além do necessário — a mudança é cirúrgica em `computeDiagnostics`.
- Se `cursorScopes` estiver vazio quando `SQL_AbrirCursor` for encontrado (fora de função),
  ignorar (não emitir erro, código malformado não é escopo desta checagem).
