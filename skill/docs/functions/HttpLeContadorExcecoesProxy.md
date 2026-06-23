# HttpLeContadorExcecoesProxy

## Assinatura

```lspt
Funcao HttpLeContadorExcecoesProxy(Alfa Objeto, Numero end Quantidade);
```

## Código
N/A

## Descrição

Neste contexto, exceções de *proxy* são endereços (URLs) que podem ser acessadas sem passar pelo servidor *proxy*. Estes endereços podem ser cadastrados na lista Não utilizar proxy para os endereços iniciados com da tela de configurações, a qual também pode ser manipulada na regra. Retorna a quantidade de exceções cadastradas no objeto HTTP utilizado. Ela pode ser usada em conjunto com as funções [HttpLimpaExcecoesProxy](#HttpLimpaExcecoesProxy), [HttpLeExcecaoProxy](#HttpLeExcecaoProxy), [HttpAdicionaExcecaoProxy](#HttpAdicionaExcecaoProxy) e [HttpExcluiExcecaoProxy](#HttpExcluiExcecaoProxy) para manipular a lista de acordo com o necessário.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada
- **Quantidade** (`Numero end`) - Saída

## Exemplo de Uso

```lspt
Definir Alfa vHTTP;
HttpObjeto(vHTTP);

Deifnir Alfa vEndereco;
Definir Numero vCont;
Deifnir Numero vIndice = 0;

@ Lê a quantidade de exceções. @
HttpLeContadorExcecoesProxy(vHTTP, vCont);

@ Faz um laço em todas as exceções e mestra cada uma delas em uma mensagem. @
Enquanto (vIndice < xquantidade=
""
 )=
""
 {
HttpLeExcecaoProxy(vHTTP, vIndice, vEndereco);
Mensagem(Retorna, vEndereco);
vIndice = vIndice + 1;
}

@ Exclui todas as exceções da lista. @
HttpLimpaExcecoesProxy(vHTTP);

@ Adiciona algumas exceções. @
HttpAdicionaExcecaoProxy(vHTTP,
"localhost"
);
HttpAdicionaExcecaoProxy(vHTTP,
"127.0.0.1"
);
HttpAdicionaExcecaoProxy(vHTTP,
"123.4.5.67"
);
HttpAdicionaExcecaoProxy(vHTTP,
"10.0.30.25"
);
HttpAdicionaExcecaoProxy(vHTTP,
"www.senior.com.br"
);

@ Exclui a exceção do índice 2 - "123.4.5.67". @
HttpExcluiExcecaoProxy(vHTTP, 2);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httplecontadorexcecoesproxy.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
