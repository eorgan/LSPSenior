# SaldoAnteriorFornecedor

## Assinatura

```lspt
Funcao SaldoAnteriorFornecedor(Numero pDatBas,Alfa pCodFor,Alfa pCodEmp,Alfa pCodFil,Alfa pCodPor,Alfa pCodCrt,Alfa pCodMoe,Alfa pCodTpt,Alfa pCodTns, Alfa pCodCrp, Alfa pNumTit,Numero End pSalCli);
```

## Código
548

## Descrição

Retornar o saldo anterior do fornecedor de uma determinada data, sendo possível passar como parâmetros os códigos de fornecedores, empresas, filiais, portadores, carteiras, moedas, tipo de títulos, grupo de contas, números de títulos, com a possibilidade de abrangência nos campos citados e estes não são obrigatórios.

## Parâmetros

- **pDatBas** (`Numero`) - Entrada: Valor ou variável que indica qual será a data base para buscar o saldo do fornecedor (OBRIGATÓRIO).
- **pCodFor** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais os fornecedores deseja-se buscar o saldo (opcional).
- **pCodEmp** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais as empresas deseja-se buscar o saldo (opcional).
- **pCodFil** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais as filiais deseja-se buscar o saldo (opcional).
- **pCodPor** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais os portadores deseja-se buscar o saldo (opcional).
- **pCodCrt** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais as carteiras deseja-se buscar o saldo (opcional).
- **pCodMoe** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais as moedas deseja-se buscar o saldo (opcional).
- **pCodTpt** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais os tipos de títulos deseja-se buscar o saldo (opcional).
- **pCodTns** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais as transações deseja-se buscar o saldo (opcional).
- **pCodCrp** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais os grupos a receber/pagar deseja-se buscar o saldo (opcional).
- **pNumTit** (`Alfa`) - Entrada: Valor ou variável com abrangência que indica quais os títulos deseja-se buscar o saldo (opcional)
- **pSalCli** (`Numero End`) - Saída

## Valores de Retorno

- pSalFor: Variável numérica que recebe o valor do saldo anterior do fornecedor de acordo com os parâmetros passados.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SaldoAnteriorFornecedor();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/saldoanteriorfornecedor.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
