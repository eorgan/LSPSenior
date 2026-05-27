# CorrigeSaldoporFilial

## Assinatura

```lspt
Funcao CorrigeSaldoporFilial(Numero pEmpresa, Alfa pFilial, Alfa pProduto, Alfa pDerivacao,  Alfa pDeposito,Alfa pOrigem, Alfa pFamilia);
```

## Código
735

## Descrição

**Finalidade:** Esta função tem a finalidade de efetuar a correção do saldo da filial nos movimentos de estoque em períodos de estoque que já estejam fechados sem que seja necessário atualizar os movimentos de estoque pela interface de Fechamento dos Estoques.

## Parâmetros

- **pEmpresa** (`Numero`) - Entrada: Código da Empresa
- **pFilial** (`Alfa`) - Entrada: Código da Filial do depósito
- **pProduto** (`Alfa`) - Entrada: Código do produto
- **pDerivacao** (`Alfa`) - Entrada: Código da derivação do produto
- **pDeposito** (`Alfa`) - Entrada: Código do depósito (Somente os produtos do depósito)
- **pOrigem** (`Alfa`) - Entrada: Origem dos produtos
- **pFamilia** (`Alfa`) - Entrada: Família dos produtos

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CorrigeSaldoporFilial();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
