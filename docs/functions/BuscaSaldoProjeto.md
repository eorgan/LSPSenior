# BuscaSaldoProjeto

## Assinatura

```lspt
Funcao BuscaSaldoProjeto(Numero End p1,Numero End p2,Numero End p3,Numero End p4,Numero End p5,Numero End p6,Alfa End p7,Numero End p8,Numero End p9,Numero End p10,Numero End p11,Numero End pC12,Numero End pC13,Numero End p14, Alfa End p15);
```

## Código
699

## Descrição

Essa função retorna os valores que foram carregados em lista da função CarregaSaldoProjeto ou da função CarregaSaldoAnteriorProjeto.

## Parâmetros

- **p1** (`Numero End`) - Saída: Se está variável estiver como -1, irá trazer o orçado do projeto, se estiver como -2, irá trazer o realizado do projeto.
- **p2** (`Numero End`) - Saída: Código da Empresa - obrigatório.
- **p3** (`Numero End`) - Saída: Número do Projeto - obrigatório.
- **p4** (`Numero End`) - Saída: Código da Fase.
- **p5** (`Numero End`) - Saída: Código da Rotina – Se informado determinado valor, fará o filtro por determinada rotina.
- **p6** (`Numero End`) - Saída: Conta Financeira.
- **p7** (`Alfa End`) - Saída: Centro de Custos.
- **p8** (`Numero End`) - Saída: Data Informada.
- **p9** (`Numero End`) - Saída: Saldo Projeto - Regime Entrada (retorno).
- **p10** (`Numero End`) - Saída: Saldo Projeto - Regime Saída (retorno).
- **p11** (`Numero End`) - Saída: Orçamento Inicial - Regime Entrada (retorno).
- **pC12** (`Numero End`) - Saída: Orçamento Inicial - Regime Entrada (retorno).
- **pC13** (`Numero End`) - Saída: Orçamento Inicial - Regime Saída (retorno).
- **p14** (`Numero End`) - Saída: Orçamento Final - Regime Saída (retorno).
- **p15** (`Alfa End`) - Saída: Analítica ou Sintético.

## Valores de Retorno

- SalEnt – Saldo Projeto - Regime Entrada (Numero);
- SalSai – Saldo Projeto - Regime Saída (Número);
- OrcEntI – Orçamento Inicial - Regime Entrada (Número);
- OrcEntF – Orçamento Inicial - Regime Entrada (Número);
- OrcSaiI – Orçamento Inicial - Regime Saída (Número);
- OrcSaiF – Orçamento Final - Regime Saída (Número);
- AnaSin_CurConta =
- Analítica ou Sintético.
- Observação: É Recomendado utilizar o Web Service de "com.senior.g5.co.mfi.prj.buscasaldofinanceiroprojetogrid:
- SaldoFinanceiroGrid" para buscar os dados de saldos dos projetos financeiros,
- pois o mesmo é mais performático e sua implementação é mais fácil e legível.
- <!-- source: https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/buscatabpreco.htm -->

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscaSaldoProjeto();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
