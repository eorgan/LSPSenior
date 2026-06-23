# SelecionaDadosDIPI

## Assinatura

```lspt
Funcao SelecionaDadosDIPI(Alfa OQue, Numero CodEmp, Numero CodFil, Numero DatIni, Numero DatFim, Numero Quanto, Numero AgrupaClf);
```

## Código
N/A

## Descrição

Monta os dados utilizados numa DIPI. Como a regra é muito limitado para fazer, gorub by, sum e outras funções.

## Parâmetros

- **OQue** (`Alfa`) - Entrada: Variável que pode receber 4 parâmetros:  "FORNECEDORES" ou "CLIENTES" ou "DADOSENTRADAS" ou "DADOSSAIDAS".  Se for "FORNECEDORES" irá fazer uma seleção dos dados de Notas De Compra, agrupados por fonecedor.  Se for "CLIENTES", irá fazer uma seleção das NF de Vendas agrupadas por Cliente.  Se For "DADOSENTRADAS" irá fazer a seleção dos itens de NF de Compras, agrupados por Classificação Fiscal".  Se For "DADOSSAIDAS" , fará uma seleção dos itens de NF de Vendas agrupados por classificação Fiscal.
- **CodEmp** (`Numero`) - Entrada: Variável que recebe a empresa ativa.
- **CodFil** (`Numero`) - Entrada: Variável que recebe a filial ativa.
- **DatIni** (`Numero`) - Entrada: Variável que recebe a data de início da DIPI.
- **DatFim** (`Numero`) - Entrada: Variável que recebe a data final da DIPI.
- **Quanto** (`Numero`) - Entrada: Variável que recebe quantos fornecedores, clientes ou Classificações Fiscais guardar(geralmente são só os 20 primeiros, ou seja, os 20 com maior movimentação).
- **AgrupaClf** (`Numero`) - Entrada: Variável que recebe "1" ou "0". "1" para Sim e "0" para Não. Será utilizado quando a variável OQue for igual a "DADOSENTRADAS1" ou "DADOSSAIDAS1", alterando o agrupamento dos dados para os campos E022CLF.CLAFIS e E022CLF.CODEXC.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SelecionaDadosDIPI();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/selecionadadosdipi.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
