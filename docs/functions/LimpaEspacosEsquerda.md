# LimpaEspacosEsquerda

## Assinatura

```lspt
Funcao LimpaEspacosEsquerda(Alfa end pString);
```

## Código
540

## Descrição

Limpa os espaços em branco à esquerda de uma variável alfanumérica.

## Parâmetros

- **pString** (`Alfa end`) - Saída: Variável que recebe o campo a ser limpo e retorna o campo sem os espaços da esquerda.

## Valores de Retorno

- pString: Variável Alfanumérica que retorna o campo sem os espaços da esquerda.

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
vaTexto = "  texto com espaços  ";
LimpaEspacosEsquerda(vaTexto);
@ vaTexto será "texto com espaços  " @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/limpaespacoesquerda.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
