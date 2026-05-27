# AlteraCampoRetorno

## Assinatura

```lspt
funcao AlteraCampoRetorno(alfa pNomeCampo, alfa pVlrAlf, numero pVlrNum);
```

## Código
512

## Descrição

Esta tem como o objetivo na cobrança escritural alterar valores que possam vir incorretos, ou que se deseje alterar nos arquivos de retorno, passando-se o campo a ser alterado e o valor que o mesmo irá conter.

## Parâmetros

- **pNomeCampo** (`alfa`) - Entrada: Variável que contem o nome do campo a ser alterado.
- **pVlrAlf** (`alfa`) - Entrada: Variável que contem o valor a ser atribuído ao campo se o mesmo for alfa.
- **pVlrNum** (`numero`) - Entrada: Variável que contem o valor a ser atribuído ao campo se o mesmo for numérico.

## Valores de Retorno

- VlrSal: variável numérica que retorna o saldo do extrato recebida nos
- parâmetros acima.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
AlteraCampoRetorno();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
