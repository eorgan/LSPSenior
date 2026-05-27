# ConverterCPFCNPJNumerico

## Assinatura

```lspt
Funcao ConverterCPFCNPJNumerico(Numero aCPFCNPJ, Alfa aTipo, Alfa END aRetorno);
```

## Código
N/A

## Descrição

Função responsável por converter um CPF/CNPJ numérico para um CPF/CNPJ no formato alfanumérico, podendo ser complementado com zeros a esquerda quando um CPF não possuir 11 caracteres ou um CNPJ não possuir 14 caracteres.

## Parâmetros

- **aCPFCNPJ** (`Numero`) - Entrada: Informar o número do CPF ou CNPJ a ser convertido para CPF ou CNPJ alfanumerico
- **aTipo** (`Alfa`) - Entrada: Informar o tipo de participante, podendo ser F para pessoa física ou J para pessoa jurídica
- **aRetorno** (`Alfa END`) - Saída: Será retornado o CPF ou CNPJ convertido para alfanumerico, respeitando a quantidade minima de caracteres por tipo, sendo 11 para PF e 14 para PJ

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ConverterCPFCNPJNumerico();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
