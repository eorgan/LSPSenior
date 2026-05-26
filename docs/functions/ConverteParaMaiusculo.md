# ConverteParaMaiusculo

## Assinatura

```lspt
Funcao ConverteParaMaiusculo (Alfa end pOrigem);
```

## Código
58

## Descrição

Convertem o conteúdo de uma variável para maiúsculo ou minúsculo.

## Parâmetros

- **pOrigem** (``) - Saída

## Exemplo de Uso

```lspt
Definir Alfa vaNome;
Definir Alfa vaEmail;

vaNome = "joão SILVA santos";
vaEmail = "USUARIO@EMPRESA.COM.BR";

@ Padroniza email (tudo minúsculo) @
ConverteParaMinusculo(vaEmail);
@ vaEmail será "usuario@empresa.com.br" @

@ Para nome próprio @
ConverteParaMaiusculo(vaNome); @ Vira "JOÃO SILVA SANTOS" @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
