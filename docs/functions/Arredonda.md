# Arredonda

## Assinatura

```lspt
funcao Arredonda(numero end Valor, numero Decimais);
```

## Código
503

## Descrição

Esta função arredonda um valor tipo acerto, conforme a precisão informada.

## Parâmetros

- **Valor** (``) - Saída: Qualquer valor que se deseja arredondar
- **Decimais** (`numero`) - Entrada

## Exemplo de Uso

```lspt
Definir Numero vnValor;
vnValor = 1475.12845;
Arredonda Valor Tipo Acerto(vnValor, 1); @ Retorna 1475.13 @
Arredonda Valor Tipo Acerto(vnValor, 2); @ Retorna 1475.12 @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
