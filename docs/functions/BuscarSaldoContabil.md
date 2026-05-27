# BuscarSaldoContabil

## Assinatura

```lspt
Funcao BuscarSaldoContabil(Numero aCtaRed, Alfa aCodCcu, Numero aMesAno, Numero End aSaldo);
```

## Código
797

## Descrição

Retornar o saldo contábil conforme dados passados via parâmetro.

## Parâmetros

- **aCtaRed** (`Numero`) - Entrada: Código da conta contábil.
- **aCodCcu** (`Alfa`) - Entrada: Código do centro de custo.
- **aMesAno** (`Numero`) - Entrada: Competência a que se refere o saldo contábil.
- **aSaldo** (`Numero End`) - Saída: Retorna o saldo para a combinação da conta contábil, centro de custo (caso tipo de saldo 8) e competência.

## Valores de Retorno

- aSaldo: Retorna o saldo para a combinação da conta contábil, centro de
- custo (caso tipo de saldo 8) e competência.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscarSaldoContabil();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
