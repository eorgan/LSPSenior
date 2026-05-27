# GeraMovimentoNFSaida

## Assinatura

```lspt
Funcao GeraMovimentoNFSaida(Numero pCodEmp, Numero pCodFil, Alfa pCodSnf, Numero pNumNfv, Numero pSeqIpv, Alfa pCodTns);
```

## Código
563

## Descrição

Esta função tem por objetivo fazer movimentos de estoque automaticos, com as informãções forne- cida pelo item da nota fiscal que esta sendo processada. Com o movimentos todos os campos do sistema serão automaticamente atualizados corretamento, como saldos,preços da nota etc... Esta rotina deverá ser utlizada quando o fechamento da Nota Fiscal não partir de uma tela normal do sistema.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável que recebe o código da Empresa.
- **pCodFil** (`Numero`) - Entrada: Variável que recebe o código da Filial.
- **pCodSnf** (`Alfa`) - Entrada: Variável que recebe a série da nota fiscal.
- **pNumNfv** (`Numero`) - Entrada: Variável que recebe o número da nota fiscal.
- **pSeqIpv** (`Numero`) - Entrada: Variável que recebe a sequência do item da nota fiscal.
- **pCodTns** (`Alfa`) - Entrada: Variável que recebe a transação que será utilizada no processo.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
GeraMovimentoNFSaida();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
