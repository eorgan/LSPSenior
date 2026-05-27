# GeraToken

## Assinatura

```lspt
Funcao GeraToken(aNomeUsuario, aAlgoritmo, aChave, aRetorno);
```

## Código
N/A

## Descrição

Retorna um token criptografado. A String criptografada tem o formato **DD/MM/YYYY HH:MM:SS|<aNomeUsuario.**

## Parâmetros

- **aNomeUsuario** - Entrada: Nome do usuário que será adiciona no token
- **aAlgoritmo** - Entrada: É o modo de criptografia. Atualmente permite apenas o modo CBC
- **aChave** - Entrada: Chave utilizado para criptografar os dados
- **aRetorno** - Entrada: Dados criptografado

## Exemplo de Uso

```lspt
Definir Alfa xToken;
GeraToken("Usuário", "CBC", "ABC123", xToken);
@ A variável xToken estará com os dados criptografado. @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/geratoken.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
