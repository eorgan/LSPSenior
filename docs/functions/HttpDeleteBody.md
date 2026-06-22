# HttpDeleteBody

## Assinatura

```lspt
Funcao HttpDeleteBody(Alfa Objeto, Alfa URL, Alfa Dados, Alfa end HTML);
```

## Código
N/A

## Descrição

Executa uma requisição HTTP DELETE com dados no corpo da mensagem. Útil para exclusões em lote ou com parâmetros específicos.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada: Objeto HTTP criado com HttpObjeto
- **URL** (`Alfa`) - Entrada: URL do endpoint
- **Dados** (`Alfa`) - Entrada: Dados a serem enviados no corpo
- **HTML** (`Alfa end`) - Saída: Variável que receberá a resposta

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;
Definir Alfa vaDados;

HttpObjeto(vaHTTP);

@ Configurar cabeçalhos @
HttpAlteraCabecalhoRequisicao(vaHTTP, "Content-Type", "application/json");
HttpAlteraCabecalhoRequisicao(vaHTTP, "Authorization", "Bearer token123");

@ Lista de IDs para exclusão em lote @
vaDados = "[{\"id\": \"123\"}, {\"id\": \"456\"}, {\"id\": \"789\"}]";

HttpDeleteBody(vaHTTP, "https://api.exemplo.com/usuarios/lote", vaDados, vaResposta);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httpdeletebody.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
