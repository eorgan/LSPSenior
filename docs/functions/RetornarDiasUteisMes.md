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
- **aQtdDiasUteis** (`Numero end`) - Saída: Variável numérica que retorna a quantidade de dias úteis encontrada

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

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/retornardiasuteismes.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
