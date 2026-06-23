# RetornarDigitoVerificadorVolume

## Assinatura

```lspt
Funcao RetornarDigitoVerificadorVolume(Numero aCodEmp, Alfa end aValorRetorno);
```

## Código
818

## Descrição

Gerar um código do digito verificador conforme a quantidade de casas, que será controlado através da empresa pelo campo Quantidade de caracteres para controlar a leitura única de volumes (F070EMP) no cadastro da empresa.

## Parâmetros

- **aCodEmp** (`Numero`) - Entrada: Este parâmetro é utilizado para retornar o dígito verificador de determinada empresa.
- **aValorRetorno** (`Alfa end`) - Saída: A variável irá receber desta função um valor "string" que deverá ser concatenado com o código de barras do volume, gerando o dígito verificador.

## Valores de Retorno

- A variável aValorRetorno irá receber desta função um valor "string" que deverá ser concatenado com o código de barras do volume, gerando o dígito verificador.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
RetornarDigitoVerificadorVolume();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/retornardigitoverificadorvolume.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
