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

## Valores de Retorno

- Tipo de retorno: Variável numérica que receberá o resultado da conversão.

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
Definir Numero vnInteiro;

vaTexto = "456";
StrParaInt(vaTexto, vnInteiro); @ vnInteiro será 456 @
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
