# Prompt — Implementar item 2 do backlog: Formatter de arquivos LSP

Cole o bloco abaixo numa **nova conversa** do agente, dentro de `/Users/eliezer.organ/GitHub/LSPSenior`.
**Importante:** este item depende de o **item 1 (cabeçalho automático)** ter sido implementado antes
(release 1.8.0). Este será o **1.9.0**.

---

## 🎯 Tarefa

Implementar o **item 2** de [docs/BACKLOG.md](../BACKLOG.md): formatter para arquivos
`.lsp`/`.lspt`. Hoje aparece *"There is no formatter for 'lspt' files installed"* — registrar
um `DocumentFormattingEditProvider` (e opcionalmente `DocumentRangeFormattingEditProvider`)
que faça **reindentação conservadora** baseada em blocos.

## 📦 Contexto do projeto (leitura obrigatória antes de codar)

- Repositório: extensão VS Code "LSPT Language Support" (`eorgan.lspt-language-support`),
  publicada no Open VSX. JavaScript puro (sem build), API VS Code `^1.60.0`.
- Versão alvo após esta tarefa: **1.9.0**.
- Arquivos relevantes:
  - `extension.js` — providers existentes (use o mesmo padrão de registro). Já há um
    `stripCommentsAndStrings` reaproveitável para limpar linhas antes de classificar.
  - `Formatação/Exemplo de formatação e codigos.md` — **referência de estilo** desejada.
  - `package.json` — para `contributes.configuration`.
  - `CHANGELOG.md`, `README.md`.
  - `.env` — `OVSX_PAT` para publicar (gitignored).
- Spec completa: [docs/BACKLOG.md](../BACKLOG.md) item 2. **Leia antes de implementar.**

## ✅ Decisões já tomadas (não re-decidir)

- **MVP conservador**: o formatter **só ajusta a indentação à esquerda**. Nunca reordena,
  remove ou altera o conteúdo da linha. Nunca mexe dentro de strings ou comentários.
- **Estilo de brace**: reproduzir o estilo do exemplo do projeto — o `{`/`Inicio` fica
  **um nível abaixo** do cabeçalho de controle; o corpo fica **um nível abaixo do `{`**.
- **Recuo**: 3 espaços por nível (configurável via `lspt.format.indentSize`).
- **Comentários de seção** `@-- ... --@` sozinhos numa linha: seguem a indentação do bloco
  (não força coluna 0). Documentar como "limitação conhecida" no CHANGELOG/README.
- **Tabs vs espaços**: **espaços** (alinhar com o resto do projeto).

## 🧮 Algoritmo (estilo do exemplo)

Pelo exemplo:
```
Se(Condição)         ← nível 0, indent 0
   {                 ← nível 1, indent 3
      (body)         ← nível 2, indent 6
   }                 ← nível 1, indent 3
```

O `{` está um nível abaixo do cabeçalho de controle; o corpo está dois níveis abaixo.

### Estado

- `stack` — pilha com a indentação (em colunas) de cada `{`/`Inicio` aberto.
- `pendingControl` — booleano: a próxima linha de abertura de bloco abre o escopo do
  control header anterior.
- `controlIndent` — indentação numérica do último control header visto enquanto
  `pendingControl=true`.

### Tipos de linha (após `stripCommentsAndStrings`)

- `block_open`: linha cujo conteúdo (sem espaços) começa com `{`, ou é exatamente `Inicio` /
  `Inicio;` (case-insensitive).
- `block_close`: começa com `}`, ou é `Fim` / `Fim;` (case-insensitive).
- `control_header`: começa com `Se`/`Senao Se`/`Senao`/`Para`/`Enquanto` seguido de `(`,
  **ou** começa com `Funcao ` (declaração `Funcao Nome(...);`).
- `regular`: tudo o resto (assignment, chamada de função, declaração `Definir`, comentário
  de seção, linha em branco).

### Para cada linha (na ordem):

```
trimmed = strip leading/trailing spaces (preservando o conteúdo após o recuo)
classificar via stripped (sem strings/comentários)

if block_close:
   brace_indent = stack.pop() (se vazio, brace_indent = 0)
   indent = brace_indent
elif block_open:
   if pendingControl:
      indent = controlIndent + INDENT_SIZE
   elif stack vazio:
      indent = INDENT_SIZE (fallback p/ código top-level mal-formado)
   else:
      indent = stack[top] + INDENT_SIZE
   stack.push(indent)
   pendingControl = false
else:  # regular ou control_header
   if stack vazio:
      indent = 0
   else:
      indent = stack[top] + INDENT_SIZE
   if control_header:
      controlIndent = indent
      pendingControl = true
   else:
      # qualquer linha "regular" cancela o pending (não é o block_open esperado)
      pendingControl = false

linha_formatada = (' ' * indent) + trimmed (se linha não-vazia)
                  ou linha vazia
```

