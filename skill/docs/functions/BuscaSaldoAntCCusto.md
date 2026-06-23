# BuscaSaldoAntCCusto

## Assinatura

```lspt
Funcao BuscaSaldoAntCCusto(Numero pCodEmp,Alfa pFilAbr,Numero pCtaRed,Alfa pCodCcu,Numero pDatAte,Numero pDatIni,Numero End pSalCcu);
```

## Código
518

## Descrição

Esta função carrega o saldo anterior calculado até a data informada de uma conta contábil por C. Custo. Exemplo com a função BuscaSaldoAnteriorAbr: ao informar a data base 31/01/2024, o sistema busca o saldo contábil da conta em 30/01/2024, pois este é o saldo anterior ao período informado. Confira outro exemplo:

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada
- **pFilAbr** (`Alfa`) - Entrada
- **pCtaRed** (`Numero`) - Entrada
- **pCodCcu** (`Alfa`) - Entrada
- **pDatAte** (`Numero`) - Entrada
- **pDatIni** (`Numero`) - Entrada
- **pSalCcu** (`Numero End`) - Saída

## Valores de Retorno

- pSalCcu: variável numérica que retorna o saldo anterior calculado até a data informada da conta contábil para o
- C. Custo informado no parâmetro.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscaSaldoAntCCusto();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/buscasaldoantccusto.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
