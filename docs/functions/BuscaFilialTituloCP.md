# BuscaFilialTituloCP

## Assinatura

```lspt
Funcao BuscaFilialTituloCP(Numero pCodEmp, alfa pNumTit, alfa pCodTpt, Numero pCodFor, Numero pVlrMov);
```

## Código
N/A

## Descrição

Esta função tem como o objetivo carregar o título correto de acordo com a sua filial no retorno do pagamento eletrônico, quando existem títulos com a mesma numeração para filiais diferentes.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável que contém a empresa do título.
- **pNumTit** (`alfa`) - Entrada: Variável que contém o número do título.
- **pCodTpt** (`alfa`) - Entrada: Variável que contém o tipo de título.
- **pCodFor** (`Numero`) - Entrada: Variável que contém o fornecedor do título.
- **pVlrMov** (`Numero`) - Entrada: Variável que contém o valor do movimento no título.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscaFilialTituloCP();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
