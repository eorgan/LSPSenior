# ListaRegraIrPara

## Assinatura

```lspt
Funcao ListaRegraIrPara(Numero aLista, Numero aPosicao, Alfa End aExecutou);
```

## Código
N/A

## Descrição

Função responsável por verificar se existe mais algum registro com os mesmos valores informado na pesquisa anterior. Procurar da linha anterior até a primeira linha da lista. Caso não localizar um novo registro, não será alterado a posição atual.

## Parâmetros

- **aLista** (`Numero`) - Entrada: variável numérica que recebe o endereço da lista
- **aPosicao** (`Numero`) - Entrada: variável numérica que recebe o valor o qual deseja se posicionar na lista
- **aExecutou** (`Alfa End`) - Saída

## Valores de Retorno

- aExecutou: Indicativo se foi posicionado na lista. "S" para posicionado ou "N" para não posicionado.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ListaRegraIrPara();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
