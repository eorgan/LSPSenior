# DataExtenso

## Assinatura

```lspt
Funcao DataExtenso(Numero pData,Alfa end pDatExt);
```

## Código
41

## Descrição

Esta função gera o extenso de determinada data.

## Parâmetros

- **pData** (`Numero`) - Entrada: Campo/Variável a partir do qual se deseja gerar o extenso
- **pDatExt** (`Alfa end`) - Saída: Variável que retornará o extenso da data

## Exemplo de Uso

```lspt
Definir Data vdData;
Definir Alfa vaExtenso;

vdData = E210MVP.DatMov;
DataExtenso(vdData, vaExtenso);
@ vaExtenso vai conter a data por extenso @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/dataextenso.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
