# LeMemListAnaEmbFil

## Assinatura

```lspt
Funcao LeMemListAnaEmbFil(Numero Pos, Numero End FimLis, Numero End CodFil, Numero End QtdApr, Numero End QtdPro);
```

## Código
N/A

## Descrição

Disponibiliza uma lista das filiais cujo estoque de embalagens (depósitos das filiais) foi analisado para esse pedido e quais suas quantidades a produzir e quais as suas quantidades aproveitadas/montadas para cada filial. Essa função só terá dados quando for executada a regra ligada ao identificador VEN, 120FILFA01, identificador esse executado dentro das rotinas de análise de embalagens de estoque do pedido.

## Parâmetros

- **Pos** (`Numero`) - Entrada: Identifica a posição a ser lida. Inicia de zero.
- **FimLis** (`Numero End`) - Saída: Retorna o valor 1 quando termina a lista. Retorna o valor 0 se a lista não terminou.
- **CodFil** (`Numero End`) - Saída: Retorna a filial que foi analisada.
- **QtdApr** (`Numero End`) - Saída: Retorna a quantidade aproveitada de grades aproveitada nos depósitos da filial retornada.
- **QtdPro** (`Numero End`) - Saída: Retorna a quantidade enviada para produção de grades da filial retornada.

## Valores de Retorno

- - Numero End FimLis - Retorna o valor 1 quando termina a lista. Retorna o valor 0 se a lista não terminou.
- - Numero End CodFil - Retorna a filial que foi analisada.
- - Numero End QtdApr - Retorna a quantidade aproveitada de grades aproveitada nos depósitos da filial retornada.
- - Numero End QtdPro - Retorna a quantidade enviada para produção de grades da filial retornada.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LeMemListAnaEmbFil();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
