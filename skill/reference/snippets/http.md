# Snippets HTTP — Requisições REST/SOAP

## BLOCO: declarar-http
**Uso:** Declarar variáveis para requisição HTTP
**Tags:** http, declarar, variáveis, objeto

```lspt
Definir Alfa vaHTTP;      @ handle do objeto HTTP @
Definir Alfa vaResposta;  @ corpo da resposta @
Definir Alfa vaDados;     @ corpo do POST/PUT @
Definir Numero vnCodHttp; @ código de resposta HTTP (200, 400, etc.) @
```

---

## BLOCO: criar-http
**Uso:** Inicializar objeto HTTP com configurações padrão da Central
**Tags:** http, criar, inicializar, objeto, httpobjeto

```lspt
HttpObjeto(vaHTTP);
```

---

## BLOCO: cabecalho-http
**Uso:** Adicionar cabeçalho HTTP (Content-Type, Authorization, etc.)
**Tags:** http, cabeçalho, header, authorization, content-type

```lspt
HttpAlteraCabecalhoRequisicao(vaHTTP, "Content-Type", "application/json"); @ TODO: ajustar @
HttpAlteraCabecalhoRequisicao(vaHTTP, "Authorization", "Bearer " + vaToken); @ TODO: ajustar ou remover @
```

---

## BLOCO: post-http
**Uso:** Enviar POST e capturar resposta + código HTTP
**Tags:** http, post, enviar, resposta, httppost

```lspt
HttpPost(vaHTTP, vaURL, vaDados, vaResposta); @ TODO: ajustar URL e dados @
HttpLeCodigoResposta(vaHTTP, vnCodHttp);
```

---

## PADRÃO: http-post-simples
**Uso:** POST HTTP completo: criar objeto, configurar cabeçalhos, enviar e verificar código de resposta
**Tags:** http, post, padrão, completo, simples, rest, json

```lspt
@ --- Declarações (escopo global) --- @
Definir Funcao ChamarAPI(); @ TODO: renomear @
Definir Alfa vaHTTP;
Definir Alfa vaResposta;
Definir Alfa vaDados;
Definir Alfa vaURL;
Definir Alfa vaToken;
Definir Numero vnCodHttp;

@ --- Chamada --- @
ChamarAPI();
Se (vnCodHttp <> 200)
   {
      MensagemErro("Falha na chamada HTTP. Código: " + vnCodHttp); @ TODO: ajustar @
   }

@ --- Implementação --- @
Funcao ChamarAPI();
   Inicio
      vaURL   = "https://api.exemplo.com/endpoint"; @ TODO: ajustar URL @
      vaToken = "Bearer seu_token";                 @ TODO: ajustar ou ler de E000PDV @
      vaDados = "{\"campo\": \"valor\"}";           @ TODO: ajustar corpo JSON @

      HttpObjeto(vaHTTP);
      HttpAlteraCabecalhoRequisicao(vaHTTP, "Content-Type", "application/json");
      HttpAlteraCabecalhoRequisicao(vaHTTP, "Authorization", vaToken);

      HttpPost(vaHTTP, vaURL, vaDados, vaResposta);
      HttpLeCodigoResposta(vaHTTP, vnCodHttp);
   Fim;
```

---

## PADRÃO: http-failover
**Uso:** POST HTTP com dois hosts em E000PDV — tenta principal, cai para secundário se falhar
**Tags:** http, post, padrão, failover, redundância, e000pdv, tolerância a falha, completo

```lspt
@ --- Declarações (escopo global) --- @
Definir Funcao ConfiguraHosts();
Definir Funcao EnviaComFailover();

Definir Alfa gaHTTP;
Definir Alfa gaHostPrim;   @ host:porta principal (lido de E000PDV) @
Definir Alfa gaHostSec;    @ host:porta secundário (lido de E000PDV) @
Definir Alfa gaPath;       @ path após o host (ex: /api/v1/endpoint) @
Definir Alfa gaPostBody;   @ corpo do POST @
Definir Alfa gaResposta;   @ resposta recebida @
Definir Numero gnCodHttp;
Definir Numero gnHostsLoaded;

@ --- Chamada --- @
gnHostsLoaded = 0;
ConfiguraHosts();
EnviaComFailover();
Se (gnCodHttp = 0)
   {
      MensagemErro("Todos os hosts falharam."); @ TODO: ajustar @
   }

@ --- Lê hosts de E000PDV --- @
Funcao ConfiguraHosts();
   Inicio
      Se (gnHostsLoaded = 1) { Retornar; }

      Definir Alfa vaCur8;
      Definir Alfa vaCom8;
      Definir Alfa vaChv8;
      Definir Alfa vaVal8;

      vaCom8 = "SELECT CHAPDV, VLRPDV FROM E000PDV";
      vaCom8 = vaCom8 + " WHERE CHAPDV IN ('HOST_PRIM','HOST_SEC')"; @ TODO: ajustar chaves @

      SQL_Criar(vaCur8);
      SQL_UsarSqlSenior2(vaCur8, 0);
      SQL_UsarAbrangencia(vaCur8, 0);
      SQL_DefinirComando(vaCur8, vaCom8);
      SQL_AbrirCursor(vaCur8);
      Enquanto (SQL_EOF(vaCur8) = 0)
         {
            SQL_RetornarAlfa(vaCur8, "CHAPDV", vaChv8);
            SQL_RetornarAlfa(vaCur8, "VLRPDV", vaVal8);
            Se (vaChv8 = "HOST_PRIM") { gaHostPrim = vaVal8; }
            Se (vaChv8 = "HOST_SEC")  { gaHostSec  = vaVal8; }
            SQL_Proximo(vaCur8);
         }
      SQL_FecharCursor(vaCur8);
      SQL_Destruir(vaCur8);
      gnHostsLoaded = 1;
   Fim;

@ --- Tenta principal, depois secundário --- @
Funcao EnviaComFailover();
   Inicio
      Definir Alfa vaURLCompleta;
      gnCodHttp = 0;

      vaURLCompleta = "https://" + gaHostPrim + gaPath; @ TODO: ajustar protocolo @
      HttpObjeto(gaHTTP);
      HttpAlteraCabecalhoRequisicao(gaHTTP, "Content-Type", "application/json"); @ TODO: ajustar @
      HttpPost(gaHTTP, vaURLCompleta, gaPostBody, gaResposta);
      HttpLeCodigoResposta(gaHTTP, gnCodHttp);
      Se (gnCodHttp = 200) { Retornar; } @ TODO: ajustar código de sucesso @

      vaURLCompleta = "https://" + gaHostSec + gaPath;
      HttpObjeto(gaHTTP);
      HttpAlteraCabecalhoRequisicao(gaHTTP, "Content-Type", "application/json");
      HttpPost(gaHTTP, vaURLCompleta, gaPostBody, gaResposta);
      HttpLeCodigoResposta(gaHTTP, gnCodHttp);
   Fim;
```
