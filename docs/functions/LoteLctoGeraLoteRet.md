# LoteLctoGeraLoteRet

## Assinatura

```lspt
Funcao LoteLctoGeraLoteRet(Alfa end pResult);
```

## Código
589

## Descrição

Esta função gera o lote contábil, bem como os lançamentos e rateios adicionados através das funções LoteLctoAdicionaLctoRet, LoteLctoAdicionaRateioRet e LoteLctoAdicionaAuxiliarRet.

## Parâmetros

- **pResult** (`Alfa end`) - Saída: Variável que retorna se a função foi executada sem problemas: Se retornar 'OK' foi feita sem problemas, caso contrário retornará a palavra "Erro: " concatenada com a descrição da exceção ocorrida.

## Valores de Retorno

- pResult: Variável alfa que retorna se a função foi
- executada sem problemas: Se retornar 'OK' foi feita sem problemas, caso contrário
- retornará a palavra "Erro: " concatenada com a descrição da exceção
- ocorrida.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LoteLctoGeraLoteRet();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
