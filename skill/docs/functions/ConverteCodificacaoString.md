# ConverteCodificacaoString

## Assinatura

```lspt
Funcao ConverteCodificacaoString(Alfa aString, Alfa aCodificacao, Alfa End aResultado);
```

## Código
N/A

## Descrição

Esta função altera a codificação de um texto contido em uma variável, onde este texto com a codificação alterada pode ser utilizado para comunicação com web services.

## Parâmetros

- **aString** (`Alfa`) - Entrada: Contém o texto original que necessita ter sua codificação alterada
- **aCodificacao** (`Alfa`) - Entrada: Nome da codificação para a qual o texto será convertido ("UTF-8" ou "WINDOWS-1252")
- **aResultado** (`Alfa End`) - Saída: Contém o texto com a codificação alterada

## Exemplo de Uso

```lspt
Definir Alfa vaTextoOriginal;
Definir Alfa vaTextoCodificado;
Definir Numero vnRetorno;

vaTextoOriginal = "Acentuação especial";

vnRetorno = ConverteCodificacaoString(vaTextoOriginal, "UTF-8", vaTextoCodificado);

Se (vnRetorno = 1) {
  Mensagem(Retorna, "Encontrado caracteres incompatíveis!");
} Senao {
  Mensagem(Retorna, "Conversão realizada com sucesso!");
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/convertecodificacaostring.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
