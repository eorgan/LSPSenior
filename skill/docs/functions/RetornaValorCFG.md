# RetornaValorCFG

## Assinatura

```lspt
Funcao RetornaValorCFG(Alfa aChave, Alfa End aRetorno);
```

## Código
N/A

## Descrição

Responsável por retornar para a regra o valor de uma determinada chave da Central de Configuração Senior que está sendo utilizada pelo sistema.

## Parâmetros

- **aChave** (`Alfa`) - Entrada: Nome da chave de configuração. Aceita o nome completo, a parte
  final de uma chave, ou um dos apelidos de diretório listados abaixo.
- **aRetorno** (`Alfa End`) - Saída: Variável que receberá o valor da chave

## Chaves úteis

**Apelidos de diretório** (documentação oficial): `LOGS`, `TBS` (devolve diretório + nome do
arquivo), `IMAGENS`, `ARQUIVOS`, `GRAFICOS`, `IMPEXP`, `CONSULTAS`, `REGRAS`, `CUBOS`, `MODELOS`,
`TBS_TRANSLATION_FILTER_FILE`.

**Banco de dados** — `com.senior.database.<sistema>.db_kind` devolve o **tipo de banco**
configurado para o sistema (`sapiens` = ERP; HCM usa `vetorh`). É a forma mais barata de
descobrir o SGBD antes de montar SQL com sintaxe nativa (`ROWNUM` × `TOP` × `LIMIT`,
`NVL` × `ISNULL`, `SYSDATE` × `GETDATE()`):

```lspt
Definir Alfa vaChaBco;
Definir Alfa vaKndBco;
Definir Numero vnPosBco;

vaKndBco = "";
vaChaBco = "com.senior.database.sapiens.db_kind";

RetornaValorCFG(vaChaBco, vaKndBco);   @ ex.: "oracle_19", "mssql_2019" @

LimpaEspacos(vaKndBco);
ConverteParaMaiusculo(vaKndBco);

vnPosBco = 0;
PosicaoStr("ORACLE", vaKndBco, vnPosBco);   @ ou "MSSQL" — prefixo, nunca igualdade @
```

**Valores medidos em produção:** `oracle_19` (Oracle 19c) e `mssql_2019` (SQL Server 2019) —
ou seja, **produto + versão colados por `_`**. Case sempre o **prefixo do produto** com
`PosicaoStr` após `ConverteParaMaiusculo`; igualdade exata quebra em silêncio na próxima
atualização do banco. Use `ORACLE`/`MSSQL`, não `SQL` (tanto "MSSQL" quanto "POSTGRESQL"
contêm "SQL").

Outras chaves do mesmo grupo (`...url`, `...user`) também são legíveis.

> ⚠️ A chave `PASSWORD` do CFG **não** é legível por esta função.
>
> Receita completa de detecção de dialeto (com fallback por `RowNum`): seção 🧭 do `SKILL.md`.

## Exemplo de Uso

```lspt
Definir Funcao carregarConfiguracoes();

@ Variáveis globais @
Definir Alfa vaChaveTimeout;
Definir Alfa vaChaveDebug;
Definir Alfa vaValorTimeout;
Definir Alfa vaValorDebug;
Definir Numero vnTimeout;

vaChaveTimeout = "app.timeout.request";
vaChaveDebug = "app.debug.enabled";

carregarConfiguracoes();

Funcao carregarConfiguracoes(); {
  Definir Alfa vaMensagem;
  @ Carrega timeout da requisição @
  RetornaValorCFG(vaChaveTimeout, vaValorTimeout);
  Se (TamanhoAlfa(vaValorTimeout) > 0) {
    AlfaParaInt(vaValorTimeout, vnTimeout);
    vaMensagem = "Timeout configurado: " + vaValorTimeout + "ms";
    Mensagem(Retorna, vaMensagem);
  } Senao {
    vnTimeout = 30000; @ Padrão: 30 segundos @
    Mensagem(Retorna, "Timeout não configurado, usando padrão: 30000ms");
  }
  
  @ Carrega modo debug @
  RetornaValorCFG(vaChaveDebug, vaValorDebug);
  Se (vaValorDebug = "true") {
    Mensagem(Retorna, "Modo debug ativado");
  } Senao {
    Mensagem(Retorna, "Modo debug desativado");
  }
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/retornavalorcfg.htm)

> Base gerada por `generate-functions.js` e **estendida manualmente** (seção "Chaves úteis",
> 2026-08-10). A nota de auto-geração foi removida de propósito para que este arquivo não seja
> sobrescrito na próxima execução do gerador.
