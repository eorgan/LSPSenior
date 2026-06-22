# CarregaImgVetorialControle

## Assinatura

```lspt
Funcao CarregaImgVetorialControle(Alfa NomeDoControleImagem, Alfa Caminho, Numero Xms, Numero Xmx);
```

## Código
N/A

## Descrição

Carrega uma imagem DXF a partir de um arquivo para o controle Imagem e ImagemVetorial do modelo.

## Parâmetros

- **NomeDoControleImagem** (`Alfa`) - Entrada: Nome do controle imagem do modelo
- **Caminho** (`Alfa`) - Entrada: Caminho físico do arquivo (local ou na rede)
- **Xms** (`Numero`) - Entrada: Tamanho em MB da heap mínimo Java (0 para valores padrões)
- **Xmx** (`Numero`) - Entrada: Tamanho máximo em MB da heap Java (0 para valores padrões)

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
