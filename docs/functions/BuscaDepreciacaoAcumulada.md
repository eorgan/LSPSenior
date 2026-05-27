# BuscaDepreciacaoAcumulada

## Assinatura

```lspt
Funcao BuscaDepreciacaoAcumulada(Numero pCodEmp,Alfa pCodBem, Numero pDatCal, Alfa pTnsInt, Numero End pDprAcu, Numero End pCotDao, Numero End pCotDag, Numero End pVlrAtu, Numero End pQtdItm);
```

## Código
N/A

## Descrição

Esta função foi criada para facilitar a busca das variáveis de retorno mencionadas aabaixo, podendo ser utilizada para evitar cursores.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Código da empresa do bem que se deseja buscar a depreciação acumulada.
- **pCodBem** (`Alfa`) - Entrada: Código do bem que se deseja buscar a depreciação acumulada.
- **pDatCal** (`Numero`) - Entrada: Data base para busca da depreciação acumulada.
- **pTnsInt** (`Alfa`) - Entrada: Indicativo se a transação do movimento da Data base é integrada ou não. (Este parâmetro serve para identificar se a função deverá retornar a depreciação acumulada de maior competência de cálculo inferior a data base ou se deverá buscar a depreciação acumulada na maior competência de cálculo inferior ou igual à data base.)
- **pDprAcu** (`Numero End`) - Saída: Variável que retorna o valor da depreciação acumulada em moeda corrente.
- **pCotDao** (`Numero End`) - Saída: Variável que retorna o valor da depreciação acumulada em índice oficial.
- **pCotDag** (`Numero End`) - Saída: Variável que retorna o valor da depreciação acumulada em índice gerencial.
- **pVlrAtu** (`Numero End`) - Saída: Variável que retorna o valor atual unitário do bem na competência de cálculo utilizada para buscar a depreciação acumulada.
- **pQtdItm** (`Numero End`) - Saída: Variável que retorna o quantidade de itens do bem referente à competência de cálculo utilizada para buscar a depreciação acumulada.

## Valores de Retorno

- pDprAcu: Variável numérica que retorna o valor da depreciação acumulada em moeda
- corrente.
- pCotDao: Variável numérica que retorna o valor da depreciação acumulada em índice
- oficial.
- pCotDag: Variável numérica que retorna o valor da depreciação acumulada em índice
- gerencial.
- pVlrAtu: Variável numérica que retorna o valor atual unitário do bem na competência de
- cálculo utilizada para buscar a depreciação acumulada.
- pQtdItm: Variável numérica que retorna o quantidade de itens do bem referente à
- competência de cálculo utilizada para buscar a depreciação acumulada.
- <!-- source: https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/buscafilialtitulocp.htm -->

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscaDepreciacaoAcumulada();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
