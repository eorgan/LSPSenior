# RetornaPagamentoNotaFiscal

## Assinatura

```lspt
Funcao RetornaPagamentoNotaFiscal (Empresa, Filial, Fornecedor, Serie, NotaFiscal, Competencia, DataPagamento, ValorISS);
```

## Código
N/A

## Descrição

Esta função tem como finalidade listar o total do ISS Retido de uma nota fiscal considerando as movimentações financeiras, ou seja, caso os títulos da nota fiscal tenham sido pagos no período de competência o sistema irá listar o total do ISS Retido desta nota fiscal e inclusive a maior de pagamento.

## Parâmetros

- **Empresa** - Entrada: Informar a empresa
- **Filial** - Entrada: Informar a filial
- **Fornecedor** - Entrada: Informar o fornecedor da nota fiscal
- **Serie** - Entrada: Retorna a data do último pagamento realizado para a competência
- **NotaFiscal** - Entrada: Retorna o total do ISS pago no período
- **Competencia** - Entrada
- **DataPagamento** - Entrada: Retorna a data do último pagamento realizado para a competência
- **ValorISS** - Entrada: Retorna o total do ISS pago no período

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
RetornaPagamentoNotaFiscal();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/retornapagamentonotafiscal.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
