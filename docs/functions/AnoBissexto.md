# AnoBissexto

## Assinatura

```lspt
Funcao AnoBissexto(Data aDataIni, Numero end aBissexto);
```

## Código
900

## Descrição

Esta função tem por objetivo retornar a informação se um ano é ou não bissexto tomando como base o ano da data passada.

## Parâmetros

- **aDataIni** (`Data`) - Entrada: Recebe a data base a ser verificada
- **aBissexto** (``) - Saída: Retorna a indicação se o ano é bissexto:

## Exemplo de Uso

```lspt
Definir Data vdData;
Definir Numero vnBissexto;

vdData = 02/07/2018;
AnoBissexto(vdData, vnBissexto);
@ vnBissexto será 0 (não bissexto) @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
