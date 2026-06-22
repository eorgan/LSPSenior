# SQL_Criar

## Assinatura

```lspt
Funcao SQL_Criar(Alfa end Cursor);
```

## Código
N/A

## Descrição

Cria um objeto de cursor SQL e armazena seu identificador na variável informada. É o primeiro passo do ciclo de cursor; o identificador retornado é usado em todas as demais funções SQL_*.

## Parâmetros

- **Cursor** (`Alfa end`) - Saída: Variável Alfa que recebe o identificador do cursor criado (saída).

## Exemplo de Uso

```lspt
Definir Alfa vaSql;
Definir Alfa vaComando;
Definir Alfa vaNome;

vaComando = "SELECT NomFun FROM R034FUN WHERE NumCpf = '12345678900'";

SQL_Criar(vaSql);
SQL_UsarSqlSenior2(vaSql, 0);
SQL_UsarAbrangencia(vaSql, 0);
SQL_DefinirComando(vaSql, vaComando);
SQL_AbrirCursor(vaSql);
Enquanto (SQL_EOF(vaSql) = 0)
   {
      SQL_RetornarAlfa(vaSql, "NomFun", vaNome);
      SQL_Proximo(vaSql);
   }
SQL_FecharCursor(vaSql);
SQL_Destruir(vaSql);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/banco-de-dados/)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
