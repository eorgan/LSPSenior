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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
