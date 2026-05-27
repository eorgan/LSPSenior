# VerificaDiaUtil

## Assinatura

```lspt
Funcao VerificaDiaUtil(Numero Data, Numero Cep, Numero Vct,Numero End  DiaUtil);
```

## Código
93

## Descrição

Verifica se uma data é dia útil ou não e retorna o dia útil a partir de uma data determinada. Sendo que esta pode ser a própria data informada, a próxima data ou a data anterior, dependendo do parâmetro informado: - O parâmetro 1 retorna a próxima data útil, sendo que pode retornar ela mesma caso esta seja útil. Ou seja, caso a data passada como parâmetro seja um sábado, domingo ou feriado, será retornada a próxima data útil, caso contrário retornará ela mesma. - Ao utilizar o parâmetro 0, retorna a data útil anterior. Não retorna a própria data, por questões de conceito de cálculos de juros. - Para retornar a própria data, utilizando o parâmetro 0, será necessário fazer uma combinação entre chamadas da função **VerificaDiaUtil**, passando uma vez o parâmetro 1 e com o resultado obtido, realizar outra chamada com o parâmetro 0, conforme exemplo 4 a seguir.

## Parâmetros

- **Data** (`Numero`) - Entrada: Variável que recebe a Data atual.
- **Cep** (`Numero`) - Entrada: Variável que recebe o Cep da filial.
- **Vct** (`Numero`) - Entrada: Variável responsável em indicar qual será o retorno: próximo dia útil (considerando o próprio dia) ou o anterior (desconsiderando o próprio dia). Se for 1, traz o próximo; se for 0, traz o anterior.
- **DiaUtil** (`Numero End`) - Saída: Variável que retorna qual é o próximo dia útil a partir da data atual, ou o anterior, conforme o parâmetro Vct.

## Valores de Retorno

- DiaUtil: Variável numérica que retorna qual é o próximo dia
- útil a partir da data atual, ou o anterior, conforme o parâmetro Vct.
- Utilização da Função (dependentes): Nenhum dependente.

## Exemplo de Uso

```lspt
vdata = 10/12/2003
VerificaDiaUtil(vdata, vCep, 1, VdiaUtil);
Retorno será vDiaUtil = 10/12/2003
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/verificadiautil.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
