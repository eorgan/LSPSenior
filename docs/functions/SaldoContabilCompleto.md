# SaldoContabilCompleto

## Assinatura

```lspt
Funcao SaldoContabilCompleto(Numero aCtaRed, Alfa aCodCcu, Numero aMesAno, Numero end aDebCta, Numero end aCreCta, Numero end aSalCta, Numero end aSalAntCta);
```

## Código
811

## Descrição

Retorna os saldos de acordo com os dados passados via parâmetro.

## Parâmetros

- **aCtaRed** (`Numero`) - Entrada: Código da conta contábil.
- **aCodCcu** (`Alfa`) - Entrada: Código do centro de custo.
- **aMesAno** (`Numero`) - Entrada: Competência a que se refere o saldo contábil.
- **aDebCta** (`Numero end`) - Saída: Retorna o valor a débito a combinação da conta contábil, centro de custo (caso tipo de saldo 8) e competência.
- **aCreCta** (`Numero end`) - Saída: Retorna o valor a crédito a combinação da conta contábil, centro de custo (caso tipo de saldo 8) e competência.
- **aSalCta** (`Numero end`) - Saída: Retorna o saldo final para a combinação da conta contábil, centro de custos (caso tipo de saldo 8) e competência.
- **aSalAntCta** (`Numero end`) - Saída: Retorna o saldo anterior para a combinação da conta contábil, centro de custos (caso tipo de saldo 8) e competência.

## Valores de Retorno

- - aDebCta: Retorna o valor a débito a combinação da conta contábil,
- centro de custo (caso tipo de saldo 8) e competência.
- - aCreCta: Retorna o valor a crédito a combinação da conta contábil,
- centro de custo (caso tipo de saldo 8) e competência.
- - aSalCta: Retorna o saldo final para a combinação da conta contábil,
- centro de custos (caso tipo de saldo 8) e competência.
- - aSalAntCta: Retorna o saldo anterior para a combinação da conta
- contábil, centro de custos (caso tipo de saldo 8) e competência.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SaldoContabilCompleto();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/saldocontabilcompleto.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
