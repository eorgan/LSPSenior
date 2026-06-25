# Snippets Parâmetros — E000PDV e variáveis de sistema

## BLOCO: variaveis-sistema
**Uso:** Referência das variáveis de sistema mais usadas (empresa, usuário, data, hora)
**Tags:** sistema, empresa, usuário, data, hora, xemp, xusu, xdatsys

```lspt
@ Variáveis de sistema (sempre disponíveis, não declarar): @
@ xEmp    — código da empresa corrente (Numero)            @
@ xUsu    — código do usuário corrente (Alfa)              @
@ xDatSis — data do sistema (Data)                         @
@ xHorSis — hora do sistema (Alfa, formato "HH:MM:SS")     @
```

---

## BLOCO: int-para-alfa
**Uso:** Converter número para Alfa antes de concatenar em SQL (OBRIGATÓRIO — evita injeção e erro de tipo)
**Tags:** conversão, intparaalfa, numero, alfa, sql, segurança

```lspt
IntParaAlfa(vnNumero, vaAlfa); @ TODO: ajustar variáveis @
```

---

## BLOCO: ler-e000pdv
**Uso:** Ler valor de parâmetro configurado em E000PDV por chave (CHAPDV)
**Tags:** e000pdv, parâmetro, configuração, ler, chave, vlrpdv

```lspt
Definir Alfa vaCursorPdv;
Definir Alfa vaComandoPdv;
Definir Alfa vaValorPdv;

vaComandoPdv = "SELECT VLRPDV FROM E000PDV WHERE CHAPDV = 'MINHA_CHAVE'"; @ TODO: ajustar chave @

SQL_Criar(vaCursorPdv);
SQL_UsarSqlSenior2(vaCursorPdv, 0);
SQL_UsarAbrangencia(vaCursorPdv, 0);
SQL_DefinirComando(vaCursorPdv, vaComandoPdv);
SQL_AbrirCursor(vaCursorPdv);
Se (SQL_EOF(vaCursorPdv) = 0)
   {
      SQL_RetornarAlfa(vaCursorPdv, "VLRPDV", vaValorPdv);
   }
SQL_FecharCursor(vaCursorPdv);
SQL_Destruir(vaCursorPdv);
```

---

## PADRÃO: funcao-busca-parametro
**Uso:** Função reutilizável que busca qualquer parâmetro de E000PDV por chave e retorna o valor
**Tags:** e000pdv, parâmetro, configuração, função, padrão, completo, reutilizável

```lspt
@ --- Declarações (escopo global) --- @
Definir Funcao BuscaParametro();
Definir Alfa gaChaParam;  @ ENTRADA: chave a buscar (CHAPDV) @
Definir Alfa gaValParam;  @ SAÍDA:   valor retornado (VLRPDV) @

@ --- Uso --- @
gaChaParam = "MINHA_CHAVE"; @ TODO: ajustar chave @
BuscaParametro();
Se (gaValParam = "")
   {
      MensagemAviso("Parâmetro não configurado: " + gaChaParam);
   }

@ --- Implementação --- @
Funcao BuscaParametro();
   Inicio
      Definir Alfa vaCurPdv;
      Definir Alfa vaComPdv;
      gaValParam = "";

      vaComPdv = "SELECT VLRPDV FROM E000PDV WHERE CHAPDV = '" + gaChaParam + "'";

      SQL_Criar(vaCurPdv);
      SQL_UsarSqlSenior2(vaCurPdv, 0);
      SQL_UsarAbrangencia(vaCurPdv, 0);
      SQL_DefinirComando(vaCurPdv, vaComPdv);
      SQL_AbrirCursor(vaCurPdv);
      Se (SQL_EOF(vaCurPdv) = 0)
         {
            SQL_RetornarAlfa(vaCurPdv, "VLRPDV", gaValParam);
         }
      SQL_FecharCursor(vaCurPdv);
      SQL_Destruir(vaCurPdv);
   Fim;
```
