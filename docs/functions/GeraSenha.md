# GeraSenha

## Assinatura

```lspt
Funcao GeraSenha(aTamanho, aSenha);
```

## Código
N/A

## Descrição

Gera uma senha aleatória com caracteres alfanuméricos.

## Parâmetros

- **aTamanho** - Entrada: Quantidade de caracteres que a senha possuirá
- **aSenha** - Entrada: Sequência de caracteres alfanuméricos aleatórios, a senha em si

## Exemplo de Uso

```lspt
Definir Funcao criarSessaoSegura();

@ Variáveis globais @
Definir Alfa vaUsuario;
Definir Alfa vaNonce;
Definir Alfa vaTokenSessao;
Definir Alfa vaSenhaTemporaria;
Definir Alfa vaChaveSeguranca;

vaUsuario = "joao.silva";

criarSessaoSegura();

Funcao criarSessaoSegura(); {
  Definir Alfa vaMensagem;

  @ 1. Gera nonce para a sessão @
  GerarNonce(vaNonce);

  @ 2. Gera token de sessão @
  GeraToken(32, vaTokenSessao);

  @ 3. Gera senha temporária @
  GeraSenha(12, vaSenhaTemporaria);

  @ 4. Cria chave de segurança combinada @
  vaChaveSeguranca = vaUsuario + ":" + vaNonce + ":" + vaTokenSessao;
  
  @ 5. Registra sessão @
  vaMensagem = "Sessão criada para: " + vaUsuario;
  Mensagem(Retorna, vaMensagem);
  vaMensagem = "Token: " + vaTokenSessao;
  Mensagem(Retorna, vaMensagem);
  vaMensagem = "Senha temporária: " + vaSenhaTemporaria;
  Mensagem(Retorna, vaMensagem);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/gerasenha.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
