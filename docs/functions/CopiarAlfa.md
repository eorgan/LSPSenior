# CopiarAlfa

## Assinatura

```lspt
Funcao CopiarAlfa (VarAlfa, Posicao_Inicial, Quantidade_Caracteres);
```

## Código
N/A

## Descrição

Esta função copia parte do conteúdo de uma variável/campo **alfanumérico** para a variável **alfanumérica Retorno**.

## Parâmetros

- **VarAlfa** - Entrada: Variável com o conteúdo do qual se deseja copiar uma parte do texto, retornando o conteúdo copiado
- **Posicao_Inicial** - Entrada: Posição a partir da qual se deseja copiar os caracteres
- **Quantidade_Caracteres** - Entrada: Quantidade de caracteres que se deseja copiar a partir da **Posicao_Inicial**

## Exemplo de Uso

```lspt
Definir Alfa exemplo;
exemplo = "texto de exemplo";
CopiarAlfa (exemplo,12,3);
@ Após o uso da função CopiarAlfa o conteúdo da variável "exemplo" seria "emp". @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/copiaralfa.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
