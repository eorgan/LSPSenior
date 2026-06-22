# DataInicialFinal

## Assinatura

```lspt
Funcao DataInicialFinal (Data pDatAtu, Numero pTipDat, Data pDatRef, Data End pDatIni, Data End pDatFim);
```

## Código
N/A

## Descrição

Retorna o início e o fim de um período.

## Parâmetros

- **pDatAtu** (`Data`) - Entrada: Data referência para o período
- **pTipDat** (`Numero`) - Entrada: Tipo do período:
- **pDatRef** (`Data`) - Entrada: Usado quando pTipDat = 1, representa o primeiro dia da semana
- **pDatIni** (`Data End`) - Saída: Início do período (retorno)
- **pDatFim** (`Data End`) - Saída: Final do período (retorno)

## Exemplo de Uso

```lspt
Definir Alfa xDatIni;
Definir Alfa xDatFim;
Definir Numero xHoje;
Definir Data pDatIni;
Definir Data pDatFim;

DataHoje(xHoje);
DataInicialFinal(xHoje, 3, 0, pDatIni, pDatFim);
DataExtenso(pDatIni, xDatIni);
DataExtenso(pDatFim, xDatFim);
ValStr = "O mês atual começa em: " + xDatIni + " e termina em " + xDatFim;
Cancel(2);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/datainicialfinal.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
