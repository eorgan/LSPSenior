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

## Valores de Retorno

- Destino: Variável tipo alfa que receberá o resultado da concatenação.

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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
