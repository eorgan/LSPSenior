# HttpLeCodigoResposta

## Assinatura

```lspt
Funcao HttpLeCodigoResposta(Alfa end Objeto, numero end Codigo);
```

## Código
N/A

## Descrição

Consulta o código de resposta de uma requisição enviada ao servidor. Está disponível para todos os verbos HTTP (GET, POST, PUT, PATCH e DELETE). O código apenas fica disponível após a execução e retorno de uma requisição HTTP.

## Parâmetros

- **Objeto** (`Alfa end`) - Saída: Indica o objeto HTTP do o código de retorno será obtido.
- **Codigo** (`numero end`) - Saída: Parâmetro que irá receber o código de retorno da última operação realizada.

## Exemplo de Uso

```lspt
definir alfa vHTTP;
definir alfa vHTML;
definir numero vCodigo;
HttpObjeto(vHTTP);
HttpDesabilitaErroResposta(vHTTP);
HttpGet(vHTTP,
"http://exemplo.com/app/path"
, vHTML);
HttpLeCodigoResposta(vHTTP, vCodigo);
se (vCodigo = 401) {
Mensagem(Retorna,
"Não autorizado"
);
} senao se (vCodigo = 404) {
Mensagem(Retorna,
"Não encontrado"
);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/http-le-codigo-resposta.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
