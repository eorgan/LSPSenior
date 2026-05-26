# RetDiaSemana

## Assinatura

```lspt
Funcao RetDiaSemana(Numero pData, Numero End pDia);
```

## Código
645

## Descrição

Retorna o dia da semana em forma de número da data de entrada.

## Parâmetros

- **pData** (`Numero`) - Entrada: Variável numérica que recebe a data atual
- **pDia** (`Numero End`) - Saída: Variável numérica que retorna o dia da semana da data atual

## Valores de Retorno

- 0 = Domingo
- 1 = Segunda-feira
- 2 = Terça-feira
- 3 = Quarta-feira
- 4 = Quinta-feira
- 5 = Sexta-feira
- 6 = Sábado

## Exemplo de Uso

```lspt
Definir Funcao exemploRetDiaSemana();

@ Variáveis globais @
Definir Numero vnDataSis;
Definir Numero vnDiaSemana;
Definir Alfa vaNomeDia;

exemploRetDiaSemana();

Funcao exemploRetDiaSemana(); {
  @ Obtém a data atual do sistema @
  vnDataSis = DatSis;
  
  @ Retorna o dia da semana @
  RetDiaSemana(vnDataSis, vnDiaSemana);
  
  @ Converte o número para nome do dia @
  Se (vnDiaSemana = 0) {
    vaNomeDia = "Domingo";
  } Senao Se (vnDiaSemana = 1) {
    vaNomeDia = "Segunda-feira";
  } Senao Se (vnDiaSemana = 2) {
    vaNomeDia = "Terça-feira";
  } Senao Se (vnDiaSemana = 3) {
    vaNomeDia = "Quarta-feira";
  } Senao Se (vnDiaSemana = 4) {
    vaNomeDia = "Quinta-feira";
  } Senao Se (vnDiaSemana = 5) {
    vaNomeDia = "Sexta-feira";
  } Senao {
    vaNomeDia = "Sábado";
  }
  
  Definir Alfa vaMensagem;
  vaMensagem = "Hoje é " + vaNomeDia;
  Mensagem(Retorna, vaMensagem);
}
```

> Documentação extraída do manual oficial da LSP. Edite à vontade — execuções futuras
> de `generate-functions.js` só sobrescrevem arquivos que ainda são stubs.
