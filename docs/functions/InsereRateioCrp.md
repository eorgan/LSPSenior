# InsereRateioCrp

## Assinatura

```lspt
funcao InsereRateioCrp(alfa pRecPag, numero pCodEmp,numero pCodFil, alfa pNumTit,alfa pCodTpt, numero pCodFor,numero pSeqMov, alfa pCodCcu,numero pPerRat, numero pVlrRat);
```

## Código
511

## Descrição

Esta função insere o rateio de títulos no contas a receber ou no contas a pagar, de acordo com os parâmetros informados.

## Parâmetros

- **pRecPag** (`alfa`) - Entrada: Variável que indica se é contas a receber("R") ou contas a pagar("P").
- **pCodEmp** (`numero`) - Entrada: Variável/Campo que recebe o código da empresa do Contas a Receber/Pagar.
- **pCodFil** (`numero`) - Entrada: Variável/Campo que recebe o código da filial do Contas a Receber/Pagar.
- **pNumTit** (`alfa`) - Entrada: Variável/Campo que recebe o número do título do Contas a Receber/Pagar.
- **pCodTpt** (`alfa`) - Entrada: Variável/Campo que recebe o código da tipo do título do Contas a Receber/Pagar.
- **pCodFor** (`numero`) - Entrada: Variável/Campo que recebe o código do fornecedor do Contas a Receber/Pagar.
- **pSeqMov** (`numero`) - Entrada: Variável que recebe a sequência da movimentação do Contas a Receber/Pagar.
- **pCodCcu** (`alfa`) - Entrada: Variável/Campo que recebe o código do centro de custo do Contas a Receber/Pagar.
- **pPerRat** (`numero`) - Entrada: Variável/Campo que recebe o percentual de rateio do Contas a Receber/Pagar.
- **pVlrRat** (`numero`) - Entrada: Variável/Campo que recebe o valor do rateio do Contas a Receber/Pagar.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
InsereRateioCrp();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/insererateiocrp.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
