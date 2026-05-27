# InsClauSQLFrom

## Assinatura

```lspt
Funcao InsClauSQLFrom(<"Seção Detalhe">, Variavel);
```

## Código
N/A

## Descrição

Esta função inclui uma tabela no código SQL, montado pelo gerador, na seção detalhe escolhida.

## Parâmetros

- **Detalhe">** (`<"Seção`) - Entrada: Variável alfa numérica que possui o código SQL, para inclusão da tabela no código SQL, da seção detalhe determinada.
- **Variavel** - Entrada: Variável alfa numérica que possui o código SQL, para inclusão da tabela no código SQL, da seção detalhe determinada.

## Exemplo de Uso

```lspt
Definir Alfa xsql;
xsql = "E085CLI";
InsClauSQLFrom("Detalhe_Clientes",xsql);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
