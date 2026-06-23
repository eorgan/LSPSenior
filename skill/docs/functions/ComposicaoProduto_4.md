# ComposicaoProduto_4

## Assinatura

```lspt
Funcao ComposicaoProduto_4(Alfa pCodPro, Alfa pCodDer, Numero pQtdInf, Numero pUniEst, Numero pDecPro, Numero pDecMon, Numero pDelMon, Numero pLmpLis, Numero pJunDer, Numero pTipDes, Alfa pMsgUsu);
```

## Código
N/A

## Descrição

Esta função tem basicamente o mesmo objetivo da função ComposicaoProduto, que é retornar uma Lista em Memória que deve ser lida com a Função "LeMemListCompPro". A diferença é que possui a variável pMsgUsu que define se a execução será interrompida e retorna mensagem de erro quando ocorrer alguma inconsistência na estrutura do produto.

## Parâmetros

- **pCodPro** (`Alfa`) - Entrada: Variável que recebe o código do produto.
- **pCodDer** (`Alfa`) - Entrada: Variável que recebe a derivação.
- **pQtdInf** (`Numero`) - Entrada: Variável que recebe a quantidade a produzir.
- **pUniEst** (`Numero`) - Entrada: Variável que recebe 'S' para converter para U.M. estoque ou 'N' para usar U.M. Ficha.
- **pDecPro** (`Numero`) - Entrada: Variável que recebe 'S' para Decompor Produzidos.
- **pDecMon** (`Numero`) - Entrada: Variável que recebe 'S' para Decompor Montagens.
- **pDelMon** (`Numero`) - Entrada: Variável com 'S' para excluir produtos montados e só retornar os componentes.
- **pLmpLis** (`Numero`) - Entrada: Variável com 'S' para limpar a lista a cada chamada da função.
- **pJunDer** (`Numero`) - Entrada: Variável com 'S' para juntar componentes iguais para derivações do produto final diferente.
- **pTipDes** (`Numero`) - Entrada: Variável com 'P' ou 'N' para trazer a descrição do componente ('P'), ou a descrição da nota Fiscal ('N').
- **pMsgUsu** (`Alfa`) - Entrada: Variável que recebe 'S' para retornar mensagem de erro quando ocorrer alguma inconsistência na estrutura do produto, interrompe a execução da função, ou pode receber 'N' para não retornar mensagem e não interromper a execução. Ex: "Situação do Produto está Inativa".

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ComposicaoProduto_4();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/composicaoproduto_4.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
