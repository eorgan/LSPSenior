# CopiarStr

## Assinatura

```lspt
Funcao CopiarStr(Alfa End Origem, Numero Pos, Numero Qtd);
```

## Código
14

## Descrição

Copiam parte do conteúdo de uma variável/campo alfanumérico modificando a própria variável de origem.

## Parâmetros

- **Origem** (`Alfa End`) - Saída: Variável que contém o texto e que será modificada para conter apenas a parte copiada
- **Pos** (`Numero`) - Entrada: Posição inicial (baseada em 1)
- **Qtd** (`Numero`) - Entrada: Quantidade de caracteres a copiar

## Exemplo de Uso

```lspt
Definir Alfa vaTexto;
Definir Alfa vaNome;
Definir Alfa vaSobrenome;

@ Para extrair "João" @
vaTexto = "João Silva Santos";
vaNome = vaTexto;  @ Faz uma cópia primeiro @
CopiarAlfa(vaNome, 1, 4); @ vaNome será "João" @

@ Para extrair "Silva" @
vaSobrenome = vaTexto;  @ Faz uma cópia primeiro @
CopiarAlfa(vaSobrenome, 6, 5); @ vaSobrenome será "Silva" @
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
