# ConverteUnidadeMedida

## Assinatura

```lspt
Funcao Função ConverteUnidadeMedida(Alfa aCodPro, Alfa aCodDer, Alfa aUniMedDe, Alfa aUniMedPara, Numero aQtde, Numero aCodFor, Numero aQtdDec, Numero aCodEmp, Numero End aQtdCnv);
```

## Código
N/A

## Descrição

Calcula a quantidade convertida de uma unidade de medida (de) para outra unidade de medida (para).

## Parâmetros

- **aCodPro** (`Alfa`) - Entrada: Variável que indica o código de produto (opcional).
- **aCodDer** (`Alfa`) - Entrada: Variável que indica o código da derivação (opcional).
- **aUniMedDe** (`Alfa`) - Entrada: Variável que indica a unidade de medida origem (obrigatório).
- **aUniMedPara** (`Alfa`) - Entrada: Variável que indica a unidade de medida destino (obrigatório).
- **aQtde** (`Numero`) - Entrada: Variável que indica a quantidade a ser convertida (obrigatório).
- **aCodFor** (`Numero`) - Entrada: Variável que indica o código do fornecedor (opcional).
- **aQtdDec** (`Numero`) - Entrada: Variável que indica a quantidade de decimais usada na conversão (obrigatório), se não sabe-se a precisão, informar 5.
- **aCodEmp** (`Numero`) - Entrada: Variável que indica o código da empresa (opcional), caso for informado zero, sera utilizado a empresa logada.
- **aQtdCnv** (`Numero End`) - Saída: Variável que retorna a quantidade convertida da unidade de medida origem para a unidade de medida destino.

## Valores de Retorno

- aQtdCnv: Variável que retorna a quantidade convertida da unidade de medida origem para a unidade de medida destino.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ConverteUnidadeMedida();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
