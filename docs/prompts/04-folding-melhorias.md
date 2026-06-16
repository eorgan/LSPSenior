# Prompt — Implementar item 4 do backlog: Melhorar dobramento (folding)

Cole o bloco abaixo numa **nova conversa** do agente, dentro de `/Users/eliezer.organ/GitHub/LSPSenior`.
Este item gera o release **1.10.0** (feature + bugfix de markers).

---

## 🎯 Tarefa

Implementar o **item 4** de [docs/BACKLOG.md](../BACKLOG.md): melhorar o folding de código
nos arquivos `.lsp`/`.lspt`. Hoje a dobra começa em `Inicio` (preview ruim) e o
`language-configuration.json` tem markers de start sem par (bug).

## 📦 Contexto do projeto (leitura obrigatória)

- Repositório: extensão VS Code "LSPT Language Support" (`eorgan.lspt-language-support`),
  v1.9.0 publicada no Open VSX. JS puro, sem build.
- Versão alvo: **1.10.0**.
- Arquivos relevantes:
  - `extension.js` — já registra `registerFoldingRangeProvider('lspt', ...)` que dobra
    `Inicio` → `Fim;` usando uma pilha. Há também `stripCommentsAndStrings(...)` reusável.
  - `language-configuration.json` — tem bloco `folding.markers` mal pareado:
    ```json
    "folding": {
      "markers": {
        "start": "^\\s*@--.*--@|Inicio|Se\\(|Enquanto\\(|Para\\(|Funcao",
        "end":   "Fim;?"
      }
    }
    ```
    O regex de `start` aceita `Se(`/`Enquanto(`/`Para(`/`Funcao` (que não pareiam com `Fim;`
    sozinhos) e `@--...--@` (que também não pareia). **Remover esses markers** e centralizar
    no provider.
  - `package.json` — `lspt.fold.*` se quiser adicionar config.
  - `CHANGELOG.md`, `README.md`.
  - `Formatação/Exemplo de formatação e codigos.md` — referência do estilo dos arquivos.
  - `.env` — `OVSX_PAT` para publicar (gitignored).

## ✅ Decisões já tomadas (não re-decidir)

- **Preview da dobra**: a dobra de uma função começa na linha do `Funcao Nome();`
  (cabeçalho), não em `Inicio`. Mesmo princípio para `Se`/`Senao`/`Para`/`Enquanto` quando
  precedem `{` ou `Inicio` na linha imediatamente seguinte (pulando vazias).
- **Seções `@-- TITULO --@`**: dobrar do título atual **até a linha imediatamente antes
  do próximo `@--`** (ou até EOF, exclusive a linha em branco final). Tag como
  `FoldingRangeKind.Region`.
- **`language-configuration.json`**: **remover** o bloco `folding.markers` por inteiro.
  Tudo passa a sair do provider (única fonte de verdade).
- **Funções top-level só com `Definir Funcao Nome();`** sem corpo (`Inicio/Fim`): **não dobrar**.
- **Não introduzir nova dependência npm.**

## 🧮 Algoritmo do provider melhorado

Estado durante a varredura linha a linha (após `stripCommentsAndStrings` + tratamento de
`/* */` multi-linha):

```
const stack = [];          // pilha de { kind, headerLine }
let pendingHeader = null;  // linha do último control header / Funcao visto, ainda não pareado
let sectionStart = null;   // linha do último "@-- ... --@" (para seções @--)
```

Para cada linha `i`:

1. **Comentários de seção** (`^\s*@--.*--@\s*$`):
   - Se `sectionStart !== null` e `i - 1 > sectionStart`: push range `(sectionStart, i - 1)`
     com `kind = Region`.
   - `sectionStart = i`.
   - Pula o resto (não conta como header nem bloco).

2. **Cabeçalho de bloco** (`^\s*(Funcao|Se|Senao(?:\s+Se)?|Para|Enquanto)\b...`):
   - `pendingHeader = i`. (Será usado quando o próximo `Inicio` ou `{` aparecer.)

3. **Abertura de bloco** (`Inicio` ou `{`):
   - `startLine = (pendingHeader !== null) ? pendingHeader : i`.
   - `pendingHeader = null`.
   - push `{ kind: 'block', startLine }` em `stack`.

4. **Fechamento de bloco** (`Fim` ou `}`):
   - pop. Se `i > startLine`, push range `(startLine, i)` com `kind = Region` (ou sem
     kind para "default").

5. **Linha "regular" que não é header nem block-open**:
   - Se `pendingHeader !== null` (control header sem bloco aberto), **descartar**
     (`pendingHeader = null`). Evita poluir o próximo Inicio com um header antigo.

6. **No fim do arquivo**:
   - Se `sectionStart !== null` e `lineCount - 1 > sectionStart`: push range
     `(sectionStart, lineCount - 1)` com `kind = Region`. Fecha a última seção.

