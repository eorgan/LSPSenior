# ExtensoMes

## Assinatura

```lspt
Funcao ExtensoMes(Numero DatMon,Alfa end ExtMes);
```

## Código
37

## Descrição

Esta função monta o extenso do mês de uma determinada data.

## Parâmetros

- **DatMon** (`Numero`) - Entrada: Campo/Variável do qual se deseja obter o extenso do mês
- **ExtMes** (``) - Saída: Variável tipo Alfa que receberá o extenso do mês

## Exemplo de Uso

```lspt
Definir Alfa vaMesExt;
Definir Data vdData;

DataHoje(vdData);
ExtensoMes(vdData, vaMesExt);
@ Se a data fosse 31/12/1900, vaMesExt seria "Dezembro" @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
