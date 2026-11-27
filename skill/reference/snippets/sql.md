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
**Uso:** Montar string SQL com parâmetros bind (`:nome`) em vez de concatenar valores
**Tags:** sql, cursor, montar, bind, parametro, empresa

```lspt
vaComando = "SELECT CAMPO1, CAMPO2 FROM TABELA"; @ TODO: ajustar colunas e tabela @
vaComando = vaComando + " WHERE CODEMP = :xCodEmp";
vaComando = vaComando + " AND SITUACAO = :xSituacao";  @ TODO: ajustar filtro @
vaComando = vaComando + " ORDER BY CAMPO1";            @ TODO: ajustar ordem @
```

---

## BLOCO: montar-sql-concatenado
**Uso:** Último recurso — concatenar valor no SQL quando bind não for possível
**Tags:** sql, cursor, montar, concatenar, empresa

```lspt
@ Só para NÚMERO já re-serializado; nunca concatene Alfa vindo de fora @
IntParaAlfa(xEmp, vaCodEmpSql);

vaComando = "SELECT CAMPO1, CAMPO2 FROM TABELA"; @ TODO: ajustar colunas e tabela @
vaComando = vaComando + " WHERE CODEMP = " + vaCodEmpSql;
vaComando = vaComando + " AND SITUACAO = 'A'";   @ TODO: ajustar filtro @
```

---

## BLOCO: abrir-cursor
**Uso:** Inicializar, dar bind nos parâmetros e abrir cursor SQL (após montar vaComando)
**Tags:** sql, cursor, abrir, inicializar, bind

```lspt
SQL_Criar(vaCursor);
SQL_UsarSqlSenior2(vaCursor, 0);
SQL_UsarAbrangencia(vaCursor, 0);
SQL_DefinirComando(vaCursor, vaComando);

@ bind de cada :parametro do comando — nome SEM os dois-pontos @
SQL_DefinirInteiro(vaCursor, "xCodEmp", xEmp);        @ TODO: ajustar @
SQL_DefinirAlfa(vaCursor, "xSituacao", "A");          @ TODO: ajustar @

SQL_AbrirCursor(vaCursor);
```

---

## BLOCO: bind-parametro
**Uso:** Atribuir valor a um parâmetro `:nome` do comando (entre DefinirComando e AbrirCursor)
**Tags:** sql, cursor, bind, parametro, definir

```lspt
SQL_DefinirAlfa(vaCursor, "xParam", vaValor);        @ Alfa @
SQL_DefinirInteiro(vaCursor, "xParam", vnValor);     @ Numero inteiro @
SQL_DefinirFlutuante(vaCursor, "xParam", vnValor);   @ Numero decimal @
SQL_DefinirData(vaCursor, "xParam", vdValor);        @ Data @
@ NÃO existe SQL_DefinirNumero @
```

---

## BLOCO: loop-cursor
**Uso:** Percorrer todos os registros retornados pelo cursor
**Tags:** sql, cursor, loop, enquanto, eof, iterar

```lspt
Enquanto (SQL_EOF(vaCursor) = 0)
   {
      SQL_RetornarAlfa(vaCursor, "CAMPO_ALFA", vaVar);   @ TODO: ajustar @
      SQL_RetornarInteiro(vaCursor, "CAMPO_NUM", vnVar); @ TODO: ajustar @

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

## BLOCO: retornar-inteiro
**Uso:** Ler coluna numérica inteira do cursor para variável Numero
**Tags:** sql, cursor, retornar, numero, inteiro, ler, coluna

```lspt
SQL_RetornarInteiro(vaCursor, "NOME_COLUNA", vnVariavel); @ TODO: ajustar coluna e variável @
```

---

## BLOCO: retornar-flutuante
**Uso:** Ler coluna numérica decimal do cursor para variável Numero
**Tags:** sql, cursor, retornar, numero, decimal, flutuante, ler, coluna

```lspt
SQL_RetornarFlutuante(vaCursor, "NOME_COLUNA", vnVariavel); @ TODO: ajustar coluna e variável @
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
Definir Alfa   vaChave;        @ TODO: ajustar @
Definir Alfa   vaResultado;    @ TODO: ajustar tipo/nome conforme campo buscado @
Definir Numero vnEncontrado;

