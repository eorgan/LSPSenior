# CriaView

## Assinatura

```lspt
Funcao CriaView (Alfa SQL, Alfa End NomeView);
```

## Código
N/A

## Descrição

Esta função cria uma **View temporária** no banco para otimizar a execução do relatório, respeitando as abrangências definidas para as tabelas presentes no comando **SQL** da **View**, semelhante ao comportamento do **Gerador de Relatórios**. Caso não seja possível criar a **View**, será exibido um erro informando que houveram problemas na operação. Após o término da execução do relatório, todas as Views criadas temporariamente serão excluídas automaticamente do banco.

## Parâmetros

- **SQL** (`Alfa`) - Entrada: SQL contendo todo o código (**SELECT**) da View a ser criada. Este comando deve ser no formato SQLSenior2.
- **NomeView** (`Alfa End`) - Saída: Retorna o nome temporário da View que foi criada.

## Exemplo de Uso

```lspt
Definir Alfa xSql2;
xSql2 =
"SELECT NUMEMP, TIPCOL, NUMCAD, SUM(PROVEN) PROVEN, SUM(DESCON)
 DESCON FROM R034FUN GROUP BY NUMEMP, TIPCOL, NUMCAD"
;
Definir Alfa xNomeView2;
CriaView (xSql2, xNomeView2);
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
