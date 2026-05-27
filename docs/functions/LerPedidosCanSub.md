# LerPedidosCanSub

## Assinatura

```lspt
Funcao LerPedidosCanSub(Numero NPos,Numero End FLis,Numero End Emp,Numero End Fil,Numero End Ped,Numero End Seq,Alfa End Pro,Alfa End Der,Alfa End ProS,Alfa End DerS,Alfa End Dep,Numero End Qtd,Numero End Pre,Numero End Vlr,Alfa End Cse);
```

## Código
813

## Descrição

Ler uma lista de memória criada e carregada no processamento no cancelamento e substituição dos itens (F120SIP).

## Parâmetros

- **NPos** (`Numero`) - Entrada: Variável que possui a posição atual em que se encontra a lista em memória.
- **FLis** (`Numero End`) - Saída: Variável que indica o fim da lista.
- **Emp** (`Numero End`) - Saída: Código da empresa.
- **Fil** (`Numero End`) - Saída: Código da filial.
- **Ped** (`Numero End`) - Saída: Número do pedido.
- **Seq** (`Numero End`) - Saída: Sequência do pedido.
- **Pro** (`Alfa End`) - Saída: Código do produto substituído.
- **Der** (`Alfa End`) - Saída: Código da derivação substituída.
- **ProS** (`Alfa End`) - Saída: Código do produto substituto.
- **DerS** (`Alfa End`) - Saída: Código da derivação substituta.
- **Dep** (`Alfa End`) - Saída: Código do depósito.
- **Qtd** (`Numero End`) - Saída: Quantidade do item do pedido.
- **Pre** (`Numero End`) - Saída: Preço do item do pedido.
- **Vlr** (`Numero End`) - Saída: Valor do item do pedido.
- **Cse** (`Alfa End`) - Saída: Indicativo de cancelamento, substituição ou exclusão do item (valores: “CAN”, “SUB” e “EXC”).

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LerPedidosCanSub();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/lerpedidoscansub.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
