# HttpAlteraAutenticacaoProxy

## Assinatura

```lspt
Funcao HttpAlteraAutenticacaoProxy(Alfa Objeto, Alfa Usuario, Alfa Senha);
```

## Código
N/A

## Descrição

Configura e lê as credenciais de autenticação para o servidor proxy.

## Parâmetros

- **Objeto** (`Alfa`) - Entrada: Nome de usuário para autenticação no proxy
- **Usuario** (`Alfa`) - Entrada: Nome de usuário para autenticação no proxy
- **Senha** (`Alfa`) - Entrada: Senha para autenticação no proxy

## Exemplo de Uso

```lspt
Definir Alfa vaHTTP;
Definir Alfa vaUsuario;
Definir Alfa vaSenha;

HttpObjeto(vaHTTP);

@ Ler credenciais configuradas @
HttpLeAutenticacaoProxy(vaHTTP, vaUsuario, vaSenha);

Mensagem(Retorna, "Usuário proxy: " + vaUsuario);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/requisicoes-http/httpalteraautenticacaoproxy.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
