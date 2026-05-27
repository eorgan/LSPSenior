# CarregaSaldoContabil

## Assinatura

```lspt
Funcao CarregaSaldoContabil(Numero pCodEmp,Numero pCodFil,Numero pMesIni,Numero pMesFim);
```

## Código
83

## Descrição

Esta função carrega o saldo contábil de uma empresa, sua filial e seus respectivos períodos. Quando o código da filial for igual a zero (0), buscará o saldo de todas as empresas(consolidado). Todas as contas contábeis sintéticas e analíticas são consideradas nesta estrutura.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável que recebe o código da empresa.
- **pCodFil** (`Numero`) - Entrada: Variável que recebe o código da filial.
- **pMesIni** (`Numero`) - Entrada: Variável (data) que receba a data inicial.
- **pMesFim** (`Numero`) - Entrada: Variável (data) que receba a data final.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CarregaSaldoContabil();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
