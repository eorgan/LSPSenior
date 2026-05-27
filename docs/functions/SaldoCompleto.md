# SaldoCompleto

## Assinatura

```lspt
Funcao SaldoCompleto(Numero pCtaRed, Numero End pDebMes, Numero End pCreMes, Numero End pSalMes);
```

## Código
N/A

## Descrição

Esta função busca o saldo contábil das contas que foram carregadas através da função CarregaSaldoContabilAbr. O total de débitos é retornadado através da variável pDebMes. O total de crébitos é retornadado através da variável pCrebMes. O saldo é retornado através da variável pSalMes. Todas as contas contábeis sintéticas e analíticas estão disponíveis nesta estrutura.

## Parâmetros

- **pCtaRed** (`Numero`) - Entrada: Variável que recebe o número da conta contábil que deseja-se buscar o saldo contábil.
- **pDebMes** (`Numero End`) - Saída: Variável que receberá o total de débitos de acordo com a conta informada (retorno).
- **pCreMes** (`Numero End`) - Saída: Variável que receberá o total de créditos de acordo com a conta informada (retorno).
- **pSalMes** (`Numero End`) - Saída: Variável que receberá o saldo de acordo com a conta informada (retorno).

## Valores de Retorno

- - pDebMes: Variável numérica que receberá o total de débitos de acordo com a conta informada.
- - pCreMes: Variável numérica que receberá o total de créditos de acordo com a conta informada.
- - pSalMes: Variável numérica que receberá o saldo de acordo com a conta informada.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SaldoCompleto();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
