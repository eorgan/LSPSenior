# LoteLctoAdicionaLctoRet

## Assinatura

```lspt
Funcao LoteLctoAdicionaLctoRet(Numero pCodFil, Numero pDatLct, Numero pCtaDeb, Numero pCtaCre, Numero pVlrLct, Numero pCodHpd, Alfa pCplLct,;
```

## Código
N/A

## Descrição

Esta função adiciona os lançamentos em uma estrutura em memória para serem gerados posteriormente.

## Parâmetros

- **pCodFil** - Entrada: Variável que recebe o código da filial do lançamento.
- **pDatLct** - Entrada: Variável que recebe a data do lançamento
- **pCtaDeb** - Entrada: Variável que recebe a conta débito.
- **pCtaCre** - Entrada: Variável que recebe a conta crédito.
- **pVlrLct** - Entrada: Variável que recebe o valor do lançamento
- **pCodHpd** - Entrada: Variável que recebe a código do histórico padrão.
- **pCplLct** - Entrada: Variável que recebe os conteúdos a serem inseridos no HP.
- **pDocLct** - Entrada: Variável que recebe o documento de controle de lançamentos.
- **pResult** - Entrada: Variável que retorna se a função foi executada sem problemas: Se retornar 'OK' foi feita sem problemas, caso contrário retornará a palavra "Erro: " concatenada com a descrição da exceção ocorrida.

## Valores de Retorno

- pResult: Variável alfa que retorna se a função foi
- executada sem problemas: Se retornar 'OK' foi feita sem problemas, caso contrário
- retornará a palavra "Erro: " concatenada com a descrição da exceção
- ocorrida.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LoteLctoAdicionaLctoRet();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/lotelctoadicionalctoret.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
