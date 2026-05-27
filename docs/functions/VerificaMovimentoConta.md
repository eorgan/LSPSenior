# VerificaMovimentoConta

## Assinatura

```lspt
Funcao VerificaMovimentoConta(Numero pCtaRed, Alfa End pTemMov);
```

## Código
756

## Descrição

Esta função verifica na estrutura carregada pela CarregaSaldoContabilAbr se a conta possui alguma conta subordinada com movimento.

## Parâmetros

- **pCtaRed** (`Numero`) - Entrada: Variável que recebe o número da conta contábil que deseja-se verificar a existência de movimento.
- **pTemMov** (`Alfa End`) - Saída: Variável alfa que receberá "S"(sim) ou "N"(não).

## Valores de Retorno

- pTemMov: Variável alfa que receberá "S"(sim) ou "N"(não).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
VerificaMovimentoConta();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/verificamovimentoconta.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
