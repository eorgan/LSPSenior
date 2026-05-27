# InsSQLWhereSimples

## Assinatura

```lspt
Funcao InsSQLWhereSimples(<"Seção Detalhe">, Variavel);
```

## Código
N/A

## Descrição

Esta função insere uma cláusula **WHERE** dentro de um SQL durante a execução da regra de pré-seleção. As tabelas referenciadas no SQL não são incluídas na cláusula **FROM** do comando SQL. Esta função utilizará sempre o SQL Senior 2, independente da configuração do modelo de relatório.

## Parâmetros

- **Detalhe">** (`<"Seção`) - Entrada
- **Variavel** - Entrada

## Exemplo de Uso

```lspt
Definir alfa vDatStr;
ConverteDataBanco(EDatRef,vDatStr);
xsql = " AND EXISTS(SELECT 1 FROM R040PRG A \
WHERE A.NUMEMP = R040PER.NUMEMP \
AND A.TIPCOL = R040PER.TIPCOL \
AND A.NUMCAD = R040PER.NUMCAD \
AND A.INIPER = R040PER.INIPER \
AND A.PRGDAT >= "+vDatStr+")";
InsSQLWhereSimples("Detalhe_1",xsql);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
