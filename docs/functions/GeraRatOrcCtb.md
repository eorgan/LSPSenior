# GeraRatOrcCtb

## Assinatura

```lspt
Funcao GeraRatOrcCtb(Numero pCodEmp, Numero pCodFil, Numero pMesAno, Numero pCtaRed, Alfa pCodCcu, Numero pVlrRat, Numero pPerRat, Numero pCtaFin);
```

## Código
608

## Descrição

Esta função grava os centros de custos que foram armazenados na lista interna pela função GeraRatOrcCtb, consistindo se os centros de custos aceitam lançamentos e se a soma dos rateios é igual ao valor do orçamento.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável que recebe o código da empresa.
- **pCodFil** (`Numero`) - Entrada: Variável que recebe o código da filial.
- **pMesAno** (`Numero`) - Entrada: Variável que recebe a competência do orçamento a que o rateio pertence.
- **pCtaRed** (`Numero`) - Entrada: Variável que recebe o código da conta reduzida a que o rateio pertence.
- **pCodCcu** (`Alfa`) - Entrada: Variável que recebe o centro de custo do rateio.
- **pVlrRat** (`Numero`) - Entrada: Variável que recebe o valor relativo ao centro de custo.
- **pPerRat** (`Numero`) - Entrada: Variável que recebe o percentual de rateio relativo ao centro de custo.
- **pCtaFin** (`Numero`) - Entrada: Variável que recebe o código da conta financeira.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
GeraRatOrcCtb();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
