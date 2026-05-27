# SelecaoTabelas

## Assinatura

```lspt
Funcao SelecaoTabelas(Alfa pSqlSel, Alfa End pCpoRet, Alfa End pTemMas);
```

## Código
595

## Descrição

Traz os dados de um comando SELECT(SQL) mais elaborado, incluindo funções de agregação como COUNT(), SUM(), etc. Aceita também comandos como GROUP BY, UNION entre outros.

## Parâmetros

- **pSqlSel** (`Alfa`) - Entrada: Variável que recebe uma instrução SELECT(SQL) ou "+" para buscar próximo registro
- **pCpoRet** (`Alfa End`) - Saída: Variável que retorna os dados resultantes do comando (separados por ';' se múltiplos campos)
- **pTemMas** (`Alfa End`) - Saída: Variável que retorna '+' caso o comando retorne mais de uma linha

## Valores de Retorno

- pCpoRet  : Variável alfa que retorna os dados resultantes do comando.
- pTemMas: Variável alfa que retorna '+' caso o comando retorne mais de uma linha.

## Exemplo de Uso

```lspt
Definir Funcao exemploSelecaoTabelas();

@ Variáveis globais @
Definir Alfa vaSQL;
Definir Alfa vaRetorno;
Definir Alfa vaMais;
Definir Numero vnContador;

exemploSelecaoTabelas();

Funcao exemploSelecaoTabelas(); {
  @ === EXEMPLO 1: CONTAGEM POR ESTADO === @
  vaSQL = "SIGUFS, COUNT(*) FROM E085CLI GROUP BY SIGUFS";
  SelecaoTabelas(vaSQL, vaRetorno, vaMais);
  
  vnContador = 1;
  Enquanto (vaMais = "+") {
    @ Processar o registro atual @
    Definir Alfa vaMensagem;
    Definir Alfa vaContadorStr;
    IntParaAlfa(vnContador, vaContadorStr);
    vaMensagem = "Registro " + vaContadorStr + ": " + vaRetorno;
    Mensagem(Retorna, vaMensagem);
    
    @ Buscar próximo registro @
    SelecaoTabelas("+", vaRetorno, vaMais);
    vnContador++;
  }
  
  @ === EXEMPLO 2: SOMA DE VALORES === @
  vaSQL = "SUM(TOTPED), COUNT(*) FROM E120PED WHERE SITPED = 'A'";
  SelecaoTabelas(vaSQL, vaRetorno, vaMais);
  
  @ vaRetorno conterá algo como "1500.50;25" (soma;quantidade) @
  Definir Alfa vaResultado;
  vaResultado = "Total de pedidos ativos: " + vaRetorno;
  Mensagem(Retorna, vaResultado);
  
  @ === EXEMPLO 3: DADOS CONSOLIDADOS POR FILIAL === @
  vaSQL = "CODFIL, SUM(TOTPED), COUNT(*) FROM E120PED GROUP BY CODFIL ORDER BY CODFIL";
  SelecaoTabelas(vaSQL, vaRetorno, vaMais);
  
  Mensagem(Retorna, "=== RELATÓRIO POR FILIAL ===");
  vnContador = 1;
  
  @ Processar primeiro registro @
  Se (vaRetorno <> "") {
    processarRegistroFilial(vaRetorno, vnContador);
    vnContador++;
  }
  
  @ Processar demais registros @
  Enquanto (vaMais = "+") {
    SelecaoTabelas("+", vaRetorno, vaMais);
    Se (vaRetorno <> "") {
      processarRegistroFilial(vaRetorno, vnContador);
      vnContador++;
    }
  }
}

/* ========================================================================
   FUNCAO: processarRegistroFilial
   DESCRICAO: Processa um registro com dados de filial
   PARAMETROS: pDados - String com dados separados por ';'
               pContador - Numero sequencial do registro
   RETORNO: Void
   OBSERVACOES: Auxiliar para exemplo de SelecaoTabelas
   ======================================================================== */
Funcao processarRegistroFilial(Alfa pDados, Numero pContador); {
  @ Extrair componentes do registro: CODFIL;TOTAL;QUANTIDADE @
  Definir Alfa vaCodFilial;
  Definir Alfa vaTotal;
  Definir Alfa vaQuantidade;
  Definir Numero vnPos1;
  Definir Numero vnPos2;
  Definir Numero vnTamanho;
  
  @ Localizar separadores @
  PosicaoAlfa(";", pDados, vnPos1);
  Se (vnPos1 > 0) {
    @ Extrair código da filial @
    vaCodFilial = pDados;
    CopiarAlfa(vaCodFilial, 1, vnPos1 - 1);
    
    @ Buscar segundo separador @
    Definir Alfa vaRestante;
    TamanhoAlfa(pDados, vnTamanho);
    vaRestante = pDados;
    CopiarAlfa(vaRestante, vnPos1 + 1, vnTamanho - vnPos1);
    
    PosicaoAlfa(";", vaRestante, vnPos2);
    Se (vnPos2 > 0) {
      @ Extrair total @
      vaTotal = vaRestante;
      CopiarAlfa(vaTotal, 1, vnPos2 - 1);
      
      @ Extrair quantidade @
      TamanhoAlfa(vaRestante, vnTamanho);
      vaQuantidade = vaRestante;
      CopiarAlfa(vaQuantidade, vnPos2 + 1, vnTamanho - vnPos2);
      
      @ Montar relatório @
      Definir Alfa vaMensagem;
      Definir Alfa vaContadorStr;
      IntParaAlfa(pContador, vaContadorStr);
      vaMensagem = vaContadorStr + ". Filial " + vaCodFilial + 
                   " - Total: R$ " + vaTotal + " - Pedidos: " + vaQuantidade;
      Mensagem(Retorna, vaMensagem);
    }
  }
}
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
