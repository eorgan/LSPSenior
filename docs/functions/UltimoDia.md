# UltimoDia

## Assinatura

```lspt
Funcao UltimoDia(Numero End DatAtu);
```

## Código
25

## Descrição

Verifica qual é o último dia do mês/ano da data informada.

## Parâmetros

- **DatAtu** (`Numero End`) - Saída: Campo/Variável numérica da qual se deseja saber o último dia do mês

## Exemplo de Uso

```lspt
Definir Funcao sistemaControlePrazos();

@ Variáveis globais @
Definir Data vdDataBase;
Definir Numero vnDiaSemana;
Definir Numero vnDataUtilAnt;
Definir Numero vnDataUtilPos;
Definir Numero vnDiasUteisRestantes;
Definir Numero vnCEP;
Definir Alfa vaMensagemStatus;

sistemaControlePrazos();

Funcao sistemaControlePrazos(); {
  @ Obtém a data atual @
  DataHoje(vdDataBase);
  vnCEP = 89107000;  @ CEP de exemplo @
  
  @ Verifica se hoje é dia útil @
  Definir Numero vnDataAtual;
  vnDataAtual = vdDataBase;
  RetDiaUtilAntPos(vnDataAtual, vnCEP, vnDataUtilAnt, vnDataUtilPos);
  
  @ Verifica o dia da semana @
  RetDiaSemana(vnDataAtual, vnDiaSemana);
  
  @ Calcula dias úteis restantes no mês @
  Definir Numero vnDiasUteisTotal;
  Definir Numero vnDiasUteisAteHoje;
  RetornarDiasUteisMes(vdDataBase, 0, vnDiasUteisTotal);
  RetornarDiasUteisMes(vdDataBase, 1, vnDiasUteisAteHoje);
  vnDiasUteisRestantes = vnDiasUteisTotal - vnDiasUteisAteHoje;
  
  @ Monta relatório @
  Se (vnDataAtual = vnDataUtilAnt) {
    vaMensagemStatus = "Hoje é dia útil!";
  } Senao {
    vaMensagemStatus = "Hoje NÃO é dia útil.";
  }
  
  Mensagem(Retorna, vaMensagemStatus);
  
  Definir Alfa vaTemp;
  IntParaAlfa(vnDiasUteisRestantes, vaTemp);
  vaMensagemStatus = "Dias úteis restantes no mês: " + vaTemp;
  Mensagem(Retorna, vaMensagemStatus);
}
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
