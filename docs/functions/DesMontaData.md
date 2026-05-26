# DesMontaData

## Assinatura

```lspt
Funcao DesMontaData(Numero DatMon,Numero end Dia, Numero end Mes, Numero end Ano);
```

## Código
36

## Descrição

Esta função desmonta uma data, separando em três variáveis, as informações Dia/Mês/Ano da data.

## Parâmetros

- **DatMon** (`Numero`) - Entrada: Campo/Variável a ser desmontada
- **Dia** (``) - Saída: Variável tipo Numero que receberá o dia da data a ser desmontada
- **Mes** (``) - Saída: Variável tipo Numero que receberá o mês da data a ser desmontada
- **Ano** (``) - Saída: Variável tipo Numero que receberá o ano da data a ser desmontada

## Exemplo de Uso

```lspt
Definir Data vdDataEmissao;
Definir Numero vnDia;
Definir Numero vnMes;
Definir Numero vnAno;

vdDataEmissao = E140NFV.DatEmi;
DesMontaData(vdDataEmissao, vnDia, vnMes, vnAno);
@ Se a data fosse 24/04/1995: vnDia=24, vnMes=04, vnAno=1995 @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
