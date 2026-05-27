# Base64Decode

## Assinatura

```lspt
Funcao Base64Decode(Alfa valor, Alfa end Base64Decode);
```

## Código
N/A

## Descrição

Decodifica um valor base64 passado.

## Parâmetros

- **valor** (`Alfa`) - Entrada: Valor em bas64.
- **Base64Decode** (`Alfa end`) - Saída: Conteúdo do parâmetro "valor" em alfanumérico.

## Exemplo de Uso

```lspt
Definir Alfa xValor;
Definir Alfa xValorbase64;

xValorbase64 =
"dmFsb3IgcGFyYSBjb252ZXJ0ZXI="
;
Base64Decode(xValorbase64, xValor);

Mensagem(Retorna, xValor);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/regra-para-web-services/base64decode.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
