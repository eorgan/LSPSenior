# ConsiderarItemContrato

## Assinatura

```lspt
Funcao ConsiderarItemContrato (Numero pDatCpt,Numero pDatUft,Numero pDatIni,Numero pDiaPar, Numero pDiaBas);
```

## Código
N/A

## Descrição

Analisar se o item do contrato deverá ser impresso ou não, no relatório.

## Parâmetros

- **pDatCpt** (`Numero`) - Entrada: Mês e ano de competência para faturamento.
- **pDatUft** (`Numero`) - Entrada: Data do último faturamento efetuado.
- **pDatIni** (`Numero`) - Entrada: Data do início do processamento das parcelas.
- **pDiaPar** (`Numero`) - Entrada: Quantidade de meses de intervalo entre as parcelas.
- **pDiaBas** (`Numero`) - Entrada: Dia do mês base para o processamento das parcelas.

## Valores de Retorno

- O resultado é
- armazenado em uma variável interna do sistema e retornado através da
- função Funcao RetornaConsiderarItemCtr (Alfa End Retorno);
- Retorno (Alfa): Resultado da chamada:
- - "N": Não considera o item de contrato.
- - "S": Considera o item de contrato.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ConsiderarItemContrato();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/consideraritemcontrato.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
