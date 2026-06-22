# ListaItem

## Assinatura

```lspt
Funcao ListaItem(Alfa Lista, Alfa Separador, Numero Indice, Alfa End Valor);
```

## Código
N/A

## Descrição

Retorna um item específico de uma lista concatenada.

## Parâmetros

- **Lista** (`Alfa`) - Entrada: Texto que contém a lista com os valores concatenados por um caracter separador
- **Separador** (`Alfa`) - Entrada: Caracter separador dos itens da lista
- **Indice** (`Numero`) - Entrada: Indice do item da lista que ser quer obter o valor
- **Valor** (`Alfa End`) - Saída: Retorna o valor do item da lista referente ao indice informado

## Exemplo de Uso

```lspt
Definir Alfa vaLinhaCsv;
Definir Alfa vaNome;
Definir Alfa vaIdade;
Definir Alfa vaCargo;

vaLinhaCsv = "João Silva;30;Desenvolvedor;São Paulo";

ListaItem(vaLinhaCsv, ";", 1, vaNome);    @ vaNome = "João Silva" @
ListaItem(vaLinhaCsv, ";", 2, vaIdade);   @ vaIdade = "30" @
ListaItem(vaLinhaCsv, ";", 3, vaCargo);   @ vaCargo = "Desenvolvedor" @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/listaitem.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
