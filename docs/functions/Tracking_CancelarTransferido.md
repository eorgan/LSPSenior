# Tracking_CancelarTransferido

## Assinatura

```lspt
Funcao Tracking_CancelarTransferido(Numero pCodEmp, Numero pCodFil, Alfa pTipDoc, Alfa pNumDoc, Alfa pSerDoc, Alfa end pStatus, Alfa end pMensagemErro);
```

## Código
960

## Descrição

Essa função criará um evento de registro de cancelamento de transferência na tabela E000ETK, para que posteriormente possa ser consumido pelo processo automático "Integração ERP x Tracking - Envio".

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Código da empresa
- **pCodFil** (`Numero`) - Entrada: Código da filial
- **pTipDoc** (`Alfa`) - Entrada: Tipo de documento no tracking
- **pNumDoc** (`Alfa`) - Entrada: Número do documento
- **pSerDoc** (`Alfa`) - Entrada: Série do documento
- **pStatus** (`Alfa end`) - Saída: Retorna o status da execução
- **pMensagemErro** (`Alfa end`) - Saída: Retorna a mensagem de erro

## Exemplo de Uso

```lspt
 @ Variáveis passadas para a regra @ Definir Numero xEmpresa; Definir Numero xFilial; Definir Numero xNumeroAnaliseEmbarque; Definir Numero xNumeroPreFatura;  @ Variáveis auxiliares da regra @ Definir Alfa ATipoDocumento; Definir Alfa ASerieDocumento; Definir Alfa ANumeroDocumento;  Definir Alfa AStatus; Definir Alfa AMensagemErro;  inicio   ATipoDocumento = "Pre-fatura";   IntParaAlfa(xNumeroAnaliseEmbarque, ANumeroDocumento);     IntParaAlfa(xNumeroPreFatura, ASerieDocumento);      Tracking_CancelarTransferido(xEmpresa, xFilial, ATipoDocumento, ANumeroDocumento, ASerieDocumento, AStatus, AMensagemErro); fim
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
