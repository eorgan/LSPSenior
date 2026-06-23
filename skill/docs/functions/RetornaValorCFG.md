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

- **aChave** (`Alfa`) - Entrada: Nome da chave de configuração. Pode conter:
- **aRetorno** (`Alfa End`) - Saída: Variável que receberá o valor da chave

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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
