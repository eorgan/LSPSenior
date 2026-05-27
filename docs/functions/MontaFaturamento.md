# MontaFaturamento

## Assinatura

```lspt
Funcao MontaFaturamento(Numero pEmp,Alfa pFil,Numero pCpt,Alfa pPro,Alfa pSer, Alfa pFam,Alfa pAgc,Alfa pProSer,Alfa pVarSer,Alfa pRep,Alfa pCat,Alfa pConFat, Alfa pCalCom,Alfa pGerFin,Alfa pTitPgt);
```

## Código
800

## Descrição

Função genérica para retornar uma lista com todos os itens faturados através de notas fiscais de venda (tipo 1,10) e/ou contratados através de contratos do tipo 3, em um determinado período. A lista irá retornar as informações no mais baixo nível possível, como: empresa, filial de faturamento, produto, derivação, depósito, valor faturado, quantidade faturada, agrupamento comercial, data faturamento, representante, categoria, definições da comissão do representante, valor comissão base, valor comissão previamente calculado pela rotina utilizando os impostos definidos no representante, serviço, tipo de serviço utilizado, tipo de registro (Venda, Devolução, Contrato, TEF). Esta lista será utilizada basicamente para o acompanhamento diário das METAS (Produtos/Serviços), COMISSÕES (baseadas em METAS) e apuração final do cálculo das comissões (podendo ser feita usando ou não o Varejo). A busca das informações é baseada em: - Itens de notas fiscais faturadas: quando a nota fiscal se encontra na situação (2-Fechada) e o faturamento se encontrar dentro de um período previamente estipulado por parâmetro. Portanto, a competência do faturamento (mês/ano) é um atributo obrigatório na função.Serão buscados itens de notas fiscais com e sem pedidos, mas desde que tenham a informação do representante no item da nota fiscal. O representante no item é obrigatório pois é por esta informação que a comissão é paga e o acompanhamento das metas é feito. Se desejar que o item não seja apurado na comissão, basta utilizar uma transação com o parâmetro "E001TNS.VENFAT=''N'' Considera como faturamento?" e "E001TNS.LISMOD''VEF'' or E001TNS.LISMOD=''VES''. Também é obrigatório que os produtos faturados estejam vinculados a agrupamentos comerciais (E013AGP.TIPAGP = 'C'). Para itens de serviços o procedimento é o mesmo, salvo que a ligação com o agrupamento não é exigida. Se o sistema for inicializado com Varejo, além dos serviços normais, irão aparecer os serviços de Varejo. Se o sistema não for inicializado com Varejo, apenas serviços normais irão ser considerados (serviços, fretes). Para clientes que não utilizam Varejo, será sempre considerado o representante dos dados gerais. - Devoluções das Vendas:seguirá o mesmo critério acima, mas ao invés de notas de saída, se baseia em notas de entrada. Mas ao invés de somar no valor a pagar, será descontado na interface de apuração. Os critérios são os mesmos. As notas de compra são dos tipos (2,3). - Contratos de Serviços Financeiros: serão retornados todos os contratos financeiros (tipo 3) que foram feitos no sistema, respeitando o período informado nos parâmetros do sistema. Serão buscados apenas contratos feitos para serviços financeiros e utilizados no varejo. Isto se deve pois estes contratos nunca serão faturados pelo ERP, e não entrará no retorno obtido pelas notas fiscais de saída. Para buscar contratos normais, basta passar na função um parâmetro para considerar contratos comerciais ainda não faturados. Informações necessárias no contrato: representante, serviços dos tipos ''S, I, M, C" precisa estar ativo, a quantidade de parcelas precisa ser diferente de zero. - Serviços feitos pelo TEF: serão retornados todos os registros feitos pelo TEF nos pontos de Loja. Os únicos serviços hoje permitidos são: recarga de celular e correspondentes bancário. O período sempre será respeitado. Apenas os registros já confirmados (que já foram apurados pelo ERP serão considerados. Entende-se como apurados pelo ERP registros de TEF que já geraram títulos ou notas fiscais.) A lista poderá retornar o valor previamente calculado da comissão na geração da nota, ou forçar que este cálculo seja feito novamente dentro da função. Para forçar o cálculo basta passar o parâmetro "CalCom = S". O cálculo da comissão será totalmente baseado nas definições do representante definidos na estrutura (E090HRP - Cadastros - Representantes - Históricos). Importante: para quem utilizar o controle de metas e a apuração da comissão em momentos específicos do mês, os parâmetros "% Comissão Faturamento" e "% Comissão Recebimento" precisam estar com percentual 0 (zero). Isto evita que títulos sejam previamente gerados nas rotinas de faturamento e recebimento de forma aleatória. Uma vez que estes títulos estão gerados, a rotina de apuração de comissão passa a não ter mais o controle sobre o que foi e o que não pago ou gerado, pois apenas pela rotina de apuração de comissões os itens da nota são marcados como apurados. A interface de apuração de comissão não irá consistir se um determinado representante já possui títulos (E504CAP, E301TCR) para um determinado período. A única consistência que será feita é: um mesmo registro de item de nota fiscal não poderá ser utilizado em mais de uma apuração, inibindo desta forma pagamentos duplicados. Também estão fora desta consistência títulos avulsos e/ou qualquer tipo de negociação entre empresa e representante. A análise dos valores a pagar deverão ser feitas através de uma auditoria executada pelo próprio cliente. A lista virá ordenada por: empresa, filial faturamento, representante, agrupamento comercial, produto, data faturamento se for produto e empresa, filial faturamento, representante, tipo de serviço, serviço, data faturamento se for serviço. A apuração final para o atingimento das metas e/ou para o pagamento das comissões ainda leva em consideração as devoluções feitas dentro do período de competência. A diminuição dos valores apenas é feita se o registro base (venda) ainda não foi processado pela interface de apuração. Funções para acionar esta função dentro regras, relatórios e processos agendados: - Funcao LeFaturamento (Numero NPos,Numero End FLis,Numero End cFil, Alfa End cSnf,Numero End cNfv, Numero End cIpv, Numero End cEmi,' 'Numero End cCli, Alfa End cRet, Numero End cBco,Numero End cCom, Numero End cCtr, Numero End cFin,Numero End cRep); Retornos: Filial, Série fiscal, Nota fiscal, Item da nota, Emissão, Cliente, Tipo de Retorno, Valor base comissão, Valor comissão, Contrato, Valor financeiro, Representante. - Funcao LeFaturamento2 (Numero NPos,Numero End FLis,Alfa End cAgc, Alfa End cPro, Alfa End cDer,Alfa End cSer, Alfa End cVar, Alfa End cDep,Numero End cFat, Numero End cRec, Numero End cUni, 'Numero End cMgc, Alfa End cCat, Alfa End cTit,Alfa End cBan);

## Parâmetros

- **pEmp** (`Numero`) - Entrada
- **pFil** (`Alfa`) - Entrada
- **pCpt** (`Numero`) - Entrada
- **pPro** (`Alfa`) - Entrada
- **pSer** (`Alfa`) - Entrada
- **pFam** (`Alfa`) - Entrada
- **pAgc** (`Alfa`) - Entrada
- **pProSer** (`Alfa`) - Entrada
- **pVarSer** (`Alfa`) - Entrada
- **pRep** (`Alfa`) - Entrada
- **pCat** (`Alfa`) - Entrada
- **pConFat** (`Alfa`) - Entrada
- **pCalCom** (`Alfa`) - Entrada
- **pGerFin** (`Alfa`) - Entrada
- **pTitPgt** (`Alfa`) - Entrada

## Exemplo de Uso

```lspt
@-- Adicione exemplo de uso aqui --@
MontaFaturamento();
```

> Gerado automaticamente a partir da documentação oficial da LSP por `generate-functions.js`.
> Arquivos com esta nota são regenerados a cada execução; remova-a para editar manualmente
> sem ser sobrescrito.
