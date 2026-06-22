# OrdenacaoSelecionada

## Assinatura

```lspt
Funcao OrdenacaoSelecionada (alfa SelectionName, alfa end Ordenacao);
```

## Código
N/A

## Descrição

Permite saber qual a ordenação variável selecionada.

## Parâmetros

- **SelectionName** (`alfa`) - Entrada: Nome da seção
- **Ordenacao** (`alfa end`) - Saída: Variável alfanumérica que conterá o nome da ordenação variável selecionada

## Exemplo de Uso

```lspt
Definir Alfa pOrdenacao;
OrdenacaoSelecionada("Detalhe_1", pOrdenacao);
Se (pOrdenacao <> "Cadastro") {
  Cancel(1);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/ordenacaoselecionada.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
