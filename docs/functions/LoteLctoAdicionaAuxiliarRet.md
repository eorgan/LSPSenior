# LoteLctoAdicionaAuxiliarRet

## Assinatura

```lspt
Funcao LoteLctoAdicionaAuxiliarRet(Numero pCtaRed, Numero pCtaAux, Numero pVlrLct, Numero pCodHpd, Alfa pCplLct, Alfa pDocLct);
```

## Código
N/A

## Descrição

Esta função adiciona os lançamentos de composição auxiliar em uma estrutura em memória para serem gerados posteriormente.

## Parâmetros

- **pCtaRed** (`Numero`) - Entrada: Variável que recebe a conta contábil.
- **pCtaAux** (`Numero`) - Entrada: Variável que recebe a conta de composição auxiliar.
- **pVlrLct** (`Numero`) - Entrada: Variável que recebe o valor do lançamento auxiliar.
- **pCodHpd** (`Numero`) - Entrada: Variável que recebe a código do histórico padrão.
- **pCplLct** (`Alfa`) - Entrada: Variável que recebe os conteúdos a serem inseridos no HP.
- **pDocLct** (`Alfa`) - Entrada: Variável que recebe o documento de controle de lançamentos.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
LoteLctoAdicionaAuxiliarRet();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/lotelctoadicionaauxiliar.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
