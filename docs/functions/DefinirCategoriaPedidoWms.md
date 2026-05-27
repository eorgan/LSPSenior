# DefinirCategoriaPedidoWms

## Assinatura

```lspt
Funcao DefinirCategoriaPedidoWms(Numero CodEmp, Numero CodFil, Numero NumPed, Numero CatCli, Alfa End MsgErro);
```

## Código
839

## Descrição

Esta função pode ser usada em regra do processo automático que busca priorizar pedidos. Ela altera o valor do campo E120PED.CatCli.

## Parâmetros

- **CodEmp** (`Numero`) - Entrada: Código da empresa
- **CodFil** (`Numero`) - Entrada: Código da filial
- **NumPed** (`Numero`) - Entrada: Número pedido
- **CatCli** (`Numero`) - Entrada
- **MsgErro** (`Alfa End`) - Saída: Mensagem de erro

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
DefinirCategoriaPedidoWms();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
