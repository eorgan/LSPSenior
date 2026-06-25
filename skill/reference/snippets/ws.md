# Snippets WS — Web Services Internos Senior

## BLOCO: declarar-ws-simples
**Uso:** Declarar referência a um WS interno sem retorno multi-registro
**Tags:** ws, interno, declarar, simples

```lspt
Definir interno.com.senior.g5.MODULO.SUBMODULO.NomeWS wsNome; @ TODO: ajustar path e nome @
```

---

## BLOCO: acessar-campo-entrada
**Uso:** Atribuir valor a campo de entrada do WS antes de chamá-lo
**Tags:** ws, interno, campo, entrada, atribuir

```lspt
wsNome.CampoEntrada = vaValor; @ TODO: ajustar campo e variável @
```

---

## BLOCO: acessar-campo-saida
**Uso:** Ler campo de retorno do WS após chamada
**Tags:** ws, interno, campo, saída, ler, retorno

```lspt
vaVar = wsNome.CampoSaida; @ TODO: ajustar campo e variável @
```

---

## BLOCO: criar-linha-ws
**Uso:** Adicionar nova linha em grid de entrada do WS (multi-registro)
**Tags:** ws, interno, criar, linha, grid, multi-registro

```lspt
wsNome.Itens.CriarLinha(); @ TODO: ajustar nome do grid @
wsNome.Itens.CampoA = vaValorA; @ TODO: ajustar campos @
wsNome.Itens.CampoB = vaValorB;
```

---

## BLOCO: loop-ws-retorno
**Uso:** Percorrer linhas de grid de retorno do WS
**Tags:** ws, interno, loop, grid, retorno, iterar, qtdlinhas

```lspt
vnQtd = wsNome.GridRetorno.QtdLinhas; @ TODO: ajustar nome do grid @
Para (vnLin = 0; vnLin < vnQtd; vnLin++)
   Inicio
      wsNome.GridRetorno.LinhaAtual = vnLin;
      vaVar = wsNome.GridRetorno.Campo; @ TODO: ajustar campo e variável @
   Fim;
```

---

## PADRÃO: funcao-ws-entrada-simples
**Uso:** Função completa de chamada a WS interno com entrada simples (sem grid) e verificação de erro
**Tags:** ws, interno, função, padrão, entrada, erro, completo

```lspt
@ --- Declarações (escopo global) --- @
Definir interno.com.senior.g5.MODULO.SUBMODULO.NomeWS wsNome; @ TODO: ajustar @
Definir Funcao ChamarWS(); @ TODO: renomear @
Definir Alfa vaErroExec;
Definir Alfa vaResultado; @ TODO: ajustar tipo/nome @

@ --- Chamada --- @
ChamarWS();
Se (vaErroExec <> "")
   {
      MensagemErro("Erro no WS: " + vaErroExec); @ TODO: ajustar @
   }

@ --- Implementação --- @
Funcao ChamarWS();
   Inicio
      wsNome.CampoEntrada = vaValor;     @ TODO: ajustar campos de entrada @
      wsNome.ModoExecucao = 2;  @ TODO: 1=Local / 2=Síncrono / 3=Assíncrono / 4=Agendado @
      wsNome.Executar();
      vaErroExec  = wsNome.erroExecucao;
      vaResultado = wsNome.CampoSaida;   @ TODO: ajustar campo de saída @
   Fim;
```

---

## PADRÃO: funcao-ws-multi-registro
**Uso:** Função completa de WS com grid de entrada multi-registro, loop de envio e leitura de retorno
**Tags:** ws, interno, função, padrão, multi-registro, grid, loop, completo

```lspt
@ --- Declarações (escopo global) --- @
Definir interno.com.senior.g5.MODULO.SUBMODULO.NomeWS wsNome; @ TODO: ajustar @
Definir Funcao ChamarWSMulti(); @ TODO: renomear @
Definir Numero vnQtdItens;
Definir Numero vnLin;
Definir Alfa   vaErroExec;
Definir Alfa   vaMsgRet;
Definir Numero vnTipRet;

@ --- Chamada --- @
ChamarWSMulti();

@ --- Implementação --- @
Funcao ChamarWSMulti();
   Inicio
      @ Montar grid de entrada @
      vnQtdItens = 3; @ TODO: ajustar quantidade ou calcular dinamicamente @
      Para (vnLin = 0; vnLin < vnQtdItens; vnLin++)
         Inicio
            wsNome.Itens.CriarLinha();      @ TODO: ajustar nome do grid @
            wsNome.Itens.CampoA = vaValorA; @ TODO: ajustar campos @
            wsNome.Itens.CampoB = vaValorB;
         Fim;

      @ Executar e ler retorno @
      wsNome.ModoExecucao = 2;  @ TODO: 1=Local / 2=Síncrono / 3=Assíncrono / 4=Agendado @
      wsNome.Executar();
      vaErroExec = wsNome.erroExecucao;
      Se (vaErroExec <> "")
         {
            MensagemErro("Erro no WS: " + vaErroExec); @ TODO: ajustar @
         }
      Senao
         {
            vnQtdItens = wsNome.GridRetorno.QtdLinhas; @ TODO: ajustar grid de retorno @
            Para (vnLin = 0; vnLin < vnQtdItens; vnLin++)
               Inicio
                  wsNome.GridRetorno.LinhaAtual = vnLin;
                  vnTipRet = wsNome.GridRetorno.TipRet;    @ TODO: ajustar campos @
                  vaMsgRet = wsNome.GridRetorno.Mensagem;
                  Se (vnTipRet <> 1)
                     {
                        MensagemAviso("Linha " + vnLin + ": " + vaMsgRet);
                     }
               Fim;
         }
   Fim;
```
