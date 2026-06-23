# GerarPwdDigest

## Assinatura

```lspt
Funcao GerarPwdDigest(Alfa Nonce, Alfa Data, Alfa Senha, Alfa end PwdDigest);
```

## Código
N/A

## Descrição

Gera o Digest da senha para autenticação WS-Security.

## Parâmetros

- **Nonce** (`Alfa`) - Entrada: Gera uma *String* aleatória com 26 caracteres, incluindo [a~z] e [0~9].
- **Data** (`Alfa`) - Entrada: Gera a data em formato base64.
- **Senha** (`Alfa`) - Entrada: Gera a senha em formato base64.
- **PwdDigest** (`Alfa end`) - Saída: Recebe um *hash* de senha, a partir dos três campos parametrizados (nonce, data e senha). O *hash* resultante está em Base64.

## Exemplo de Uso

```lspt
Definir Funcao autenticacaoWSecurity();

@ Variáveis globais @
Definir Alfa vaNonce;
Definir Alfa vaCreated;
Definir Alfa vaSenha;
Definir Alfa vaDigest;
Definir Alfa vaXMLSecurity;

vaSenha = "minhasenhasecreta";

autenticacaoWSecurity();

Funcao autenticacaoWSecurity(); {
  @ 1. Gera nonce @
  GerarNonce(vaNonce);

  @ 2. Data/hora atual formatada para WS-Security @
  Definir Numero vnDataHora;
  DataHora(vnDataHora);
  FormatarData(vnDataHora, "yyyy-MM-ddTHH:mm:ssZ", vaCreated);

  @ 3. Gera digest @
  GerarPwdDigest(vaNonce, vaCreated, vaSenha, vaDigest);

  @ 4. Monta XML de segurança @
  vaXMLSecurity = "<wsse:Security>";
  vaXMLSecurity = vaXMLSecurity + "<wsse:UsernameToken>";
  vaXMLSecurity = vaXMLSecurity + "<wsse:Username>usuario</wsse:Username>";
  vaXMLSecurity = vaXMLSecurity + "<wsse:Password Type=\"PasswordDigest\">";
  vaXMLSecurity = vaXMLSecurity + vaDigest + "</wsse:Password>";
  vaXMLSecurity = vaXMLSecurity + "<wsse:Nonce>" + vaNonce + "</wsse:Nonce>";
  vaXMLSecurity = vaXMLSecurity + "<wsu:Created>" + vaCreated + "</wsu:Created>";
  vaXMLSecurity = vaXMLSecurity + "</wsse:UsernameToken>";
  vaXMLSecurity = vaXMLSecurity + "</wsse:Security>";

  Mensagem(Retorna, "XML WS-Security gerado com sucesso!");
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/gerarpwddigest.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
