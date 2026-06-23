# DecimalParaAlfa

## Assinatura

```lspt
funcao DecimalParaAlfa(numero Origem, Alfa End Retorno);
```

## Código
724

## Descrição

Converte um valor numérico (`Numero`) para alfanumérico **preservando a parte decimal** na string resultante (formato exibido conforme o ambiente).

## Parâmetros

- **Origem** (`numero`) - Entrada: Valor do tipo `Numero` (inteiro ou com decimais)
- **Retorno** (`Alfa End`) - Saída: Variável `Alfa` que receberá a representação textual

## Exemplo de Uso

```lspt
Definir Numero vnValor;
Definir Alfa vaTexto;

vnValor = 123.45;
DecimalParaAlfa(vnValor, vaTexto); @ vaTexto adequado para exibir o decimal @
```

## Fonte

Documentação oficial Senior — https://documentacao.senior.com.br

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
