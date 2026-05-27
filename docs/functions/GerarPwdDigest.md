# GerarPwdDigest

## Assinatura

```lspt
Funcao GerarPwdDigest(Alfa Nonce, Alfa Data, Alfa Senha, Alfa end PwdDigest);
```

## Código
N/A

## Descrição

Gera o Digest da senha, a partir do Nonce, Data e senha, em formato base64.

## Parâmetros

- **Nonce** (`Alfa`) - Entrada: Gera uma *String* aleatória com 26 caracteres, incluindo [a~z] e [0~9].
- **Data** (`Alfa`) - Entrada: Gera a data em formato base64.
- **Senha** (`Alfa`) - Entrada: Gera a senha em formato base64.
- **PwdDigest** (`Alfa end`) - Saída: Recebe um *hash* de senha, a partir dos três campos parametrizados (nonce, data e senha). O *hash* resultante está em Base64.

## Exemplo de Uso

```lspt
GerarPwdDigest(xNonce, xCreatedTime,
"Teste"
, xPwdDigest);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/gerarpwddigest.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
