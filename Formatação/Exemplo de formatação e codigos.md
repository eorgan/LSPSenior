# Exemplo de formatação e codigos

## Cabeçalho do arquivo

### Título do arquivo
@-- Consulta e baixa de Títulos processados na Equals --@

### Dados do desenvolvedor e datas que são pegas do GitHub
/*
 * @Author: Eliezer Organ
 * @Email: eorgan@organ.eti.br
 * @Date: 2025-07-29 21:41:08
 * @Last Modified by: Eliezer Organ
 * @Last Modified time: 2025-10-05 15:44:39
 * @Description: Description
 */

### O que o arquivo faz
/* 
   Transação de Tesouraria para ser utilizada na base do cliente: 90662
   Transação de Baixa do contas a Receber utilizada na base do cliente: 90350
*/

### Definição do WebServices Internos
@-- Definir WSs Internos --@
   Definir interno.com.senior.g5.co.mfi.cre.titulos.BaixarTitulosCR_3 wBaxCR;

@-- Declarar Funções --@
   Definir Funcao BuscarParamWS();

@-- Declarar Cursores tipo 1 --@
Definir Cursor Cur_E140NFV;

@-- Declarar Variaveis --@
   Definir Alfa aNumTit;
   Definir Data dData;
   Definir Numero nCodFor;

@-- Variaveis WS Tesouraria --@
   Definir Alfa aNumTit;   @--(Obrigatorio) - String(25) - Numero do Titulo  --@

@-- Atribui Valores Variaveis --@
   nModExec = 1; @-- Variavel Numero --@
   dData = DatSis; @-- Variavel Data --@
   aNumTit = "10000000001041024";

@-- Inicio do Processamento --@
   BuscarParamWS();
   
@-- Chamada das Funções --@
Funcao BuscarParamWS();
   Inicio

   Fim;


## Extrutura de Funções
Funcao BuscarParamWS();
   Inicio

   Fim;

## Extruturas de Loop
### Se
Se(Condição)
   {
      
   }

Se(Condição)
   Inicio

   Fim;

### Se com Senao e Senão Se
Se(Condição)
   {
      
   }
Senao
   {
      
   }
Senao Se (Condição)
   {
      
   }

### Enquanto
Enquanto(Condição)
   {

   }

Enquanto(Condição)
   {

   }
### Para
Para(nLin=0;nLin<nQtd;nLin++)
   {
      
   }

Para(nLin=0;nLin<nQtd;nLin++)
   Inicio

   Fim;

## Cursores
### Cursor Tipo 1
Definir Cursor Cur_E140NFV; @ Utiliza-se como padrão a nomenclatura Cur_+Nome Tabela. @
Definir alfa VCodSnf[03];
VcodEmp = 1;
VcodFil = 1;
VcodSnf = "U";
VnumNfv = 100;

Cur_E140Nfv.Sql "SELECT VLRLIQ FROM E140NFV WHERE CODEMP = :VCODEMP \
AND CODFIL = :VCODFIL AND CODSNF = :VCODSNF \
AND NUMNFV = :VNUMNFV";

Cur_E140Nfv.AbrirCursor();

Se (Cur_E140Nfv.Achou)
   Inicio
      @-- Encontrou o Registro. --@
      VvlrLiq = Cur_E140Nfv.VlrLiq;
   Fim;

Cur_E140Nfv.fecharCursor();

### Cursor Tipo 2 (Preferencia sempre utilizar este Tipo mais novo)

Definir Alfa aSqlCom;
Definir Alfa aSqlInt;

aSqlCom = "SELECT USU_TOKPRD, QTD, USU_VLRABE, data FROM USU_TPAREQU WHERE USU_CODEMP = " + aCodEmp;

      SQL_Criar(aSqlInt);
      SQL_UsarSqlSenior2(aSqlInt, 0);
      SQL_UsarAbrangencia(aSqlInt, 0);
      SQL_DefinirComando(aSqlInt, aSqlCom);
      SQL_AbrirCursor(aSqlInt);
      Se(SQL_EOF(aSqlInt) = 0) @-- Se encontrou registro -- @
         {
            SQL_RetornarAlfa(aSqlInt, "USU_TOKPRD", aToken); @-- Retorna Variavel Tipo Alfa --@
            SQL_RetornarInteiro(aSqlPen, "QTD", nQtd); @-- Retorna Variavel Tipo Numero --@
            SQL_RetornarFlutuante(aSqlPen, "USU_VLRABE", nVlrAbe); @-- Retorna Variavel Tipo Decimal Flutuante --@
            SQL_RetornarData(aSqlPen, "data", dData); @-- Retorna Variavel Tipo Data--@
      
         }

      Se(SQL_EOF(aSqlInt) = 1) @-- Se não encontrou registro -- @
         {
      
         }

      SQL_FecharCursor(aSqlInt);
      SQL_Destruir(aSqlInt);

### Cursor Tipo 2 Usando enquanto 
aSqlCom = "SELECT USU_TOKPRD, QTD, USU_VLRABE, data FROM USU_TPAREQU WHERE USU_CODEMP = " + aCodEmp;

      SQL_Criar(aSqlInt);
      SQL_UsarSqlSenior2(aSqlInt, 0);
      SQL_UsarAbrangencia(aSqlInt, 0);
      SQL_DefinirComando(aSqlInt, aSqlCom);
      SQL_AbrirCursor(aSqlInt);
      Enquanto(SQL_EOF(aSqlInt) = 0) @-- Se encontrou registro -- @
         {
            SQL_RetornarAlfa(aSqlInt, "USU_TOKPRD", aToken); @-- Retorna Variavel Tipo Alfa --@
            SQL_RetornarInteiro(aSqlPen, "QTD", nQtd); @-- Retorna Variavel Tipo Numero --@
            SQL_RetornarFlutuante(aSqlPen, "USU_VLRABE", nVlrAbe); @-- Retorna Variavel Tipo Decimal Flutuante --@
            SQL_RetornarData(aSqlPen, "data", dData); @-- Retorna Variavel Tipo Data--@

            SQL_Proximo(aSqlInt);
      
         }

      SQL_FecharCursor(aSqlInt);
      SQL_Destruir(aSqlInt);

## Comentarios
@-- --@
@  @
/*  */

## Documentação online com Sintaxe de comandos e operadores
https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/sintaxe-de-comandos-e-operadores.htm

## Documentação online com as Funções Gerais
https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerais.html

## Documentação online com Índice das funções de programador
https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/#regra_funcoes/indice_funcoes.htm


## Observações
@-- Eu posso ter cascateamento de Se e Enquanto Ex:

Se(Condição)
   {
      Se(Condição)
         {
            
         }
      
   }

Se(Condição)
   Inicio

      Se(Condição)
         Inicio

         Fim;

      Se(Condição)
         {
            
         }

      Se(Condição)
         {
            
         }
      Senao 
         {
            
         }

   Fim;