# LoteLctoImportacaoSapiens

## Assinatura

```lspt
Funcao LoteLctoImportacaoSapiens(Numero pImpSap);
```

## Código
629

## Descrição

Esta função seta uma flag interna para que no caso de importações de lançamentos efetuados no próprio sistema, não sejam feitas algumas consistências internas desnecessárias no que diz respeito aos percentuais e valores de rateios.

## Parâmetros

- **pImpSap** (`Numero`) - Entrada: Variável que indica se é importação do Gestão Empresarial

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LoteLctoImportacaoSapiens();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
