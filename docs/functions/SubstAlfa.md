# SubstAlfa

## Assinatura

```lspt
Funcao SubstAlfa(Alfa aOld, Alfa aNew, Alfa End aDes);
```

## Código
617

## Descrição

Substituem trechos específicos dentro de um texto por outro texto.

## Parâmetros

- **aOld** (`Alfa`) - Entrada: Texto a ser localizado e substituído
- **aNew** (`Alfa`) - Entrada: Texto que irá substituir
- **aDes** (`Alfa End`) - Saída: Variável que contém o texto original e receberá o resultado

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
Definir Alfa vaTextoLimpo;

vaTexto = "João--Silva--Santos";
vaTextoLimpo = vaTexto;

@ Substitui todos os traços duplos por espaço simples @
SubstAlfa("--", " ", vaTextoLimpo);
@ vaTextoLimpo será "João Silva Santos" @

@ Exemplo com SubstAlfaUmaVez @
vaTexto = "teste teste teste";
SubstAlfaUmaVez("teste", "TESTE", vaTexto);
@ vaTexto será "TESTE teste teste" (apenas o primeiro) @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
