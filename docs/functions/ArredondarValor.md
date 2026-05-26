# ArredondarValor

## Assinatura

```lspt
Funcao ArredondarValor(Numero End ValorVariavel,Numero Precisao);
```

## Código
55

## Descrição

Esta função arredonda determinado valor, conforme a precisão informada.

## Parâmetros

- **ValorVariavel** (`Numero End`) - Saída: Campo ou variável que deseja-se arredondar
- **Precisao** (`Numero`) - Entrada: Quantidade de casas decimais para precisão do arredondamento. Se for informado 0 (zero), faz o arredondamento na parte inteira do resultado

## Exemplo de Uso

```lspt
Definir Numero vnVlrNum;
vnVlrNum = 1577.87;
ArredondarValor(vnVlrNum, 1); @ Retorno será 1577.90 @
ArredondarValor(vnVlrNum, 0); @ Retorno será 1578.00 @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
