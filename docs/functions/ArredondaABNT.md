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

- **Valor** (`numero end`) - Saída: Variável que será arredondada
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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
