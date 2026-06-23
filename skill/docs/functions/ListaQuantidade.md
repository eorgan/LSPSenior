# ListaQuantidade

## Assinatura

```lspt
Funcao ListaQuantidade(xLista, xSeparador);
```

## Código
N/A

## Descrição

Retorna a quantidade de itens em uma lista concatenada através de parâmetro de retorno.

## Parâmetros

- **xLista** - Entrada: Texto com itens separados
- **xSeparador** - Entrada: Caractere que separa os itens

## Exemplo de Uso

```lspt
Definir Alfa vaEmails;
Definir Numero vnQuantidade;
Definir Alfa vaMensagem;
Definir Alfa vaQuantidadeStr;

vaEmails = "user1@teste.com,user2@teste.com,user3@teste.com";
ListaQuantidade(vaEmails, ",", vnQuantidade);

IntParaAlfa(vnQuantidade, vaQuantidadeStr);
vaMensagem = "Total de emails: " + vaQuantidadeStr;
Mensagem(Retorna, vaMensagem); @ "Total de emails: 3" @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/listaquantidade.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
