# IntParaStr

## Assinatura

```lspt
Funcao IntParaStr(Numero Origem, Alfa End Retorno);
```

## Código
16

## Descrição

Converte um valor inteiro para o tipo String (Alfanumérico). Esta função é equivalente a `IntParaAlfa` e é mantida para compatibilidade.

## Parâmetros

- **Origem** (`Numero`) - Entrada: Valor inteiro a ser convertido
- **Retorno** (`Alfa End`) - Saída: Variável alfanumérica que receberá o resultado da conversão

## Exemplo de Uso

```lspt
Definir Numero vnInteiro;
Definir Alfa vaTexto;

vnInteiro = 789;
IntParaStr(vnInteiro, vaTexto); @ vaTexto será "789" @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
