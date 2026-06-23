# ExecutarComandoSQL

## Assinatura

```lspt
Funcao ExecutarComandoSQL(Alfa pComando, Alfa pParalela, Numero End pLinhasAfetadas, Alfa End pResultado);
```

## Código
977

## Descrição

Esta função recebe e executa uma string com um comando INSERT ou UPDATE.

## Parâmetros

- **pComando** (`Alfa`) - Entrada: Indicativo se deve utilizar uma conexão paralela para execução do comando SQL. Valores possíveis: "S - Sim". Qualquer valor diferente de "S - Sim" será considerado como "N - Não".
- **pParalela** (`Alfa`) - Entrada: Indicativo se deve utilizar uma conexão paralela para execução do comando SQL. Valores possíveis: "S - Sim". Qualquer valor diferente de "S - Sim" será considerado como "N - Não".
- **pLinhasAfetadas** (`Numero End`) - Saída: Variável de retorno contendo a quantidade de linhas afetadas pelo comando. Não será preenchida quando estiver utilizando conexão paralela. Quando o parâmetro pParalela for igual a "S - Sim", o pLinhasAfetadas retornará 0.
- **pResultado** (`Alfa End`) - Saída: Variável com o resultado da execução. Receberá o valor de "OK" quando executar o comando com sucesso ou retornará a exceção quando ocorrer um erro na execução do comando.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
ExecutarComandoSQL();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/executarcomandosql.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
