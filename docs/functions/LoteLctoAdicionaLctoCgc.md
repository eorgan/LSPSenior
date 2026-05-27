# LoteLctoAdicionaLctoCgc

## Assinatura

```lspt
Funcao LoteLctoAdicionaLctoCgc(Numero pCodFil, Numero pDatLct, Numero pCtaDeb, Numero pCtaCre, Numero pVlrLct, Numero pCodHpd, Alfa pCplLct, Alfa pDocLct, Alfa pObsCpl, Numero pCgcCpf, Numero pCgcCre, Alfa end pResult);
```

## Código
N/A

## Descrição

Essa função adiciona os lançamentos em uma estrutura em memória para serem gerados posteriormente, além de permitir adicionar CPF/CNPJ para contas de crédito e débito.

## Parâmetros

- **pCodFil** (`Numero`) - Entrada: Código da filial
- **pDatLct** (`Numero`) - Entrada: Data do Lançamento
- **pCtaDeb** (`Numero`) - Entrada: Número reduzido da conta de débito
- **pCtaCre** (`Numero`) - Entrada: Número reduzido da conta de crédito
- **pVlrLct** (`Numero`) - Entrada: Valor do lançamento contábil
- **pCodHpd** (`Numero`) - Entrada: Código do histórico padrão
- **pCplLct** (`Alfa`) - Entrada: Descrição complementar do lançamento
- **pDocLct** (`Alfa`) - Entrada: Documento de controle de lançamentos
- **pObsCpl** (`Alfa`) - Entrada: Observação complementar do lançamento
- **pCgcCpf** (`Numero`) - Entrada: Número do CNPJ ou CPF da conta de débito
- **pCgcCre** (`Numero`) - Entrada: Número do CNPJ ou CPF da conta de crédito
- **pResult** (`Alfa end`) - Saída: Variável que indica o status da execução da função: retorna OK se a execução foi concluída sem problemas; caso contrário, retorna a palavra "Erro: " concatenada com a descrição da exceção ocorrida.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LoteLctoAdicionaLctoCgc();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
