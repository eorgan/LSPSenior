# HttpAlteraCodifCaracPadrao

## Assinatura

```lspt
Funcao HttpAlteraCodifCaracPadrao(Alfa end Objeto, alfa Codificacao);
```

## Código
N/A

## Descrição

Configura a codificação de caracteres para respostas do servidor quando não especificada.

## Parâmetros

- **Objeto** (`Alfa end`) - Saída: Objeto HTTP criado com HttpObjeto
- **Codificacao** (`alfa`) - Entrada: Nome da codificação (UTF-8, ISO-8859-1, Windows-1252)

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;

HttpObjeto(vaHTTP);

@ Configurar para UTF-8 @
HttpAlteraCodifCaracPadrao(vaHTTP, "utf-8");

HttpGet(vaHTTP, "https://api.exemplo.com/dados", vaResposta);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/http-altera-codif-carac-padrao.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
