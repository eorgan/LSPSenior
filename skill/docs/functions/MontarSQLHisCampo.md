# MontarSQLHisCampo

## Assinatura

```lspt
Funcao MontarSQLHisCampo (Alfa NomeTabela, Alfa CampoTabela, Alfa End SQLMontado);
```

## Código
N/A

## Descrição

Monta o comando SQL para consulta em tabelas de histórico que não possuem sequência.

## Parâmetros

- **NomeTabela** (`Alfa`) - Entrada: Nome da tabela
- **CampoTabela** (`Alfa`) - Entrada: Nome do campo da tabela
- **SQLMontado** (`Alfa End`) - Saída: Retorno da função (cláusula SQL)

## Exemplo de Uso

```lspt
Definir Alfa xauxsql;
MontarSQLHisCampo("R038HLO", "DatAlt", xauxsql);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/montarsqlhiscampo.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
