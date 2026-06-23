# SQL_AbrirCursor

## Assinatura

```lspt
Funcao SQL_AbrirCursor(Alfa Cursor);
```

## Código
N/A

## Descrição

Executa o comando definido e abre o cursor, posicionando-o no primeiro registro do resultado. Após abrir, itere com SQL_EOF/SQL_Proximo e leia campos com as funções SQL_Retornar*.

## Parâmetros

- **Cursor** (`Alfa`) - Entrada: Identificador do cursor com comando já definido.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SQL_AbrirCursor();
```

## Fonte

Documentação oficial Senior — https://documentacao.senior.com.br

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
