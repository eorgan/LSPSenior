# ConverteMascara

## Assinatura

```lspt
Funcao ConverteMascara (Tipo_dado,Valor_Origem,Alfa_Origem/Destino,Mascara);
```

## Código
N/A

## Descrição

Esta função converte um valor de entrada (numérico, data, hora ou cadeia de caracteres) para o tipo de dado cadeia de caracteres.

## Parâmetros

- **Tipo_dado** - Entrada: Código que determina o tipo do valor de origem
- **Valor_Origem** - Entrada: Campo/Variável/Valor a ser convertido
- **Alfa_Origem/Destino** - Entrada: Variável que receberá o resultado da conversão
- **Mascara** - Entrada: Especifica o formato de apresentação do resultado

## Exemplo de Uso

```lspt
Definir Alfa vaInscricaoStr;
Definir Numero vnNumCgc;
Definir Numero vnTipoInscricao;

vnNumCgc = 12345678901;
vnTipoInscricao = 3; @ CPF @

Se (vnTipoInscricao = 1) { @ CNPJ @
  ConverteMascara(1, vnNumCgc, vaInscricaoStr, "99.999.999/9999-99");
} Senao Se (vnTipoInscricao = 3) { @ CPF @
  ConverteMascara(1, vnNumCgc, vaInscricaoStr, "999.999.999-99");
}
@ vaInscricaoStr será "123.456.789-01" @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/convertemascara.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
