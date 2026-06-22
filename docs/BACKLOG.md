# Backlog da extensão

Ideias aprovadas para implementar depois (não priorizadas no código ainda).

> **Todos os itens (1–5) concluídos.**

---

## 1. Cabeçalho automático com dados do Git (snippet `header`) — ✅ Concluído (v1.8.0 + v1.8.1)

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

- [x] Inserir cabeçalho preenche Author/Email (do Git) e Date (criação) automaticamente.
- [x] Salvar um `.lsp`/`.lspt` com cabeçalho atualiza "Last Modified by/time".
- [x] Funciona sem Git (degrada graciosamente) e é configurável/desativável.

**Releases:** v1.8.0 (feature) e v1.8.1 (bugfix: autofill de Author/Email mesmo em
arquivo sem título).

---

## 2. Formatter de arquivos LSP (`Format Document`) — ✅ Concluído (v1.9.0)

**Objetivo:** habilitar "Format Document" para `.lsp`/`.lspt` (hoje aparece
"There is no formatter for 'lspt' files installed").

### Viabilidade — ✅ possível

Registrar `DocumentFormattingEditProvider` (e opcionalmente
`DocumentRangeFormattingEditProvider`) para a linguagem `lspt`.

### Abordagem (MVP conservador)

- **Apenas reindentação** (ajusta os espaços à esquerda); nunca reordena, remove ou
  altera o conteúdo da linha, nem mexe dentro de strings/comentários. Baixo risco.
- Profundidade de bloco: `{` e `Inicio` aumentam um nível; `}` e `Fim` diminuem.
  Cabeçalhos de controle (`Se`/`Senao`/`Para`/`Enquanto`/`Funcao`) que precedem um bloco
  adicionam o nível do próximo bloco.
- Recuo configurável: `lspt.format.indentSize` (padrão **3**, conforme
  `Formatação/Exemplo de formatação e codigos.md`).

### Estilo de referência (do exemplo do projeto)

```lsp
Se(Condição)
   {
      
   }
Senao
   {
      
   }

Funcao BuscarParamWS();
   Inicio

   Fim;
```
Observação: o `{`/`Inicio` fica **um nível abaixo** do cabeçalho de controle, e o corpo um
nível abaixo do `{` — estilo peculiar, reprodutível mas opinativo.

### Pontos a decidir

- Reproduzir o estilo "brace indentado abaixo do controle" ou o estilo mais comum
  (brace alinhado ao controle)? Tornar configurável?
- Comentários de seção `@-- ... --@` na coluna 0 (como no exemplo) vs. seguir a indentação
  do bloco — definir regra.
- Tabs vs espaços; preservar linhas em branco.

### Ressalvas

- Formatter é o recurso mais delicado: regra de indentação imperfeita pode recuar linhas
  de forma estranha. Exige **teste em arquivos reais** antes de confiar.
- Possível evolução: formatação completa (espaçamento de operadores, alinhamento),
  fora do MVP.

### Critério de pronto

- [x] "Format Document" passa a funcionar em `.lsp`/`.lspt`.
- [x] Só altera indentação; conteúdo/strings/comentários preservados.
- [x] Recuo configurável; validado em arquivos reais de produção.

**Release:** v1.9.0 (reindentação conservadora, configurável via `lspt.format.indentSize`).

---

## 3. Catalogar APIs `SQL_*` e `Http*` em `functions.json` — ✅ Concluído (v1.11.0)

**Contexto:** descoberto durante a evolução da skill lsp-senior — o `functions.json`
cobre ~600 funções de regra, mas **não** inclui as APIs `SQL_*` (cursores) nem `Http*`
(requisições). Hoje a skill compensa documentando essas APIs em
[`.claude/skills/lsp-senior/reference/quick-reference.md`](../.claude/skills/lsp-senior/reference/quick-reference.md)
(nomes validados nos exemplos reais `.lspt`).

**Objetivo:** trazer essas APIs para o catálogo canônico (assinatura/params/descrição/
retorno), para que apareçam em hover, autocomplete, signature help, gramática e linter
em pé de igualdade com as 600 funções atuais.

### Viabilidade — ✅ possível

Fontes para extração:
- Manuais oficiais Senior (Tecnologia: `regra-para-web-services/`, cursores) — parte já
  parseada no overlay ERP.
- `reference/quick-reference.md` da skill (lista de nomes validados nos exemplos `.lspt`).
- Exemplos reais em `Exemplos de Arquivos/` (e nos arquivos do projeto Gemma).

### Pontos a decidir

