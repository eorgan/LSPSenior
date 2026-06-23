# RetornarQuantidadeLoteUtilizada

## Assinatura

```lspt
Funcao RetornarQuantidadeLoteUtilizada(Numero pCodEmp, Alfa pCodPro, Alfa pCodDer, Alfa pCodDep, Alfa pCodLot, Numero End pQtdUti);
```

## Código
964

## Descrição

Responsável por retornar a quantidade utilizada de um determinado lote durante a execução do identificador de regra [VEN-135EUDLE02](../identificadores_regras/ven_135eudle02.htm) na formação de cargas. Seu retorno será o valor na última variável passada como argumento. Devem ser informados à função a empresa, o produto, a derivação, o depósito e o lote que se deseja consultar. Caso não exista nenhum item da pré-fatura que está sendo gerada consumindo o lote correspondente à chave passada como parâmetro, a função retornará 0 para a variável de retorno. Caso o sistema não encontre a chave informada, nenhum erro será exibido; entretanto, a função retornará 0 para a variável de retorno.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Código da empresa enviado para busca de quantidade já utilizada no estoque em memória.
- **pCodPro** (`Alfa`) - Entrada: Código do produto enviado para busca de quantidade já utilizada no estoque em memória.
- **pCodDer** (`Alfa`) - Entrada: Código da derivação do produto enviado para busca de quantidade já utilizada no estoque em memória.
- **pCodDep** (`Alfa`) - Entrada: Código do depósito enviado para busca de quantidade já utilizada no estoque em memória.
- **pCodLot** (`Alfa`) - Entrada: Código do lote enviado para busca de quantidade já utilizada no estoque em memória.
- **pQtdUti** (`Numero End`) - Saída: Variável de retorno com a quantidade já utilizada no estoque em memória.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
RetornarQuantidadeLoteUtilizada();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/retornarquantidadeloteutilizada.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
