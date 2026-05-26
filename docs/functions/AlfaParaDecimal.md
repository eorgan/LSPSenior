# AlfaParaDecimal

## Assinatura

```lspt
Funcao AlfaParaDecimal(Alfa Valor, Numero End Retorno);
```

## Código
780

## Descrição

Converte um valor alfanumérico para o tipo Decimal.

## Parâmetros

- **Valor** (`Alfa`) - Entrada: Valor alfanumérico a ser convertido (formato brasileiro com vírgula)
- **Retorno** (`Numero End`) - Saída: Variável que receberá o valor convertido

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
Definir Numero vnDecimal;

vaTexto = "123,45";  @ Formato brasileiro com vírgula @
AlfaParaDecimal(vaTexto, vnDecimal); @ vnDecimal será 123.45 @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
