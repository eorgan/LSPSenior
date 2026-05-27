# MontaSaldoAntCliTipoTitulo

## Assinatura

```lspt
Funcao MontaSaldoAntCliTipoTitulo(Numero pCodCli,Numero pDatBas, Numero pTipTpt, Numero End pSalCli);
```

## Código
145

## Descrição

Esta função busca o saldo do cliente de acordo com o tipo do título: - 'D' - Duplicatas, - 'O' - Outros e - 'C' - Adiantamentos/Pgto.Indevidos.

## Parâmetros

- **pCodCli** (`Numero`) - Entrada: Variável que recebe o código do cliente que deseja-se buscar o saldo do cliente.
- **pDatBas** (`Numero`) - Entrada: Variável caractere que receber o tipo do título para montar o saldo do cliente.
- **pTipTpt** (`Numero`) - Entrada: Variável caractere que receber o tipo do título para montar o saldo do cliente.
- **pSalCli** (`Numero End`) - Saída: Variável que retorna o saldo do cliente de acordo com os parâmetros passados.

## Valores de Retorno

- pSalCli - Variável numérica que retorna o saldo do cliente de acordo com os parâmetros passados.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MontaSaldoAntCliTipoTitulo();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
