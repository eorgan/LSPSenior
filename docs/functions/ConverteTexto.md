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

- **aCodif** (`Alfa`) - Entrada: Codificação do formato de origem do texto - Formato suportado: "JSON"
- **aStrOri** (`Alfa`) - Entrada: Texto contendo os caracteres que necessitam ser convertidos
- **aStrFim** (`Alfa End`) - Saída: Variável que recebe o texto convertido

## Exemplo de Uso

```lspt
Definir alfa aStrOri;
Definir alfa aStrFim;
aStrOri = "\u00c1gua";
ConverteTexto("JSON", aStrOri, aStrFim);
A variável aStrFim recebe o valor "Água".
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
