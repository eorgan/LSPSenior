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

- **pString** (``) - Saída

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
vaTexto = "  texto com espaços  ";
LimpaEspacosDireita(vaTexto);
@ vaTexto será "  texto com espaços" @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
