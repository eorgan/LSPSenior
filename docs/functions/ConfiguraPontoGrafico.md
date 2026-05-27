# ConfiguraPontoGrafico

## Assinatura

```lspt
Funcao ConfiguraPontoGrafico (Alfa ControlName, Alfa Caractere, Numero TipoPonto, Numero IndiceFigura, Numero Interrompido);
```

## Código
N/A

## Descrição

Esta função só pode ser utilizada para modelos com **gráficos de figuras variáveis** (**linhas**), com todos os pontos configuráveis pela regra. Esta função deve ser chamada antes de adicionar um valor ao gráfico, para que o ponto referente a este valor seja configurado.

## Parâmetros

- **ControlName** (`Alfa`) - Entrada: Variável alfa com o nome do controle gráfico do modelo que será configurado
- **Caractere** (`Alfa`) - Entrada: Variável alfa que será informado o caractere em questão que será colocado no ponto do gráfico
- **TipoPonto** (`Numero`) - Entrada: Variável numérica com o tipo de ponto utilizado no gráfico.   - Se o valor for **1**, tipo **Caractere**,   o **IndiceFigura** será ignorado; - Se o valor for **0** (**zero**), tipo **Padrão**, o ponto será   o padrão cadastrado em tipo de ponto do gráfico, e o item **Caractere**   e **Indice** da figura serão ignorados; - Se o valor for **2**, tipo **Figura**, O   item **Caractere** será ignorado;
- **IndiceFigura** (`Numero`) - Entrada: Variável numérica com o número da figura que foi cadastrada para este tipo de gráfico em questão, será colocada no ponto se o **TipoPonto** estiver definido como **2** (**Figura**)
- **Interrompido** (`Numero`) - Entrada: Variável numérica com o tipo de ligação com outros pontos.   - Se o valor for igual a **1**, este   ponto terá a linha de ligação com os outros pontos; - **0** (**zero**) não terá a linha de ligação com os pontos anterior e posterior   a ele.

## Exemplo de Uso

```lspt
/* --------------------
CONFIGURAÇÃO DOS PONTOS NO GRÁFICO
-------------------- */

CRea.SQL "SELECT INDMAS,INDRES,INDTES FROM R108REA \
    WHERE NUMEMP = :xNumEmp AND CODFIC = :xCodFic \
    AND CODEXA = :xCodExa AND DATSOL = :xDatSol \
    AND SEQIEX = :xSeqIex";
CRea.AbrirCursor();
Se (CRea.Achou)
{
 Componente = "FEXA" + R108IEX.IndOre + R108IEX.IndExa;
 Se ((R108IEX.IndOre = "D") E (R108IEX.IndExa= "A"))
 {
  Se (CRea.IndTes = "N")
  ConfiguraPontoGrafico(Componente, " ", 1, 0, 0);
  Senao
  Se ((CRea.IndRes = "S") E (CRea.IndMas = "N"))
  ConfiguraPontoGrafico(Componente, " ", 2, 0, 1);
  Senao
  Se ((CRea.IndRes = "S") E (CRea.IndMas = "S"))
  ConfiguraPontoGrafico(Componente, " ", 2, 1, 1);
  Senao
  Se ((CRea.IndRes = "N") E (CRea.IndMas = "N"))
  ConfiguraPontoGrafico(Componente, " ", 2, 2, 0);
  Senao
  Se ((CRea.IndRes = "N") E (CRea.IndMas = "S"))
  ConfiguraPontoGrafico(Componente, " ", 2, 3, 0);
  }
}
CRea.FecharCursor();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/configurapontografico.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
