# StrParaInt

## Assinatura

```lspt
Funcao StrParaInt(Alfa Origem, Numero End Retorno);
```

## Código
17

## Descrição

Converte um valor alfanumérico (string) para o tipo Inteiro. Esta função é equivalente a `AlfaParaInt` e é mantida para compatibilidade.

## Parâmetros

- **Origem** (`Alfa`) - Entrada: Valor alfanumérico a ser convertido
- **Retorno** (`Numero End`) - Saída: Variável que receberá o valor convertido

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
Definir Numero vnInteiro;

vaTexto = "456";
StrParaInt(vaTexto, vnInteiro); @ vnInteiro será 456 @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
