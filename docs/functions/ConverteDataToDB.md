# ConverteDataToDB

## Assinatura

```lspt
Funcao ConverteDataToDB(Numero DatNum,Alfa End DatAlf);
```

## Código
3

## Descrição

Converter uma data qualquer, para o formato de data do banco de dados.

## Parâmetros

- **DatNum** (`Numero`) - Entrada: É o campo de tabela ou variável que se deseja converter
- **DatAlf** (`Alfa End`) - Saída: É uma variável tipo Alfa, que conterá o retorno da conversão

## Exemplo de Uso

```lspt
Definir Alfa vaDataStr;
Definir Data vdData;

vdData = 31/12/1900;
ConverteDataToDB(vdData, vaDataStr);
@ vaDataStr = "to_date('31/12/1900','DD/MM/YYYY')" ou formato do banco usado @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
