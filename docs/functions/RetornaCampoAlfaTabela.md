# RetornaCampoAlfaTabela

## Assinatura

```lspt
Funcao RetornaCampoAlfaTabela (Alfa NomeCampo, Alfa NomeTabelaView, Alfa OpcionalWhere, Alfa End pRetorno, Numero End pAchou);
```

## Código
N/A

## Descrição

Esta função busca o conteúdo atual de um campo alfanumérico de uma **VIEW** temporária.

## Parâmetros

- **NomeCampo** (`Alfa`) - Entrada: Nome do campo da **View** e ser retornado
- **NomeTabelaView** (`Alfa`) - Entrada: Nome da **View** temporária
- **OpcionalWhere** (`Alfa`) - Entrada: Cláusula **WHERE** de filtro (opcional)
- **pRetorno** (`Alfa End`) - Saída: Variável onde o conteúdo buscado será retornado
- **pAchou** (`Numero End`) - Saída: Variável que retorna **0** (**zero**) caso tenha encontrado resultados, ou **1** caso não tenha encontrado

## Exemplo de Uso

```lspt
			Definir Alfa xNomeView;
			Definir Alfa xRetorno;
			Definir Numero xAchou;
			Definir Alfa xSQL;
			xSQL = "SELECT UPPER(NOMFUN) NOMMAISC FROM R034FUN WHERE NUMCAD = 1";
			CriaView (xSQL, xNomeView);
			RetornaCampoAlfaTabela ("NOMMAISC", xNomeView, "", xRetorno, xAchou);
			Se (xAchou = 0)
			{
			   ValStr = xRetorno;
			}
			Senao
			{
			   ValStr = "";
			   Cancel(2);
			}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/retornacampoalfatabela.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
