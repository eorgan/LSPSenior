# SetarValorVarNum

## Assinatura

```lspt
Funcao SetarValorVarNum(Alfa aVar, Numero aNumVal);
```

## Código
623

## Descrição

Define o valor de uma variável numérica ou de data identificada por nome.

## Parâmetros

- **aVar** (`Alfa`) - Entrada: String contendo o nome da variável
- **aNumVal** (`Numero`) - Entrada: Valor numérico a ser atribuído à variável

## Exemplo de Uso

```lspt
Definir Numero vNumero;
Definir Data vData;

SetarValorVarNum("vNumero", 100);   @ vNumero = 100 @
SetarValorVarNum("vData", 39685);   @ vData = 39685 @
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/setarvalorvarnum.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
