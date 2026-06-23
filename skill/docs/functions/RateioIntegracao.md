# RateioIntegracao

## Assinatura

```lspt
Funcao RateioIntegracao(Alfa pOpcao, Numero end pPosicao, Alfa end pCodCcu, Numero end pPerRat, Numero end pVlrRat);
```

## Código
N/A

## Descrição

Manipular o rateio que é formando pelos movimentos de origem (movimentos dos módulos auxiliares), onde através desta função será possível intervir no rateio que será gerado antes da efetivação dos lançamentos contábeis.

## Parâmetros

- **pOpcao** (`Alfa`) - Entrada: Representa qual opção a ser realizada no rateio da integração contábil. Pode ser "Ler", "Inserir", "Excluir", "Excluir_Tudo" ou "Alterar".
- **pPosicao** (`Numero end`) - Saída: Somente retorno quando a opção for "Ler". Neste caso o retorno pode ser valores maiores que 1 até a quantidade de registros que estão no rateio.
- **pCodCcu** (`Alfa end`) - Saída: Centro de custos a ser inserido, alterado ou o retorno quando opção Ler.
- **pPerRat** (`Numero end`) - Saída: Percentual de rateio a ser inserido, alterado ou o retorno quando opção Ler.
- **pVlrRat** (`Numero end`) - Saída: Valor do rateio a ser inserido, alterado ou o retorno quando opção Ler.

## Valores de Retorno

- - pPosicao: somente retorno quando a opção for "Ler". Neste caso o retorno pode ser valores maiores que 1 até a quantidade de registros que estão no rateio.
- - pCodCcu: Centro de custos a ser inserido, alterado ou o retorno quando opção Ler.
- - pPerRat: Percentual de rateio a ser inserido, alterado ou o retorno quando opção Ler.
- - pVlrRat: Valor do rateio a ser inserido, alterado ou o retorno quando opção Ler.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
RateioIntegracao();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/rateiointegra__o.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
