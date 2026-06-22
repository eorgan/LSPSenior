# HttpDesabilitarCookies

## Assinatura

```lspt
Funcao HttpDesabilitarCookies(Alfa end Objeto);
```

## Código
N/A

## Descrição

Desabilita o recurso de manter os cookies ao utilizar requisições HTTP em regras LSP.

## Parâmetros

- **Objeto** (`Alfa end`) - Saída: Objeto HTTP criado por HttpObjeto no qual a configuração será aplicada.

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;

HttpObjeto(vaHTTP);

@ Habilitar cookies para manter sessão @
HttpHabilitarCookies(vaHTTP);

@ Fazer login @
HttpPost(vaHTTP, "https://app.exemplo.com/login", "user=admin&pass=123", vaResposta);

@ Os cookies de sessão serão enviados automaticamente @
HttpGet(vaHTTP, "https://app.exemplo.com/dashboard", vaResposta);

@ Desabilitar cookies se necessário @
HttpDesabilitarCookies(vaHTTP);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/http-desabilita-cookies.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
