# LSPT Language Support - Guia do Usuário

> Extensão completa para desenvolvimento em **LSP** (Linguagem Senior de Programação) com IntelliSense, syntax highlighting, linter e autocomplete para **600+ funções built-in** documentadas (assinatura, parâmetros, valores de retorno e exemplos).

## 🚀 Instalação Rápida

### Método 1: Pela galeria (recomendado — recebe atualizações)
Procure por **"LSPT Language Support"** (publisher `eorgan`) na aba *Extensions* do seu
editor (VS Code, Antigravity e outros baseados em Open VSX) e clique em *Install*.

### Método 2: Via VSIX
```bash
code --install-extension lspt-language-support-1.7.0.vsix
```

### Método 3: Compilar do Código Fonte
```bash
git clone https://github.com/eorgan/LSPSenior.git
cd LSPSenior
npm run package
code --install-extension lspt-language-support-1.7.0.vsix
```

---

## ✨ Funcionalidades

Resumo dos recursos:

- **Autocomplete** de 600+ funções, palavras reservadas e variáveis de sistema (com ou sem `Dev.`)
- **Signature help** e **hover** com descrição de parâmetros, valores de retorno e link para a doc oficial
- **Linter** que avisa sobre as armadilhas da LSP (operação dentro de parâmetro, `Pare`/`Continue` fora de loop)
- **Outline** das funções do arquivo, **folding** inteligente — funções (preview mostra `Funcao Nome();`), blocos `Se`/`Senao`/`Para`/`Enquanto` (`Inicio`/`Fim` e `{`/`}`) e seções `@-- ... --@` como regiões dobráveis (`Cmd+K Cmd+8`)
- **Format Document** — reindentação conservadora (só o recuo à esquerda) no estilo do projeto, com `lspt.format.indentSize` configurável
- **Ir para definição** (funções do usuário no arquivo e doc oficial das built-in)
- **Hover de variáveis de sistema** (`DatSis`, `CodEmp`, ...)
- Comando **"LSPT: Buscar função no catálogo"** (paleta de comandos)
- **Syntax highlighting** completo e **60 snippets**

### 🔍 1. Autocomplete de Funções Built-in

Digite `Dev.` e veja **todas as 369 funções** disponíveis:

```lspt
Dev.
```

**O que acontece:**
- Lista de autocomplete aparece automaticamente
- Busque a função digitando o nome (ex: `InserirStr`)
- Selecione com ↑↓ e pressione Enter
- A assinatura completa é inserida: `InserirStr(Alfa Valor, Alfa End Origem, Numero Pos);`

**Exemplo prático:**
```lspt
Funcao ProcessarTexto();
   Inicio
      Definir Alfa aTexto;
      Definir Alfa aResultado;
      Definir Numero nPosicao;
      
      aTexto = "Exemplo";
      nPosicao = 5;
      
      Dev.  → Aparece lista de funções
      InserirStr(Alfa Valor, Alfa End Origem, Numero Pos);  → Assinatura inserida
   Fim;
```

---

### 📝 2. Signature Help (Ajuda de Parâmetros)

Ao digitar `(` após uma função, veja os **parâmetros em tempo real**:

```lspt
InserirStr(
```

**O que aparece:**
```
InserirStr(Alfa Valor, Alfa End Origem, Numero Pos)
           ─────────────
           ↑ Parâmetro atual destacado
```

**Navegação:**
- Digite o primeiro parâmetro: `"texto", `
- Vírgula move para o próximo parâmetro
- O parâmetro atual é sempre destacado

**Exemplo completo:**
```lspt
Definir Alfa aOrigem;
Definir Numero nPos;

aOrigem = "Olá Mundo";
nPos = 5;

InserirStr("NOVO", aOrigem, nPos);
          ↑       ↑        ↑
        param1  param2   param3
```

---

### 💡 3. Hover Documentation (Documentação ao Passar Mouse)

