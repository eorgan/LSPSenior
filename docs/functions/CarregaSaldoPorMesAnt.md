# CarregaSaldoPorMesAnt

## Assinatura

```lspt
Funcao CarregaSaldoPorMesAnt(Alfa pCodEmp,Alfa pCodFil,Alfa pCodCcu,Numero pDatIni,Numero pDatFim);
```

## Código
N/A

## Descrição

Esta função carrega o saldo contábil de uma ou várias empresas de acordo com a abrangência de filial informada, abrangência de centro de custos e seus respectivos períodos. Quando a abrangência do C.Custos for informada, a função buscará o saldo na tabela E640RAT, baseando-se nos centros de custos informados, caso contrário, buscará o saldo na tabela E640SAL. Todas as contas contábeis sintéticas e analíticas são consideradas nesta estrutura. Isto é, basicamente faz a mesma coisa que a função CarregaSaldoPorMes, sendo que a única diferença é que a CarregaSaldoPorMesAnt disponibiliza uma estrutura interna para ser usada posteriormente pela função SaldoMesAcum.

## Parâmetros

- **pCodEmp** (`Alfa`) - Entrada: Variável que recebe a abrangência da empresa
- **pCodFil** (`Alfa`) - Entrada: Variável que recebe a abrangência de filial.
- **pCodCcu** (`Alfa`) - Entrada: Variável que recebe a abrangência do C.Custos.
- **pDatIni** (`Numero`) - Entrada: Variável (data) que receba a data inicial.
- **pDatFim** (`Numero`) - Entrada: Variável (data) que receba a data final.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CarregaSaldoPorMesAnt();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
