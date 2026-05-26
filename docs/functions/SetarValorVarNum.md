# SetarValorVarNum

## Assinatura

```lspt
Funcao SetarValorVarNum(Alfa aVar, Numero aNumVal);
```

## Código
623

## Descrição

Define o valor de uma variável numérica ou de data identificada por nome.

## Parâmetros

- **aVar** (`Alfa`) - Entrada: String contendo o nome da variável
- **aNumVal** (`Numero`) - Entrada: Valor numérico a ser atribuído à variável

## Exemplo de Uso

```lspt
Definir Numero vNumero;
Definir Data vData;

SetarValorVarNum("vNumero", 100);   @ vNumero = 100 @
SetarValorVarNum("vData", 39685);   @ vData = 39685 @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