Passe o mouse sobre qualquer função para ver:
- ✅ Assinatura completa
- ✅ Código da função
- ✅ Descrição
- ✅ Lista de parâmetros com tipos

**Exemplo:**
```lspt
InserirStr(...)  ← Passe o mouse aqui
```

**O que aparece:**
```markdown
InserirStr
──────────
Funcao InserirStr(Alfa Valor, Alfa End Origem, Numero Pos);

Código: 11

Função built-in: InserirStr

Parâmetros:
• Valor (Alfa) - Entrada
• Origem (Alfa End) - Saída  
• Pos (Numero) - Entrada
```

---

### 🔗 4. Go to Definition (Ir para Documentação)

**Command+Click** (Mac) ou **Ctrl+Click** (Windows/Linux) em qualquer função abre a documentação completa:

```lspt
InserirStr(...)  ← Command+Click aqui
```

**Abre:** `docs/functions/InserirStr.md` com:
- Assinatura
- Descrição detalhada
- Exemplos de uso
- Notas importantes
- Funções relacionadas

---

## 📋 Snippets Disponíveis

A extensão oferece **60 snippets** para acelerar seu desenvolvimento em LSPT. Digite o prefixo e pressione `Tab` ou `Enter` para expandir. Além deles, o **cabeçalho automático** (`header`/`lspt-header`) é gerado dinamicamente com os seus dados do Git — veja [Estruturas de Arquivo](#-estruturas-de-arquivo).

> 💡 **Dica**: Muitos snippets têm prefixos alternativos! Por exemplo, `func`, `if`, `for`, `while` para maior produtividade.

### 📄 Estruturas de Arquivo

#### `header` ou `lspt-header` - Cabeçalho Automático (preenchido pelo Git)
Insere o cabeçalho **já preenchido** com os seus dados do Git e a data de criação do
arquivo. Use o comando **`Cmd+Shift+P` → "LSPT: Inserir cabeçalho"** ou digite `header`
(ou `lspt-header`) e aceite a sugestão:
```lspt
/*
 * @Author: Eliezer Organ
 * @Email: eorgan@organ.eti.br
 * @Date: 2026-06-16 10:00:00
 * @Last Modified by: Eliezer Organ
 * @Last Modified time: 2026-06-16 10:00:00
 * @Description: Description
 */
```
- `@Author`/`@Email` vêm de `git config user.name`/`user.email`.
- `@Date` é a data de criação do arquivo.
- Ao **salvar**, `@Last Modified by`/`@Last Modified time` são atualizados
  automaticamente (configurável em `lspt.header.*` — veja [Configurações](#️-configurações)).
- Se `@Author`/`@Email` estiverem **vazios** (ex.: cabeçalho inserido num arquivo ainda
  sem título), eles são **preenchidos no primeiro save** assim que a identidade do Git for
  resolvida — sem nunca sobrescrever um valor que você já tenha digitado.
- Sem Git, os campos usam o fallback das settings ou ficam vazios — o cabeçalho ainda é
  inserido.

---

### 🔧 Declarações e Funções

#### `func` - Declaração de Função (Prefixo Curto)
```lspt
Funcao NomeDaFuncao();
   Inicio
      
   Fim;
```

#### `deffunc` - Definir Função (Prefixo Curto)
```lspt
Definir Funcao NomeDaFuncao();
```

#### `def-funcao` - Declarar Função
```lspt
Definir Funcao NomeFuncao();
```

#### `funcao` - Função Completa
```lspt
Funcao NomeFuncao();
   Inicio
      
   Fim;
```

#### `funcao-params` - Função com Parâmetros
```lspt
Definir Funcao NomeFuncao(Numero pParam1, Numero end pResultado);

Funcao NomeFuncao(Numero pParam1, Numero end pResultado);
   Inicio
      pResultado = pParam1 * 2;
      
   Fim;
```

---

### 📦 Declaração de Variáveis

#### `defalfa` ou `def-alfa` - Variável Alfa
```lspt
Definir Alfa aNomeVar;
```

#### `defint` ou `def-numero` - Variável Numero
```lspt
Definir Numero nNomeVar;
```

#### `defdata` ou `def-data` - Variável Data
```lspt
Definir Data dNomeVar;
```

#### `defws` ou `def-ws` - WebService
```lspt
Definir interno.com.senior.g5.modulo.servico wNome;
```

---

### 🔀 Estruturas Condicionais

#### `if` ou `se` - If Simples
```lspt
Se(condicao) {
   
}
```

#### `ifelse` ou `se-senao` - If/Else
```lspt
Se(condicao) {
   // código se verdadeiro
} Senao {
   // código se falso
}
```

#### `se-inicio` - If com Inicio/Fim
```lspt
Se(condicao)
   Inicio
      
   Fim;
```

#### `se-senao` - If/Else
```lspt
Se(condicao)
   {
      
   }
Senao
   {
      
   }
```

#### `se-senao-se` - If/Else If/Else
```lspt
Se(condicao1)
   {
      
   }
Senao Se (condicao2)
   {
      
   }
Senao
   {
      
   }
```

---

### 🔁 Estruturas de Repetição

#### `while` ou `enquanto` - Loop While
```lspt
Enquanto(condicao)
   Inicio
      
   Fim;
```

#### `for` ou `para` - Loop For
```lspt
Para(i=0;i<10;i++)
   Inicio
      
   Fim;
```

#### `enquanto-inicio` - While com Inicio/Fim
```lspt
Enquanto(condicao)
   Inicio
      
   Fim;
```

#### `para` - Loop For
```lspt
Para(nLin=0;nLin<nQtd;nLin++)
   {
      
   }
```

---

### 🗄️ SQL Avançado

#### `sql` - Template Completo de Consulta SQL
```lspt
aSqlCom = "SELECT campos FROM tabela WHERE condicao";

SQL_Criar(aSql);
SQL_UsarSqlSenior2(aSql, 0);
SQL_UsarAbrangencia(aSql, 0);
SQL_DefinirComando(aSql, aSqlCom);
SQL_AbrirCursor(aSql);

Enquanto(SQL_EOF(aSql) = 0)
   Inicio
      
      SQL_Proximo(aSql);
   Fim;

SQL_FecharCursor(aSql);
SQL_Destruir(aSql);
```

#### `sqlalfa` - Retornar Campo Alfa
```lspt
SQL_RetornarAlfa(aSql, "campo", aVariavel);
```

#### `sqlint` - Retornar Campo Inteiro
```lspt
SQL_RetornarInteiro(aSql, "campo", nVariavel);
```

#### `sqldate` - Retornar Campo Data
```lspt
SQL_RetornarData(aSql, "campo", dVariavel);
```

#### `sqlfloat` - Retornar Campo Flutuante
```lspt
SQL_RetornarFlutuante(aSql, "campo", fVariavel);
```

#### `insert` - Comando INSERT
```lspt
xCommand = "INSERT INTO tabela (campos) VALUES (valores)";
ExecSQLEx(xCommand, xErro, xMensagem);
```

#### `update` - Comando UPDATE
```lspt
xCommand = "UPDATE tabela SET campo = valor WHERE condicao";
ExecSQLEx(xCommand, xErro, xMensagem);
```

---

### 🗄️ SQL e Cursores (Legado)

#### `cursor1` - Cursor Tipo 1 (Antigo)
```lspt
Definir Cursor Cur_Tabela;

Cur_Tabela.Sql "SELECT campos FROM tabela WHERE condicao";

Cur_Tabela.AbrirCursor();

Se (Cur_Tabela.Achou)
   Inicio
      @-- Encontrou o Registro. --@
      
   Fim;

Cur_Tabela.fecharCursor();
```

#### `cursor2` - Cursor Tipo 2 (Recomendado)
```lspt
Definir Alfa aSqlCom;
Definir Alfa aSqlInt;

aSqlCom = "SELECT campos FROM tabela WHERE condicao";

SQL_Criar(aSqlInt);
SQL_UsarSqlSenior2(aSqlInt, 0);
SQL_UsarAbrangencia(aSqlInt, 0);
SQL_DefinirComando(aSqlInt, aSqlCom);
SQL_AbrirCursor(aSqlInt);
Se(SQL_EOF(aSqlInt) = 0) @-- Se encontrou registro --@
   {
      SQL_RetornarAlfa(aSqlInt, "campo", aVariavel);
      
   }

SQL_FecharCursor(aSqlInt);
SQL_Destruir(aSqlInt);
```

#### `cursor2-enquanto` - Cursor Tipo 2 com Loop
```lspt
Definir Alfa aSqlCom;
Definir Alfa aSqlInt;

aSqlCom = "SELECT campos FROM tabela WHERE condicao";

SQL_Criar(aSqlInt);
SQL_UsarSqlSenior2(aSqlInt, 0);
SQL_UsarAbrangencia(aSqlInt, 0);
SQL_DefinirComando(aSqlInt, aSqlCom);
SQL_AbrirCursor(aSqlInt);
Enquanto(SQL_EOF(aSqlInt) = 0) @-- Se encontrou registro --@
   {
      SQL_RetornarAlfa(aSqlInt, "campo", aVariavel);
      
      SQL_Proximo(aSqlInt);
   }

SQL_FecharCursor(aSqlInt);
SQL_Destruir(aSqlInt);
```

#### `execsql` - Executar SQL
```lspt
ExecSQLEx(aComando, xErro, xMensagem);
Se (xErro = 0) {
   @-- Sucesso --@
   
} Senao {
   @-- Erro --@
   Mensagem(Erro, xMensagem);
}
```

---

### 📁 Arquivos

#### `abrir-arquivo` - Abrir Arquivo
```lspt
Definir Numero nArq;

nArq = Abrir(\"arquivo.txt\", Ler); @-- Ler ou Gravar --@
Se(nArq > 0)
   Inicio
      
      Fechar(nArq);
   Fim;
```

#### `ler-linha` - Ler Linha de Arquivo
```lspt
Definir Alfa aLinha;

Enquanto(LerNL(nArq, aLinha) = 1)
   Inicio
      @-- Processar linha --@
      
   Fim;
```

---

### 🌐 WebService

#### `defws` - Declarar Web Service
```lspt
Definir interno.com.senior.modulo.NomeWS WSNome;
```

#### `wsexec` - Executar Web Service
```lspt
WSPedido.ModoExecucao = 1;
WSPedido.Executar();

aTipRet = WSPedido.tipoRetorno;
aMsgRet = WSPedido.mensagemRetorno;
```

---

### 🔄 Conversões

#### `inttoalfa` - Converter Inteiro para Alfa
```lspt
IntParaAlfa(nVariavel, aVariavel);
```

#### `alfatodec` - Converter Alfa para Decimal
```lspt
AlfaParaDecimal(aVariavel, nVariavel);
```

#### `convmask` - Converter com Máscara
```lspt
ConverteMascara(1, valor, resultado, "mascara");
```

---

### 💬 Mensagens e Comentários

#### `msg` - Mensagem (com Opções)
```lspt
mensagem(Retorna, "mensagem");
```

#### `comment` - Comentário LSPT
```lspt
@-- Comentário --@
```

#### `msg-ret` - Mensagem de Retorno
```lspt
Mensagem(Retorna, aMensagem);
```

#### `msg-erro` - Mensagem de Erro
```lspt
Mensagem(Erro, aMensagem);
```

#### `com-linha` - Comentário de Linha
```lspt
@-- comentário --@
```

#### `com-bloco` - Comentário de Bloco
```lspt
/*
 * comentário
 */
```

---

### 🌐 HTTP e Integrações

#### `http-post` - Requisição HTTP POST
```lspt
HttpObjeto(vHTTP);
HttpDesabilitaErroResposta(vHTTP);
HttpAlteraCodifCaracPadrao(vHTTP, "utf-8");
HttpAlteraCabecalhoRequisicao(vHTTP, "Content-Type", "application/json");
HttpPost(vHTTP, aUrl, aJson, aJsonRet);
HttpLeCodigoResposta(vHTTP, nCodRet);
```

---

### 📊 Logging e Debug

#### `log` - Função de Log Padrão
```lspt
Funcao GravaLog();
   Inicio
      xCommandLog = "INSERT INTO tabela_log (campos) VALUES (valores)";
      ExecSQLEx(xCommandLog, xErro, xMensagem);
      
      Se(xErro = 0) {
         // Log gravado
      } Senao {
         mensagem(erro, "Erro ao gravar log: " + xMensagem);
      }
   Fim;
```

---

### ⚙️ Utilidades

#### `cancel` - Cancelar Execução
```lspt
Cancel(1); @-- Cancel(1): Cancela execução / Cancel(2): Imprime ValStr / Cancel(3): Exclui registro --@
```

#### `continue` - Continuar Loop
```lspt
Continue;
```

#### `atualizar-campos` - Atualizar Campos da Tela
```lspt
AtualizarCampos();
```

---

## 📚 Lista de Funções Disponíveis

### Manipulação de Strings
- `InserirStr` - Insere string em posição específica
- `DeletarStr` - Remove caracteres de uma string
- `CopiarStr` - Copia parte de uma string
- `TamanhoStr` - Retorna tamanho da string
- `PosicaoStr` - Encontra posição de substring
- `Concatena` - Concatena múltiplas strings
- `LimpaEspacos` - Remove espaços em branco

### Conversão de Dados
- `IntParaStr` - Converte número para string
- `StrParaInt` - Converte string para número
- `AlfaParaData` - Converte string para data
- `DecimalParaAlfa` - Converte decimal para string
- `ConverteDataToDB` - Converte data para formato banco

### Manipulação de Datas
- `MontaData` - Cria data a partir de dia/mês/ano
- `DesMontaData` - Extrai dia/mês/ano de data
- `ExtensoMes` - Nome do mês por extenso
- `ExtensoSemana` - Nome do dia da semana
- `DataExtenso` - Data completa por extenso
- `UltimoDia` - Último dia do mês

### Valores Numéricos
- `ArredondarValor` - Arredonda com precisão
- `TruncarValor` - Trunca valor
- `Potencia` - Calcula potência
- `Raiz` - Calcula raiz
- `Multiplo` - Verifica se é múltiplo

### SQL e Cursores
- `SQL_Criar` - Cria cursor SQL
- `SQL_AbrirCursor` - Abre cursor
- `SQL_Proximo` - Move para próximo registro
- `SQL_EOF` - Verifica fim do cursor
- `SQL_FecharCursor` - Fecha cursor
- `SQL_RetornarAlfa` - Retorna valor alfa
- `SQL_RetornarNumero` - Retorna valor numérico

### Arquivos e I/O
- `Abrir` - Abre arquivo
- `Fechar` - Fecha arquivo
- `LerNL` - Lê linha de arquivo
- `Gravar` - Grava em arquivo
- `CarregarTextoArq` - Carrega texto completo

### Sistema e Utilitários
- `Mensagem` - Exibe mensagem ao usuário
- `ExecutaRelatorio` - Executa relatório
- `AbrirTelaSistema` - Abre tela do sistema
- `Sleep` - Pausa execução
- `GeraLog` - Gera log de debug

**🔍 Veja a lista completa:** Digite `Dev.` no VS Code!

---

## 🎯 Exemplos Práticos

### Exemplo 1: Manipular String
```lspt
Funcao ExemploString();
   Inicio
      Definir Alfa aTexto;
      Definir Alfa aResultado;
      Definir Numero nTamanho;
      
      aTexto = "Hello World";
      
      @-- Obter tamanho
      TamanhoStr(aTexto, nTamanho);
      
      @-- Inserir texto
      InserirStr(" Beautiful", aTexto, 6);
      @-- Resultado: "Hello Beautiful World"
      
      @-- Copiar parte
      CopiarStr(aResultado, 1, 5);
      @-- Resultado: "Hello"
   Fim;
```

### Exemplo 2: Trabalhar com Datas
```lspt
Funcao ExemploData();
   Inicio
      Definir Numero nData;
      Definir Numero nDia;
      Definir Numero nMes;
      Definir Numero nAno;
      Definir Alfa aDataExtenso;
      
      @-- Montar data
      MontaData(19, 12, 2025, nData);
      
      @-- Desmontar data
      DesMontaData(nData, nDia, nMes, nAno);
      
      @-- Extenso
      DataExtenso(nData, aDataExtenso);
      @-- Resultado: "19 de Dezembro de 2025"
   Fim;
```

### Exemplo 3: Cursor SQL
```lspt
Funcao ExemploCursor();
   Inicio
      Definir Alfa aSqlInt;
      Definir Alfa aSqlCom;
      Definir Alfa aNomeCli;
      Definir Numero nCodCli;
      
      aSqlCom = "SELECT CODCLI, NOMCLI FROM E070CLI WHERE CODCLI > 100";
      
      SQL_Criar(aSqlInt);
      SQL_UsarSqlSenior2(aSqlInt, 0);
      SQL_DefinirComando(aSqlInt, aSqlCom);
      SQL_AbrirCursor(aSqlInt);
      
      Enquanto(SQL_EOF(aSqlInt) = 0)
         {
            SQL_RetornarAlfa(aSqlInt, "NOMCLI", aNomeCli);
            SQL_RetornarNumero(aSqlInt, "CODCLI", nCodCli);
            
            Mensagem(Retorna, "Cliente: " + aNomeCli);
            
            SQL_Proximo(aSqlInt);
         }
      
      SQL_FecharCursor(aSqlInt);
      SQL_Destruir(aSqlInt);
   Fim;
```

---

## 📖 Documentação das Funções

Todas as 369 funções têm documentação em `docs/functions/`:

- **Assinatura completa** com tipos de parâmetros
- **Código identificador** da função
- **Descrição** (template para preencher)
- **Parâmetros** detalhados (entrada/saída)
- **Exemplos de uso** (template)
- **Notas importantes**

**Como contribuir:**
1. Abra `docs/functions/NomeFuncao.md`
2. Preencha a descrição e exemplos
3. Envie um Pull Request!

---

## ⚙️ Configurações

A extensão funciona automaticamente ao abrir arquivos `.lspt` ou `.lsp`. Não requer configuração adicional!

### Linter (diagnostics)
```json
// settings.json
{
  // Avisos em tempo real das armadilhas da LSP (padrão: ativado)
  "lspt.diagnostics.enabled": true,
  // Sinalizar funções não encontradas no catálogo (padrão: desativado — pode dar
  // falso-positivo com funções do usuário/externas)
  "lspt.diagnostics.unknownFunctions": false
}
```

### Cabeçalho automático
```json
// settings.json
{
  // Atualiza @Last Modified by/time ao salvar .lspt/.lsp (padrão: ativado)
  "lspt.header.autoUpdate": true,
  // Autor/e-mail usados quando NÃO há Git configurado no projeto
  "lspt.header.fallback.author": "",
  "lspt.header.fallback.email": ""
}
```

### Formatação (Format Document)
```json
// settings.json
{
  // Espaços por nível de indentação no Format Document (padrão: 3; 1–8)
  "lspt.format.indentSize": 3
}
```

> **Format Document** (`Shift+Alt+F` / `Cmd+K Cmd+F`, ou clique direito → *Formatar
> Documento*) faz uma **reindentação conservadora**: ajusta **apenas o recuo à esquerda**,
> sem alterar o conteúdo das linhas nem mexer em strings/comentários. *Format Selection*
> formata só a seleção. Reproduz o estilo do projeto (`{`/`Inicio` um nível abaixo do
> cabeçalho de controle).
>
> **Limitações conhecidas:** código no nível superior (fora de função/bloco) é recuado
> para a **coluna 0** — declarações `Definir` agrupadas sob um `@-- ... --@` não mantêm o
> recuo cosmético; comentários de seção seguem a indentação do bloco; linhas com vários
> tokens (`Se(x) { y }`) não têm a própria indentação refeita.

---

## 🐛 Solução de Problemas

### Autocomplete não aparece?
1. Verifique se o arquivo tem extensão `.lspt` ou `.lsp`
2. Recarregue o VS Code: `Cmd+Shift+P` → "Reload Window"
3. Verifique se a extensão está ativada: `Cmd+Shift+X` → pesquise "LSPT"

### Função não encontrada na lista?
- 369 de 530 funções do CSV foram processadas
- Algumas funções têm formatação inconsistente no arquivo original
- Você pode adicionar manualmente em `functions.json`

### Documentação incompleta?
- Templates foram gerados automaticamente
- Você pode editar `docs/functions/NomeFuncao.md` para adicionar mais informações
- Contribuições são bem-vindas!

---

## 🤝 Contribuindo

### Adicionar Documentação de Função
1. Abra `docs/functions/NomeFuncao.md`
2. Preencha descrição e exemplos
3. Commit e Pull Request

### Reportar Bugs
- [GitHub Issues](https://github.com/eliezer-organ/LSPSenior/issues)

### Sugerir Funcionalidades
- [GitHub Discussions](https://github.com/eliezer-organ/LSPSenior/discussions)

---

## 📝 Changelog

Veja [CHANGELOG.md](CHANGELOG.md) para histórico completo de versões.

### Destaques recentes (1.6.x – 1.7.0)
- 📚 Catálogo ampliado para **600+ funções** com descrição, parâmetros e exemplos
- 🩺 **Linter** das armadilhas da LSP; autocomplete geral; Outline; folding
- 🔗 Hover/signature com valores de retorno e link para a documentação oficial

---

## 📚 Fontes e Créditos

A documentação das funções foi compilada das fontes oficiais e comunitárias da LSP:

- **Documentação oficial Senior** — [documentacao.senior.com.br](https://documentacao.senior.com.br)
  ([Gestão Empresarial | ERP](https://documentacao.senior.com.br/gestaoempresarialerp/) e
  [Tecnologia](https://documentacao.senior.com.br/tecnologia/)). Cada função documentada
  inclui o link para sua página oficial (visível no hover e no doc da função).
- **Manual comunitário da LSP** — [brunoleocam/Documentacao-LSP-Linguagem-Senior-de-Programacao](https://github.com/brunoleocam/Documentacao-LSP-Linguagem-Senior-de-Programacao)
  (base de descrições e exemplos).
- **Senior Sistemas** — [senior.com.br](https://www.senior.com.br) (criadora da linguagem LSP e do ERP).

> LSP e ERP Senior são marcas/produtos da Senior Sistemas. Esta extensão é um projeto
> independente da comunidade e não é afiliada à Senior Sistemas.

---

## 📄 Licença

MIT © Eliezer Organ

---

## 🌟 Apoie o Projeto

Se esta extensão te ajudou, considere:
- ⭐ Dar uma estrela no [GitHub](https://github.com/eorgan/LSPSenior)
- 🐛 Reportar bugs e sugerir melhorias
- 📖 Contribuir com documentação das funções
- 📢 Compartilhar com outros desenvolvedores LSPT

---

**Desenvolvido com ❤️ para a comunidade Senior Sistemas**