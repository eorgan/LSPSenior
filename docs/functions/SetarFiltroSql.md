# SetarFiltroSql

## Assinatura

```lspt
Funcao SetarFiltroSql(Alfa aTabela, Alfa aCampo, Alfa aFiltro);
```

## Código
642

## Descrição

Define um filtro sql, personalizado pelo cliente, em tabelas do sistema ou de usuário.

## Parâmetros

- **aTabela** (`Alfa`) - Entrada: Nome da tabela onde o filtro será definido.
- **aCampo** (`Alfa`) - Entrada: Nome do campo da tabela onde o filtro será definido.
- **aFiltro** (`Alfa`) - Entrada: Filtro sql que deverá ser definido no campo, ou vazio ("") para limpar o filtro do campo.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SetarFiltroSql();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
