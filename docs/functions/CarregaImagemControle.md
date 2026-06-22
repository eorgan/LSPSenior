# CarregaImagemControle

## Assinatura

```lspt
Funcao CarregaImagemControle (Alfa NomeDoControle, Numero ArquivoOuBanco, Alfa CaminhoOuCampo, Alfa SQL);
```

## Código
N/A

## Descrição

Carrega uma imagem do tipo .BMP ou .JPG a partir de um arquivo ou banco de dados.

## Parâmetros

- **NomeDoControle** (`Alfa`) - Entrada: Nome do controle do modelo ao qual se quer carregar a imagem
- **ArquivoOuBanco** (`Numero`) - Entrada: 0 para carregar a partir de arquivo ou 1 para carregar do banco de dados
- **CaminhoOuCampo** (`Alfa`) - Entrada: Caminho do arquivo ou TABELA.CAMPO (se do banco)
- **SQL** (`Alfa`) - Entrada: Condição WHERE para busca da imagem no banco (somente se ArquivoOuBanco = 1)

## Exemplo de Uso

```lspt
@ Carregando a partir de um endereço @
CarregaImagemControle("Imagem001", 0, "c:\\ICO.ICO", "");
CarregaImagemControle("Imagem002", 0, "\\\\Micro01\\temp\\JPG.JPG", "");

@ Carregando do banco @
CarregaImagemControle("Imagem001", 1, "R034FOT.FotEmp", "NUMCAD = 321");

@ Carregando dinamicamente @
Definir Alfa VEndFot;
VEndFot = E075FOT.EndFot;
EstaNulo(VEndFot, VRet);
Se (VRet = 0) {
  @ Se estiver gravado apenas o caminho da imagem no banco @
  CarregaImagemControle("Imagem001", 0, VEndFot, "");
} Senao {
  @ Se a imagem estiver gravada no banco @
  CarregaImagemControle("Imagem001", 1, "E075FOT.ImgFot", "");
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/carregaimagemcontrole.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
