# LeMemListCcc

## Assinatura

```lspt
Funcao LeMemListCcc(Alfa AbrCcc, Numero End VlrDig,Numero End PerAli,Numero End VlrMon, Numero End Ret);
```

## Código
516

## Descrição

Esta função busca os valores referentes a um componente de Cálculo, passando como identificador do componente a abrevitura deste. Para tanto, o componente de cáclculo deve estar sendo utilizado na tela de Cálculo Simplificado do Preço de Venda. Esta função somente poderá ser utilizada em regras identificadas pelo módulo de custos : 'FPR' e pelo identificador '621PVSIM01', e estas, por sua vez, somente são utilizadas no Cálculo Simplificado do Preço de venda.

## Parâmetros

- **AbrCcc** (`Alfa`) - Entrada: Variável que deve conter a Abreviatura do Componente de Cálculo que se quer ler.
- **VlrDig** (`Numero End`) - Saída: Variável numérica que retorna o Valor digitado para o componente de cálculo lido.
- **PerAli** (`Numero End`) - Saída: Variável numérica que retorna o Percentual de Alíquota digitado para o componente de cálculo lido.
- **VlrMon** (`Numero End`) - Saída: - Variável numérica que retorna o Valor Montante para o componente de cálculo lido(Se já foi calculado anteriormente pela mesma regra).
- **Ret** (`Numero End`) - Saída: Variável numérica que retorna se a leitura foi feita sem problemas: Se retornar 1 foi feita sem problemas, se retornar 0, a abreviatura do CCC que foi passada como parâmetro não existe na Grid da tela do Cálculo simplificado.

## Valores de Retorno

- - VlrDig: Variável numérica que retorna o Valor digitado para o componente de cálculo lido.
- - PerAli: Variável numérica que retorna o Percentual de Alíquota digitado para o componente de cálculo lido.
- - VlrMon: Variável numérica que retorna o Valor Montante para o componente de cálculo lido(Se já foi calculado anteriormente pela mesma regra).
- - Ret: Variável numérica que retorna se a leitura foi feita sem problemas: Se retornar 1 foi feita sem problemas, se retornar 0, a abreviatura do CCC que foi passada como parâmetro não existe na Grid da tela do Cálculo simplificado.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LeMemListCcc();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/lememlistccc.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