### Edge cases obrigatórios

- **Linhas em branco entre header e block-open** (`Funcao X();` ↩ `↩` ↩ `Inicio`): suportar,
  o `pendingHeader` deve persistir até `Inicio`/`{`.
- **Comentário de bloco `/* ... */` multi-linha**: ignorar linhas inteiras enquanto
  `inBlockComment`. Mantenha a lógica atual.
- **Strings com `Inicio`/`Fim`**: já tratado por `stripCommentsAndStrings`.
- **Dobra dentro de outra**: a pilha lida com aninhamento.
- **`@--` no meio de linha (ex: `vaX = 1; @-- comentário --@`)**: **não** é uma seção, só
  comentário inline. A regex de seção deve exigir início de linha (`^\s*@--`) **E** que a
  linha seja "só comentário".

## 🛠️ Mudanças concretas

### `language-configuration.json`

Remover o bloco `folding.markers` (deixar só `comments`, `brackets`, `autoClosingPairs`,
`surroundingPairs`, `wordPattern`, `indentationRules`). O provider passa a ser a única
fonte de folding.

### `extension.js`

Substituir o `provideFoldingRanges` atual pelo algoritmo acima. Retornar
`vscode.FoldingRange(start, end, vscode.FoldingRangeKind.Region)` para seções e blocos.

Não esqueça que ranges são **inclusivas** em VS Code, mas a linha de início **fica
visível** quando dobrado e a de fim some. Então:
- Para função: start = linha do `Funcao Nome();`, end = linha do `Fim;`. O preview mostra
  `Funcao Nome();`.
- Para seção `@--`: start = linha da marcação, end = linha **anterior** à próxima `@--`
  (não inclui a próxima marcação). O preview mostra o título da seção.

## 🧪 Validação (obrigatória antes de publicar)

Crie/use um arquivo `.lspt` real (ex: alguma `Regra*` em `Exemplos de Arquivos/` ou do
projeto Gemma) com:
- Várias funções com `Inicio/Fim`.
- Blocos `Se/Senao/Para/Enquanto` aninhados (com `{}` e com `Inicio/Fim`).
- Várias seções `@-- ... --@` ao longo do arquivo.
- Comentários `@-- foo --@` no meio de linhas (inline) — esses **não** devem virar dobra.

Critérios:
1. Colapsar uma função mostra `Funcao Nome(); ⋯` (não `Inicio ⋯`).
2. Colapsar uma seção `@-- Declarar Variaveis --@` mostra a marcação como header e
   esconde tudo até logo antes do próximo `@--`.
3. `Cmd+K Cmd+8` (Fold All Regions) colapsa todas as seções de uma vez.
4. Estruturas aninhadas continuam dobráveis em qualquer profundidade.
5. Re-dobrar/desdobrar várias vezes não corrompe o estado.
6. Sem dobras "fantasmas" (start sem end ou vice-versa).
7. `language-configuration.json` válido após remoção do bloco `folding.markers`
   (`node -e "JSON.parse(require('fs').readFileSync('language-configuration.json','utf8'))"`).

## 📦 Release

1. Bump `package.json` para **1.10.0**.
2. CHANGELOG: nova entrada `## [1.10.0]` documentando:
   - Preview da dobra agora mostra o cabeçalho da função.
   - Suporte a dobramento de seções `@-- ... --@` como regiões.
   - Bugfix: removido `folding.markers` mal pareado de `language-configuration.json`.
3. README: atualizar a tabela de **Funcionalidades** mencionando o folding melhorado.
4. `npx @vscode/vsce@latest package` → `lspt-language-support-1.10.0.vsix`.
5. Publicar: `set -a; . ./.env; set +a; npx ovsx publish lspt-language-support-1.10.0.vsix`.
6. Commit (Conventional Commits) + push para `origin/main`.
7. Marcar item 4 em [docs/BACKLOG.md](../BACKLOG.md) como ✅ concluído com referência ao release.

## ⚠️ Restrições

- Não tocar em outras providers (completion, hover, signature, definition, outline,
  formatter, diagnostics). Folding é isolado.
- Não introduzir dependências npm.
- Sem regressão em arquivos que já funcionam.
- O `.vsix` e o `.env` continuam gitignored.

## 📚 Referências

- [docs/BACKLOG.md](../BACKLOG.md) — spec do item 4
- [extension.js](../../extension.js) — `provideFoldingRanges` atual e `stripCommentsAndStrings`
- [language-configuration.json](../../language-configuration.json) — bloco a remover
- [Formatação/Exemplo de formatação e codigos.md](../../Formatação/Exemplo%20de%20formatação%20e%20codigos.md) — estilo de referência
