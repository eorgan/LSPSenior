# CarregaSaldoContabilAux

## Assinatura

```lspt
Funcao CarregaSaldoContabilAux(Numero pCodEmp,Alfa pCodFil,Alfa pCtaAux,Numero pDatIni,Numero pDatFim,Numero pSaldoAnterior);
```

## Código
594

## Descrição

Esta função carrega o saldo auxiliar de uma empresa de acordo com a abrangência de filial informada, contas auxiliares e seus respectivos períodos. Quando o código da filial for igual a zero (0), buscará o saldo de todas as empresas(consolidado). Todas as contas contábeis sintéticas e analíticas são consideradas nesta estrutura.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável que recebe o código da empresa.
- **pCodFil** (`Alfa`) - Entrada: Variável que recebe a abrangência de filial.
- **pCtaAux** (`Alfa`) - Entrada: Variável que recebe a abrangência de conta de composição auxiliar.
- **pDatIni** (`Numero`) - Entrada: Variável (data) que receba a data inicial.
- **pDatFim** (`Numero`) - Entrada: Variável (data) que receba a data final.
- **pSaldoAnterior** (`Numero`) - Entrada: Variável que indica se o saldo anterior deve ser carregado (1 = considera, 0 = não considera).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CarregaSaldoContabilAux();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
