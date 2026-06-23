# MontaSaldoAntConta

## Assinatura

```lspt
funcao MontaSaldoAntConta(Numero EmpCta,Alfa NumCta,Alfa TnsMov,Numero DatIni, Numero Libera,Numero End VlrSal);
```

## Código
5

## Descrição

Passando-se a Empresa, Conta, Transação(Opcional),Data Inicial, e informando se é Data Movimento ou Data Liberação, retorna o Valor do Saldo Anterior da conta.

## Parâmetros

- **EmpCta** (`Numero`) - Entrada: Variável que recebe o Código da Empresa.
- **NumCta** (`Alfa`) - Entrada: Variável que recebe o Número da Conta.
- **TnsMov** (`Alfa`) - Entrada: Variável que recebe o Código da Transação, esta variável é opcional.
- **DatIni** (`Numero`) - Entrada: Variável que recebe a data inicial que deseja-se buscar o saldo.
- **Libera** (`Numero`) - Entrada: Informar valor 0 para Data Movimento ou 1 para Data Liberação.
- **VlrSal** (`Numero End`) - Saída: Variável Numérica que retorna o Valor do Saldo Anterior.

## Valores de Retorno

- VlrSal: Variável Numérica que retorna o Valor do Saldo Anterior;

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MontaSaldoAntConta();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/montasaldoantconta.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
