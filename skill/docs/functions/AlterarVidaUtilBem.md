# AlterarVidaUtilBem

## Assinatura

```lspt
Funcao AlterarVidaUtilBem(Numero aCodEmp, Alfa aCodBem, Data aDatIvd, Alfa aVidUti, Alfa aUniMed, Numero aVidTot, Numero aVidIni, Numero aVidMes, Numero aVlrJus, Numero aVlrEsp, Numero aVlrRes, Numero aVdpAcu, Numero aGerarAcr);
```

## Código
781

## Descrição

Gerar a movimentação de alteração da vida útil do bem, com a possibilidade da geração dos acréscimos do valor justo.

## Parâmetros

- **aCodEmp** (`Numero`) - Entrada: Empresa
- **aCodBem** (`Alfa`) - Entrada: Bem
- **aDatIvd** (`Data`) - Entrada: Data ini. cálculo vida útil.
- **aVidUti** (`Alfa`) - Entrada: Vida útil inicial.
- **aUniMed** (`Alfa`) - Entrada: Unidade medida.
- **aVidTot** (`Numero`) - Entrada: Vida útil total.
- **aVidIni** (`Numero`) - Entrada: Vida útil inicial.
- **aVidMes** (`Numero`) - Entrada: Vida útil mês.
- **aVlrJus** (`Numero`) - Entrada: Valor justo.
- **aVlrEsp** (`Numero`) - Entrada: Valor Especifico entidade.
- **aVlrRes** (`Numero`) - Entrada: Valor residual.
- **aVdpAcu** (`Numero`) - Entrada: Depreciação acumulada inicial por vida útil em índice oficial.
- **aGerarAcr** (`Numero`) - Entrada: Gerar acréscimo valor justo?   0. Não 1. Custo Atribuído 2. Impairment)

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AlterarVidaUtilBem();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/alterarvidautilbem.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
