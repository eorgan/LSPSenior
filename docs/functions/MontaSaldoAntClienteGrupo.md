# MontaSaldoAntClienteGrupo

## Assinatura

```lspt
Funcao MontaSaldoAntClienteGrupo(Numero pCodCli,Numero pDatIni,Alfa pCodCrp,Numero End pSalCli);
```

## Código
N/A

## Descrição

Esta função busca o saldo do cliente de acordo com o grupo passado como parâmetro.

## Parâmetros

- **pCodCli** (`Numero`) - Entrada: Variável que recebe o código do cliente que deseja-se buscar o saldo do grupo.
- **pDatIni** (`Numero`) - Entrada: Variável que recebe a data inicial que deseja-se buscar o saldo do grupo.
- **pCodCrp** (`Alfa`) - Entrada: Variável que receber o grupo do contas a receber/pagar que deseja-se buscar o saldo do grupo.
- **pSalCli** (`Numero End`) - Saída: Variável numérica que retorna o saldo do grupo recebida nos parâmetros acima.

## Valores de Retorno

- pSalCli: Variável numérica que retorna o saldo do grupo recebida nos parâmetros acima.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MontaSaldoAntClienteGrupo();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/montasaldoantclientegrupo.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
