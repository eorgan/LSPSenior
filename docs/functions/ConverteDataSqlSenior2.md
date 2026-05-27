# ConverteDataSqlSenior2

## Assinatura

```lspt
Funcao ConverteDataSqlSenior2(Numero aDatNum, Alfa End aDatSql);
```

## Código
674

## Descrição

Converter datas para o formato SQL Senior 2.

## Parâmetros

- **aDatNum** (`Numero`) - Entrada: Data a ser convertida
- **aDatSql** (`Alfa End`) - Saída: Data em formato SQL Senior 2 (retorno)

## Valores de Retorno

- aDatSql: Data em formato SQL Senior 2.

## Exemplo de Uso

```lspt
Definir Alfa vaSqlAux;
ConverteDataSqlSenior2(DatSis, vaSqlAux);
vaSqlAux = "E000LPA.DATINI = " + vaSqlAux;
InsClauSQLWhere("Detalhe_000LPA", vaSqlAux);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/convertedatasqlsenior2.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
