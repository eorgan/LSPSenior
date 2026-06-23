# HttpAlteraCabecalhoRequisicao

## Assinatura

```lspt
Funcao HttpAlteraCabecalhoRequisicao(Alfa end Objeto, Alfa Nome, Alfa Valor);
```

## Código
N/A

## Descrição

Configura cabeçalhos HTTP personalizados para requisições. Válido para todos os métodos HTTP.

## Parâmetros

- **Objeto** (`Alfa end`) - Saída: Objeto HTTP criado com HttpObjeto
- **Nome** (`Alfa`) - Entrada: Nome do cabeçalho (não pode ser vazio)
- **Valor** (`Alfa`) - Entrada: Valor do cabeçalho (vazio remove o cabeçalho)

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;

HttpObjeto(vaHTTP);

HttpAlteraCabecalhoRequisicao(vaHTTP, "Accept", "text/plain");
HttpAlteraCabecalhoRequisicao(vaHTTP, "Content-Type", "application/json");
HttpAlteraCabecalhoRequisicao(vaHTTP, "Authorization", "Bearer token123");
HttpAlteraCabecalhoRequisicao(vaHTTP, "User-Agent", "MeuApp/1.0");

HttpPost(vaHTTP, "https://exemplo.com/app/path", "<dados>", vaResposta);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/http-altera-cabecalho-requisicao.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
