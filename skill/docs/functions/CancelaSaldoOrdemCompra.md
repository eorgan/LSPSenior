# CancelaSaldoOrdemCompra

## Assinatura

```lspt
Funcao CancelaSaldoOrdemCompra(Numero pCodEmp, Numero pCodFil, Numero pNumOcp, Numero pSeqIte, Alfa pProSer, Numero pQtdCan);
```

## Código
559

## Descrição

Cancelar uma quantidade de um item de produto ou serviço de uma ordem de compra.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Empresa da ordem de compra.
- **pCodFil** (`Numero`) - Entrada: Filial da ordem de compra.
- **pNumOcp** (`Numero`) - Entrada: Número da ordem de compra.
- **pSeqIte** (`Numero`) - Entrada: Sequência do item que pode ser produto ou serviço.
- **pProSer** (`Alfa`) - Entrada: Indicatido do item se é produto (P) ou serviço (S).
- **pQtdCan** (`Numero`) - Entrada: Qtde a ser cancelada do item.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CancelaSaldoOrdemCompra();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/cancelasaldoordemcompra.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
