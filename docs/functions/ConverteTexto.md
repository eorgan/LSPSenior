# ConverteTexto

## Assinatura

```lspt
Funcao ConverteTexto(Alfa aCodif, Alfa aStrOri, Alfa End aStrFim);
```

## Código
N/A

## Descrição

Realiza a substituição de caracteres especiais de acordo com o padrão de codificação informada no primeiro parâmetro, retorna um novo texto com os caracteres convertidos.

## Parâmetros

- **aCodif** (`Alfa`) - Entrada: Codificação do formato de origem do texto (formato suportado: "JSON")
- **aStrOri** (`Alfa`) - Entrada: Texto contendo os caracteres que necessitam ser convertidos
- **aStrFim** (`Alfa End`) - Saída: Variável que recebe o texto convertido

## Exemplo de Uso

```lspt
Definir Alfa vaTextoOrigem;
Definir Alfa vaTextoDestino;

vaTextoOrigem = "\\u00c1gua";

ConverteTexto("JSON", vaTextoOrigem, vaTextoDestino);
@ vaTextoDestino recebe o valor "Água" @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/convertetexto.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
