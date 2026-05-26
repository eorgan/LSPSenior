# PegarValorVarAlf

## Assinatura

```lspt
Funcao PegarValorVarAlf(Alfa aVar, Alfa End aAlfVal);
```

## Código
620

## Descrição

Retorna o valor de uma variável alfanumérica identificada por nome.

## Parâmetros

- **aVar** (`Alfa`) - Entrada: String contendo o nome da variável
- **aAlfVal** (`Alfa End`) - Saída: Variável alfa que receberá o valor

## Exemplo de Uso

```lspt
Definir Alfa vTexto;
Definir Alfa vValor;
Definir Alfa vNomeVar;

vTexto = "Conteúdo da variável";
vNomeVar = "vTexto";

PegarValorVarAlf(vNomeVar, vValor);
@ vValor será "Conteúdo da variável" @

@ Erro se tentar acessar variável de tipo diferente @
@ PegarValorVarAlf("vnNumero", vValor); @ Gerará erro @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
