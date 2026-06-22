# HttpDesabilitaErroResposta

## Assinatura

```lspt
Funcao HttpDesabilitaErroResposta(Alfa end Objeto);
```

## Código
N/A

## Descrição

Desabilita a geração automática de erros de execução. Após esta chamada, nenhum erro será gerado caso a resposta do servidor seja diferente de 200 ou 204. Nas situações de erro, em que o servidor retorna um código diferente, o usuário deverá realizar o tratamento apropriado. Para consultar o código de retorna do servidor, deve-se utilizar a função HttpLeCodigoResposta.

## Parâmetros

- **Objeto** (`Alfa end`) - Saída: Indica o objeto HTTP no qual a configuração será aplicada.

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
/* Se algum erro for retornado pelo servidor, a regra continua a ser executada normalmente */
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/http-desabilita-erro-resposta.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
