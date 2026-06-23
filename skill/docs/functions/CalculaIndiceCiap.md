# CalculaIndiceCiap

## Assinatura

```lspt
Funcao CalculaIndiceCiap (Numero pCodEmp, Numero pCodFil, Numero pMesCal, Numero End pIndCip, Numero End pVlrTri, Numero End pVlrCtb, Numero End pVlrExp, Numero End pVlrIIc);
```

## Código
N/A

## Descrição

Esta função tem por objetivo calcular o índice do CIAP no sistema de forma centralizada. Nela ainda será retornado o Total Tributado, Total das Saídas, Exportação e Base de Cálculo do ICMS Isento. Utilização da Função (dependentes).

## Parâmetros

- **pCodEmp** (`Numero`) - Entrada: Passa o código da empresa.
- **pCodFil** (`Numero`) - Entrada: Passa o código da filial.
- **pMesCal** (`Numero`) - Entrada: Passa o mês e ano desejado para o cálculo no formato de data da Senior.
- **pIndCip** (`Numero End`) - Saída: Retorna o índice de CIAP calculado.
- **pVlrTri** (`Numero End`) - Saída: Retorna valor da tributação.
- **pVlrCtb** (`Numero End`) - Saída: Retorna valor contábil.
- **pVlrExp** (`Numero End`) - Saída: Retorna valor de exportação.
- **pVlrIIc** (`Numero End`) - Saída: Retorna valor de ICMS Isento.

## Valores de Retorno

- pIndCip, pVlrTri, pVlrCtb, pVlrExp, pVlrIic.

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CalculaIndiceCiap();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/calculaindiceciap.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
