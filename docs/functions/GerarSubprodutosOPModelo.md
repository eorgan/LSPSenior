# GerarSubprodutosOPModelo

## Assinatura

```lspt
Funcao GerarSubprodutosOPModelo(Numero aCodEmp, Alfa aCodOri, Numero aNumOrp, Alfa End aRetorno);
```

## Código
805

## Descrição

Gerar registros de subprodutos de OPs antigas, antes de existir a tabela E900SPR.

## Parâmetros

- **aCodEmp** (`Numero`) - Entrada: Código da Origem.
- **aCodOri** (`Alfa`) - Entrada: Número da OP.
- **aNumOrp** (`Numero`) - Entrada
- **aRetorno** (`Alfa End`) - Saída: Mensagem de Retorno.

## Valores de Retorno

- Retorna um texto em relação a execução do processo. “OK” significa que a rotina foi executada com sucesso e também retornará as mensagens de consistência incluídas na rotina.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
GerarSubprodutosOPModelo();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
