# CalculaQtdMinutos

## Assinatura

```lspt
Funcao CalculaQtdMinutos(Numero PDatIni, Numero PHorIni, Numero PDatFim, Numero PHorFim, Numero End Retorno);
```

## Código
N/A

## Descrição

Importante Esta função não é mais utilizada, pois o campo QTDHRR da tabela E900EOQ já possui este valor calculado. Calcula a quantidade de minutos entre uma Data/Hora inicial/final.

## Parâmetros

- **PDatIni** (`Numero`) - Entrada: Data Inicial
- **PHorIni** (`Numero`) - Entrada: Hora Inicial
- **PDatFim** (`Numero`) - Entrada: Data Final
- **PHorFim** (`Numero`) - Entrada: Hora Final
- **Retorno** (`Numero End`) - Saída

## Valores de Retorno

- número - quantidade de minutos calculada.
- <!-- source: https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/calcularvalorescp.htm -->

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
CalculaQtdMinutos();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/calculaqtdminutos.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
