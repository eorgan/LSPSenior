# MontaData

## Assinatura

```lspt
Funcao MontaData(Numero Dia, Numero Mes, Numero Ano, Numero End DatMon);
```

## Código
18

## Descrição

Esta função concatena três variáveis, formando uma data. É uma alternativa ao CodData com sintaxe diferente.

## Parâmetros

- **Dia** (`Numero`) - Entrada: Dia da data a ser gerada
- **Mes** (`Numero`) - Entrada: Mês da data a ser gerada
- **Ano** (`Numero`) - Entrada: Ano da data a ser gerada (deve ter 4 dígitos, ex: 1998)
- **DatMon** (`Numero End`) - Saída: Variável do tipo Número ou Data que receberá o resultado

## Valores de Retorno

- Data: Variável tipo Numero que receberá o resultado da conversão.

## Exemplo de Uso

```lspt
Definir Numero vnDia;
Definir Numero vnMes;
Definir Numero vnAno;
Definir Data vdData;

vnDia = 1;
vnMes = 9;
vnAno = 1998;

MontaData(vnDia, vnMes, vnAno, vdData);
@ vdData conterá "01/09/1998" @
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
