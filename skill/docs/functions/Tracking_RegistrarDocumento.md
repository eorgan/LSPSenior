# Tracking_RegistrarDocumento

## Assinatura

```lspt
Funcao Tracking_RegistrarDocumento(Numero pCodEmp, Numero pCodFil, Alfa pTipDoc, Alfa pNumDoc, Alfa pSerDoc, Alfa pDocExt, Numero pCodPla, Alfa end pStatus, Alfa end pMensagemErro);
```

## Código
955

## Descrição

Essa função criará um evento de registro de documento na tabela E000ETK, para que posteriormente possa ser consumido pelo processo automático [168 - Integração ERP x Tracking - Envio](../processos-automaticos/168-integracao-erp-tracking-envio.htm).

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Código da empresa
- **pCodFil** (`Numero`) - Entrada: Código da filial
- **pTipDoc** (`Alfa`) - Entrada: Tipo de documento no tracking
- **pNumDoc** (`Alfa`) - Entrada: Número do documento
- **pSerDoc** (`Alfa`) - Entrada: Número do documento externo
- **pDocExt** (`Alfa`) - Entrada: Número do documento externo
- **pCodPla** (`Numero`) - Entrada: Código do plano no tracking
- **pStatus** (`Alfa end`) - Saída: Retorna o status da execução
- **pMensagemErro** (`Alfa end`) - Saída: Retorna a mensagem de erro

## Exemplo de Uso

```lspt
 @ Variáveis passadas para a regra @ Definir Numero xEmpresa; Definir Numero xFilial; Definir Numero xNumeroPedido; Definir Alfa xPedidoCliente;  @ Variáveis auxiliares da regra @ Definir Numero NCodigoPlano; Definir Alfa ATipoDocumento; Definir Alfa ASerieDocumento; Definir Alfa ANumeroDocumento;  Definir Alfa AStatus; Definir Alfa AMensagemErro;  inicio   NCodigoPlano = 1;     ATipoDocumento = "Pedido";   IntParaAlfa(xNumeroPedido, ANumeroDocumento);      Tracking_RegistrarDocumento(xEmpresa, xFilial, ATipoDocumento, ANumeroDocumento, ASerieDocumento, xPedidoCliente, NCodigoPlano, AStatus, AMensagemErro); fim
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/tracking_registrardocumento.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
