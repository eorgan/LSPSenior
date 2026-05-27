# Encriptar

## Assinatura

```lspt
Funcao Encriptar(valor, chave, resultado);
```

## Código
N/A

## Descrição

Criptografa a cadeia de caracteres. O uso é destinado apenas para o uso entre aplicações Senior. O algoritmo para encriptar os dados é proprietário Senior, não sendo possível descriptografar em outros aplicativos ou sistemas de terceiros. Importante Essa função não garante que um dado seja gravado e lido pelo banco. Com isso, é necessário o uso da função [Base64Encode](../regra-para-web-services/base64encode.md) para que o dado seja criptografado de maneira garantida que todas as strings sejam gravadas no banco corretamente, para que possam ser lidas posteriormente com a função [Desencriptar](desencriptar.md) e [Base64Decode](../regra-para-web-services/base64decode.md).

## Parâmetros

- **valor** - Entrada: Caracteres contendo texto legível
- **chave** - Entrada: Chave de criptografia, deve ser um número entre 0 e 65535
- **resultado** - Entrada: Caracteres criptografados.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
Encriptar();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
