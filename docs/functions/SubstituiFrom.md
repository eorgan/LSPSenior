# SubstituiFrom

## Assinatura

```lspt
Funcao SubstituiFrom (Alfa SectionName, Alfa NovaClausula, Alfa TabelaSubstituida);
```

## Código
N/A

## Descrição

Esta função substitui uma cláusula FROM no SELECT da seção passada como parâmetro. A substituição pode ser parcial, se o parâmetro TabelaSubstituída for passado ou total, se o mesmo for omitido. Para usar esta função, é preciso desativar os relacionamentos automáticos que são feitos cada vez que uma nova tabela é adicionada a seção. Na propriedade Relacionamento da seção detalhe, onde são mostrados todos os relacionamentos automáticos, selecione-os e utilize a opção **Sem Conexão**. A função permite que apenas um Join seja informado no parâmetro NovaClausula. Junções Suportadas: - **CROSS JOIN** (Produto Cartesiano); - **INNER JOIN** (Junção); - **LEFT OUTER JOIN** (Junção Externa a Direita); - **RIGHT OUTER JOIN** (Junção Externa a Esquerda); - **NATURAL JOIN** (Junção Natural); - **KEYED JOIN** (Junção por Chave).

## Parâmetros

- **SectionName** (`Alfa`) - Entrada: Nome da seção onde será substituída o **FROM** no SQL
- **NovaClausula** (`Alfa`) - Entrada: Cláusula que irá substituir o **FROM** atual total ou parcialmente
- **TabelaSubstituida** (`Alfa`) - Entrada

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SubstituiFrom();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/substituifrom.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
