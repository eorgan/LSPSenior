# SetarValorVarAlf

## Assinatura

```lspt
Funcao SetarValorVarAlf(Alfa aVar, Alfa aAlfVal);
```

## Código
622

## Descrição

Define o valor de uma variável alfanumérica identificada por nome.

## Parâmetros

- **aVar** (`Alfa`) - Entrada: String contendo o nome da variável
- **aAlfVal** (`Alfa`) - Entrada: Valor alfa a ser atribuído à variável

## Exemplo de Uso

```lspt
Definir Alfa vTexto;
Definir Alfa vNovoValor;

vNovoValor = "Novo conteúdo";
SetarValorVarAlf("vTexto", vNovoValor);
@ vTexto agora contém "Novo conteúdo" @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
