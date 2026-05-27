# InsClauSQLCampoDireto

## Assinatura

```lspt
Funcao InsClauSQLCampoDireto (Alfa SectionName, Alfa Campo);
```

## Código
N/A

## Descrição

Esta função insere um campo novo no SELECT que poderá ser utilizado para agrupamentos e outros tipos de funções. Para associar este campo inserido no SQL com um controle do tipo **CADASTRO**, deve ser inserida uma descrição composta do prefixo **REQUERIDO_** junto ao nome passado pela função, na propriedade **NOME CAMPO** deste controle. Desta forma, quando o gerador executar o relatório, o valor será procurado e associado normalmente ao controle **CADASTRO**.

## Parâmetros

- **SectionName** (`Alfa`) - Entrada: Nome da seção que contém o select onde o campo será inserido
- **Campo** (`Alfa`) - Entrada: Campo a ser inserido

## Exemplo de Uso

```lspt
InsClauSQLGroupBy ("Detalhe_1", "NUMEMP,
 TIPCOL, NUMCAD");
InsClauSQLCampoDireto ("Detalhe_1", "Max(ValSal) ValorSal");
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
