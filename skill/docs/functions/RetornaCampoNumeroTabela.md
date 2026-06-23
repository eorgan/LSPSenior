# RetornaCampoNumeroTabela

## Assinatura

```lspt
Funcao RetornaCampoNumeroTabela (Alfa NomeCampo, Alfa NomeTabelaView, Alfa OpcionalWhere, Numero End pRetorno, Numero End pAchou);
```

## Código
N/A

## Descrição

Busca o conteúdo atual de um campo numérico de uma VIEW temporária.

## Parâmetros

- **NomeCampo** (`Alfa`) - Entrada: Nome do campo da View a ser retornado
- **NomeTabelaView** (`Alfa`) - Entrada: Nome da View temporária
- **OpcionalWhere** (`Alfa`) - Entrada: Cláusula WHERE de filtro (opcional)
- **pRetorno** (`Numero End`) - Saída: Variável onde o conteúdo buscado será retornado
- **pAchou** (`Numero End`) - Saída: Retorna 0 caso tenha encontrado resultados, ou 1 caso não tenha encontrado

## Exemplo de Uso

```lspt
Definir Alfa xNomeView;
Definir Numero xRetorno;
Definir Numero xAchou;
Definir Alfa xSQL;

xSQL = "SELECT NUMEMP, TIPCOL, SUM(VALSAL) VALORSAL FROM R034FUN GROUP BY NUMEMP, TIPCOL";
CriaView(xSQL, xNomeView);
RetornaCampoNumeroTabela("VALORSAL", xNomeView, "NUMEMP = 1 and TIPCOL = 1", xRetorno, xAchou);

Se (xAchou = 0) {
  Formula001 = xRetorno;
} Senao {
  Formula001 = 0;
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/retornacamponumerotabela.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
