# ArredondaABNT

## Assinatura

```lspt
funcao ArredondaABNT(numero end Valor, numero Decimais);
```

## Código
904

## Descrição

Esta função aplica a regra de arredondamento da ABNT, conforme a precisão informada.

## Parâmetros

- **Valor** (``) - Saída: Variável que será arredondada
- **Decimais** (`numero`) - Entrada: Variável numérica que indica a quantidade de casas decimais do arredondamento

## Exemplo de Uso

```lspt
Definir Numero vnValor;
vnValor = 1577.87;
ArredondaABNT(vnValor, 1);
@ vnValor será 1577.90 @

ArredondaABNT(vnValor, 0);
@ vnValor será 1578.00 @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
