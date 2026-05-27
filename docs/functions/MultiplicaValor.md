# MultiplicaValor

## Assinatura

```lspt
Funcao MultiplicaValor(Alfa Multiplicando, Numero Fator, Alfa End Retorno);
```

## Código
564

## Descrição

Esta função multiplica um número no formato alfanumérico por um fator de multiplicação numérico e retorna o resultado desta multiplicação em uma variável alfanumérica.

## Parâmetros

- **Multiplicando** (`Alfa`) - Entrada: Campo/Variável que contém o valor a ser multiplicado
- **Fator** (`Numero`) - Entrada: Campo/Variável que contém o fator de multiplicação
- **Retorno** (`Alfa End`) - Saída: Campo/Variável que retorna o resultado da multiplicação

## Exemplo de Uso

```lspt
Definir Alfa vaNumOriginal;
Definir Alfa vaNumMultiplicado;
Definir Numero vnFator;

vaNumOriginal = "0000237259400000216555";
vnFator = 5;
MultiplicaValor(vaNumOriginal, vnFator, vaNumMultiplicado);
@ vaNumMultiplicado será "1186297000001082775" @
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
