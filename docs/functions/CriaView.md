# CriaView

## Assinatura

```lspt
Funcao CriaView (Alfa SQL, Alfa End NomeView);
```

## Código
N/A

## Descrição

Cria uma View temporária no banco para otimizar a execução do relatório.

## Parâmetros

- **SQL** (`Alfa`) - Entrada: SQL contendo todo o código (SELECT) da View a ser criada (formato SQLSenior2)
- **NomeView** (`Alfa End`) - Saída: Retorna o nome temporário da View que foi criada

## Exemplo de Uso

```lspt
Definir Alfa xSql2;
Definir Alfa xNomeView2;

xSql2 = "SELECT NUMEMP, TIPCOL, NUMCAD, SUM(PROVEN) PROVEN, SUM(DESCON) DESCON FROM R034FUN GROUP BY NUMEMP, TIPCOL, NUMCAD";
CriaView(xSql2, xNomeView2);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/criaview.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
