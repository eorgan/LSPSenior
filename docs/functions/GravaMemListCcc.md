# GravaMemListCcc

## Assinatura

```lspt
Funcao GravaMemListCcc(Alfa AbrCcc, Numero End VlrDig,Numero End PerAli,Numero End VlrMon, Numero End Ret);
```

## Código
517

## Descrição

Esta função grava(altera) os valores dos do componente de Cálculo do qual a abreviatura foi passada como parâmetro. Para tanto, o componente de cálculo deve estar sendo utilizado na tela de Cálculo Simplificado do Preço de Venda. Esta função somente poderá ser utilizada em regras identificadas pelo módulo de custos : 'FPR' e pelo identificador '621PVSIM01', e estas, por sua vez, somente são utilizadas no Cálculo Simplificado do Preço de venda.

## Parâmetros

- **AbrCcc** (`Alfa`) - Entrada: Variável que deve conter a Abreviatura do Componente de Cálculo que se quer gravar.
- **VlrDig** (`Numero End`) - Saída: Variável que está passando o Valor que se quer gravar no campo VlrDig do componente de cálculo que se quer gravar.
- **PerAli** (`Numero End`) - Saída: Variável que está passando o Percentual de Alíquotaque se quer gravar no campo PerAli do componente de cálculo que se quer gravar.
- **VlrMon** (`Numero End`) - Saída: Variável que está passando o Valor Montante Calculado para o componente de cálculo que se quer gravar.
- **Ret** (`Numero End`) - Saída: Variável que retorna se a gravação foi feita sem problemas: Se retornar 1 foi feita sem problemas, se retornar 0, a abreviatura do CCC que foi passada como parâmetro não existe na Grid da tela do Cálculo simplificado para ser alterada.

## Valores de Retorno

- - VlrDig: Variável numérica que está passando o Valor que se quer gravar no campo VlrDig do componente de cálculo que se quer gravar.
- - PerAli: Variável numérica que está passando o Percentual de Alíquotaque se quer gravar no campo PerAli do componente de cálculo que se quer gravar.
- - VlrMon: Variável numérica que está passando o Valor Montante Calculado para o componente de cálculo que se quer gravar.
- - Ret: Variável numérica que retorna se a gravação foi feita sem problemas: Se retornar 1 foi feita sem problemas, se retornar 0, a abreviatura do CCC que foi passada como parâmetro não existe na Grid da tela do Cálculo simplificado para ser alterada.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
GravaMemListCcc();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
