# HttpHabilitaErroResposta

## Assinatura

```lspt
Funcao HttpHabilitaErroResposta(Alfa end Objeto);
```

## Código
N/A

## Descrição

Habilita a geração automática de erros de execução. Estes erros são gerados quando a resposta do servidor não for os códigos 200 ou 204. Ou seja, caso uma requisição retorne um código diferente destes, o sistema irá gerar uma mensagem de erro e a execução da regra será cancelada. A mensagem de erro será apresentada ao usuário ou armazenada no log.

## Parâmetros

- **Objeto** (`Alfa end`) - Saída: Indica o objeto HTTP no qual a configuração será aplicada.

## Exemplo de Uso

```lspt
definir alfa vHTTP;
definir alfa vHTML;
HttpObjeto(vHTTP);
HttpHabilitaErroResposta(vHTTP);
HttpGet(vHTTP,
"http://exemplo.com/app/path"
, vHTML);
/* Caso o servidor retorne algum código de erro, esta linha não será executada */
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/http-habilita-erro-resposta.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
