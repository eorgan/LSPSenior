# HttpLeConfiguracaoSSL

## Assinatura

```lspt
Funcao HttpLeConfiguracaoSSL(Alfa Objeto, Numero end SSL);
```

## Código
N/A

## Descrição

Controla as configurações SSL/TLS para requisições HTTPS.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada
- **SSL** (`Numero end`) - Saída

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Numero vnSSL;

HttpObjeto(vaHTTP);

@ Sempre usar SSL @
HttpAlteraConfiguracaoSSL(vaHTTP, 2);

@ Verificar configuração @
HttpLeConfiguracaoSSL(vaHTTP, vnSSL);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httpleconfiguracaossl.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
