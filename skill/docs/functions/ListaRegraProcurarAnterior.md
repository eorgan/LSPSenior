# ListaRegraProcurarAnterior

## Assinatura

```lspt
Funcao ListaRegraProcurarAnterior(Numero aLista, Alfa End aExisteRegistro);
```

## Código
N/A

## Descrição

Função responsável por verificar se existe mais algum registro com os mesmos valores informado na pesquisa anterior. Procura da linha anterior até a primeira linha da lista. Caso não localizar um novo registro, não será alterado a posição atual.

## Parâmetros

- **aLista** (`Numero`) - Entrada: variável numérica que recebe o endereço da lista
- **aExisteRegistro** (`Alfa End`) - Saída

## Valores de Retorno

- ** aExisteRegistro: Indicativo se foi localizado um novo registro com os mesmos parâmetros da pesquisa anterior. "S" para localizou novo registro ou "N" para não localizou novo registro.
- **Utilização da Função (dependentes):** [ListaRegraProcurarRegistro](listaregraprocurarregistro.md), [ListaRegraProcurarAlfa](listaregraprocuraralfa.md), [ListaRegraProcurarNumero](listaregraprocurarnumero.md), [ListaRegraProcurarData](listaregraprocurardata.md)

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ListaRegraProcurarAnterior();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/listaregraprocuraranterior.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
