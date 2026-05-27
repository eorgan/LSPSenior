# BuscaTabPreco

## Assinatura

```lspt
Funcao BuscaTabPreco(Alfa pCodMod, Alfa pCodAgm, Numero pCodRep, Alfa pCodMar, Alfa pCodLip,  Alfa pCodFam, Numero pCodCdi, Numero end pPreUni, Numero end pPerDsc, Numero end pPerCom);
```

## Código
611

## Descrição

Verifica se a transação soma ou diminui o ICMS no preço unitário (E001TNS.ComSip) e se a transação está configurada para a redução de ICMS ser considerada na formação do preço de venda (E001TVE.ConRic).

## Parâmetros

- **pCodMod** (`Alfa`) - Entrada: Código Modelo.
- **pCodAgm** (`Alfa`) - Entrada: Código Agrupamento de preço para Geração da tabela de Preço.
- **pCodRep** (`Numero`) - Entrada: Código representante.
- **pCodMar** (`Alfa`) - Entrada: Marca do Produto.
- **pCodLip** (`Alfa`) - Entrada: Código da lista de preço utilizada na venda.
- **pCodFam** (`Alfa`) - Entrada: Família.
- **pCodCdi** (`Numero`) - Entrada: Código do canal de distribuição do pedido.
- **pPreUni** (`Numero end`) - Saída: Preço unitário do item da nota fiscal de saída.(retorno)
- **pPerDsc** (`Numero end`) - Saída: Percentual de Desconto. (retorno)
- **pPerCom** (`Numero end`) - Saída: Percentual definido pela Comissão.(retorno)

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscaTabPreco();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
