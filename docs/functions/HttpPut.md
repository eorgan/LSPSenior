# HttpPut

## Assinatura

```lspt
Funcao HttpPut(Alfa Objeto, Alfa URL, Alfa Dados, Alfa end HTML);
```

## Código
N/A

## Descrição

Executa uma requisição HTTP PUT para atualizar recursos existentes. Usado para modificar dados de um recurso específico.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada: Objeto HTTP criado com HttpObjeto
- **URL** (`Alfa`) - Entrada: URL do recurso a ser atualizado
- **Dados** (`Alfa`) - Entrada: Dados de atualização
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

@ Dados para atualização @
vaDados = "{\"nome\": \"João Silva\", \"status\": \"ativo\", \"email\": \"joao.silva@exemplo.com\"}";

HttpPut(vaHTTP, "https://api.exemplo.com/usuarios/123", vaDados, vaResposta);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/http-put.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
