# LoteLctoAdicionaLcto

## Assinatura

```lspt
Funcao LoteLctoAdicionaLcto(Numero pCodFil, Numero pDatLct, Numero pCtaDeb, Numero pCtaCre, Numero pVlrLct, Numero pCodHpd, Alfa pCplLct, Numero pNumFtc);
```

## Código
N/A

## Descrição

Esta função adiciona os lançamentos em uma estrutura em memória para serem gerados posteriormente.

## Parâmetros

- **pCodFil** (`Numero`) - Entrada: Variável que recebe o código da filial do lançamento.
- **pDatLct** (`Numero`) - Entrada: Variável que recebe a data do lançamento.
- **pCtaDeb** (`Numero`) - Entrada: Variável que recebe a conta débito.
- **pCtaCre** (`Numero`) - Entrada: Variável que recebe a conta crédito.
- **pVlrLct** (`Numero`) - Entrada: Variável que recebe o valor do lançamento.
- **pCodHpd** (`Numero`) - Entrada: Variável que recebe a código do histórico padrão.
- **pCplLct** (`Alfa`) - Entrada: Variável que recebe os conteúdos a serem inseridos no HP.
- **pNumFtc** (`Numero`) - Entrada: Variável que recebe o número do fato contábil do lançamento.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LoteLctoAdicionaLcto();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/lotelctoadicionalcto.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
