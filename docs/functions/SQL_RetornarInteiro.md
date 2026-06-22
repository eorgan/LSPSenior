# SQL_RetornarInteiro

## Assinatura

```lspt
Funcao SQL_RetornarInteiro(Alfa Cursor, Alfa Campo, Numero end Valor);
```

## Código
N/A

## Descrição

Lê o valor de um campo inteiro no registro corrente do cursor, devolvendo-o no parâmetro de saída. Não use variáveis de parâmetro (prefixo 'p') no destino — use variável local.

## Parâmetros

- **Cursor** (`Alfa`) - Entrada: Identificador do cursor aberto.
- **Campo** (`Alfa`) - Entrada: Nome (alias) do campo no SELECT.
- **Valor** (`Numero end`) - Saída: Variável Numero que recebe o valor inteiro lido (saída).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SQL_RetornarInteiro();
```

## Fonte

Documentação oficial Senior — https://documentacao.senior.com.br

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
