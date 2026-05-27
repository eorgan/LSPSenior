# SimulacaoIMP_CR_Calcular

## Assinatura

```lspt
Funcao SimulacaoIMP_CR_Calcular(Numero pCodFil, Alfa pNumTit, Alfa pCodTpt, Numero pDatPgt, Alfa pCodTns, Numero pVlrDsc, Numero end pVlrPit, Numero end pVlrCrt, Numero end pVlrCsl, Numero end pVlrIrf, Numero end VlrOur);
```

## Código
N/A

## Descrição

Esta função tem como objetivo retornar os valores dos impostos calculados na baixa de um título do contas a receber. O cálculo é baseado na data de pagamento (pDatPgt) e na transação de baixa, que deve sempre ser a transação de pagamento. A função não baixa o título, apenas simula sua baixa. Isto é necessário porque os cálculos de alguns impostos dependem dos valores já pagos. E será simulada a baixa do título em sua totalidade ou de seu valor ainda em aberto, considerando o desconto passado pelo parâmetro pVlrDsc.

## Parâmetros

- **pCodFil** (`Numero`) - Entrada: Código da Filial
- **pNumTit** (`Alfa`) - Entrada: Número do Título a Receber
- **pCodTpt** (`Alfa`) - Entrada: Código do Tipo de Título
- **pDatPgt** (`Numero`) - Entrada: Data da Baixa
- **pCodTns** (`Alfa`) - Entrada: Transação de Baixa
- **pVlrDsc** (`Numero`) - Entrada: Valor de Desconto
- **pVlrPit** (`Numero end`) - Saída
- **pVlrCrt** (`Numero end`) - Saída
- **pVlrCsl** (`Numero end`) - Saída
- **pVlrIrf** (`Numero end`) - Saída
- **VlrOur** (`Numero end`) - Saída

## Exemplo de Uso

```lspt
SimulacaoIMP_CR_Iniciar();
SimulacaoIMP_CR_Calcular(1,
"120219-B"
,
"DM"
, 43145,
"90350"
, 0, Retorno_VlrPit, Retorno_VlrCrt, Retorno_VlrCsl, Retorno_VlrIrf, Retorno_VlrOur);
nVlrPit = Retorno_VlrPit;
nVlrCrt = Retorno_VlrCrt;
nVlrCsl = Retorno_VlrCsl;
nVlrIrf = Retorno_VlrIrf;
nVlrOur = Retorno_VlrOur;
SimulacaoIMP_CR_Finalizar();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/simulacaoimp_cr_calcular.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
