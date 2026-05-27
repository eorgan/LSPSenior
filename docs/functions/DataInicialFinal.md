# DataInicialFinal

## Assinatura

```lspt
Funcao DataInicialFinal (Data pDatAtu, Numero pTipDat, Data pDatRef, Data End pDatIni, Data End pDatFim);
```

## Código
N/A

## Descrição

Esta função retorna o início e o fim de um período.

## Parâmetros

- **pDatAtu** (`Data`) - Entrada: É a data referência para o período.
- **pTipDat** (`Numero`) - Entrada: É o parâmetro que identifica o tipo do período.   0. Início e fim do período serão iguais a data referência; 1. O início será o primeiro dia da semana e o fim será o último dia da semana, o primeiro dia da semana deve ser passado em **pDatref**; 2. Se o dia for menor que 15 então retorna o dia 1º até o dia 15, senão retorna do dia 16 até o último dia do mês da data referência; 3. O período será do dia 1º até o último dia do mês da data referência; 4. Será um período de 2 meses, ou seja, do será do dia 1º de um mês até o último dia do próximo mês. Dependendo do mês da data referência a data inicial pode ser um mês anterior ou o mês da data referência; 5. Idem item 4, porém o período é de 3 meses; 6. Idem item 4, porém o período é de 4 meses; 7. Idem item 4, porém o período é de 6 meses; 8. O período será de 1º de janeiro até 31 de dezembro do ano da data referência;
- **pDatRef** (`Data`) - Entrada: É usado quando o parâmetro **pTipDat** está definido com 1, representa o primeiro dia da semana.
- **pDatIni** (`Data End`) - Saída: Início do período.
- **pDatFim** (`Data End`) - Saída: Final do período.

## Exemplo de Uso

```lspt
			Definir alfa xDatIni;
Definir alfa xDatFim;
Definir Numero xHoje;
Definir Data pDatIni;
Definir Data pDatFim;
Definir Numero xHoje;
DataHoje (xHoje);
	DataInicialFinal (xHoje, 3, 0, pDatIni, pDatFim);
	DataExtenso (pDatIni, xDatIni);
	DataExtenso (pDatFim, xDatFim);
	ValStr = "O mês atual começa em: " + xDatIni + " e termina em " + xDatFim;
		Cancel(2);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
