# InsereItensNFSaldoEstoque

## Assinatura

```lspt
Funcao Função InsereItensNFSaldoEstoque(Numero pCodEmp, Numero pCodFil,Data pDatIni, Data pDatFim);
```

## Código
N/A

## Descrição

Esta função tem por objetivo fazer uma pesquisa em itens de notas fiscais de saída(E140IPV) e notas fiscais de Entrada(E440IPC), buncando registros que satisfaçam o filtro informado.Onde o produto tem que diferente de vazio e a data de emissão das notas precisa estar dentro do período passado como parêmtro. Após fazer a peaquisa o sistema carrega o resultado em uma lista interna e a mesma fica disponível para ser usada em relatórios.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável que recebe o código da Empresa.
- **pCodFil** (`Numero`) - Entrada: Variável que recebe o código da Filial.
- **pDatIni** (`Data`) - Entrada: Variável que recebe a data inicial para processamento.
- **pDatFim** (`Data`) - Entrada: Variável que recebe a data final para processamento.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
InsereItensNFSaldoEstoque();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
