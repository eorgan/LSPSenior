# AlfaParaData

## Assinatura

```lspt
Funcao AlfaParaData(Alfa pDataAlfa, Numero End pDataNum);
```

## Código
613

## Descrição

Converte um valor alfanumérico para o tipo Data.

## Parâmetros

- **pDataAlfa** (`Alfa`) - Entrada
- **pDataNum** (`Numero End`) - Saída

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
Definir Data vdData;

vaTexto = "01/01/2020";
AlfaParaData(vaTexto, vdData); @ vdData será 01/01/2020 @
```

## Fonte

Documentação oficial Senior — https://documentacao.senior.com.br

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
