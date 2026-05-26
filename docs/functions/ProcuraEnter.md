# ProcuraEnter

## Assinatura

```lspt
Funcao ProcuraEnter (Alfa StrProcura, Alfa end StrImp, Alfa end StrResto);
```

## Código
139

## Descrição

Esta função procura um caractere que indica "enter" ou nova linha (#13 ou #10) em uma string e retorna a string antes do primeiro enter, e o restante da string original, em variáveis separadas.

## Parâmetros

- **StrProcura** (`Alfa`) - Entrada: String na qual será procurada o enter ou nova linha (#13 ou #10)
- **StrImp** (``) - Saída: A primeira parte da string procurada, até o primeiro caracter que indica nova linha (retorno)
- **StrResto** (``) - Saída: O restante da string, depois do primeiro caracter que indica nova linha (retorno)

## Exemplo de Uso

```lspt
Definir Alfa vaStrProcura;
Definir Alfa vaStrImp;
Definir Alfa vaStrResto;

vaStrProcura = "Primeira linha" + vaEnter + "Segunda linha";
ProcuraEnter(vaStrProcura, vaStrImp, vaStrResto);
@ vaStrImp será "Primeira linha" @
@ vaStrResto será "Segunda linha" @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
