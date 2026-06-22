# HttpLeCabecalhoResposta

## Assinatura

```lspt
Funcao HttpLeCabecalhoResposta(Alfa end Objeto, Alfa Nome, Alfa end Valor);
```

## Código
N/A

## Descrição

Obtém valores de cabeçalhos retornados pelo servidor após uma requisição.

## Parâmetros

- **Objeto** (`Alfa end`) - Saída: Objeto HTTP após uma requisição
- **Nome** (`Alfa`) - Entrada: Nome do cabeçalho a consultar
- **Valor** (`Alfa end`) - Saída: Variável que receberá o valor (vazio se não existir)

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;
Definir Alfa vaContentType;
Definir Alfa vaContentLength;
Definir Alfa vaServer;

HttpObjeto(vaHTTP);

HttpGet(vaHTTP, "https://exemplo.com/api/dados", vaResposta);

@ Ler cabeçalhos de resposta @
HttpLeCabecalhoResposta(vaHTTP, "Content-Type", vaContentType);
HttpLeCabecalhoResposta(vaHTTP, "Content-Length", vaContentLength);
HttpLeCabecalhoResposta(vaHTTP, "Server", vaServer);

Mensagem(Retorna, "Tipo: " + vaContentType + ", Tamanho: " + vaContentLength);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/http-le-cabecalho-resposta.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
