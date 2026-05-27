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
- **aBissexto** (`Numero end`) - Saída: Retorna a indicação se o ano é bissexto:

## Exemplo de Uso

```lspt
Definir Data vdData;
Definir Numero vnBissexto;

vdData = 02/07/2018;
AnoBissexto(vdData, vnBissexto);
@ vnBissexto será 0 (não bissexto) @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/anobissexto.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
