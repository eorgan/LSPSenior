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

- **Valor** (`numero end`) - Saída: Qualquer valor que se deseja arredondar
- **Decimais** (`numero`) - Entrada

## Exemplo de Uso

```lspt
Definir Numero vnValor;
vnValor = 1475.12845;
Arredonda Valor Tipo Acerto(vnValor, 1); @ Retorna 1475.13 @
Arredonda Valor Tipo Acerto(vnValor, 2); @ Retorna 1475.12 @
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
