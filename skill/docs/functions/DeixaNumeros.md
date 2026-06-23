# DeixaNumeros

## Assinatura

```lspt
funcao DeixaNumeros(Alfa End pNumAlf);
```

## Código
126

## Descrição

Remove todos os caracteres não numéricos de uma string, mantendo apenas os dígitos.

## Parâmetros

- **pNumAlf** (`Alfa End`) - Saída: Variável alfa que será modificada, mantendo apenas números

## Valores de Retorno

- Será na mesma variável;

## Exemplo de Uso

```lspt
Definir Alfa vaCEP;
Definir Alfa vaTelefone;

vaCEP = "86710-180";
DeixaNumeros(vaCEP);
@ vaCEP será "86710180" @

vaTelefone = "(43) 3234-5678";
DeixaNumeros(vaTelefone);
@ vaTelefone será "4332345678" @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/deixanumeros.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
