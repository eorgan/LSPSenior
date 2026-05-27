# ListaRegraCarregarJson

## Assinatura

```lspt
Funcao ListaRegraCarregarJson(Numero aLista, Alfa aJson, Alfa aGrupo, Alfa aCampos);
```

## Código
N/A

## Descrição

Esta função lê os dados de um arquivo Json e os carrega em uma lista onde cada campo do Json é uma coluna na lista e cada registro é uma linha.

## Parâmetros

- **aLista** (`Numero`) - Entrada: Recebe o endereço de memória da lista criada.
- **aJson** (`Alfa`) - Entrada: Recebe o conteúdo de um arquivo Json.
- **aGrupo** (`Alfa`) - Entrada: Recebe o grupo que deve ser lido do Json.
- **aCampos** (`Alfa`) - Entrada: Recebe os campos a serem lidos do Json (os campos devem ser separados por ";"). No entanto, caso o campo informado no parâmetro não exista no Json, a função emitirá erro, indicando que o campo é inexistente ou que não pode ser encontrado.

## Valores de Retorno

- nenhum.

## Exemplo de Uso

```lspt
{
"Documento": {
"Id": 183190,
"Descricao": "TESTE",
"CriadoPor": "email@email.com.br",
"AtualizadoPor": "email@email.com.br",
"CodigoErp": "1072"
},
"itens": [
{
"Id": 204923,
"Codigo": "1001000002",
"Descricao": "TESTE DE DESCRICAO DO ITEM 1",
"Complemento": "TESTE DE COMPLEMENTO",
"Grupo": "D"
},
{
"Id": 204922,
"Codigo": "1001000001",
"Descricao": "TESTE DESCRICAO DO ITEM",
"Grupo": "I"
}
]
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/listaregracarregarjson.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
