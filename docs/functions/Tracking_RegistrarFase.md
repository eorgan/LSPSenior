# Tracking_RegistrarFase

## Assinatura

```lspt
Funcao Tracking_RegistrarFase(Numero pCodEmp, Numero pCodFil, Alfa pNumDoc, Numero pCodFas, Alfa pMsgNot, Alfa EncTrk, Alfa end pStatus, Alfa end pMensagemErro);
```

## Código
956

## Descrição

Essa função criará um evento de registro de fase na tabela E000ETK, para que posteriormente possa ser consumido pelo processo automático [168 - Integração ERP x Tracking - Envio](../processos-automaticos/168-integracao-erp-tracking-envio.htm).

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Código da empresa
- **pCodFil** (`Numero`) - Entrada: Código da filial
- **pNumDoc** (`Alfa`) - Entrada: Número do documento
- **pCodFas** (`Numero`) - Entrada: Código da fase no tracking
- **pMsgNot** (`Alfa`) - Entrada: Mensagem que será notificada após registrar a fase
- **EncTrk** (`Alfa`) - Entrada: Indica se a fase deverá encerrar o tracking
- **pStatus** (`Alfa end`) - Saída: Retorna o status da execução
- **pMensagemErro** (`Alfa end`) - Saída: Retorna a mensagem de erro

## Exemplo de Uso

```lspt
 @ Variáveis passadas para a regra @ Definir Numero xEmpresa; Definir Numero xFilial; Definir Numero xNumeroPedido;  @ Variáveis auxiliares da regra @ Definir Numero NCodigoFase; Definir Alfa ANumeroDocumento; Definir Alfa AEncerrarTracking; Definir Alfa AMensagemNotificacao;  Definir Alfa AStatus; Definir Alfa AMensagemErro;  inicio   NCodigoFase = 1;     AEncerrarTracking = "N";   IntParaAlfa(xNumeroPedido, ANumeroDocumento);      Tracking_RegistrarFase(xEmpresa, xFilial, ANumeroDocumento, NCodigoFase, AMensagemNotificacao, AEncerrarTracking, AStatus, AMensagemErro); fim
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/tracking_registrarfase.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
