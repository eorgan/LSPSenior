# CarregaImgVetorialControle

## Assinatura

```lspt
Funcao CarregaImgVetorialControle(Alfa NomeDoControleImagem, Alfa Caminho, Numero Xms, Numero Xmx);
```

## Código
N/A

## Descrição

Esta função carrega uma imagem **DXF** a partir de um arquivo para o controle **Imagem** e **ImagemVetorial** do modelo. Esta função não suporta cor de fundo, o fundo sempre será Branco.

## Parâmetros

- **NomeDoControleImagem** (`Alfa`) - Entrada: Variável alfa com o nome do controle imagem do modelo que carregará a imagem
- **Caminho** (`Alfa`) - Entrada: Variável alfa com o caminho físico do arquivo (local ou na rede)
- **Xms** (`Numero`) - Entrada: Variável numérica que define o tamanho em MB da heap mínimo Java. Se for informado **0** (**zero**) usará os valores padrões
- **Xmx** (`Numero`) - Entrada: Variável numérica que define o tamanho máximo em MB da heap Java. Se for informado **0** (**zero**) usará os valores padrões

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CarregaImgVetorialControle();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/carregaimgvetorialcontrole.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
