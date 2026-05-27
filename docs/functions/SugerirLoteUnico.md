# SugerirLoteUnico

## Assinatura

```lspt
Funcao SugerirLoteUnico(Numero pCodEmp,Alfa pCodPro,Alfa pCodDer,Alfa pCodDep,Alfa pCodLot,Numero QtdSug);
```

## Código
816

## Descrição

Efetuar a sugestão do lote de forma única, ou seja, não pode haver sugestão de mais lotes para o produto a ser sugerido. Aceita a sugestão parcial do lote caso não haja quantidade para atender a demanda total com um único lote.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável com o código da empresa para a sugestão da quantidade do lote.
- **pCodPro** (`Alfa`) - Entrada: Variável com o código do produtora para a sugestão da quantidade do lote.
- **pCodDer** (`Alfa`) - Entrada: Variável com o código da derivação do produto para a sugestão da quantidade do lote.
- **pCodDep** (`Alfa`) - Entrada: Variável com o código do depósito onde encontra-se o produto para a sugestão da quantidade do lote.
- **pCodLot** (`Alfa`) - Entrada: Variável com o código do lote para sugestão.
- **QtdSug** (`Numero`) - Entrada: Variável com a quantidade a ser sugerida para o lote e produto na distribuição.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SugerirLoteUnico();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
