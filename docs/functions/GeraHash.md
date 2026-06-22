# GeraHash

## Assinatura

```lspt
Funcao GeraHash(aTexto, aAlgoritmo, aRetorno);
```

## Código
N/A

## Descrição

Gera um hash criptográfico de um texto usando diferentes algoritmos.

## Parâmetros

- **aTexto** - Entrada: Texto original
- **aAlgoritmo** - Entrada: É o algoritmo de dispersão, gerador do Hash. Atualmente permite os modos MD5, SHA1, SHA256 e SHA512
- **aRetorno** - Entrada: Hash gerado

## Exemplo de Uso

```lspt
Definir Alfa vaTextoOriginal;
Definir Alfa vaHashMD5;
Definir Alfa vaHashSHA256;
Definir Alfa vaMensagem;

vaTextoOriginal = "dados importantes do sistema";

@ Gera hash MD5 @
GeraHash(vaTextoOriginal, 1, vaHashMD5);

@ Gera hash SHA-256 (recomendado) @
GeraHash(vaTextoOriginal, 3, vaHashSHA256);

vaMensagem = "Hash SHA-256: " + vaHashSHA256;
Mensagem(Retorna, vaMensagem);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/gerahash.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
