# Base64Encode

## Assinatura

```lspt
Funcao Base64Encode(Alfa valor, Alfa end Base64Encode);
```

## Código
N/A

## Descrição

Codifica strings em Base64, comumente usado para autenticação básica HTTP.

## Parâmetros

- **valor** (`Alfa`) - Entrada: String a ser codificada em Base64
- **Base64Encode** (`Alfa end`) - Saída: Variável que receberá o resultado codificado

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
