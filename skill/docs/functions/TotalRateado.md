# TotalRateado

## Assinatura

```lspt
Funcao TotalRateado(Numero Projeto, Numero Fase, Numero ContaFinanceira, Numero ContaContabil, Alfa CentroCusto, Numero End Total);
```

## Código
565

## Descrição

Esta função retorna o valor total rateado e pode ser utilizado independente da empresa possuir projeto e plano financeiro, basta nestes casos passar o valor 0 (zero) para o Projeto, Fase e Conta Financeria.

## Parâmetros

- **Projeto** (`Numero`) - Entrada: Valor ou variável que indicará qual o projeto que deseja-se buscar o total rateado. Caso o valor for 0 (zero), será retornado o total de todos os projetos.
- **Fase** (`Numero`) - Entrada: Valor ou variável que indicará qual a fase que deseja-se buscar o total rateado. Caso o valor for 0 (zero), será retornado o total de todas as fases.
- **ContaFinanceira** (`Numero`) - Entrada: Conta Contábil.
- **ContaContabil** (`Numero`) - Entrada: Conta Contábil.
- **CentroCusto** (`Alfa`) - Entrada: String com o Centro de Custo
- **Total** (`Numero End`) - Saída: Valor Total Rateado de acordo com os parâmetros passados para o Projeto, Fase, ContaFinanceira, ContaContabil e CentroCusto. (retorno)

## Valores de Retorno

- Total: Valor Total Rateado de acordo com os parâmetros passados
- para o Projeto, Fase, ContaFinanceira, ContaContabil e CentroCusto.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
TotalRateado();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/totalrateado.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
