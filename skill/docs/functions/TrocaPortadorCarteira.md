# TrocaPortadorCarteira

## Assinatura

```lspt
Funcao TrocaPortadorCarteira(Numero pCodEmp, Numero pCodFil, Alfa pNumTit, Alfa pCodTpt, Alfa pCodPor, Alfa pCodCrt);
```

## Código
N/A

## Descrição

Esta função tem como objetivo trocar o portador e carteira de um determinado título via regra. Assim caso o portador eou a carteira passada como parâmetros forem diferentes do portador e carteira atuais do título, será gerado um movimento do troca de portador e posteriormente os mesmos serão alterados no título.

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Variável que recebe o código da empresa do título que se deseja trocar o portador.
- **pCodFil** (`Numero`) - Entrada: Variável que recebe o código da filial do título que se deseja trocar o portador.
- **pNumTit** (`Alfa`) - Entrada: Variável que recebe o número do título que se deseja trocar o portador.
- **pCodTpt** (`Alfa`) - Entrada: Variável que recebe o tipo do título que se deseja trocar o portador.
- **pCodPor** (`Alfa`) - Entrada: Variável que recebe o código do novo portador do título.
- **pCodCrt** (`Alfa`) - Entrada: Variável que recebe o código da nova carteira do título.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
TrocaPortadorCarteira();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/trocaportadorcarteira.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
