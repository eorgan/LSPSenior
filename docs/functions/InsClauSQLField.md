# InsClauSQLField

## Assinatura

```lspt
Funcao InsClauSQLField(<"Seção Detalhe">, Variavel);
```

## Código
N/A

## Descrição

Esta função inclui um campo de tabela no código SQL montado pelo gerador, na seção detalhe escolhida.

## Parâmetros

- **Detalhe">** (`<"Seção`) - Entrada
- **Variavel** - Entrada

## Exemplo de Uso

```lspt
Definir Alfa xsql;
xsql = "CEPCLI AS E085CLI";
InsClauSQLField("Detalhe_Clientes",xsql);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
