# Extenso

## Assinatura

```lspt
Funcao Extenso(Numero VlrExt,Numero TamLn1,Numero TamLn2,Numero TamLn3, alfa End ExtLn1,alfa End ExtLn2,alfa End ExtLn3);
```

## Código
27

## Descrição

Esta função gera o extenso de um valor.

**⚠️ Importante:** Esta função contempla no máximo duas casas decimais após a vírgula. Caso o valor tenha três ou mais casas decimais após a vírgula, ele será arredondado para o valor real de duas.

## Parâmetros

- **VlrExt** (`Numero`) - Entrada: Campo/Variável do qual se deseja obter o extenso
- **TamLn1** (`Numero`) - Entrada: Quantidade de caracteres que será usado na primeira linha para geração do extenso
- **TamLn2** (`Numero`) - Entrada: Quantidade de caracteres que será usado na segunda linha para geração do extenso
- **TamLn3** (`Numero`) - Entrada: Quantidade de caracteres que será usado na terceira linha para geração do extenso
- **ExtLn1** (`alfa End`) - Saída: Variável que receberá a primeira linha do extenso do valor (retorno)
- **ExtLn2** (`alfa End`) - Saída: Variável que receberá a segunda linha do extenso do valor (retorno)
- **ExtLn3** (`alfa End`) - Saída: Variável que receberá a terceira linha do extenso do valor (retorno)

## Exemplo de Uso

```lspt
Definir Alfa vaExtLin1;
Definir Alfa vaExtLin2;
Definir Alfa vaExtLin3;
Definir Numero vnQuantidade;

vnQuantidade = 1577350;
Extenso(vnQuantidade, 30, 30, 30, vaExtLin1, vaExtLin2, vaExtLin3);
@ vaExtLin1 = "Um milhao, quinhentos e ******" @
@ vaExtLin2 = "setenta e sete mil e *********" @
@ vaExtLin3 = "trezentos e cinquenta reais **" @
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
