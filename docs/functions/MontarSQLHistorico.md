# MontarSQLHistorico

## Assinatura

```lspt
Funcao MontarSQLHistorico("Tabela", Data, xretorno);
```

## Código
N/A

## Descrição

Esta função monta o comando SQL para uso com os históricos do sistema, com base em uma data.

## Parâmetros

- **"Tabela"** - Entrada: Nome da tabela
- **Data** - Entrada: Data do histórico
- **xretorno** - Entrada: Variável alfanumérica que conterá o SQL montado

## Exemplo de Uso

```lspt
Definir alfa xdatref;
Definir alfa auxsql;
Definir data EDatRef;
EDatRef = FimCmp;
ConverteDataBanco(EDatREf, xdatref);
@ Relacionamento Histórico de Local @
auxsql = " ";
MontarSqlHistorico ("R038HLO", EDatRef, auxsql);
InsClauSqlWhere("Detalhe_Aposentados", auxsql);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/montarsqlhistorico.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
