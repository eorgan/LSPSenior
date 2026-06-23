# MontaSaldoAntFornecedorGrupo

## Assinatura

```lspt
Funcao MontaSaldoAntFornecedorGrupo(Numero pCodFor,Numero pDatIni,Alfa pCodCrp,Numero End pSalFor);
```

## Código
129

## Descrição

Esta função busca o saldo do fornecedor de acordo com o grupo passado como parâmetro.

## Parâmetros

- **pCodFor** (`Numero`) - Entrada: Variável que recebe o código do fornecedor que deseja-se buscar o saldo do grupo.
- **pDatIni** (`Numero`) - Entrada: Variável que recebe a data inicial que deseja-se buscar o saldo do grupo.
- **pCodCrp** (`Alfa`) - Entrada: Variável que receber o grupo do contas a receber/pagar que deseja-se buscar o saldo do grupo.
- **pSalFor** (`Numero End`) - Saída: Variável que retorna o saldo do grupo recebida nos parâmetros acima.

## Valores de Retorno

- pSalFor: Variável numérica que retorna o saldo do grupo recebida nos parâmetros acima.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MontaSaldoAntFornecedorGrupo();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/montasaldoantfornecedorgrupo.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
