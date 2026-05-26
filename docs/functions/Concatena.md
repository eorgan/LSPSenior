# Concatena

## Assinatura

```lspt
funcao Concatena(Alfa Str1, Alfa Str2, Alfa Str3, Alfa End Destino);
```

## Código
35

## Descrição

Esta função concatena até 3 campo/variáveis tipo alfa, formando uma só variável.

## Parâmetros

- **Str1** (`Alfa`) - Entrada: Campo/Variável que será concatenado
- **Str2** (`Alfa`) - Entrada: Campo/Variável que será concatenado
- **Str3** (`Alfa`) - Entrada: Campo/Variável que será concatenado
- **Destino** (`Alfa End`) - Saída: Variável que receberá o resultado da concatenação (retorno)

## Exemplo de Uso

```lspt
Definir Alfa vaResultado;
Definir Alfa vaNome;
Definir Alfa vaApelido;

vaNome = "Pedro Luiz Souza";
vaApelido = "Pedrão";

Concatena(vaNome, " - ", vaApelido, vaResultado);
@ vaResultado será "Pedro Luiz Souza - Pedrão" @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
