# DeleteFieldSQL

## Assinatura

```lspt
Funcao DeleteFieldSQL (Alfa SectionName, Alfa TableFieldName);
```

## Código
N/A

## Descrição

Esta função retira um campo do SELECT da seção passada como parâmetro. No gerador para facilitar na confecção e execução da maioria dos modelos, os campos chaves de todas as tabelas utilizadas nos relacionamentos das detalhes são adicionados no SELECT automaticamente. Entretanto, para utilizar funções de agrupamento (GROUP BY) e outros tipos de relacionamentos, algumas vezes estes campos não são necessários ou não devem ser inseridos automaticamente. Para isto basta chamar esta função passando quais campos que não se deseja que sejam adicionados automaticamente.

## Parâmetros

- **SectionName** (`Alfa`) - Entrada: Nome da seção que contém o SELECT onde o campo será excluído
- **TableFieldName** (`Alfa`) - Entrada: Campo a ser excluído, sua descrição deve ser igual a que é feita pelo gerador, no padrão **TABELA.CAMPO**

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
DeleteFieldSQL();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/deletefieldsql.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
