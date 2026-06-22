# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).




## [1.11.0] - 2026-06-22

### ✨ Adicionado
- **APIs `SQL_*` (cursores) e `Http*` (requisições) no catálogo canônico.** As 13 funções
  do ciclo de cursor (`SQL_Criar`, `SQL_UsarSqlSenior2`, `SQL_UsarAbrangencia`,
  `SQL_DefinirComando`, `SQL_AbrirCursor`, `SQL_EOF`, `SQL_Proximo`,
  `SQL_RetornarAlfa/Inteiro/Data/Flutuante`, `SQL_FecharCursor`, `SQL_Destruir`) e 31 funções
  `Http*` agora aparecem em hover, autocomplete, signature help, *outline*, gramática e linter
  — como as ~600 funções de regra. Assinaturas e direção dos parâmetros validadas nos exemplos
  reais `.lspt`.
- **Campo `category` em cada função do `functions.json`** (`rule`, `sql` ou `http`), derivado
  do prefixo do nome. Base para filtros e checagens futuras do linter.
- **Overlay curado `data/functions-api.json`** com as `SQL_*` e as `Http*` de cookie que não
  constam como *headings* nos manuais, mesclado pelo `generate-functions.js` com a mesma lógica
  *case-insensitive* dos demais overlays.

### 🐛 Corrigido
- **Pipeline de extração de `Http*` regenerado.** O overlay ERP (`data/functions-doc-erp.json`)
  estava desatualizado e não trazia as ~35 funções `Http*` que já existiam nos manuais; ao
  reexecutar o pipeline, 29 `Http*` com assinatura entram no catálogo automaticamente.
- **Higiene de empacotamento:** `docs/prompts/` deixou de vazar para o `.vsix`
  (adicionado ao `.vscodeignore`).

## [1.10.0] - 2026-06-16

### ✨ Adicionado
- **Dobramento (folding) reescrito e centralizado no provider.** O *preview* da dobra de
  uma função agora mostra o **cabeçalho** (`Funcao Nome(); ⋯`) em vez de `Inicio ⋯`. O mesmo
  vale para `Se`/`Senao`/`Para`/`Enquanto`: a dobra começa na linha do controle, mesmo que o
  `{`/`Inicio` esteja em linha seguinte (linhas em branco no meio são suportadas).
- **Dobramento de seções `@-- ... --@`.** Banners de seção ancorados na **coluna 0**
  (ex.: `@-- Declarar Variaveis --@`) viram **regiões dobráveis** (`FoldingRangeKind.Region`),
  da marcação até logo antes do próximo banner (ou fim do arquivo). Permite colapsar todas as
  seções de uma vez com **Fold All Regions** (`Cmd+K Cmd+8`). Comentários `@-- ... --@`
  **indentados** (notas inline) **não** viram dobra.
- **Suporte a blocos com chaves `{`/`}`** (estilo `Se(cond) { ... }`) além de `Inicio`/`Fim`,
  com aninhamento em qualquer profundidade.

### 🐛 Corrigido
- Removido o bloco `folding.markers` mal pareado de `language-configuration.json` (os markers
  `Se(`/`Enquanto(`/`Para(`/`Funcao` e `@--...--@` não pareavam com `Fim;`, gerando dobras
  fantasmas). O *folding* passa a sair **exclusivamente** do provider — fonte única de verdade.

## [1.9.0] - 2026-06-16

### ✨ Adicionado
- **Format Document para `.lspt`/`.lsp`.** A extensão passa a registrar um
  `DocumentFormattingEditProvider` (e `DocumentRangeFormattingEditProvider` para
  *Format Selection*) — acaba o aviso *"There is no formatter for 'lspt' files installed"*.
