# InsClauSQLField

## Assinatura

```lspt
Funcao InsClauSQLField(<"Seção Detalhe">, Variavel);
```

## Código
N/A

## Descrição

Inclui um campo de tabela no código SQL montado pelo gerador.

## Parâmetros

- **Detalhe">** (`<"Seção`) - Entrada: Código SQL para inclusão dos campos de tabela
- **Variavel** - Entrada: Código SQL para inclusão dos campos de tabela

## Exemplo de Uso

```lspt
Definir Alfa xsql;
xsql = "CEPCLI AS E085CLI";
InsClauSQLField("Detalhe_Clientes", xsql);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/insclausqlfield.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
