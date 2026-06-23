# SaldoAnteriorCliente

## Assinatura

```lspt
Funcao SaldoAnteriorCliente(Numero pDatBas,Alfa pCodCli,Alfa pCodEmp,Alfa pCodFil,Alfa pCodPor,Alfa pCodCrt,Alfa pCodMoe,Alfa pCodRep,Alfa pCodTpt,Alfa pCodTns, Alfa pCodCrp, Alfa pNumTit,Numero End pSalCli);
```

## Código
547

## Descrição

Retornar o saldo anterior do cliente de uma determinada data, sendo possível passar como parâmetros os códigos de clientes, empresas, filiais, portadores, carteiras, moedas, representantes, tipo de títulos, grupo de contas, números de títulos, com a possibilidade de abrangência nos campos citados e estes não são obrigatórios.

## Parâmetros

- **pDatBas** (`Numero`) - Entrada: Valor ou variável que indica qual será a data base para buscar o saldo do cliente (OBRIGATÓRIO).
- **pCodCli** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais os clientes deseja-se buscar o saldo (opcional).
- **pCodEmp** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais as empresas deseja-se buscar o saldo (opcional).
- **pCodFil** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais as filiais deseja-se buscar o saldo (opcional).
- **pCodPor** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais os portadores deseja-se buscar o saldo (opcional).
- **pCodCrt** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais as carteiras deseja-se buscar o saldo (opcional).
- **pCodMoe** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais as moedas deseja-se buscar o saldo (opcional).CodTpt:CodCrp:
- **pCodRep** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais os representantes deseja-se buscar o saldo (opcional).
- **pCodTpt** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais os tipos de títulos deseja-se buscar o saldo (opcional).
- **pCodTns** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais as transações deseja-se buscar o saldo (opcional).
- **pCodCrp** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais os grupos a receber/pagar deseja-se buscar o saldo (opcional).
- **pNumTit** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais os títulos deseja-se buscar o saldo (opcional).
- **pSalCli** (`Numero End`) - Saída: Variável que recebe o valor do saldo anterior do cliente de acordo com os parâmetros passados.

## Valores de Retorno

- pSalCli: Variável numérica que recebe o valor do saldo anterior do cliente de acordo com os parâmetros passados.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SaldoAnteriorCliente();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/saldoanteriorcliente.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
