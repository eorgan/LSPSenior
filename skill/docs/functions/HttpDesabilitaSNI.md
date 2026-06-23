# HttpDesabilitaSNI

## Assinatura

```lspt
Funcao HttpDesabilitaSNI(Alfa Objeto);
```

## Código
N/A

## Descrição

Controla o envio do nome do servidor na requisição HTTPS.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaResposta;

HttpObjeto(vaHTTP);

@ Habilitar SNI para sites que exigem @
HttpHabilitaSNI(vaHTTP);

HttpGet(vaHTTP, "https://www.google.com.br/", vaResposta);

@ O nome "google.com.br" será enviado na requisição @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/http-desabilita-sni.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