- Acrescentar um terceiro overlay (`data/functions-api.json`) ou estender o CSV?
- Onde no esquema marcar "API vs função de regra"? Talvez um campo `category`
  (`'rule'` / `'sql'` / `'http'`) em funcData.
- Quais funções entrar de cara? (mínimo: as referenciadas pela skill + comuns nos exemplos).
- O linter precisa de regras específicas para `SQL_*` (ex: cursor sem `SQL_FecharCursor`)?

### Critério de pronto

- [x] `SQL_*` e `Http*` aparecem em autocomplete/hover/signature como as demais.
- [x] Doc rica (descrição + params + retorno) por função.
- [x] Gramática `tmLanguage` atualizada automaticamente via `build-grammar-functions.js`.
- [ ] (Opcional) Linter reconhece `SQL_*`/`Http*` para checagens específicas. _(adiado — ver item futuro)_
- [x] `reference/quick-reference.md` aponta para o catálogo (em vez de manter lista paralela).

### ✅ Resolução (v1.11.0)

- **13 `SQL_*` + 31 `Http*` no catálogo** (`functions.json` → categorias `sql`/`http`),
  com assinatura, direção dos parâmetros e descrição validadas nos exemplos reais `.lspt`.
- **Trilha A (`Http*`):** o extrator (`extract-from-erp-docs.js`) já capturava as ~35 funções
  dos manuais — o overlay commitado estava apenas desatualizado. Bastou reexecutar o pipeline;
  29 `Http*` com assinatura entraram automaticamente (+2 de cookie via overlay curado).
- **Trilha B (`SQL_*`):** não havia *heading* estruturado nos manuais → criado o overlay
  curado [`data/functions-api.json`](../data/functions-api.json), mesclado pelo
  `generate-functions.js`.
- **Esquema:** novo campo `category` (`rule`/`sql`/`http`) em cada função.
- **Checagem leve do linter** (cursor sem `SQL_FecharCursor`/`SQL_Destruir`) ficou anotada
  como item futuro de baixo risco.

---

## 4. Melhorar dobramento (folding) de código — ✅ Concluído (v1.10.0)

**Contexto:** o folding atual dobra `Inicio` → `Fim;`, mas a dobra começa **dentro** do bloco
(no `Inicio`). Quando a função é colapsada, o preview mostra "Inicio" — pouco informativo.
Além disso, `language-configuration.json` declara markers de start (`Se(|Enquanto(|Para(|Funcao`)
que **não pareiam** com `Fim;`, causando dobras inconsistentes.

**Objetivo:**
1. Preview da dobra mostrar a linha do **cabeçalho** (`Funcao Nome();`, `Se (cond)`, etc.) em
   vez de "Inicio".
2. Permitir dobrar **seções** marcadas por `@-- TITULO --@` (estilo "região") — devs usam
   essas marcações como índice do arquivo.
3. Corrigir o bug do `language-configuration.json` (markers mal pareados).
4. Tag de `FoldingRangeKind.Region`/`Comment` para integrar com **Fold All Regions/Comments**.

### Viabilidade — ✅ possível

Tudo via `FoldingRangeProvider` (já registrado em `extension.js`) + ajuste em
`language-configuration.json`.

### Pontos a decidir

- Seções `@-- TITULO --@`: dobrar do título atual **até o próximo `@--`** ou **até a próxima
  marca de mesmo nível**? Simplificação: até o próximo `@--` (ou EOF).
- Manter ou remover o bloco `folding.markers` do `language-configuration.json`?
  Recomendação: remover e centralizar a lógica no provider (única fonte de verdade,
  evita conflitos).
- Funções top-level sem `Inicio` (só `Definir Funcao Nome();`): dobrar ou não? Provavelmente não.

### Critério de pronto

- [x] Colapsar uma função mostra `Funcao Nome(); …` no preview (não `Inicio`).
- [x] `Cmd+K Cmd+8` (Fold All Regions) colapsa todas as seções `@-- ... --@`.
- [x] Sem regressões em arquivos com `Se/Senao/Para/Enquanto` aninhados.
- [x] Idempotente: dobrar/desdobrar várias vezes não corrompe estado.

---

## 5. Linter: detectar cursor `SQL_*` aberto sem fechar — ✅ Concluído (v1.11.2 + v1.11.3)

**Contexto:** ao catalogar as APIs `SQL_*` (item 3, v1.11.0), anotamos como item futuro
uma checagem leve: se `SQL_AbrirCursor` é chamado em uma função sem um `SQL_FecharCursor`
ou `SQL_Destruir` correspondente no mesmo escopo, o cursor vaza recursos.

