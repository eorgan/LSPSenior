# SQL_UsarSqlSenior2

## Assinatura

```lspt
Funcao SQL_UsarSqlSenior2(Alfa Cursor, Numero Tipo);
```

## Código
N/A

## Descrição

Define o dialeto SQL usado pelo cursor. Use 0 para SQL nativo do banco e 1 para SQL Senior (com tradução de nomes lógicos).

## Parâmetros

- **Cursor** (`Alfa`) - Entrada: Identificador do cursor criado por SQL_Criar.
- **Tipo** (`Numero`) - Entrada: 0 = SQL nativo do banco; 1 = SQL Senior.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SQL_UsarSqlSenior2();
```

## Fonte

Documentação oficial Senior — https://documentacao.senior.com.br

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
