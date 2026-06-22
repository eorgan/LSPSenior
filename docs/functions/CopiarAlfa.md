# CopiarAlfa

## Assinatura

```lspt
Funcao CopiarAlfa (VarAlfa, Posicao_Inicial, Quantidade_Caracteres);
```

## Código
N/A

## Descrição

Copiam parte do conteúdo de uma variável/campo alfanumérico modificando a própria variável de origem.

## Parâmetros

- **VarAlfa** - Entrada: Variável que contém o texto e que será modificada para conter apenas a parte copiada
- **Posicao_Inicial** - Entrada: Posição inicial (baseada em 1)
- **Quantidade_Caracteres** - Entrada: Quantidade de caracteres a copiar

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

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/copiaralfa.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
