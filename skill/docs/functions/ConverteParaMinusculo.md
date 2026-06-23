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

- **aCadCar** (`Alfa End`) - Saída: Variável que será convertido para minúsculo.

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

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/converteparaminusculo.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
