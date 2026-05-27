# SimulacaoIMP_Calcular

## Assinatura

```lspt
Funcao Função SimulacaoIMP_Calcular(Numero pCodFil, Alfa pNumTit , Alfa pCodTpt, Numero pCodFor , Numero pDatPgt, Alfa pCodTns, Numero pVlrDsc, Numero end pVlrIns, Numero end pVlrIrf, Numero end pVlrIss, Numero end pVlrOur);
```

## Código
N/A

## Descrição

Esta função tem como objetivo retornar o valor de cada imposto calculado para o título (C.PAGAR) passado por parâmetro e não considera os títulos já liquidados na mesma competência para o mesmo fornecedor. O cálculo é baseado na data de pagamento (pDatPgt) e na transação de baixa , que deve sempre ser transação de pagamento. A função não baixa o título , apenas simula sua baixa , isto é necessário porque o cálculo de alguns impostos dependem dos valores já pagos. Sempre será simulado a baixa do título em sua totalidade ou de seu valor ainda em aberto, considerando o desconto passado pelo parâmetro pVlrDsc.

## Parâmetros

- **pCodFil** (`Numero`) - Entrada: Filial do Título.
- **pNumTit** (`Alfa`) - Entrada: Número do Título.
- **pCodTpt** (`Alfa`) - Entrada: Código do tipo de Título.
- **pCodFor** (`Numero`) - Entrada: Código do fornecedor do Título.
- **pDatPgt** (`Numero`) - Entrada: Data da Baixa.
- **pCodTns** (`Alfa`) - Entrada: Transação de Baixa.
- **pVlrDsc** (`Numero`) - Entrada: Valor de Desconto.
- **pVlrIns** (`Numero end`) - Saída: Retorno do valor de INSS calculado.
- **pVlrIrf** (`Numero end`) - Saída: Retorno do valor de IRRF calculado.
- **pVlrIss** (`Numero end`) - Saída: Retorno do valor de ISS calculado.
- **pVlrOur** (`Numero end`) - Saída: Retorno do valor de Outras Retenções (PIS/Cofins/CSLL/Outras Retenções).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SimulacaoIMP_Calcular();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
