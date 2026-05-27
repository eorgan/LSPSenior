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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
