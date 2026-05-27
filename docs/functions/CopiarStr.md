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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
