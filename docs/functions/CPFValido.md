# CPFValido

## Assinatura

```lspt
Funcao CPFValido(Alfa pNumCpf, Alfa End PResult);
```

## Código
568

## Descrição

Esta função verifica se um CPF informado é realmente válido. Esta validade é determinada pelo do cálculo do dígito verificador através do módulo 11. Deve ser informada as 11 posições do CPF, isto é, se ele iniciar com zero deve ser passado todos os zeros a esquerda para uma validação com sucesso.

## Parâmetros

- **pNumCpf** (`Alfa`) - Entrada: Variável que recebe o número do CPF.
- **PResult** (`Alfa End`) - Saída: Variável que retorna se o CPF é válido ou não (S=Válido e N=Inválido).

## Valores de Retorno

- pResult: Variável alfanumérica que retorna se o CPF é válido
- ou não (S=Válido e N=Inválido);

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CPFValido();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/cpfvalido.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
