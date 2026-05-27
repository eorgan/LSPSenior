# CalculaPrecoProRata

## Assinatura

```lspt
Funcao CalculaPrecoProRata(Numero pCriPrt,Numero pPreUni,Numero pIniVig, Numero pFimVig,Numero pCptFat,Numero pDatAux,Numero pCriFtc,Alfa pProRat);
```

## Código
727

## Descrição

Calcular o preço unitário do contrato com base no critério pró-rata por competência (padrão do sistema) ou por período (através do identificador de regras [VEN-160PRORA01](../identificadores_regras/ven_160prora01.htm)).

## Parâmetros

- **pCriPrt** (`Numero`) - Entrada: Critério para cálculo pró-rata do contrato de venda.
- **pPreUni** (`Numero`) - Entrada: Preço unitário do produto ou serviço.
- **pIniVig** (`Numero`) - Entrada: Data de início da vigência do item do contrato.
- **pFimVig** (`Numero`) - Entrada: Data final da vigência do item do contrato.
- **pCptFat** (`Numero`) - Entrada: Competência que está sendo faturada.
- **pDatAux** (`Numero`) - Entrada: Competência que está sendo faturada.
- **pCriFtc** (`Numero`) - Entrada: Critério para faturamento do contrato de venda.
- **pProRat** (`Alfa`) - Entrada: Indicativo se deve ser feito o cálculo pró-rata para o item do contrato.

## Valores de Retorno

- O resultado é
- armazenado em uma variável interna do sistema e retornado através da
- função Funcao RetornaPrecoProRata (Numero End Retorno);.
- Retorno (Numero): Resultado da chamada. Retorna o preço do item
- calculado.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CalculaPrecoProRata();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/calculaprecoprorata.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
