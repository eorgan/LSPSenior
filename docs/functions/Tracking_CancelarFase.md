# Tracking_CancelarFase

## Assinatura

```lspt
Funcao Tracking_CancelarFase(Numero pCodEmp, Numero pCodFil, Alfa pNumDoc, Numero pCodFas, Alfa pMsgNot, Alfa end pStatus, Alfa end pMensagemErro);
```

## Código
957

## Descrição

Essa função criará um evento de cancelamento de fase na tabela E000ETK, para que posteriormente possa ser consumido pelo processo automático "Integração ERP x Tracking - Envio".

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Código da empresa
- **pCodFil** (`Numero`) - Entrada: Código da filial
- **pNumDoc** (`Alfa`) - Entrada: Número do documento
- **pCodFas** (`Numero`) - Entrada: Código da fase no tracking
- **pMsgNot** (`Alfa`) - Entrada: Mensagem que será notificada após cancelar a fase
- **pStatus** (`Alfa end`) - Saída: Retorna o status da execução
- **pMensagemErro** (`Alfa end`) - Saída: Retorna a mensagem de erro

## Exemplo de Uso

```lspt
 @ Variáveis passadas para a regra @ Definir Numero xEmpresa; Definir Numero xFilial; Definir Numero xNumeroPedido;  @ Variáveis auxiliares da regra @ Definir Numero NCodigoFase; Definir Alfa ANumeroDocumento; Definir Alfa AMensagemNotificacao;  Definir Alfa AStatus; Definir Alfa AMensagemErro;  inicio   NCodigoFase = 1;     IntParaAlfa(xNumeroPedido, ANumeroDocumento);      Tracking_CancelarFase(xEmpresa, xFilial, ANumeroDocumento, NCodigoFase, AMensagemNotificacao, AStatus, AMensagemErro); fim
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/tracking_cancelarfase.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
