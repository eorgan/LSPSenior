# MontarSQLHisCampoSeq

## Assinatura

```lspt
Funcao MontarSQLHisCampoSeq(Alfa Tabela, Alfa Campo, Alfa End SQLMontado);
```

## Código
N/A

## Descrição

Esta função monta o comando SQL para consulta em tabelas de histórico que possuem sequência, com base no campo **Data** destas tabelas. Através do comando gerado, é retornado apenas uma ocorrência do histórico.

## Parâmetros

- **Tabela** (`Alfa`) - Entrada: Parâmetro alfa com o nome da tabela
- **Campo** (`Alfa`) - Entrada: Parâmetro alfa com o nome do campo da tabela
- **SQLMontado** (`Alfa End`) - Saída: Parâmetro alfa com o retorno da função (cláusula SQL)

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MontarSQLHisCampoSeq();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
