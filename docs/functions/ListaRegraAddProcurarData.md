# ListaRegraAddProcurarData

## Assinatura

```lspt
Funcao ListaRegraAddProcurarData(Numero aLista, Alfa aColuna, Data aValor, Alfa End aExecutou);
```

## Código
N/A

## Descrição

Função responsável para adicionar colunas e valores a serem pesquisadas valor na lista. Pode ser executada quantas vezes for necessárias.

## Parâmetros

- **aLista** (`Numero`) - Entrada: variável numérica que recebe o endereço da lista
- **aColuna** (`Alfa`) - Entrada: variável alfa que recebe o nome da coluna
- **aValor** (`Data`) - Entrada: variável alfa que recebe o valor da coluna a ser procurada
- **aExecutou** (`Alfa End`) - Saída

## Valores de Retorno

- aExecutou: Indica se foi adicionado valor. "S" para adicionada ou "N" para não adicionado.
- **Utilização da Função (dependentes):**[ListaRegraInicializarProcurar](listaregrainicializarprocurar.md)

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ListaRegraAddProcurarData();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
