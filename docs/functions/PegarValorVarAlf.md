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

## Valores de Retorno

- aAlfVal: Variável alfanumérica que receberá o valor da variável.

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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
