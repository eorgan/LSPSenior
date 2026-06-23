# ConfiguraPontoGrafico

## Assinatura

```lspt
Funcao ConfiguraPontoGrafico (Alfa ControlName, Alfa Caractere, Numero TipoPonto, Numero IndiceFigura, Numero Interrompido);
```

## Código
N/A

## Descrição

Configura pontos em gráficos de figuras variáveis (linhas) antes de adicionar valores.

## Parâmetros

- **ControlName** (`Alfa`) - Entrada: Nome do controle gráfico do modelo
- **Caractere** (`Alfa`) - Entrada: Caractere que será colocado no ponto do gráfico
- **TipoPonto** (`Numero`) - Entrada: Número da figura cadastrada para o tipo de gráfico
- **IndiceFigura** (`Numero`) - Entrada: Número da figura cadastrada para o tipo de gráfico
- **Interrompido** (`Numero`) - Entrada

## Exemplo de Uso

```lspt
@ Configuração dos pontos no gráfico @
CRea.SQL "SELECT INDMAS,INDRES,INDTES FROM R108REA WHERE NUMEMP = :xNumEmp AND CODFIC = :xCodFic AND CODEXA = :xCodExa AND DATSOL = :xDatSol AND SEQIEX = :xSeqIex";
CRea.AbrirCursor();
Se (CRea.Achou) {
  Componente = "FEXA" + R108IEX.IndOre + R108IEX.IndExa;
  Se ((R108IEX.IndOre = "D") E (R108IEX.IndExa = "A")) {
    Se (CRea.IndTes = "N") {
      ConfiguraPontoGrafico(Componente, " ", 1, 0, 0);
    } Senao {
      Se ((CRea.IndRes = "S") E (CRea.IndMas = "N")) {
        ConfiguraPontoGrafico(Componente, " ", 2, 0, 1);
      } Senao {
        Se ((CRea.IndRes = "S") E (CRea.IndMas = "S")) {
          ConfiguraPontoGrafico(Componente, " ", 2, 1, 1);
        } Senao {
          Se ((CRea.IndRes = "N") E (CRea.IndMas = "N")) {
            ConfiguraPontoGrafico(Componente, " ", 2, 2, 0);
          } Senao {
            Se ((CRea.IndRes = "N") E (CRea.IndMas = "S")) {
              ConfiguraPontoGrafico(Componente, " ", 2, 3, 0);
            }
          }
        }
      }
    }
  }
}
CRea.FecharCursor();
```

## Fonte

[Documentação oficial Senior](https://documentacao.senior.com.br/tecnologia/5.10.4/lsp/funcoes/gerador-de-relatorios/configurapontografico.htm)

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
