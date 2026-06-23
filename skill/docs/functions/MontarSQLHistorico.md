# MontarSQLHistorico

## Assinatura

```lspt
Funcao MontarSQLHistorico("Tabela", Data, xretorno);
```

## Código
N/A

## Descrição

Monta o comando SQL para uso com os históricos do sistema, com base em uma data.

## Parâmetros

- **"Tabela"** - Entrada: Nome da tabela
- **Data** - Entrada: Data do histórico
- **xretorno** - Entrada: Variável alfanumérica que conterá o SQL montado

## Exemplo de Uso

```lspt
Definir Alfa xdatref;
Definir Alfa auxsql;
Definir Data EDatRef;

EDatRef = FimCmp;
ConverteDataBanco(EDatRef, xdatref);

@ Relacionamento Histórico de Local @
auxsql = " ";
MontarSQLHistorico("R038HLO", EDatRef, auxsql);
InsClauSQLWhere("Detalhe_Aposentados", auxsql);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/montarsqlhistorico.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
