# ComposicaoProduto_2

## Assinatura

```lspt
Funcao ComposicaoProduto_2(Alfa pPro, Alfa pDer, Numero pQtd, Numero pUniEst,Numero pDecPro,Numero pDecMon, Numero pDelMon, Numero pLmpLis, Numero pJunDer,Numero pTipDes,Numero pNiv,Numero pFil,Numero pPed,Numero pSeq);
```

## Código
736

## Descrição

Passando-se o Produto, Derivação, Quantidade a produzir, 'S' para Converter para U.M. estoque ou 'N' para usar U.M. Ficha, 'P' para Usar a descrição do Produto ou 'N' para usar a descrição da Nota, 'S' para Decompor Produzidos, 'S' para Decompor Montagens. O retorno desta função é uma Lista em Memória que deve ser lida com a Função "[LeMemListCompPro_2"](lememlistcomppro_2.md).

## Parâmetros

- **pPro** (`Alfa`) - Entrada: Variável que recebe o código do produto.
- **pDer** (`Alfa`) - Entrada: Variável que recebe a derivação.
- **pQtd** (`Numero`) - Entrada: Variável que recebe a quantidade a produzir.
- **pUniEst** (`Numero`) - Entrada: Variável que recebe 'S' para converter para U.M. estoque ou 'N' para usar U.M. Ficha.
- **pDecPro** (`Numero`) - Entrada: Variável que recebe 'S' para Decompor Produzidos.
- **pDecMon** (`Numero`) - Entrada: Variável que recebe 'S' para Decompor Montagens.
- **pDelMon** (`Numero`) - Entrada: Variável com 'S' para excluir produtos montados e só retornar os componentes.
- **pLmpLis** (`Numero`) - Entrada: Variável com 'S' para limpar a lista a cada chamada da função.
- **pJunDer** (`Numero`) - Entrada: Variável com 'S' para juntar componentes iguais para derivações do produto final diferente.
- **pTipDes** (`Numero`) - Entrada: Variável com 'P' ou 'N' para trazer a descrição do componente ('P'), ou a descrição da nota Fiscal ('N').
- **pNiv** (`Numero`) - Entrada: Variável que recebe a quantidade de de níveis que a explosão deve buscar (0 - Busca Todos ou 1, 2, 3..99).
- **pFil** (`Numero`) - Entrada: Variável que recebe o Código da Filial.
- **pPed** (`Numero`) - Entrada: Variável que recebe o número do pedido.
- **pSeq** (`Numero`) - Entrada: Variável que recebe o Item de Pedido.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ComposicaoProduto_2();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
