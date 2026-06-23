# SQL_EOF

## Assinatura

```lspt
Funcao SQL_EOF(Alfa Cursor);
```

## Código
N/A

## Descrição

Indica se o cursor chegou ao fim do resultado. Retorna 0 enquanto houver registro corrente e 1 quando não há mais registros. Use como condição do laço Enquanto (SQL_EOF(cursor) = 0).

## Parâmetros

- **Cursor** (`Alfa`) - Entrada: Identificador do cursor aberto.

## Valores de Retorno

- 0 = ainda há registro corrente.
- 1 = fim do resultado (sem mais registros).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SQL_EOF();
```

## Fonte

Documentação oficial Senior — https://documentacao.senior.com.br

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
