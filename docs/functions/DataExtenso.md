# DataExtenso

## Assinatura

```lspt
Funcao DataExtenso(Numero pData,Alfa end pDatExt);
```

## Código
41

## Descrição

Esta função gera o extenso de determinada data.

## Parâmetros

- **pData** (`Numero`) - Entrada: Campo/Variável a partir do qual se deseja gerar o extenso
- **pDatExt** (``) - Saída: Variável que retornará o extenso da data

## Exemplo de Uso

```lspt
Definir Data vdData;
Definir Alfa vaExtenso;

vdData = E210MVP.DatMov;
DataExtenso(vdData, vaExtenso);
@ vaExtenso vai conter a data por extenso @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
