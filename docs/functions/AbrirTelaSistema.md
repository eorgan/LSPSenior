# AbrirTelaSistema

## Assinatura

```lspt
Funcao AbrirTelaSistema(Alfa aTela,Alfa aParametros, Numero End aResultado);
```

## Código
638

## Descrição

Esta função serve para abrir uma tela do sistema utilizando parâmetros.

## Parâmetros

- **aTela** (`Alfa`) - Entrada: Nome da tela do sistema. Formatos: "F999XXX" ou "F999XXX_ABCD"
- **aParametros** (`Alfa`) - Entrada: Parametros da tela.
- **aResultado** (`Numero End`) - Saída: Resultado da chamada. 0: Tela foi aberta com sucesso.  -1: Tela não encontrada. Com o parâmetro global [AbrTelEsp](../menu_cadastros/f000pgs.htm) ativo, qualquer erro de abertura de tela resultará em **-1** em vez de apresentar uma mensagem.

## Valores de Retorno

- aResultado (Numero): Resultado da chamada.
- 0: Tela foi aberta com sucesso.
- -1: Tela não encontrada. Com o parâmetro global AbrTelEsp ativo, qualquer erro de abertura de tela resultará em **-1** em vez de apresentar uma mensagem.

## Exemplo de Uso

```lspt
Definir Alfa aParametros;
		Definir Numero nRetorno;
		Definir Alfa aNumCco;
		definir alfa DatIni;
		definir alfa aDatFim;
		definir alfa aCodPor;
		definir alfa aCodTpt;
		definir alfa aCodCrp;
		definir alfa aTipVctPrm;
		definir alfa aCodFil;
		definir alfa aDatPgt;
		definir alfa aTitPre;
		definir alfa aVenIni;
		definir alfa aNumCco;
		Definir alfa nCodfor.

aDatNul = "00/00/0000";
ConvDataInt(aDatNul,nDatNul);
IntParaAlfa(nDatNul,aDatNul);

aDatEmi = "01/01/2005";
ConvDataInt(aDatEmi,nDatEmi);
IntParaAlfa(nDatEmi,aDatIni);

aDatEmi = "31/12/2008";
ConvDataInt(aDatEmi,nDatEmi);
IntParaAlfa(nDatEmi,aDatFin);

aAbrPed = "1-999";
aCodCli = "1";
aAbrPro = "";
aAbrSer = "";
aPerRea = "0,70";
aPerRed = "";

aParametros = aAbrPed + ";" +
aCodCli + ";" +
aDatIni + ";" +
aDatFin + ";" +
aAbrPro + ";" +
aAbrSer + ";" +
aPerRea + ";" +
aPerRed + ";True";

AbrirTelaSistema("F999XXX",aParametros,aRetorno);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
