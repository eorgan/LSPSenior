# GerarEntregaVarejo

## Assinatura

```lspt
funcao GerarEntregaVarejo(Numero filialEntrega, numero LocalEntrega, numero Empresa, numero filialNf, numero numeroNf, alfa serieNf, numero ignorarsejaexiste, numero end  numeroentrega);
```

## Código
905

## Descrição

Esta função tem como objetivo gerar uma entrega a partir de uma NF (tipo da entrega: 4 - Futura do ERP).

## Parâmetros

- **filialEntrega** (`Numero`) - Entrada: Código da filial que deverá entregar
- **LocalEntrega** (`numero`) - Entrada: Código do local de entrega (busca da tabela E062LOC, conforme a filial)
- **Empresa** (`numero`) - Entrada: Código da empresa
- **filialNf** (`numero`) - Entrada: Código da filial da NF
- **numeroNf** (`numero`) - Entrada: Número da nota fiscal
- **serieNf** (`alfa`) - Entrada: Série da nota fiscal
- **ignorarsejaexiste** (`numero`) - Entrada: Caso já tenha uma entrega gerada com essa nota fiscal, não faz nenhuma ação. 1 = Ignorar, 0 = Não ignorar (caso 1, irá gerar de novo)
- **numeroentrega** (`numero end`) - Saída: Retorno, com o número da entrega gerada

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
GerarEntregaVarejo();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/gerarentregavarejo.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
