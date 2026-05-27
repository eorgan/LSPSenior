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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
