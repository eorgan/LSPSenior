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

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
