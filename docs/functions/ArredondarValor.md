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

## Valores de Retorno

- ValorVariavel: Campo ou variável numérica que receberá o valor arredondado.

## Exemplo de Uso

```lspt
Definir Numero vnVlrNum;
vnVlrNum = 1577.87;
ArredondarValor(vnVlrNum, 1); @ Retorno será 1577.90 @
ArredondarValor(vnVlrNum, 0); @ Retorno será 1578.00 @
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
