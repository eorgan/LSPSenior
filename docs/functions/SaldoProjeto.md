# SaldoProjeto

## Assinatura

```lspt
Funcao SaldoProjeto(Numero End p1,Numero End p2,Numero End p3,Numero End p4,Numero End p5,Numero End p6,Alfa End p7,Numero End p8,Numero End p9,Numero End p10,Numero End p11,Numero End pC12,Numero End pC13,Numero End p14);
```

## Código
585

## Descrição

Esta função busca a estrutura montada pela função CarregaSaldoProjeto.

## Parâmetros

- **p1** (`Numero End`) - Saída:  Variável que indica como os dados serão retornados:   - >0 (maior ou igual zero)    Retornará os valores (saldo entrada , saldo saída, orçamento inicial entrada,   orçamento final entrada, orçamento inicial saída, orçamento final saída), de acordo   com os parâmetros P2 à P8 que foi carregado a lista, linha a linha, quando não tiver   mais nenhum conteúdo a listar o parâmetro P1 retornará 1 (menos um); - -1 (menos um)    Retornará os valores (saldo entrada , saldo saída, orçamento inicial entrada,   orçamento final entrada, orçamento inicial saída, orçamento final saída), de acordo   com os parâmetros P2 à P8; - -2 (menos dois)    Retornará os valores (saldo entrada , saldo saída, total crédito entrada, total débito   entrada, total crédito saída, total débito saída) , de acordo com os parâmetros P2 à   P8.
- **p2** (`Numero End`) - Saída:  Variável que retorna o código da empresa.
- **p3** (`Numero End`) - Saída: Variável que retorna o número do projeto.
- **p4** (`Numero End`) - Saída: Variável que retorna a fase do projeto.
- **p5** (`Numero End`) - Saída:  Variável que retorna o número da rotina.
- **p6** (`Numero End`) - Saída: Variável que retorna o código da conta financeira.
- **p7** (`Alfa End`) - Saída: Variável que retorna o centro de custos.
- **p8** (`Numero End`) - Saída: Variável que retorna o mês/ano.
- **p9** (`Numero End`) - Saída: Variável que retorna o saldo entrada.
- **p10** (`Numero End`) - Saída: Variável que retorna o saldo saída.
- **p11** (`Numero End`) - Saída: Variável que retorna o orçamento inicial entrada ou total crédito entrada (ver parâmetro P1).
- **pC12** (`Numero End`) - Saída:  Variável que retorna o orçamento final entrada ou total débito entrada (ver parâmetro P1).
- **pC13** (`Numero End`) - Saída: Variável que retorna o orçamento inicial saída ou total crédito entrada (ver parâmetro P1).
- **p14** (`Numero End`) - Saída: Variável que retorna o orçamento final saída ou total débito saída (ver parâmetro P1).

## Valores de Retorno

- - P9 -  Variável numérica que
- retorna o saldo entrada.
- - P10 -  Variável numérica que retorna o saldo saída.
- - P11 -  Variável numérica que retorna o orçamento inicial entrada ou total crédito
- entrada (ver parâmetro P1).
- - P12 -  Variável numérica que retorna o orçamento final entrada ou total débito
- entrada (ver parâmetro P1).
- - P13 -  Variável numérica que retorna o orçamento inicial saída ou total crédito
- entrada (ver parâmetro P1).
- - P14 -  Variável numérica que retorna o orçamento final saída ou total débito
- saída (ver parâmetro P1).
- Exemplos:
- P1 com o valor >=0
- (maior ou igual a zero):
- Definir Numero FCodEmp;
- Definir Numero FNumPrj;
- Definir Numero FCodFpj;
- Definir Numero FRotPpj;
- Definir Numero FCtaFin;
- Definir Numero FCtaRed;
- Definir Alfa DCodCcu;
- Definir Data FMesAno;
- Definir Numero VPos;
- VPos = 0;
- Enquanto (VPos >= 0)
- {
- SaldoProjeto(VPos, FCodEmp, FNumPrj, FCodFpj, FRotPpj, FCtaFin, DCodCcu, FMesAno, FVlrCpt,
- FVlrCxa, FOrcCpI, FOrcCpF, FOrcCxI, FOrcCxF);
- Se (VPos >= 0)
- {
- VPos++;
- Se ((FRotPpj = 0) ou ((FRotPpj > 0) e (EMosRRo = 'S')))
- ListaSecao("Adicional_Posicao");
- Se (FRotPpj > 0)
- FTotCpt = FTotCpt + FVlrCpt;
- }
- }
- P2 com o valor =-1 (menos 1):
- Definir Numero FCodEmp;
- Definir Numero FNumPrj;
- Definir Numero FCodFpj;
- Definir Numero FRotPpj;
- Definir Numero FCtaFin;
- Definir Numero FCtaRed;
- Definir Alfa DCodCcu;
- Definir Data FMesAno;
- Definir Numero VPos;
- Vpos = -1;
- SaldoProjeto(VPos, FCodEmp, FNumPrj, FCodFpj, FRotPpj, FCtaFin, DCodCcu, FMesAno, FVlrCpt,
- FVlrCxa, FOrcCpI, FOrcCpF, FOrcCxI, FOrcCxF);
- ListaSecao("Adicional_Posicao");
- P2 com o valor =-2 (menos 2):
- Definir Numero FCodEmp;
- Definir Numero FNumPrj;
- Definir Numero FCodFpj;
- Definir Numero FRotPpj;
- Definir Numero FCtaFin;
- Definir Numero FCtaRed;Definir Alfa DCodCcu;
- Definir Data FMesAno;
- Definir Numero VPos;
- Vpos = -1;
- SaldoProjeto(VPos, FCodEmp, FNumPrj, FCodFpj, FRotPpj, FCtaFin, DCodCcu, FMesAno, FVlrCpt,
- FVlrCxa, FSalCap, FSalDap, FSalCax, FSalDax);
- ListaSecao("Adicional_Posicao");
- Utilização da Função
- (dependentes): CarregaSaldoProjeto.
- Observações:
- Pode-se chamar a função SaldoProjeto várias vezes com o parâmetro P1 diferente.
- <!-- source: https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/sapienssid.htm -->

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
SaldoProjeto();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
