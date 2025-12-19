# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

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
