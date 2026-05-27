# MontaNumLancamento

## Assinatura

```lspt
Funcao MontaNumLancamento(Numero pCodFil,Numero pDatLct,Numero pGrava,Numero End pNumLct);
```

## Código
N/A

## Descrição

Esta função é utilizada para importação de lançamentos contábeis.

## Parâmetros

- **pCodFil** (`Numero`) - Entrada: Variável que recebe o código da filial.
- **pDatLct** (`Numero`) - Entrada: Variável que recebe a data do lançamento.
- **pGrava** (`Numero`) - Entrada: Variável que se for 0 sugere o próximo número do lançamanto mas não grava este número na base, e se for 1 sugere e confirma este número como já existente.
- **pNumLct** (`Numero End`) - Saída: Variável numérica que retorna o número do lançamento.

## Valores de Retorno

- pNumLct:Variável numérica que retorna o número do
- lançamento.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MontaNumLancamento();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/montanumlancamento.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
