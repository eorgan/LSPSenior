# InsClauSQLGroupBy

## Assinatura

```lspt
Funcao InsClauSQLGroupBy (Alfa SectionName, Alfa GroupByClau);
```

## Código
N/A

## Descrição

Insere uma cláusula GROUP BY no SELECT da seção passada como parâmetro.

## Parâmetros

- **SectionName** (`Alfa`) - Entrada: Nome da seção onde será inserida o GROUP BY
- **GroupByClau** (`Alfa`) - Entrada: Cláusula a ser inserida

## Exemplo de Uso

```lspt
InsClauSQLGroupBy("Detalhe_1", "NUMEMP, TIPCOL, NUMCAD");
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/insclausqlgroupby.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
