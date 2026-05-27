# AlteraFormaRateioTransacao

## Assinatura

```lspt
Funcao AlteraFormaRateioTransacao(Numero pCodEmp, Alfa pCodTns, Numero pForRat);
```

## Código
N/A

## Descrição

Esta função tem como finalidade alterar a forma de rateio da tabela de transações. Financeiro - Inclusa nova função para alterar a forma de rateio da transação. Desta forma, para efetuar a importação de movimentos, deverá ser desenvolvido uma regra para que através desta função, a forma de rateio seja alterada. Abaixo, segue documentação da nova função.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável que recebe o código da empresa.
- **pCodTns** (`Alfa`) - Entrada: Variável que recebe o código da transação.
- **pForRat** (`Numero`) - Entrada: Variável que recebe a nova forma de rateio, deve ser do tipo 1,2 ou 3.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AlteraFormaRateioTransacao();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/alteraformarateiotransacao.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
