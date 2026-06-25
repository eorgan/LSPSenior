# Snippets Log — Gravação de logs e auditoria

## BLOCO: gravar-log-ws
**Uso:** Gravar uma entrada de log via WS interno Senior (padrão recomendado)
**Tags:** log, gravar, ws, interno, auditoria, gravarlog

```lspt
Definir interno.custom.senior.g5.logs.gravarLog sGravaLog; @ TODO: confirmar path do WS @

sGravaLog.IdeLog = "DEV";                      @ TODO: ajustar identificador do log @
sGravaLog.NomTab = "NOME_TABELA";              @ TODO: tabela relacionada @
sGravaLog.TipLog = "I";                        @ TODO: I=Info, E=Erro, A=Aviso @
sGravaLog.ChaTab = vaChave;                    @ TODO: chave do registro @
sGravaLog.NomFrm = "NOME_TELA";               @ TODO: nome da tela/regra @
sGravaLog.DesLog = "Mensagem descritiva aqui"; @ TODO: descrição do evento @
```

---

## BLOCO: gravar-log-sql
**Uso:** Gravar log diretamente em tabela customizada via SQL (quando WS não disponível)
**Tags:** log, gravar, sql, tabela, customizado, insert, execsql

```lspt
Definir Alfa   vaComLog;
Definir Numero vnRetLog;
Definir Alfa   vaEmpSql;

IntParaAlfa(xEmp, vaEmpSql);
vaComLog = "INSERT INTO TABELA_LOG (CODEMP, DATSYS, HORSYS, CODUSU, DESLOG)"; @ TODO: ajustar tabela e colunas @
vaComLog = vaComLog + " VALUES (" + vaEmpSql + ", '" + xDatSis + "', '" + xHorSis + "'";
vaComLog = vaComLog + ", '" + xUsu + "', '" + vaDescricao + "')"; @ TODO: ajustar variáveis @

ExecutarComandoSQL(vaComLog, vnRetLog);
```

---

## PADRÃO: funcao-grava-log
**Uso:** Função reutilizável de gravação de log com WS Senior — recebe tipo, tabela, chave e mensagem
**Tags:** log, função, padrão, completo, ws, auditoria, timestamp, reutilizável

```lspt
@ --- Declarações (escopo global) --- @
Definir Funcao GravaLog();
Definir Alfa gaTabLog;  @ ENTRADA: tabela relacionada ao evento @
Definir Alfa gaTipLog;  @ ENTRADA: tipo (I=Info / E=Erro / A=Aviso) @
Definir Alfa gaChaLog;  @ ENTRADA: chave do registro afetado @
Definir Alfa gaDesLog;  @ ENTRADA: descrição do evento @

@ --- Uso --- @
gaTabLog = "E440NFC";                    @ TODO: ajustar tabela @
gaTipLog = "I";
gaChaLog = vaCodNota;
gaDesLog = "Nota processada com sucesso.";
GravaLog();

@ --- Implementação --- @
Funcao GravaLog();
   Inicio
      Definir interno.custom.senior.g5.logs.gravarLog sLog; @ TODO: confirmar path @
      sLog.IdeLog = "DEV";        @ TODO: ajustar identificador @
      sLog.NomTab = gaTabLog;
      sLog.TipLog = gaTipLog;
      sLog.ChaTab = gaChaLog;
      sLog.NomFrm = "REGRA_LSP";  @ TODO: ajustar nome da regra @
      sLog.DesLog = gaDesLog;
   Fim;
```
