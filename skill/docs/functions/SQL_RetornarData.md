# SQL_RetornarData

## Assinatura

```lspt
Funcao SQL_RetornarData(Alfa Cursor, Alfa Campo, Data end Valor);
```

## Código
N/A

## Descrição

Lê o valor de um campo de data no registro corrente do cursor, devolvendo-o no parâmetro de saída.

## Parâmetros

- **Cursor** (`Alfa`) - Entrada: Identificador do cursor aberto.
- **Campo** (`Alfa`) - Entrada: Nome (alias) do campo no SELECT.
- **Valor** (`Data end`) - Saída: Variável Data que recebe a data lida (saída).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SQL_RetornarData();
```

## Fonte

Documentação oficial Senior — https://documentacao.senior.com.br

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
