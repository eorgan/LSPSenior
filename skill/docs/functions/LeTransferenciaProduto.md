# LeTransferenciaProduto

## Assinatura

```lspt
Funcao LeTransferenciaProduto(Numero NPos,Numero End FLis, Numero End Emp,Alfa End Pro,Alfa End Der,Alfa End Dep,Numero End Dat,Numero End Seq,Alfa End Tns,Numero End Qtd,Numero End Vlr,Alfa End EoS,Numero End Doc,Alfa End EstMov);
```

## Código
N/A

## Descrição

Lê a lista de registros da consulta de transferências de estoque carregada, ao mandar imprimir na tela F211LIG.

## Parâmetros

- **NPos** (`Numero`) - Entrada: Variável que deve conter a posição atual na lista de componentes
- **FLis** (`Numero End`) - Saída: Variável numérica que retorna 0 ou 1. Quando for 1 indica que acabou a lista
- **Emp** (`Numero End`) - Saída: Código da empresa
- **Pro** (`Alfa End`) - Saída: Código do produto movimentado
- **Der** (`Alfa End`) - Saída: Código da derivação do produto movimentado
- **Dep** (`Alfa End`) - Saída: Código do depósito movimentado
- **Dat** (`Numero End`) - Saída: Data da movimentação do estoque
- **Seq** (`Numero End`) - Saída: Sequência de movimento na data de movimentação
- **Tns** (`Alfa End`) - Saída: Código da transação de movimentação de estoque
- **Qtd** (`Numero End`) - Saída: Quantidade do movimento
- **Vlr** (`Numero End`) - Saída: Valor do movimento
- **EoS** (`Alfa End`) - Saída: Entrada ou saída de estoque (E ou S)
- **Doc** (`Numero End`) - Saída: Número do documento base da movimentação
- **EstMov** (`Alfa End`) - Saída: Tipo de estoque movimentado

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LeTransferenciaProduto();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/letransferenciaproduto.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
