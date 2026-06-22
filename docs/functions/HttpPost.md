# HttpPost

## Assinatura

```lspt
Funcao HttpPost(Alfa Objeto, Alfa URL, Alfa Dados, Alfa end HTML);
```

## Código
N/A

## Descrição

Executa uma requisição HTTP POST para enviar dados ao servidor. Utilizado para criação de recursos, envio de formulários e dados em geral.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada: Objeto HTTP criado com HttpObjeto
- **URL** (`Alfa`) - Entrada: URL do endpoint
- **Dados** (`Alfa`) - Entrada: Dados a serem enviados no corpo da requisição
- **HTML** (`Alfa end`) - Saída: Variável que receberá a resposta

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;
Definir Alfa vaDados;
Definir Alfa vaToken;

HttpObjeto(vaHTTP);

@ Configurar autenticação @
vaToken = "Bearer seu_token_aqui";
HttpAlteraCabecalhoRequisicao(vaHTTP, "Authorization", vaToken);
HttpAlteraCabecalhoRequisicao(vaHTTP, "Content-Type", "application/json");

vaDados = "{\"nome\": \"João\", \"email\": \"joao@exemplo.com\"}";
HttpPost(vaHTTP, "https://api.exemplo.com/usuarios", vaDados, vaResposta);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httppost.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
