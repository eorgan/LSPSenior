# LeMemListCompPro_3

## Assinatura

```lspt
Funcao LeMemListCompPro_3(Numero P1,Numero End R1,Alfa End E2,Numero End R3,Numero End R4,Numero End R5,Alfa End R6,Alfa End R7,Alfa End R8,Alfa End R9,Numero End R10,Numero End R11,Alfa End R12,Alfa End R13, Alfa End R14);
```

## Código
662

## Descrição

Ler a Lista de componentes, que é carregada na função ComposicaoProduto e/ou na função ComposicaoCombinacao.

## Parâmetros

- **P1** (`Numero`) - Entrada: Variável que deve conter a posição atual na lista de componentes.
- **R1** (`Numero End`) - Saída: Variável que retorna 0 ou 1. Quando for 1 indica que acabou a lista.
- **E2** (`Alfa End`) - Saída: Nível do Componente na estrutura do Produto.
- **R3** (`Numero End`) - Saída: Estágio de Fabricação do Componente.
- **R4** (`Numero End`) - Saída: Seq. do Componente no Modelo de Produção.
- **R5** (`Numero End`) - Saída: Tipo do Componente.
- **R6** (`Alfa End`) - Saída: Código do Componente.
- **R7** (`Alfa End`) - Saída: Descrição do Produto.
- **R8** (`Alfa End`) - Saída: Código da Derivação do Componente.
- **R9** (`Alfa End`) - Saída: Unidade de Medida do Componente.
- **R10** (`Numero End`) - Saída: Qtde que foi utilizada explosão do Produto, e que foi utilizada pelos componentes.
- **R11** (`Numero End`) - Saída: Qtde de Perda do Componente.
- **R12** (`Alfa End`) - Saída: Código da derivação do produto final.
- **R13** (`Alfa End`) - Saída: Código do modelo do produto pai onde está inserido componente/produto intermediário.
- **R14** (`Alfa End`) - Saída: Observação do componente (mensagem de erro, se houver).

## Valores de Retorno

- - CodNiv: Nível do Componente na estrutura do Produto.
- - CodEtg: Estágio de Fabricação do Componente.
- - SeqMod: Seq. do Componente no Modelo de Produção.
- - TipPro: Tipo do Componente.
- - CodCmp: Códígo do Componente.
- - DesPro: Descrição do Produto
- - DerCmp: Códígo da Derivação do Componente.
- - UniMed: Unidade de Medida do Componente.
- - QtdTot: Qtde que foi utilizada explosão do Produto, e que foi utilizada pelos
- componentes.
- - PerPrd: Qtde de Perda do Componente.
- - CodDer: Código da derivação do produto final.
- - CodMod: Código do modelo do produto pai onde está inserido componente/produto
- intermediário.
- - ObsCmp: Observação do componente (mensagem de erro, se houver).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LeMemListCompPro_3();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
