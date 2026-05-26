# DeletarStr

## Assinatura

```lspt
Funcao DeletarStr(Alfa End Origem, Numero Pos, Numero Qtd);
```

## Código
13

## Descrição

Elimina parte de um texto.

## Parâmetros

- **Origem** (`Alfa End`) - Saída: Variável que passará o texto cuja parte será deletada
- **Pos** (`Numero`) - Entrada: Variável que indica a posição de início da eliminação
- **Qtd** (`Numero`) - Entrada: Variável que indica a quantidade de caracteres a serem eliminados

## Exemplo de Uso

```lspt
Definir Alfa vaOrigem;
vaOrigem = "Senior empresa de Sistemas";
DeletarStr(vaOrigem, 8, 11);
@ vaOrigem será "Senior Sistemas" @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
