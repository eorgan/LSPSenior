# RetornarDiasUteisMes

## Assinatura

```lspt
Funcao RetornarDiasUteisMes(Data aDatabase, Numero aTipoRetorno, Numero end aQtdDiasUteis);
```

## Código
898

## Descrição

Retorna a quantidade de dias úteis de um mês tomando como base uma determinada data.

## Parâmetros

- **aDatabase** (`Data`) - Entrada: Variável do tipo Data que recebe a data base a ser verificada
- **aTipoRetorno** (`Numero`) - Entrada: Variável numérica que indica o tipo de retorno:
- **aQtdDiasUteis** (``) - Saída: Variável numérica que retorna a quantidade de dias úteis encontrada

## Exemplo de Uso

```lspt
Definir Funcao exemploRetornarDiasUteisMes();

@ Variáveis globais @
Definir Data vdDataBase;
Definir Numero vnQtdDiasUteisTotal;
Definir Numero vnQtdDiasUteisAteData;
Definir Alfa vaQtdTotalStr;
Definir Alfa vaQtdAteDataStr;

exemploRetornarDiasUteisMes();

Funcao exemploRetornarDiasUteisMes(); {
  @ Define uma data de exemplo (21/07/2024) @
  vdDataBase = CodData(21, 7, 2024);
  
  @ Obtém quantidade de dias úteis do mês inteiro @
  RetornarDiasUteisMes(vdDataBase, 0, vnQtdDiasUteisTotal);
  
  @ Obtém quantidade de dias úteis até a data base @
  RetornarDiasUteisMes(vdDataBase, 1, vnQtdDiasUteisAteData);
  
  @ Converte para string para exibição @
  IntParaAlfa(vnQtdDiasUteisTotal, vaQtdTotalStr);
  IntParaAlfa(vnQtdDiasUteisAteData, vaQtdAteDataStr);
  
  Definir Alfa vaMensagem;
  vaMensagem = "Dias úteis no mês todo: " + vaQtdTotalStr;
  Mensagem(Retorna, vaMensagem);
  vaMensagem = "Dias úteis até 21/07: " + vaQtdAteDataStr;
  Mensagem(Retorna, vaMensagem);
}
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
