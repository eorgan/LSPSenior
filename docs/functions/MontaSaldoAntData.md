# MontaSaldoAntData

## Assinatura

```lspt
Funcao MontaSaldoAntData(Numero EmpCta,Alfa TipCta,Alfa NumCta,Numero DatIni,Numero Libera, Numero End VlrSal);
```

## Código
6

## Descrição

Esta função busca o saldo anterior de uma conta de acordo com a data passada.

## Parâmetros

- **EmpCta** (`Numero`) - Entrada: Variável que recebe a empresa da conta.
- **TipCta** (`Alfa`) - Entrada: Variável opcional que recebe o tipo da conta para buscar.
- **NumCta** (`Alfa`) - Entrada: Variável que recebe o número da conta.
- **DatIni** (`Numero`) - Entrada: Variável que recebe a data inicial que deseja-se buscar o saldo.
- **Libera** (`Numero`) - Entrada: Variável que indica se o parâmetro VlrSal vai receber o saldo disponível (1) ou o saldo do mês (0).
- **VlrSal** (`Numero End`) - Saída: Variável que retorna o valor do saldo anterior da conta recebida nos parâmetros acima.

## Valores de Retorno

- VlrSal: variável numérica que retorna o valor do saldo anterior da conta
- recebida nos parâmetros acima.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MontaSaldoAntData();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
