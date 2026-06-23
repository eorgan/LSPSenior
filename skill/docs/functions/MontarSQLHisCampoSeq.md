# MontarSQLHisCampoSeq

## Assinatura

```lspt
Funcao MontarSQLHisCampoSeq(Alfa Tabela, Alfa Campo, Alfa End SQLMontado);
```

## Código
N/A

## Descrição

Monta o comando SQL para consulta em tabelas de histórico que possuem sequência.

## Parâmetros

- **Tabela** (`Alfa`) - Entrada: Nome da tabela
- **Campo** (`Alfa`) - Entrada: Nome do campo da tabela
- **SQLMontado** (`Alfa End`) - Saída: Retorno da função (cláusula SQL)

## Exemplo de Uso

```lspt
Definir Alfa xauxsql;
MontarSQLHisCampoSeq("R038HSA", "DatAlt", xauxsql);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/montarsqlhiscamposeq.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
