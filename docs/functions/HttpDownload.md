# HttpDownload

## Assinatura

```lspt
Funcao HttpDownload(Alfa Objeto, Alfa URL, Alfa Arquivo);
```

## Código
N/A

## Descrição

Faz download de arquivos diretamente para o disco, sem carregar na memória. Ideal para arquivos grandes.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada: Objeto HTTP criado com HttpObjeto
- **URL** (`Alfa`) - Entrada: URL do arquivo para download
- **Arquivo** (`Alfa`) - Entrada: Caminho completo onde salvar o arquivo

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Numero vnStatus;
Definir Alfa vaCaminho;

HttpObjeto(vaHTTP);
HttpDesabilitaErroResposta(vaHTTP);

vaCaminho = "C:\\Downloads\\relatorio.pdf";
HttpDownload(vaHTTP, "https://exemplo.com/relatorio.pdf", vaCaminho);

HttpLeCodigoResposta(vaHTTP, vnStatus);
Se (vnStatus = 200) {
  Mensagem(Retorna, "Download concluído: " + vaCaminho);
} Senao {
  Mensagem(Erro, "Erro no download. Status: " + vnStatus);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httpdownload.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
