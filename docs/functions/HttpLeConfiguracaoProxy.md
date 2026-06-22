# HttpLeConfiguracaoProxy

## Assinatura

```lspt
Funcao HttpLeConfiguracaoProxy(Alfa Objeto, Numero end UsarProxy, Alfa end Servidor, Numero end Porta, Numero end AutPorUsu);
```

## Código
N/A

## Descrição

Lê as configurações atuais de proxy do objeto HTTP.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada
- **UsarProxy** (`Numero end`) - Saída
- **Servidor** (`Alfa end`) - Saída
- **Porta** (`Numero end`) - Saída
- **AutPorUsu** (`Numero end`) - Saída

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Numero vnUsarProxy;
Definir Alfa vaServidor;
Definir Numero vnPorta;
Definir Numero vnAutPorUsu;

HttpObjeto(vaHTTP);

HttpLeConfiguracaoProxy(vaHTTP, vnUsarProxy, vaServidor, vnPorta, vnAutPorUsu);

Se (vnUsarProxy = 1) {
  Mensagem(Retorna, "Proxy: " + vaServidor + ":" + vnPorta);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httpleconfiguracaoproxy.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
