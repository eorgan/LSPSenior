# InsSQLWhereSimples

## Assinatura

```lspt
Funcao InsSQLWhereSimples(<"Seção Detalhe">, Variavel);
```

## Código
N/A

## Descrição

Insere uma cláusula WHERE dentro de um SQL durante a execução da regra de pré-seleção.

## Parâmetros

- **Detalhe">** (`<"Seção`) - Entrada: Código SQL para inclusão da cláusula WHERE
- **Variavel** - Entrada: Código SQL para inclusão da cláusula WHERE

## Exemplo de Uso

```lspt
Definir Alfa vDatStr;
Definir Alfa xsql;

ConverteDataBanco(EDatRef, vDatStr);
xsql = " AND EXISTS(SELECT 1 FROM R040PRG A WHERE A.NUMEMP = R040PER.NUMEMP AND A.TIPCOL = R040PER.TIPCOL AND A.NUMCAD = R040PER.NUMCAD AND A.INIPER = R040PER.INIPER AND A.PRGDAT >= " + vDatStr + ")";
InsSQLWhereSimples("Detalhe_1", xsql);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/inssqlwheresimples.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
