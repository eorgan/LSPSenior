# AtualizaSaldoContabilAbr

## Assinatura

```lspt
Funcao AtualizaSaldoContabilAbr(Numero pCodEmp,Alfa pFilAbr,Numero pMesAnoIni,Numero pMesAnoFim);
```

## Código
122

## Descrição

Esta deve ser chamada ao iniciar um relatório da contabilidade. A mesma executa a StoreProcedure que atualiza o saldo das contas, evitando assim que um relatório seja gerado com dados desatualizados. Há a possibilidade de informar qual a empresa e a abrangência de filial.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável que recebe o código da empresa.
- **pFilAbr** (`Alfa`) - Entrada: Variável que recebe a abrangência de filial.
- **pMesAnoIni** (`Numero`) - Entrada: Variável com a data final.
- **pMesAnoFim** (`Numero`) - Entrada

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AtualizaSaldoContabilAbr();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/atualizasaldocontabilabr.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
