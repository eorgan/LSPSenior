# FormatarData

## Assinatura

```lspt
Funcao FormatarData(Numero Data, Alfa Formato, Alfa end DataFormatada);
```

## Código
N/A

## Descrição

Formata a data em milissegundos gerada pela função [DataHora](datahora.md).

## Parâmetros

- **Data** (`Numero`) - Entrada: Valor da data.
- **Formato** (`Alfa`) - Entrada: Formato do data.
- **DataFormatada** (`Alfa end`) - Saída: Recebe a data formatada.

## Exemplo de Uso

```lspt
FormatarData(xDataHora,
"yyyy-MM-dd'T'HH:mm:ss'Z'"
, xCreatedTime);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
