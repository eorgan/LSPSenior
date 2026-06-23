# CarregaSaldoContabilHis

## Assinatura

```lspt
Funcao CarregaSaldoContabilHis(Numero pCodEmp,Numero pCodMpc,Alfa pCodFil,Numero pDatIni,Numero pDatFim,Numero pSaldoAnterior);
```

## Código
557

## Descrição

Esta função carrega o saldo contábil (tabelas históricas) de uma empresa de acordo com a abrangência de filial informada e seus respectivos períodos. Quando o código da filial for igual a zero (0), buscará o saldo de todas as empresas(consolidado). Todas as contas contábeis sintéticas e analíticas são consideradas nesta estrutura.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável que recebe o código da empresa.
- **pCodMpc** (`Numero`) - Entrada: Variável que recebe o código do modelo de plano.
- **pCodFil** (`Alfa`) - Entrada: Variável que recebe a abrangência de filial.
- **pDatIni** (`Numero`) - Entrada: Variável (data) que receba a data inicial.
- **pDatFim** (`Numero`) - Entrada: Variável (data) que receba a data final.
- **pSaldoAnterior** (`Numero`) - Entrada: Variável que indica se o saldo anterior deve ser carregado (1 = considera, 0 = não considera).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CarregaSaldoContabilHis();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/carregasaldocontabilhis.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