@ --- Chamada --- @
BuscaDados();
Se (vnEncontrado = 0)
   {
      Mensagem(Retorna, "Registro não encontrado."); @ TODO: ajustar mensagem @
   }

@ --- Implementação --- @
Funcao BuscaDados();
   Inicio
      vnEncontrado = 0;

      vaComando = "SELECT CAMPO FROM TABELA";       @ TODO: ajustar @
      vaComando = vaComando + " WHERE CODEMP = :xCodEmp";
      vaComando = vaComando + " AND CHAVE = :xChave"; @ TODO: ajustar @

      SQL_Criar(vaCursor);
      SQL_UsarSqlSenior2(vaCursor, 0);
      SQL_UsarAbrangencia(vaCursor, 0);
      SQL_DefinirComando(vaCursor, vaComando);
      SQL_DefinirInteiro(vaCursor, "xCodEmp", xEmp);
      SQL_DefinirAlfa(vaCursor, "xChave", vaChave);   @ TODO: ajustar @
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

## PADRÃO: cursor-nativo
**Uso:** Ler registros com o cursor nativo (`Definir Cursor`), comum em regras já existentes
**Tags:** sql, cursor, nativo, tipo1, definir cursor, achou, proximo, legado

```lspt
Definir Cursor Cur_TABELA;               @ TODO: Cur_ + nome da tabela @
Definir Alfa   vaCampo;

@ SQL literal; :variavel faz o bind com a variavel da regra; "\" continua a linha @
Cur_TABELA.SQL "SELECT CAMPO1, CAMPO2 FROM TABELA \
                 WHERE CODEMP = :vnCodEmp \
                 ORDER BY CAMPO1";
Cur_TABELA.AbrirCursor();
Enquanto (Cur_TABELA.Achou)
   {
      vaCampo = Cur_TABELA.Campo1;       @ TODO: ler as colunas @
      Cur_TABELA.Proximo();
   }
Cur_TABELA.FecharCursor();
```

---

## PADRÃO: execsql-bind
**Uso:** Gravar com o comando `ExecSql` (INSERT/UPDATE/DELETE fixo, valores por bind)
**Tags:** sql, execsql, comando, bind, insert, update, delete, transacao

```lspt
@ Comando, nao funcao: sem parenteses e sem retorno; erro de banco interrompe a regra @
IniciarTransacao();
ExecSql "UPDATE USU_TTABELA SET USU_CAMPO = :vaValor \
          WHERE USU_CODEMP = :vnCodEmp AND USU_CHAVE = :vnChave";   @ TODO: ajustar @
FinalizarTransacao();
```

---

## PADRÃO: execsql-direto
**Uso:** Executar INSERT/UPDATE montado em variável, com o erro tratado na regra
**Tags:** sql, execsql, insert, update, delete, dml, direto

```lspt
@ --- Declarações --- @
Definir Alfa   vaComandoDML;
Definir Alfa   vaResExec;
Definir Alfa   vaMsgErro;
Definir Numero vnLinhas;

/*
 * ATENÇÃO: ExecutarComandoSQL só aceita INSERT/UPDATE e NÃO tem parâmetro bind
 * (não existe cursor). O valor precisa ir concatenado — então valide/converta
 * antes: número via AlfaParaInt + IntParaAlfa, e nunca concatene Alfa recebido
 * de fora (parâmetro de WS, campo de tela) sem tratar.
 */

@ --- Execução --- @
vaComandoDML = "UPDATE TABELA SET CAMPO = 'VALOR'";       @ TODO: ajustar @
vaComandoDML = vaComandoDML + " WHERE CHAVE = '" + vaChave + "'"; @ TODO: ajustar @

ExecutarComandoSQL(vaComandoDML, "N", vnLinhas, vaResExec); @ "N" = sem conexão paralela @
Se (vaResExec <> "OK")
   {
      vaMsgErro = "Falha ao executar SQL: " + vaResExec; @ TODO: ajustar mensagem @
      Mensagem(Erro, vaMsgErro);
   }
```
