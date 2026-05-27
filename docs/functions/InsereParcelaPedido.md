# InsereParcelaPedido

## Assinatura

```lspt
funcao InsereParcelaPedido(numero pCodEmp, numero pCodFil, numero pNumPed,Alfa pCodCrp, Alfa pCodFcr, numero pDiaPar,Alfa pVctPar, numero pPerPar, numero pVlrPar,numero pDscPar, Alfa pObsPar);
```

## Código
514

## Descrição

Esta função tem como objetivo inserir a parcela de um pedido.

## Parâmetros

- **pCodEmp** (`numero`) - Entrada: Variável que recebe o Código da empresa.
- **pCodFil** (`numero`) - Entrada: Variável que recebe o Código da filial.
- **pNumPed** (`numero`) - Entrada: Variável que recebe o Número do pedido.
- **pCodCrp** (`Alfa`) - Entrada: Variável que recebe o Código do grupo a receber.
- **pCodFcr** (`Alfa`) - Entrada: Variável que recebe o Código da moeda ou índice como fator de correção (financeiro)
- **pDiaPar** (`numero`) - Entrada: Variável que recebe a Qtde. de dias para a parcela.
- **pVctPar** (`Alfa`) - Entrada: Variável que recebe o Data de vencimento da parcela.
- **pPerPar** (`numero`) - Entrada: Variável que recebe o Percentual do valor da parcela.
- **pVlrPar** (`numero`) - Entrada: Variável que recebe o Valor da parcela.
- **pDscPar** (`numero`) - Entrada: Variável que recebe o Percentual de desconto previsto para a parcela.
- **pObsPar** (`Alfa`) - Entrada: Variável que recebe o Texto da observação.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
InsereParcelaPedido();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/insereparcelapedido.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
