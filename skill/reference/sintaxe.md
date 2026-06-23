# Sintaxe e estrutura da LSP

Referência de sintaxe, operadores, palavras reservadas e variáveis de sistema.
Carregue este arquivo quando precisar confirmar um operador, um comando de
fluxo, regras de declaração ou o nome de uma variável de sistema.

> Padrão adotado: [Documentação LSP — brunoleocam](https://github.com/brunoleocam/Documentacao-LSP-Linguagem-Senior-de-Programacao),
> com assinaturas validadas contra o `functions.json` deste projeto.

## Estrutura básica

- Todo comando termina com `;`.
- Execução **sequencial** — a ordem importa; declare e prepare antes de usar.
- A LSP **não** diferencia maiúsculas de minúsculas (case-insensitive), inclusive
  em nomes de variáveis: `vaNome` e `VANOME` são a mesma variável.
- Identação padrão: **2 espaços**.

## Estruturas de bloco

- Bloco com mais de uma linha: delimite com `{ ... }` (comum) ou `Inicio ... Fim;` (menos comum).
- Bloco de **uma linha**: pode omitir as chaves, basta indentar a linha de baixo.
- Toda condição/repetição fica entre parênteses `()`.

```lsp
Se (vnX < vnY)
  vn = 1;            @ bloco de uma linha — sem chaves @

Se (vnX < vnY) {
  @ bloco com chaves @
}

Se (vnX < vnY)
Inicio
  @ bloco com Inicio/Fim @
Fim;
```

**Errado** (faltam os parênteses na condição):

```lsp
Se vnX < vnY {        @ ❌ não compila @
  ...
}
```

## Comentários

- Uma linha: `@ comentário @`
- Múltiplas linhas: `/* ... */`

## Caracteres com comportamento especial

Dentro de literais, `"` (aspas) e `\` (barra) devem ser escapados com `\`:

```lsp
EnviaEMail("Joao","joao@senior.com.br", "", "", "Teste","\"\\\\Servidor\\teste.txt\"", "");
```

## Operadores

**Lógicos / comparação:** `=` (igual) · `<>` (diferente) · `>` · `<` · `>=` · `<=` · `e` (E lógico) · `ou` (OU lógico)

**Aritméticos:** `+` · `-` · `*` · `/` · `++` (incrementa 1) · `--` (decrementa 1)

**⚠️ Não existe operador `%` (módulo).** Para o resto da divisão use a função `RestoDivisao`
(entradas devem ser inteiras ≥ 1):

```lsp
Definir Numero vnResto;
RestoDivisao(1500, 400, vnResto);   @ vnResto = 300 — parâmetro de saída @
```

## Tipos de dados

`Alfa` (texto) · `Numero` (inteiro ou decimal) · `Data` · `Lista` (lista dinâmica) ·
`Tabela` (objeto chave-valor) · `Grid` (grade) · `Cursor` (consulta SQL) · `Funcao`.

Variável **não definida** é tratada como `Numero`.

## Declaração de variáveis

```lsp
Definir Alfa   vaNome;
Definir Numero vnIdade;
Definir Data   vdNascimento;
```

- Declare **no topo** da regra/função — nunca dentro de `Se`/loops (ver `erros-comuns.md`).
- Nome: até 100 caracteres, pode conter `_`, **sem acentuação**, sem palavra reservada.
- O nome não pode colidir com nome de parâmetro de função nem com campo de lista.

**Alfa com tamanho e arrays:**

```lsp
Definir Alfa vaNome[30];      @ Alfa de até 30 caracteres @
vaNome[1] = "Nome";           @ índice fixo @
vaNome[vnIndice] = "Nome";    @ índice por variável @
vaNome[vnIndice + 1 * 2] = "Nome";  @ índice por fórmula @
```

**Data** nunca recebe atribuição direta — use `MontaData`/`CodData` ou a variável de sistema `DatSis`:

```lsp
MontaData(15, 8, 1990, vdData);   @ ✅ @  (v   vdData = 15/08/1990; ❌)
```

## Nomenclatura de variáveis

Prefixo de tipo + CamelCase descritivo:

| Prefixo | Tipo | Exemplo |
| --- | --- | --- |
| `va` | Alfa | `vaNomeCompleto` |
| `vn` | Numero | `vnValorTotal` |
| `vd` | Data | `vdDataVencimento` |

Parâmetros de função usam `p` (`pCodigo`, `pTela`). Evite nomes genéricos
(`vnX`, `a1`). Sem acento, sem palavra reservada.

## Comandos / palavras reservadas (resumo)

A LSP tem 51 palavras reservadas. As principais de fluxo e E/S:

| Comando | Uso |
| --- | --- |
| `Definir` | Declara variável/função. |
| `Se` / `Senao` | Condicional. `Se (cond) { } Senao { }`. |
| `e` / `ou` | Conectores lógicos entre condições. |
| `Enquanto` | Loop `Enquanto (cond) { }`. |
| `Para` | Loop `Para (ini; cond; passo) { }`. |
| `Pare` | Sai do loop. **Só dentro de `Para`/`Enquanto`** — fora disso, erro de compilação. |
| `Continue` | Pula para a próxima iteração do loop. |
| `Funcao` | Define/chama função. |
| `Inicio` / `Fim;` | Delimitadores de bloco (alternativa a `{ }`). |
| `Mensagem` | Exibe mensagem: `Mensagem(<tipo>, <texto>);` (ex.: `Retorna`, `Erro`). |
| `End` | Na definição de função, marca o parâmetro de **saída**: `Funcao Teste(end Numero pRes);`. |
| `Cancel(1)` | Cancela impressão da seção/campo (eventos do gerador). |
| `Cancel(2)` | Com `ValStr`/`ValRet`, imprime o valor atribuído (evento "Na Impressão"). |
| `Cancel(3)` | Em fórmulas de ordenação, exclui o registro atual do relatório. |
| `ValStr` / `ValRet` | Define o valor a imprimir (usado com `Cancel(2)`). |
| `Vapara` | Desvia para um rótulo: `Vapara <rotulo>;`. |
| `Regra` | Chama outra regra: `Regra(<numero>);`. |
| `Abrir` / `Fechar` | Abre/fecha arquivo: `mArq = Abrir("arq.txt", Ler);` / `Fechar(mArq);`. |
| `Ler` / `Gravar` | Lê/grava N caracteres num arquivo. |
| `Lernl` / `Gravarnl` | Lê/grava uma linha. |
| `Inserir` | Inclui outro arquivo na compilação: `Inserir "Header.lsp";`. |
| `Cursor` | Declara um SELECT em regra (ver também a API `SQL_*` em `quick-reference.md`). |

## Variáveis de sistema (principais)

Disponíveis no gerador de relatórios — não declare, apenas use:

| Variável | Descrição |
| --- | --- |
| `DatSis` | Data do sistema operacional. |
| `HorSis` | Hora do sistema operacional. |
| `AnoSis` / `MesSis` / `DiaSis` | Componentes da data do SO. |
| `ExtSis` | Data por extenso. |
| `CodEmp` / `CodFil` | Código da empresa / filial. |
| `Empresa` / `Filial` | Nome da empresa / filial. |
| `CodUsu` / `NomUsu` | Código / nome do usuário. |
| `DBNomeUsuario` | Usuário do banco de dados. |
| `DBTipo` | Banco em uso (ORACLE/SQLSERVER/POSTGRESQL/OUTRO). |
| `NumPag` | Número da página. |
| `DesRodape` | Descrição para rodapé. |
| `GerTabAlf` | Vetor alfanumérico (2000 ocorrências). |
| `GerTabNum` | Vetor numérico flutuante (999 ocorrências). |
