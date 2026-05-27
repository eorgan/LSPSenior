# SapiensSIDEx

## Assinatura

```lspt
Funcao SapiensSIDEx(alfa URL, alfa PostQuery, alfa ProxyUserName, alfa ProxyPassword, alfa Headers, alfa End Retorno);
```

## Código
N/A

## Descrição

Submeter uma requisição HTTP para invocação SID.Não são usados cookies para manter a sessão, sendo exclusivamente mantidas pelos parâmetros User e Connection, obrigatórios no corpo da ação.

## Parâmetros

- **URL** (`alfa`) - Entrada: Endereço do servidor WEB.
- **PostQuery** (`alfa`) - Entrada: Dados a serem submetidos.
- **ProxyUserName** (`alfa`) - Entrada: Nome usuário do Proxy.
- **ProxyPassword** (`alfa`) - Entrada: Senha usuário do Proxy.
- **Headers** (`alfa`) - Entrada: Cabeçalho adicional do protocolo HTTP.
- **Retorno** (`alfa End`) - Saída

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SapiensSIDEx();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
