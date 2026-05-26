# RetornarQtdDiasAno

## Assinatura

```lspt
Funcao RetornarQtdDiasAno(Data aData, Numero aTipoAno, Numero end aQtdDiasAno);
```

## Código
901

## Descrição

Retorna a quantidade de dias do ano tomando como base o ano da data passada, considerando diferentes tipos de ano.

## Parâmetros

- **aData** (`Data`) - Entrada: Variável do tipo Data que recebe a data base
- **aTipoAno** (`Numero`) - Entrada: Variável numérica que indica o tipo de ano:
- **aQtdDiasAno** (``) - Saída: Variável numérica que retorna a quantidade de dias do ano

## Exemplo de Uso

```lspt
Definir Funcao exemploRetornarQtdDiasAno();

@ Variáveis globais @
Definir Data vdData;
Definir Numero vnDiasUtil;
Definir Numero vnDiasComercial;
Definir Numero vnDiasCivil;
Definir Alfa vaDiasUtilStr;
Definir Alfa vaDiasComercialStr;
Definir Alfa vaDiasCivilStr;

exemploRetornarQtdDiasAno();

Funcao exemploRetornarQtdDiasAno(); {
  @ Define uma data de exemplo (02/07/2024) @
  vdData = CodData(2, 7, 2024);
  
  @ Obtém quantidade de dias para cada tipo de ano @
  RetornarQtdDiasAno(vdData, 0, vnDiasUtil);       @ Ano útil @
  RetornarQtdDiasAno(vdData, 1, vnDiasComercial);  @ Ano comercial @
  RetornarQtdDiasAno(vdData, 2, vnDiasCivil);      @ Ano civil @
  
  @ Converte para string para exibição @
  IntParaAlfa(vnDiasUtil, vaDiasUtilStr);
  IntParaAlfa(vnDiasComercial, vaDiasComercialStr);
  IntParaAlfa(vnDiasCivil, vaDiasCivilStr);
  
  Definir Alfa vaMensagem;
  vaMensagem = "Dias úteis no ano: " + vaDiasUtilStr;
  Mensagem(Retorna, vaMensagem);
  vaMensagem = "Dias comerciais no ano: " + vaDiasComercialStr;
  Mensagem(Retorna, vaMensagem);
  vaMensagem = "Dias civis no ano: " + vaDiasCivilStr;
  Mensagem(Retorna, vaMensagem);
}
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
