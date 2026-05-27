# AdicionaRateioRegra

## Assinatura

```lspt
Funcao AdicionaRateioRegra (Numero pNumPrj,Numero pCodFpj,Numero pCtaFin,Numero pCtaRed,Numero pPerRct,Numero pVlrRct,Alfa pCodCcu,Numero pPerRcc,Numero pVlrRcc,Alfa pObsRcc);
```

## Código
N/A

## Descrição

Esta função tem por objetivo montar a pré-definição do rateio a ser apresentado na tela de rateio ([F000RPF](../geral/f000rpf.htm)). Importante Esta função é específica e somente poderá ser executada na regra do identificador GER-000CRAVR01.

## Parâmetros

- **pNumPrj** (`Numero`) - Entrada: Número interno do projeto;
- **pCodFpj** (`Numero`) - Entrada: Código da fase do projeto
- **pCtaFin** (`Numero`) - Entrada: Conta financeira reduzida
- **pCtaRed** (`Numero`) - Entrada: Conta contábil reduzida
- **pPerRct** (`Numero`) - Entrada: Percentual do rateio Fin/Ctb
- **pVlrRct** (`Numero`) - Entrada: Valor do rateio Fin/Ctb
- **pCodCcu** (`Alfa`) - Entrada: Centro de custos
- **pPerRcc** (`Numero`) - Entrada: Percentual do rateio C.Custo
- **pVlrRcc** (`Numero`) - Entrada: Valor do rateio C.Custo
- **pObsRcc** (`Alfa`) - Entrada: Observações do rateio C.Custo

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AdicionaRateioRegra();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/adicionarateioregra.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
