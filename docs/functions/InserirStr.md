# InserirStr

## Assinatura

```lspt
Funcao InserirStr(Alfa Valor ,Alfa End Origem, Numero Pos);
```

## Código
11

## Descrição

Esta função insere um ou mais caracteres em uma Variável/Campo, a partir da posição indicada.

## Parâmetros

- **Valor** (`Alfa`) - Entrada: Variável que contém a string que deseja-se inserir
- **Origem** (`Alfa End`) - Saída: Variável que contém a string de origem e que receberá o conteúdo da inserção
- **Pos** (`Numero`) - Entrada: Variável que indica a posição em Origem a partir de onde Valor será inserido

## Valores de Retorno

- Origem: Variável alfa que receberá o conteúdo da inserção dos caracteres.

## Exemplo de Uso

```lspt
Definir Alfa vaOrigem;
vaOrigem = "Senior Sistemas";
InserirStr("empresa de ", vaOrigem, 8);
@ vaOrigem será "Senior empresa de Sistemas" @
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
