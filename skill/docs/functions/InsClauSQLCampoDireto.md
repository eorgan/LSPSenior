# InsClauSQLCampoDireto

## Assinatura

```lspt
Funcao InsClauSQLCampoDireto (Alfa SectionName, Alfa Campo);
```

## Código
N/A

## Descrição

Insere um campo novo no SELECT que poderá ser utilizado para agrupamentos e outros tipos de funções.

## Parâmetros

- **SectionName** (`Alfa`) - Entrada: Nome da seção onde será inserido o campo
- **Campo** (`Alfa`) - Entrada: Campo a ser inserido no SELECT

## Exemplo de Uso

```lspt
InsClauSQLCampoDireto("Detalhe_1", "Max(ValSal) ValorSal");
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/insclausqlcampodireto.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
