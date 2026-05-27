# BuscaSaldoAnteriorAbrAux

## Assinatura

```lspt
Funcao BuscaSaldoAnteriorAbrAux(Numero pCodEmp,Alfa pFilAbr,Numero pCtaRed,Numero pCtaAux,Numero pMesAte,Numero End pSalAte);
```

## Código
571

## Descrição

Esta função disponibiliza o saldo anterior da conta auxiliar (de uma empresa, a(s) filial(is) e uma conta) contábil calculado até a data informada. Exemplo com a função BuscaSaldoAnteriorAbr: ao informar a data base 31/01/2024, o sistema busca o saldo contábil da conta em 30/01/2024, pois este é o saldo anterior ao período informado. Confira outro exemplo:

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada
- **pFilAbr** (`Alfa`) - Entrada
- **pCtaRed** (`Numero`) - Entrada
- **pCtaAux** (`Numero`) - Entrada
- **pMesAte** (`Numero`) - Entrada
- **pSalAte** (`Numero End`) - Saída

## Valores de Retorno

- pSalAte: variável numérica que
- retorna o saldo anterior calculado até a data informada.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscaSaldoAnteriorAbrAux();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/buscasaldoanteriorabraux.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
