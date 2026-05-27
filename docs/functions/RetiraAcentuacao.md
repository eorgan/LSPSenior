# RetiraAcentuacao

## Assinatura

```lspt
Funcao RetiraAcentuacao(Alfa End pString);
```

## Código
562

## Descrição

Recebe uma string com acentuação e retorna a mesma string sem acentuação e em maiúsculo.

## Parâmetros

- **pString** (`Alfa End`) - Saída: Variável Alfa que recebe uma string e retorna a variável em maiúsculo e sem acentuação

## Valores de Retorno

- pString: Variavel alfanumérica que retorna a variável recebida
- em Maiúsculo e sem Acentuação.

## Exemplo de Uso

```lspt
Definir Funcao exemploRetiraAcentuacao();

@ Variáveis globais @
Definir Alfa vaTextoOriginal;
Definir Alfa vaTextoSemAcento;
Definir Alfa vaMensagem;

exemploRetiraAcentuacao();

Funcao exemploRetiraAcentuacao(); {
  @ === EXEMPLO 1: NOME COM ACENTOS === @
  vaTextoOriginal = "José António da Silva";
  vaTextoSemAcento = vaTextoOriginal;
  RetiraAcentuacao(vaTextoSemAcento);
  vaMensagem = "Original: " + vaTextoOriginal + " | Sem acento: " + vaTextoSemAcento;
  Mensagem(Retorna, vaMensagem);  @ Resultado: "JOSE ANTONIO DA SILVA" @
  
  @ === EXEMPLO 2: CARACTERES ESPECIAIS === @
  vaTextoOriginal = "ÇçÁáàÉéÚúÍí";
  vaTextoSemAcento = vaTextoOriginal;
  RetiraAcentuacao(vaTextoSemAcento);
  vaMensagem = "Acentos: " + vaTextoOriginal + " | Convertido: " + vaTextoSemAcento;
  Mensagem(Retorna, vaMensagem);  @ Resultado: "CcAaaEeUuIi" @
  
  @ === EXEMPLO 3: ENDEREÇO === @
  vaTextoOriginal = "Rua das Açucenas, 123 - São José";
  vaTextoSemAcento = vaTextoOriginal;
  RetiraAcentuacao(vaTextoSemAcento);
  vaMensagem = "Endereço: " + vaTextoOriginal + " | Normalizado: " + vaTextoSemAcento;
  Mensagem(Retorna, vaMensagem);  @ Resultado: "RUA DAS ACUCENAS, 123 - SAO JOSE" @
  
  @ === EXEMPLO PRÁTICO: PADRONIZAÇÃO PARA BUSCA === @
  padronizarParaBusca();
}

/* ========================================================================
   FUNCAO: padronizarParaBusca
   DESCRICAO: Padroniza strings para pesquisa sem acentos
   PARAMETROS: Nenhum (usa variáveis globais)
   RETORNO: Void
   OBSERVACOES: Exemplo prático de normalização para busca
   ======================================================================== */
Funcao padronizarParaBusca(); {
  @ Simular lista de nomes para padronização @
  Definir Numero vnContador;
  Definir Alfa vaNomes;
  Definir Alfa vaNomeAtual;
  Definir Alfa vaNomePadronizado;
  
  @ Lista simulada separada por ponto-e-vírgula @
  vaNomes = "João da Silva;Maria José;Antônio Pereira;Françoise Dubois";
  
  Mensagem(Retorna, "=== PADRONIZAÇÃO DE NOMES PARA BUSCA ===");
  
  @ Processar cada nome da lista @
  Para (vnContador = 1; vnContador <= 4; vnContador++) {
    @ Obter nome atual (simulado) @
    Se (vnContador = 1) {
      vaNomeAtual = "João da Silva";
    } Senao Se (vnContador = 2) {
      vaNomeAtual = "Maria José";
    } Senao Se (vnContador = 3) {
      vaNomeAtual = "Antônio Pereira";
    } Senao {
      vaNomeAtual = "Françoise Dubois";
    }
    
    @ Padronizar para busca @
    vaNomePadronizado = vaNomeAtual;
    RetiraAcentuacao(vaNomePadronizado);
    
    @ Exibir resultado @
    Definir Alfa vaIndice;
    IntParaAlfa(vnContador, vaIndice);
    vaMensagem = vaIndice + ". " + vaNomeAtual + " -> " + vaNomePadronizado;
    Mensagem(Retorna, vaMensagem);
  }
  
  Mensagem(Retorna, "Nomes padronizados para indexação/busca");
}
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/retiraacentuacao.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
