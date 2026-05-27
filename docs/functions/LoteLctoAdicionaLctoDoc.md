# LoteLctoAdicionaLctoDoc

## Assinatura

```lspt
Funcao LoteLctoAdicionaLctoDoc(Numero pCodFil, Numero pDatLct, Numero pCtaDeb, Numero pCtaCre, Numero pVlrLct, Numero pCodHpd, Alfa pCplLct, Alfa pDocLct) ;
```

## Código
N/A

## Descrição

Esta função é utilizada para passar parâmetros para geração de lançamentos via Importação(SAIM640.scf).

## Parâmetros

- **pCodFil** (`Numero`) - Entrada: Variável que recebe o código da filial.
- **pDatLct** (`Numero`) - Entrada: Variável (data) que recebe a data do lançamento.
- **pCtaDeb** (`Numero`) - Entrada: Variável que recebe o código da conta reduzida contábil a débito.
- **pCtaCre** (`Numero`) - Entrada: Variável que recebe o código da conta reduzida contábil a crédito.
- **pVlrLct** (`Numero`) - Entrada: Variável que recebe o valor do lançamento.
- **pCodHpd** (`Numero`) - Entrada: Variável que recebe o código do histórico padrão.
- **pCplLct** (`Alfa`) - Entrada: Variável que recebe os conteúdos a serem inseridos no HP.
- **pDocLct** (`Alfa`) - Entrada: Variável que recebe o número do documento.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LoteLctoAdicionaLctoDoc();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
