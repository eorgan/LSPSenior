# SubstituiFrom

## Assinatura

```lspt
Funcao SubstituiFrom (Alfa SectionName, Alfa NovaClausula, Alfa TabelaSubstituida);
```

## Código
N/A

## Descrição

Substitui uma cláusula FROM no SELECT da seção passada como parâmetro.

## Parâmetros

- **SectionName** (`Alfa`) - Entrada: Nome da seção onde será substituída o FROM
- **NovaClausula** (`Alfa`) - Entrada: Cláusula que irá substituir o FROM atual
- **TabelaSubstituida** (`Alfa`) - Entrada: Nome da tabela que será substituída (opcional)

## Exemplo de Uso

```lspt
@ Cross Join @
SubstituiFrom("Detalhe_1", "(R034FUN CROSS JOIN R036DEP)", "");

@ Inner Join @
SubstituiFrom("Detalhe_1", "(R034FUN INNER JOIN R036DEP ON R034FUN.NUMEMP = R036DEP.NUMEMP)", "");

@ Left Outer Join @
SubstituiFrom("Detalhe_1", "(R034FUN LEFT OUTER JOIN R036DEP ON R034FUN.NUMEMP = R036DEP.NUMEMP AND R034FUN.NUMCAD = R036DEP.NUMCAD)", "");

@ Right Outer Join @
SubstituiFrom("Detalhe_1", "(R034FUN RIGHT OUTER JOIN R036DEP ON R034FUN.NUMEMP = R036DEP.NUMEMP AND R034FUN.NUMCAD = R036DEP.NUMCAD)", "");

@ Natural Inner Join @
SubstituiFrom("Detalhe_1", "(R034FUN NATURAL INNER JOIN R036DEP ON R034FUN.NUMEMP = R036DEP.NUMEMP)", "");

@ Keyed Join @
SubstituiFrom("Detalhe_1", "(R034FUN KEYED INNER JOIN R030EMP)", "");
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/substituifrom.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
