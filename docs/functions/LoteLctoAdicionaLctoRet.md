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

- **pCodFil**: Variável que recebe o código da filial do lançamento.
- **pDatLct**: Variável que recebe a data do lançamento
- **pCtaDeb**: Variável que recebe a conta débito.
- **pCtaCre**: Variável que recebe a conta crédito.
- **pVlrLct**: Variável que recebe o valor do lançamento
- **pCodHpd**: Variável que recebe a código do histórico padrão.
- **pCplLct**: Variável que recebe os conteúdos a serem inseridos no HP.
- **pDocLct**: Variável que recebe o documento de controle de lançamentos.
- **pResult**: Variável que retorna se a função foi executada sem problemas: Se retornar 'OK' foi feita sem problemas, caso contrário retornará a palavra "Erro: " concatenada com a descrição da exceção ocorrida.

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

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
