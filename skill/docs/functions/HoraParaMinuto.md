# HoraParaMinuto

## Assinatura

```lspt
Funcao HoraParaMinuto(hora, minuto);
```

## Código
N/A

## Descrição

Converte em minutos os valores que representam hora e minuto.

## Parâmetros

- **hora** - Entrada: Valor correspondente à hora inteira
- **minuto** - Entrada: Valor correspondente aos minutos de uma hora

## Exemplo de Uso

```lspt
Definir Funcao validacoesNumericas();

@ Variáveis globais @
Definir Numero vnDividendo;
Definir Numero vnDivisor;
Definir Numero vnResultado;
Definir Numero vnResto;
Definir Numero vnNumero;

vnDividendo = 1500;
vnDivisor = 400;
vnNumero = 12345;

validacoesNumericas();

Funcao validacoesNumericas(); {
  @ Divisão segura @
  Se (vnDivisor <> 0) {
    Dividir(vnDividendo, vnDivisor, vnResultado);
      @ Preparar mensagem da divisão @
  Definir Alfa vaDividendoStr;
  Definir Alfa vaDivisorStr;
  Definir Alfa vaResultadoStr;
  Definir Alfa vaRestoStr;
  Definir Alfa vaMensagem;
  
  IntParaAlfa(vnDividendo, vaDividendoStr);
  IntParaAlfa(vnDivisor, vaDivisorStr);
  IntParaAlfa(vnResultado, vaResultadoStr);
  
  vaMensagem = "Divisão: " + vaDividendoStr + " ÷ " + vaDivisorStr + " = " + vaResultadoStr;
  Mensagem(Retorna, vaMensagem);
  
  @ Resto da divisão @
  RestoDivisao(vnDividendo, vnDivisor, vnResto);
  IntParaAlfa(vnResto, vaRestoStr);
  vaMensagem = "Resto: " + vaRestoStr;
  Mensagem(Retorna, vaMensagem);
  } Senao {
    Mensagem(Erro, "Divisão por zero não permitida!");
  }
  
  @ Verificação de número par/ímpar @
  RestoDivisao(vnNumero, 2, vnResto);
  Definir Alfa vaNumeroStr;
  IntParaAlfa(vnNumero, vaNumeroStr);
  
  Se (vnResto = 0) {
    vaMensagem = " " + vaNumeroStr + " é par";
    Mensagem(Retorna, vaMensagem);
  } Senao {
    vaMensagem = " " + vaNumeroStr + " é ímpar";
    Mensagem(Retorna, vaMensagem);
  }
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/horaparaminuto.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
