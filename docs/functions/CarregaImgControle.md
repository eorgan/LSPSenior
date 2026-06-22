# CarregaImgControle

## Assinatura

```lspt
Funcao CarregaImgControle(Alfa NomeDoControleImagem, Numero Arquivo0Banco1Variavel2, Alfa CaminhoCampoNome, Alfa SQL, Numero SqlSenior2);
```

## Código
N/A

## Descrição

Carrega uma imagem do banco, arquivo ou variável para um controle imagem do modelo.

## Parâmetros

- **NomeDoControleImagem** (`Alfa`) - Entrada: Nome do controle imagem do modelo
- **Arquivo0Banco1Variavel2** (`Numero`) - Entrada: Caminho do arquivo, tabela.campo ou nome da variável
- **CaminhoCampoNome** (`Alfa`) - Entrada: Caminho do arquivo, tabela.campo ou nome da variável
- **SQL** (`Alfa`) - Entrada: Cláusula WHERE para busca da imagem da tabela
- **SqlSenior2** (`Numero`) - Entrada: 0 para SQL Senior 1, 1 para SQL Senior 2

## Exemplo de Uso

```lspt
@ Imagem BMP a partir de um arquivo @
CarregaImgControle("Imagem001", 0, "C:\\temp\\Teste.BMP", "", 0);

@ Imagem a partir do banco @
Definir Alfa xSQL;
Definir Alfa P1, P2, P3, D1;
IntParaAlfa(R034FOT.NUMEMP, P1);
IntParaAlfa(R034FOT.TIPCOL, P2);
IntParaAlfa(R034FOT.NUMCAD, P3);
ConverteDataBanco(R034FOT.DATFOT, D1);
xSQL = "R034FOT.NUMEMP = " + P1 + " AND R034FOT.TIPCOL = " + P2 + " AND R034FOT.NUMCAD = " + P3 + " AND R034FOT.DATFOT = " + D1;
CarregaImgControle("Imagem002", 1, "R034FOT.FotEmp", xSQL, 1);

@ Imagem ICO a partir de uma variável @
CarregaImgControle("Imagem002", 2, "ImgICOGerador", "", 0);

@ Imagem EMF a partir de uma variável @
CarregaImgControle("Imagem003", 2, "ImgEMFGerador", "", 0);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/carregaimgcontrole.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
