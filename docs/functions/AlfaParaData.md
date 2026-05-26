# AlfaParaData

## Assinatura

```lspt
Funcao AlfaParaData(Alfa pDataAlfa, Numero End pDataNum);
```

## Código
613

## Descrição

Converte um valor alfanumérico para o tipo Data.

## Parâmetros

- **pDataAlfa** (`Alfa`) - Entrada
- **pDataNum** (`Numero End`) - Saída

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
Definir Data vdData;

vaTexto = "01/01/2020";
AlfaParaData(vaTexto, vdData); @ vdData será 01/01/2020 @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
