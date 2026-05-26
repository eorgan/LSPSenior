# InserirAlfa

## Assinatura

```lspt
Funcao InserirAlfa(Alfa Valor ,Alfa End Origem, Numero Pos);
```

## Código
43

## Descrição

Insere um ou mais caracteres em uma variável/campo, a partir da posição indicada.

## Parâmetros

- **Valor** (`Alfa`) - Entrada: Variável que contém a string que deseja-se inserir
- **Origem** (`Alfa End`) - Saída: Variável que contém a string de origem e que receberá o conteúdo da inserção
- **Pos** (`Numero`) - Entrada: Variável que indica a posição em Origem a partir de onde Valor será inserido

## Exemplo de Uso

```lspt
Definir Alfa vaOrigem;
vaOrigem = "Senior Sistemas";
InserirAlfa("empresa de ", vaOrigem, 8);
@ vaOrigem será "Senior empresa de Sistemas" @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
