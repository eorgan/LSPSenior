# SaldoMes

## Assinatura

```lspt
Funcao SaldoMes(Numero pCtaRed, Numero pMesSal, Alfa pDebCre;
```

## Código
N/A

## Descrição

O saldo é retornado através das variáveis pSalM01, pSalM02, pSalM03, pSalM04, pSalM05 e pSalM06. Todas as contas contábeis sintéticas e analíticas estão disponíveis nesta estrutura.

## Parâmetros

- **pCtaRed**: Variável que recebe o número da conta contábil que deseja-se buscar o saldo contábil.
- **pMesSal**: Variável que recebe o mês inicial referente ao periodo no qual se deseja o saldo da conta contábil.
- **pDebCre**: Variável que indica que valores retornarão nas variáveis de saldo. C = Créditos do mês.  D = Débitos do mês. A = Saldo Anterior ( valor retornará somente no parâmetro do primeiro mês). S = Saldo mês ( Débitos - Créditos).
- **pSalM01**: Variável que retorna o saldo referente ao primeiro mês do período informado.
- **pSalM02**: Variável que retorna o saldo referente ao segundo mês do período informado.
- **pSalM03**: Variável que retorna o saldo referente ao terceiro mês do período informado.
- **pSalM04**: Variável que retorna o saldo referente ao quarto mês do período informado.
- **pSalM05**: Variável que retorna o saldo referente ao quinto mês do período informado.
- **pSalM06**: Variável que retorna o saldo referente ao sexto mês do período informado.

## Valores de Retorno

- - pSalM01: Variável numérica que retorna o saldo referente ao primeiro mês do período
- informado.
- - pSalM02: Variável numérica que retorna o saldo referente ao segundo mês do período
- informado.
- - pSalM03: Variável numérica que retorna o saldo referente ao terceiro mês do período
- informado.
- - pSalM04: Variável numérica que retorna o saldo referente ao quarto mês do período
- informado.
- - pSalM05: Variável numérica que retorna o saldo referente ao quinto mês do período
- informado.
- - pSalM06: Variável numérica que retorna o saldo referente ao sexto mês do período
- informado.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SaldoMes();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
