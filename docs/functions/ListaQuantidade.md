# ListaQuantidade

## Assinatura

```lspt
Funcao ListaQuantidade(xLista, xSeparador);
```

## Código
N/A

## Descrição

Retorna a quantidade de itens de uma lista de valores concatenados por um caracter separador em um texto.

## Parâmetros

- **xLista** - Entrada: Texto que contém a lista com os valores concatenados por um caracter separador
- **xSeparador** - Entrada: Caracter separador dos itens da lista

## Exemplo de Uso

```lspt
Definir Alfa xLista;
xLista = "valor1;valor2;valor3";
ListaQuantidade(xLista, ";", xQtde);
@ xQtde será igual a 3.
 @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/listaquantidade.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
