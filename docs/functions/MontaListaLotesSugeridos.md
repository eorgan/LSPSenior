# MontaListaLotesSugeridos

## Assinatura

```lspt
Funcao MontaListaLotesSugeridos(Numero pCodEmp,Alfa pCodPro,Alfa pCodDer,Alfa pCodDep,Alfa pCodLot,Numero QtdSug);
```

## Código
753

## Descrição

Efetuar a sugestão do lote de forma automática. A função de programador deve ser chamada até que seja distribuída entre os lotes toda a quantidade a faturar do item na nota fiscal de saída a ser gerada.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável com o código da empresa para a sugestão da quantidade do lote.
- **pCodPro** (`Alfa`) - Entrada: Variável com o código do produtora para a sugestão da quantidade do lote.
- **pCodDer** (`Alfa`) - Entrada: Variável com o código da derivação do produto para a sugestão da quantidade do lote.
- **pCodDep** (`Alfa`) - Entrada: Variável com o código do depósito onde encontra-se o produto para a sugestão da quantidade do lote.
- **pCodLot** (`Alfa`) - Entrada: Variável com o código do lote para sugestão.
- **QtdSug** (`Numero`) - Entrada: Variável com a quantidade a ser sugerida para o lote e produto na distribuição.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MontaListaLotesSugeridos();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/montalistalotessugeridos.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
