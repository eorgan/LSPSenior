# LeGridBaixasBcd

## Assinatura

```lspt
Funcao LeGridBaixasBcd(Numero NumPos,Numero End FimLis,Numero End Sel,Numero End Fil,Alfa End Tit,Alfa End Tpt);
```

## Código
614

## Descrição

Esta função varre a grade de Títulos a Baixar da tela de Baixa por recebimento de ChequesDiversos (F301BCD). Função a ser utilizada nos identificadores 301BCDCO01, 301BCDCH01, 301BCDBC01, 301BCDGC01, 301BCDCP01.

## Parâmetros

- **NumPos** (`Numero`) - Entrada: Variável que indica em que linha da grade de baixas se está.
- **FimLis** (`Numero End`) - Saída: Variável que indica se está no fim da grade ou não (0 - Não, 1 - Sim).
- **Sel** (`Numero End`) - Saída: Variável que indica se o título está selecionado para processar (retorno).
- **Fil** (`Numero End`) - Saída: Variável que indica se o título está selecionado para processar (retorno).
- **Tit** (`Alfa End`) - Saída: Variável que indica o número do título (retorno).
- **Tpt** (`Alfa End`) - Saída: Variável que indica o tipo do título (retorno).

## Valores de Retorno

- - Sel : Variável que indica se o título está selecionado para processar.
- - Fil : Variável que indica a filial do título.
- - Tit : Variável que indica o número do título.
- - Tpt : Variável que indica o tipo do título.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LeGridBaixasBcd();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
