# InsClauSQLFrom

## Assinatura

```lspt
Funcao InsClauSQLFrom(<"Seção Detalhe">, Variavel);
```

## Código
N/A

## Descrição

Inclui uma tabela no código SQL montado pelo gerador.

## Parâmetros

- **Detalhe">** (`<"Seção`) - Entrada: Código SQL para inclusão da tabela
- **Variavel** - Entrada: Código SQL para inclusão da tabela

## Exemplo de Uso

```lspt
Definir Alfa xsql;
xsql = "E085CLI";
InsClauSQLFrom("Detalhe_Clientes", xsql);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/insclausqlfrom.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
