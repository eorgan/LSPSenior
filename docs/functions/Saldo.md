# Saldo

## Assinatura

```lspt
Funcao Saldo(Numero pCtaRed, Numero End pSalMes);
```

## Código
85

## Descrição

Esta função busca o saldo contábil das contas que foram carregadas através da função CarregaSaldoContabil. O saldo é retornado através da variável pSalMes. Todas as contas contábeis sintéticas e analíticas estão disponíveis nesta estrutura.

## Parâmetros

- **pCtaRed** (`Numero`) - Entrada: Variável que recebe o número da conta contábil que deseja-se buscar o saldo contábil.
- **pSalMes** (`Numero End`) - Saída: Variável que retorna o saldo da conta contábil recebida no parâmetro pCtaRed.

## Valores de Retorno

- pSalMes: Variável numérica que retorna o saldo da conta contábil recebida no parâmetro pCtaRed.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
Saldo();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/saldo.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
