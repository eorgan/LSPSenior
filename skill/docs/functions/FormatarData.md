# FormatarData

## Assinatura

```lspt
Funcao FormatarData(Numero Data, Alfa Formato, Alfa end DataFormatada);
```

## Código
N/A

## Descrição

Formata a data em milissegundos gerada pela função DataHora.

## Parâmetros

- **Data** (`Numero`) - Entrada: Valor numérico da data (tipo Numero)
- **Formato** (`Alfa`) - Entrada: Formato da data (tipo Alfa)
- **DataFormatada** (`Alfa end`) - Saída: Variável que receberá a data formatada (tipo Alfa)

## Exemplo de Uso

```lspt
Definir Funcao exemploFormatacoes();

@ Variáveis globais @
Definir Data vdDataAtual;
Definir Alfa vaFormatoBR;
Definir Alfa vaFormatoUS;
Definir Alfa vaFormatoISO;
Definir Alfa vaFormatoCompleto;
Definir Alfa vaApenasHora;

DataHoje(vdDataAtual);

exemploFormatacoes();

Funcao exemploFormatacoes(); {
  @ Para formatação, use DataHora que retorna Numero @
  Definir Numero vnDataHora;
  DataHora(vnDataHora);

  @ Formato brasileiro @
  FormatarData(vnDataHora, "dd/MM/yyyy", vaFormatoBR);

  @ Formato americano @
  FormatarData(vnDataHora, "MM/dd/yyyy", vaFormatoUS);

  @ Formato ISO 8601 @
  FormatarData(vnDataHora, "yyyy-MM-dd", vaFormatoISO);
  
  @ ⚠️ NOTA: FormatarData só formata datas, não horas para variáveis do tipo Data @
  @ Para hora atual, use HorSis ou outros métodos @
  vaFormatoCompleto = vaFormatoBR + " " + HorSis;  @ Concatena data + hora sistema @
  vaApenasHora = HorSis;                           @ Hora do sistema @
  
  @ Exibe resultados @
  Definir Alfa vaMensagem;
  vaMensagem = "Brasileiro: " + vaFormatoBR;
  Mensagem(Retorna, vaMensagem);
  vaMensagem = "Americano: " + vaFormatoUS;
  Mensagem(Retorna, vaMensagem);
  vaMensagem = "ISO 8601: " + vaFormatoISO;
  Mensagem(Retorna, vaMensagem);
  vaMensagem = "Completo: " + vaFormatoCompleto;
  Mensagem(Retorna, vaMensagem);
  vaMensagem = "Hora: " + vaApenasHora;
  Mensagem(Retorna, vaMensagem);
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais/formatardata.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
