# CarregaImgControle

## Assinatura

```lspt
Funcao CarregaImgControle(Alfa NomeDoControleImagem, Numero Arquivo0Banco1Variavel2, Alfa CaminhoCampoNome, Alfa SQL, Numero SqlSenior2);
```

## Código
N/A

## Descrição

Esta função carrega uma imagem do banco ou arquivo para um controle imagem do modelo.

## Parâmetros

- **NomeDoControleImagem** (`Alfa`) - Entrada: Variável alfa com o nome do controle imagem do modelo que carregará a imagem
- **Arquivo0Banco1Variavel2** (`Numero`) - Entrada: Variável numérica com o tipo de localização do arquivo.   - Se o valor for **0** (**zero**), carregará a imagem de   um arquivo passado em **CaminhoCampoNome**, por exemplo, **c:Fig.BMP**; - Se o valor for **1**, carregará a imagem do banco do campo passado em **CaminhoCampoNome**; - Se o valor for **2**, carregará a imagem de uma   variável de sistema passada em **CaminhoCampoNome** , esta variável deverá conter uma imagem **ICO**, **BMP** ou   **EMF** associada;
- **CaminhoCampoNome** (`Alfa`) - Entrada: Descrição do caminho do arquivo, do nome da tabela e campo, por exemplo, **R300CHR.FIGFUN**, através da cláusula **Where** passada em **SQL** ou nome da variável de sistema que contém a imagem a ser carregada, por exemplo, **ImgBMPGerador**
- **SQL** (`Alfa`) - Entrada: Cláusula **Where** para buscar a imagem da tabela
- **SqlSenior2** (`Numero`) - Entrada: Se for passado **0** (**zero**), o comando deverá ser passado em sintaxe **SQLSenior1**, e se for passado **1**, a sintaxe deverá obedecer ao padrão **SQLSenior2**

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CarregaImgControle();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
