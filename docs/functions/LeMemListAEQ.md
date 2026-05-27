# LeMemListAEQ

## Assinatura

```lspt
Funcao LeMemListAEQ (Numero pPos, Numero End pFim, Alfa End V1, Alfa End V2, Numero End V3, Numero End V4, Numero End V5, Numero End V6, Numero End V7, Numero End V8, Numero End V9, Numero End V10, Numero End V11, Numero End V12);
```

## Código
N/A

## Descrição

Lê os dados da memória temporária gerada pela função de composição de AEQ (Análise Econômica e Quantitativa), retornando informações para análise de custos e variações econômicas do produto. Essa função pode ser utilizada apenas por meio do relatório executado na tela Análise do Ponto de Equilíbrio ([F621AEQ](../menu_custos/f621aeq.htm)); caso seja executada em um relatório fora dessa tela, a carga dos dados não funcionará.

## Parâmetros

- **pPos** (`Numero`) - Entrada: Posição atual na lista AEQ. Deve ser inicializada com 0 e incrementada a cada chamada para percorrer os registros.
- **pFim** (`Numero End`) - Saída: Retorna 1 quando a lista chega ao fim, ou 0 caso ainda existam registros a serem lidos.
- **V1** (`Alfa End`) - Saída: Código do Produto (CodPro).
- **V2** (`Alfa End`) - Saída: Código da Derivação do Produto (CodDer).
- **V3** (`Numero End`) - Saída: Quantidade Vendida (VenQtd).
- **V4** (`Numero End`) - Saída: Valor Padrão de Venda (VenPad).
- **V5** (`Numero End`) - Saída: Percentual de Despesa Variável de Venda (PerDvv).
- **V6** (`Numero End`) - Saída: Valor de Despesa Variável de Venda (VlrDvv).
- **V7** (`Numero End`) - Saída: Variação Unitária (VarUni).
- **V8** (`Numero End`) - Saída: Variação Total (VarTot).
- **V9** (`Numero End`) - Saída: Custo Unitário (CusUni).
- **V10** (`Numero End`) - Saída: Custo Total (CusTot).
- **V11** (`Numero End`) - Saída: Total de Custo Direto e Fixo (TotCdf).
- **V12** (`Numero End`) - Saída: Despesas Fixas (DesFix).

## Valores de Retorno

- A função retorna os dados por referência, através dos parâmetros End.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LeMemListAEQ();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
