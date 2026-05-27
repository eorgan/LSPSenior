# MMBuscaCotacaoMoeda

## Assinatura

```lspt
Funcao MMBuscaCotacaoMoeda(Alfa pCodMoe, Numero pDatPre, Numero pTipVlr, Numero End pCotPre);
```

## Código
N/A

## Descrição

Buscar o índice da cotação/previsão de uma moeda em uma determinada data.

## Parâmetros

- **pCodMoe** (`Alfa`) - Entrada: Variável que recebe o código da moeda para busca da cotação.
- **pDatPre** (`Numero`) - Entrada: Variável que recebe a data para pesquisa da cotação.
- **pTipVlr** (`Numero`) - Entrada: Variável que indica o tipo da valor 0-Cotação e 1-Previsto.
- **pCotPre** (`Numero End`) - Saída: Variável que recebe o valor da cotação (retorno).

## Valores de Retorno

- PCotPre - Variável que recebe o valor da cotação.
- MMCria() - Antes de executar esta função.
- MMLibera() - Após executar esta função.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MMBuscaCotacaoMoeda();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
