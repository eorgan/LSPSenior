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

## Valores de Retorno

- Variável alfa que receberá o resultado da conversão.

## Exemplo de Uso

```lspt
Definir Numero vnInteiro;
Definir Alfa vaTexto;

vnInteiro = 789;
IntParaStr(vnInteiro, vaTexto); @ vaTexto será "789" @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/intparastr.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
