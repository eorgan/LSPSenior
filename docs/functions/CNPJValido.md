# CNPJValido

## Assinatura

```lspt
Funcao CNPJValido(Alfa pNumCnpj, Alfa End PResult);
```

## Código
569

## Descrição

Esta função verifica se um CNPJ informado é realmente válido. Esta validade é determinada pelo do cálculo do dígito verificador através do módulo 11. Deve ser informada as 14 posições do CNPJ, isto é, se ele iniciar com zero deve ser passado todos os zeros a esquerda para uma validação com sucesso.

## Parâmetros

- **pNumCnpj** (`Alfa`) - Entrada: Variável que recebe o número do CNPJ.
- **PResult** (`Alfa End`) - Saída: Variável que retorna se o CNPJ é válido ou não (S=Válido e N=Inválido).

## Valores de Retorno

- pResult: Variável alfanumérica que retorna se o CNPJ é
- válido ou não (S=Válido e N=Inválido);

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CNPJValido();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/cnpjvalido.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
