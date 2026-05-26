# PegarValorVarNum

## Assinatura

```lspt
Funcao PegarValorVarNum(Alfa aVar, Numero End aNumVal);
```

## Código
621

## Descrição

Retorna o valor de uma variável numérica ou de data identificada por nome.

## Parâmetros

- **aVar** (`Alfa`) - Entrada: String contendo o nome da variável
- **aNumVal** (`Numero End`) - Saída: Variável numérica que receberá o valor

## Exemplo de Uso

```lspt
Definir Numero vNumero;
Definir Data vData;
Definir Numero vValor;

vNumero = 15;
vData = 39647;

PegarValorVarNum("vNumero", vValor); @ vValor = 15 @
PegarValorVarNum("vData", vValor);   @ vValor = 39647 @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
