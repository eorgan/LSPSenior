# InsClauSQLOrderBy

## Assinatura

```lspt
Funcao InsClauSQLOrderBy("Seção Detalhe", Variavel);
```

## Código
N/A

## Descrição

Esta função inclui uma cláusula de ordenação no código SQL, montado pelo gerador, na seção detalhe escolhida.

## Parâmetros

- **Detalhe"** (`"Seção`) - Entrada: Variável alfa numérica que possui o código SQL, para inclusão da cláusula de ordenação do código SQL montado pela seção detalhe determinada
- **Variavel** - Entrada: Variável alfa numérica que possui o código SQL, para inclusão da cláusula de ordenação do código SQL montado pela seção detalhe determinada

## Exemplo de Uso

```lspt
Definir Alfa xsql;
xsql = "R034FUN.DatAdm Desc";
InsClauSQLOrderBy("Detalhe_Colaborador",xsql);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/insclausqlorderby.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
