# MontaSaldoAntForTipoTitulo

## Assinatura

```lspt
Funcao MontaSaldoAntForTipoTitulo(Numero pCodFor,Numero pDatBas, Numero pTipTpt, Numero End pSalFor);
```

## Código
146

## Descrição

Esta função busca o saldo do fornecedor de acordo com o tipo do título: - 'D' - Duplicatas, - 'O' - Outros e - 'C' - Adiantamentos/Pgto.Indevidos.

## Parâmetros

- **pCodFor** (`Numero`) - Entrada: Variável que recebe o código do fornecedor que deseja-se buscar o saldo do fornecedor.
- **pDatBas** (`Numero`) - Entrada: Variável que recebe a data base para montar o saldo do fornecedor.
- **pTipTpt** (`Numero`) - Entrada: Variável caractere que receber o tipo do título para montar o saldo do fornecedor.
- **pSalFor** (`Numero End`) - Saída: Variável numérica que retorna o saldo do fornecedor de acordo com os parâmetros passados.

## Valores de Retorno

- pSalFor- Variável numérica que retorna o saldo do fornecedor de acordo com os parâmetros passados

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MontaSaldoAntForTipoTitulo();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/montasaldoantfortipotitulo.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
