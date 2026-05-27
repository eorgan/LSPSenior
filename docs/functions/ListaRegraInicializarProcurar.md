# ListaRegraInicializarProcurar

## Assinatura

```lspt
Funcao ListaRegraInicializarProcurar(Numero aLista, Alfa End aExecutou);
```

## Código
N/A

## Descrição

Função responsável por limpar pesquisas anteriores e preparar lista pra uma nova consulta. Deve ser chamado uma única vez antes das funções ([ListaRegraAddProcurarAlfa](listaregraaddprocuraralfa.md), [ListaRegraAddProcurarNumero](listaregraaddprocurarnumero.md) ou [ListaRegraAddProcurarData](listaregraaddprocurardata.md))

## Parâmetros

- **aLista** (`Numero`) - Entrada: variável numérica que recebe o endereço da lista
- **aExecutou** (`Alfa End`) - Saída

## Valores de Retorno

- aExecutou: Indica se foi adicionado valor. "S" para adicionada ou "N" para não adicionado.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ListaRegraInicializarProcurar();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/listaregrainicializarprocurar.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
