# ListaItem

## Assinatura

```lspt
Funcao ListaItem(Alfa Lista, Alfa Separador, Numero Indice, Alfa End Valor);
```

## Código
N/A

## Descrição

Retorna o valor de um item de uma lista de valores concatenados por um caracter separador. O índice do primeiro item da lista é **1** e do último item é igual a quantidade de itens da lista.

## Parâmetros

- **Lista** (`Alfa`) - Entrada: Texto que contém a lista com os valores concatenados por um caracter separador
- **Separador** (`Alfa`) - Entrada: Caracter separador dos itens da lista
- **Indice** (`Numero`) - Entrada: Indice do item da lista que ser quer obter o valor
- **Valor** (`Alfa End`) - Saída: Retorna o valor do item da lista referente ao indice informado

## Exemplo de Uso

```lspt
Definir Alfa xLista;
Definir Alfa xValor;
xLista = "valor1;valor2;valor3";
ListaQuantidade(xLista, ";", xQtde);
xIndice = 1;
Enquanto (xIndice <= xqtde)
 Inicio
  ListaItem(xLista, ";", xIndice, xValor);
  Mensagem(Retorna, xValor);
  xIndice = xIndice + 1;
Fim;
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/listaitem.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
