# DesCamLista

## Assinatura

```lspt
Funcao DesCamLista (Alfa TabelaCampo, Alfa Item, Alfa End Descricao);
```

## Código
N/A

## Descrição

Permite pegar a descrição de um campo lista.

## Parâmetros

- **TabelaCampo** (`Alfa`) - Entrada: Nome da Tabela/Campo entre aspas
- **Item** (`Alfa`) - Entrada: Valor do Item na lista entre aspas
- **Descricao** (`Alfa End`) - Saída: Variável alfa com a descrição do campo da lista

## Exemplo de Uso

```lspt
Definir Alfa Strdescr;
DescamLista ("R034FUN.TIPCOL","1",strdescr);
Strdescr conterá "Colaborador".
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/descamlista.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
