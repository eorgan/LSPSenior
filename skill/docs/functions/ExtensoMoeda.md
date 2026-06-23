# ExtensoMoeda

## Assinatura

```lspt
Funcao ExtensoMoeda(Numero VlrExt, Numero TamLn1, Numero TamLn2, Numero TamLn3, Alfa MoeIS, Alfa MoeIP, Alfa MoeDS, Alfa MoeDP, Alfa End ExtLn1, Alfa End ExtLn2, Alfa End ExtLn3);
```

## Código
N/A

## Descrição

Esta função gera o extenso de um valor com a moeda informada.

## Parâmetros

- **VlrExt** (`Numero`) - Entrada: Campo/Variável do qual se deseja obter o extenso
- **TamLn1** (`Numero`) - Entrada: Quantidade de caracteres que será usado na primeira linha para geração do extenso
- **TamLn2** (`Numero`) - Entrada: Quantidade de caracteres que será usado na segunda linha para geração do extenso
- **TamLn3** (`Numero`) - Entrada: Quantidade de caracteres que será usado na terceira linha para geração do extenso
- **MoeIS** (`Alfa`) - Entrada: Moeda, parte inteira no singular
- **MoeIP** (`Alfa`) - Entrada: Moeda, parte inteira no plural
- **MoeDS** (`Alfa`) - Entrada: Moeda, parte decimal no singular
- **MoeDP** (`Alfa`) - Entrada: Moeda, parte decimal no plural
- **ExtLn1** (`Alfa End`) - Saída: Variável que receberá a primeira linha do extenso do valor (retorno)
- **ExtLn2** (`Alfa End`) - Saída: Variável que receberá a segunda linha do extenso do valor (retorno)
- **ExtLn3** (`Alfa End`) - Saída: Variável que receberá a terceira linha do extenso do valor (retorno)

## Valores de Retorno

- - ExtLn1 = Variável tipo Alfa que receberá a primeira linha do extenso do valor.
- - ExtLn2 = Variável tipo Alfa que receberá a segunda linha do extenso do valor.
- - ExtLn3 = Variável tipo Alfa que receberá a terceira linha do extenso do valor.

## Exemplo de Uso

```lspt
Definir Alfa vaExtLin1;
Definir Alfa vaExtLin2;
Definir Alfa vaExtLin3;
Definir Numero vnValorSalario;

vnValorSalario = 1577.95;
ExtensoMoeda(vnValorSalario, 30, 30, 30, "dólar", "dólares", "cent", "cents", vaExtLin1, vaExtLin2, vaExtLin3);
@ vaExtLin1 = "um mil, quinhentos e setenta *" @
@ vaExtLin2 = "e sete dólares e noventa e ***" @
@ vaExtLin3 = "cinco cents ******************" @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/extensomoeda.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
