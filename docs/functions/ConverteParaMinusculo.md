# ConverteParaMinusculo

## Assinatura

```lspt
Funcao ConverteParaMinusculo(Alfa End aCadCar);
```

## Código
649

## Descrição

Convertem o conteúdo de uma variável para maiúsculo ou minúsculo.

## Parâmetros

- **aCadCar** (`Alfa End`) - Saída

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
