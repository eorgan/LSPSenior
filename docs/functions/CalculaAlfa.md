# CalculaAlfa

## Assinatura

```lspt
Funcao Função CalculaAlfa(Alfa aOperação, Alfa aArgumento1, Alfa aArgumento2, Alfa End aResultado);
```

## Código
N/A

## Descrição

Realiza operações matemáticas com valores alfanuméricos.

## Parâmetros

- **aOperação** (`Alfa`) - Entrada: Campo indicando que operação deve ser realizada:
- **aArgumento1** (`Alfa`) - Entrada: Campo contendo o primeiro argumento a ser usado no cálculo
- **aArgumento2** (`Alfa`) - Entrada: Campo contendo o segundo argumento a ser usado no cálculo
- **aResultado** (`Alfa End`) - Saída: Variável alfa que receberá o resultado do cálculo

## Valores de Retorno

- aResultado: Variável alfa que receberá o resultado do cálculo.
- Observações: estão disponíveis as operações
- de soma, subtração e multiplicação. Todos os cálculos são realizados com números inteiros, caso seja informado um número
- não inteiro um erro ocorrerá. Cálculos feitos com esta função demoram muito mais para serem processados do que cálculos diretos (c = a + b).
- <!-- source: https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/calculaindiceciap.htm -->

## Exemplo de Uso

```lspt
Definir Alfa vaOperacao;
Definir Alfa vaArg1;
Definir Alfa vaArg2;
Definir Alfa vaResultado;

vaOperacao = "+";
vaArg1 = "100";
vaArg2 = "50";
CalculaAlfa(vaOperacao, vaArg1, vaArg2, vaResultado);
@ vaResultado será "150" @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/calculaalfa.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
