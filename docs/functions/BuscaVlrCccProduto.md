# BuscaVlrCccProduto

## Assinatura

```lspt
Funcao BuscaVlrCccProduto(Numero TabCcc,Numero Codccc,Alfa CodPro,Alfa CodDer, Numero End VlrCcc);
```

## Código
612

## Descrição

Retornar o valor de um componente de cálculo, conforme a tabela, o código do componente e o produto/derivação informados, sendo que essa função retorna o valor correto considerando as seguintes possibilidades de cadastramento de Valores de Componentes de Cálculo por Tabela: por origem, família, produto, derivação ou agrupamentos. Não é possível usar a função sem que seja passado ao menos um valor dentre origem, família, produto, derivação ou agrupamentos.

## Parâmetros

- **TabCcc** (`Numero`) - Entrada: Código da tabela de componentes de cálculo.
- **Codccc** (`Numero`) - Entrada: Código do Componente de cálculo.
- **CodPro** (`Alfa`) - Entrada: Código do produto para o qual se deseja buscar o valor do componente de cálculo.
- **CodDer** (`Alfa`) - Entrada: Código da derivação para a qual se deseja buscar o valor do componente de cálculo.
- **VlrCcc** (`Numero End`) - Saída: Valor do componente de cálculo resultante da busca. (retorno)

## Valores de Retorno

- VlrCcc - Numérico (valor do componente de cálculo
- resultante da busca)

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BuscaVlrCccProduto();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
