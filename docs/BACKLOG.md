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

---

## 2. Formatter de arquivos LSP (`Format Document`)

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

- [ ] "Format Document" passa a funcionar em `.lsp`/`.lspt`.
- [ ] Só altera indentação; conteúdo/strings/comentários preservados.
- [ ] Recuo configurável; validado em arquivos reais de produção.
