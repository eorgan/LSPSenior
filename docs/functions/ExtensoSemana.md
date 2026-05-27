# ExtensoSemana

## Assinatura

```lspt
Funcao ExtensoSemana(Numero DatMon,Alfa end ExtSem);
```

## Código
38

## Descrição

Esta função monta o extenso do dia da semana de uma determinada data.

## Parâmetros

- **DatMon** (`Numero`) - Entrada: Campo/Variável do qual se deseja obter o extenso da semana
- **ExtSem** (`Alfa end`) - Saída: Variável que receberá o extenso da Semana

## Valores de Retorno

- ExtSem: Variável tipo Alfa que receberá o extenso da Semana.

## Exemplo de Uso

```lspt
Definir Alfa vaSemExt;
Definir Data vdData;

DataHoje(vdData);
ExtensoSemana(vdData, vaSemExt);
@ Se a data fosse 31/12/1900, vaSemExt seria "Sexta-Feira" @
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
