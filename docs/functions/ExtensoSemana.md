# ExtensoSemana

## Assinatura

```lspt
Funcao ExtensoSemana(Numero DatMon,Alfa end ExtSem);
```

## Código
38

## Descrição

Esta função monta o extenso do dia da semana de uma determinada data.

## Parâmetros

- **DatMon** (`Numero`) - Entrada: Campo/Variável do qual se deseja obter o extenso da semana
- **ExtSem** (``) - Saída: Variável que receberá o extenso da Semana

## Exemplo de Uso

```lspt
Definir Alfa vaSemExt;
Definir Data vdData;

DataHoje(vdData);
ExtensoSemana(vdData, vaSemExt);
@ Se a data fosse 31/12/1900, vaSemExt seria "Sexta-Feira" @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
