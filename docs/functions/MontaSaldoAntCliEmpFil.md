# MontaSaldoAntCliEmpFil

## Assinatura

```lspt
Funcao MontaSaldoAntCliEmpFil(Numero pCodCli,Numero pCodFil, Numero pDatIni,Numero End pSalCli);
```

## Código
N/A

## Descrição

Esta função busca o saldo do cliente de acordo com a empresa ativa e a filial passada como parâmetro.

## Parâmetros

- **pCodCli** (`Numero`) - Entrada: Variável que recebe o código do cliente que deseja-se busca saldo.
- **pCodFil** (`Numero`) - Entrada: Variável que recebe o código da filial que deseja-se buscar o saldo.
- **pDatIni** (`Numero`) - Entrada: Variável que recebe a data inicial que deseja-se buscar o saldo.
- **pSalCli** (`Numero End`) - Saída: Variável que retorna o saldo do cliente recebida nos parâmetros acima.

## Valores de Retorno

- pSalCli: Variável numérica que retorna o saldo do cliente recebida nos parâmetros acima.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MontaSaldoAntCliEmpFil();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
