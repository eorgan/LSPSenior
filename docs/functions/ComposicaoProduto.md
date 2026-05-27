# ComposicaoProduto

## Assinatura

```lspt
Funcao ComposicaoProduto (Alfa pCodPro, Alfa pCodDer, Numero pQtdInf, Alfa pUniEst,Alfa pDecPro,Alfa pDecMon, Alfa pDelMon, Alfa pLmpLis, Alfa pJunDer, Alfa pTipDes);
```

## Código
N/A

## Descrição

Passando-se o Produto, Derivação, Quantidade a produzir, 'S' para Converter para U.M. estoque ou 'N' para usar U.M. Ficha, 'P' para Usar a descrição do Produto ou 'N' para usar a descrição da Nota, 'S' para Decompor Produzidos, 'S' para Decompor Montagens. O retorno desta função é uma Lista em Memória que deve ser lida com a Função "[LeMemListCompPro](lememlistcomppro.md)".

## Parâmetros

- **pCodPro** (`Alfa`) - Entrada: Variável que recebe o código do produto.
- **pCodDer** (`Alfa`) - Entrada: Variável que recebe a derivação.
- **pQtdInf** (`Numero`) - Entrada: Variável que recebe a quantidade a produzir.
- **pUniEst** (`Alfa`) - Entrada: Variável que recebe 'S' para converter para U.M. estoque ou 'N' para usar U.M. Ficha.
- **pDecPro** (`Alfa`) - Entrada: Variável que recebe 'S' para Decompor Produzidos.
- **pDecMon** (`Alfa`) - Entrada: Variável que recebe 'S' para Decompor Montagens.
- **pDelMon** (`Alfa`) - Entrada: Variável com 'S' para excluir produtos montados e só retornar os componentes.
- **pLmpLis** (`Alfa`) - Entrada: Variável com 'S' para limpar a lista a cada chamada da função.
- **pJunDer** (`Alfa`) - Entrada: Variável com 'S' para juntar componentes iguais para derivações do produto final diferente.
- **pTipDes** (`Alfa`) - Entrada: Variável com 'P' ou 'N' para trazer a descrição do componente ('P'), ou a descrição da nota Fiscal ('N').

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ComposicaoProduto();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/composicaoproduto.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