- **Reindentação conservadora baseada em blocos.** O formatter **só ajusta o recuo à
  esquerda** — nunca reordena, remove ou altera o conteúdo da linha, e nunca toca em
  strings ou comentários (`@..@`, `@--..--@`, `/* */`). Reproduz o estilo do projeto:
  `{`/`Inicio` ficam **um nível abaixo** do cabeçalho de controle (`Se`/`Senao`/`Para`/
  `Enquanto`/`Funcao`) e o corpo um nível abaixo do `{`/`Inicio`. É **idempotente**
  (rodar duas vezes dá o mesmo resultado).
- **Recuo sob comentário de seção.** Linhas sob um `@-- ... --@` sozinho na linha são
  recuadas um nível (estilo do projeto — ex.: `Definir`s sob `@-- Declarar Variaveis --@`),
  até o próximo comentário de seção, cabeçalho de controle ou limite de bloco.
- **Seguro com strings/comentários multi-linha.** Strings literais quebradas com `\` no fim
  da linha e blocos `/* ... */` **não são reindentados** (alterar o recuo dessas linhas
  mudaria o conteúdo) — o `Se(x) {` na mesma linha também não desbalanceia as seguintes.
- **Nova configuração** `lspt.format.indentSize` (padrão **3**; 1–8) — espaços por nível.

### ⚠️ Limitações conhecidas do formatter
- **Código no nível superior (fora de função/bloco)** é recuado para a **coluna 0**.
  Declarações `Definir`/atribuições agrupadas sob um comentário de seção `@-- ... --@`
  **não** mantêm o recuo cosmético — todas voltam à coluna 0.
- **Comentários de seção `@-- ... --@`** seguem a indentação do bloco atual (não forçam
  coluna 0). O primeiro `@--` do arquivo, antes de qualquer código, fica na coluna 0.
- **Vários tokens na mesma linha** (ex.: `Se(x) { y }`): a indentação **da própria linha**
  não é refeita, mas o balanceamento de blocos é mantido (as linhas seguintes não
  desalinham). Para `Se(x) {` com o corpo em linhas separadas, o corpo é recuado em
  estilo K&R (um nível abaixo do cabeçalho).
- Não há formatação de espaçamento de operadores nem alinhamento — apenas o recuo.

## [1.8.1] - 2026-06-16

### 🐛 Corrigido
- **`@Author`/`@Email` em branco ao inserir em arquivo sem título.** A identidade do Git
  não era resolvida quando o cabeçalho era inserido num arquivo *untitled* (ainda não
  salvo). Agora, sem raiz de workspace pelo documento, usa a **1ª pasta do workspace
  aberto** para ler o `git config`.
- **Preenchimento de `@Author`/`@Email` no save.** Ao salvar, se essas linhas do cabeçalho
  estiverem **vazias** e houver identidade do Git, elas são preenchidas (nunca sobrescreve
  um valor já digitado à mão). Assim, cabeçalhos inseridos antes da identidade resolver se
  autocorrigem no primeiro save.

## [1.8.0] - 2026-06-16

### ✨ Adicionado
- **Cabeçalho automático com dados do Git** — comando **"LSPT: Inserir cabeçalho"**
  (paleta) e completions `header`/`lspt-header` agora inserem o bloco **já preenchido**:
  - `@Author`/`@Email` lidos de `git config user.name`/`user.email` (cacheados por
    workspace);
  - `@Date` da data de criação do arquivo (`birthtime`, com fallback para a data atual);
  - cursor posicionado em `@Description` para edição imediata.
- **Auto-atualização ao salvar** — `@Last Modified by`/`@Last Modified time` são
  atualizados automaticamente ao salvar arquivos `.lspt`/`.lsp`. Mexe **somente** nessas
  duas linhas do primeiro bloco de comentário, é idempotente (não entra em loop de save) e
  não sobrescreve o autor quando não há identidade do Git.
- **Novas configurações** `lspt.header.autoUpdate`, `lspt.header.fallback.author` e
  `lspt.header.fallback.email`.

### 🔧 Alterado
- **Removidos os snippets estáticos** `header` e `lspt-header` do
  `snippets/lspt-snippets.json` — o cabeçalho passou a ser gerado dinamicamente pela
  extensão (snippets estáticos não conseguem ler o `git config`).

### 🧩 Degradação graciosa
- Sem Git no projeto, o cabeçalho ainda é inserido; `@Author`/`@Email` ficam com o
  fallback das settings ou vazios, e o save não falha.

## [1.7.1] - 2026-05-26

### ✨ Adicionado
- **Atribuição de fontes:** cada função documentada agora traz o **link para a página
  oficial** da Senior, exibido no hover e no doc (`docs/functions/*.md`). 491 funções com link.
- README com seção **"Fontes e Créditos"** (documentação oficial Senior, manual comunitário
  e nota de não-afiliação).

### 🔧 Atualizado
- README do usuário revisado: 600+ funções, novos recursos (linter, autocomplete geral,
  Outline, folding), instalação pela galeria e configurações reais (`lspt.diagnostics.*`).

## [1.7.0] - 2026-05-26

### ✨ Adicionado
- **Autocomplete geral** — sugere funções, palavras reservadas e variáveis de sistema
  conforme você digita (não só após `Dev.`).
- **Diagnostics (linter)** — avisa em tempo real sobre as armadilhas da LSP:
  - operação/concatenação/chamada de função **dentro de parâmetro** (ex: `Mensagem(..., "x" + y)`);
  - `Pare;`/`Continue;` fora de loop `Para`/`Enquanto`;
  - (opcional) função não encontrada no catálogo.
  Configurável em `lspt.diagnostics.*`.
- **Outline / símbolos** — funções (`Funcao`) aparecem no painel Outline e breadcrumbs.
- **Hover para variáveis de sistema** (`DatSis`, `CodEmp`, `NumPag`, ...).
- **Ir para definição de funções do usuário** (Cmd+Click salta para o `Funcao X()` no arquivo).
- **Folding de blocos `Inicio`/`Fim`**.
- **Comando "LSPT: Buscar função no catálogo"** — quick-pick sobre as ~600 funções que
  insere a chamada com parâmetros.
- **Novos snippets:** `data-sistema`, `data-monta`, `ws-interno`, `cfg-valor`.

### 🔧 Melhorado
- Hover, signature help e go-to-definition agora reconhecem nomes de função
  **ignorando maiúsculas/minúsculas** (a LSP é case-insensitive).

## [1.6.1] - 2026-05-26

### ✨ Melhorado
- **Hover e signature help mais ricos:** agora exibem a **descrição de cada parâmetro**
  (438 funções) e os **valores de retorno** (195 funções) — antes esses dados só
  apareciam no arquivo `.md` (Go to Definition).
- `functions.json` passou a guardar `params[].description` e `returns`.
- Merge **campo-a-campo** dos overlays: funções já documentadas pelo manual ganham
  `valores de retorno`/`exemplo` que só existiam no manual do ERP.

## [1.6.0] - 2026-05-26

Catálogo expandido com os manuais consolidados do ERP e da Tecnologia (WebScraping).

### ✨ Adicionado
- **~231 funções novas** no catálogo (`functions.json`: 369 → **600**), com assinatura,
  parâmetros, descrição, exemplo e syntax highlighting. Inclui funções muito usadas que
  faltavam (`Base64Encode/Decode`, `AlfaParaInt`, `ArqExiste`, `DataHoraUTC`, controles
  de relatório, etc.) e funções específicas de módulos do ERP.
- **255 funções** com descrição/parâmetros/exemplo reais no hover, autocomplete e docs
  (antes: 57).
- `scripts/extract-from-erp-docs.js` — extrai dos manuais consolidados (suporta os dois
  formatos: `Sintaxe:`+tabela e `**Sintaxe:**` inline) para `data/functions-doc-erp.json`.

### 🔧 Corrigido
- `extractParameters`: parâmetros de saída com `end` minúsculo agora têm o tipo correto.
- Dedup case-insensitive de funções (a LSP não distingue maiúsculas/minúsculas).
- Docs gerados passam a ser regeneráveis (marcador de rodapé), propagando melhorias de
  template; docs editados à mão continuam preservados.

## [1.5.7] - 2026-05-26

Enriquecimento da extensão a partir do manual oficial da LSP (LSPSeniorDoc).
Consolida também a versão intermediária 1.5.6.

### ✨ Adicionado
- **Descrições reais de funções** — 57 funções built-in agora exibem descrição,
  parâmetros e exemplos extraídos do manual no hover e no autocomplete (antes
  todas tinham texto genérico).
- **Documentação por função** — 57 arquivos em `docs/functions/*.md` preenchidos
  com descrição, parâmetros, valores de retorno e exemplo real (usados pelo
  "Go to Definition").
- **Syntax highlighting ampliado** — variáveis de sistema (`DatSis`, `CodEmp`,
  `NumPag`, etc.), palavras reservadas completas (`Definir`, `Pare`, `VaPara`,
  `Regra`, `Inserir`, I/O de arquivos, `ValRet`/`ValStr`), tipos `Lista`/`Tabela`/
  `Grid` e as 369 funções built-in destacadas. Matching case-insensitive.
- **Novos snippets** — `http-get`, `json-valor` (ValorElementoJson), `lista-json`
  (ListaRegra a partir de array JSON) e `valida-nulo` (EstaNulo).

### 🔧 Infraestrutura
- `scripts/extract-from-docs.js` — gera o overlay `data/functions-doc.json` do manual.
- `scripts/build-grammar-functions.js` — sincroniza a gramática com `functions.json`.
- `generate-functions.js` mescla o overlay de forma idempotente (regeneração preserva
  as descrições reais).

### 🧹 Empacotamento
- `.vscodeignore` enxugado: arquivos de desenvolvimento (`scripts/`, `data/`,
  `Exemplos de Arquivos/`, `Formatação/`, `.claude/`, `docs/*.md`) não vão mais no
  pacote publicado; `docs/functions/` é preservado (necessário em runtime).
- Removido prefixo de snippet duplicado (`execsql`).

## [1.5.5] - 2025-12-19

### 🔧 Corrigido
- **Autocomplete `dev.` funcionando novamente**
- Revertido extension.js para versão 1.5.1 (que funcionava perfeitamente)
- Removidas mudanças de 1.5.2-1.5.4 que quebraram o autocomplete
- Mantido apenas `onLanguage:lspt` nos activationEvents

### ✅ Testado e Aprovado
- Autocomplete com `dev.` funciona
- 530 funções disponíveis
- Performance estável

## [1.5.4] - 2025-12-19

### 🔧 Corrigido - URGENTE
- **Removido `"*"` dos activationEvents** que causava travamento
- Extensão agora ativa apenas ao abrir arquivos `.lspt`
- Performance melhorada significativamente
- Solução para travamento do Antigravity

### ⚠️ Como Usar
Para ativar o autocomplete:
1. Abra um arquivo `.lspt`
2. Linguagem deve mudar para "LSPT" automaticamente
3. Digite `dev.` e o autocomplete aparecerá

## [1.5.3] - 2025-12-19

### 🔧 Corrigido
- **Ativação da extensão no Antigravity**
  - Adicionado `"*"` aos `activationEvents` para garantir ativação
  - Extensão agora ativa automaticamente no Antigravity
  - Autocomplete com `dev.` funcionando corretamente
  - Reconhecimento de arquivos `.lspt` e `.lsp` corrigido

## [1.5.2] - 2025-12-19

### 🛡️ Segurança e Qualidade de Código

#### Melhorias Implementadas
- **Output Channel estruturado** substituindo console.log
  - Logs organizados e acessíveis via painel "Output"
  - Informações de inicialização e debug profissionais
- **Try-catch em todos os providers** para maior robustez
  - CompletionProvider com tratamento de erro
  - SignatureHelpProvider com tratamento de erro
  - HoverProvider com tratamento de erro
  - DefinitionProvider com tratamento de erro
- **Validação defensiva de parâmetros**
  - Verificação `Array.isArray()` antes de `forEach()`
  - Proteção contra `params` undefined ou null
  - Previne crashes em dados inconsistentes

#### Benefícios
- ✅ Maior estabilidade - Extensão não trava mais em casos extremos
- ✅ Melhor debugging - Logs estruturados no Output Channel
- ✅ Código profissional - Segue melhores práticas do VS Code
- ✅ Zero vulnerabilidades críticas identificadas na auditoria

### 📊 Auditoria de Segurança
- Análise completa de segurança realizada
- Nota de segurança: ⭐⭐⭐⭐☆ (4/5)
- Sem problemas críticos encontrados
- Todas as recomendações de alta prioridade implementadas

## [1.5.1] - 2025-12-19

### ✨ Adicionado
- **27 novos snippets** com prefixos curtos e intuitivos:
  - `func`, `deffunc` - Declaração de funções
  - `defalfa`, `defint`, `defdata` - Variáveis com prefixos curtos
  - `if`, `ifelse` - Condicionais
  - `while`, `for` - Loops
  - `sql` - Template completo de consulta SQL
  - `sqlalfa`, `sqlint`, `sqldate`, `sqlfloat` - Retorno de campos SQL
  - `insert`, `update` - Comandos SQL DML
  - `msg` - Mensagem com opções (dropdown)
  - `defws`, `wsexec` - WebService Senior
  - `inttoalfa`, `alfatodec`, `convmask` - Conversões
  - `comment` - Comentário rápido
  - `log` - Função de log padrão

### 📖 Documentação
- **README atualizado** com documentação completa dos 51 snippets
- Novas seções organizadas:
  - 🗄️ SQL Avançado (8 snippets)
  - 🌐 WebService (2 snippets)
  - 🔄 Conversões (3 snippets)
  - 📊 Logging e Debug (1 snippet)
- Prefixos alternativos claramente documentados
- Dica de produtividade sobre prefixos curtos

### 🎯 Melhorias de UX
- **Prefixos mais curtos** para maior produtividade (`func` vs `funcao`)
- **Dropdown de opções** no snippet `msg` (Retorna, Erro, Aviso)
- **Template SQL completo** com todas as etapas (criar, configurar, usar, destruir)
- **Total de 51 snippets** categorizados

## [1.5.0] - 2025-12-19

### ✨ Adicionado
- **Novo snippet `header`**: Cabeçalho completo de arquivo com estrutura organizada
  - Inclui metadados (Author, Email, Date, Last Modified, Description)
  - Seções pré-definidas: Declaração WS, Declarar Funções, Declarar Variáveis, Início da Execução
  - Data e hora preenchidas automaticamente com variáveis do VS Code
  - Navegação por Tab entre campos editáveis

### 📖 Documentação
- **Documentação completa de snippets** adicionada ao README.md
- Seção "Snippets Disponíveis" com todos os 24 snippets organizados por categoria:
  - 📄 Estruturas de Arquivo (2 snippets)
  - 🔧 Declarações e Funções (3 snippets)
  - 📦 Declaração de Variáveis (4 snippets)
  - 🔀 Estruturas Condicionais (4 snippets)
  - 🔁 Estruturas de Repetição (3 snippets)
  - 🗄️ SQL e Cursores (4 snippets)
  - 📁 Arquivos (2 snippets)
  - 💬 Mensagens e Comentários (4 snippets)
  - 🌐 HTTP e Integrações (1 snippet)
  - ⚙️ Utilidades (3 snippets)
- Cada snippet documentado com prefixo e exemplo de código
- Melhora significativa na experiência de onboarding para novos usuários

### 🎯 Objetivos
- Facilitar o desenvolvimento com templates prontos
- Padronizar estrutura de arquivos LSPT
- Melhorar produtividade dos desenvolvedores

## [1.4.3] - 2025-12-19

### ✨ Melhorado
- **Autocomplete case-insensitive**: Agora aceita tanto `Dev.` quanto `dev.` (maiúsculo ou minúsculo)
- **Assinatura completa**: Ao selecionar uma função, insere a assinatura completa com parâmetros
  - Exemplo: `AnoBissexto(Data aDataIni, Numero end aBissexto);`
- **Snippets navegáveis**: Use `Tab` para navegar entre os parâmetros após inserir a função
- **Remoção automática do trigger**: O prefixo `dev.` ou `Dev.` é removido automaticamente ao inserir a função

### 🎯 Experiência do Usuário
- Digite `dev.` → Lista de funções aparece
- Selecione a função → Assinatura completa é inserida
- Use `Tab` → Navegue entre os parâmetros
- O `dev.` é removido automaticamente

## [1.4.2] - 2025-12-19

### 🐛 Corrigido
- **BUG CRÍTICO**: Substituído método obsoleto `substr()` por `substring()` que causava travamento da aplicação
- **Autocomplete melhorado**: `insertText` agora insere apenas o nome da função (ao invés de toda a assinatura), permitindo que o usuário digite os parâmetros manualmente
- Adicionada validação de dados em `FUNCTIONS_DATA` para prevenir erros com funções malformadas
- Filtro de itens `null` na lista de autocomplete para melhor estabilidade

### ⚡ Melhorado
- Performance do Completion Provider otimizada
- Melhor experiência de autocomplete ao digitar `Dev.`
- Mensagens de erro mais informativas no console

### 📝 Notas
- Esta versão resolve problemas relatados de travamento e autocomplete não funcionando
- O autocomplete agora é mais leve e responsivo

## [1.4.1] - 2025-12-19

### 📖 Melhorado
- **README.md completamente reescrito** com documentação amigável e exemplos práticos
- **QUICKSTART.md adicionado** - Guia de início rápido em 30 segundos
- Exemplos práticos de uso para todas as funcionalidades
- Seção de troubleshooting expandida
- Lista de funções categorizada por tipo (Strings, Datas, SQL, etc.)
- 3 exemplos completos de código (Manipulação de Strings, Datas, Cursores SQL)

### 🎯 Foco
- Melhor experiência de onboarding para novos usuários
- Documentação mais clara e objetiva
- Exemplos visuais e práticos

## [1.4.0] - 2025-12-19

### ✨ Adicionado
- **IntelliSense para Funções Built-in**: Sistema completo de autocomplete para 369+ funções nativas da linguagem LSPT
- **Autocomplete ao digitar `Dev.`**: Lista todas as funções built-in disponíveis
- **Signature Help**: Mostra parâmetros da função em tempo real ao digitar `(`
- **Hover Documentation**: Exibe documentação ao passar o mouse sobre funções
- **Go to Definition**: Command+Click abre documentação detalhada da função
- **Sistema de Documentação**: Geração automática de templates de documentação em Markdown para todas as funções
- **Script parser CSV**: Ferramenta para extrair e estruturar dados das funções do CSV

### 📁 Arquivos Adicionados
- `functions.json` - Dados estruturados das 369 funções built-in
- `scripts/generate-functions.js` - Parser CSV para gerar dados das funções
- `docs/functions/` - 369 arquivos Markdown com templates de documentação

### 🔧 Alterado
- `extension.js` completamente reescrito para implementar providers LSP
- `package.json` atualizado para versão 1.4.0 com nova descrição

### 📝 Notas
- Algumas funções (161 de 530) do CSV original não foram processadas devido a formatação inconsistente
- Documentação das funções está em formato template - pode ser preenchida gradualmente conforme necessidade
- Sistema funciona mesmo sem documentação completa, mostrando pelo menos a assinatura da função

## [1.3.2] - 2025-12-09

### Adicionado
- 🎨 **Colorização customizada para declarações `Definir`**:
  - `Definir` → Azul escuro (#569CD6)
  - Tipo (`Funcao`, `Alfa`, `Numero`, `interno.com...`) → Azul claro (#9CDCFE)
  - Nome da variável → Laranja claro (#CE9178)
- 🟣 **Parênteses `()` agora em roxo** (#C586C0)
- ✅ Padrões específicos para capturar `Definir Funcao`, `Definir Alfa/Numero/Data`, `Definir interno.com...`
- 🎯 Adicionada categoria `punctuation.parenthesis` para destacar parênteses

### Exemplo Visual
```lspt
Definir Funcao BuscarParamWS();
🔵      🔷     🟠              🟣🟣

Definir Alfa aCodEmp;
🔵      🔷   🟠

Definir Numero nQuantidadePaginas;
🔵      🔷     🟠

Definir interno.com.senior.g5.co.mfi.cre.titulos.BaixarTitulosCR_3 wBaxCR;
🔵      🔷                                                           🟠
```


## [1.3.1] - 2025-12-09

### Corrigido
- 🟢 **Comentários de bloco `/* */` agora totalmente em verde**, incluindo múltiplas linhas
- ✅ Removido padrão interno que causava colorização mista
- 💚 Todo o conteúdo entre `/*` e `*/` agora usa `comment.block` uniformemente


## [1.3.0] - 2025-12-09

### Redesenhado
- 🎨 **Paleta de cores completamente redesenhada** para conforto visual e contraste adequado
- 🟢 **Comentários agora em VERDE** (usando scope `comment.line` padrão)
- 👁️ **Otimizado para reduzir fadiga ocular** em temas escuros
- 🌈 **Nova categorização de scopes** para melhor diferenciação:
  - `comment.line` → Comentários em verde suave (#7CB342, #98C379)
  - `keyword.control.conditional` → Condicionais (Se, Senao) em azul claro
  - `keyword.control.loop` → Loops (Enquanto, Para, Continue) em azul
  - `keyword.declaration` → Declarações (Funcao, Definir) em azul
  - `entity.name.function` → Funções em amarelo suave (#FFB454, #E5C07B)
  - `entity.name.type` → Tipos em ciano (#4EC9B0, #56B6C2)
  - `constant.language` → Constantes em laranja
  - `string.quoted.*` → Strings em verde (#C3E88D)
  - `constant.numeric.*` → Números em laranja (#D19A66)

### Melhorias de UX
- ✅ Contraste melhorado entre elementos (20%+ de diferença)
- ✅ Cores menos saturadas para conforto prolongado
- ✅ Melhor distinção entre keywords, functions e types
- ✅ Compatível com One Dark Pro, Material Theme, Night Owl, Dracula

### Technical
- Uso exclusivo de scopes padrão TextMate para máxima compatibilidade
- Remoção de scopes experimentais (`string.comment.*`)
- Hierarquia de scopes mais clara e profissional


## [1.2.1] - 2025-12-09

### Corrigido
- 🟢 **Comentários agora aparecem em verde** no tema Dracula e outros temas escuros
- 🎨 Ajustados scopes de comentários (`@-- --@`, `@ @`, `/* */`) para usar `string.comment.*`
- 💚 Melhor visibilidade dos comentários em fundos escuros


## [1.2.0] - 2025-12-09

### Melhorado
- 🎨 **Syntax Highlighting otimizado para tema Dracula** e outros temas escuros
- 🌈 **Scopes semânticos melhorados** no TextMate Grammar:
  - `keyword.control.flow` para controle de fluxo (Se, Enquanto, Para, Continue, Cancel)
  - `keyword.control` para delimitadores (Inicio, Fim)
  - `support.function.sql` para funções SQL (SQL_*)
  - `support.function.http` para funções HTTP (Http*)
  - `support.function.string` para funções de string
  - `support.function.builtin` para funções nativas
  - `storage.type.primitive` para tipos de dados
  - `keyword.operator.*` para operadores (comparison, arithmetic, assignment)
- 🎯 **Melhor diferenciação de cores** entre:
  - Keywords (rosa/magenta no Dracula)
  - Functions (roxo/purple no Dracula)
  - Tipos (cyan no Dracula)
  - Strings (verde no Dracula)
  - Números (laranja no Dracula)
- 📝 **Reconhecimento aprimorado de variáveis** com prefixos (a, n, v, d, r, x, p)
- 🔍 **Comentários com melhor categorização** (line.double-dash, block)

### Technical Details
- Reescrita completa do arquivo `lspt.tmLanguage.json`
- Uso de scopes padrão do TextMate para melhor compatibilidade com themes
- Categorização de funções por tipo (SQL, HTTP, String, File, JSON, Utility, Cursor)


## [1.1.0] - 2025-12-09

### Adicionado
- 📚 **Baseado na documentação oficial** da Senior Sistemas
- 🔤 Novas palavras-chave da LSP: `Continue`, `Cancel`
- 🔤 Palavras-chave em inglês: `end`, `Open`, `String`, `Function`, `OpenCursor`, `CloseCursor`, `Found`, `NotFound`, `RefreshFields`
- 🎯 Funções de cursor: `AbrirCursor`, `FecharCursor`, `Proximo`, `Achou`, `NaoAchou`
- 🌐 Funções HTTP adicionais: `HttpDesabilitaErroResposta`, `HttpAlteraCodifCaracPadrao`, `HttpAlteraCabecalhoRequisicao`
- 📝 Funções de string: `TamanhoAlfa`, `TrocaString`
- 📂 Funções de arquivo: `Ler`, `Gravar`
- 🛠️ Funções gerais: `RemoveExpressoesProibidas`, `RestoDivisao`, `Truncar`, `VerificaAbaAtiva`, `VrfAbrA`, `VrfAbrN`, `EnviaEMail`
- 🎨 Logo oficial do Senior LSP ERP (3.6 KB → 899 KB - alta qualidade)
- 📖 Syntax highlighting melhorado com mais de 80+ funções reconhecidas

### Modificado
- Atualização completa do TextMate Grammar
- Melhoria na categorização de funções (SQL, HTTP, String, File, Cursor)
- Documentação atualizada com referências à documentação oficial

### Referências
- [Sintaxe de Comandos e Operadores](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/sintaxe-de-comandos-e-operadores.htm)
- [Funções Gerais](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais.html)
- [Índice de Funções](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/#regra_funcoes/indice_funcoes.htm)


## [1.0.0] - 2025-12-09

### Adicionado
- ✨ Syntax highlighting completo para LSPT
- 🚀 Snippets para estruturas comuns (funções, loops, cursores)
- 📝 Suporte a comentários com anotações (@Author, @Date, etc.)
- 🔧 Auto-completion para palavras-chave e funções
- 📦 Bracket matching e indentação automática
- 💡 Code folding para blocos de código
- 🌐 Reconhecimento de WebServices Senior (interno.com.senior.g5.*)
- 📚 Documentação completa em português
- 🎯 Suporte para cursores Tipo 1 e Tipo 2
- 🔌 Snippets para HTTP requests
- ⚙️ Configuração de linguagem otimizada

### Características
- Suporte completo à sintaxe LSPT/LSP
- Compatível com Open VSX Registry
- Funciona em VS Code, VSCodium, Eclipse Theia, e Gitpod
- Snippets inteligentes com placeholders
- Highlighting para tipos de dados (Alfa, Numero, Data, etc.)
- Destaque especial para funções SQL_ e HTTP

## [Unreleased]

### Planejado
- Language Server Protocol (LSP) para diagnósticos
- IntelliSense avançado
- Validação de sintaxe em tempo real
- Formatação automática de código
- Refactoring tools
- Integração com debugger Senior G5
