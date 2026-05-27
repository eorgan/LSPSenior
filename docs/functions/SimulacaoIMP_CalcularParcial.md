# SimulacaoIMP_CalcularParcial

## Assinatura

```lspt
Funcao SimulacaoIMP_CalcularParcial(Numero pCodFil, Alfa pNumTit, Alfa pCodTpt, Numero pCodFor, Numero pDatPgt, Alfa pCodTns, Numero pVlrDsc, Numero pVlrMov, ' + 'Numero end pVlrIns, Numero end pVlrIrf, Numero end pVlrIss, Numero end pVlrOur);
```

## Código
N/A

## Descrição

Esta função tem como objetivo retornar o valor de cada imposto calculado para o título (contas a pagar) passado por parâmetro, porém, permitindo enviar um valor de movimento diferente do valor em aberto do respectivo título. Ela permite o envio de um parâmetro relacionado ao valor do movimento de baixa que se deseja simular para cálculo dos impostos. O cálculo é baseado na data de pagamento (pDatPgt) e na transação de baixa, que deve ser transação de pagamento. A função não baixa o título, apenas simula sua baixa. Isso porque o cálculo de alguns impostos depende dos valores já pagos. A baixa do título será simulada de acordo com o valor enviado para a variável pVlrMov, considerando também o desconto passado pelo parâmetro pVlrDsc.

## Parâmetros

- **pCodFil** (`Numero`) - Entrada: Filial do Título.
- **pNumTit** (`Alfa`) - Entrada: Número do Título.
- **pCodTpt** (`Alfa`) - Entrada: Código do tipo de Título.
- **pCodFor** (`Numero`) - Entrada: Código do fornecedor do Título.
- **pDatPgt** (`Numero`) - Entrada: Data da Baixa.
- **pCodTns** (`Alfa`) - Entrada: Transação de Baixa.
- **pVlrDsc** (`Numero`) - Entrada: Valor de Desconto.
- **pVlrMov** (`Numero`) - Entrada: Valor do movimento de baixa
- **pVlrIns** (`' + 'Numero end`) - Saída
- **pVlrIrf** (`Numero end`) - Saída
- **pVlrIss** (`Numero end`) - Saída
- **pVlrOur** (`Numero end`) - Saída

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SimulacaoIMP_CalcularParcial();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
