# MMCalcularCorrecaoMonetaria

## Assinatura

```lspt
Funcao MMCalcularCorrecaoMonetaria(Alfa pCodMoe, Data pDatEmi, Numero pCotEmi, Data pDatPgt, Numero pVlrBas, Numero end pVlrCor, Numero end pVlrOde);
```

## Código
N/A

## Descrição

O objetivo desta função é retornar a correção monetária de determinado valor, em determinada data, para uma moeda específica (diferente da moeda padrão da empresa), relacionando essa data a uma data e cotação de emissão. Dependendo da correção encontrada, o valor corrigido será retornado na variável **pVlrCor** (caso a variação da moeda tenha sido positiva), ou na variável **pVlrOde** (caso a variação da moeda tenha sido negativa).

## Parâmetros

- **pCodMoe** (`Alfa`) - Entrada: Código da moeda base para cálculo da correção monetária.
- **pDatEmi** (`Data`) - Entrada: Data de emissão. Base para início do cálculo da correção monetária.
- **pCotEmi** (`Numero`) - Entrada: Cotação da moeda na data de emissão.
- **pDatPgt** (`Data`) - Entrada: Data que será utilizada para a comparação com a cotação da data de emissão.
- **pVlrBas** (`Numero`) - Entrada: Valor base a ser corrigido.
- **pVlrCor** (`Numero end`) - Saída
- **pVlrOde** (`Numero end`) - Saída

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MMCalcularCorrecaoMonetaria();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
