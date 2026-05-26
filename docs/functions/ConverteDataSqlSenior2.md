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

## Exemplo de Uso

```lspt
Definir Alfa vaSqlAux;
ConverteDataSqlSenior2(DatSis, vaSqlAux);
vaSqlAux = "E000LPA.DATINI = " + vaSqlAux;
InsClauSQLWhere("Detalhe_000LPA", vaSqlAux);
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
