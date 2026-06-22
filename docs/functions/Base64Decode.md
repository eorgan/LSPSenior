# Base64Decode

## Assinatura

```lspt
Funcao Base64Decode(Alfa valor, Alfa end Base64Decode);
```

## Código
N/A

## Descrição

Decodifica um valor Base64 de volta para texto original.

## Parâmetros

- **valor** (`Alfa`) - Entrada: Valor em Base64 a ser decodificado
- **Base64Decode** (`Alfa end`) - Saída: Variável que receberá o conteúdo decodificado

## Exemplo de Uso

```lspt
Definir Alfa vaTextoOriginal;
Definir Alfa vaTextoCodificado;
Definir Alfa vaTextoDecodificado;

vaTextoOriginal = "dados sensíveis da aplicação";

@ Codificar para transmissão segura @
Base64Encode(vaTextoOriginal, vaTextoCodificado);
Mensagem(Retorna, "Dados codificados: " + vaTextoCodificado);

@ Decodificar após receber @
Base64Decode(vaTextoCodificado, vaTextoDecodificado);
Mensagem(Retorna, "Dados decodificados: " + vaTextoDecodificado);

@ Verificar se são iguais @
Se (vaTextoOriginal = vaTextoDecodificado) {
  Mensagem(Retorna, "Codificação/Decodificação realizada com sucesso!");
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/regra-para-web-services/base64decode.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
