# DataHoraUTC

## Assinatura

```lspt
Funcao DataHoraUTC(Numero end DataHoraUTC);
```

## Código
N/A

## Descrição

Retorna a data em um número fracionário (onde a parte inteira é a data e a fração são as horas) em UTC (Tempo Universal Coordenado).

## Parâmetros

- **DataHoraUTC** (`Numero end`) - Saída: Variável do tipo Numero que receberá a data e hora corrente UTC

## Exemplo de Uso

```lspt
Definir Funcao obterDatasAtuais();

@ Variáveis globais @
Definir Data vdDataAtual;
Definir Numero vnDataHoraAtual;
Definir Numero vnDataHoraUTC;
Definir Alfa vaDataFormatada;
Definir Alfa vaNumeroStr;

obterDatasAtuais();

Funcao obterDatasAtuais(); {
  Definir Alfa vaMensagem;

  @ 1. Obtém apenas a data @
  DataHoje(vdDataAtual);
  @ Para formatação, use DataHora que retorna Numero @
  Definir Numero vnDataHora;
  DataHora(vnDataHora);
  FormatarData(vnDataHora, "dd/MM/yyyy", vaDataFormatada);
  
  @ 2. Obtém data e hora local (número fracionário) @
  DataHora(vnDataHoraAtual);
  IntParaAlfa(vnDataHoraAtual, vaNumeroStr);
  
  @ 3. Obtém data e hora UTC (número fracionário) @
  DataHoraUTC(vnDataHoraUTC);
  
  @ 4. Exibe resultados @
  vaMensagem = "Data atual: " + vaDataFormatada;
  Mensagem(Retorna, vaMensagem);
  vaMensagem = "Data/Hora local (número): " + vaNumeroStr;
  Mensagem(Retorna, vaMensagem);
  
  @ Exemplo de uso das frações para calcular horas @
  Definir Numero vnSomenteParte;
  Definir Numero vnHoras;
  
  @ Calcular apenas a parte fracionária (horas do dia) @
  vnSomenteParte = vnDataHoraAtual - Truncar(vnDataHoraAtual);
  vnHoras = vnSomenteParte * 24;
  
  IntParaAlfa(vnHoras, vaNumeroStr);
  vaMensagem = "Horas do dia: " + vaNumeroStr;
  Mensagem(Retorna, vaMensagem);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/regra-para-web-services/datahorautc.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
