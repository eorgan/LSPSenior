# 🧭 Descobrir qual banco (SGBD) o ERP está usando

O ERP Senior roda sobre **Oracle**, **SQL Server** ou **PostgreSQL**, e o SQL cru muda entre eles
(`ROWNUM` × `TOP` × `LIMIT`, `NVL` × `ISNULL`, `SYSDATE` × `GETDATE()`, `||` × `+`, `FROM DUAL`).
Uma regra que precisa montar SQL nativo portável tem de **descobrir o dialeto em tempo de execução** —
não presuma Oracle só porque a base atual é Oracle.

> Se o SQL for simples, prefira **não** detectar nada: escreva no padrão Senior SQL 2
> (`SQL_UsarSqlSenior2`), que o próprio ERP traduz para o banco conectado. A detecção abaixo
> só é necessária quando o comando precisa de sintaxe nativa.

## 1º método — perguntar à Central de Configurações (`RetornaValorCFG`) ✅ preferido

A chave `com.senior.database.<sistema>.db_kind` guarda o **tipo de banco configurado** para
aquele sistema. Para o ERP o `<sistema>` é `sapiens` (HCM = `vetorh`, e assim por diante).

**O valor traz o produto E a versão, colados por `_`** — medido em produção: `oracle_19`,
`mssql_2019` (SQL Server 2019). Por isso **nunca compare por igualdade**: case o **prefixo do
produto** (`ORACLE`, `MSSQL`) com `PosicaoStr`, depois de `ConverteParaMaiusculo`.

```lsp
Definir Alfa vaChaBco;
Definir Alfa vaKndBco;
Definir Alfa vaDialeto;
Definir Numero vnPosBco;

vaDialeto = "";
vaKndBco  = "";
vaChaBco  = "com.senior.database.sapiens.db_kind";

RetornaValorCFG(vaChaBco, vaKndBco);   @ ex.: "oracle_19" ou "mssql_2019" @

@ normaliza ANTES de comparar — a caixa gravada no CFG não é garantida @
LimpaEspacos(vaKndBco);
ConverteParaMaiusculo(vaKndBco);

vnPosBco = 0;
PosicaoStr("ORACLE", vaKndBco, vnPosBco);
Se (vnPosBco > 0)
   {
      vaDialeto = "ORACLE";
   }

Se (vaDialeto = "")
   {
      vnPosBco = 0;
      PosicaoStr("MSSQL", vaKndBco, vnPosBco);
      Se (vnPosBco > 0)
         {
            vaDialeto = "SQLSERVER";
         }
   }

@ vaDialeto vazio aqui = não concluiu; caia no método 2, nunca chute @
```

Cuidados obrigatórios:

- **Case o prefixo do produto, não a string inteira** — o sufixo de versão muda a cada
  atualização de banco (`oracle_19` hoje, `oracle_23` amanhã) e igualdade exata quebraria em
  silêncio, sem erro visível, na próxima migração.
- **`ORACLE` e `MSSQL`, não `SQL`** — "MSSQL" e "POSTGRESQL" contêm "SQL"; casar só `"SQL"`
  mandaria PostgreSQL para o ramo do SQL Server.
- **Sempre tenha um fallback.** Se nenhum ramo casar, `vaDialeto` fica vazio: caia no método 2,
  nunca chute. Dialeto errado = SQL inválido em *todos* os cursores da regra.
- **A chave `PASSWORD` do CFG não é legível** por `RetornaValorCFG` (bloqueio da própria função);
  outras chaves do grupo (`...url`, `...user`) são.

**Bônus:** como o sufixo é a versão do banco, o mesmo retorno serve para liberar sintaxe que só
existe a partir de certa release (`OFFSET/FETCH`, `LISTAGG`…). Extraia com `CopiarAlfa` a partir
do `_` (altera a própria variável: trabalhe numa cópia) e converta com `AlfaParaInt` — mas trate `mssql_2019` (ano) e `oracle_19` (release) como
escalas diferentes.

## 2º método — inferir por `RowNum` (custo zero, sem tocar no banco)

`RowNum(pLinhas, pPosicao, pInsAnd, pCmdRet)` devolve o fragmento de limite de linhas **já
adaptado ao banco conectado**; as posições que não se aplicam voltam vazias, e é esse vazio
seletivo que identifica o dialeto:

| Posição | Fragmento | Banco que preenche |
| --- | --- | --- |
| `"S"` (Select) | `TOP n` | SQL Server |
| `"C"` (Condição) | `ROWNUM <= n` | Oracle |
| `"F"` (Final) | `LIMIT n` | PostgreSQL |

Gere sempre as três variáveis, aplique `LimpaEspacos` em cada uma e só conclua com
**exclusividade** (uma preenchida **e** a outra vazia). Implementação de referência:
`DetectarDialeto()` em `MonitoringScania/Lista os registros … R960PAR - v3/v4.lspt`.

## 3º método — sonda de banco (último recurso, 2 round-trips)

`ExecutarComandoSQL` só aceita `INSERT`/`UPDATE`, mas devolve a exceção no parâmetro de retorno
em vez de abortar a regra — o que permite sondar. Dois `UPDATE ... WHERE 1=0` (nada é alterado):
um **controle** portável (se falhar, o problema não é o dialeto) e uma **sonda** com `ROWNUM`,
que só o Oracle aceita. Use apenas como rede de segurança dos métodos 1 e 2.

**Ordem recomendada:** `RetornaValorCFG` → `RowNum` → sonda. Os dois primeiros custam zero
acesso ao banco; o terceiro custa dois.
