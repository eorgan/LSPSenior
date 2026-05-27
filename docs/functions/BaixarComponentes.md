# BaixarComponentes

## Assinatura

```lspt
Funcao BaixarComponentes(Alfa pParametros,Alfa End pRetorno);
```

## Código
643

## Descrição

Baixar componentes de OPs.

## Parâmetros

- **pParametros** (`Alfa`) - Entrada: Código da origem da OP.
- **pRetorno** (`Alfa End`) - Saída: Número da OP.

## Valores de Retorno

- pTipo de retorno: variável alfanumérica que
- retorna OK caso a baixa tenha sido realizada com sucesso.
- Exemplo 1:
- Definir Alfa vParametros;
- Definir Alfa vRetorno;
- Definir Alfa vNumOrp;
- Definir Alfa VACodEtg;
- Definir Alfa vQtdUti;
- Definir Numero VXCodEmp;
- VXCodEmp = CodEmp;
- Definir Cursor Cur_E900Cmo;
- Cur_E900Cmo.SQL "SELECT * FROM E900CMO, E900COP WHERE E900CMO.CODEMP = :VXCodEmp
- AND E900CMO.CODEMP = E900COP.CODEMP AND E900CMO.CODORI = E900COP.CODORI AND
- E900CMO.NUMORP = E900COP.NUMORP AND (E900COP.SITORP = 'A'OR E900COP.SITORP =
- 'L') AND E900CMO.CODCMP = '2101' AND E900COP.CODORI = '80' ";
- Cur_E900Cmo.AbrirCursor();
- Se (Cur_E900Cmo.Achou)
- inicio
- IntParaAlfa(Cur_e900Cmo.NumOrp,vNumOrp);
- IntParaAlfa(Cur_e900Cmo.CodEtg,vaCodEtg);
- IntParaStr(Cur_e900Cmo.QtdPrv,vQtdUti);
- SubstAlfa(",", ".", vQtdUti); @ se tiver vírgula,
- trocar por ponto @ vParametros = "CodOri=" + Cur_E900Cmo.CodOri + ",NumOrp="+vNumOrp
- + ",CodCmp="+Cur_ E900Cmo.CodCmp;@ vParametros = vParametros + ",CodDer="+Cur_E900Cmo.CodDer+",CodEtg="+vaCodEtg+",QtdUti="+vQtdUti
- +",LotDes=12345-111,CodLot=123";@ vParametros = vParametros +   ",CodDer="+Cur_E900Cmo.CodDer+",CodEtg="+vaCodEtg+",QtdUti=1,LotDes=12345-111,CodLot=123";
- BaixarComponentes(vParametros,vRetorno);
- fim;
- Nota:
- Caso contenha algum espaço no cadastro do produto, seja de código de componente, derivação, origem e outros, as variáveis devem ser passadas conforme exemplo abaixo ( no exemplo abaixo somente o componente tinha espaço em seu cadastro):
- [![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)Exemplo:](javascript:void(0);)
- xparametros = "CodOri=FJ,NumOrp=26033,CodEtg=20," + ""CodCmp=" + xCodCmp + """ + ",CodDer=600X720,QtdUti=1";
- Exemplo 2:
- Definir Alfa Param;
- Definir Alfa aRet;
- Param = "CodOri=XX,NumOrp=111,CodEtg=YYY,SeqCmp=0,CodCmp=1111,CodDer=1,QtdUti=0,QtdUn2=1";
- BaixarComponentes(Param,aRet);
- Observações:
- - Os parâmetros CodOri, NumOrp, CodEtg, CodCmp,
- CodDer e QtdUti são obrigatórios.
- - Os parâmetros CodLot e LotDes são opcionais.
- - O valor passado no parâmetro LotDes será gravado no movimento de saída do
- componente no campo LotDes da tabela E210Mvp, porém, o sistema não fará nenhuma
- consistência deste valor, como por exemplo para verificar se este lote existe ou
- não para o produto da O.P. ou coisa parecida, isto é, o valor simplesmente é
- gravado na base, ficando todas as consistências por conta do usuário na regra.
- - O valor informado na variável QtdMnc será somado ao valor já existente na
- coluna "Qtde Não-Conforme", ou seja, se o componente possuía o valor 1 nessa
- coluna na tela de consulta e na regra também foi passado o valor 1, então ao
- consultar novamente após a execução, deverá constar o valor 2 nesta coluna.
- - O valor informado na variável QtdCdr, se for diferente de zero, irá substituir
- o valor da coluna "Qtde Destin. Refugo", isto é, se o componente possuía o valor
- 2 nessa coluna na tela de consulta e na regra foi passado o valor 5, então ao
- consultar novamente deverá constar o valor 5.
- - O valor informado na variável QtdCdr, se for diferente de zero, irá substituir
- o valor da coluna "Qtde Destin. Refugo", isto é, se o componente possuía o valor
- 2 nessa coluna na tela de consulta e na regra foi passado o valor 5, então ao
- consultar novamente deverá constar o valor 5.
- - Ao informar um valor para a variável "NumSep" e o componente em questão não
- tiver controle por série, o valor desta variável será ignorado e a baixa será
- feita, sem gerar críticas.
- - Ao informar um valor para a variável "SepDes" e o produto da O.P. não tiver
- controle por série, o valor desta variável será ignorado e a baixa será feita
- sem gerar críticas.
- - Não será feito nenhuma consistência com relação ao valor informado na variável
- "SepDes", ou seja, pode ser informado um número de série que ainda não tenha
- dado entrada no estoque e não será gerado nenhuma crítica.
- - O valor do parâmetro SepDes será gravado no movimento de baixa de estoque do
- componente, no campo SepDes da tabela "E210MVP"(Estoques -Movimentos).
- - Não é possível realizar a baixa de componentes que tiveram o status alterado para "Inativo", após a criação da O.P. Quando houver algum componente nesta situação no momento da baixa, ele é desconsiderado e será gerada uma observação, nas observações da OP, informando que a baixa não foi realizada, pois o componente estava inativo.
- - Quando não informada a quantidade utilizada na regra da função, o sistema assume o saldo previsto do componente como sendo a quantidade utilizada. É uma característica da função.
- - Quando a quantidade a baixar do componente não for igual a quantidade disponível em estoque, será realizado a baixa da quantidade disponível (por exemplo, se a quantidade prevista for 5 e a quantidade disponível for 2, apenas 2 serão baixados). Nesse caso, a quantidade restante ficará como pendente de baixa e a função não emitirá uma mensagem de advertência informando que a quantidade total não foi baixada. Somente quando o saldo de estoque do componente disponível para baixa for igual a zero é que uma mensagem será exibida, impedindo assim a baixa do componente.
- - Para baixar a quantidade do componente de um depósito diferente do que consta na OP, deve ser ativado o identificador de regra CHA-900SDPBC01 e definir o novo depósito de baixa para este componente. Com isto, a quantidade informada na função BaixarComponentes será diminuída da quantidade reservada do componente no depósito que consta na OP e a movimentação de baixa de estoque do componente utilizará o novo depósito informado no identificador.
- Utilização da Função (dependentes): Nenhuma.
- Identificadores utilizados:
- [CHA-900SDPBC01](../identificadores_regras/cha_900sdpbc01.htm)
- [PRD-000ARFDP01](../identificadores_regras/prd_000arfdp01.htm)
- <!-- source: https://documentacao.senior.com.br/gestaoempresarialerp/5.10.4/regra_funcoes/buscabaixadepreciacao.htm -->

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
BaixarComponentes();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
