# SimulacaoIMP_CR_CalcularParcial

## Assinatura

```lspt
Funcao SimulacaoIMP_CR_CalcularParcial(Numero pCodEmp, Numero pCodFil, Alfa pNumTit, Alfa pCodTpt, Numero pDatPgt, Alfa pCodTns, Numero pVlrDsc, Numero pVlrMov, Numero end pVlrIns, Numero end pVlrIrf, Numero end pVlrIss, Numero end pVlrOur);
```

## Código
N/A

## Descrição

Esta função tem como objetivo retornar os valores dos impostos calculados na baixa de um título do contas a receber, permitindo inclusive o envio de um valor de movimento diferente do valor em aberto do respectivo título. O cálculo é baseado na data de pagamento (pDatPgt) e na transação de baixa, que deve ser transação de pagamento. A função não baixa o título, apenas simula sua baixa. Isto é necessário porque os cálculos de alguns impostos dependem dos valores já pagos. A baixa do título será simulada de acordo com o valor enviado para a variável pVlrMov, considerando também o desconto passado pelo parâmetro pVlrDsc.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Código da Filial
- **pCodFil** (`Numero`) - Entrada: Código da Filial
- **pNumTit** (`Alfa`) - Entrada: Número do Título a Receber
- **pCodTpt** (`Alfa`) - Entrada: Código do Tipo de Título
- **pDatPgt** (`Numero`) - Entrada: Data da Baixa
- **pCodTns** (`Alfa`) - Entrada: Transação de Baixa
- **pVlrDsc** (`Numero`) - Entrada: Valor de Desconto
- **pVlrMov** (`Numero`) - Entrada: Valor do movimento de baixa
- **pVlrIns** (`Numero end`) - Saída
- **pVlrIrf** (`Numero end`) - Saída
- **pVlrIss** (`Numero end`) - Saída
- **pVlrOur** (`Numero end`) - Saída

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SimulacaoIMP_CR_CalcularParcial();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/simulacaoimp-cr-calcularparcial.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
