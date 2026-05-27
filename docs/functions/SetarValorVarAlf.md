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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
