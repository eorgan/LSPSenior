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

- **pOrigem** (`Alfa end`) - Saída: Variável que será convertido para maiúsculo.

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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
