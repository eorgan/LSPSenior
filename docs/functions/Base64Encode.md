# Base64Encode

## Assinatura

```lspt
Funcao Base64Encode(Alfa valor, Alfa end Base64Encode);
```

## Código
N/A

## Descrição

Codifica para base64 o conteúdo passado.

## Parâmetros

- **valor** (`Alfa`) - Entrada: Valor em alfanumérico.
- **Base64Encode** (`Alfa end`) - Saída: Conteúdo do parâmetro "valor" em base64.

## Exemplo de Uso

```lspt
Definir Alfa xValor;
Definir Alfa xValorbase64;

xValor =
"valor para converter"
;
Base64Encode(xValor, xValorbase64);

Mensagem(Retorna, xValorbase64);
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/regra-para-web-services/base64encode.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
