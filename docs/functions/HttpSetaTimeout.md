# HttpSetaTimeout

## Assinatura

```lspt
Funcao HttpSetaTimeout(Alfa Objeto, Numero Timeout);
```

## Código
N/A

## Descrição

Define um timeout (tempo limite) para requisições HTTP. Evita travamentos em requisições lentas.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada: Objeto HTTP criado com HttpObjeto
- **Timeout** (`Numero`) - Entrada: Tempo limite em segundos

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;

HttpObjeto(vaHTTP);

@ Para APIs rápidas - timeout baixo @
HttpSetaTimeout(vaHTTP, 10);
HttpGet(vaHTTP, "https://api-rapida.exemplo.com/dados", vaResposta);

@ Para APIs lentas - timeout maior @
HttpSetaTimeout(vaHTTP, 120);
HttpGet(vaHTTP, "https://api-lenta.exemplo.com/relatorio", vaResposta);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httpsetatimeout.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
