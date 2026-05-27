# ExtensoMes

## Assinatura

```lspt
Funcao ExtensoMes(Numero DatMon,Alfa end ExtMes);
```

## Código
37

## Descrição

Esta função monta o extenso do mês de uma determinada data.

## Parâmetros

- **DatMon** (`Numero`) - Entrada: Campo/Variável do qual se deseja obter o extenso do mês
- **ExtMes** (`Alfa end`) - Saída: Variável tipo Alfa que receberá o extenso do mês

## Valores de Retorno

- ExtMes: Variável tipo Alfa que receberá o extenso do mês.

## Exemplo de Uso

```lspt
Definir Alfa vaMesExt;
Definir Data vdData;

DataHoje(vdData);
ExtensoMes(vdData, vaMesExt);
@ Se a data fosse 31/12/1900, vaMesExt seria "Dezembro" @
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
