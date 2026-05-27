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
- **StrImp** (`Alfa end`) - Saída: A primeira parte da string procurada, até o primeiro caracter que indica nova linha (retorno)
- **StrResto** (`Alfa end`) - Saída: O restante da string, depois do primeiro caracter que indica nova linha (retorno)

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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
