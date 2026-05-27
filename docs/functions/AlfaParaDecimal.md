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

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/alfaparadecimal.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