### Edge cases a tratar

- **Linhas em branco**: preservar como vazias (sem indentação).
- **Comentário de bloco `/* ... */` multilinha**: dentro dele, **não** mexer na indentação
  (skip). Detectar entrando/saindo do comentário entre linhas (mantenha `inBlockComment`).
- **Mesma linha com vários tokens** (ex: `Se(x) { y }`): MVP **não suporta**. Deixa a linha
  como está (não tenta refazer indentação dela). Documentar como limitação.
- **Linhas comentadas** começando com `@--` ou `@`: aplicar a mesma regra de regular
  (seguem indent do bloco). Exceção: se for o **primeiro `@--` antes de qualquer código**
  (cabeçalho de arquivo) e o stack está vazio, manter na coluna 0.
- **`Funcao Nome();`** isolada (apenas declaração no topo): é control_header, mas não
  necessariamente seguida de bloco — se a próxima linha não for `Inicio`, o
  `pendingControl` é cancelado (regra "linha regular cancela pending").

## 🏗️ Implementação

### Configuração (`package.json` → `contributes.configuration`)

```json
"lspt.format.indentSize": {
   "type": "integer", "default": 3, "minimum": 1, "maximum": 8,
   "description": "Número de espaços por nível de indentação no Format Document."
}
```

### Provider

Registrar em `activate()`:
```js
vscode.languages.registerDocumentFormattingEditProvider('lspt', {
   provideDocumentFormattingEdits(document /*, options, token*/) {
      const indentSize = vscode.workspace.getConfiguration('lspt')
         .get('format.indentSize', 3);
      const edits = computeFormatEdits(document, indentSize);
      return edits;
   }
});
```

`computeFormatEdits(document, indentSize)` percorre todas as linhas com o algoritmo
acima e retorna **um array de `TextEdit.replace`** apenas para as linhas cuja
indentação muda. Não tocar em linhas idênticas.

(Opcional: também `DocumentRangeFormattingEditProvider` — para "Format Selection".
Pode fatiar o array de edits ao range. Se for complexo, deixar para evolução.)

## 🧪 Validação (obrigatória antes de publicar)

Crie **arquivos de teste reais** em `Exemplos de Arquivos/` (ou similar — não commitar
nada novo se não quiser) e rode "Format Document" neles. Critérios:

1. Arquivos em `Exemplos de Arquivos/` formatam sem alterar conteúdo (apenas indentação).
2. O arquivo `Formatação/Exemplo de formatação e codigos.md` **descreve o resultado
   esperado** — os blocos de código nele devem permanecer com a mesma indentação após o
   formatter rodar.
3. **Idempotência**: rodar Format Document duas vezes seguidas produz exatamente o mesmo
   resultado da primeira vez.
4. **Não corrompe conteúdo**: aplique em um arquivo qualquer, salve, e diff só pode mostrar
   mudanças de whitespace no início das linhas.
5. **Strings com chaves dentro** não enganam o algoritmo (graças ao
   `stripCommentsAndStrings`).
6. **Sem regressão visual** no Antigravity: peça ao usuário testar em um arquivo grande
   real antes do release.

## 📦 Release

1. Bump `package.json` para **1.9.0**.
2. CHANGELOG: nova entrada `## [1.9.0]` documentando o formatter, a configuração
   `lspt.format.indentSize` e as limitações conhecidas (mesma linha com vários tokens,
   comentários de seção seguem indent do bloco).
3. README: atualizar Configurações + Funcionalidades (mencionar Format Document).
4. `npx @vscode/vsce@latest package` → gera `lspt-language-support-1.9.0.vsix`.
5. Publicar: `set -a; . ./.env; set +a; npx ovsx publish lspt-language-support-1.9.0.vsix`.
6. Commit (Conventional Commits) + push para `origin/main`.

## ⚠️ Restrições

- **Formatter pode corromper código se a regra for imperfeita.** Antes de publicar,
  validar em arquivos reais e pedir ao usuário para testar em um arquivo de produção.
- **Nunca alterar conteúdo** das linhas além do whitespace inicial.
- **Não introduzir dependências npm**.
- Mensagens/UI em PT-BR.

## 📚 Referências

- [docs/BACKLOG.md](../BACKLOG.md) — spec do item 2
- [extension.js](../../extension.js) — `stripCommentsAndStrings` e padrão dos providers
- [Formatação/Exemplo de formatação e codigos.md](../../Formatação/Exemplo%20de%20formatação%20e%20codigos.md) — estilo de referência
