# BuscaFiltroRateioFin

## Assinatura

```lspt
Funcao BuscaFiltroRateioFin(Alfa pTipoFiltro,Numero pContaContabil,Numero pContaFinanceira,Numero pProjeto,Alfa pCentroCusto,Alfa End pSqlAux);
```

## Código
576

## Descrição

Esta função tem por objetivo filtrar as contas ativas que o usuário tem acesso, e deve ser utilizada em regras e/ou relatórios.

## Parâmetros

- **pTipoFiltro** (`Alfa`) - Entrada: Variável alfanumérica que recebe um dos 5 tipos de filtros que podem ser passados. Os tipos de filtro são: "PROJETO", "FASE", "FINANCEIRA", "CONTABIL" e "CCUSTOS".
- **pContaContabil** (`Numero`) - Entrada: Variável numérica que recebe o código da conta contábil a ser filtrada.
- **pContaFinanceira** (`Numero`) - Entrada: Variável numérica que recebe o código da conta financeira a ser filtrada.
- **pProjeto** (`Numero`) - Entrada: Variável numérica que recebe o código do projeto a ser filtrado.
- **pCentroCusto** (`Alfa`) - Entrada: Variável alfanumérica que recebe o código do centro de custos a ser filtrado (Por enquanto não está sendo usado).
- **pSqlAux** (`Alfa End`) - Saída: Variável alfanumérica que retorna o SQL a ser concatenado para a filtragem dos registros conforme quiser.

## Valores de Retorno

- pSqlAux:
- variável alfanumérica que
- retorna o SQL a ser concatenado para a
- filtragem dos registros conforme quiser.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscaFiltroRateioFin();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/buscafiltrorateiofin.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
