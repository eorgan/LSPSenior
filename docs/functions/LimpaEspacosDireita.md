# LimpaEspacosDireita

## Assinatura

```lspt
Funcao LimpaEspacosDireita(Alfa end pString);
```

## Código
539

## Descrição

Limpa os espaços em branco à direita de uma variável alfanumérica.

## Parâmetros

- **pString** (`Alfa end`) - Saída: Variável que recebe o campo a ser limpo.

## Valores de Retorno

- pString: Variável Alfanumérica que retorna o campo sem os espaços da dieita;

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
vaTexto = "  texto com espaços  ";
LimpaEspacosDireita(vaTexto);
@ vaTexto será "  texto com espaços" @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/limpaespacodireita.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
