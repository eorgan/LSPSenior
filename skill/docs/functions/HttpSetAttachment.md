# HttpSetAttachment

## Assinatura

```lspt
Funcao HttpSetAttachment(Alfa end Objeto, Alfa CaminhoArquivo);
```

## Código
N/A

## Descrição

Permite o envio de arquivos locais no corpo de uma requisição HTTP. Disponível para os métodos POST, PUT e PATCH.

## Parâmetros

- **Objeto** (`Alfa end`) - Saída: Objeto HTTP criado com HttpObjeto
- **CaminhoArquivo** (`Alfa`) - Entrada: Caminho completo do arquivo local a ser anexado

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;

HttpObjeto(vaHTTP);

@ Para múltiplos arquivos, fazer requisições separadas @
HttpSetAttachment(vaHTTP, "C:\\docs\\relatorio.pdf");
HttpPost(vaHTTP, "https://api.exemplo.com/upload", "", vaResposta);

HttpSetAttachment(vaHTTP, "C:\\docs\\planilha.xlsx");
HttpPost(vaHTTP, "https://api.exemplo.com/upload", "", vaResposta);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httpsetattachment.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
