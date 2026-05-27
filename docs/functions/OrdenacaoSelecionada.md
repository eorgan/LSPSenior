# OrdenacaoSelecionada

## Assinatura

```lspt
Funcao OrdenacaoSelecionada (alfa SelectionName, alfa end Ordenacao);
```

## Código
N/A

## Descrição

Esta função permite saber qual a ordenação variável selecionada.

## Parâmetros

- **SelectionName** (`alfa`) - Entrada: Nome da seção
- **Ordenacao** (`alfa end`) - Saída: Variável alfanumérica que conterá o nome da ordenação variável selecionada pelo usuário

## Exemplo de Uso

```lspt
Definir Alfa pOrdenacao;
OrdenacaoSelecionada ("Detalhe_1", pOrdenacao);
Se (pOrdenacao <> "Cadastro")
{
   Cancel(1);
}
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
