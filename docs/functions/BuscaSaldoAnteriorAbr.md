# BuscaSaldoAnteriorAbr

## Assinatura

```lspt
Funcao BuscaSaldoAnteriorAbr(Numero pCodEmp,Alfa pFilAbr,Numero pCtaRed,Numero pMesAte,Numero End pSalAte);
```

## Código
123

## Descrição

Esta função disponibiliza o saldo contábil anterior (de uma empresa, a(s) filial(is) e uma conta) calculado até a data informada. Exemplo: ao informar a data base 31/01/2024, o sistema busca o saldo contábil da conta em 30/01/2024, pois este é o saldo anterior ao período informado. Confira outro exemplo:

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada
- **pFilAbr** (`Alfa`) - Entrada
- **pCtaRed** (`Numero`) - Entrada
- **pMesAte** (`Numero`) - Entrada
- **pSalAte** (`Numero End`) - Saída

## Valores de Retorno

- pSalAte: variável numérica que retorna o saldo anterior calculado até a data informada.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscaSaldoAnteriorAbr();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
