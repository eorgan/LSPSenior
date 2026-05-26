# PegarTipoVar

## Assinatura

```lspt
Funcao PegarTipoVar(Alfa aVar, Numero End aTipo);
```

## Código
619

## Descrição

Retorna o tipo de uma variável qualquer, passada como string.

## Parâmetros

- **aVar** (`Alfa`) - Entrada: String contendo o nome da variável a ser verificada
- **aTipo** (`Numero End`) - Saída: Variável numérica que receberá o código do tipo (retorno)

## Exemplo de Uso

```lspt
Definir Numero vNum;
Definir Data vDat;
Definir Alfa vAlf;
Definir Cursor vCur;
Definir Numero vTipo;

PegarTipoVar("vNum", vTipo); @ vTipo = 0 @
PegarTipoVar("vDat", vTipo); @ vTipo = 1 @
PegarTipoVar("vAlf", vTipo); @ vTipo = 2 @
PegarTipoVar("vCur", vTipo); @ vTipo = 9 @
PegarTipoVar("vXXX", vTipo); @ vTipo = -1 @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
