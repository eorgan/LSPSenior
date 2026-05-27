# Tracking_Cancelar

## Assinatura

```lspt
Funcao Tracking_Cancelar(Numero pCodEmp, Numero pCodFil, Alfa pNumDoc, Alfa end pStatus, Alfa end pMensagemErro);
```

## Código
958

## Descrição

Essa função criará um evento de cancelamento do tracking na tabela E000ETK, para que posteriormente possa ser consumido pelo processo automático "Integração ERP x Tracking - Envio".

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Código da empresa
- **pCodFil** (`Numero`) - Entrada: Código da filial
- **pNumDoc** (`Alfa`) - Entrada: Número do documento
- **pStatus** (`Alfa end`) - Saída: Retorna o status da execução
- **pMensagemErro** (`Alfa end`) - Saída: Retorna a mensagem de erro

## Exemplo de Uso

```lspt
 @ Variáveis passadas para a regra @ Definir Numero xEmpresa; Definir Numero xFilial; Definir Numero xNumeroPedido;  @ Variáveis auxiliares da regra @ Definir Alfa ANumeroDocumento;  Definir Alfa AStatus; Definir Alfa AMensagemErro;  inicio   IntParaAlfa(xNumeroPedido, ANumeroDocumento);   Tracking_Cancelar(xEmpresa, xFilial, ANumeroDocumento, AStatus, AMensagemErro); fim
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/tracking_cancelar.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
