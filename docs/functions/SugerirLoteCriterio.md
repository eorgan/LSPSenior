# SugerirLoteCriterio

## Assinatura

```lspt
Funcao SugerirLoteCriterio(Numero pCodEmp,Alfa pCodPro,Alfa pCodDer,Alfa pCodDep,Alfa pCodLot,Numero QtdSug,Numero pCriFed);
```

## Código
821

## Descrição

Efetuar a sugestão do lote de acordo com um critério de formação de estoque para verificar o saldo disponível dos lotes. A função de programador deve ser chamada até que seja distribuída entre os lotes toda a quantidade a faturar do item na nota fiscal de saída a ser gerada.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável com o código da empresa para a sugestão da quantidade do lote.
- **pCodPro** (`Alfa`) - Entrada: Variável com o código do produtora para a sugestão da quantidade do lote.
- **pCodDer** (`Alfa`) - Entrada: Variável com o código da derivação do produto para a sugestão da quantidade do lote.
- **pCodDep** (`Alfa`) - Entrada: Variável com o código do depósito onde encontra-se o produto para a sugestão da quantidade do lote.
- **pCodLot** (`Alfa`) - Entrada: Variável com o código do lote para sugestão.
- **QtdSug** (`Numero`) - Entrada: Variável com a quantidade a ser sugerida para o lote e produto na distribuição.
- **pCriFed** (`Numero`) - Entrada: Variável que tem a finalidade de indicar qual o critério de formação de estoque que será considerado na rotina de sugestão.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SugerirLoteCriterio();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/sugerirlotecriterio.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