**Objetivo:** emitir um `Warning` no linter (`computeDiagnostics`) apontando a linha do
`SQL_AbrirCursor` que não tem fechamento correspondente dentro da mesma função.

### Viabilidade — ✅ possível (baixo risco)

O linter em `extension.js:computeDiagnostics` já tem:
- Pilha de blocos (`blockStack`) para rastrear `Inicio`/`Fim` e `{`/`}`
- `stripCommentsAndStrings` para ignorar texto em strings/comentários
- `extractArgs` para obter o 1º argumento de uma chamada de função

A adição é: rastrear mudança de escopo de função (detectar `Funcao` + `Inicio` e o `Fim`
correspondente) e, em cada escopo, manter um `Map<cursorVar → lineNo>` de cursores abertos.
Ao fechar o escopo, qualquer cursor ainda no map vira Warning.

### Pontos a decidir (todos pré-decididos)

- **Escopo:** por função (`Funcao X()` → `Fim;`) **e** no nível raiz do arquivo (código
  fora de qualquer função). Cursor aberto e não fechado = bug.
- **Identificação do cursor:** 1º argumento de `SQL_AbrirCursor(X)`. Se for expressão
  complexa (espaços/operadores), ignorar (conservador, sem falso positivo).
- **Fechamento:** `SQL_FecharCursor(X)` **ou** `SQL_Destruir(X)` com o mesmo 1º argumento
  (case-insensitive, trim).
- **Setting:** `lspt.diagnostics.sqlCursorLeak` (boolean, padrão `true`), listado em
  `contributes.configuration` do `package.json`.
- **Severidade:** `Warning`.
- **Mensagem:** `"Cursor '${cursor}' aberto com SQL_AbrirCursor mas não fechado com SQL_FecharCursor/SQL_Destruir nesta função."`

### Critério de pronto

- [x] Warning aparece na linha do `SQL_AbrirCursor` quando não há fechamento na mesma função.
- [x] Sem falso positivo quando o cursor **é** fechado (mesmo nome, mesma função).
- [x] `lspt.diagnostics.sqlCursorLeak: false` desabilita a checagem.
- [x] Sem regressão nas checagens existentes (Pare/Continue e operações em parâmetros).
- [x] Validado nos arquivos de `Exemplos de Arquivos/` (0 warnings indevidos).
- [x] Cobertura estendida para código no nível raiz do arquivo (v1.11.3).

---

### ✅ Resolução (v1.11.2 + v1.11.3)

- **`extension.js:computeDiagnostics`** estendido com pilha de escopos de função
  (`cursorScopes`, `funcScopeDepths`) e mapa raiz (`rootCursorScope`).
- Ao detectar `Funcao` + `Inicio`: abre escopo. Ao detectar `Fim` pareado: fecha escopo e
  emite Warning para cada cursor ainda aberto na linha onde foi aberto.
- Cursores no nível raiz rastreados em `rootCursorScope`; warnings emitidos ao final do
  arquivo (v1.11.3).
- Item 3's optional checkbox "linter reconhece `SQL_*`/`Http*` para checagens específicas"
  entregue neste item.

---

### ✅ Resolução (v1.10.0) — item 4: Folding

`provideFoldingRanges` reescrito em [extension.js](../extension.js): varredura linha a linha
com pilha de blocos + `pendingHeader` (cabeçalho `Funcao`/`Se`/`Senao`/`Para`/`Enquanto`
pareado ao próximo `Inicio`/`{`) + `sectionStart` para seções. Decisões aplicadas:

- **Preview** começa no cabeçalho da função/controle (não em `Inicio`); linhas em branco
  entre cabeçalho e `Inicio`/`{` são suportadas.
- **Seções `@-- ... --@`** dobradas como `FoldingRangeKind.Region`, da marcação até logo
  antes do próximo banner (ou EOF, sem linhas em branco finais). **Refinamento de
  implementação:** só banners ancorados na **coluna 0** (`^@--`) viram seção — os arquivos
  reais têm muitos comentários `@-- ... --@` **indentados** dentro de funções (notas inline)
  que **não** devem dobrar. A regex original `^\s*@--` os transformaria em seções, quebrando
  a UX. Validado nos 6 arquivos de `Exemplos de Arquivos/` (0 blocos não fechados, 0
  sobreposições impróprias — o padrão `} Senao {` gera folds irmãos válidos).
- **`folding.markers` removido** de `language-configuration.json` (fonte única no provider).
- Funções só com `Definir Funcao Nome();` (sem corpo) **não** dobram.
