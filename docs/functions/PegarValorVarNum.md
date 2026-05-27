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

## Valores de Retorno

- aNumVal: Variável numérica que receberá o valor da variável.

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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
