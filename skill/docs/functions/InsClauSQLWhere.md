# InsClauSQLWhere

## Assinatura

```lspt
Funcao InsClauSQLWhere(<"Seção Detalhe">, Variavel);
```

## Código
N/A

## Descrição

Inclui uma cláusula WHERE no código SQL montado pelo gerador.

## Parâmetros

- **Detalhe">** (`<"Seção`) - Entrada: Código SQL para inclusão da cláusula WHERE
- **Variavel** - Entrada: Código SQL para inclusão da cláusula WHERE

## Exemplo de Uso

```lspt
Definir Alfa xsql;
xsql = "R034FUN.SITAFA <> 7";
InsClauSQLWhere("Detalhe_Clientes", xsql);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/insclausqlwhere.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
