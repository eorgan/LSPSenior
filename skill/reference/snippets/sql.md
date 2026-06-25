# Snippets SQL — Cursor e ExecSQL

## BLOCO: declarar-cursor
**Uso:** Declarar variáveis necessárias para abrir um cursor SQL
**Tags:** sql, cursor, declarar, variáveis

```lspt
Definir Alfa vaCursor;   @ handle do cursor @
Definir Alfa vaComando;  @ SQL montado como string @
```

---

## BLOCO: montar-sql
**Uso:** Montar string SQL com concatenação segura (nunca interpolando variável numérica direta)
**Tags:** sql, cursor, montar, concatenar, empresa

```lspt
@ Converter número para alfa ANTES de concatenar @
IntParaAlfa(xEmp, vaCodEmpSql);

vaComando = "SELECT CAMPO1, CAMPO2 FROM TABELA"; @ TODO: ajustar colunas e tabela @
vaComando = vaComando + " WHERE CODEMP = " + vaCodEmpSql;
vaComando = vaComando + " AND SITUACAO = 'A'";   @ TODO: ajustar filtro @
vaComando = vaComando + " ORDER BY CAMPO1";      @ TODO: ajustar ordem @
```

---

## BLOCO: abrir-cursor
**Uso:** Inicializar e abrir cursor SQL (sempre após montar vaComando)
**Tags:** sql, cursor, abrir, inicializar

```lspt
SQL_Criar(vaCursor);
SQL_UsarSqlSenior2(vaCursor, 0);
SQL_UsarAbrangencia(vaCursor, 0);
SQL_DefinirComando(vaCursor, vaComando);
SQL_AbrirCursor(vaCursor);
```

---

## BLOCO: loop-cursor
**Uso:** Percorrer todos os registros retornados pelo cursor
**Tags:** sql, cursor, loop, enquanto, eof, iterar

```lspt
Enquanto (SQL_EOF(vaCursor) = 0)
   {
      SQL_RetornarAlfa(vaCursor, "CAMPO_ALFA", vaVar);   @ TODO: ajustar @
      SQL_RetornarNumero(vaCursor, "CAMPO_NUM", vnVar);  @ TODO: ajustar @

      @ ... processar registro ... @

      SQL_Proximo(vaCursor);
   }
```

---

## BLOCO: fechar-cursor
**Uso:** Fechar e destruir cursor após uso (sempre em par com abrir-cursor)
**Tags:** sql, cursor, fechar, destruir, cleanup

```lspt
SQL_FecharCursor(vaCursor);
SQL_Destruir(vaCursor);
```

---

## BLOCO: retornar-alfa
**Uso:** Ler coluna texto do cursor para variável Alfa
**Tags:** sql, cursor, retornar, alfa, ler, coluna

```lspt
SQL_RetornarAlfa(vaCursor, "NOME_COLUNA", vaVariavel); @ TODO: ajustar coluna e variável @
```

---

## BLOCO: retornar-numero
**Uso:** Ler coluna numérica do cursor para variável Numero
**Tags:** sql, cursor, retornar, numero, ler, coluna

```lspt
SQL_RetornarNumero(vaCursor, "NOME_COLUNA", vnVariavel); @ TODO: ajustar coluna e variável @
```

---

## BLOCO: retornar-data
**Uso:** Ler coluna data do cursor para variável Data
**Tags:** sql, cursor, retornar, data, ler, coluna

```lspt
SQL_RetornarData(vaCursor, "NOME_COLUNA", vdVariavel); @ TODO: ajustar coluna e variável @
```

---

## PADRÃO: funcao-busca-cursor
**Uso:** Função completa de busca com cursor, tratamento de não-encontrado e cleanup garantido
**Tags:** sql, cursor, função, padrão, erro, completo, busca

```lspt
@ --- Declarações (no escopo global da regra) ---@
Definir Funcao BuscaDados(); @ TODO: renomear @
Definir Alfa   vaCursor;
Definir Alfa   vaComando;
Definir Alfa   vaCodEmpSql;
Definir Alfa   vaResultado;    @ TODO: ajustar tipo/nome conforme campo buscado @
Definir Numero vnEncontrado;

@ --- Chamada --- @
BuscaDados();
Se (vnEncontrado = 0)
   {
      MensagemAviso("Registro não encontrado."); @ TODO: ajustar mensagem @
   }

@ --- Implementação --- @
Funcao BuscaDados();
   Inicio
      vnEncontrado = 0;
      IntParaAlfa(xEmp, vaCodEmpSql);

      vaComando = "SELECT CAMPO FROM TABELA";       @ TODO: ajustar @
      vaComando = vaComando + " WHERE CODEMP = " + vaCodEmpSql;
      vaComando = vaComando + " AND CHAVE = '" + vaChave + "'"; @ TODO: ajustar @

      SQL_Criar(vaCursor);
      SQL_UsarSqlSenior2(vaCursor, 0);
      SQL_UsarAbrangencia(vaCursor, 0);
      SQL_DefinirComando(vaCursor, vaComando);
      SQL_AbrirCursor(vaCursor);

      Se (SQL_EOF(vaCursor) = 0)
         {
            SQL_RetornarAlfa(vaCursor, "CAMPO", vaResultado); @ TODO: ajustar @
            vnEncontrado = 1;
         }

      SQL_FecharCursor(vaCursor);
      SQL_Destruir(vaCursor);
   Fim;
```

---

## PADRÃO: execsql-direto
**Uso:** Executar INSERT/UPDATE/DELETE direto sem cursor (DML)
**Tags:** sql, execsql, insert, update, delete, dml, direto

```lspt
@ --- Declarações --- @
Definir Alfa   vaComandoDML;
Definir Numero vnRetExec;

@ --- Execução --- @
vaComandoDML = "UPDATE TABELA SET CAMPO = 'VALOR'";       @ TODO: ajustar @
vaComandoDML = vaComandoDML + " WHERE CHAVE = '" + vaChave + "'"; @ TODO: ajustar @

ExecutarComandoSQL(vaComandoDML, vnRetExec);
Se (vnRetExec <> 0)
   {
      MensagemErro("Falha ao executar SQL."); @ TODO: ajustar mensagem @
   }
```
