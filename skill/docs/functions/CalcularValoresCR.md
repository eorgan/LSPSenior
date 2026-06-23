# CalcularValoresCR

## Assinatura

```lspt
Funcao Função CalcularValoresCR(Alfa Cursor, Data DatBas, Numero TipVct, Numero ConDbc, Numero end VlrJrs, Numero end VlrMul, Numero end VlrCor, Numero end VlrEnc, Numero end VlrOac, Numero end VlrDsc, Numero end VlrOde, Numero end VlrLiq);
```

## Código
N/A

## Descrição

Esta função visa calcular os valores multimoeda dos títulos: juros, multa, encargos, correção monetária (positiva), encargos, outros acréscimos, descontos, outros descontos e o valor líquido.

## Parâmetros

- **Cursor** (`Alfa`) - Entrada: Nome do cursor com os dados do título
- **DatBas** (`Data`) - Entrada: Data base de cálculo (obrigatório)
- **TipVct** (`Numero`) - Entrada: Tipo de vencimento. Se for igual a 2 será utilizado o vencimento prorrogado, caso não seja, será utilizada a data de provável pagamento
- **ConDbc** (`Numero`) - Entrada: Indica se considerará a data base na correção monetária. Se for igual a 1 considera a data base, caso não seja considera o vencimento (de acordo com o tipo)
- **VlrJrs** (`Numero end`) - Saída
- **VlrMul** (`Numero end`) - Saída
- **VlrCor** (`Numero end`) - Saída
- **VlrEnc** (`Numero end`) - Saída
- **VlrOac** (`Numero end`) - Saída
- **VlrDsc** (`Numero end`) - Saída
- **VlrOde** (`Numero end`) - Saída
- **VlrLiq** (`Numero end`) - Saída

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CalcularValoresCR();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/calcularvalorescr.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
