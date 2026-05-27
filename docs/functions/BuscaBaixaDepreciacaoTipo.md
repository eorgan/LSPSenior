# BuscaBaixaDepreciacaoTipo

## Assinatura

```lspt
Funcao BuscaBaixaDepreciacaoTipo(Numero aCodEmp, Alfa aCodBem, Numero aNumMan, Numero aDatMov, Numero aSeqMov, Alfa aCodTns, Alfa aTnsOri, Numero aVlrMov, Numero aTipo, Numero End aBaseCalculo);
```

## Código
N/A

## Descrição

Esta função retorna os valores de baixa da: - Depreciação em Índice Oficial; - Depreciação em Moeda Corrente; - Paralela em Índice Oficial; - Paralela em Moeda Corrente; - Adoção Inicial em Índice Oficial; - Adoção Inicial em Moeda Corrente.

## Parâmetros

- **aCodEmp** (`Numero`) - Entrada: Código da empresa do movimento que se deseja buscar a baixa da depreciação.
- **aCodBem** (`Alfa`) - Entrada: Número de manutenção do movimento que se deseja buscar a baixa da depreciação.
- **aNumMan** (`Numero`) - Entrada: Data do movimento que se deseja buscar a baixa da depreciação.
- **aDatMov** (`Numero`) - Entrada: Sequência do movimento que se deseja buscar a baixa da depreciação.
- **aSeqMov** (`Numero`) - Entrada: Código da transação do movimento que se deseja buscar a baixa da depreciação.
- **aCodTns** (`Alfa`) - Entrada: Código da transação de origem do movimento que se deseja buscar a baixa da depreciação.
- **aTnsOri** (`Alfa`) - Entrada: Valor do movimento que se deseja buscar a baixa da depreciação.
- **aVlrMov** (`Numero`) - Entrada: Indicar o tipo de cálculo a ser retornado, podendo ser: 1 - Índice oficial, 2 - Moeda corrente, 3 - Paralela em Índice Oficial, 4 - Paralela em Moeda Corrente, 5 - Adoção inicial em Índice Oficial ou 6 - Adoção inicial em Moeda Corrente.
- **aTipo** (`Numero`) - Entrada: Indicar o tipo de cálculo a ser retornado, podendo ser: 1 - Índice oficial, 2 - Moeda corrente, 3 - Paralela em Índice Oficial, 4 - Paralela em Moeda Corrente, 5 - Adoção inicial em Índice Oficial ou 6 - Adoção inicial em Moeda Corrente.
- **aBaseCalculo** (`Numero End`) - Saída: Retorno da baixa conforme informado no parâmetro anterior.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscaBaixaDepreciacaoTipo();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
