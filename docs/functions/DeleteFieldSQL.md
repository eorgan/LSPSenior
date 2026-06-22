# DeleteFieldSQL

## Assinatura

```lspt
Funcao DeleteFieldSQL (Alfa SectionName, Alfa TableFieldName);
```

## Código
N/A

## Descrição

Retira um campo do SELECT da seção passada como parâmetro.

## Parâmetros

- **SectionName** (`Alfa`) - Entrada: Nome da seção que contém o SELECT onde o campo será excluído
- **TableFieldName** (`Alfa`) - Entrada: Campo a ser excluído no padrão TABELA.CAMPO

## Exemplo de Uso

```lspt
InsClauSQLGroupBy("Detalhe_1", "NUMEMP, TIPCOL");
InsClauSQLCampoDireto("Detalhe_1", "Max(ValSal) ValorSal");
DeleteFieldSQL("Detalhe_1", "R034FUN.NUMCAD");
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/deletefieldsql.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
