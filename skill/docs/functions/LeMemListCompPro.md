# LeMemListCompPro

## Assinatura

```lspt
Funcao LeMemListCompPro(Numero NumPos,Numero End FimLis,Alfa End CodNiv,Numero End CodEtg,Numero End SeqMod,Numero End TipPro,Alfa End CodCmp,Alfa End DesPro,Alfa End DerCmp,Alfa End UniMed,Numero End QtdTot,Numero End PerPrd,Alfa End CodDer);
```

## Código
560

## Descrição

Ler a Lista de componentes, que é carregada na função ComposicaoProduto.

## Parâmetros

- **NumPos** (`Numero`) - Entrada: Variável que deve conter a posição atual na lista de componentes.
- **FimLis** (`Numero End`) - Saída: Variável numérica que retorna 0 ou 1. Quando for 1 indica que acabou a lista.
- **CodNiv** (`Alfa End`) - Saída: Nível do Componente na estrutura do Produto (retorno).
- **CodEtg** (`Numero End`) - Saída: Estágio de Fabricação do Componente.
- **SeqMod** (`Numero End`) - Saída: Seq. do Componente no Modelo de Produção.
- **TipPro** (`Numero End`) - Saída: Tipo do Componente.
- **CodCmp** (`Alfa End`) - Saída: Código do Componente.
- **DesPro** (`Alfa End`) - Saída: Descrição do Produto.
- **DerCmp** (`Alfa End`) - Saída: Códígo da Derivação do Componente.
- **UniMed** (`Alfa End`) - Saída: Unidade de Medida do Componente. Quando a variável de entrada U.M. Estoque do relatório Composição do Produto recebe 'S', mostra a unidade de U.M. de estoque (E075PRO.UniMed) e quando recebe 'N' mostra a U.M. de consumo da ficha técnica (E700CTM.UniMe2).
- **QtdTot** (`Numero End`) - Saída: Qtde que foi utilizada explosão do Produto, e que foi utilizada pelos componentes.
- **PerPrd** (`Numero End`) - Saída: Qtde de Perda do Componente.
- **CodDer** (`Alfa End`) - Saída: Código da derivação do produto final.

## Valores de Retorno

- CodNiv: Nível do Componente na estrutura do Produto.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LeMemListCompPro();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/lememlistcomppro.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
