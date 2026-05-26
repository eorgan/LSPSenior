# RetornarDiasUteisPeriodo

## Assinatura

```lspt
Funcao RetornarDiasUteisPeriodo(Data aDataIni, Data aDataFim, Numero end aQtdDiasUteis);
```

## Código
899

## Descrição

Retorna a quantidade de dias úteis entre duas datas informadas.

## Parâmetros

- **aDataIni** (`Data`) - Entrada: Variável do tipo Data que recebe a data inicial do período
- **aDataFim** (`Data`) - Entrada: Variável do tipo Data que recebe a data final do período
- **aQtdDiasUteis** (``) - Saída: Variável numérica que retorna a quantidade de dias úteis entre as datas

## Exemplo de Uso

```lspt
Definir Funcao exemploRetornarDiasUteisPeriodo();

@ Variáveis globais @
Definir Data vdDataInicial;
Definir Data vdDataFinal;
Definir Numero vnQtdDiasUteis;
Definir Alfa vaQtdStr;

exemploRetornarDiasUteisPeriodo();

Funcao exemploRetornarDiasUteisPeriodo(); {
  @ Define período de exemplo (21/06/2024 a 18/08/2024) @
  vdDataInicial = CodData(21, 6, 2024);
  vdDataFinal = CodData(18, 8, 2024);
  
  @ Calcula quantidade de dias úteis no período @
  RetornarDiasUteisPeriodo(vdDataInicial, vdDataFinal, vnQtdDiasUteis);
  
  @ Converte para string para exibição @
  IntParaAlfa(vnQtdDiasUteis, vaQtdStr);
  
  Definir Alfa vaMensagem;
  vaMensagem = "Dias úteis no período: " + vaQtdStr;
  Mensagem(Retorna, vaMensagem);
}
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
