# CarregaSaldoProjeto

## Assinatura

```lspt
Funcao CarregaSaldoProjeto(Alfa pCodEmp, Alfa pNumPrj, Alfa pCodFpj, Alfa pRotPpj, Alfa pCtaFin, Alfa pCodCcu, Numero pMesAnoIni, Numero MesAnoFim, Alfa pCarPos, Alfa pCarOrc, Alfa pCarCts, Alfa pCarCcs);
```

## Código
584

## Descrição

Carregar os Saldo e/ou Orçamento dos projetos passados conforme os parâmetros acima.

## Parâmetros

- **pCodEmp** (`Alfa`) - Entrada: Código da Empresa - obrigatório.
- **pNumPrj** (`Alfa`) - Entrada: Número do Projeto ) - obrigatório.
- **pCodFpj** (`Alfa`) - Entrada: Código da Fase.
- **pRotPpj** (`Alfa`) - Entrada: Código da Rotina – Se informado determinado valor, fará o filtro por determinada rotina.
- **pCtaFin** (`Alfa`) - Entrada: Conta Financeira.
- **pCodCcu** (`Alfa`) - Entrada: Centro de Custos .
- **pMesAnoIni** (`Numero`) - Entrada: Data Inicial (Data).
- **MesAnoFim** (`Numero`) - Entrada: Data Final (Data).
- **pCarPos** (`Alfa`) - Entrada: Se está variável receber “Sim”, ela irá verificar se existe algo na tabela E615POS. Os valores podem ser "SIM" ou "NÃO".
- **pCarOrc** (`Alfa`) - Entrada: Se está variável receber “Sim”, ela irá verificar se existe algo na tabela E615ORC. Os valores podem ser "SIM" ou "NÃO".
- **pCarCts** (`Alfa`) - Entrada: Se está variável receber “Sim” irá trazer somente valores de Contas Financeiras “Sintéticas”. Se receber “Não” irá trazer somente valores de Contas Financeiras “Analíticas”. Se receber “Ambos”, irá trazer valores de Conta Financeira Sintéticas e Analíticas.Os valores podem ser "SIM" ou "NÃO".
- **pCarCcs** (`Alfa`) - Entrada: Se está variável receber “Sim” irá trazer somente valores de Centro de Custos “Sintéticos”. Se receber “Não” irá trazer somente valores de Centro de Custos “Analíticos”. Se receber “Ambos”, irá trazer valores de Centro de Custos Sintéticos e Analíticos. Os valores podem ser "SIM" ou "NÃO".

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CarregaSaldoProjeto();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/carregasaldoprojeto.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
