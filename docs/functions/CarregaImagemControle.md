# CarregaImagemControle

## Assinatura

```lspt
Funcao CarregaImagemControle (Alfa NomeDoControle, Numero ArquivoOuBanco, Alfa CaminhoOuCampo, Alfa SQL);
```

## Código
N/A

## Descrição

Esta função somente aceita imagens do tipo .BMP ou .JPG. Carrega uma imagem qualquer a partir de um endereço, gravado no banco ou não ou ainda a partir de uma imagem gravada no banco.

## Parâmetros

- **NomeDoControle** (`Alfa`) - Entrada: Variável que recebe o nome do controle do modelo ao qual se quer carregar a imagem.
- **ArquivoOuBanco** (`Numero`) - Entrada: Variável que recebe 0 para carregar a imagem a partir de arquivo ou 1 para carregar do banco de dados.
- **CaminhoOuCampo** (`Alfa`) - Entrada: Variável que recebe o Caminho do arquivo(Imagem de Arquivo), ou a TABELA.CAMPO (Imagem do Banco).
- **SQL** (`Alfa`) - Entrada: Variável que recebe a condição que será inserida na clausula WHERE de busca da imagem no banco. (Somente usado se ArquivoOuBanco = 1).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CarregaImagemControle();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
