# HttpAlteraConfiguracaoProxy

## Assinatura

```lspt
Funcao HttpAlteraConfiguracaoProxy(Alfa Objeto, Numero UsarProxy, Alfa Servidor, Numero Porta, Numero AutPorUsu);
```

## Código
N/A

## Descrição

Configura as definições de servidor proxy para as requisições.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada: 0 = Não usar, 1 = Usar proxy
- **UsarProxy** (`Numero`) - Entrada: 0 = Não usar, 1 = Usar proxy
- **Servidor** (`Alfa`) - Entrada: Endereço do servidor proxy
- **Porta** (`Numero`) - Entrada: Porta do servidor proxy
- **AutPorUsu** (`Numero`) - Entrada: 0 = Sem autenticação, 1 = Com autenticação

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;

HttpObjeto(vaHTTP);

@ Configurar proxy corporativo @
HttpAlteraConfiguracaoProxy(vaHTTP, 1, "proxy.empresa.com.br", 8080, 1);

HttpGet(vaHTTP, "https://api.externa.com/dados", vaResposta);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httpalteraconfiguracaoproxy.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
