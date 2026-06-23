# GeraLog

## Assinatura

```lspt
funcao GeraLog(Alfa pDscMem);
```

## Código
513

## Descrição

Esta função tem como objetivo gerar uma mensagem no arquivo de log dos processos automáticos e abortar a operação. Caso seja utilizada em regras que não sejam executadas através de agendador de processos, a mensagem será exibida em tela.

## Parâmetros

- **pDscMem** (`Alfa`) - Entrada: Variável alfanumérica que recebe a descrição que deseja-se gravar no arquivo de log.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
GeraLog();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/geralog.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
