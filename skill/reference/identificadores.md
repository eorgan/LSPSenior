# Índice de Identificadores de Regras da Senior

> Índice navegável de 3157 identificadores de regras do ERP Senior. Gerado por `scripts/buscar_identificador.py --indice`.
> Identificador de Regra = ponto onde o ERP aciona sua regra LSP (consulta **E098REG**; ativa em **F098REG**, `SitReg='A'`, por empresa).
> Detalhes (variáveis de ENTRADA/SAÍDA + exemplo de regra): `python3 scripts/buscar_identificador.py <código|tela|termo> [--full]`.

## AST - Assistência Técnica e Controle de Garantia

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `AST-118IOCST01` | F118OCR | Este identificador tem por finalidade consistir a situação de um item de ocorrência. (E118IOC.SITIOC). |
| `AST-118OCRST01` | F118OCR | Este identificador tem por finalidade consistir a situação de uma ocorrência. (E118OCR.SITOCR). |
| `AST-118RCIOC01` | F118OCR | Permitir a consistência das informações da página "Itens" da tela F118OCR, nos momentos em que o usuário incluir/alterar/excluir algum re... |
| `AST-118RCOCR01` | F118OCR | Permitir a realização de consistências na inclusão/alteração/exclusão de registros da página "Dados Gerais" na tela F118OCR. |

## CHA - Chão de Fábrica

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `CHA-000FINOE01` | — | Definir quais quantidades são somadas a fim de identificar a quantidade movimentada/realizada de uma operação/estágio/OP. |
| `CHA-000UIPBA01` | — | Quando este identificador estiver ativo, é utilizado a regra do identificador 900EUDLE01 para fazer a baixa automática dos componentes. A... |
| `CHA-900ABXCP01` | Retorno de serviços de Terceiros (F900RET) e função de programador RetornarServicoOP. | permite que a mensagem perguntando se deseja fazer a baixa de componentes não seja exibida. Isso é válido apenas quando, na origem da O.P... |
| `CHA-900ADCNF01` | — | Este identificador de regras tem por objetivo que todos os componentes apareçam na Nota Fiscal de Remessa de Serviços para Terceiros, mes... |
| `CHA-900ADFQZ01` | Apontamento de defeitos (F909MIF e F909IOP) | Este identificador tem a finalidade de alterar o funcionamento da rotina de apontamento de defeitos nas telas F909MIF e F909IOP. |
| `CHA-900AFPFE01` | — | Atualiza Filial Produção na Finalização Estágio. |
| `CHA-900AGCNF01` | F900RST - Movimentação de Remessas das Ordens de Produção/Serviço | Agrupar os componentes das O.Ps. por código do produto e código da derivação no momento de gerar a NF de remessa através da tela F900RST. |
| `CHA-900AIDLS01` | Manutenção das reservas dos lotes (F900DLS) |  |
| `CHA-900ALPMO01` | F909MIF | O objetivo deste identificador é permitir que os pesos obtidos através do botão "Leitura" sejam acumulados nos campos da quantidade. |
| `CHA-900AQMOP01` | — | Quando existir este identificador e o mesmo estiver ativo, será arredondado a quantidade do movimento de OP sempre para baixa sem casas d... |
| `CHA-900BACMC01` | F900BAC | Permite manipular (alterando ou inserindo) os componentes apresentados na grade Componentes Previstos para as O.Ps./O.Ss., na aba Compone... |
| `CHA-900BACST01` | F900BAC |  |
| `CHA-900BCCDE01` | — | Com este identificador ativo, se não houver regra associada, será sugerido o Centro de Custos do Estágio e não do Depósito, como era o pa... |
| `CHA-900BCETO01` | — | Caso esse identificador estiver cadastrado e ativo, basta o tipo de baixa de componentes ser 'N' (Não obriga baixar Componentes, apenas a... |
| `CHA-900BCQPA01` | — | Realizar a baixa automática dos componentes da OP mesmo que já tenham a sua quantidade prevista atendida. |
| `CHA-900BCQPA02` | F909MIF. | Realizar a baixa automática dos componentes da O.P. mesmo que já tenham a sua quantidade prevista atendida. |
| `CHA-900BCTNS01` | F900ECS | Permite sugerir via regra uma transação para os componentes na grid, diferente da transação informada no cabeçalho da tela. |
| `CHA-900BLSOP01` | Movimentação de OPs | Montar o código do lote ou da série que será usada na movimentação das OPs. |
| `CHA-900CBMRS01` | F900RST | Com este identificador ativo, o sistema considerará a quantidade baixada manualmente de algum componente para calcular a sua quantidade n... |
| `CHA-900CDICC01` | F900ICC | Checar Dados de entrada da tela de Inventário por Consumo de Componentes. |
| `CHA-900CDMLO01` | F900Dls | Consistir dados em geral. |
| `CHA-900CDRSC01` | F900RCP e F913SCE | Checar dados nas telas de Requisição e Separação de Componentes. |
| `CHA-900CFFOP01` | Forçar Fim Estágio/Operação (F900FFO) | Através da regra deste identificador será possível consistir o forçar fim de um estágio/operação na tela F900FFO. |
| `CHA-900CLPOP01` | F900GLI, F900ROP |  |
| `CHA-900CMPEN01` | F900BAC | Quando este identificador estiver ativo e a tela F900BAC for chamada através do apontamento de O.Ps., ao clicar na aba Componentes de Ent... |
| `CHA-900CMROP01` | F900RST - Movimentação de Remessas das Ordens de Produção/Serviço | Fazer consistências na movimentação de remessas das Ordens de Produção/Serviço, antes de processar na tela F900RST. O identificador neces... |
| `CHA-900CONSI01` | — |  |
| `CHA-900CPEEA01` | — | Colocar próximo estágio em andamento quando for automático sem precisar ter finalizado toda a quantidade prevista, ou seja, finalizado o ... |
| `CHA-900CQCOP01` | — | Checar a quantidade do componente que está sendo baixado, a fim de estabelecer um limite para determinado componente e impedir que seja b... |
| `CHA-900CQCOP02` | F900BAC e F900ECS. | Valida a quantidade que está sendo baixada ou estornada de um componente de OP, independentemente de lote ou série. |
| `CHA-900CQOCS01` | — |  |
| `CHA-900CQPOP01` | Alteração Qtde Prevista OP (F900AQP) |  |
| `CHA-900DADBC01` | F900BAC | Através da regra deste identificador, será possível definir uma abrangência de depósitos que poderá ser utilizada para a baixa dos compon... |
| `CHA-900DCOOP01` | F900EMO | Desabilitar campo observação. As letras significam: Desabilitar Campo Observação OP. |
| `CHA-900DDRCT01` | F900RST | Permitir informar o depósito do componente a ser remetido. |
| `CHA-900DEPBC01` | F900ECS | Sugere o depósito a ser usado na movimentação de estorno de estoque do componente da OP ao mostrar os dados na tela F900ECS. Com o identi... |
| `CHA-900DFCTA01` | F909MIF - F900CCC - Função ApontarOps | Através da regra deste identificador será possível definir um fator de conversão de tempo para os apontamentos de O.Ps., ou seja, poderá ... |
| `CHA-900DFEDF01` | F900ADF (apontamento de defeitos) | Através da regra deste identificador será possível concatenar um filtro personalizado ao comando SQL que carrega os defeitos na grade da ... |
| `CHA-900DFPCO01` | F900PCO e F909DLC (chamado de algumas telas de apontamento de OP, como F909MOA) | Define o filtro que identifica os componentes para pesagem que fazem parte da fórmula. |
| `CHA-900DLUBC01` | Baixa de componentes da O.P. (F900BAC) | Ao clicar no botão "Mostrar" da tela de baixa de componentes (F900BAC), a regra deste identificador será executada para cada componente q... |
| `CHA-900DMNSB01` | F900SCO - Distribuição de séries para componentes | A finalidade desse identificador é basicamente alternar entre preencher a lista de séries que serão utilizadas para os componentes de for... |
| `CHA-900DNBMO01` | F900BOO, F900BOP, F900GMV, F900MPO, F900PCO, F909MIF, F909MOA, F916COL, F102CEI, F210VOL | Permite que seja definido qual o número da balança a ser usada para capturar o peso que será apontado. Também devolve para a regra o nome... |
| `CHA-900DPIRS01` | F900IRS e F900RST | Este identificador permite ao usuário informar via regra qual será o preço, a descrição e a classificação fiscal do item da NF de remessa... |
| `CHA-900DPQFE01` | — | Na baixa de componentes pendentes, quando o identificador está ativo, trava a baixa de componentes da OP e mantém o registro dela para po... |
| `CHA-900DRCFO01` | finalização de O.Ps. e alteração em dados nos componentes: | manter os componentes reservados mesmo quando a OP for finalizada. As letras **DRCFO** significam **Deixar Reserva Componentes Finalizaçã... |
| `CHA-900DSCBC01` | Baixa de Componentes do Estoque(F900BAC) | Quando este identificador estiver cadastrado, ativo e ligado a uma regra, será possível definir a situação dos campos de seleção localiza... |
| `CHA-900DSNFR01` | F900IRS |  |
| `CHA-900DTCOP01` | — |  |
| `CHA-900DTRAN01` | F909MIF | Definir a transação a ser utilizada nos movimentos de estoque pelos produtos de 2ª qualidade, 3ª qualidade e refugo no apontamento de OP. |
| `CHA-900DTVEE01` | — |  |
| `CHA-900ECMRR01` | F900MRR | Através da regra deste identificador será possível executar consistências ao alterar os dados de remessas e retornos. |
| `CHA-900ECSNF01` | F900RST | Este identificador de regras tem por objetivo permitir informar uma série da NF diferente do que está cadastrado como padrão no cadastro ... |
| `CHA-900EERSP01` | F900RCP (Separação de Componentes) | Enviar email contendo em anexo o log com informações sobre as linhas processadas. |
| `CHA-900EMLIM01` | F909MOA, F909MIF | Habilita o recurso de percentual de limite de uso para avaliação de ferramenta. |
| `CHA-900FASRA01` | F900CCC | Fechar automaticamente os movimentos de OP em aberto na primeira sequencia de roteiro anterior a sequencia em questão com tipo de posicio... |
| `CHA-900FILOP01` | F900PCO |  |
| `CHA-900GMOIF01` | F103AIO, F103AOS, F909CIB, F909MOA, F916COL, SID (PRD.ApontarOPs), função de programador (ApontarOPs) |  |
| `CHA-900GMOOF01` | Apontamento de OPs (coletor, SID, função de programador) | Permite a geração de movimento de OP mesmo em uma operação já finalizada, similar a funcionalidade da tela F909IOP (inclusão de movimento... |
| `CHA-900GMOPA01` | F210CNP | Gerar Movimento OP Automaticamente quando processar produtos numerados (série) na tela F210CNP. Para tanto, precisa ter origem e OP no re... |
| `CHA-900GUOAD01` | Apontamento de defeitos |  |
| `CHA-900ICPAM01` | F900ICP; F900ICE (ou qualquer outra baixa/estorno de incorporação) | Chamado antes de realizar o movimento de estoque de baixa do produto incorporado, ou de estorno da incorporação. |
| `CHA-900ICQNE01` | Utilizar em função de programador | Incluir um componente automaticamente caso não existir, quando for utilizada a função de programador BaixarComponentes. |
| `CHA-900ICUAO01` | F909MIF, F909MOA, F909AOP e F900RET. | a finalidade deste identificador é disponibilizar os campos de usuário da tabela E900EOQ para alteração nas telas F909MIF, F909MOA, F900R... |
| `CHA-900INTEX01` | Análise para Liberação (Disp. Estoque) | integração com programa externo. |
| `CHA-900IRCMP01` | F930MPR e F930MPA. Na tela F900CCC, o identificador não pode ser chamado. | Dar condição ao usuário poder checar os dados do motivo de parada que acabou de ser lançado no sistema. |
| `CHA-900IRPCO01` | F900PCO | Auxiliar no controle de pesagem dos componentes. |
| `CHA-900LOTE01` | — | Fazer a montagem do Código do Lote conforme definição pelo usuário |
| `CHA-900LRRCB01` | F900LRR Leitura de OPs para Remessa e Retorno de Serviço de Terceiros. | O objetivo deste identificador é permitir que o código de barras lido na tela F900LRR seja interpretado, retornando para a tela os valore... |
| `CHA-900LRRDG01` | F900LRR. | Disponibiliza um ponto de regra para tratamentos após a gravação de registros na tabela E900LRR (a qual armazena dados de OP e operações ... |
| `CHA-900MFUBC01` | Baixa de componentes (F900BAC) | O objetivo deste identificador é permitir que seja adicionado um filtro personalizado na busca dos componentes da O.P. que serão baixados. |
| `CHA-900MHMCD01` | F900CCC | Com este identificador ativo o sistema irá concatenar a hora atual no início das mensagens enviadas ao coletor da Automasoft. |
| `CHA-900NBCMP01` | — | Não baixar mais que a quantidade prevista de um componente qualquer. |
| `CHA-900NBCQR01` | — | Este identificador é chamado ao realizar o apontamento de OPs, antes da baixa de componentes, quando o apontamento possui alguma quantida... |
| `CHA-900NCAQP01` | Alteração de dados de Componentes da O.P./O.S. (F900ADC). | Na substituição de componentes da tela Alteração de dados de Componentes da O.P./O.S. (F900ADC), o novo componente irá assumir a quantida... |
| `CHA-900NCDHM01` | — | Este identificador de regras tem por objetivo desviar o programa para que não seja checado a data e hora do movimento (tanto de início co... |
| `CHA-900NEOCS01` | — | Não cancelar OC de Serviço mesmo que a situação da mesma está 9 (Não Fechada). |
| `CHA-900NLCEE01` | F900BAC, F900ECS. | Não listar componentes de estágios terceirizados na tela de baixa de componentes (F900BAC) e na tela Estorno de Componentes (F900ECS). |
| `CHA-900NPDPB01` | — | Este identificador de regra tem por objetivo não propor o depósito da OP ou o depósito padrão nas telas F900BOO (Baixa de O.P./O.S. por O... |
| `CHA-900NPTBC01` | — | Este identificador de regras tem por objetivo não propor nenhuma transação na tela de baixa de componentes. Assim sendo, ao adicionar cad... |
| `CHA-900OBSIS01` | F900ISO | Quando este identificador estiver ativo, ao ser gerada uma nova solicitação de compra através da tela F900ISO o sistema irá concatenar o ... |
| `CHA-900OPPSE01` | Cancelamentos de OP |  |
| `CHA-900PAPDR01` | F909MIF | Este identificador só terá validade caso o parâmetro no cadastro de origens Tag083Ori.EntEpi (dá entrada no estoque em processos intermed... |
| `CHA-900PCOTL01` | Pesagem de componentes da O.P (F900PCO). | Alterar a quantidade mínima e a quantidade máxima tolerada na pesagem dos componentes na tela Pesagem de componentes da O.P (F900PCO). |
| `CHA-900PMCCP01` | telas de movimentos/acerto nas ordens de produção, onde existem coletas registradas para as ferramentas utilizadas nos movimentos. | permite realizar movimentação/acerto nas ordem de produção mesmo se existirem coletas posteriores para a ferramenta utilizada no movimento. |
| `CHA-900PVDUA01` | F900ICO |  |
| `CHA-900QAIRS01` | F900IRS | Com este identificador ativo, será possível definir via regra o critério de quebra/agrupamento dos itens na NF de remessa gerada a partir... |
| `CHA-900QINCS01` | F900IRS | O objetivo deste identificador é fazer com que a tela F900IRS considere o código do serviço para efetuar a quebra na geração dos itens da... |
| `CHA-900RCGAD01` | Apontamento de defeitos | Por meio de uma regra ligada a este Identificador de Regras, será possível realizar checagens no apontamento de defeitos. Um exemplo seri... |
| `CHA-900REATF01` | F916COL, F909MIF, F909MOA, F900BOP e F900BOO | Permitir realizar ações (como imprimir etiquetas, etc.) no sistema após o commit (término da transação) no apontamento de O.P. |
| `CHA-900REATF02` | F909MOA. | Permitir realizar ações no sistema após o término da transação no apontamento de O.P. por embalagem. |
| `CHA-900RETGP01` | Retorno de serviços de Terceiros (F900RET) e função de programador RetornarServicoOP. | define que a baixa dos componentes na ordem de produção ocorra via processo agendado, ou seja, não ocorre no ato. O processo é acionado a... |
| `CHA-900RETRC01` | F909AOP e função EstornaComponentes. | Indica se irá ou não retornar a quantidade estornada para a reserva do componente da OP. |
| `CHA-900RRLPD01` | F900ECS - Estorno de Componentes | Alterar para quando for feito um estorno de componentes que são controlados por lote, a reserva destes componentes retorne para o lote pa... |
| `CHA-900RSTQT01` | F900RST | Quando este identificador estiver ativo, na tela F900RST, caso haja algum componente com quantidade a remeter inferior à quantidade previ... |
| `CHA-900RTBCO01` | F900RET - Retorno de Serviços de Terceiros | Permitir alterar o tipo de baixa de componentes (exemplo: estava previsto o tipo de baixa manual para esta tela, podendo agora altera par... |
| `CHA-900RTMOP01` | F916COL - Apontamentos por Códigos de Barras |  |
| `CHA-900SATEM01` | — | O objetivo deste identificador é sempre abrir a tela de Especificação de Movimentos de OP (F900EMO), mesmo que a quantidade do movimento ... |
| `CHA-900SCCBC01` | Sugerir Centro Custos | Dar condições ao usuário carregar a grade com o centro de custo adequado, sem necessariamente precisar informar os centros de custo manua... |
| `CHA-900SDPBC01` | — | Sugerir depósito e transação nas rotinas de movimentação de estoque para OP, tanto para saída do estoque (baixa de componentes) como para... |
| `CHA-900SDRNC01` | — | Permite definir via regra o depósito utilizado para reaproveitamento ou estorno de material não conforme em baixa de componentes de OP. |
| `CHA-900SOOFP01` | F900IRS - Informações para remessa e retorno de Serviços | Definir a opção de sequência de operação, conforme a filial logada, para a seleção dos registros na tela F900IRS. Para o funcionamento do... |
| `CHA-900SQUBC01` | F900BAC - Baixa de Componentes do estoque |  |
| `CHA-900SQUEC01` | F900ECS - Estorno de Componentes | Calcular através de uma regra a quantidade a ser estornada de cada componente na tela F900ECS. |
| `CHA-900STRNC01` | — | Permite definir via regra a transação utilizada para reaproveitamento ou estorno de material não conforme em baixa de componentes de OP. |
| `CHA-900TNIRS01` | F900IRS e F900RST | Permitir que seja definida via regra a transação para as notas fiscais de remessa. |
| `CHA-900TTOSR01` | F900CCC |  |
| `CHA-900VBQTC01` | — |  |
| `CHA-900VCSLE01` | — | Tem por objetivo visualizar todos os componentes da OP, inclusive os componentes que não possuem saldo de lote no estoque ou com saldo in... |
| `CHA-900VDMOP01` | — | Quando existir este identificador, com situação ativa, ao acessar as telas F900GOO e F900BOP em: |
| `CHA-900VELOT01` | F900PCO | Disponibilizar informações para que, via regra, seja possível consistir informações do lote. |
| `CHA-900VERES01` | Baixa manual de componentes | Quando estiver ativo, e a baixa de componentes for manual, este identificador irá verificar se existe estoque suficiente para os componen... |
| `CHA-900VMPCR01` | — | Verificar a existência de paradas em aberto e finalizar as mesmas. |
| `CHA-909ADFIQ01` | F909MIF | Quando este identificador estiver ativo, o apontamento de defeitos na tela F909MIF será feito de forma individual, ao informar as quantid... |
| `CHA-909CAMOA01` | F909MOA |  |
| `CHA-909CBCIB01` | F909CIB | O objetivo deste identificador é permitir que o código de barras lido na tela F909CIB seja interpretado, retornando para a tela os valore... |
| `CHA-909CLAOP01` | F909MOA, definição do lote do produto com referência do lote do componente base | Definir o lote do produto no apontamento de OP pela tela F909MOA, com base no lote do componente e também é possível utilizar as informaç... |
| `CHA-909CLFUL01` | F909CIB - Apontamento de O.Ps via código de barras | Identificador de regras que, caso esteja ativado, o sistema carregará para a grade da tela F909CIB somente os registros foram lidos pelo ... |
| `CHA-909CLOTC01` | F909MOA - Movimentação automática de O.Ps | Consistir lotes de componente através de uma regra ligada a este Identificador de Regras. Com isto, será possível consistir validadade do... |
| `CHA-909CONAM01` | Alteração de Movimentos (F909AOP) | Através da regra desse identificador será possível consistir as alterações de movimentos de OPs. |
| `CHA-909CONQT01` | — |  |
| `CHA-909DAEMO01` | F909MIF - Movimentos de O.P./O.S (início e fim) | Identificador criado para que seja possível definir se as telas F900EMO(tela de especificações do movimento ), F900BAC (baixa de componen... |
| `CHA-909DDTMF01` | F909MIF, F900RET, F916COL, função de ApontarOPs e ação SID.Prd.ApontarOPs | Através da regra deste identificador, será possível definir a transação e o depósito a serem utilizados nos movimentos de finalização de OP. |
| `CHA-909DIMRD01` | Acerto nas dimensões da Tela F909AOP | Disponibilizar diversos campos para manipulação das dimensões de produtos das diversas qualidades através de regra. |
| `CHA-909DQLOT01` | — | Este Identificador de Regras tem por objetivo distribuir todas as possíveis quantidades entre os lotes que já tenham sido baixado compone... |
| `CHA-909ELESQ01` | Apontamentos Chão de Fábrica | Ativar recurso para que os lotes que tenham sido estornados e que não tiverem baixa na op, não apareçam na grade de seleção de lotes, na ... |
| `CHA-909FEMFO01` | F909MIF | definir quando pode imprimir um modelo cadastrado para a tela F909MIF. As letras significam (FEMFO): Filtrar Execução Modelo Finalização ... |
| `CHA-909MAPOP01` | F909MIF. | agilizar o apontamento de OP/OS. |
| `CHA-909MIFCB01` | F909MIF. | obter as informações de **Origem** e **OP** a partir da leitura do código de barras. |
| `CHA-909MOAFM01` | F909MOA | Permite determinar qual campo receberá o foco após mostrar os dados, somente quando a opção "Com O.P./O.S. Cód. Barras" estiver marcada. |
| `CHA-909MOAPD01` | Movimentos automáticos (F909MOA) |  |
| `CHA-909MOPFI01` | F900IOP, F909MIF | Permitir visualizar OPs finalizadas na tela F909IOP. |
| `CHA-909MRMOA01` | F909MOA | Quando este identificador estiver ativo, as mensagens exibidas ao processar as informações na tela F909MOA aparecerão em forma de texto n... |
| `CHA-909NAOLC01` | — | Este Identificador de Regras tem por objetivo NÃO limpar os campos Lote, Série, Transação, Depósito e Centro de Custos na tela de Movimen... |
| `CHA-909NCCBL01` | F909CIB | Com este identificador ativo, será possível informar o mesmo código de barras várias vezes sem que a tela realize consistência alguma |
| `CHA-909NCQMO01` | — | Este identificador de regras tem por objetivo desviar o programa para que ele não cheque a quantidade do movto de O.P. de uma sequência d... |
| `CHA-909NFORP01` | É utilizado nas telas de apontamento F909MIF, F900RET, F900MOA, F909IOP, F900MPO, F916COL, F909AOP. | Não Finalizar a OP se o Refugo atende a quantidade Prevista, ou seja, não finalizar automaticamente a ordem de produção quando é feito um... |
| `CHA-909NGMIF01` | — | Este identificador tem por objetivo definir que a tela gere um movimento de Ordem de produção (OPs) de início ou fim separadamente. |
| `CHA-909NSQTD01` | F909MIF | Quando este identificador estiver ativo, na tela F909MIF não será mais sugerida a quantidade de 1ª no campo "Qtde de 1ª Qlde". Ao invés d... |
| `CHA-909PAQST01` | — | Permitir um apontamento de uma operação que não seja a primeira operação da O.P., caso a quantidade apontada seja superior à quantidade r... |
| `CHA-909PECDP01` | — | Indica se o usuário pode entrar com as dimensões do produto e através de uma regra, calcular a quantidade do movimento da O.P. e conseque... |
| `CHA-909QTDRF01` | F909AOP | Quando usuário informar uma quantidade refugada, esta deve ser comparada com a quantidade de primeira qualidade para que esta jamais seja... |
| `CHA-909SDMPR01` | F909MIF | Com este identificador ativo, ao clicar no botão "Mot. Parada" da tela F909MIF, o sistema abrirá a tela de apontamento de motivos de para... |
| `CHA-909UPCOM01` | F909Dlc - Definição dos lotes dos componentes | Definir se na tela que possui campo para código de barras, a leitora utiliza porta de comunicação ou não (teclado). |
| `CHA-909USAFR01` | F909MOA | Permitir realizar na tela F909MOA o apontamento de ferramentas. |
| `CHA-909VBMCP01` | F909MIF e F909MOA. | validar a baixa manual dos componentes que constam na tela F900BAC. É executado ao sair da tela, sendo válido apenas ao baixar os compone... |
| `CHA-916CTLCB01` | — | Este Identificador de Regras tem por objetivo trazer a tela de leitor de código de barras com tamanho fixo e centralizada (F916Col). Isto... |
| `CHA-916CTLCR01` | F916COL e F909MOA |  |
| `CHA-916INQTD01` | F916COL | Esse identificador permite que o usuário possa entrar lendo um código de barras com uma quantidade refugada (após ler a expressão REFUGO)... |
| `CHA-916QTDSU01` | F916Col |  |
| `CHA-916TURTR01` | F916COL | Permitir sugerir o turno do Operador através de regra. |
| `CHA-930NRTOP01` | — | Não recalcular tempos de O.Ps. no apontamento de motivos de parada para melhorar performance. |
| `CHA-930PAQHZ01` | F930MPR - Apontamento de Motivos de Parada | Criado esse identificador para ter a possibilidade de apontar a quantidade de horas igual a 0. Sendo assim, ao cadastrar um motivo de par... |

## COM - Comercial

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `COM-000AISOU01` | Notas Fiscais de Entrada e Saída. | Alterar os valores de Isentas e Outras de ICMS e IPI no cálculo dos itens das Notas Fiscais de Entrada e Saída. |
| `COM-000ALCFF01` | — | Alterar o percentual, o valor e a base de COFINS Faturamento quando é feito o cálculo deste imposto. |
| `COM-000ALCOF01` | notas fiscais e ordens de compra. | alterar o valor base e o valor da COFINS a recuperar nas notas fiscais de entrada, ordem de compra e notas fiscais de saída. |
| `COM-000ALCRT01` | notas fiscais, cotações, pedidos e ordens de compra. | permite alterar percentual, valor e base da COFINS retida. |
| `COM-000ALCSL01` | notas fiscais, cotações, pedidos e ordens de compra. | Permite alterar percentual, valor e base do CSLL retido. |
| `COM-000ALDIF01` | — | Permite alterar o cálculo do DIFAL. |
| `COM-000ALENQ01` | — | Alterar o código de Enquadramento Legal do IPI. |
| `COM-000ALFUN01` | — | usado nas rotinas de geração de nota fiscal de entrada e saída e nas rotinas abaixo: |
| `COM-000ALINE01` | Notas Fiscais de Entrada |  |
| `COM-000ALINS01` | NFC, NFV, OC e Pedidos | Alterar o percentual, valor e a base de INSS quando é feito um cálculo do mesmo. |
| `COM-000ALIPI01` | — | alterar o percentual, o valor e a base de IPI ao calculá-lo. |
| `COM-000ALISS01` | Notas Fiscais de Entrada e Saída, Pedidos e Ordens de Compra | Alterar o percentual, valor e a base de ISS quando é feito um cálculo do mesmo. |
| `COM-000ALOUR01` | Notas Fiscais, Cotações, Pedidos e Ordens de Compra | Alterar o percentual, base e valor de outras retenções. |
| `COM-000ALPIF01` | — | Alterar o percentual, o valor e a base de PIS Faturamento. |
| `COM-000ALPIS01` | NFC, ordens de compra e NFV. | alterar o valor base e o valor do PIS a recuperar. |
| `COM-000ALPIT01` | notas fiscais, cotações, pedidos e ordens de compra. | alterar o percentual, o valor e base do PIS retido. |
| `COM-000ALSEN01` | — | usado nas rotinas de geração de nota fiscal de entrada e saída e nas rotinas abaixo: |
| `COM-000ALSTR01` | — | Alterar a sugestão do código da situação tributária de ICMS do item. |
| `COM-000ALSTR02` | Geral | Alterar a sugestão do código da situação tributária de IPI do item. |
| `COM-000ALSTR03` | Geral | Alterar a sugestão do código da situação tributária de PIS do item ou a natureza de receita do PIS e COFINS. |
| `COM-000ALSTR04` | Geral | Alterar a sugestão do código da situação tributária de COFINS do item ou a natureza de receita do PIS e COFINS. |
| `COM-000ALSUB01` | — | Alterar os valores (percentual, base e valor) referentes a substituição de PIS, COFINS, ICMS e retenção de ICMS Substituto, quando do cál... |
| `COM-000ALSUB02` | — | Alterar o código de substituição dos impostos PIS, COFINS e ICMS. |
| `COM-000BLCPD01` | — | Alterar a balança padrão de leitura ou saída que será usada pelo sistema, bem como decidir se a tela de configuração dos códigos das bala... |
| `COM-000CCEOR01` | — | Alterar o código do órgão de um evento emitido. É chamado na geração de eventos eletrônicos via Nota de Saída e via Nota de Entrada. |
| `COM-000CDCRT01` | — | Permitir a herança da carteira definida na ordem de compra/pedido. |
| `COM-000CDCRT02` | nota fiscal de saída manual. | sugerir, via regra, o código da carteira de cobrança para as parcelas da nota fiscal de saída na sua geração ou recálculo. |
| `COM-000CDPOR01` | — | Obter dos dados gerais do pedido, o portador informado neste, para ser levado as parcelas da nota e consequentemente aos títulos do finan... |
| `COM-000CDPOR02` | geração de parcelas (notas fiscais saída). | permitir que o código do portador seja sugerido via regra. É executado sempre que as parcelas das notas fiscais de saída forem geradas. |
| `COM-000CONMO01` | — | Alterar o conceito do motorista nas telas carregamento e do descarregamento. |
| `COM-000DEFCL01` | — | Não permitir visualizar clientes que não tenham definições para a empresa e filial ativas. |
| `COM-000DEFFO01` | — |  |
| `COM-000DEPVE01` | F211CPR | Selecionar automaticamente o campo "Considera apenas depósitos vendedores" ao clicar no botão "Seleção" da tela "F211CPR", quando for abe... |
| `COM-000DEPVE02` | F211CPR | Este identificador foi criado para que a tela F211CPR seja aberta com a opção "Considera apenas depósitos vendedores" marcada por padrão ... |
| `COM-000DIVIP01` | F120GRA | Permitir ao usuário efetuar a divisão de um item de pedido. |
| `COM-000EMBCO01` | — |  |
| `COM-000EXPDV02` | Tabela Preços Venda. | Disponibilizar o nome dos campos definido pelo usuário nas tabelas do Gestão Empresarial \| ERP. |
| `COM-000EXPDV03` | Integração ERP Varejo | Destinado ao controle de exportação de clientes para o ERP Varejo. |
| `COM-000EXPDV04` | Integração ERP Varejo | Ao importar os cupons fiscais, baixar os títulos gerados automaticamente, independente de todas as configurações e condições do sistema. |
| `COM-000EXPDV05` | Integração ERP Varejo | Controlar quais as formas de pagamento que não podem ser enviadas do ERP para o ERP Varejo. |
| `COM-000EXPDV06` | Integração ERP Varejo | Enviar um e-mail informando que foi efetuada uma consulta de estoque e o saldo estiver zerado para o produto/derivação consultado. |
| `COM-000EXPDV08` | Integração ERP Varejo |  |
| `COM-000EXPDV09` | Integração ERP x Varejo | Definir se, na exportação, será enviada a descrição usual do produto (campo "Descrição"), ou a descrição para impressão de nota fiscal (c... |
| `COM-000EXPDV10` | SID.TCR.GRAVARSUBSTTITULOVAREJO |  |
| `COM-000EXPDV11` | Integração ERP Varejo | Ao exportar os produtos modificar o valor unitário dos produtos com base na seguinte regra (preço do produto menos percentual de desconto) |
| `COM-000EXPDV12` | F070INT | Retornar uma lista de depósitos para exportação do ERP para o ERP Varejo. |
| `COM-000EXPDV13` | Integração ERP Varejo | Permitir a integração somente dos totalizadores fiscais. |
| `COM-000EXPDV14` | Gestão Empresarial \| ERP Varejo | Alterar a descrição e a descrição reduzida do produto no momento da exportação. |
| `COM-000EXPDV15` | Gestão Empresarial \| ERP Varejo | O processo de exportação de produtos e serviços para o sistema PDV, busca as informações de tributação do produto a partir da transação d... |
| `COM-000EXPDV16` | Gestão Empresarial \| ERP Varejo |  |
| `COM-000EXPDV17` | Gestão Empresarial \| ERP Varejo | Permite alterar a consistência de importação do campo CNPJ/CPF (E085CLI.CGCCPF) para o campo de Identificação de cliente (E085CLI.IDECLI)... |
| `COM-000EXPDV18` | Gestão Empresarial \| ERP Varejo | Definir no sistema ERP qual o tipo de documento será gerado para o PDV. É possível gerar arquivos nos formatos: DAV (Documento Auxiliar d... |
| `COM-000EXPDV19` | Gestão Empresarial \| ERP Varejo | Com este identificador ativo ou a variável "VSIntCodImp" informando "0", o sistema ERP envia para os arquivos de DAV, DAV-OS e Pré-venda ... |
| `COM-000EXPDV20` | Gestão Empresarial \| ERP Varejo |  |
| `COM-000EXPDV21` | — |  |
| `COM-000EXPDV22` | Gestão Empresarial \| ERP Varejo | Ativar a geração de log detalhado da exportação de produtos na integração ERP Varejo. |
| `COM-000EXPDV24` | Gestão Empresarial \| ERP Varejo | Ao ativar deste identificador, o sistema passará a restringir a quantidade de casas decimais pela menor quantidade de casas. |
| `COM-000EXPDV25` | Entrada de Pedidos Simplificada(DAV) | Enviar o tipo de registro 8 com o valor 2 (2 = Solicitação de Impressão de DAV). Assim possibilitando utilizar o parâmetro (Impressão de ... |
| `COM-000EXPDV26` | Gestão Empresarial \| ERP Varejo | Altera a exportação de produtos. |
| `COM-000GR0BS01` | F140PRE | Possibilitar que durante a geração de nota de transferência a nota fiscal de entrada gerada herde a observação dos dados gerais da nota f... |
| `COM-000MALOT01` | — | Testar na nota de entrada se existe subdivisão de lotes do fabricante, se existir, a última máscara do lote deverá ser livre e só aceitar... |
| `COM-000MODDG01` | — | Permitir a alteração da sequência de digitação dos dados gerais de um pedido, desde que em situação "9". A sequência é dada por número do... |
| `COM-000NATUF01` | — | Ao utilizar esse identificador, não será feita a consistência da natureza de operação com o estado do fornecedor ou cliente. |
| `COM-000SEQOR01` | Geração de Pedidos | Em empresas com grande volume de processamento na geração de ordens de compra e pedidos é inevitável que o tratamento multiusuário efetue... |
| `COM-000SIGUF01` | pedidos (F120GPD), notas (F140LOT e F140PRE) e F661I10. | sugerir/alterar a UF do documento (nota fiscal de saída e pedido) para atender regras de tributação de acordo com o indicativo de venda p... |
| `COM-000VEPCF01` | — | Esse identificador tem por finalidade permitir inativar ou restringir a execução ou não da pré-validação de quantidades de estoque e de p... |
| `COM-000VLRDS00` | — | Alterar o valor de desconto sem alterar o percentual, sendo que por padrão quando não alterado via regra, este é sempre zerado. |
| `COM-000VLRET01` | F140GNF, F140PRE, F440GNE, F140LOT e F161GPD. | Quando ativo, o valor das retenções será considerado apenas no valor financeiro das notas fiscais de entrada e saída, de acordo com a par... |
| `COM-022MASCF01` | F022CLF | Permite a manipulação do conteúdo do campo "código de classificação fiscal" da tela F022CLF via regra. O retorno da regra não pode excede... |
| `COM-061CNEXP01` | — | Permite consistir via regra a exclusão da exclusão da área de interesse, na tela Tabelas\Comercial\Área de Interesse. Na regra, podem ser... |
| `COM-081FCECN01` | F081GTF | Realizar consistências na inclusão/alteração dos registros da tabela E081FCE. Será chamado após um registro ser gravado. O identificador ... |
| `COM-081FDICN01` | F081GTF |  |
| `COM-081FPECN01` | F081GTF | Realizar consistências na inclusão/alteração dos registros da tabela E081FPE. |
| `COM-081FVLCN01` | F081GTF | Realizar consistências na inclusão/alteração dos registros da tabela E081FVL. |
| `COM-081FVOCN01` | F081GTF | Realizar consistências na inclusão/alteração dos registros da tabela E081FVO. |
| `COM-081TFRCN01` | F081GTF |  |
| `COM-081TPFRE01` | F081GTF | Informar valor zero para os campos "% Frete" e "Vlr.Frete". Sem este identificador será necessário que um dos campos acima tenha valor di... |
| `COM-081VFRCN01` | F081GTF | Realizar consistências na inclusão e alteração dos registros da tabela E081VFR. |
| `COM-113TAXAS01` | Taxas. | alterar o valor de taxa calculado de um item de OC/NFC. Ele é chamado toda vez que um item de taxa é calculado/recalculado. |
| `COM-113TAXAS02` | F439FIX | Esse identificador será chamado no Cálculo de taxa na tela de Fixação (F439FIX). Sua finalidade é permitir informar consistências no proc... |
| `COM-115CODTR01` | F115COS e F115CAR. | este identificador, quando ativo, tem a funcionalidade de manter o campo Transportadora, das telas F115COS e F115CAR, ativado para altera... |
| `COM-115COERE00` | F115COE | Este identificador tem como finalidade permitir usar as variáveis disponíveis na tela F115COE para consistência via ponto de regra. |
| `COM-115COSRE00` | F115COS | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `COM-115CSTRE00` | F115CST |  |
| `COM-115PLAVE01` | F115CST, F115COS e F115CAR. |  |
| `COM-115PLAVE02` | F115NPF. | Este identificador de regra tem como finalidade sugerir a placa do veículo na tela Notas Fiscais de Saída via Balança (Expedição via Carg... |
| `COM-135ALCMP01` | F135MCA | Realizar tratamentos nos componentes de produto KIT na tela F135MCA, sendo eles: |
| `COM-135CGFCA01` | F135FCA, F135FCP, F135FCR, F135MCA, F135FEA e F135FEC | Realizar consistências tanto na formação quanto no fechamento das cargas. |
| `COM-135CGFCA02` | F135FCP | realizar consistências na formação e fechamento de cargas. |
| `COM-135CGPED01` | F135FCP | Desabilitar o campo "Carga dos Pedidos" da tela F135FCP, fixando a opção "Mostrar só com estoque" como a padrão, não permitindo que seja ... |
| `COM-135CRIFE01` | F135FCA, F135FCP | Definir se o usuário poderá ou não alterar o campo "Crit.Disp.p/fat" nas telas de formação de cargas. A regra deverá retornar para a roti... |
| `COM-135EXCIT01` | F135MCA | Selecionar os itens da grade da tela de manutenção e fechamento de cargas (tela F135MCA) para exclusão dos mesmos da carga. Para a regra ... |
| `COM-135IPCAE01` | — |  |
| `COM-135LOGER01` | F135FCP ou processo automático 145 - Geração de Pré-Fatura | Este Identificador permite que o usuário consiga externalizar por meio de comandos LSP um erro que ocorrer durante a criação de uma carga... |
| `COM-135LTECA01` | — |  |
| `COM-135NUMAN01` | F135APM, F135TVC. | Permite sugerir número de análise de embarque. |
| `COM-135OBUSU01` | Formação de Cargas | Informar para as rotinas de formação de cargas das telas F135FCA, F135FCP e F135IPC quais os campos deverão ser informados para os usuári... |
| `COM-135SEDEX01` | — | Definir a geração ou não do número de SEDEX na rotina de pré-fatura permitindo também alterar a transportadora da pré-fatura. |
| `COM-135SEDEX02` | — | Definir o número do SEDEX no formato que o usuário desejar. Funcionará somente quando for utilizado em conjunto com o identificador 135SE... |
| `COM-140COLCT01` | F140COL | Permitir que sejam gerados CTRCs utilizando contratos de venda (tipo "12 - Transporte de Cargas"). Necessário que o mesmo esteja ligado a... |
| `COM-140WSCTF01` | F140COL | Executar o serviço web para geração da carta de frete logo após o fechamento da nota fiscal do CTRC. |
| `COM-170DTCCA01` | F170COL | Informar data para carregar inferior a data atual na contratação da coleta. |
| `COM-170VLFRE01` | — | Alterar o valor do frete na tela de contratação de transporte, pedido ou nota fiscal. Chamado ao passar pelo campo Tabela de Preço de Fre... |
| `COM-172SENAT01` | F172MAN | Definir o percentual de SEST/SENAT na geração de manifesto de carga. |
| `COM-173CTFAD01` | F173CTF | Determina que o adiantamento da carta frete deve gerar os títulos para a transportadora. |
| `COM-435CCCRE00` | F435CCC | Usar variáveis disponíveis na tela - Suprimentos > Gestão de Recebimento > Entrada via Balança > Via Contrato com Classificação (F435CCC)... |
| `COM-435CCCRE01` | F435CCC | Adicionar na tela de entrada, campos que não constam na grade de contrato, como por exemplo os campos de usuário. |
| `COM-435CSTRE00` | F435CST | Consistir os campos da tela, via regra, no momento do processamento. |
| `COM-435MDTRE00` | F435MDT | Este identificador tem como finalidade permitir usar as variáveis disponíveis na tela F435MDT para consistência via ponto de regra. |
| `COM-439FIXCP01` | F439FIX | Este identificador tem a finalidade de retornar uma transação via regra que será usada no momento de baixar um título do contas a pagar n... |
| `COM-439FIXCR01` | F439FIX | Este identificador tem a finalidade de retornar uma transação via regra que será usada no momento de baixar um título do contas a receber... |
| `COM-439FIXPB01` | F439FIX,F439EXT | Alterar o valor padrão que o sistema traz do "Percentual de Bonificação" no processo de fixação/extrato. |
| `COM-439FIXPP01` | F435CCC |  |
| `COM-439FIXPU01` | F439FIX,F439EXT | Alterar o valor padrão que o sistema traz do "Preço Unitário da OC" no processo de fixação/extrato, e permite manipular alguns valores, s... |
| `COM-439FIXRE00` | F439FIX | Usar variáveis disponíveis na tela - Compras - Fixação de Preços (F439FIX) para consistência via ponto de regra. |

## CPA - Contas a Pagar

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `CPA-501ACTCO01` | — | Alterar o tipo de título, o fornecedor e a transação dos títulos de COFINS que estão sendo gerados no momento. |
| `CPA-501ACTCS01` | — | Quando este identificador estiver ativo, será possível alterar o tipo de título, o fornecedor e a transação dos títulos de CSLL que estão... |
| `CPA-501ACTIN01` | — | Quando este identificador estiver ativo, será possível alterar o tipo de título, o fornecedor e a transação dos títulos de INSS que estão... |
| `CPA-501ACTIR01` | — | Quando este identificador estiver ativo, será possível alterar o tipo de título, o fornecedor e a transação dos títulos de IRRF que estão... |
| `CPA-501ACTIS01` | — | Quando este identificador estiver ativo, será possível alterar o tipo de título, o fornecedor e a transação dos títulos de ISS que estão ... |
| `CPA-501ACTOU01` | — | Quando este identificador estiver ativo, será possível alterar o tipo de título, o fornecedor e a transação dos títulos de Outras Retençõ... |
| `CPA-501ACTPI01` | — |  |
| `CPA-501APEVT01` | F650INF, F611PFC e F610PFL. | Este identificador trata da aprovação de títulos do contas a pagar, quando possuir controle de aprovação com a rotina "24 - Entrada". Vis... |
| `CPA-501APGBA01` | F501APG;F501TCP;F501MCP;F501LOT;F301BCD | Permitir informar via regra a conta bancária do fornecedor. Caso a váriavel "VSRetorno" na regra estiver igual a 1, não será permitido ap... |
| `CPA-501APGBC00` | F501APG |  |
| `CPA-501APGCG01` | F501APG | Esse identificador tem a finalidade de ativar a ordenação da grade da tela F501ATL quando essa for chamada a partir da tela F501APG (Botã... |
| `CPA-501APGIT01` | — | Este identificador tem o intuito de que quando a variável VSADITIT for setada como 0 (zero) o título não será adicionado na grade mesmo q... |
| `CPA-501ATLCL01` | F501ATL. | consistir/validar os dados da grade da tela de alteração de títulos por lote ao sair da linha. |
| `CPA-501AVPNF01` | F501AVP | Na grade "Título", mostrar o nome do fornecedor ao invés do apelido do fornecedor. |
| `CPA-501BAACT01` | F501BAA | Esse identificador tem a finalidade de dar a liberdade para o usuário fazer consistências nos campos disponibilizados na grade de títulos... |
| `CPA-501BAARE01` | F301BAA, F301EBL. | Com este identificador ativo o sistema permite a retenção do impostos nas baixas por aproveitamento. |
| `CPA-501BABCO01` | — |  |
| `CPA-501BAIFE01` | — | através deste identificador de regras, será possível retornar ao sistema o valor da cotação da moeda e o valor base de IRRF a ser conside... |
| `CPA-501BARRA01` | — | Quando o identificador estiver ativo, será visualizado o botão Leitor que chamará uma tela (F501LEI), onde será permitido ler o código de... |
| `CPA-501BCDDF01` | F501BCD | Com este identificador cadastrado e ativo os campos descrição do ramo, descrição do grupo e descrição da rota serão apresentados ao lado ... |
| `CPA-501BCDGT01` | F501BCD. | chamar a regra para cada título que ainda tem um saldo restante após processar a tela Baixa por Compensações Diversas (F501BCD). Isso a f... |
| `CPA-501BCDNL01` | F501BCD | Manter os filtros informados na tela de seleção e cabeçalho após o processamento ou ao cancelar. Somente após sair da tela e entrar novam... |
| `CPA-501BCDPR01` | Baixa por Compensações Diversas (F501BCD). | chamar a regra para cada título que ainda tem saldo restante a ser baixado, onde será possível prorrogar o vencimento. Se o identificador... |
| `CPA-501BCOCF01` | F501BCO | Permite fazer o relacionamento automático de Cliente x Fornecedor na rotina de baixa por compensação do contas a Pagar (F501BCO), para op... |
| `CPA-501BCOLE01` | F501BCO | Se existir este identificador de regra e o mesmo estiver ativo, será apresentado na tela de baixas por compensações(Financeiro > C.Pagar ... |
| `CPA-501BCOPI01` | Baixa por Compensações do Contas a Pagar (F501BCO) | Deixar visível e calcular todos impostos previstos a pagar na baixa por compensação. |
| `CPA-501BCOTO01` | F501BCO | Disponibilizar como variáveis para a regra os totalizadores da tela F501BCO, executada ao processar. |
| `CPA-501BCOVL01` | F501BCO. | Permite personalizar o cálculo dos valores do título e do valor do impostos previstos do título. |
| `CPA-501BLMIT01` | F501BLM_FPCP | Com este identificador cadastrado e ativo, quando a variável CpaNAdiTit for atribuído o valor como 0 (zero), o título não será adicionado... |
| `CPA-501CASQL01` | F301IAV. | permitir a alteração do SQL padrão do cálculo do AVP. Ver Norma IFRS-16. |
| `CPA-501CONBA01` | — | Quando ativo, este identificador é acionado pelas telas de baixa de títulos e pela tela Entradas de Preparação\Movimento de Caixa e Banco... |
| `CPA-501CONTA01` | — | verifica a contabilização da entrada do título, quando o título é liquidado, e notifica que o título já está contabilizado ou liquidado. ... |
| `CPA-501COSAP01` | — | Caso este identificador estiver cadastrado, o filtro nas telas de baixa do Contas a Pagar, no campo forma de pagamento da tela, filtrará ... |
| `CPA-501CPAFE01` | — | Quando existir este identificador e o mesmo estiver ativo, será permitido trabalhar com multiempresa nas telas F502CCP (Financeiro > C.Pa... |
| `CPA-501CPEVP01` | F501CPE | Com este identificador cadastrado e ativo, o período de vencimento informado no filtro dos títulos efetivos (grid "Títulos Efetivos") lev... |
| `CPA-501CTSIG01` | — | Este identificador de regras tem por objetivo inverter a ordem de apresentação dos grids na tela de consulta de títulos substituídos do c... |
| `CPA-501CTTIT01` | F460CTR. | permitir alterar os dados dos títulos do contrato antes que o mesmo seja inserido na base de dados. Ver Norma IFRS-16. |
| `CPA-501ECBCO01` | — | Quando existir este identificador e o mesmo estiver ativo, serão apresentados somente os campos Filial, Cliente, Título, Tipo de Título, ... |
| `CPA-501EFNBA01` | — | Este identificador de regras tem por objetivo ao invés de baixar os títulos de adiantamento previstos do C.Pagar na tela "Financeiro > C.... |
| `CPA-501EMAIL01` | — | com o identificador ativo, o sistema envia um e-mail para os usuários responsáveis pela aprovação do título. |
| `CPA-501ENTAS01` | — | Este identificador de regras tem por objetivo que todos os títulos gerados a partir de uma nota fiscal de entrada tenham sua situação ger... |
| `CPA-501EXMOV01` | Todos os locais onde ocorre Exclusão de Movimentos do CPA. |  |
| `CPA-501GIRFN01` | — | Este identificador de regra tem por objetivo calcular e se necessário gerar títulos de IRRF para fornecedores pessoa física independente ... |
| `CPA-501GOETP01` | — | O objetivo deste identificador é fazer com que seja gerada uma observação no fornecedor na exclusão dos títulos previstos conforme já faz... |
| `CPA-501GRAVP01` | F301IAV. | permitir alterar o cálculo do AVP antes que o mesmo seja inserido na base de dados. Ver Norma IFRS-16. |
| `CPA-501GRULT01` | F501TCP NUMERO DO TITULO | Se existir, este identificador servirá para definir a geração da numeração de títulos e créditos na tela de Títulos/Manutenção do contas ... |
| `CPA-501GTCPN01` | — | Em Financeiro\Contas a Pagar\Geração de Títulos via Contrato, foi disponibilizado este identificador com o objetivo de habilitar o campo ... |
| `CPA-501GTPRP01` | 501gtp | Com este identificador habilitado é possível usar o mesmo rateio para todas as linhas da grade na tela de duplicação de títulos do contas... |
| `CPA-501HABOA01` | — | Este identificador serve para deixar sempre habilitado o campo Outros Acréscimos, possibilitando a alteração independente do usuário poss... |
| `CPA-501HERIB01` | — | O objetivo deste identificador é fazer com que na importação de baixas de títulos do Contas a Pagar, o rateio seja herdado da entrada do ... |
| `CPA-501IMPCC01` | Ctas. a Pagar/Baixas. | considerar os valores movimentados por aproveitamento de crédito no valor base do cálculo de impostos em baixas por pagamento. |
| `CPA-501IMPVC01` | Geração Títulos de Imposto | Com este identificador ativo, é possível alterar o vencimento dos títulos de impostos gerados através da regra cadastrada no momento da g... |
| `CPA-501INTHI01` | — | Este identificador tem a finalidade de alterar o forma como as informações do Banco, Agência e Conta Corrente são buscadas dentro do Gest... |
| `CPA-501INVCR01` | — | Permitir o cálculo manualmente via regra dos valores na baixa do título do C.Pagar, passando para o usuário eventuais particularidades no... |
| `CPA-501IRNDS01` | — | Quando este identificador estiver cadastro, com situação ativa, será descontado o valor de R$100,00 da base do imposto de renda pessoa fí... |
| `CPA-501ITPCP01` | Notas Fiscais de Entrada + Títulos Previstos | Este identificador tem a finalidade de quando o sistema estiver com o parâmetro global IndTitPre setado 'S', buscar títulos previstos par... |
| `CPA-501ITPCP02` | Notas Fiscais de Entrada + Títulos Previstos | Quando este identificador estiver cadastrado e ativo, e for utilizado em conjunto com o parâmetro global "IndTitPre", no momento da criaç... |
| `CPA-501LAPSU01` | — | Quando este identificador de regras está ativo durante a baixa de títulos por substituição, os títulos gerados já estarão aprovados, evit... |
| `CPA-501LEITO01` | — | Caso esse identificador exista e estiver ativo, na tela de leitura do código de barras do C.Pagar (F501LEI) será chamado a regra associad... |
| `CPA-501LEIUT01` | — | Este identificador tem a finalidade de ao estar ativo, determinar que a leitura do código de barras será digitado. Fazendo com que não ap... |
| `CPA-501LOTGE01` | F501LOT | Abrir a tela Geração de Movimentos e Emissão de Cheques e Avisos permitindo o processamento e emissão dos cheques ou avisos, após o proce... |
| `CPA-501LOTIT01` | F501LOT_FPCP | Com este identificador cadastrado e ativo, quando a variável CpaNAdiTit for atribuído o valor como 0 (zero), o título não será adicionado... |
| `CPA-501LOTOR01` | — | Com esse identificador ativo e com regra cadastrada é possível alterar a ordenação padrão da tela F501LOT ao clicar em mostrar. |
| `CPA-501MCPBC01` | — | Através de regra é possível liberar/Bloquear os campos dos valores das baixas das telas do financeiro. Esses campos correspondem aos camp... |
| `CPA-501MCPEM01` | Exclusão de Movimentos do Contas a Pagar (F501EBL). | o objetivo desse identificador de regra é impedir que o usuário exclua apenas uma movimentação de baixa de título (opção "Movto. Atual" d... |
| `CPA-501MODPA01` | F501LOT | Quando se usa controle aprovação, com este identificador é possível através de regra definir a modalidade padrão. Isto é possível aliment... |
| `CPA-501MPNNF01` | F501MPN | Este identificador tem a finalidade de fazer com que ao estar ativo o cliente informe a Nota fiscal antes de informar a série. Sendo assi... |
| `CPA-501NCDEP01` | — | Não consistir a data de um título previsto com o período da filial em sua exclusão ou na geração de novos títulos previstos. |
| `CPA-501NCDEP02` | — | Não consistir a data de um título com o período da filial em sua exclusão ou na geração de novos títulos. |
| `CPA-501PENIT01` | F501PEN | Com este identificador cadastrado e ativo, quando a variável CpaNAdiTit for atribuído o valor como 0 (zero), o título não será adicionado... |
| `CPA-501QTUPG01` | APROVAÇÃO DE PAGAMENTOS 501APG | Com este identificador ativo é possível através de regra definir o número de pagamentos que serão mostrados na consulta apresentada ao pr... |
| `CPA-501RAMOV01` | — | Este identificador tem como finalidade se cadastrado, nas rotinas de baixas do C. Pagar a data base do rateio não ser mais a data do paga... |
| `CPA-501RATDU01` | F501TCP | Ao duplicar um título do contas a pagar, o título duplicado irá herdar o rateio do título origem. |
| `CPA-501SRVTP01` | Serviço Geração de Título Contas à Pagar | Tem como finalidade, permitir alteração de todos os campos do serviço "Gestão Empresarial \| ERP - Financeiro - Contas a pagar - Geração d... |
| `CPA-501SUBBD01` | — | O objetivo deste identificador quando estiver ativo é de bloquear a alteração das datas de entrada e de emissão, na criação de um título ... |
| `CPA-501SUBDF01` | WebService - com.senior.g5.co.mfi.cpa.substituir | Esse identificador tem a finalidade de não verificar se o título que está sendo baixado possui valor de desconto, valor de multa e valor ... |
| `CPA-501SUBDM01` | — | Com este identificador de regras cadastrado e ativo, ao efetuar a baixa por substituição de um título de ADIANTAMENTO PREVISTO, serão alt... |
| `CPA-501SUBGR01` | F501SUB | Permite a geração de impostos em baixas por substituição do contas a pagar. Esta funcionalidade pode ser utilizada quando se necessita co... |
| `CPA-501SUBLE01` | 501sub -baixa por substituição | Este identificador habilita na tela de baixa por substituição o botão Leitor para realizar a leitura de códigos de barras e atribuí-los a... |
| `CPA-501SUBMO01` | F501SUB |  |
| `CPA-501SUBOS01` | — | Este identificador serve para concatenar os campos, empresa, filial, número do título e tipo do título na observação. |
| `CPA-501SUBSC01` | WebService - com.senior.g5.co.mfi.cpa.substituir / com.senior.g5.co.mfi.cpa.titulos.EntradaTitulosLoteCP | Esse identificador tem a finalidade de sugerir alguns campos na geração dos títulos substitutos e na geração de títulos manuais quando os... |
| `CPA-501SUBTD01` | WebService - com.senior.g5.co.mfi.cpa.substituir | Esse identificador tem a finalidade de não verificar se a data de pagamento é menor que a data de entrada do título que está sendo baixado. |
| `CPA-501SUBUP01` | F501SUB | Com esse identificador ativo, será possível listar títulos de adiantamentos previstos na grade 'Títulos a Baixar' da tela F501SUB. |
| `CPA-501SUBVP01` | Todas que possuem a mensagem "Título não está em portador empresa" | Esse identificador tem a finalidade de não verificar se o título que está sendo baixado está com o mesmo portador da empresa. |
| `CPA-501SUCGS01` | — | Este identificador de regras tem por objetivo permitir ao usuário acessar o valor de todos os campos da grade de títulos substitutos, na ... |
| `CPA-501SUCGT01` | — | Este identificador de regras tem por objetivo permitir ao usuário acessar o valor de todos os campos do grade de títulos, na tela de baix... |
| `CPA-501SUVCT01` | — | Este identificador de regras tem por objetivo fazer com que o vencimento original do título assuma o vencimento prorrogado na tela F501SU... |
| `CPA-501TCPAP01` | — | Se existir este identificador de regra e o mesmo estiver ativo o sistema não deixará excluir o título se o mesmo estiver aprovado. |
| `CPA-501TCPDL01` | F501TCP |  |
| `CPA-501TCPEA01` | — | este identificador de regras permite aprovar um título (rotina controle de aprovação) via regra no momento de sua criação (somente entrad... |
| `CPA-501TCPEC01` | F501TCP | Com o Identificador cadastrado e ativo, ao executar a ação SID.Tcp.ExcluirTitulo não irá ocorrer o questionamento "Título gerado no pagam... |
| `CPA-501TCPUS01` | F501ATL ou F501TCP. | Se o título foi gerado com a situação "AS - Aberto Suspenso" ou teve a sua situação alterada para essa situação e não houver controle de ... |
| `CPA-501VCTDE01` | Contas a Pagar | Se o sistema estiver habilitado e ativo, independentemente de estar ou não ligado a uma regra, ele irá consistir se o vencimento original... |
| `CPA-501VCTPR01` | C.Pagar - Títulos/Manutenção | Com este identificador ativo é permitido alterar o vencimento prorrogado para uma data menor que o vencimento original nas seguintes telas: |
| `CPA-501VDCVP01` | F501Vdc - Mostrar/Leitor | Quando este identificador está ativo usa o vencimento prorrogado na consulta, caso inativo considera o vencimento original. |
| `CPA-502CCPBM01` | F502CCP | Usar variáveis disponíveis na tela F502CCP (C. Pagar/Consultas/Títulos) para consistência via ponto de regra. |
| `CPA-502CTIREL` | F502CTI | Na tela F502CTI apresentar a tela de entrada de relatório ao clicar no botão "imprimir". Para que isso aconteça é preciso vincular uma re... |
| `CPA-502MPRNT01` | — | Quando existir este identificador, será mostrado o botão Imprimir na tela Conciliação de Saldos (F502FSF) e chamará o relatório do cliente. |
| `CPA-504CAPAI01` | F504CAP | Identificador de regras chamado após a inclusão de um registro na F504CAP. |
| `CPA-504RCPEM01` | — | Este identificador de regras tem por objetivo habilitar o envio de e-mail ao representante quando a geração de preparação de cheque ou tí... |
| `CPA-504RCPOC01` | F504RCP, F504RAC | Este identificador de regras tem por objetivo possibilitar ao cliente informar o endereço de origem da mercadoria na ordem de compra gera... |
| `CPA-504REPDE01` | — | Caso exista o identificador, será feita uma consistência na tela de comissões (504CAP) para saber se o representante do qual quer informa... |
| `CPA-510ARQLC01` | PagamentoEletronico-Remessa | Com este identificador ativo será possível gerar o arquivo de remessa do pagamento eletrônico na máquina cliente após o processamento do ... |
| `CPA-510ARQLC02` | retorno do pagamento eletronico / débito direto autorizado | Com este identificador ativo é possível usar arquivos locais como retorno do pagamento eletrônico e débito direto autorizado quando utili... |
| `CPA-510DDAAT01` | — |  |
| `CPA-510DDANG01` | F510DDA | Este identificador tem por finalidade, mostrar na grade de "Retorno - com erro" o título que é inexistente tendo a observação: "Título in... |
| `CPA-510DDAOB01` | F510DDA |  |
| `CPA-510DDAPF01` | F510DDA - Débito Direto Autorizado | Quando este identificador estiver cadastrado e ativo, será utilizado o primeiro fornecedor encontrado na busca pela raiz do CNPJ quando m... |
| `CPA-510DDATI01` | Débito Direto Autorizado por Série (F510DDA). | Se este identificador estiver ativo, sempre que o registro de título de retorno de DDA tiver o valor ou o vencimento diferentes do título... |
| `CPA-510DDATI02` | F510DDA | Se este identificador estiver ativo, sempre que o registro de título de retorno de DDA tiver o valor ou o vencimento diferentes do título... |
| `CPA-510GEPRP01` | — | gerar as Preparações da Tesouraria já processadas no Retorno do Pagamento Eletrônico (F510PRT), gerando movimentos na Tesouraria. |
| `CPA-510HABOP01` | — | Habilitar o botão Processar na tela F510PRT, caso ocorra erro em todos os títulos (grade Retorno - Com Erros). Desta forma, todos os títu... |
| `CPA-510PPROG01` | F510PPR | Informar qual será o critério de ordenação a ser considerado ao clicar no botão Mostrar da tela F510PPR, bem como a ordem em que os regis... |
| `CPA-510PPRTP01` | F510PPR | Este identificador de regras tem por objetivo permitir ao usuário acessar o valor de todos os campos do grade de títulos, na tela de prep... |
| `CPA-510PRMAR01` | Financeiro/Contas a pagar/Pagamento eletrônico/Remessa. | permitir a inclusão de um arquivo padrão na remessa de pagamento eletrônico. Sempre que for informado um portador na tela a regra será ex... |
| `CPA-510PRMDC01` | F510PRM |  |
| `CPA-510PRMLU01` | — | Dar liberdade para o usuário fazer consistências nos campos disponibilizados na grade de títulos. |
| `CPA-510PRMOR01` | F510PRM | Com este identificador ativo, o arquivo de remessa será gerado com os títulos ordenados conforme a tela de remessa, e não pelo valor dos ... |
| `CPA-510PRMOR02` | F510PRM |  |
| `CPA-510PRMQS01` | F510PRM | Este identificador de regras tem como finalidade, permitir a intervenção do usuário na quebra do cabeçalho dos segmentos "O" (registro 8 ... |
| `CPA-510PRMRE01` | F510PRM | Com esse identificador ativo e aprovação multi-nível na rotina 28(Contas a Pagar - Pagamento Eletrônico) também ativa. |
| `CPA-510PRMSP01` | F510PRM; F510PPR | Trazer marcado como padrão no botão "Seleção", a opção "Sugerir Tipos de Pagto". |
| `CPA-510PRMTP01` | F510PRM |  |
| `CPA-510PRMTP02` | F510PRM_FPPE |  |
| `CPA-510PRMTP03` | F510PPR e F510PRM |  |
| `CPA-510PRMTR01` | F510PRM | Quando ativo, verifica se título tem código de barras relacionado com banco. Em caso afirmativo alertará se título estiver erroneamente d... |
| `CPA-510PRTMU01` | — | Quando estiver ativo, será realizado o controle de multiusuário no processamento do arquivo de retorno do pagamento eletrônico. Essa cons... |
| `CPA-510PRTRR01` | Pagamento eletrônico - Retorno |  |

## CPR - Compras

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `CPR-000ALCOI01` | Cálculos de Impostos | Identificadores de regra disponíveis |
| `CPR-000ALICD01` | F440GNE. | Este identificador permite a alteração do valor de ICMS desonerado bem como o motivo da desoneração ao calcular o item de produto da nota... |
| `CPR-000ALICM01` | NFE/OC | Informar o percentual de ICMS, o valor de ICMS e o valor base de ICMS para cada item, através de uma regra e de acordo com as variáveis d... |
| `CPR-000ALIIM01` | Cálculos de Impostos | Permitir, via regra, que ao dar entrada em uma nota fiscal de entrada ou ordem de compra sejam alterados o percentual, valor e base do im... |
| `CPR-000ALPII01` | Cálculos de Impostos | Alterar o valor e base do PIS a recuperar na importação. |
| `CPR-000ALTPR01` | F420OSC, F410CEA | Sugerir tabela de preços nas telas F410CEA e F420OSC. Em ambos os casos a regra é executada com os dados já sugeridos pela rotina normal ... |
| `CPR-000BUDEP01` | — | Personalizar a forma de busca do depósito nas ordens de compra e notas fiscais de entrada. |
| `CPR-000BUDEP02` | — | Busca o depósito padrão na tabela de transação, a ser sugerido nas rotinas de Suprimentos/Compras. |
| `CPR-000CODSE01` | — | executado após a busca de Código de Serviço, permitindo ao usuário uma sugestão diferente da executada pelo ERP. Para mais informações, c... |
| `CPR-000CONIT01` | — | Consistir as informações de um item de produto ou serviço de uma ordem de compra ou nota fiscal de entrada permitindo bloquear a gravação... |
| `CPR-000CONIT02` | — | Consistir as informações de um item de produto ou serviço de uma ordem de compra ou nota fiscal de entrada permitindo bloquear a gravação... |
| `CPR-000CONIT03` | — | Consistir as informações de um item de produto ou serviço de uma ordem de compra ou nota fiscal de entrada, permitindo bloquear a gravaçã... |
| `CPR-000CONRE01` | — |  |
| `CPR-000CONVR01` | Recebimento eletrônico (F000INE, Processo Agendado 67 e webservice com.senior.g5.co.mcm.cpr.recebimentoeletronico, porta Processar) | Permitir ao usuário decidir se deseja exibir as diferenças entre os valores calculados e os valores recebidos no XML, deixando a situação... |
| `CPR-000CPLGE01` | F403LFP e F403FPR. | Personalizar os complementos e descrições dos produtos. |
| `CPR-000DFASR01` | Recebimento eletrônico (F000INE, Processo Agendado 67 e webservice com.senior.g5.co.mcm.cpr.recebimentoeletronico, porta Processar) | Alterar a base do ICMS utilizada no cálculo do diferencial de alíquota, quando processada a nota via recebimento eletrônico e informada a... |
| `CPR-000ECICM01` | NFE. | Informar o percentual de ICMS, valor de ICMS e valor base de ICMS creditado efetivamente para cada item. |
| `CPR-000ECIPI01` | NFE. | alterar o percentual, o valor e a base de IPI creditado efetivamente ao calculá-lo. |
| `CPR-000EXFTP01` | — | Por padrão, ao buscar a nota fiscal de origem, o sistema verifica primeiro se a nota referenciada é uma nota de entrada. Caso não encontr... |
| `CPR-000IEDLS01` | F000INE | Disponibilizar todos os campos da tabela E440DLS para alteração, exceto os valores que foram carregados do XML. |
| `CPR-000IEEXF01` | F000INE | Disponibilizar todos os campos da tabela E440EXF para alteração, exceto os valores que foram carregados do XML. |
| `CPR-000IEIPC01` | F000INE | Disponibilizar todos os campos da tabela E440IPC para alteração, exceto os valores que foram carregados do XML. |
| `CPR-000IEISC01` | F000INE |  |
| `CPR-000IENFC01` | F000INE | Disponibilizar todos os campos da tabela E440NFC para alteração, exceto os valores que foram carregados do XML. |
| `CPR-000IEPAR01` | F000INE | Disponibilizar todos os campos da tabela E440PAR para alteração, exceto os campos: 'VctPar','CodPar','NumNfc','UsuGer','DatGer', 'HorGer'... |
| `CPR-000IEPCD01` | F000INE | Disponibilizar todos os campos da tabela E440PCD para alteração, exceto os valores que foram carregados do XML. |
| `CPR-000INECM01` | — | retornar ao sistema quais as tags do .XML que serão disponibilizadas para consulta de seus valores originais, durante a execução do ident... |
| `CPR-000INECM02` | — | disponibilizar ao usuário as tabelas intermediárias de nota fiscal de entrada para consulta/alteração, antes da gravação de seus registro... |
| `CPR-000INECM03` | — |  |
| `CPR-000INECM11` | — | retornar ao sistema quais tags do .XML serão disponibilizadas para consulta de seus valores originais. Os valores das tags apontadas esta... |
| `CPR-000INECM12` | — | permitir acesso às informações do .XML do documento eletrônico, disponibilizando as tags do .XML com seus valores originais, informadas n... |
| `CPR-000INECM30` | — |  |
| `CPR-000INECN01` | F000INE | Informar, via regra, campos que não devem ser consistidos e campos que devem ser herdados do .XML, na entrada de documentos eletrônicos. |
| `CPR-000INECT01` | — |  |
| `CPR-000INENI01` | F000INE | Desconsidera a importação de itens de imposto da Reforma Tributaria com valor zerado durante o processamento do XML no F000INE. |
| `CPR-000INESL01` | F000INE. | Marcar/desmarcar e habilitar/desabilitar opções na tela F000INE e do botão Seleção. |
| `CPR-000INESL02` | F000INE. | Habilitar/desabilitar configurações do botão Seleção na tela Via Recebimento de Documento Eletrônico (F000INE). |
| `CPR-000INESR01` | — | permitir que um produto de uma nota de remessa para industrialização seja recebido como serviço. |
| `CPR-000MSGRE01` | Ordem de Compra / N.Fiscal de Entrada | Impedir que o sistema emita a mensagem de alerta aos usuários no momento da troca de transação nos itens da ordem de compra (produto e se... |
| `CPR-000MTNEL01` | — | disponibilizar um ponto de regra para definir quais valores das tabelas intermediárias de produtos (E000IPC/E000PCD) e de Serviços (E000I... |
| `CPR-000NFEAD01` | U000Rot | Inicializar o parâmetro E099USU.CPRAPD (indicativo se o usuário pode aprovar entrada de NF entrada com diferença) como "N" (não). |
| `CPR-000NOTFO01` | Comercial | No momento da validação da nota de fornecimento tanto para produtos como para serviços será possível utilizar outra nota de fornecimento ... |
| `CPR-000NUMNF01` | Não se aplica. Importações de Notas Fiscais de Entrada. | Quando ativo, permite que na importação de uma NFe do tipo 3 (Devolução NF Saída) , 6 (NF Produtor), 7 (NF Geração Manual) ou 10 (NF Acer... |
| `CPR-000OBSTP01` | Nota fiscal de saida, entrada e ordem de compra | Manipular a observação do título a ser gerado pelo comercial para o contas a pagar (E501TCP.OBSTCP), no fechamento de notas fiscais de sa... |
| `CPR-000PERDS01` | — | Informar o percentual de desconto para cada item, na entrada de notas fiscais, a partir de uma regra e de acordo com as variáveis disponi... |
| `CPR-000REDUC01` | OC e NFC | Soma o valor de Frete antes de calcular a redução de ICMS. |
| `CPR-000REDUC02` | — | Somar o valor de outras despesas ao valor base do ICMS antes da redução de ICMS. |
| `CPR-000RTFIS01` | — | Permite a criação de regra para armazenar os erros, quando ocorrer alguma situação ao integrar a fatura do FIS para o ERP. Os dados envia... |
| `CPR-000SELFI01` | F000INE. | Permitir a escolha da filial no recebimento eletrônico para documentos que tenham o seguinte cenário: |
| `CPR-000SELFO01` | F000INE. | Permitir a escolha do fornecedor no recebimento eletrônico para documentos que tenham o seguinte cenário: |
| `CPR-000SEQCO01` | Geração de Cotações | Controlar internamente no banco através da funcionalidade "Sequence" a numeração automática das cotações. |
| `CPR-000SGTPR01` | F420GOC | Permitir que na geração manual de OC's, seja carregado via regra a tabela de preço para cada item na grade de "Itens de Produto |
| `CPR-000TABPR01` | Busca Tabela de Preço | Alterar o preço e percentual de desconto que são sugeridos da tabela de preço. |
| `CPR-000TABSR01` | — | Considerar os itens de serviço que possuem ligação com produto na busca da tabela de preço de itens de serviço no módulo de compras. |
| `CPR-095INFFO01` | F095INF | Aciona a regra associada ao identificador passando como parâmetros o cabeçalho da tela F095INF ao clicar no botão "Personalizar" da guia ... |
| `CPR-095TIFOR01` | — | Filtrar os todos os Fornecedores que estão cadastrados como tipo (F - Fornecedor) ou (A - Ambos), no campo CLIFOR. |
| `CPR-115CLACL01` | F435CCC, F460PFO, F115COE, F115CAR e F115COS. | o objetivo deste identificador é permitir que o percentual ou a quantidade de desconto de um item de classificação seja alterada via pont... |
| `CPR-211ADAQA01` | F211ADA | Personalizar o uso da tela F211ADA, aberta a partir do botão "Análise" da tela "Suprimentos > Gestão de Estoques > Análise de Reposição >... |
| `CPR-211ADFTS01` | — | Este identificador irá pré definir quais transações serão utilizadas no campo **Transação** para o filtro da tela F211ADF. |
| `CPR-211ADVFL01` | F211ADV | Tem esta por finalidade, fornecer variáveis para que se possa modificar a "quantidade a comprar" gerada durante o processo de "Sugestão d... |
| `CPR-250CTC000` | F250CTC |  |
| `CPR-403ATPCG01` | F403FPR / F403LFP | Ao alterar o "Produto no Fornecedor" o sistema faz automaticamente a alteração do referido campo nas tabelas de preço de compras relacion... |
| `CPR-403LIGFP01` | F075PPF / F075FAP | O objetivo é efetuar uma ligação automática para "Produto X Fornecedor" na tabela (E403FPR), sempre que for efetuada uma ligação "Produto... |
| `CPR-403LOEPF01` | Ligação Produto x Fornecedor | Quando ativo, ao incluir uma nova ligação produto x fornecedor, faz uma copia da ligação para as demais empresas da base que tenham o mes... |
| `CPR-403PRFOR01` | — | Permitir atribuir informações no campo PROFOR. Este campo está disponível na Ligação Produto X Fornecedor (Individual e Agrupado). O sist... |
| `CPR-403UFTNS01` | — | Quando ativo, remove a mensagem apresentada ao usuário para carregar os dados da ligação Produto x Fornecedor existente ao incluir uma no... |
| `CPR-405APRMS01` | F405APR | Permitir que a regra defina se determinada solicitação de compra deverá ou não ser apresentada na grade da tela F405APR [ Suprimentos > G... |
| `CPR-405CONHI01` | F410CEA | Através desse identificador de regras é possível criar consistências para |
| `CPR-405INIME01` | F405SOL | Realizar a consistência do número da solicitação (E405SOL.NUMSOL) onde o usuário pode digitar o número manualmente. Caso o número digitad... |
| `CPR-405ITCPL01` | F410CEA / F410COS / F420OSC | Tratar produtos e serviços de forma diferenciada nas telas do compras onde gera-se solicitações. O tratamento diferenciado é para solicit... |
| `CPR-405UCPRI01` | F210AME / F210ASE | Consistir e/ou atualizar os valores dos campos *Usuário Comprador* e *Prioridade de Compra* para uma solicitação de compras que estiver s... |
| `CPR-410ACOCP01` | F410APR | Fazer consistências na aprovação das cotações para compra. |
| `CPR-410AGPSC01` | F410CEA, F410COS | Permitir a cotação agrupada de solicitações sem código de produto ou serviço. |
| `CPR-410AICOT01` | F410PCT. | Alterar a descrição e especificação de itens da cotação no envio ao Cotei e possibilitar a obrigatoriedade do preenchimento da marca do i... |
| `CPR-410APRCT01` | Cotações e Apr. Multi-Nivel | Executar uma regra para decidir se a cotação pode ou não ser aprovada, levando em conta o valor da solicitação e o valor da cotação. A re... |
| `CPR-410APRCT02` | F410APR | Disponibilizar informações ao usuário após a aprovação multinível da cotação. |
| `CPR-410CDPCO01` | F410CPT. | permitir a inclusão de um filtro adicional ao SQL de busca das formas de pagamento que serão integradas ao Cotei. Quando desativado, some... |
| `CPR-410CEAEN01` | F410CEA | A finalidade deste identificador de regras é disponibilizar um ponto de regra na abertura da tela F410CEA [ Suprimentos > Gestão de Compr... |
| `CPR-410CEAPR01` | F410PCT | Executado ao clicar em Processar, antes de ser gerada a cotação, pois é nesse momento que são feitos os agrupamentos. |
| `CPR-410CMPSU01` | Cotação e OC | Habilitar funcionalidade de tratamento de componentes substitutos (equivalentes) de solicitações oriundas da produção. Ao selecionar o co... |
| `CPR-410CONIP01` | F410CEA | Consistir a inserção de itens de cotação na grade de "Cotações" da tela F410CEA - [Suprimentos > Gestão de Compras > Cotação de Preço > P... |
| `CPR-410CONLI01` | F410LIC | Efetuar consistências na inserção, alteração ou exclusão das informações da licitação. |
| `CPR-410COSEN01` | F410COS | A finalidade deste identificador de regras é disponibilizar um ponto de regra na abertura da tela F410COS [ Suprimentos > Gestão de Compr... |
| `CPR-410COTCA01` | F410CEA, F410COS | Manipular o valor presente da cotação, através de regra e das variáveis disponibilizadas. |
| `CPR-410COTPS01` | F410CEA, F410COS | Não fazer a carga e esconder a coluna "Última Cotação" da grade de solicitações de compra das telas com o objetivo é melhorar o desempenh... |
| `CPR-410CPAEN01` | F410CPA | A finalidade deste identificador de regras é disponibilizar um ponto de regra na abertura da tela F410CPA [ Suprimentos > Gestão de Compr... |
| `CPR-410CRICO01` | F410NQC. | Permite que seja criado um critério de cotação personalizado para indicar a cotação mais vantajosa na tela F410NQC. |
| `CPR-410CSAEN01` | F410CSA | A finalidade deste identificador de regras é disponibilizar um ponto de regra na abertura da tela F410CSA [ Suprimentos > Gestão de Compr... |
| `CPR-410DATPR01` | F410APR | Alterar o campo Previsão na grade de cotações. |
| `CPR-410DGCOT01` | F410CPT. | permitir a alteração da **Descrição** da cotação e do nome da empresa no envio ao Cotei. Ver Integração ERP x Cotei. |
| `CPR-410EMACT01` | — | permite enviar um e-mail no momento da Liberação da Cotação ou quando a mesma é desaprovada. |
| `CPR-410FILLO01` | F410CEA, F410COS | Sugerir a filial ativa para filtro na tela associada ao botão Seleção. |
| `CPR-410FORFL01` | F410SFP | com o identificador ligado, não serão listados no processo de cotação na seleção de fornecedores os fornecedores que forem filiais, ou se... |
| `CPR-410HISCO01` | — | Exibir o histórico de cotações ordenado pelo complemento, mostrando todos os complementos que contenham o mesmo como palavra inicial, par... |
| `CPR-410MOTAP01` | — | Abrir uma tela para cadastrar o motivo, na tabela de observações da cotação E410OBS, caso o usuário tente aprovar uma ou mais cotações di... |
| `CPR-410NOTRE01` | F410CAF | Alterar via regra o valor da nota real no cálculo efetuado. |
| `CPR-410NQCFO01` | F410NQC. | Manipular os campos de Transportadora e Contato mostrados na guia Informações do Fornecedor da tela F410NQC. |
| `CPR-410NUMPR01` | F410CEA, F410COS | Exibir apenas solicitações que possuam o campo NUMPRJ (Número do Projeto) informado. |
| `CPR-410OBRMO01` | — | Obrigar a informação do código do motivo (E410COT.CODMOT) na aprovação de qualquer cotação, independente de ser a melhor ou não. |
| `CPR-410PCTDE01` | F410PCT | Alterar o e-mail enviado para os fornecedores envolvidos na processo. |
| `CPR-410PCTEN01` | F410PCT | A finalidade deste identificador de regras é disponibilizar um ponto de regra na abertura da tela F410PCT [ Suprimentos > Gestão de Compr... |
| `CPR-410PCTPR01` | F410PCT | Executado ao clicar em Processar na tela F410PCT, permitindo informar um novo o e-mail do fornecedor para qual será direcionado o envio d... |
| `CPR-410QCPTS01` | F410QCP | Permitir filtros de transações de serviços em notas fiscais de entrada na busca do preço da última entrada quando é utilizada na tela a o... |
| `CPR-410RPFOR01` | F410CPA e F410CSA | Exibir um questionamento ao usuário informando que o dado alterado pode ser replicado para os demais fornecedores na grid, o usuário pode... |
| `CPR-410SOBPD01` | F420OPS / F420OSC | Realizar o bloqueio na geração das ordens de compra quando o bem principal das solicitações envolvidas for diferente. |
| `CPR-411AVCOT01` | F411AVC | Formatar o e-mail de aviso de cotação aos fornecedores. |
| `CPR-420ALCLF01` | F420GOC | Alterar via regra à classificação fiscal dos itens da ordem de compra. |
| `CPR-420ALCST01` | F420GOC, F422CIO, F440GNE, F440COC e F001TCP. |  |
| `CPR-420ALMOT01` | F420APR | Alterar o código do motivo e a observação do motivo na grade superior da tela F420APR onde encontram-se listadas as ordens de compra e ai... |
| `CPR-420ALTDP01` | Geração de Pedido no Fechamento da OC. | Alterar o depósito do item de pedido cuja geração se dá na rotina de fechamento da ordem de compra. Executado em um momento onde os depós... |
| `CPR-420ALTTR01` | Ordens de Compras | Alterar o codigo da transportadora automaticamente ao fechar a ordem de compra. |
| `CPR-420APRCN01` | F420APR | Permitir que via regra seja definido se o botão "Canc. OC" vai estar habilitado ou não após o clicar em mostrar. |
| `CPR-420APROC01` | F211ARA | Indicar se deve ser gerado controle de aprovação multi-nível para as ordens de compra geradas pela análise de reposição com geração de or... |
| `CPR-420APROC02` | F420APR | Permitir que a regra defina se determinada ordem de compra deverá ou não ser apresentada na grade da tela F420APR [Suprimentos > Gestão d... |
| `CPR-420APROV01` | — | Não gerar o controle de aprovação multi-nível nas telas de ordens de compra via cotação e ordens de compra manuais. |
| `CPR-420APROV02` | F420OCB e F420DOC. | O objetivo do identificador de regras é permitir que as ordens de compra geradas a partir da tela F420OCB e F420DOC sejam geradas sem o c... |
| `CPR-420BASRF01` | F420GOC | Permitir o retorno de um novo valor de base de cálculo, independentemente do valor originalmente apurado. |
| `CPR-420BUSFB01` | F420OSC | Definir valores padrões a serem atribuídos aos campos de 'Código de Fabricante' e 'Código do Produto no Fabricante' ao carregar as inform... |
| `CPR-420CNDOC01` | F420DOC | Consistir as informações de uma ordem de compra no processamento de duplicação. |
| `CPR-420CPLOC01` | F160CTR, F161FCV, F211ARO, F214ARO, F420OCP, F420PEN, F420OVC e F420GOC | Personalizar o complemento do item de ordem de compra, tanto para produtos como para servicos. |
| `CPR-420CPLOC02` | — | caso este identificador esteja cadastrado e ativo e o item possuir um complemento informado na necessidade de compra cadastrada na senior... |
| `CPR-420DATEN01` | F420OPE | Sugerir a Data de Previsão de Entrega do item da ordem de compra (E420IPO.DatEnt) através da data do item do pedido ou via regra, se o id... |
| `CPR-420DBTOC01` | Ordem de Compra | Determinar qual será a data base para geração dos títulos de previsão do financeiro no momento do fechamento de uma ordem de compra. Por ... |
| `CPR-420DTPAR01` | — | Este identificador faz com que a data base das parcelas seja a data de previsão de entrega de um dos itens da ordem de compra. |
| `CPR-420EMAOC01` | — | enviar um e-mail para o fornecedor no momento em que a ordem de compra é fechada. O identificador de regras será verificado em todas as t... |
| `CPR-420EMAOC02` | Ordens de Compra (Aprovação Multi-Nível) | Permitir alteração nas informações do e-mail enviado para notificar a aprovação multi-nível de uma ordem de compra, este será executado t... |
| `CPR-420EMAOC03` | F420OBS | Alterar, a partir da regra, o corpo e o assunto do email enviado. |
| `CPR-420EMAOC04` | F910GPR, F900RST. | Quando ativo não irá gerar o relatório SCOC050.GER para as ordens de compra de serviço que são anexadas nos e-mail aos fornecedores, faze... |
| `CPR-420EMAPE01` | — | Questionar ao usuário se deseja enviar e-mail após a geração ou alteração de uma programação de entregas. |
| `CPR-420EMOBS01` | F420OBS | Permitir inserir endereços de e-mail bem como respectivos nomes e descritivos, além dos pré-definidos no sistema. Este identificador é ex... |
| `CPR-420EXSOL01` | F420OSC | Para cada solicitação a ser listada nas grids de produtos e serviços o cliente pode definir através de uma regra se a solicitação será ou... |
| `CPR-420FOADS01` | F425FOA |  |
| `CPR-420HERAT01` | F420OSC | Herdar o rateio da solicitação de compra de origem, quando utilizar aproveitamento de saldos. |
| `CPR-420ICHPR01` | — |  |
| `CPR-420INTPO01` | Comercial | Descontinuado a partir da versão 5.5.1.4 (25/01/2008), onde foi liberada a chave completa de ligação entre "Pedido x Ordem de Compra" (an... |
| `CPR-420LIBIT01` | Ordens de compras | Liberar a inclusão de novos itens (produto e serviço) na ordem de compra mesmo ela estando fechada total ou fechada parcial (Situação 1 o... |
| `CPR-420MAIAP01` | F420APR | Possibilitar ao usuário que envie emails após a aprovação ou cancelamento de ordem de compra através da tela F420APR |
| `CPR-420MANRQ01` | F420TSO | Com o identificador ativo o sistema não irá atualizar a quantidade do cancelamento da requisição no processo de transferência (F420TSO). |
| `CPR-420MODOC01` | — | Tratar o modelo de relatório para as ordens de compra que são atachadas nos e-mail. |
| `CPR-420NRAPD01` | F420GOC | Quando este identificador estiver ativo, o rateio definido na transação do pedido é mantido caso este seja gerado através de ordem de com... |
| `CPR-420OBSEM01` | Ordem de Compra | Permitir que no envio do e-mail ao fornecedor da ordem de compra, seja gerada uma observação na ordem de compra. |
| `CPR-420OBSLI01` | F420OPS | Permitir herdar informações da licitação para as observações de uma ordem de compra quando da geração da mesma. |
| `CPR-420OBSOC01` | OC via Solicitação / OC Via Cotação | Montar uma observação para a ordem de compra a partir das observações das solicitações envolvidas, concatenado-as em uma observação só. |
| `CPR-420OCCCOT1` | — | Na carga das telas de ordens de compra via cotação de produtos e serviços, o campo "Parcelas Especiais" virá com valor 'S'. |
| `CPR-420OCCCOT2` | Ordem de compras agrupada | Na carga da tela de ordens de compra agrupada, o campo Parcelas Especiais virá com valor "S". |
| `CPR-420OCCCOT3` | Ordem de compras agrupada | Na carga da tela de ordens de compra individual, o campo Parcelas Especiais virá com valor "S". |
| `CPR-420OCCOL01` | F420GOC | Não permitir a visualização ou alteração de ordens de compra cuja procedência seja "13 - Via Coleta" |
| `CPR-420OCPAO01` | F420OCP, F420GOC, F420OSC, F420OPE, F420OPS, F420PEN, F420TSO, F160REP, F161FCV, F211ARO, F420OVC, F435CCT, F214ARO, F422CGO, F420OCC. | Disponibilizar um ponto onde possam ser feitos processamentos específicos após operações realizadas sobre uma ordem de compra (E420OCP). |
| `CPR-420OCPDG01` | F420OSP, F420OPS, F420GOC | Consistir as informações dos dados gerais de uma ordem de compra. |
| `CPR-420OCPDG02` | F420GOC, F420APR. | Consistir dados gerais da ordem de compra ao fechar. |
| `CPR-420OCPRJ01` | Aprovação Multi-nível e Projetos | Informar se deve ser verificado o orçamento de projetos a cada aprovação multi-nível, ou seja, quando o usuário tentar aprovar o sistema ... |
| `CPR-420OCSOL01` | F420OSC | Acessar a tela com o campo "Tem Parcelas Especiais" virá assinalado. |
| `CPR-420OPEAC01` | F420OPE | Herdar o complemento do item de produto de forma idêntica a realizada na inserção manual na tela F420GOC, ou seja: |
| `CPR-420OPSAT01` | F420OPS | Entrar na tela com o campo "Separar por transação" e desabilitado. |
| `CPR-420OPSAT02` | F420OPS. | manipular, via regra, a transação dos itens de produto/serviço. |
| `CPR-420OPSAT03` | F420OPS | Retornar ao sistema as transações de produto e serviço, sobrepondo as transações informadas ao processar os dados gerais. |
| `CPR-420PARCE01` | — | Permitir que as parcelas da OC sejam geradas com número de dias ou data de vencimento e se for por data de vencimento permite informar a ... |
| `CPR-420PERAL01` | F420GOC | Alterar algumas informações na ordem de compra (tela F420GOC) gerada via contrato de abastecimento (tipo 9). |
| `CPR-420PROIG01` | F420SSD | Filtrar produtos no processo de geração de ordens de compra via Solicitações x Saldo nos Depositos. |
| `CPR-420PROSC01` | F420OSC | Sugerir valores de um item de produto ou serviço de uma solicitação para geração de ordem de compra. |
| `CPR-420PRREP01` | F211ADF | Alterar preço unitário dos itens de ordens de compra gerados no processamento. |
| `CPR-420QITOC01` | F420SSD | Limitar através de regra o numero de itens de ordem de compra gerada. |
| `CPR-420QTDDM01` | Ordens de compras | Fazer com que o total das quantidades informadas na distribuições de lote nos itens da ordem de compra (Individual e Agrupada) sobreescre... |
| `CPR-420QTEST01` | F420OSC | Manipular Quantidade a Comprar na tela F420OSC (Produtos). |
| `CPR-420RATIT01` | — | Efetuar o rateio de uma ordem de compra por item tentando buscar o rateio pré-definido do tipo "C" (composto), mesmo que tenha sido infor... |
| `CPR-420RATIT02` | — | Gerar rateios por item, obedecendo a regra geral para rateios. |
| `CPR-420RECOT01` | F420OPS | Selecionar cotações que já tenham sido parcialmente processadas. |
| `CPR-420REOVC01` | F420RVC | Gerar um novo valor para o Produto utilizando as variáveis disponibilizadas. |
| `CPR-420REOVC02` | F420RVC | Gravar uma tabela de usuário totalizando as ordens de compra das transportadoras do período informado. |
| `CPR-420RESES01` | Geração de Pedido no Fechamento da OC | Gerar item de produto de pedido COM ou SEM reserva de estoque (E120IPD.RESEST) no fechamento de uma ordem de compra. |
| `CPR-420SSDCP01` | F420SSD | Consistir valores. |
| `CPR-420STAOC01` | F420OPS, F420OSC. | Sugerir o valor padrão "ANA - Análise" no campo Aprov. Multinível e desabilitar o campo, impedindo que o valor do campo seja alterado. |
| `CPR-420TITPR01` | Ordem de Compra (Fechamento) | Não consistir o período da filial quando se tratar de geração automática de títulos de previsão para ordem de compra no financeiro. |
| `CPR-420TNSOC01` | F420SSD, F211ADA | Permitir alterar via regra a transação sugerida pelo sistema na rotina de geração de Ordens de Compra do agrupamento de filiais. |
| `CPR-420TPRPE01` | Ordem de Compra | Manter a sugestão de tabela de preço do vendas na geração de pedido via fechamento de ordem de compra (definições do cliente). |
| `CPR-420VLPRO01` | — | alterar o preço unitário (VSPREUNI) e o percentual de desconto (VSPERDSC) do item de Produto quando este é inserido ou alterado em uma or... |
| `CPR-420VLRMV01` | Ordens de Compra (fechamento) | Definir um valor via regra para o movimento de estoque do item da ordem de compra (E210MVP.VLRMOV). |
| `CPR-420VLSER01` | — | Alterar o preço unitário (VSPREUNI) e o percentual de desconto (VSPERDSC) do item de Serviço quando este é inserido ou alterado em uma or... |
| `CPR-421DATPR01` | F421GSP | Informar via regra o valor do campo "Data Prevista". |
| `CPR-421FILDT01` | F421GSP. | Permitir que campos de usuário sejam informados via regra, substituindo o filtro nativo do sistema para a data de entrega no momento de f... |
| `CPR-422MTCOT01` | F422CGO | Permite que o total geral das cotações e o total das melhores cotações sejam apresentados na grade de fornecedores cotados. |
| `CPR-422NFIPS01` | F422CGO | Fazer com que a tela F441CIE quando chamada através da tela do botão "Nota Fiscal" da tela F422CGO exiba todos os itens de notas fiscais ... |
| `CPR-423OCSUP01` | F423COV | Carregar na consulta de ordens de compra por vencimento as ordens de compra suspensas. |
| `CPR-424SELOE01` | F424OCE | Trocar o padrão de "com reserva" para "sem reserva" na tela de seleção das ordens de compras entre empresas (F424SEL). |
| `CPR-425FOAOC01` | F425FOA | Controlar o carregamento de ordens de compra na tela F425FOA. Além dos filtros de tela convencionais, será possível realizar uma validaçã... |
| `CPR-426CEMVC01` | F426CEM | Efetuar uma validação personalizada dos dados informados na digitação da coleta. |
| `CPR-426CEMVC02` | F426CEM | Sugerir os valores para os campos: Data da Pesagem, Rota, Transportador, Transação de Entrada, Produto, Derivação, Depósito, Lote e Valid... |
| `CPR-426CEQPG01` | F426CEQ | Popular o cabeçalho "Dados Ordens de Compra" e as grids "Fornecedores" e "Transportadoras". |
| `CPR-426CEQVC01` | F426CEQ | Efetuar uma validação personalizada dos dados informados no cabeçalho para a geração de ordens de compra da coleta. |
| `CPR-426CEQVF01` | F426CEQ | Inicializar a quantidade teórica ou o valor unitário (preço) para geração de ordens de compra dos produtores. |
| `CPR-426CEQVR01` | F426CEQ | Inicializar o preço unitário do item da ordem de compra do tipo "R-Rota" no processamento da coleta de produtos em fornecedores. |
| `CPR-426QTDEX01` | F426CEM | Efetuar a importação da quantidade recebida real ou do peso da balança de outra fonte, um arquivo texto por exemplo. |
| `CPR-426REOVC01` | F426RVN | Permite que na tela de reajuste de ordens de compra via coleta de produtos em fornecedores possam ser gerados novos valores para os campo... |
| `CPR-426RVNAP01` | — | Faz com que o sistema não bloqueie o reajuste de uma ordem de compra na tela F426RVN - Reajuste em Coletas de Produtos quando a ordem de ... |
| `CPR-426SNCOL01` | F426CEQ | Definir o nome das colunas: "Quantidade", "Qtde Perda 1", "Qtde Perda 2", "Qtde Perda 3", "Qtde Perda 4", "Qtde Perda 5" e " Preço" da gr... |
| `CPR-426SNCOL02` | F426CEQ | Definir o nome das colunas: "Qtde Recebida", "Qtde Perda 1", "Qtde Perda 2", "Qtde Perda 3", "Qtde Perda 4", "Qtde Perda 5", "Preço" e "Q... |
| `CPR-435ALPRO01` | F435CCC. | esse identificador é responsável por disparar a pesagem de saída. |
| `CPR-435ALTDP01` | Compras - Controle de Entradas e Saídas (Expedição Manual) | Manipular os dados da pesagem de saída. |
| `CPR-435APLTX01` | F439FIX, Fechamento Nota Fiscal de Entrada (F435CCC, F440GNE), F140PRE e F115COE. | Quando o identificador estiver ativo e ligado a uma regra, é verificado através da regra se as taxas aplicadas ao item de produto devem o... |
| `CPR-435CCCML01` | F435CCC. | Manipular o código do lote gerado na nota fiscal de entrada e nos movimentos de estoques; |
| `CPR-435CLMOE01` | — |  |
| `CPR-435DOCTR01` | F435CCC | Definir a ordenação que os contratos serão exibidos na grade "Contratos" da tela F435CCC [ Suprimentos > Gestão de Recebimento > Entrada ... |
| `CPR-435DTCRN01` | F435CCC e F435MDT. | alterar dados de devolução. |
| `CPR-435DVRCI01` | F435MDT, F435CCC. | Atua no momento da geração da nota fiscal no recebimento via compra imediata, para desconsiderar o valor dos royalties no cálculo do item... |
| `CPR-435LEIBA01` | F435CCC. | Tem como finalidade a interpretação do código de barras lido no campo "Cod. Barras" da tela F435CCC. |
| `CPR-435LEIBA02` | Esse identificador tem impacto nas telas F435CCC, F435MDT, F439FIX e F115COE. | Identificador de regras para extrair o código de barras da NF de produtor. |
| `CPR-435MNTCA01` | — |  |
| `CPR-435MNTTI01` | — |  |
| `CPR-435NFCHV01` | — |  |
| `CPR-435NMCTR01` | Web service com.senior.g5.co.int.agr.pesagem, porta RegistrarEntradaViaBalancaContrato | Considerar especificamente para a pesagem o número do contrato informado nos parâmetros do web service. |
| `CPR-435ORMER01` | F435CCC. | Este identificador permite validar o seguinte, ao realizar entradas de produtos F435CCC: |
| `CPR-435PESOR01` | F435CCC. | esse identificador é responsável por retornar se as contra notas de produtor rural devem ou não ser geradas com base no peso de origem in... |
| `CPR-435PESOR02` | F435CCC. | esse identificador é utilizado para manipular o peso de origem, utilizando o valor da captura de peso da balança. |
| `CPR-435PREOC01` | F435CCT | Definir um novo preço unitário para o item de produto de ordem de compra gerada. |
| `CPR-435PRROY01` | F435CCC. | Tem como objetivo considerar o preço unitário da nota tipo 1 informada para o cálculo dos royalties. |
| `CPR-435QINPP01` | — | Considerar a quantidade informada via nota fiscal no cálculo dos campos de peso bruto informado (E115PRO.BRUINF) e quantidade informada (... |
| `CPR-435SEQOC01` | F435MDT | Atua no momento que é feita a geração das notas via manutenção de ticket. Ao selecionar dois ou mais tickets para ser gerada a nota fisca... |
| `CPR-435SNFNF01` | F435CCC | Possibilitar ao cliente que seja definido durante o processamento na tela F435CCC qual será a serie de nota utilizada. |
| `CPR-435TNSFO01` | — |  |
| `CPR-435TNSFO02` | — |  |
| `CPR-435UNMED01` | F435CCC | permite a conversão de unidades de medida do produto recebido, por exemplo, KG's (quilos) para TO's (toneladas). |
| `CPR-435VALMOE1` | — |  |
| `CPR-435VRENT01` | F435CCC | Validar os registros gerados nas estruturas da tabela Vendas/Compras - Controle de Entrada e Saída - Participantes da Pesagem (E115PAR) e... |
| `CPR-439ALTPR01` | F439FIX. | permite que o consultor possa no lugar do usuário, alterar o preço da fixação (em função das regras nativas do ERP). Com isso, o consulto... |
| `CPR-439DSCNF01` | F439FIX. | Ao informar a nota/série da nota de complemento na fixação de preços, e essa nota possuir quantidade de desconto, o sistema irá considera... |
| `CPR-439FIXAS01` | F439FIX | Possibilitar ao cliente que seja definido durante o processamento na tela F430FIX qual será a serie das notas geradas. |
| `CPR-439FIXAS02` | F439FIX | Permite que no momento de processar uma fixação seja possível alterar a série da Nota Fiscal a ser gerada. |
| `CPR-439FIXAS03` | F439FIX | Permite alterar o código da Série da nota de acerto da devolução. |
| `CPR-439FIXCS01` | F439FIX | O objetivo deste identificador é possibilitar a consistência das ordens de compra selecionadas para a fixação de preços, através da tela ... |
| `CPR-439FIXCS02` | F439FIX | permite ao consultor fazer personalizações via regra, após o término do processo de fixação de preços. |
| `CPR-439FIXDV01` | F439FIX. | Altera a data de vencimento do título de acerto gerado na Fixação de preços (F439FIX). |
| `CPR-439FIXPR01` | — | Objetivo desse identificador é disponibilizar um ponto de regra para que sejam feitos tratamentos antes do Commit da Fixação (tela F439FIX). |
| `CPR-439FIXSN01` | F439FIX,F439EXT | Este identificador tem por finalidade informar para o sistema que ele deve utilizar o campo de usuário E439FIX.USU_VLRSEN para gravar o v... |
| `CPR-439GERNF01` | F439FIX- Compras - Fixação de Preços. | Estabelecer, por meio de regra de sistema (utilizando as variáveis de sistema), o comportamento do campo Gerar notas complementares ao ac... |
| `CPR-439NCACF01` | F439FIX. | Tem como objetivo desconsiderar o valor do acréscimo financeiro do totalizador Valor a fixar no rodapé da tela de fixação de preços. |
| `CPR-439NFSCI01` | F439FIX e F439EXT. | Atuar na exibição dos registros de ordem de compra nas rotinas de extrato de produtor (F439EXT) e fixação de preços (F439FIX). Caso a ord... |
| `CPR-439PRQTD01` | Compras - Fixação de Preços (F439FIX). | Ao exibir os registros de ordem de compra para fixar de um fornecedor PJ, sugere a quantidade e preço de estoque da nota de recebimento (... |
| `CPR-439RGPRO01` | F439FIX. | Desconsidera o código do produto ao realizar o agrupamento dos itens da nota. |
| `CPR-439VLROY01` | F439FIX, F439EXT | Definir a forma de cálculo do valor do royalty para cada item de OC a fixar (F439FIX) e do extrato do produtor (F439EXT) |
| `CPR-440ADIGR01` | — | Filtrar os fornecedores que estão cadastrados em grupos de empresas. |
| `CPR-440ALCID01` | Notas Fiscais de Entrada | Manipular os valores do CIDE Tecnologia na nota de entrada para itens de produto e de serviço. |
| `CPR-440ALCLF01` | Notas fiscais de entrada | Alterar via regra à classificação fiscal dos itens das notas fiscais de entrada. |
| `CPR-440ALDFA01` | Notas Fiscais de Entrada | Alterar o valor do diferencial de alíquota nas notas fiscais de entrada. |
| `CPR-440ALDFA02` | Notas Fiscais de Entrada | Manipular o valor do diferencial de alíquota nas notas fiscais de entrada. |
| `CPR-440ALDPI01` | Nota Fiscal de Entrada (Tipo 2 e 3) | Alterar o depósito de inspeção quando tratar-se de nota fiscal de entrada de devolução, tipos 2 ou 3. |
| `CPR-440ALDSC01` | — | alterar os valores de desconto do item da nota fiscal de entrada, permitindo alterar os campos de percentual e valor de descontos (PerDsc... |
| `CPR-440ALFCI01` | F440GNE/WebService: GravarNotasFiscaisEntrada | Chamado após o calculo do FCI, será chamado em todo o recalculo de nota. |
| `CPR-440ALFIN01` | — | Alterar o valor financeiro dos itens de produto ou serviço na inclusão ou alteração na nota fiscal de Entrada. Através da variável VSProS... |
| `CPR-440ALIDV01` | F140GNF | Ao gerar uma nota fiscal de transferência via nota fiscal de saída, quando existe valor de IPI Devolvido e a transação está parametrizada... |
| `CPR-440ALIMP01` | — | Permite a alteração dos valores do Impostos Agro na Nota Fiscal de Entrada. |
| `CPR-440ALSSL01` | Nota Fiscal de Entrada Agrupada | Alterar a série e a subsérie legal da nota fiscal de entrada, mesmo a nota estando fechada, sem ter que reabrir. |
| `CPR-440ALTNR01` | Fechamento de notas fiscais de entrada | Alterar o número do título e parcela na geração de títulos no fechamento das notas fiscais de entrada. |
| `CPR-440ALTPQ01` | Notas Fiscais de Entrada | Alterar a quantidade recebida e preço unitário na nota fiscal de entrada para produtos provenientes de uma ordem de compra ou na digitaçã... |
| `CPR-440ALVLB01` | F440CIP / F440CIS | Alterar o valor bruto do item (produto ou serviço) da nota fiscal de entrada, nas telas F440CIP, associada ao botão Cálculos no item de p... |
| `CPR-440ALVPA01` | Notas Fiscais de Entrada (Parcelas) | Alterar o valor das parcelas geradas nas notas fscais de entrada. |
| `CPR-440APRAT01` | — | Efetuar a apropriação dos centros de custo na entrada de notas fiscais via ordem de compra. Esse identificador faz com que a tela de rate... |
| `CPR-440APRMN01` | F440APR | Indica se uma nota fiscal de entrada deve ser exibida ou não na rotina de Aprovações Multinível de Notas Fiscais de Entrada (F440APR). |
| `CPR-440ARICM01` | F440VER | Executar a rotina de arrendodamento do ICMS dos itens de produto baseado no valor de ICMS dos dados gerais da nota na transferência de it... |
| `CPR-440BAICP01` | Comercial/Compra/Notas Fiscais de Entrada/Todas. | Efetuar a baixa de componentes dos produtos retornados nas notas fiscais de entrada do tipo 4. |
| `CPR-440BASRF01` | F440GNE | Permitir o retorno de um novo valor de base de cálculo, independentemente do valor originalmente apurado. |
| `CPR-440BLONF01` | — | Bloquear uma nota fiscal de entrada quando o número desta já existir em outra filial. |
| `CPR-440BRPFU01` | — | A rotina de geração de título de impostos não buscará o rateio da origem, e sim do processo. |
| `CPR-440BRPII01` | Notas fiscais de Entrada | Alterar a forma de busca dos rateios para os titulos de impostos, fazendo com que a busca do rateio de origem seja apenas para os itens q... |
| `CPR-440BRPIN01` | — | A rotina de geração de título de impostos não buscará o rateio da origem, e sim do processo. |
| `CPR-440BRPIR01` | — | A rotina de geração de título de Retenção de ICMS Substituto (e somente ela) não buscará o rateio da origem, e sim do processo. |
| `CPR-440BURAT01` | — | Herdar ou gerar rateios dos itens das notas fiscais de entrada de origem nas notas tipo 7 e 8. Para notas de origem de saída não haverá h... |
| `CPR-440CALSB01` | F440GNE / F435CCC | Alimentar o campo "Valor do Subsídio(VlrSub)" na nota fiscal de compra dados gerais(E440NFC.VlrSub) e nos itens de produto(E440IPC.VlrSub). |
| `CPR-440CLIPD01` | Fechamento N.F.Entrada | Alterar algumas informações nos documentos de faturamento gerados no fechamento da nota fiscal de entrada (geração de Pedido ou NF.Saída). |
| `CPR-440CNTUN01` | F440CNT, F440CNF e F441DLS | Com este identificador ativo, a tela Contagem de Produtos Recebidos (F440CNT) passa a realizar a contagem considerando a unidade de medid... |
| `CPR-440COCNF01` | F440CNF | Efetuar consistências via regra nos campos de filtro da tela F440CNF. |
| `CPR-440CODDP01` | Notas Fiscais de Entrada (fechamento) | Alterar o depósito do movimento de valorização das notas de entrada do tipo 7 e 8 (E210MVP.CODDEP). |
| `CPR-440CODGR01` | Geração de notas de frete (tipo 8) | Mostrar todas as notas fiscais cuja transportadora pertença ao mesmo grupo de empresas do fornecedor da nota tipo 8 na composição da nota... |
| `CPR-440CONDP01` | Conferência de Embalagens Retornadas por Transferência | Consistir o depósito para o qual está sendo gerada a nota fiscal de entrada. |
| `CPR-440CONEX01` | Nota Fiscal de Entrada | Efetuar consistências após a efetivação da exclusão de uma nota fisca de entrada no banco de dados. |
| `CPR-440CONEX02` | F440GNE / Exclusão da nota | Efetuar consistências antes a efetivação da exclusão de uma nota fisca de entrada no banco de dados. |
| `CPR-440CONID01` | F440GNE | Efetuar a consistência do campo E440NFC.IDENFC (identificador único da nota fiscal do fornecedor) durante a digitação do campo e no fecha... |
| `CPR-440CONTR01` | F440GNE; F440ERT | Consistir a nota fiscal de saída utilizada para a geração da nota fiscal de entrada por transferência. |
| `CPR-440COVPR01` | F440VPR | Consistir os itens digitados na tela de valorização de produtos F440VPR. |
| `CPR-440CPLIP01` | F440GNE | Permitir informar ao sistema, via regra, qual será o complemento do item de produto da nota fiscal de saída (E140Ipv.CplIpv) gerada a par... |
| `CPR-440CPMES01` | F440VPR | sobrepor o parâmetro global "ExiPerVpr" terá a mesma finalidade do parâmetro global, ou seja, indicará se o sistema deve exibir o questio... |
| `CPR-440CPONF01` | F440GNE | No fechamento das notas fiscais de entrada permiti manipular a utilização da opção "Considera Parâmetros das Origens NF Frete". |
| `CPR-440CPRAV01` | — | Alterar o comportamento do parâmetro E070FIL.CPRAVO (indicativo se exige a digitação do valor total da nota fiscal de entrada) de acordo ... |
| `CPR-440CQPCM01` | — | Usar a ficha técnica dos produtos para os cálculos proporcionais das quantidades dos itens que servirão para valorizar os itens de produt... |
| `CPR-440CRIMP01` | F440GNE | Alimentar campos de usuário com intuito de permitir o controle das notas que foram valorizadas pela origem ou não, ao fazer crédito dos i... |
| `CPR-440CSDIV01` | Conferencias - Compras | A finalidade é disponibilizar um ponto para execução de regra na tela F440CNF [ Suprimentos > Gestão de Recebimento > Notas Fiscais de En... |
| `CPR-440DATMV01` | Notas Fiscais de Entrada (fechamento) | Modificar a data do movimento de estoque (E210MVP.DATMOV) através de uma regra. |
| `CPR-440DECON01` | — | Ler Séries a partir de um arquivo texto originado do coletor de dados. |
| `CPR-440DEFSN01` | Fechamento pedido agrupado com geração de nota de entrada | Infomar tipo, série número e transação de produto para uma nota fiscal de entrada gerada no fechamento de um pedido (quando houver parâme... |
| `CPR-440DISLO01` | Geração de nota fiscal de entrada via web service, bem como na rotina de recebimento eletrônico, seja através da tela Via Recebimento de Documento Eletrônico (F000INE), do webservice com.senior.g5.co.mcm.cpr.recebimentoeletronico, na porta Processar, ou pelo processo agendado 67 - Importação de documentos eletrônicos de entrada | Realizar a distribuição/herança de lotes para a nota fiscal de entrada quando a execução for via web service ou ação SID. |
| `CPR-440DISSE01` | Geração de nota fiscal de entrada via web service. | Realizar a distribuição/herança de séries para a nota fiscal de entrada quando a execução for via web service ou ação SID. |
| `CPR-440DIVRL01` | F440REL | Personalizar uma tabela com eventuais divergências, ou qualquer outra necessidade. |
| `CPR-440DTNFT01` | — | Alterar a data de entrada da nota fiscal de entrada para transferência, gerada a partir do fechamento da nota fiscal de saída. A data de ... |
| `CPR-440EMANF01` | — | Enviar e-mail avisando os usuário que geraram solicitações de compra quando for dada entrada de materiais no estoque através da nota fisc... |
| `CPR-440ESTRT01` | Fechamento da NFE | Herdar/Passar do item da nota fiscal<b> para tabela E210MVP no momento da movimentação de estoque no fechamento da nota os seguintes campos: |
| `CPR-440EXCRE01` | FECHAMENTO NOTA FISCAL DE ENTRADA | Não exibir a mensagem "Fornecedor possui créditos. Deseja utilizar a rotina de aproveitamento de títulos ?" no fechamento da nota fiscal ... |
| `CPR-440EXMDE01` | Nota Fiscal de Entrada Agrupada. | consistir a geração de Manifestação destinatário ao excluir uma Nota Fiscal de Entrada. |
| `CPR-440EXNRI01` | Fechamento de Notas Fiscais de Entrada tipo 4 | A finalidade desse identificador, quando cadastrado e ativo, é não fazer o questionamento ao usuário se deseja gerar retorno dos componen... |
| `CPR-440FATGE01` | Geração de Títulos de Impostos | Alterar o fato gerador dos títulos de impostos gerados pela nota fiscal de entrada, apenas nos impostos que possuem "Data Fato Gerador" p... |
| `CPR-440FECNF01` | F440APR | Controlar a opção do cabeçalho "Fechar após a última aprovação". |
| `CPR-440FNAIN01` | Fechamento agrupado de NFE | Suprimir as mensagens de interação com o usuário durante o fechamento das notas fiscais de entrada. |
| `CPR-440FORIN01` | F440GNE | Desabilitar o campo "Fornecedor" e com isso obrigar o usuário a digitar o CNPJ/CPF visto que o fornecedor é informação obrigatória e é ca... |
| `CPR-440GERCS01` | F440GNE | Na geração de notas fiscais de entrada dos tipos 3, 6, 7 e 10, que por sua vez geram notas fiscais de saída, o sistema carrega nos itens ... |
| `CPR-440GERNS01` | F440GNE | Objetivo de retirar a geração da nota fiscal de saída da transação principal do fechamento da nota fiscal de entrada. |
| `CPR-440GERTI01` | — | alterar o Código do Fornecedor, Transação e Tipo de Título padrão na geração de **alguns tipos de títulos** gerados no fechamento da nota... |
| `CPR-440HABBT01` | F440ERT | Habilitar/desabilitar o botão processar ao clicar em Mostrar na tela de conferência de embalagens via transferência. |
| `CPR-440IDVOU01` | — | Definir se o valor de IPI a ser estornado em uma devolução de venda deve ser colocado no campo **Valor outras despesas** da nota fiscal. |
| `CPR-440IMPNF01` | — | Imprimir notas fiscais de saída geradas através das notas fiscais de entrada dos tipos 3, 6 e 7, no momento em que a nota de entrada for ... |
| `CPR-440INSNF01` | Notas Fiscais de Entrada | Permitir desativar a busca do depósito de inspeção para o item da nota fiscal de entrada, ou seja, fica mantido o depósito padrão sugerid... |
| `CPR-440ITEXC01` | F440GNE | Bloquear a exclusão do item. Chamado na exclusão de um item (produto / serviço) pela combinação (CTRL + DEL). |
| `CPR-440LEQTD01` | F440GNE | Complementar a rotina de quantidade de ajuste de balança na tela de nota fiscal de entrada agrupada. |
| `CPR-440LIBPR01` | — | Permitir informar o novo produto com o código do produto original na tela de nota fiscal de entrada - Valorização do Produto. |
| `CPR-440LIGOC01` | Compras - Notas Fiscais de Entrada | Ao gerar notas de entrada do tipo 11, que tenham origem em uma nota fiscal de saída, vincular itens de ordem de compra aos itens da nota ... |
| `CPR-440LOTIN01` | F440GNE | Tratar máscara de lote onde parte da mesma é fixa e outra auto-incremento na distribuição de lotes. |
| `CPR-440LTAJB01` | F440GNE | Permite distribuir entre os lotes da nota fiscal de entrada o valor de ajuste de balança informado no item. |
| `CPR-440MANCP01` | F440NFV | Manipular o campo "Compl. Produto" da grade "Itens da Nota Fiscal de Saída" (guia "Produtos"). |
| `CPR-440MANIR01` | F440GNE | Disponibilizar todos os campos das tabelas E440IPC e E440ISC afim de permitir a manipulação do cálculo do IRRF dos itens da nota fiscal d... |
| `CPR-440MODRL01` | — | Permitir alterar o modelo de relatório via regra. |
| `CPR-440MSVPR01` | F440GNE | Ao ser ativado tem como objetivo não exibir a mensagem de abertura da rotina de valorização de produto ao fechar a nota fiscal de entrada... |
| `CPR-440MVNOR01` | Movimentação de Estoque na NFE | Forçar a execução normal da movimentação de estoques, desconsiderando a movimentação otimizada. Lembrando que a movimentação otimizada é ... |
| `CPR-440NDTFO01` | — | Informar a nota do fornecimento do item no fechamento de notas fiscais, tanto para produtos como para serviços. |
| `CPR-440NFEDG01` | — | Consistir as informações dos dados gerais de uma nota fiscal de entrada. |
| `CPR-440NFEDG02` | — | Consistir na nota fiscal de entrada dentro da transação com o banco no final do fechamento, mas antes da efetivação no banco de dados. |
| `CPR-440NFEDG03` | F440GNE | Consistir as informações dos dados gerais de uma nota fiscal de entrada e suas parcelas. |
| `CPR-440NFEDG04` | Fechamento de notas fiscais de entrada | Consistir as informações dos dados gerais das notas fiscais de entrada. |
| `CPR-440NFITE01` | Fechamento Nota Fiscal de Entrada | Passar para a regra todos os dados dos itens de produto e serviço da nota fiscal de entrada após o fechamento, após a efetivação no banco... |
| `CPR-440NFITE02` | Fechamento Nota Fiscal de Entrada (F440GNE_SRNF) | Passar para a regra todos os dados dos itens de produto da nota fiscal de entrada após o fechamento, após a efetivação no banco de dados. |
| `CPR-440NFMDE01` | — | Permitir que a tag cOrgao seja controlada via regra. Para casos onde o ambiente seja ambiente nacional. |
| `CPR-440NFSIN01` | — |  |
| `CPR-440NFSOC01` | F440GNE / F440VER | Impedir que em notas fiscais do tipo 4, onde são informados itens de ordem de compra, o sistema faça a busca de notas fiscais de saída at... |
| `CPR-440NFTDG01` | Utilizado na exportação de notas fiscais de entrada ao Retaguarda. | Quando ativo, exporta ao sistema de loja (Retaguarda) as notas fiscais de entrada originadas através de uma transferência entre filiais (... |
| `CPR-440PIRRF01` | Impostos no Compras | Alterar o parâmetro de geração de IRRF da transação, "CprIrf", a partir de um código de fornecedor. |
| `CPR-440PRECO01` | — | Alterar o preço unitário (VSPREUNI) e o percentual de desconto (VSPERDSC) dos itens (Produto/Serviço) da ordem de compra que são gravados... |
| `CPR-440PREUE01` | — | Alterar o preço da última entrada da nota fiscal de entrada via regra. |
| `CPR-440PRMED01` | — | Permite que seja utilizado o preço médio do produto, ao invés do valor líquido do item na valorização dos produtos na tela F440VPR (Valor... |
| `CPR-440PRMED02` | Valorização de Produtos da Nota Fiscal de Entrada (F440VPR) | Este identificador tem por objetivo permitir que seja utilizado o preço médio do produto, informado via regra em vez do valor líquido do ... |
| `CPR-440QTDOC01` | Notas Fiscais de Entrada | Não permitir que o sistema transfira a quantidade e o preço do item da ordem de compra para a nota fiscal. |
| `CPR-440RATIT01` | — | Efetuar o rateio de uma nota fiscal por item tentando buscar o rateio pré-definido do tipo "C" (composto), caso não exista rateio na orig... |
| `CPR-440RATIT02` | — | Gerar rateios por item, obedecendo a regra geral para rateios. |
| `CPR-440RECAN01` | Notas Fiscais de Entrada | Fazer tratamentos durante a reabilitação ou cancelamento das notas fiscais de entrada. |
| `CPR-440RECEB01` | — | Verificar se o cliente deseja utilizar a rotina de Recebimento de mercadorias no fechamento da Nota Fiscal de Entrada. |
| `CPR-440RESES01` | Geração de Pedido no Fechamento da NFE | Gerar item de produto de pedido com ou sem reserva de estoque (E120IPD.RESEST) no fechamento de uma nota fiscal de entrada. |
| `CPR-440RETLO01` | Notas Fiscais de Entrada | Não permitir que em notas fiscais de devolução (tipo 2 e 3) seja informada quantidade maior para o lote do que a quantidade originalmente... |
| `CPR-440RETSE01` | Notas Fiscais de Entrada | Fazer com que o clique do botão "Mostrar" não seja executado automaticamente, onde apenas com que as informações do cabeçalho serão preen... |
| `CPR-440RTCTR01` | F440GNE. | Quando uma nota fiscal de compra estiver vinculada a um contrato e houver rateio gerado para o item, a alteração desse item não resultará... |
| `CPR-440SEQNF01` | F440GNE, F115COE | Para os tipos de nota fiscal de entrada do tipo 3, 6, 7 e 10 que por sua vez geram uma nota fiscal de saída, tem a finalidade de definir ... |
| `CPR-440SGLOT01` | F440GNE | Realiza a sugestão dos lotes e suas respectivas quantidades, na distribuição de lotes da nota fiscal de entrada. |
| `CPR-440SGSER01` | — | Permite ao usuário informar via regra, valores para as variáveis VSPREFIXO, VSPOSICOES, VSINICIO, para que com base nisto, o sistema mont... |
| `CPR-440SUBPR01` | F440GNE, F440NFC | Permitir que ao dar entrada em um Item de produto de uma nota fiscal (manual ou via ordem de compra) o usuário possa informar um subprodu... |
| `CPR-440SUGDE01` | F440NFV | Sugerir depósito para entrada na tela F440NFV [ Suprimentos > Gestão de Recebimento > Notas Fiscais de Entrada > Agrupada (botão "Nota Sa... |
| `CPR-440SUGVL01` | F440NFV | Informar os campos "Empresa", "Filial", "Série NF Saída", "Nota Fiscal Saída (+)", "Depósito para entrada" e bloquear a utilização de mai... |
| `CPR-440SUGVL02` | F440NFV | Sugerir um código de transação para cada item da nota fiscal de saída que está sendo processado. |
| `CPR-440SULOT01` | F000DLS | Ao estar cadastrado, ativado e ligado a uma regra, será executado a cada inserção de linha na grade de distribuição de lotes, e terá como... |
| `CPR-440SUNFS01` | F440GNE - F440VER | Sugerir o mesmo número da nota fiscal de entrada na busca da nota fiscal de saída quando tratar-se de uma tranferência (notas tipo 11). |
| `CPR-440TEGNE01` | F461GNC;F440VCB | Definir se será exibida a tela de nota fiscal agrupada F440GNE ou individual F440NFC com o objetivo de permitir alterações no documento, ... |
| `CPR-440TIPNS01` | F440CNF | Alterar na tela F440CN" o tipo da nota fiscal de saída gerada (o padrão nesta tela é a geração de notas de saída do tipo "2-Devolução". |
| `CPR-440TNEST01` | qualquer execução de fechamento de nota fiscal de entrada. | Sugerir uma transação para ser utilizada no movimento de estoque gerado no fechamento da nota fiscal de entrada. |
| `CPR-440TNSAI01` | F440DMC | Sugerir uma transação de saída para transferência de uma série na tela F440DMC. |
| `CPR-440TNSCF01` | F440CNF | Sempre que ocorrer diferenças na conferência, ou seja, sempre que uma nota de vendas (NFS Devolução) ou uma nota de compras (NFE tipo 7),... |
| `CPR-440TNSDE01` | F440COC, F440GNE, F440NFV, F440NOR, F440VER, F440NFC, F435CCC, F443GNP, F000INE, F410CEA e F420GOC. | sugerir a transação de produto e serviço para dados gerais e itens nas notas fiscais de entrada manuais via OC ou via NFS. Isso pode ser ... |
| `CPR-440TNSDE02` | F440GNE | Sugerir as transações de produto e serviço na tela F440GNE [ Suprimentos > Gestão de Recebimento > Notas Fiscais de Entrada > Agrupada ]. |
| `CPR-440TNSES01` | — | Permitir alterar a transação que movimenta estoques no fechamento das notas fiscais de entrada dos tipos 7 (NF Geração Manual) e 8 (NF Fr... |
| `CPR-440TNSET01` | O440FEC | Informar a transação de movimentação de estoque para o produto do item. |
| `CPR-440TNSIN01` | Diversos | Definir para quais transações "sem integração" com uma transação de estoques deseja-se considerar como se a integração existisse realment... |
| `CPR-440TNSPD01` | — | Alterar a transação de produto e serviço do pedido que é gerado no fechamentos das notas fiscais do tipo 2,3,7. A rotina que gera pedidos... |
| `CPR-440TNSPS01` | U000CPR | Permitir alterar a transação dos itens do pedido, tanto produtos como serviços. |
| `CPR-440TPRPS01` | F440GNE | Permite alterar a tabela de preço dos itens do pedido, tanto em produto, quanto em serviço. |
| `CPR-440TRSSD01` | OC | Libera a partir da tela F440CNF - Compras - Conferencia - Contagem, o acesso a tela de OC via Solicitação de compras X Saldo Depósito, ca... |
| `CPR-440VLRFT01` | — | Permite que nas notas de entrada dos tipos 7 ou 8, os produtos das notas fiscais de origem sejam valorizados considerando a ficha técnica... |
| `CPR-440VLRMO01` | — | manipular o valor do movimento de estoque através de regra e das variáveis disponibilizadas. |
| `CPR-440VLRMO02` | — | permitir alterar o valor líquido de uma nota tipo 7 ou 8 usado na valorização dos itens das notas de origem. O valor passado para a regra... |
| `CPR-440VPROP01` | Compras - Valorização de Produtos | Permitir inserir automaticamente um item na grade de valorização de produtos (F440VPR), no fechamento da Nota Fiscal de Entrada. Este ite... |
| `CPR-440VPROP02` | Recebimentos - Valorização de produtos | Permitir inserir automaticamente um item na grade de valorização de produtos (F440VPR), no fechamento de notas fiscais de entrada do tipo... |
| `CPR-440ZERVL01` | F445FNA | Permitir determinar quais impostos de retenção devem sofrer zeramento. |
| `CPR-441CNEFI01` | F441CNE | Bloquear a consulta (via regra), caso os filtros não estiverem preenchidos. |
| `CPR-442DNEOC01` | F442DNE | Realiza a consulta das divergências entre notas fiscais de entrada e ordens de compra, referente à data de entrega (dias atraso) consisti... |
| `CPR-450EXCTI01` | F450NFF | Personalizar a consistência de qual usuário pode ou não utilizar a opção de exclusão de títulos. |
| `CPR-460APROV01` | F460CTR | Não gerar o controle de aprovação multi-nível na tela de cadastro de contratos. |
| `CPR-460CONCT01` | F460CTR | Impedir que o contrato seja gravado. Executado durante gravação do contrato no banco de dados. |
| `CPR-460CONDG01` | F460CTR | Consistir as informações dos dados gerais do contrato de compra permitindo bloquear a gravação ou alteração. |
| `CPR-460CONIT01` | F460CTR, F460PFO | Consistir as informações do item no contrato de compra permitindo bloquear a gravação ou alteração. |
| `CPR-460CONIT02` | F460CTR | Consistir as informações de um item de Contrato de Compra permitindo bloquear a gravação ou alteração. |
| `CPR-460CTRNU01` | Contrato de compra | Gerar um número de contrato através dos dados gerais. |
| `CPR-460EMACT01` | Observação do Contrato de Compra (F420OBS) | Alterar, a partir da regra, o corpo e o assunto do e-mail enviado. |
| `CPR-460EMOBS01` | Observação do Contrato de Compra (F420OBS) | Permitir inserir endereços de e-mail bem como respectivos nomes e descritivos, além dos pré-definidos no sistema. Este identificador é ex... |
| `CPR-460LAREA01` | F460REA | Alterar o campo "Preço Reajustado" para que se possa ajustar o valor já calculado a partir do percentual informado na tela. |
| `CPR-460MSGDT01` | F460CTR | Não exibir as mensagens de consistência no cadastramento do contrato: |
| `CPR-460OBSLI01` | F460CTR, F460PFO | Herdar informações da licitação para as observações de um contrato de compra quando da geração do mesmo via ordem de compra. |
| `CPR-460PERAL01` | F460CTR | Alterar algumas informações no contrato de abastecimento mesmo após as ordens de compra terem sido geradas. |
| `CPR-460PFOCT01` | F460PFO | Permitir ao usuário manipular os campos "Data Cotação" e "Valor Cotação", ambos referente a moeda. |
| `CPR-460PFOPR01` | F460PFO | Esse identificador tem a finalidade de disponibilizar um ponto de regra no sistema. |
| `CPR-460SLDCT00` | — |  |
| `CPR-460TITCT01` | F460CTR | Gerar títulos no contas a pagar para todos os tipos de contratos de compra. |
| `CPR-460TLCTR01` | F460APR | Ao clicar no botão de consulta de contrato, no rodapé da tela será exibida a tela F460CTR ao invés da tela F462CTR. |
| `CPR-460VALCT01` | — | ativar a validação de contrato de compra comercial tipo 1 e 2 no recebimento eletrônico. Para mais informações, confira a documentação so... |
| `CPR-461FECNF01` | F461GNC | Controlar a opção do cabeçalho "Fechar Nota após processar". |

## CRE - Contas a Receber

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `CRE-000CNVVER2` | — | Quando o identificador está ativo, interpreta-se que os Sistemas Terceiros estão usando o web service "com.senior.g5.co.ger.convenio" com... |
| `CRE-000IMPRE01` | Impressão Bloqueto Remessa | Com este identificador cadastrado e ativo é possível imprimir o bloqueto do agrupamento da remessa mesmo após este ter sido remetido ao b... |
| `CRE-301ADTCM01` | — | Somente habilitará os campos "Representante", "Percentual Comissão" e "Valor Base Comissão" para os adiantamentos. |
| `CRE-301ATLCL01` | F301ATL | Consistir ao sair da linha, os dados da grade da tela de alteração de títulos por lote. |
| `CRE-301ATLCL02` | F301ATL. | Habilitar o campo Cot. Moeda Neg., da tela Alteração de títulos por lote do Contas a Receber (F301ATL), para os títulos que possuírem a m... |
| `CRE-301AVPNC01` | F301AVP | Na grade "Título", mostrar o nome do fornecedor ao invés do apelido do fornecedor. |
| `CRE-301BAACL01` | F301BAA. | com este identificador cadastrado e ativo, o sistema inicializa o campo **Considera Cliente** da tela de seleção das baixas por aproveita... |
| `CRE-301BAADS01` | — | habilitar os campos de desconto para títulos de adiantamento/crédito no Contas a Receber nas telas F301TCR, F301ATL, F301BAA e F600GEC. |
| `CRE-301BAARE01` | F301BAA | Permitir gerar retenções (PIS, COFINS, CSLL, OUR) para títulos baixados por crédito (tela F301BAA), conforme parâmetros utilizados em bai... |
| `CRE-301BAIXA01` | — | Com este identificador cadastrado e ativo, ao excluir uma baixa de título do C.Receber que estiver ligada a movimentos da tesouraria, sem... |
| `CRE-301BCDBA01` | F301BCD | Com este identificador cadastrado e ativo, irá consistir a grade Títulos a Baixar da tela de "Baixa por Recebimento Cheques/Diversos", se... |
| `CRE-301BCDBC01` | F301BCD | Com este identificador cadastrado e ativo, irá consistir a grade Baixar Créditos da tela de "Baixa por Recebimento ChequesDiversos", send... |
| `CRE-301BCDCF01` | F301BCD | Com este identificador cadastrado e ativo, tem por finalidade alimentar o campo "Código do Fornecedor" da tela de Seleção, quando informa... |
| `CRE-301BCDCH01` | F301BCD | Com este identificador cadastrado e ativo, tem a finalidade consistir a grade Cheques da tela de "Baixa por Recebimento Cheques/Diversos"... |
| `CRE-301BCDCH02` | F301BCD | Com este identificador cadastrado e ativo, tem a finalidade de o cliente poder consistir a grade Cheques da tela de "Baixa por Recebiment... |
| `CRE-301BCDCO01` | F301BCD | Com este identificador cadastrado e ativo, tem a finalidade consistir a grade Contas da tela de "Baixa por Recebimento ChequesDiversos", ... |
| `CRE-301BCDCP01` | F301BCD | Com este identificador cadastrado e ativo, tem a finalidade consistir a grade Compensação da tela de "Baixa por Recebimento ChequesDivers... |
| `CRE-301BCDDB01` | F301BCD | Calcular os valores de "Juros, Multa, Desconto e Correção" usando a data base. |
| `CRE-301BCDFI01` | F301BCD | Identificador chamado depois do processamento da tela F301BCD, e no cancelar da mesma. |
| `CRE-301BCDFP01` | F301BCD | Sugerir a mesma forma de pagamento informada na tela(Campo "Forma Pgto") para a criação de títulos através da aba "Cheques". |
| `CRE-301BCDGC01` | F301BCD | Com este identificador cadastrado e ativo, tem a finalidade consistir a grade Gerar Créditos da tela de "Baixa por Recebimento ChequesDiv... |
| `CRE-301BCDLE01` | F301BCD | Com este identificador cadastrado, ativo e ligado a uma regra, será apresentado na tela de "Baixas por recebimento de Cheques/Diversos" (... |
| `CRE-301BCDLE02` | F301BCD | A finalidade deste identificador é chamar automaticamente o leitor de código de barras após cada inserção de cheque na aba "Cheques". Uma... |
| `CRE-301BCDSA01` | F301BCD | Com este identificador cadastrado e ativo, ao cadastrar um sacado através da tela "F301BCD > Finanças > Gestão de Contas a Receber > Cont... |
| `CRE-301BCDSE01` | F301BCD | Com este identificador cadastrado e ativo, permite informar o filtro por tipo de título para os títulos a baixar da tela de seleção da te... |
| `CRE-301BCDSV01` | F301BCD | Com este identificador cadastrado e ativo, tem a finalidade de sugerir o número de Título na Aba "Cheques" via regra, após informar os da... |
| `CRE-301BMAFP01` | F301BMA | Com este identificador cadastrado e ativo, não irá exibir a mensagem de consistência " Título "xxxx" possui forma de pagamento na baixa d... |
| `CRE-301BMAIT01` | F301BMA_FRCR | Com este identificador cadastrado e ativo, quando a variável CreNAdiTit for atribuído o valor como 0 (zero), o título não será adicionado... |
| `CRE-301BMAJR01` | F301BMA | Com este identificador cadastrado e ativo, ao alterar o valor da transação na grade "Títulos" da tela "F301BMA" irá recalcular os valores... |
| `CRE-301BMALE01` | F301BMA | Com este identificador cadastrado e ativo, será apresentado na tela de baixa e movimentos automáticos (Financeiro > C.Receber > Baixas de... |
| `CRE-301BMAQTD0` | F301BMA | Com este identificador cadastrado e ativo, será possível parametrizar a quantidade de registros que serão carregados por paginação na gra... |
| `CRE-301BMARC01` | F301BMA, F501BCO, F310PRB | Com este cadastrado e ativo, remove qualquer espécie de caractere que não seja número, no retorno da leitura do código de barras. |
| `CRE-301BMATI01` | F310RTB | Com este identificador cadastrado e ativo, será habilitado na tela de seleção de baixa o campo "Lan. Individual: Tes.", que irá indicar s... |
| `CRE-301BMDDB01` | F301BMD | Com este identificador cadastrado e ativo, irá calcular os valores de "Juros", "Multa", "Desconto" e "Correção" usando a data base. |
| `CRE-301BMDLC01` | F301BMD | Com este identificador cadastrado e ativo, apresenta tela de leitura de código de barras no campo "Cliente" da tela F301BMD, onde é lido ... |
| `CRE-301BMDLE01` | F301BMD | Com este identificador cadastrado e ativo, será apresentado na tela "F301BMD > Finanças > Gestão de Contas a Receber > Contas a Receber >... |
| `CRE-301BNKBO01` | — | Habilitará a troca de portador ao receber pagamentos de títulos via Cobrança Escritural oriundos do ERP Banking. |
| `CRE-301BNKPX01` | — | Habilitará a troca de portador ao receber pagamentos de títulos via QR Code PIX oriundos do ERP Banking. |
| `CRE-301BPGGA01` | Telas de baixa de títulos | Com este identificador cadastrado e ativo, ao fazer uma baixa por pagamento, substituição, compensação ou créditos de um título gerado a ... |
| `CRE-301BTIBP01` | — | com este identificador cadastrado e ativo, ao excluir um título do Contas a Receber gerado a partir de uma baixa por substituição e que p... |
| `CRE-301BVDTE01` | 301BMA,301LOT | Com este identificador cadastrado e ativo, permite que na tela "F301BMA" e "F301LOT" seja permitido processar baixas onde o valor total d... |
| `CRE-301CCCDESL` | F301CCC | Muda a forma de seleção de registro que por padrão é linha e passa a ser por coluna. Com este identificador ativo, a coluna **Sel.** da g... |
| `CRE-301CCCQL01` | F301CCC | Este identificador de regra atua na tela Conciliação Cartões (F301CCC). Com ele cadastrado e ativo, será permitido realizar a conciliação... |
| `CRE-301COMPR01` | F301BMD / F301SUB / Web services do contas a receber | Este identificador tem como objetivo de tratar o percentual de comissão de títulos. Se ativo a comissão de recebimento do título sera fix... |
| `CRE-301CONBA01` | — | Com este identificador cadastrado e ativo, poderá ser feita consistências nas baixas e exclusões de títulos do contas a receber, através ... |
| `CRE-301CONTA01` | — | Com este identificador cadastrado e ativo, quando um título já tiver sua entrada contabilizada, serão desabilitados todos os campos da te... |
| `CRE-301CPCNN01` | DIVERSAS | Este identificador de regras tem como objetivo permitir o controle do "nosso número" por portador também (além de empresa e filial). Se o... |
| `CRE-301CREFE01` | — | com este identificador cadastrado e ativo, será permitido trabalhar com multiempresa nas telas (F302CCR > Finanças > Gestão de Contas a R... |
| `CRE-301CRENN01` | — | Com este identificador cadastrado e ativo, irá consistir o "Nosso Número" diferente, permitindo incluir um "Nosso Número" já ultilizado e... |
| `CRE-301CTSIG01` | — | Com este identificador cadastrado e ativo, inverterá a ordem de apresentação das grids na tela "F302CTS > Finanças > Gestão de Contas a R... |
| `CRE-301CXBNA01` | F301BMA | Com este identificador cadastrado e ativo, não serão agrupados movimentos da tesouraria gerados na tela de Entrada (F301CXB) que possuam ... |
| `CRE-301DATFP01` | — | Com este identificador cadastrado e ativo, permite informar data da baixa, data movimento tesouraria, data liberação e data contábil, for... |
| `CRE-301DEVCM01` | Baixa Contas a Receber | Com este identificador cadastrado e ativo, irá efetuar a devolução da comissão no valor total devolvido da venda, ao invés de definir o v... |
| `CRE-301DTMOV01` | 301BMA-BAIXA POR LOTE AUTOMATICA | Com este identificador ligado não serão mais permitidas baixas com data de movimento menores ou iguais a data da baixa exceto quando esta... |
| `CRE-301EMAIL01` | — | Com esse identificador ativo é disponibilizado via regra o Assunto e Corpo do e-mail enviado no processo automatico "23 - Remessa complet... |
| `CRE-301ENTAS01` | — | permite informar, via regra, a situação **Aberto Suspenso (AS)** na geração de títulos via nota fiscal. |
| `CRE-301EXMOV01` | Todos os locais onde ocorre Exclusão de Movimentos do CRE. | Com este identificador cadastrado e ativo, possibilita ao usuário fazer a consistência dos movimentos de contas a receber antes de sua ex... |
| `CRE-301EXMTP01` | — | Com este identificador cadastrado e ativo, será permitida a exclusão de movimentos de troca de portador para os títulos de CRE. |
| `CRE-301GNDMD01` | Geração de títulos via nota de débito (F301GND) | Com este identificador cadastrado e ativo, mudará o comportamento dos botões "Gerar" e "Perdoar" da tela "F301GND > Finanças > Gestão de ... |
| `CRE-301GNDNU01` | — | Com este identificador cadastrado e ativo, irá sugerir o número do título de nota de débito na tela de geração de título de notas de débi... |
| `CRE-301GNDSR01` | F301GND | Com este identificador cadastrado e ativo, permitirá que o usuário selecione o representante, grupo de contas a receber e forma de pagame... |
| `CRE-301GOETP01` | — | Com este identificador cadastrado e ativo, permitirá que seja gerada uma observação no cliente na exclusão dos títulos previstos conforme... |
| `CRE-301GRULT01` | F301TCR-NUMERO DO TITULO | Com este identificador cadastrado e ativo, servirá para definir a geração da numeração de títulos e créditos na tela de Títulos/Manutençã... |
| `CRE-301GTCPN01` | — | Com este identificador cadastrado e ativo, na tela "F301GTC > Finanças > Gestão de Contas a Receber > Contas a Receber > Entrada e Manute... |
| `CRE-301GTPBL01` | F301GTP | Com este identificador cadastrado e ativo, irá apresentar a tela "F302CRB > Finanças > Gestão de Contas a Receber > Contas a Receber > Co... |
| `CRE-301GTPHB01` | — | Com este identificador cadastrado e ativo irá habilitar a opção 'Mostrar Pedidos Bloqueados' da tela F301STP (seleção da tela F301GTP). |
| `CRE-301GTPLP01` | F301GTP | Com este identificador cadastrado e ativo, irá trazer sempre marcado a opção "Não Liquidar Pedidos", na tela "F301GTP > Finanças > Gestão... |
| `CRE-301GTPTP01` | F301GTP | Com este identificador cadastrado e ativo, irá filtrar o campo "Família" da tela de Seleção, com o tipo de produto igual a Serviço. |
| `CRE-301GTRRP01` | 301gtr | Com este identificador cadastrado e ativo, é possível usar o mesmo rateio para todas as linhas da grade na tela de duplicação de títulos ... |
| `CRE-301HAVCP01` | F301BMD;F301SUB | Com este identificador cadastrado e ativo, será habilitado na tela "F301BMD > Finanças > Gestão de Contas a Receber > Contas a Receber > ... |
| `CRE-301HERIB01` | — | Com este identificador cadastrado e ativo, irá fazer com que na importação de baixas de títulos do Contas a Receber, o rateio seja herdad... |
| `CRE-301IBFLO01` | Importação de movimentos do CRE | Com este identificador cadastrado e ativo,ao realizar uma importação de movimento do Contas a Receber, a data de liberação da tesouraria ... |
| `CRE-301IMPCC01` | — | Considerar os valores movimentados por aproveitamento de crédito no valor base do cálculo de impostos em baixas por pagamento. |
| `CRE-301INVCR01` | — | realizar manualmente o cálculo dos valores na baixa do título do Contas a Receber, passando para o usuário eventuais particularidades no ... |
| `CRE-301LEITO01` | — | Com este identificador cadastrado e ativo, devido a posição do nosso número no código de barras, nos bloquetos, não ser padrão, foi neces... |
| `CRE-301LEITO02` | — | Com este identificador cadastrado e ativo, permitirá a geração ou atualização de títulos com base no código de barras lido ou digitado. O... |
| `CRE-301LEITO03` | — | Com este identificador cadastrado e ativo, na tela de leitura do código de barras do C.Receber (F301LEI) será chamada a regra associada a... |
| `CRE-301LEIUT01` | — | Quando o idenificador estiver ativo, não exibe a mensagem: "Ocorreu um erro ao utilizar a leitora de código de barras: Erro ao carregar a... |
| `CRE-301LIBME01` | F301BCD;F301BMD;F301CXB | Com este identificador cadastrado e ativo, irá permitir informar uma data de liberação menor que a data de movimento da tesouraria, mas n... |
| `CRE-301LOTIT01` | F301LOT_FRCR | Com este identificador cadastrado e ativo, quando a variável CreNAdiTit for atribuído o valor como 0 (zero), o título não será adicionado... |
| `CRE-301MCRBC01` | — | por meio de uma regra, é possível liberar ou bloquear os campos dos valores de baixas das telas do Financeiro. Estes campos correspondem ... |
| `CRE-301MCREM01` | — | o objetivo desse identificador de regra é impedir que o usuário exclua apenas uma movimentação de baixa de título (opção "Movto. Atual" d... |
| `CRE-301MORALLB` | — | personalizar o recebimento dos links de boletos. É acionado quando o web service de alteração parcial de títulos (com.senior.g5.co.mfi.cr... |
| `CRE-301NCDEP01` | — | Com este identificador cadastrado e ativo, não irá consistir o período da filial na exclusão de títulos previstos na tela "F301TCR > Fina... |
| `CRE-301NGITB01` | Criação de instruções bancárias | Com este identificador cadastrado e ativo, não serão geradas instruções bancárias para títulos que não tenham sido enviados para banco at... |
| `CRE-301PERTO01` | F301BMD | Com este identificador cadastrado e ativo, o tratamento da leitura e impressão de cheques na grade Substitutos, será feito para impressor... |
| `CRE-301RAMOV01` | — | Com este identificador cadastrado e ativo, nas rotinas de baixas do Contas a Receber a data base do rateio não será a data do pagamento d... |
| `CRE-301RATDU01` | F301TCR | Com este identificador cadastrado e ativo, ao duplicar um título do contas a receber, o título duplicado irá herdar o rateio do título de... |
| `CRE-301RCOCO01` | — | Indica se é possível realizar uma renegociação de títulos via Senior X. |
| `CRE-301RTSAP01` | — | Com este identificador cadastrado e ativo, irá atribuir o portador e a carteira cadastrados na filial, quando títulos no retorno bancário... |
| `CRE-301SBACT01` | F301SBA | Esse identificador que será invocado ao sair dos campos conta interna e transação (habilitados com o identificador CRE - 301BAARE01), par... |
| `CRE-301SEQRA01` | F301BCD e F301BMD. | Com este identificador cadastrado e ativo, a rotina de baixa das telas Baixa por Recebimento de Cheques/Diversos do Contas a Receber (F30... |
| `CRE-301STPSV01` | F301STP | Com este identificador cadastrado e ativo, irá permitir selecionar os campos "Mostrar Pedidos Bloqueados" e "Não Liquidar Pedidos" da tel... |
| `CRE-301SUBBD01` | — | Com este identificador cadastrado e ativo, ficará bloqueada a alteração das datas de entrada e de emissão através da tela "F301TCR > Fina... |
| `CRE-301SUBEC01` | — | Com este identificador cadastrado e ativo, irá ocultar os campos da grade Substituição da tela "F301SUB > Finanças > Gestão de Contas a R... |
| `CRE-301SUBLE01` | — | Com este identificador cadastrado e ativo, será apresentado na tela "F301SUB > Finanças > Gestão de Contas a Receber > Contas a Receber >... |
| `CRE-301SUBSC01` | WebService - com.senior.g5.co.mfi.cre.substituir / com.senior.g5.co.mfi.cre.titulos.EntradaTitulosLoteCR | Esse identificador tem a finalidade de sugerir alguns campos na geração dos títulos substitutos e na geração de títulos manuais quando os... |
| `CRE-301SUBTD01` | WebService - com.senior.g5.co.mfi.cre.substituir | Esse identificador tem a finalidade de não verificar se a data de pagamento é menor que a data de entrada do título que está sendo baixado. |
| `CRE-301SUBTP01` | WebService - com.senior.g5.co.mfi.cre.substituir | Esse identificador tem a finalidade de não verificar se o título que está sendo baixado é previsto. |
| `CRE-301SUBTV01` | Web Service - com.senior.g5.co.mfi.cre.titulos@SubstituirTitulosCR, com.senior.g5.co.mfi.cre.titulos@EntradaTitulosLoteCR, AçãoSidTCR | Esse identificador tem a finalidade de gerar automaticamente a data de vencimento original do título em algum dia útil, caso a data infor... |
| `CRE-301SUBVP01` | — | permitir a baixa via web service de títulos que não possuam portador **Empresa**. Quando ativo, permite excluir títulos com portador dife... |
| `CRE-301SUCGS01` | — | Com este identificador cadastrado e ativo, irá permitir ao usuário acessar o valor de todos os campos do grade de títulos substitutos, na... |
| `CRE-301SUCGT01` | — | Com este identificador cadastrado e ativo, irá permitir ao usuário acessar o valor de todos os campos da grade de títulos a baixar, na te... |
| `CRE-301TCRBI01` | — | este identificador de regras é chamado antes da inclusão ou alteração de títulos pelo sistema, permitindo personalizar os dados antes que... |
| `CRE-301TCRPX01` | não se aplica. | desabilitar a troca de portador durante a baixa de títulos via pagamento PIX, oriundas do ERP Banking na Senior X. Quando o identificar e... |
| `CRE-301TCRVP01` | AçãoSidTcr | Esse identificador tem a finalidade de gerar automaticamente a data de vencimento prorrogado do título em algum dia útil, caso a data inf... |
| `CRE-301TPXALQR` | — | Personalizar o recebimento dos QR Codes PIX. É acionado quando o sistema recebe o QR Code PIX de um título através da integração com o ER... |
| `CRE-301VCTDE01` | Contas a Receber | Com este identificador cadastrado e ativo, não irá permitir que ao cadastrar ou alterar um título, o Vencimento seja menor que a Data de ... |
| `CRE-301VCTPR01` | C.Receber - Títulos/Manutenção | Com este identificador cadastrado e ativo, é permitido alterar o vencimento prorrogado para uma data menor que o vencimento original nas ... |
| `CRE-301WSEVO01` | — | Com este identificador cadastrado e ativo, o vencimento original informado na rotina do web service de entrada de títulos por lote do con... |
| `CRE-302CCRBM01` | F302CCR | Com este identificador cadastrado e ativo, irá utilizar as variáveis disponíveis na tela "F302CCR > Finanças > Gestão de Contas a Receber... |
| `CRE-302CCRMM01` | — | Com este identificador cadastrado e ativo, na tela "F302CCR > Finanças > Gestão de Contas a Receber > Contas a Receber > Consultas > Títu... |
| `CRE-302CCRMO01` | F302CCR | Tem finalidade de quando cadastrado e ativo, ao clicar em imprimir carregar os campos abaixo conforma a tela F302CCR(ou consulta, F302SCR... |
| `CRE-302CCRPCP0` | — | Com este identificador cadastrado e ativo, será trocado na tela "F302CCR > Finanças > Gestão de Contas a Receber > Contas a Receber > Con... |
| `CRE-302CCRRL01` | F302CCR | Na tela F302CCR apresentar a tela de entrada de relatório ao clicar no botão "imprimir". Para que isso aconteça é preciso vincular uma re... |
| `CRE-302CRBIB01` | F302CRB | Tratamento de impressão de títulos já líquidados. Para que o usuário possa imprimir boletos mesmo se líquidados. |
| `CRE-302CRBNN01` | F302CRB. | verifica, na impressão do bloqueto, se há outro usuário que usou o Nosso Número do bloqueto a ser impresso. Ver também BloPrtFin. |
| `CRE-302MCCRB01` | F302CRB | Com o identificador ativo, o sistema não mostra os títulos nos quais são previsões ou créditos, ou seja, títulos criados com transação de... |
| `CRE-302MESGU01` | F302CCR e F302SCR | Com este identificador cadastrado e ativo, irá fazer com que as empresas de acordo com o usuário logado, sejam utilizadas no campo de fil... |
| `CRE-302MPRNT01` | — | Com este identificador cadastrado e ativo, será mostrado o botão "Imprimir" na tela"F302FMC > Finanças > Gestão de Contas a Receber > Con... |
| `CRE-302PTPSP01` | F302PTP | Com este identificador cadastrado e ativo, irá ser utilizado da Stored Procudure "SP_TCRSALDOS" (específica para o banco de dados Oracle)... |
| `CRE-302SCRLE01` | — | Com este identificador cadastrado e ativo, o campo "Código Barras" e o botão "Leitor" ficarão habilitados para utilização na tela de sele... |
| `CRE-310AGINS01` | — | Com este identificador cadastrado e ativo, quando for gerado uma instrução automática de abatimento e já existir uma soma do valor das du... |
| `CRE-310ARQLC01` | CobrançaEscritural-Remessa | Com este identificador cadastrado e ativo, será possível gerar o arquivo de remessa da cobrança escritural na máquina cliente quando o us... |
| `CRE-310ARQLC02` | retorno da cobrança escritural | Com este identificador cadastrado e ativo, é possível usar arquivos locais como retorno da cobrança escritural quando utilizado o WA. Na ... |
| `CRE-310BTIPD01` | — | Com este identificador cadastrado e ativo, será possível realizar a baixa de um título no retorno da Cobrança Escritural que esteja em um... |
| `CRE-310GERTB01` | — | Este identificador de regra tem a finalidade de verificar os títulos rejeitados no retorno da cobrança bancária, para que os mesmos sejam... |
| `CRE-310PEFIT01` | F310PEF | Com este identificador cadastrado e ativo, quando a variável CreNAdiTit for atribuído o valor como 0 (zero), o título não será adicionado... |
| `CRE-310PRAAR01` | F322PRA | Com este identificador cadastrado e ativo, irá permitir a inclusão de um arquivo padrão na remessa Títulos assessoria. Sempre que informa... |
| `CRE-310PRAPR01` | — | Com este identificador cadastrado e ativo, irá permitir tratamento de particularidades para sugerir o portador na tela de Sugestão de Rem... |
| `CRE-310PRAPR02` | 310PRA | Quando ativado desliga a regra de nº 3 da tela que diz: |
| `CRE-310PRBAI01` | F310PRB | Com este identificador cadastrado e ativo, irá aplicar os filtros de abrangência nas instruções e também habilitar os filtros: "Data Inst... |
| `CRE-310PRBAR01` | F310PRB. | permitir a inclusão de um arquivo padrão na remessa de cobrança escritural. Sempre que for informado um portador na tela, a regra será ex... |
| `CRE-310PRBEN01` | F301PRB | Este identificador permite sugerir o endereço de cobrança do título, com base nas informações cadastradas através do botão Diversos da te... |
| `CRE-310PRBIT01` | — | Com este identificador cadastrado e ativo, quando a variável VSADITIT for atribuído o valor como 0 (zero), o título não será adicionado n... |
| `CRE-310PRBLE01` | F310PRB | Com este identificador cadastrado e ativo, será apresentado na tela de cobrança escritural - remessa (Financeiro > C.Receber > Cobrança E... |
| `CRE-310RCPEEBO` | — | Será acionado sempre que o ERP XT receber os dados de boleto oriundos do ERP Banking. Será acionado por título, permitindo a programação ... |
| `CRE-310RCPEEPX` | — | Será acionado sempre que o ERP XT receber os dados PIX oriundos do ERP Banking. Será acionado por título, permitindo a programação de pro... |
| `CRE-310RTBAB01` | Retorno da Cobrança Escritural (F310RTB). | quando ativo, o valor do abatimento do arquivo de retorno será descontado do valor da baixa do título, fazendo com que o valor do título ... |
| `CRE-310RTBBL01` | F310RTB | Com este identificador cadastrado e ativo, sendo obrigatoriamente que ser utilizado em conjunto com o identificador de regras CRE-310RTBD... |
| `CRE-310RTBDI01` | F310RTB | Tratar divergência de valor de retorno de remessa, entre o valor do título e o valor cobrado pelo banco. |
| `CRE-310RTBDU01` | — | Com este identificador cadastrado e ativo, não haverá controle de títulos duplicados na tela de retorno da cobrança escritural. |
| `CRE-310RTBPA01` | F310RTB. | Quando esse identificador estiver ativo, o sistema não considerará mais o portador anterior ao validar as operações do tipo "11 - Retorno... |
| `CRE-310RTBTB01` | — | Com este identificador cadastrado e ativo, será permitido realizar baixas através do retorno da cobrança escritural, mesmo que os títulos... |
| `CRE-310RTBTR01` | F301CXB | Com este identificador cadastrado e ativo, será gerado o lançamento da tarifa diretamente na tesouraria. Ele somente efetua lançamento na... |
| `CRE-320DTCAG01` | F320DTC | Com este identificador cadastrado e ativo, quando a variável FinNAdiTit for atribuído o valor como 0 (zero), o título não será adicionado... |
| `CRE-320DTGER01` | — | permite que seja manipulada a instrução SQL para adicionar filtros aos títulos que serão selecionados para envio ou para devolução. |
| `CRE-501BCDGT01` | — | chamar a regra para cada título que ainda tem um saldo restante após processar a tela Baixa por Compensações Diversas (F501BCD). Isso a f... |
| `CRE-501BCDPR01` | — | chamar a regra para cada título que ainda tem saldo restante a ser baixado, onde será possível prorrogar o vencimento. Se o identificador... |
| `CRE-600GECCB01` | — | permitir o preenchimento da grade de títulos da tela F600GEC a partir de um código de barras. |

## CTB - Contabilidade

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `CTB-000VLAUX01` | Composição Auxiliar | Quando o identificador estiver cadastrado e ativo, ao alterar o valor do lançamento já existente não será recalculado o valor da composiç... |
| `CTB-043ACEFA01` | — | Quando cadastrado e ativo, modifica a forma que a rotina obtém a numeração da última conta auxiliar, acelerando o processo de criação de ... |
| `CTB-043CADCE01` | F043MPC | Quando o identificador de regras estiver ativo e se tratar de uma atualização de uma conta do plano de contas o sistema irá forçar o cada... |
| `CTB-043GRUPO01` | F043MPC | Quando este identificador estiver cadastrado e ativo, a rotina permitirá o cadastro de máscara com grupo 0. |
| `CTB-043MPCRE00` | F043MPC e F043HIE | Disponibilizar via regra os campos do cadastro de contas do modelo de plano antes de Inserir/Alterar, para que o usuário consista as info... |
| `CTB-043MPCRE01` | F043MPC e F043HIE |  |
| `CTB-043MPCRE02` | F043MPC e F043HIE | Disponibilizar via regra os campos do cadastro de contas do modelo de plano antes de excluir, para que o usuário possa consistir as infor... |
| `CTB-044DCGVL01` | — | Alterar o fluxo para permitir que o cliente faça a realocação dos saldos entre grupos de contas sem ter a necessidade de efetuar primeira... |
| `CTB-045CPLTR01` | F045PDR. | com este identificador cadastrado e ativo ao processar a distribuição de rateio, a montagem do histórico padrão passa a reconhecer todo o... |
| `CTB-045DISTRAT` | F045PDR | Este identificador tem a finalidade de preencher os campos "HP Distrib. Padrão Contra-Partida e HP Distrib. Padrão", da tela F045PDR, com... |
| `CTB-045EDRRE00` | F045EDR | Disponibilizar via regra os principais campos da tela antes de processar, para que o usuário consista as informações da forma que desejar. |
| `CTB-045EDRRE01` | F045EDR |  |
| `CTB-045PDRRE00` | F045PDR | Disponibilizar via regra os principais campos da tela antes de processar, para que o usuário consista as informações da forma que desejar. |
| `CTB-045PDRRE01` | F045PDR | Disponibilizar via regra os principais campos da tela ao processar cada registro, para que o usuário consista as informações da forma que... |
| `CTB-048FCTAS01` | F048FCT | Quando o identificador estiver cadastrado e ativo, os critérios de endereço analíticos e sintéticos poderão ser uitlizados independente d... |
| `CTB-070CDFIL01` | F070FCT | Este identificador é acionado ao alterar o registro da filial na tela Cadastros > Filiais > Parâmetros por Gestão > Contabilidade (F070FC... |
| `CTB-085AUXCL01` | F085CAD | Permite a manipulação lógica da criação de contas auxiliares automática. Possibilitando desabilitar a criação de conta auxiliar ou auxili... |
| `CTB-095AUXFO01` | F095CAD | Permite a manipulação lógica da criação de contas auxiliares automática. Possibilitando desabilitar a criação de conta auxiliar ou auxili... |
| `CTB-640CLASS01` | Lançamentos Manuais, Consulta Lançamentos, Liberação Exclusão de Lote | Quando existir este identificador com código de regra diferente de zero, será alterada a forma de digitação dos lançamentos individuais e... |
| `CTB-640CONCF01` | F640LCC e F640LCL | Quando cadastrado e ativo, possibilita o acesso a consulta de clientes/fornecedores nas telas de lançamento contábil. Ao confirmar a cons... |
| `CTB-640CONLC01` | Lançamentos contábeis |  |
| `CTB-640CONLC02` | Lançamentos contábeis | Tem a finalidade de realizar a consistência via regra na exclusão dos lançamentos contábeis. Ao clicar no botão "Excluir" das telas de la... |
| `CTB-640CONLC03` | Lançamentos contábeis | Tem a finalidade de realizar a consistência via regra no processamento dos lançamentos contábeis. Ao clicar no botão "Processar" das tela... |
| `CTB-640CPLHP01` | Lançamentos contábeis | Sugere o complemento do histórico do lançamento através da regra associada ao identificador. Ao sair do campo de "Código do Histórico Pad... |
| `CTB-640DATAM01` | Lançamentos contábeis | Este identificador quando estiver cadastrado e ativo, terá a finalidade de bloquear a alteração da data do lançamento para outro mês/ano,... |
| `CTB-640DOCUM01` | Lançamentos contábeis e consultas |  |
| `CTB-640DUPLC01` | Inclusão de Lançamentos Contábeis | Este identificador disponibiliza o código da empresa e o número do lançamento que será inserido, podendo duplicado para qualquer Empresa/... |
| `CTB-640DUPLC02` | Lançamentos contábeis | Disponibiliza na regra o código da empresa e o número do lançamento que serão atualizados, para que os lançamentos duplicados possam ser ... |
| `CTB-640DUPLC03` | Lançamentos contábeis | Disponibiliza o código da empresa e o número do lançamento que será excluído, para que todos os lançamentos duplicados possam ser excluíd... |
| `CTB-640DUPLT01` | Inclusão de Lotes Contábeis | Disponibiliza o código da empresa e o número do lote que será inserido, podendo ser duplicado para qualquer Empresa/Filial. |
| `CTB-640DUPLT02` | F640LOT | Disponibiliza o código da empresa e o número do lote que será atualizado para que os lotes duplicados possam ser atualizados também. |
| `CTB-640DUPLT03` | F640LOT | Disponibiliza o código da empresa e o número do lote que será excluído para que todos os lotes duplicados possam ser excluídos também. |
| `CTB-640FTCHB00` | Controladoria > Gestão de Contabilidade |  |
| `CTB-640ILCFT01` | Importação de lançamentos / DLL / Web Services | Permitir ao usuário definir a geração de fato contábil na integração de lançamentos contábeis da Gestão de Pessoas X ERP, importação via ... |
| `CTB-640INTQA01` | Integração contábil | Com este identificador de regras cadastrado e ativo, na rotina de integração contábil será feita a geração dos lançamentos de composição ... |
| `CTB-640LCCRE00` | F640LCC | Disponibilizar via regra os principais campos da tela antes de processar, para que o usuário consista as informações da forma que desejar. |
| `CTB-640LCCRE02` | F640LCC | Disponibilizar via regra os principais campos da tela antes de excluir, para que o usuário consista as informações da forma que desejar. |
| `CTB-640LCLRE00` | F640LCL | Disponibilizar via regra os principais campos da tela antes de processar, para que o usuário consista as informações da forma que desejar. |
| `CTB-640LCLRE02` | F640LCL |  |
| `CTB-640LCTRE00` | Lançamentos contábeis | Disponibilizar via regra os principais campos da tela antes de processar, para que o usuário consista as informações da forma que desejar. |
| `CTB-640LCTRE02` | Lançamentos contábeis | Disponibilizar via regra os principais campos da tela antes de excluir, para que o usuário consista as informações da forma que desejar. |
| `CTB-640LCTRT01` | F640LCT | Disponibilizar via regra os principais campos dos rateios ligados ao lançamento contábil para que o usuário consista as informações da fo... |
| `CTB-640LLMNL01` | Lotes/Lançamentos Multifilial | Quando o identificador estiver ativo, todos os lançamentos do lote consultado serão apresentados na grade Lançamentos . Quando o cadastro... |
| `CTB-640LLMRE00` | Contábil > Contabilidade > Lançamentos > Lotes/Lançamentos Multi-Filial | Disponibilizar via regra os principais campos da tela antes de processar, para que o usuário consista as informações da forma que desejar. |
| `CTB-640LLMRE01` | F640LLM | Disponibilizar via regra os principais campos da tela ao processar cada registro, para que o usuário consista as informações da forma que... |
| `CTB-640LLMRE02` | F640LLM | Disponibilizar via regra os principais campos da tela antes de excluir cada registro, para que o usuário consista as informações da forma... |
| `CTB-640LLMRE03` | F640LLM | Disponibilizar via regra os principais campos da tela ao entrar em cada linha da grid, para que o usuário consista as informações da form... |
| `CTB-640LLMRE04` | F640LLM | Disponibilizar via regra os principais campos da tela ao sair de cada linha da grid, para que o usuário consista as informações da forma ... |
| `CTB-640LMFRE00` | F640LMF | Disponibilizar via regra os principais campos da tela antes de processar, para que o usuário consista as informações da forma que desejar. |
| `CTB-640LMFRE01` | F640LMF | Disponibilizar via regra os principais campos da tela ao processar cada registro, para que o usuário consista as informações da forma que... |
| `CTB-640LOTES01` | F640LOT | Quando existir este identificador, será permitido alterar lotes/lançamentos contabilizados, sem alterar os totais da capa de lote. |
| `CTB-640LOTES02` | F640LOT | Quando existir este identificador, será permitido inserir lançamentos em lotes contabilizados (Manuais e Integrados). |
| `CTB-640LOTRE00` | F640LOT | Disponibilizar via regra os principais campos da tela antes de processar, para que o usuário consista as informações da forma que desejar. |
| `CTB-640LOTRE02` | F640LOT | Disponibilizar via regra os principais campos da tela antes de excluir, para que o usuário consista as informações da forma que desejar. |
| `CTB-640OBSCP01` | Lançamentos contábeis | Quando o identificador estiver cadastrado e ativo, pode-se informar uma observação complementar nos lançamentos contábeis através das tel... |
| `CTB-640RAAUX01` | F640LLM | Quando cadastrado e ativo, a cada lançamento que tiver contas de débito/crédito que possuam rateio ou composição auxiliar, será exibida a... |
| `CTB-640RATFI01` | Rateio Contábil | Quando cadastrado e ativo, possibilita a visualização da conta financeira que está na tabela E640RAT, nas telas de rateio e na integração... |
| `CTB-640RATPC01` | Lançamentos contábeis | Ao alterar o valor de um lançamento contábil que tenha rateio, por padrão este novo valor é aplicado ao percentual de cada centro de cust... |
| `CTB-640RATRC01` | Lançamentos contábeis | Quando cadastrado e ativo, ao processar um lançamento contábil os valores registrados no rateio serão recalculados levando em consideraçã... |
| `CTB-643LCTHI01` | F643PRC. |  |
| `CTB-643LPGRE00` | F043LPG |  |
| `CTB-643LPGRE02` | F643LPG | Disponibilizar via regra os principais campos da tela antes de excluir, para que o usuário consista as informações da forma que desejar. |
| `CTB-643PRCRE00` | F643PRC | Disponibilizar via regra os principais campos da tela antes de processar, para que o usuário consista as informações da forma que desejar. |
| `CTB-643PRCRE01` | F643PRC |  |
| `CTB-645GRMVT01` | AutoCorrect | Quando cadastrado e ativo, na integração contábil serão gravados os relacionametos entre os lançamentos e seus movimentos de origem. |
| `CTB-645ICCOD01` | F048FCT e F645CTB. | quando cadastrado e ativo, serão executados os SQLs declarados nas variáveis disponibilizadas, no lugar dos SQLs fixos do sistema. Com is... |
| `CTB-645ICCOD02` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICCOD03` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICCOF01` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICCOM01` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICEST01` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICICO01` | F048FCT, F645CTB. |  |
| `CTB-645ICIMP01` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICIOD01` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICIVE01` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICIVZ01` | F048FCT, F645CTB. |  |
| `CTB-645ICPAG01` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICPAT01` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICPRJ01` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICREC01` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICTES01` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICVED01` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645ICVEF01` | F048FCT, F645CTB. | Quando cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's fixos do sistema. Com ... |
| `CTB-645INTFM01` | F645CTB | Possibilitar o fechamento automático dos módulos na integração contábil conforme a(s) filial(is) informada(s). Se este identificador de r... |
| `CTB-645INTRL01` | Contábil > Contabilidade > Integrações |  |
| `CTB-645INTVZ01` | Integrações contábeis |  |
| `CTB-645INTVZ02` | Integrações contábeis | Quando cadastrado e ativo, na integração contábil da área patrimônio somente serão processados os movimentos com valor maior que zero. De... |
| `CTB-645LOTED01` | Integrações contábeis | Quando cadastrado e ativo, ao abrir a tela F645CTB, o campo Lote Diário virá marcado e o parâmetro de retorno possibilita deixar o campo ... |
| `CTB-645LOTEF01` | Integrações contábeis | Quando cadastrado e ativo, ao abrir a tela F645CTB, o campo Lote por Filial virá marcado e o parâmetro de retorno possibilita deixar o ca... |
| `CTB-645LOTEM01` | Integrações contábeis | Quando cadastrado e ativo, ao entrar na tela F645CTB, o campo Lote por Movimento virá marcado e o parâmetro de retorno possibilita deixar... |
| `CTB-645LTMOV01` | Integrações contábeis | Este identificador tem a finalidade de definir um novo tipo de Lote. |
| `CTB-645LZERO01` | Integrações contábeis | Quando cadastrado e ativo, na integração contábil do Contas a Receber, quando o valor resultante da forma de contabilização estiver zerad... |
| `CTB-645LZERO02` | Integrações contábeis | Quando cadastrado, ativo e o valor resultante da forma de contabilização estiver zerado em todas as sequências da forma, o número do lote... |
| `CTB-645LZERO03` | F645CTB | Quando cadastrado e ativo na contabilização da apuração/cálculo de impostos permite que os movimentos de apuração sejam integrados mesmo ... |
| `CTB-645LZERO04` | F645CTB |  |
| `CTB-645LZERO05` | F645CTB | Quando cadastrado e ativo, na integração contábil de notas fiscais de entrada, quando o valor resultante da forma de contabilização estiv... |
| `CTB-645ORDMV01` | Contábil > Contabilidade > Integrações | Este identificador tem por finalidade permitir a ordenação dos lançamentos a serem gerados para a integração contábil, de todos os módulo... |
| `CTB-645ORDSQ01` | Integrações contábeis | Quando cadastrado e ativo, os lançamentos na integração contábil serão gerados seguindo a ordem das seqüências das formas de contabilização. |
| `CTB-645RATCO01` | Integrações contábeis |  |
| `CTB-645RECTB01` | F645CTB | Consiste se o bem origem do movimento do patrimônio possui indicativo de recuperação de PIS ou COFINS e possui valor base para cálculo e ... |
| `CTB-645SITRZ00` | Controladoria > Gestão de Contabilidade > Contabilidade > Integrações Contábeis;Controladoria > Gestão de Contabilidade > Contabilidade > Integrações Contábeis - Beta | Identificador quando ativo possuí finalidade retirar o filtro 'E660REZ.SITCFI=N' no SQL de busca das reduções que serão contabilizadas, d... |
| `CTB-645SQLTX01` | Integração contábil | Com este identificador ativo será criado um arquivo texto com o comando executado na integração contábil conforme os parâmetros informado... |
| `CTB-645TNSDG01` | F645CTB - Controladoria > Gestão de Contabilidade > Contabilidade > Integrações Contábeis | Quando cadastrado e ativo, será possível integrar movimentos dos dados gerais mesmo quando as transações informadas no filtro não estejam... |
| `CTB-645TNSMV01` | F645INT | Quando cadastrado e ativo, é possível informar as transações que o usuário deseja integrar na tela F645CTB. |
| `CTB-648LCCRE00` | F648LCC |  |
| `CTB-648LCCRE02` | F648LCC | Disponibilizar via regra os principais campos da tela antes de excluir, para que o usuário consista as informações da forma que desejar. |
| `CTB-650AJURE00` | F650AJU | Disponibilizar via regra os principais campos da tela antes de processar, para que o usuário consista as informações da forma que desejar. |
| `CTB-650AJURE01` | F650AJU | Disponibilizar via regra os principais campos da tela ao processar cada registro, para que o usuário consista as informações da forma que... |
| `CTB-650CAJRE00` | F650CAJ |  |
| `CTB-650CAJRE02` | F650CAJ | Disponibilizar via regra os principais campos da tela antes de excluir, para que o usuário consista as informações da forma que desejar. |
| `CTB-650COMPL01` | Lançamentos Manuais, Consulta Lançamentos, Liberação Exclusão de Lote, Consulta de Lançamentos Distribuídos, Exclusão de Lançamentos Distribuídos | Quando cadastrado e ativo, nas consultas dos lançamentos o campo do complemento será tratado com UpperCase, ou seja, o campo será compara... |
| `CTB-650CONCI01` | F650CCT. | quando cadastrado e ativo, ao selecionar o processo "Corrigir saldos contas auxiliares" na tela F650CCT, será habilitado o campo "Cta. Au... |
| `CTB-650CONCI02` | Conciliação Contábil (F650CCT) e web service com.senior.g5.co.mct.ctb.conciliacaosaldos. | quando ativo, permite fazer a conciliação contábil **mensalmente**. |
| `CTB-650CONLC02` | F650PLT | Tem a finalidade de realizar a consistência via regra na exclusão dos lotes contábeis. Ao clicar no botão "Processar" com a opção "Exclui... |
| `CTB-650CORFX01` | Consultas de Orçamentos | O identificador tem como objetico não fixar as colunas na grade de orçamentos. |
| `CTB-650EXMAN01` | F650PLT | Possibilita excluir lotes com seus respectivos lançamentos e rateios fisicamente da base de dados. |
| `CTB-650INGER01` | Inversão Gerencial | Qando cadastrado e ativo, a tela de inversão gerencial exibirá as colunas "Saldo Atual do Orçamento" e "Percentual deste saldo". Será con... |
| `CTB-650INGER02` | Inversão Gerencial | Quando cadastrado e ativo, ao clicar no botão "Imprimir" exibirá uma tela com todos os relatórios gerenciais disponíveis. |
| `CTB-650INGER03` | Inversão Gerencial | Quando cadastrado e ativo, exibirá na tela a opção para agrupar contas que possuam a mesma classificação resultante. |
| `CTB-650INGER04` | Inversão Gerencial | Quando cadastrado e ativo, serão disponibilizados, através da função BuscaDadosInvGerencialMensal, os valores realizados por mês conforme... |
| `CTB-650INGER05` | Inversão Gerencial | Quando cadastrado e ativo, o campo "Resp. C. Custo" será exibido na tela, que servirá como filtro para selecionar os centros de custos po... |
| `CTB-650INGER06` | Inversão Gerencial | Quando cadastrado e ativo, na tela de inversão gerencial será disponibilizada a coluna "Saldo Anterior Realizado" na grade do Plano Resul... |
| `CTB-650ORCNT01` | Orçamentos contábeis | Quando cadastrado e ativo, nas telas F650ORC e F650OCC será habilitada a opção "Consistir natureza da conta". Quando desmarcada, pode-se ... |
| `CTB-650ORCTA01` | F650ORC |  |
| `CTB-650PLTRE00` | F650PLT | Disponibilizar via regra os principais campos da tela antes de processar, para que o usuário consista as informações da forma que desejar. |
| `CTB-650PLTRE01` | F650PLT | Disponibilizar via regra os principais campos da tela ao processar cada registro, para que o usuário consista as informações da forma que... |
| `CTB-660INTDT01` | F660INT. | Com o identificador ativo, o sistema realiza a integração de tributos processando os dados em blocos separados por dia, reduzindo o uso d... |
| `CTB-669ECDI250` | SPED ECD (F669ECD). | estando ativo, deixa a geração dos registros I200 e I250 da tela F669ECD mais rápida quando a lista de prioridades estiver parametrizada. |
| `CTB-669ECDVC01` | SPED ECD (F669ECD) e SPED ECF (F669ECF). | quando o identificador estiver cadastrado e ativo, os registros **I051** (Plano de Contas Referencial) do SPED ECD e **J051** (Plano de C... |
| `CTB-669SQLRA01` | SPED ECD (F669ECD). | quando este identificador estiver cadastrado e ativo, o comando SQL referente à busca das informações dos registros **I200** e **I250** i... |

## CTC - Contabilidade de Custos

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `CTC-000CCFIL01` | Contabilidade de Custos por Filial | Possibilitar ao usuário a geração da contabilidade de custos por filial, gerando conjuntos de tabelas independentes para cada filial. |
| `CTC-000TNSER01` | — | Buscar na regra quais as transações de compra de itens de serviços que não devem ser consideradas nas rotinas que buscam o preço de mater... |
| `CTC-622CONFI01` | — | Quando cadastrado e ativo, nas rotinas de Consulta Valorizada de Ficha Técnica e na de Cálculo do Custo Padrão há a possibilidade de ser ... |
| `CTC-626FATVH01` | F626DCD | O uso deste identificador é associado a uma regra, na qual o usuário poderá definir um fator para considerar o Valor Histórico. Por exemp... |
| `CTC-626VLRHI01` | F626DCD - Contabilidade de Custos | Com este identificador ativo, será possível através da variável disponibilizada, informar quais são as empresas que deverão ser considera... |
| `CTC-630ORIES01` | F630GSE, F631CRM, F631GTR, F634GCR | O objetivo deste identificador de regras é possibilitar filtrar os produtos por "Espécies de Origens", esse filtro será informado na tela... |
| `CTC-630PCCBL01` | F630TPC | Este identificador tem como finalidade permitir liberar a reabertura de período da Contabilidade de Custos mesmo que existam diferenças d... |
| `CTC-630SEFAM01` | — | Com este identificador ativo, podem ser definidas famílias de produtos que não serão consideradas na Geração de Saldos de produtos por Es... |
| `CTC-630SPENI01` | F630GSE | Com este identificador ativo, na geração do Saldo de Produtos por Estágio não será somada ao saldo do Estágio/Centro de custo, a quantida... |
| `CTC-630SPESA01` | F630GSE | Com este identificador ativo, na geração dos Saldos de Produtos por Estágio, quando a OP possuir apenas um estágio, não tenha sido finali... |
| `CTC-631AGROC01` | F631CRM | Por padrão, na apuração do consumo real de materiais/serviços, quando existe mais de uma "O.P." ligada a uma única ordem de compra de ser... |
| `CTC-631BXANI01` | F630GSE | Se existir este identificador, a Contabilidade de Custos irá considerar que origens cujo parâmetro "O.P./O.S. Tipo Baixa Componente" for ... |
| `CTC-631CCUTE01` | Geração do Consumo Real de Tempo e Consumo Padrão de Tempo | Quando existir este identificador, na Geração do Consumo Real de Tempo e Consumo Padrão de Tempo considerando que este não é por estágio,... |
| `CTC-631CMCAG01` | F631GSC | Com este identificador ativo, o sistema vai gravar agrupadamente os itens de Consumo Padrão de Materiais (E631CMC), sem identificar Orige... |
| `CTC-631CPSEQ01` | Movimentos a Custo Padrão ou Custo Ajustado | Pegar Custo Padrão de mais de uma tabela, conforme seqüência definida pelo usuário. |
| `CTC-631CPTAG01` | F631GSC | Com este identificador ativo, o sistema vai gravar agrupadamente os itens de Consumo Padrão de Tempo, sem identificar Origem e Ordem de P... |
| `CTC-631CRCRT01` | Geração do Consumo Real de Tempo | Quando existir este identificador, na Geração do Consumo Real de Tempo, quando não existe apontamento de tempo na O.P. é utilizado o temp... |
| `CTC-631CRMPA01` | Consumo Real de Materiais | Se existir este identificador, na geração do Consumo Real de Materiais podem ser usados consumos padrões como se fossem consumos reais, q... |
| `CTC-631CRTPA01` | Consumo Real de Tempo | Quando este identificador estiver ativo, mesmo que exista algum apontamento de tempo no Chão de Fábrica, o mesmo será desconsiderado, ou ... |
| `CTC-631CRTPO01` | F631GTR | Quando este identificador estiver ativo, na Geração do Consumo Real de Tempo, tabela tipo 33, embora denominada Consumo Real de Tempo, se... |
| `CTC-631CRTPO02` | Geração do Consumo Real de Tempo | Permitir a busca dos apontamentos de consumo real de tempo em uma tabela de usuário. |
| `CTC-631GEMCP01` | Geração de Movimentos a Custo Padrão | Se existir este identificador, na Geração de Movimentos a Custo Padrão, serão ignorados os parâmetros "Tabela de Custo Padrão" e "Tabela ... |
| `CTC-631OFGNG01` | F631GSC | Quando este identificador estiver ativo, não serão abertos por Grupo de Natureza de Gasto (GNG), os registros de Movimentos a Custo Padrã... |
| `CTC-631SELFA01` | F631CRM | Deverá estar ativo e ligado a uma regra que contenha o código das famílias dos componentes Comprados que deseja desconsiderar na tela F63... |
| `CTC-631TAXNG01` | F631TXR | Com este identificador ativo e ligado a uma regra, é possível o usuário calcular a taxa de custo dos processos aberto por naturezas de ga... |
| `CTC-631TNSPR01` | Geraçao Consumo Real de Materiais | Este identificador tem como finalidade habilitar o campo "Transações saída para Produção" na tela de Geração do Consumo Real de Materiais... |
| `CTC-632DESRE01` | F632AMN | Este identificador de regras permite considerar todo o custo de uma ordem de produção apenas para o produto de 1ª qualidade, quando nesta... |
| `CTC-632ESCMI01` | Cálculo do Custo Padrão | Se existir o identificador, não exibirá as críticas de Falta de Custo Padrão para os Produtos Mistos no processo do Custo Ajustado. Atua ... |
| `CTC-632METAP01` | F632AMN. | No processo padrão da tela F632AMN, quando a tabela tipo "30 - Custo Ajustado dos Produtos" está configurada com o método de apropriação ... |
| `CTC-632MNDEC01` | F632AMN, F621ACP, F632ACP, F634ACC | Este identificador tem como finalidade arredondar para duas casas decimais após a vírgula os valores do CMH-Acabado dos produtos durante ... |
| `CTC-632MTAPR01` | F632AMN. | Calcular via regra, os valores relativos à cada O.P. que compõe o custo do produto no período definido na tabela "30 - Custo Ajustado dos... |
| `CTC-632NVEND01` | Custo não Integrado - Custo Alternativo | Se existir este identificador, na geração do Custo Alternativo serão atribuídas as quantidades de produtos em processo, vendidos e acabad... |
| `CTC-632ORDFI01` | Custo Ajustado Multiníveis | Este identificador tem funcionalidade quanto o tipo de processamento é "P" (Processo). É possível definir a ordem de processamento das fi... |
| `CTC-632ORINP01` | F632AMN | Com este cadastrado, ativo e ligado a uma regra, é possível desconsiderar determinados níveis de origem durante o processamento do custo ... |
| `CTC-632PERDA01` | F632AMN | Este identificador de regras tem como objetivo permitir que durante o processamento da rotina de cálculo dos custos dos produtos, caso ex... |
| `CTC-632PROAP01` | F632AMN | Na produção conjunta, que é a obtenção de 2 ou mais produtos numa mesma ordem de produção, para apuração do custo é possível definir algu... |
| `CTC-632RAPRC01` | F632AMN | Com este identificador ativo o sistema permite informar na regra associada um valor determinado para que seja rateado sobre o valor de pr... |
| `CTC-632REPDI01` | F632AMN | Este identificador de regras tem por finalidade permitir que as ordens de produção de reprocesso com vínculo, tenham seus respectivos cus... |
| `CTC-632SALIN01` | Geração do Custo Ajustado de Produtos | Este identificador tem como objetivo possibilitar ao usuário informar um valor de saldo inicial de produtos em processo, o qual será util... |
| `CTC-632TNSAD01` | F632AMN. | Com este identificador ativo, estando ele ligado a uma regra, é possível informar as transações adicionais que devem ser consideradas par... |
| `CTC-632UMPEL01` | F632GCA | Se existir, este identificador servirá para definir a Unidade de Medida destino a ser utilizada na exibição dos totalizadores das quantid... |
| `CTC-632VLRAC01` | F632AMN | Este identificador de regras tem como finalidade permitir que os custos de uma ordem de produção sejam atribuídos somente aos produtos ac... |
| `CTC-632VPAPM01` | F632CRR | Este identificador de regras altera a forma de cálculo do campo Produção Acabada a Preço Médio, na tela F632CRR, quando o parâmetro **Con... |
| `CTC-633OPCAN01` | Análise de Desempenho de OP | Com este identificador ativo, na tela de Análise de Desempenho de OP será considerado o Custo Padrão da(s) tabela(s) tipo "7" associada à... |
| `CTC-634INDCR01` | F634GCR | Com esse identificador ativo e ligado a uma regra é possível definir um índice para distribuição dos Custos de uma OP na rotina de Cálcul... |

## CTL - Contábil

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `CTL-603LCDPR01` | — | Disponibilizar um ponto de regra para permitir enviar determinadas informações a regra referente o registro Q100 do LCDPR e retornar algu... |
| `CTL-603LCDPR02` | — | Identificar títulos do contas a pagar que sejam de pagamentos de empréstimos e retornar apenas os valores dos encargos diversos, para apu... |
| `CTL-603LCDPR03` | — | Este identificador de regra tem por finalidade alterar o campo do valor da consulta de determinados títulos do contas a receber baixados ... |
| `CTL-603LCDPR04` | F603IML |  |
| `CTL-650DOCPF01` | Orçamento contábil | quando este identificador estiver ativo, cada vez que o orçamento contábil for atualizado, o orçamento das contas equivalentes (número da... |
| `CTL-650OCCRE00` | Controladoria > Gestão de Contabilidade > Contabilidade > Orçamentos > Por Centro de Custos (F650OCC) | O objetivo deste identificador de regra é possibilitar ao usuário a consistência dos campos "Código da Empresa, Código da Filial, Período... |
| `CTL-650ORCRE00` | F650ORC |  |
| `CTL-669I355001` | F669ECD |  |

## CUS - Custos

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `CUS-634ROPUS01` | F634GCR - Produção a Custo Real |  |
| `CUS-634SUCPR01` | F634CPR |  |
| `CUS-634VALIN01` | F634CDP | este identificador de regras foi criado para que fosse possível mostrar os valores dos intermediários na tela de resumo da tabela tipo 34... |

## ENG - Engenharia Produto

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `ENG-700ACEAE01` | Composição Exclusiva Multi-Nível (F120EMN) | Com este identificador ativo, mesmo após ter sido feita a explosão de necessidades de um item de pedido, será possível alterar a sua comp... |
| `ENG-700BLOMD01` | F700CMC | Este identificador tem por finalidade bloquear alterações no modelo quando o mesmo estiver com a situação ativa. |
| `ENG-700CBNES01` | Engenharia - Combinações | Identificador criado para consistências gerais e será chamado na criação, alteração ou exclusão de uma combinação. |
| `ENG-700CMPPE01` | Comp. Exclusivio Multi-Nível. F120EMN | Caso o identificador exista, ao processar a tela F120EMN a mesma irá verificar se existe algum componente marcado como pendente. Caso exi... |
| `ENG-700COCDE01` | Eng. Produto/Serviço - Modelo | Poder alterar a descrição das coordenadas dos componentes na tela Modelo, guia Seq. Componentes - Botão Coordenadas. |
| `ENG-700DPEST01` | F714DEM | Identificador utilizado na tela de duplicação de modelo/roteiro multi-nível para propor novos códigos e descrições de produto, modelo e r... |
| `ENG-700ERAMC01` | Comp. Exclusiva Multi-Nível e Cadastro de Modelos (F120EMN e F700CMC) | Quando este identificador estiver ativo, ao inserir/alterar/excluir componentes de um modelo ou da composição exclusiva multi-nível de um... |
| `ENG-700FMLCL01` | Registro de Formulas / Modelo | Identificador chamado pelo botão calcular da tela de registro de formulas. |
| `ENG-700FMLEX01` | — | Identificador chamado na exclusão de um componentes na tela de formulas. |
| `ENG-700FMLLN01` | Registro de Formulas / Modelo | Identificador chamado a cada gravação (saída) da linha de componentes na tela de registro de formulas. |
| `ENG-700IMPAX01` | Liga Modelo/Produto. | Caso existir identificador, no momento da ligação produto X modelo, os códigos forem os mesmos, o sistema irá importar todos os anexos li... |
| `ENG-700INIVA01` | Cadastro de Modelos, F700CMC, F900RST, função de programador AdicionaComponenteModelo e web service Com.senior.g5.co.mpr.eng.modelo.componentemodelo. | Permitir propor valores para seq. do modelo. |
| `ENG-700INTEX01` | Composição Produto/Serviço | Integração com programa externo nas telas "Análise de disponibilidade de Estoque para utilização nas O.Ps./O.Ss" e "Modelo (Composição do... |
| `ENG-700MODDESC` | — | Alterar as descrições dos campos da tela F700REG. |
| `ENG-700PRODE01` | — | Esse identificador é chamado no momento da geração do novo código do produto gerado pela tela de Combinação (F700CBN) ou pela tela de Ped... |
| `ENG-700PROUS01` | — | Esse identificador é chamado após a geração do novo código do produto (VSCodPro) gerado pela tela de Combinações, ou pela tela de Pedidos... |
| `ENG-700QTBAS01` | Composição Produto | Com este identificador cadastrado e ativo, o sistema não utilizara a quantidade base do modelo para cálculo da quantidade fixa e quantida... |
| `ENG-700RETCB01` | Geração de Combinações | Retornar número da última combinação gerada para um agrupametos de modelos com a mesma referência. |
| `ENG-700RETVE01` | — | Gerar código da versão do modelo/roteiro. Conceito de versões da ficha técnica. |
| `ENG-700TOTAT01` | — | Identificador chamado para retornar os valores das variáveis definidas no identificador ENG-700TOTPN01 (valores do painel). |
| `ENG-700TOTPN01` | Registro de Formulas / Modelo | Identificador chamado para exibir e definir as descrições do painel de totais da tela de registro de formulas. |
| `ENG-700VAVEM01` | F700CMC e F700FML. | realizar validações quando for gerada uma nova versão de modelo. Por meio de uma regra o usuário poderá pesquisar, por exemplo, se há Ord... |
| `ENG-700VDDCU01` | Duplicação de modelo e roteiro (F700DMP e F710DRP) | Este identificador tem por objetivo permitir que o usuário defina, através da sua regra, quais campos de usuário ( campos cujo nome inici... |
| `ENG-700VFMOD01` | — | Não permitir informar componente no cadastro de modelos que ainda não tenha uma estrutura criada. Ele se aplica somente a componentes pro... |
| `ENG-700VRFCO01` | Cadastro Modelo | Caso identificador estiver cadastrado e ativo, não irá permitir ativar modelo com componentes sem consumo para alguma derivação do modelo . |
| `ENG-705SUGES01` | Troca de Componentes/Subprodutos (F705TRC) | Alterar via regra o estágio e a sequência na grade Componentes/Subprodutos da tela F705TRC (executado quando, na tela, estiver marcada a ... |
| `ENG-710DEOPR01` | — | Este identificador de regras tem por objetivo montar a tela de operações calculadas do roteiro de produção. |
| `ENG-710FULFO01` | Ligação Ferramentas x Seq. Operacional | Criado identificador para permitir o usuário retornar quais ferramentas podem ser ligadas a seq. operacional além das informadas na ligaç... |
| `ENG-710LINPR01` | — | Este identificador de regras tem por objetivo executar alguma forma de cálculo a cada linha gravada. |
| `ENG-710PEROP05` | — | Consistir roteiro quando o mesmo possuir uma opção de sequência igual a 5 em uma determinada operação, para que todas as operações tenham... |
| `ENG-710RECTM01` | Roteiro Produção | Definir no centro de recurso os mesmos tempos que existem na operação, sendo que através desse identificador será possível buscar os temp... |
| `ENG-710TOTTM01` | — | Este identificador de regras tem por objetivo calcular uma operação e retornar os tempos p/ tela. |
| `ENG-710VAVER01` | F710CRP. | realizar validações quando for gerada uma nova versão do roteiro. Por meio de uma regra o usuário poderá pesquisar, por exemplo, se há Or... |
| `ENG-710VRFSE01` | Roteiro Produção | Esse identificador será chamado ao ativar um modelo ou roteiro. Desta forma o usuário poderá fazer suas consistências conforme sua necess... |
| `ENG-725VDCCR01` | F725CRE | Consistir os dados da tela de Cadastro de Centro de Recursos. |

## EST - Estoques

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `EST-000AVISA01` | F405GSA | Exibir uma mensagem de aviso ao usuário referente a demora do processo, caso nenhum campo filtro para a tela de solicitações de compra ag... |
| `EST-000COLOT01` | F213MLO | Possibilitar a consistência de alguns campos da tela F213MLO e fazer com que o usuário possa sugerir um novo lote. |
| `EST-000COMPL01` | — |  |
| `EST-000DEPUS01` | — | Permite consistir o usuário ativo com o depósito informado no atendimento da requisição de produtos. |
| `EST-000DTCAL01` | Cálculo do Consumo Médio | Este identificador tem por finalidade alterar o período(data inicial e data final) na rotina de agendamento de cálculo do consumo médio e... |
| `EST-000FECHA01` | — | Habilitar um conjunto de alterações para o fechamento de estoques. Estas alterações são : |
| `EST-000SEQOR01` | Geração de Requisições | Em empresas com grande volume de processamento na geração de requisições é inevitável que o tratamento multi-usuário efetue travamento de... |
| `EST-001MDTRF01` | F210TPA e F001TES. | Com o identificador ativo, no cadastro de transações de estoques (F001TES), o campo Transação Transferência passa a permitir o preenchime... |
| `EST-115COSFB01` | F115COS | Quando a opção **Documento a emitir**, da tela F115COS, for **Ticket** e esse identificador de regras estiver ativo, o ticket criado será... |
| `EST-135BLOTE01` | F135FCA e F135FCP | controlar os lotes utilizados nas cargas. Será chamado apenas quando houver lotes sem saldo. Com o identificador GER-000EUDLE01 ativado, ... |
| `EST-135BLOTE02` | F135FCA,F135FCP,F135IPC | Apenas fará algum sentido, se o Identicador "EST-135BLOTE01" estiver ativo (ver documentação). Este Identificador tem por objetivo inibir... |
| `EST-207ABRAM01` | Atendimento de Requisições(F210AME) | Trocar a forma de rateio da transação utilizada na requisição para: "Sem Confirmação". |
| `EST-207ATDRE01` | F440GNE. | Realizar ou não o atendimento automático das requisições de produtos no fechamento da nota fiscal de entrada. |
| `EST-207CFRAT01` | — | Este identificador possibilita a personalização de rateio de movimento de estoque gerado a partir do atendimento de requisições de materi... |
| `EST-207CONSI01` | — | Consistência gerais a serem feitas antes de se gravar uma Solicitação de Movimento de Estoque. |
| `EST-207CONSI02` | — | Consistências gerais a serem feitas antes de se gravar uma requisição. Tem o mesmo objetivo do indentificador EST-207CONSI01, com a difer... |
| `EST-207CONSI03` | F207EME \| F207RES \| F207LOT | Consistências gerais a serem feitas após gerar uma requisição de produto ou serviço, antes da transação no banco de dados efetuar a grava... |
| `EST-207CONSI04` | F207EME \| F207LOT | Permitir ou não a inserção de algum item da requisição através da variável de retorno "EstAPermite". Caso o produto seja impedido de ser ... |
| `EST-207CONSI05` | — | Permite configurar uma regra para desabilitar a manutenção de requisição de materiais, isto é, para impedir a inclusão, alteração e exclu... |
| `EST-207EMAIL01` | — | Enviar e-mail quando há a criação, aprovação, desaprovação, exclusão, cancelamento de requisições de produtos. |
| `EST-207EMAIL03` | — | Tela de Atendimentos de Requisições de Serviços - envia E-Mail para o usuário solicitante quando uma requisição for cancelada por complet... |
| `EST-207ESTTR01` | F210ARC | Sugestão de depósito de destino para as requisições que possuírem uma transação de transferência vinculada. O identificador será executad... |
| `EST-207EUDLE01` | F210AME | Sugerir lotes ao mostrar nas requisições que possuírem depósito de origem informado, ou também ao informar depósito de origem de forma ma... |
| `EST-207FILEM01` | F207APR, F207CEM, F207EME, F207LOT e F207AME | Considerar a abrangência de filial cadastrada via SGU para o usuário ativo. |
| `EST-207GESOL01` | F207RES, F207ARS, F207APR | Atender automaticamente as requisições de serviço, colocando-as em processo de compras( tipo 3) e gerando uma solicitação de compra. Toda... |
| `EST-207INIME01` | — | Consistir a informação correta dos números de requisição, inibindo sequências de números incorretas. |
| `EST-207IREQI01` | ? | Permite configurar uma regra para informar a transação das requisições de materiais a serem gravadas no banco de dados do Gestão Empresar... |
| `EST-207LEIBA01` | F210ARC | Ler o código informado no campo Cod. Barras da tela F210ARC. Para utilizar a tela F210ARC, é obrigatório que seja retornado qual produto ... |
| `EST-207NAOGE01` | — | Utilizar produtos de passagem direta via nota fiscal sem obrigar a criação de uma requisição de movimento de estoque pela tela F210REQ. |
| `EST-207NAOSU01` | — | Não sugerir conta financeira, conta contábil e centro de custo. |
| `EST-207NAOSU02` | F207EME,F207LOT,F207RES | Não seja sugerido o centro de custo em nenhuma tela de requisições. Esta informação ficará em branco até que o usuário faça alguma altera... |
| `EST-207NOSEQ01` | — | Não permitir ao sistema gerar novas sequências de requisições, quando se informa vários centros de custo na janela de rateio. Os rateios ... |
| `EST-207NUDOC01` | F210AME | Retornar o nome do campo de usuário criado pelos usuários para o controle e manutenção do número do documento a ser levado para o movimen... |
| `EST-207NUMEM01` | — | Consistir o número da requisição de estoques. |
| `EST-207PEDSU01` | F210AME | Gerar movimentos de estoque via atendimento com data inferior as datas de aprovação/geração de uma requisição |
| `EST-207PRCPR01` | F207APR, F207ARP, F207EME, F207LOT, F103RPS | Chamar o processo de atendimento automático da requisição, colocando-a em "Processo de Compras" e efetuar a geração da Solicitação de Com... |
| `EST-207SUGVA01` | F207EME \| F207LOT \| F207RES | Tem como objetivo sugerir através das variáveis de retorno as informações referentes à "Qtd. Pedida", "Res. Estoque", "Depósito", "Cta. F... |
| `EST-207TIPLE01` | F210AME, F207DRP | Escolher o tipo de leitura desejado para a tela de atendimento de requisições de produtos e para a tela de devoluções de requisições de p... |
| `EST-207TRSOL01` | F210AME | Alterar a transação da solicitação de compras que estiver sendo gerada para um item que entrar em processo de compras. |
| `EST-207USUEM01` | — | O campo "Usuário de Geração" da solicitação de movimento de estoque só será atualizado na inclusão, caso contrário será atualizado a cada... |
| `EST-207VACPR01` | F210ASE | Ao clicar no botão Mostrar da tela de atendimento de requisições de serviços o sistema jogará automaticamente o valor aprovado para o val... |
| `EST-207VLAPR01` | F207APR, F207ARP, F207ARS, F207RES, F207EME | Consistir o valor da aprovação ou a quantidade da aprovação ou ainda o preço do item da requisição de produto ou serviço e retornar ao si... |
| `EST-210ALDER01` | F210CPN | Alterar a derivação do produto que está sendo movimentado pela tela de conferência de produto numerado. |
| `EST-210ALTED01` | — | Alterar a Data e Hora de digitação de determinado movimento de Estoque. Para conseguir alterá-lo o movimento precisa ser totalmente manua... |
| `EST-210ALTLO01` | F210AME | Alterar o código do lote do movimento de entrada ao atender uma requisição de transferência. |
| `EST-210ALTVA01` | Transferências de Estoques, F215Fes | Nos movimentos gerados por transferência permitirá que o valor de uma transferência realizada com um preço médio muito baixo (menor ou ig... |
| `EST-210ANREP01` | F211ARE, F211ARO, F211ARA e F816GRP. | Modificar o cálculo da quantidade a comprar, através das variáveis disponibilizadas. |
| `EST-210ANROC01` | F211ARO e F211ARA | Alterar a quantidade pedida e a data de entrega da mercadoria no momento de gerar os itens da ordem de compra. |
| `EST-210ATREP01` | F210AME | Calcular a quantidade a ser comprada via regra. A chamada será feita nos pontos do sistema onde a quantidade é sugerida automaticamente p... |
| `EST-210BTSUG01` | F000DLS | Trabalha junto com o identificador EST-210INFSE01 para não sugerir as séries automaticamente. Somente se for clicado no botão sugere séri... |
| `EST-210CAENT01` | — | Calcular automaticamente os valores de entrada provenientes de uma transferência entre produtos. |
| `EST-210CCOTA01` | F210MVP/F210LOT | Obter a conta contábil do produto nas telas de movimetos de estoque. |
| `EST-210CLDEP01` | F210EST | Tem por objetivo consistir a ligação do produto/derivação ao depósito. |
| `EST-210CONAG01` | Movimentos de Estoque | consistir o movimento de estoque que está sendo gerado e permitir alterar o valor de quatro campos: **CODLOT**, **DATMOV**, **DATDIG** e ... |
| `EST-210CONDG01` | Movimentação de Estoque | Este identificador tem por finalidade disponibilizar todas as informações do movimento de estoque após a geração de qualquer tipo de movi... |
| `EST-210CONFO01` | Movimentos de estoque via NFC/NFV/OC | Finalidade: Fazer com que o movimento de estoque gerado a partir de uma nota fiscal de saída, nota fiscal de entrada ou ordem de compra n... |
| `EST-210CONGR01` | F210TPA | Controlar os diversos tipos de transferências entre produtos (1 p/ N , N p/ 1 , N p/ N, 1 p/ 1). |
| `EST-210CONLT01` | F000DLS | Consistir a data de validade produtos/séries controlados por lote via identificador de regras. Identificador disponível somente na distri... |
| `EST-210CONSI01` | — | Fazer consistências diversas com os dados do movimento no momento em que ele é inserido. Na exclusão somente será executado ao excluir ma... |
| `EST-210CONSI02` | — | Consistir informações da requisição no seu atendimento. |
| `EST-210CONVO01` | Embalagem de Estocagem - Volume | Consistir os dados informados na tela antes de fechar o volume. |
| `EST-210COPRD01` | F210BLO | Definir se poderá ou não desbloquear produtos. Caso o retorno da variável VSPermite = "S", então será permitida o desbloqueio do produto,... |
| `EST-210CRIFE01` | — | quando o sistema gerar qualquer tipo de movimento de estoque de saída, o valor disponível em estoque será calculado com base no parâmetro... |
| `EST-210CSTLT01` | F440GNE | Fazer a alteração do status do lote ao efetuar o processamento de uma nota fiscal de entrada. O status do lote deverá ser sugerido via re... |
| `EST-210CTRHD01` | Será executado para qualquer rotina que gere movimento de estoques (telas ou web service). | Garantir que o campo horário de digitação (E210MVP.HORDIG) ficará correto em relação a lógica de geração dos movimentos de estoques. |
| `EST-210DATMV01` | — | Permitir movimentos de notas fiscais de saída com data maior que a data atual. |
| `EST-210DEENT01` | Todas que geram MVP. | Sugerir um depósito padrão para o movimento de entrada quando é proveniente de uma nota fiscal de saída através de uma transação de trans... |
| `EST-210DEPPA01` | — | Sugerir o depósito padrão do produto, na tela de movimentos agrupados de estoque. O sistema irá buscar esta informação do cadastro do pro... |
| `EST-210DIFVA01` | F210TPA | Fazer transferências "entre produtos", com a soma dos valores diferentes, ou seja, o valor total das saídas não precisa mais ser igual ao... |
| `EST-210DIQTD01` | F000DLS | Escolher a forma que as quantidades serão distribuídas na grade de distribuição de lotes quando o botão "Intervalo de Lotes" for clicado.... |
| `EST-210EMAFI01` | F210EMA. | Esta regra permite filtrar transações, produtos, derivações e depósitos para que estes não façam parte da análise de estoque mínimo autom... |
| `EST-210EMAOT01` | F210EMA. | É utilizado na análise de estoque mínimo automatizado, para desconsiderar os meses considerados como Outliers da análise. Para saber mais... |
| `EST-210EMBFE01` | F210EMB, F210FEC | Ao fechar uma embalagem, esta ficará com a situação 2 (fechada). Nesta situação o sistema não faz a movimentação de saída (independenteme... |
| `EST-210EMBFE02` | F210EMB | Consistir informações da embalagem no fechamento da mesma. |
| `EST-210ENCLA01` | — | Carregar os rateios provenientes de uma nota fiscal de entrada para a movimentação de estoque, quando se tratar de um produto de passagem... |
| `EST-210EPMPF01` | — |  |
| `EST-210FIEMB01` | — | Fazer consistências no momento da finalização da embalagem de estocagem ou quando a mesma é reaberta. |
| `EST-210GERSR01` | Geração Intervalos Numeração | Gerar os números de série de forma diferenciada do sistema, através da regraassociada. |
| `EST-210GUARD01` | F210TPA | Carregar os itens desmarcados na tela de tranferência de produtos, opção entre depósitos, novamente para a grade após o processar. |
| `EST-210HRTNF01` | — | Garantir que o horário de digitação em movimentos de saída e entrada provenientes de transferências entre produtos e depósitos sejam iguais. |
| `EST-210INFSE01` | F000DLS | Usado na distribuição de séries em todo o sistema. Se for uma saída o sistema não fará a sugestão de séries. |
| `EST-210INTNU01` | — | Permitirá a interface com o dispositivo numerador através da tela de interface |
| `EST-210IRRAD01` | F210DPD | Definir se os produtos devem ou não ser processados na tela de distribuição de produtos nos depósitos. |
| `EST-210KITSE01` | — | Não sugerir os números de série automaticamente quando for feito um movimento de estoque de um componente de um produto KIT, quando não f... |
| `EST-210LEIBA01` | F210LOT | Efetuar a leitura de um código de barras com até 128 posições que é tratada por uma regra desenvolvida pelo cliente e que retorna valores... |
| `EST-210LEIBA02` | F210FEC | Efetuar a leitura de um código de barras com até 50 posições que é tratada por uma regra desenvolvida pelo cliente e que retorna valores ... |
| `EST-210LIDEP01` | — | Fazer ligações automáticas de produtos ao depósito quando um movimento de estoque de entrada é gerado a partir de uma transferência, atra... |
| `EST-210LIDEP02` | F210TPA (Código de Barras). | Informar produtos que não estão ligados ao depósito destino nas transferências utilizando código de barras. |
| `EST-210LOTE01` | — | Utilizar lote informado via regra, para quando o produto não possuir máscara de lote e estiver sendo movimentado com campo "CodLot" em br... |
| `EST-210MEDON01` | F210MVP,F215FES | Manter sempre o preço médio atualizado. Para que isso ocorra, o identificador força que o sistema faça um fechamento dos estoques a cada ... |
| `EST-210MEDON02` | — | Permitir que o preço médio seja calculado sem a necessidade de ser feito um fechamento dos estoques, mantendo sempre o preço médio atuali... |
| `EST-210MEDON03` | F210MVP, F215FES | Manter sempre o preço médio atualizado. O identificador força que o sistema faça um fechamento dos estoques a cada movimento de entrada (... |
| `EST-210MODSR01` | Numeração de Produtos(Série)Confirmação de Numeração | Informar um modelo de relatório diferente do padrão, no momento da geração do relatório, ao final do processamento. |
| `EST-210MODSR02` | Entrada de Produtos Numerados em Estoque | Selecionar um modelo de relatório diferente do padrão, no momento da geração do relatório de informações da embalagem quando esta é fecha... |
| `EST-210MSOVL01` | Movimento de Estoque (Entrada) | Desbloquear movimentos no estoque para produtos sem estoque disponível quando: |
| `EST-210NAOSU01` | Movimentação de Estoque | Fazer com que a tela de distribuição de séries seja aberta em branco, quando um movimento de estoque estiver sendo gerado, e as respectiv... |
| `EST-210NAOSU02` | F210MVP,F210LOT | Fazer com que o centro de custo não seja sugerido em nenhuma tela de movimentos de estoque. Esta informação ficará em branco até que o us... |
| `EST-210NAOSU03` | F000DLS | Tem a mesma funcionalidade do identificador EST-210NAOSU01, porém para a rotina de Nota Fiscal de Entrada: |
| `EST-210NATPM01` | F215FES. | Ao ser executada uma atualização ou fechamento de estoques, com esse identificador ativo, o preço médio na derivação do produto (tabela E... |
| `EST-210NCQTE01` | F210TPA | Estando ativo, o identificador permite a transferência de um lote sem a quantidade disponível, não considerando as reservas já feitas. |
| `EST-210NRDOC01` | — | Exibir mensagem via regra. |
| `EST-210NUDOC01` | — | Informar ao usuário quando o mesmo estiver digitando manualmente um movimento de estoques e informar um número de documento já existente ... |
| `EST-210OBRAF01` | Embalagem de Estocagem - Volume | Obrigar a aferição antes de executar a pesagem do produto. |
| `EST-210OMIPR01` | F211ARE,F211ARO,F211ARP,F21RAV,F211ARA | Omitir determinados produtos a serem exibidos nas telas de análise de reposição: |
| `EST-210PERCC01` | F210CCA | Informar um período na qual o corte de reposição será feita. O identificador disponibiliza no cabeçalho da tela um novo campo do tipo dat... |
| `EST-210PERSA01` | F210ISA | Habilitar os filtros "Período Inicial / Final" e "Depósito" para que a inicialização seja feita de forma parcial e não apenas por filial ... |
| `EST-210PODBL01` | — | Quando for feita uma entrada no estoque do tipo BL ou NB, seja dado um aviso, quando a qde. do movimento ultrapasse a quantidade disponív... |
| `EST-210PRDEP01` | F210EST e F210LPD | Terá por objetivo possibilitar ao usuário informar valores padrões para os campos da Ligação Produto X Depósito. |
| `EST-210PRERE01` | — | alterar o preço de reposição calculado pelo sistema no momento de gerar um movimento de estoque. |
| `EST-210QTANT01` | — | Não atualizar o campo QTDANT na entrada de um movimento. |
| `EST-210QTDUS01` | — | Permitir gravar o campo QTDRES da tabela E210MVP no campo de usuário criado nesta tabela, através de um comando SQL que deverá ser criado... |
| `EST-210QTLOT01` | F210EMB, F210FEC, F210TBC | O identificador estando cadastrado e ativo, terá as seguintes funcionalidades: |
| `EST-210QTRAN01` | F210TPA | Consistir as quantidades dos movimentos de entrada (grid "Para(Movimento Entrada)") com a quantidade do movimento de saída(grid "De(Movim... |
| `EST-210QTRAN02` | F210TPA | Buscar valores para os campos QtdOri e QtdTrf da grade DE(Movimento Saída) da tela F210TPA. Este identificador será executado ao clicar n... |
| `EST-210QTRAN03` | F210TPA | Disponibilizar as quantidades transferidas na tela F210TPA. Será executado no botão Processar, mas somente se na tela associada ao botão ... |
| `EST-210QTRAN04` | F210TPA | Sugerir na grade dos produtos, o lote que que deve ser utilizado nas transferências entre depósitos. |
| `EST-210QTRAN05` | — | Consistir as quantidades dos movimentos de entrada com a quantidade do movimento de saída ao processar as transferências entre produtos. ... |
| `EST-210QTRAN06` | F210TPA | Permitir ou não a inclusão de algum registro na grade de origem "De(Movimento Saída)". O identificador é executado ao clicar em "Mostrar"... |
| `EST-210QTRAN07` | F210TPA | Tem como objetivo sugerir o lote na grade "De (Movimento Saída)" que deve ser utilizado nas transferências entre produtos. |
| `EST-210QTRAN08` | F210TPA | Tem como objetivo sugerir o lote na grade "Para (Movimento Entrada)" que deve ser utilizado nas transferências entre produtos. |
| `EST-210RCLDP01` | F210LDP | Tem por objetivo consistir a ligação do depósito ao produto/derivação. |
| `EST-210RCLPD01` | Ligação produto ao depósito (F210LPD) | Por meio de uma regra ligada a este identificador, será possível realizar consistências no processo de ligação Produto x Depósito. |
| `EST-210RCMEI01` | F211CPE | Permitir que o relatório padrão chamado pela tela F211CPE, quando o tipo de relatório (filtro "Relatório") for "Impostos" através do botã... |
| `EST-210RCVME01` | — | retornar o valor do movimento de estoques via regra para que seja possível alterar o valor de movimento que está sendo gerado. |
| `EST-210ROWNU01` | F215FES | Foi implementado um novo procedimento interno para melhoria na busca dos saldos anteriores em estoque. Este procedimeto, é utilizado em t... |
| `EST-210SGLWS01` | — |  |
| `EST-210SGSER01` | F000DLS | Informar valores para as variáveis VSPREFIXO, VSPOSICOES, VSINICIO, para que com base nisto, o sistema monte as séries como sugestão para... |
| `EST-210SUCCU01` | — | Permite alterar o centro de custo do movimento na tela de transferência. Foi feita uma alteração para que através do identificador de reg... |
| `EST-210SUGCA01` | Embalagem de Estocagem - Volume | Sugerir os campos: OpeVol, SecVol e CodDep via regra, ele será chamado quando um volume for informado. |
| `EST-210SUGPD01` | — | possibilita a sugestão de itens de destino na tela de transferência entre estoques (F210TPA). É chamado ao inserir um item de origem quan... |
| `EST-210SUGVA01` | — | Sugerir a duplicação dos campos Série e Lote para a tela F210EMB. |
| `EST-210SUMIN01` | F210DPD | Permitir que o usuário possa definir qual a quantidade mínima/máxima e múltipla para ser utilizada na tela de Irradiação de Produtos no m... |
| `EST-210SUMOV01` | F210TPA, F210TBC | Nos processos de transferênia entre depósitos realizados pelas telas [Suprimentos > Gestão de Estoques > Controle de Estoque > Transferên... |
| `EST-210SUTNS01` | F211RAV,F210DPD,F211ADA | Permitir que as transações de Solicitações de Compra e Ordens de Compra possam ser sugeridas pelo usuário nas telas: Análise de Reposição... |
| `EST-210SUVLT01` | — | Calcular e gravar na tabela de estoques, via regra, a data de validade do lote do produto quando esta data não for informada na tela. Se ... |
| `EST-210SUVLT02` | — | Calcular e gravar na tabela de estoques, via regra, a data de validade do lote do produto. Se o identificador estiver ativo, o identifica... |
| `EST-210TIPLE01` | F210FEC | Escolher o tipo de leitura desejada. O retorno deste identificador, será levado em consideração para as leituras, ou seja, o escolhido na... |
| `EST-210TNSPD01` | — | Informar a transação de saída para produtos de passagem direta. |
| `EST-210TNSPD02` | Nota fiscal de saída por devolução de passagem direta. | Informar transação de entrada do movimento da nota fiscal de saída por devolução de passagem direta. |
| `EST-210TNSTF01` | F210TPA | Tem como objetivo sugerir uma transação de saída (e consequentemente a transação de entrada) diferente da transação informada no cabeçalh... |
| `EST-210TRACO01` | — | Gerar uma entrada e em seguida uma saída no estoque normal, ao fazer uma saída consignada a fornecedor. |
| `EST-210TRANS01` | F210TPA | Especificar através qual o destino da transferência (empresa, filial, produto, derivação, depósito) |
| `EST-210TRANS02` | F210TPA | Efetuar a transferência da quantidade reservada do estoque quando esta estiver comprometida com a produção e efetuar a alteração dos depó... |
| `EST-210TRAUS01` | E210MVP, E210LOT | Não permitir alteração do usuário responsável, nas telas de movimentação manual e agrupada. |
| `EST-210TRDEP01` | F210TPA | Consistir os depósitos de origem e destino informados. A partir da variável "VSBloIte" pode-se bloquear a transferência e avisar ao usuário. |
| `EST-210UNISE01` | — | Quando ativo, o controle de série passa a ser feito por empresa, ou seja, a série deixará de ser única por produto e passa a ser única po... |
| `EST-210UPREM01` | Entrada de Produtos Numerados em Estoque | Utiliza a primeira e mais antiga embalagem em formação encontrada para inserir o produto, caso não seja encontrada nenhuma embalagem em q... |
| `EST-210USDEP01` | F210CCA | Consistir o usuário ativo e o depósito utilizados, podendo bloquear ou não a utilização do depósito para o usuário ativo. |
| `EST-210USUMO01` | F210LOT | Mostrar uma tela gerada, onde o usuário possa informar campos de usuário. |
| `EST-210USUSO01` | — | habilitar campo de usuário solicitante na tela F210Ame, a fim de poder modificá-lo. |
| `EST-210VADUP01` | — | Este identificador tem como objetivo validar se já existe movimentação de estoque com os parâmetros passados para o identificador de regras. |
| `EST-210VLUNI01` | F210LOT | Este identificador tem por objetivo permitir a sugestão do valor unitário do produto na entrada de estoques da tela F210LOT, estando disp... |
| `EST-210VUNMO01` | F210LOT | Habilitar na grade "Produtos Movimentados" o campo "Valor Unitário" para que o mesmo possa ser informado pelo usuário e utilizado no cálc... |
| `EST-211ALPED01` | F211ADA | Alterar a transação de produto do item bem como a tabela de preço do mesmo no momento da geração do pedido de devolução (devolução ao for... |
| `EST-211ALPED02` | F211ADA | Permitir alterar a transação de produto dos dados gerais na tela F211ADA aberta a partir do botão Análise da tela F211ADF. Executado no m... |
| `EST-211ANARE01` | F211ADA | Este identificador, quando ativo, não sugere nenhuma quantidade (deixa zerado) o campo "Qtde. Comprar" da grade "Solicitação de Compra do... |
| `EST-211APSRV01` | F211RSV | Não gerar aprovação multinível para as solicitações geradas a partir da tela de análise de reposição sobre as vendas do dia. |
| `EST-211AQTCO01` | F211RAV | Consistir se o usuário ativo poderá ou não alterar o campo "Qtd a Comprar" da grade da tela. Caso o retorno da variável VSPermite for igu... |
| `EST-211ARRNE01` | F211ARE, F211ARO, F211ARA | Fazer com que o tipo do arredondamento das quantidades seja definido como "Nenhum". |
| `EST-211CUSUA01` | F211RAV | Fazer com que um campo de usuário seja retornado para o sistema para fins de controle e ordenação dos itens de ordens de compra gerados p... |
| `EST-211DEFAR01` | — | Retornar na variável "VSQtdDec" a quantidade de casas decimais utilizadas no cálculo do consumo médio. |
| `EST-211DEPAT01` | — | Buscar os depósitos que estão ativos na consulta de posição dos estoques de produtos, não obrigando o usuário a entrar na tela de seleção... |
| `EST-211DEPRE01` | Reposição de estoques (F211ARE / F211ARO / F211ARP) | Informar qual o depósito de inspeção a ser considerado, sendo que por padrão será passado o depósito de inspeção definido na filial (F100... |
| `EST-211DESPR01` | F211CPR | Alterar a ordem da concatenação da descrição do produto. Será passado para a regra o conteúdo da descrição (descrição do produto (E075PRO... |
| `EST-211EMPSU01` | F211CPR | Não sugerir a Empresa. Desta forma a empresa deve ser definida manualmente na tela ou a partir da variável "VSEmpSug", onde é permitinda ... |
| `EST-211MOAUT01` | F211CPR | Não chamar o "Mostrar" automaticamente quando essa tela for chamada através de um botão em outra tela. |
| `EST-211MODAN01` | F211ARA, F211ARP | Define alguns parâmetros para as telas. Na regra ligada ao identificador a variável VSNomTel recebe o nome da tela que está fazendo a aná... |
| `EST-211MULTI01` | F211ARE, F211ARP, F211ARO, F211ARA | Fazer análises de reposição mesmo que a quantidade na grade a comprar, não seja mais a verdadeira quantidade a comprar. |
| `EST-211NCQOP01` | F211CPR | Não considerar a quantidade pendente em ordens de produção ou compra no cálculo da quantidade disponível em estoque, que é exibido no rod... |
| `EST-211ORDEM01` | F211RAV | Definir determinados campos para o sistema para fins de controle e ordenação dos itens de ordens de compra gerados. |
| `EST-211PROIG01` | Reposição | Filtrar produtos (ignorar) no processo de Analise de reposição. |
| `EST-211RATRV01` | F211RSV | Não gerar rateios para as solicitações geradas. Não haverá nenhum acesso à base de dados para verificar se é necessário gerar rateios. |
| `EST-211RAVPM01` | F211RAV | Sugerir o preço da ordem de compra da tabela E210MED em vez de fazer uma busca da tabela de preço de compra. Haverá melhoria de desempenh... |
| `EST-211RAVPM02` | F211RAV | Permite definir através de uma regra o preço unitário do produto na ordem de compra gerada pela rotina de análise de reposição. Esta regr... |
| `EST-211SUCME01` | F211ARA | Informar ao sistema quais são os depósitos que deverão ser utilizados na busca do somatório do cálculo do consumo médio. Se o identificad... |
| `EST-211SUQTC01` | F211RAV/F211RSV | Definir via regra uma quantidade a comprar na análise de reposição. Ao cadastrar, ativar e ligar a uma regra, e selecionar a opção, o ide... |
| `EST-211VORIG01` | F211CPE / CarregaListaPosEst (Função de programador) | Demonstrar na tela F211CPE e nos relatórios que utilizem a função de programador: CarregaListaPosEst, o saldo em valor do depósito confor... |
| `EST-212DATDC01` | — | Inverter a ordem de apresentação dos movimentos na tela de consulta de movimentos de estoque. A tela apresentará os movimentos em ordem d... |
| `EST-212ECMVP01` | F212CME | Esconder os campos "Qtde Est", "Qtde. Ant", "Valor Ant", "Valor Est" e "Preço Médio" da grade "Movimentos" ao selecionar alguma opção ref... |
| `EST-213MODLO01` | — | Sugerir lotes valores para Lotes filhos, na sub-divisão de lotes no estoque, apenas a primeira parte do novo Lote será sugerida, pois a p... |
| `EST-213QBTRE01` | F213QBT | Permitir manipular e consistir os valores da quebra técnica. |
| `EST-213SUTNS01` | F213MLO | - Sugerir via regra os valores dos campos "Trans. Entrada" e "Trans. Saída"; |
| `EST-215ACEDF01` | — | Acerto das diferenças de centavos dos movimentos de estoque, quando um estoque é zerado e sobra um saldo em valor (centavos). |
| `EST-215ACEME01` | F215FES | Chamado no fechamento a cada mudança de derivação, tanto para produtos comprados como para produzidos. Estarão disponíveis na regras as v... |
| `EST-215ALTVA01` | F215FES | Revalorizar de forma correta o preço médio quando os valores dos movimentos envolvidos sejam muito irrisórios, como por exemplo 0.01 ou i... |
| `EST-215ATSND01` | F215FES | Informar ao sistema que o fechamento precisa guardar em uma tabela de saldos diários, quando um determinado produto ficou com um saldo ne... |
| `EST-215BUPEC01` | F215FES | Este identificador tem por finalidade, permitir que o fechamento realize sua revalorizações internas com um preço de custo informado pelo... |
| `EST-215CODEP01` | F215FES, com.senior.g5.co.mcm.est.estoques@Fechar, Processo automático 02 - Fechamento dos Estoques | Permitir a utilização do filtro de depósitos nas rotinas de atualização de estoques. |
| `EST-215COFEC01` | — | Permitir a certos usuários consistir todos os campos da tela. Este controle visa inibir que algum usuário faça o fechamento erroneamente.... |
| `EST-215DAFDI01` | F215FES | Fazer com que o sistema respeite a data final informada na tela e não mais procure por movimentos até a data de hoje, como é o padrão. |
| `EST-215EXCLB01` | Todas as rotinas que acessam de alguma forma o saldo anterior dos produtos. | Indicar às rotinas que necessitam acessar o saldo anterior dos produtos que a rotina de Limpeza de Base de Dados (F210LBD) já foi executa... |
| `EST-215FECON01` | F215FES | Executar automaticamente o fechamento de estoques das demais filiais da empresa após o término do fechamento da filial informada na tela,... |
| `EST-215GERAC01` | F215FES | Gerar movimentos de acerto de estoques no fechamento/atualização de estoques e também na rotina de Valorização das Transferências. |
| `EST-215IGUAL01` | F215FES | Verificar/igualar movimentos de transferência de estoques que possuem diferença de valor. |
| `EST-215LOTRF01` | F215FES | Gerar um LOG dos movimentos de entrada por transferência ou devolução onde o sistema por algum motivo não conseguiu encontrar o valor cor... |
| `EST-215NAOAC01` | F210FES | 1- Não gerar os movimentos de acerto em valor, apenas gerando um log sugerindo os acertos. Estas sugestões não necessariamente devem ser ... |
| `EST-215NAOEN01` | F215FES | Desabilita a opção de escolher o "Calculo do Preço Médio", e seleciona a opção que for retornada pela regra através da variável VSCALPRM,... |
| `EST-215NFFIL01` | F215FES | Não fechar o período das filiais que estão sofrendo uma revalorização online, fazendo com que a repectiva filial, fique "destravada" para... |
| `EST-215NMPRO01` | F215FES | Não mostrar a barra de progresso quando o fechamento está sendo executado. Isto implica em liberar mais memória durante o processamento, ... |
| `EST-215NOTAS01` | F215FES | Verificar se existem notas fiscais em aberto antes de executar o fechamento dos estoques. |
| `EST-215ONLTR01` | F215FES | Ativar a rotina de Valorização das Transferências no fechamento de estoques. A rotina é diretamente ligada a movimentos de estoques de tr... |
| `EST-215PDAFI01` | F215FES | Permitir informar Data final menor que data do sistema quando a opção "Diferenças de Saldo (Quantidade)" for definda como "CORRIGE". |
| `EST-215PRCDM01` | F215FES | Permite configurar uma regra onde serão informadas as transações que não devem ser revalorizadas no fechamento de estoques quando o fecha... |
| `EST-215VADEV01` | F215FES | Fazer com que os movimentos de saída gerados por notas fiscais dos tipos "2-devolução", "5-retorno (industrialização)" ou "6-retorno(outr... |
| `EST-215VAEPR01` | F215FES. | Fazer com que os movimentos de saída por estorno da produção sejam valorizados pelo preço de custo atual do produto e não pelo preço médio. |
| `EST-215VAEPR02` | F215FES. | Fazer com que os movimentos de entrada por estorno de consumo sejam valorizados pelo preço médio da última baixa através do cálculo propo... |
| `EST-215VALCU01` | F215FES | Utilizado para: |
| `EST-215VALCU02` | F215FES | Tem a mesma função do Identificador EST-215VALCU01 com única diferença a busca pelos produtos que não tiverem movimentos no período infor... |
| `EST-215VALRE01` | F215FES | Valorizar os movimentos das notas fiscais de retorno conforme as notas fiscais de remessa. |
| `EST-215VPCTB01` | F215FES | Interromper o processo de fechamento de estoques caso seja encontrado algum movimento de estoque que esteja fora do período contábil da f... |
| `EST-220ACINV01` | F220DAI, web service com.senior.g5.co.mcm.est.finalizacaoinventario, porta FinalizarInventarioEstoque | Para as modalidades que geram acerto de estoque ("com Diferença" e "Todos c/ Acerto Est."), ao ser ativado e ligado a uma regra, o identi... |
| `EST-220ALSEQ01` | F220COI | O campo denominado "Sequência da contagem" é meramente informativo e o sistema irá alimenta-lo na medida em que as contagens serão feitas... |
| `EST-220COAIN01` | F220DAI | Consistir via regra os acertos de inventário. O identificador será executado após processar o acerto (após as movimentações estarem grava... |
| `EST-220COEMB01` | F220CAL | Definir os valores dos campos "Transação de Entrada", "Transação de Saída" e "Número do Documento" que serão utilizados na "Transferência... |
| `EST-220FLTCO01` | F220COI, F220COA, F220COC, "com.senior.g5.co.mcm.est.contageminventario" | Retornar ao sistema se um item selecionado na inicialização do inventário ou inserido na contagem pode fazer parte do processo de contagem. |
| `EST-220FOQDE01` | F220COI | Tem como objetivo posicionar o cursor no campo "Quantidade" após ser informado o campo "Cód. Barras". Caso inativado, faz o padrão que é ... |
| `EST-220GRCON01` | F220COI | Deixar sempre a opção "Efetuar gravação a cada linha contada" sempre marcada. |
| `EST-220INVPF01` | F220INI, web service com.senior.g5.co.mcm.est.geracaoinventario. | Otimizar o tempo de abertura de inventário, seja por tela ou web service. |
| `EST-220INVRT01` | F220INI, F220COA, F220DAI | Foi implementado na rotina de inventário de estoques o conceito de Inventário Rotativo, que consiste em, via identificador de regras, per... |
| `EST-220INVVM01` | F220DAI e web services Com.senior.g5.co.mcm.est.finalizacaoinventario e Com.senior.g5.co.mcm.est.finalizacaoinventariogernota. | Possibilitar a customização de regra para retornar o valor do movimento de estoques na finalização do inventário sem a necessidade de abe... |
| `EST-220LEIBA01` | F220COI. | devolver para o sistema 5 variáveis a serem consistidas. Após o usuário informar um código de barras na tela, o sistema chama uma regra q... |
| `EST-220MODAL01` | F220DAI | Definir via regra o campo "Modalidade". Será enviado para a regra os dados do acerto do inventário, e deverá ser retornado para o sistema... |
| `EST-220MRTOL01` | F220DAI,"com.senior.g5.co.mcm.est.finalizacaoinventario" | Retornar ao sistema através da variável "EstNMarTol", a margem de tolerância do item inventariado. O sistema calcula a variação (percentu... |
| `EST-220NLQDE01` | F220COI | Tem como objetivo manter a informação do campo "Quantidade" após ser informado o campo "Cód. Barras". |
| `EST-220QTDIT01` | F220DAI. | retornar ao sistema a quantidade máxima de itens que podem ser inseridos em notas fiscais geradas na finalização do inventário. Esse valo... |
| `EST-220TIPLE01` | F220CIL | Definir o tipo de leitura de códigos de barras que será feito nesta tela. As opções são: |
| `EST-405APRIM01` | importar solicitação de compra. | ao gerar uma solicitação de compra via importação, ela passará pelo processo de aprovação multinível **desde que** o Gestão Empresarial \|... |
| `EST-405AVISA01` | F405GSA | Exibir mensagem ao usuário quando clicar no no botão Mostrar, sem que haja nenhum fitro na tela. |
| `EST-405BUDEP01` | F405SOL, F405GSA | Sugerir o depósito a ser utilizado nas solicitações de compra, baseando-se na ligação "Produto X Depósito" (E210EST). |
| `EST-405BUDEP02` | Não se aplica | Sugerir o depósito a ser utilizado nas solicitações de compra, baseando-se na ligação "Produto X Depósito" (E210EST). |
| `EST-405CODEP01` | F405SOL, F405GSA, F405GSE | Mostrar todos os depósitos existentes na tabela E205DEP sem considerar os depósitos ligados com a tabela E205DXP (produtos não permitidos). |
| `EST-405CODEP02` | F405SOL e F405GSA | Exibir nas telas de solicitação de compra apenas os depósitos que possuem ligação com o produto (tabela E210EST). Caso o depósito não est... |
| `EST-405CODER01` | F405SOL, F405GSA | Chamar a consulta de derivações nas telas de solicitações de compra baseando-se apenas na tabela E075DER e não mais na E075DER + E084MDP,... |
| `EST-405CONSI01` | F405SOL, F405GSA, F405GSP, F405SOS, F210DPD, F211RAV, F211RSV, F211ARA e F211ARE | Disponibilizar variáveis da solicitação de compra para consistir os dados na tela. |
| `EST-405CONSI02` | F405SOL, F405SOS | A finalidade é a mesma do identificador EST-405CONSI01, ou seja, consistir os dados do item de uma solicitação de compra no momento da gr... |
| `EST-405CONSI03` | F405GSA | Disponibilizar todas as variáveis da tabela E405SOL dos registros gerados no processamento da tela F405GSA. |
| `EST-405DVSOL01` | F405AGC | Habilitar a tela F405AGC ao utilizar o processo de devolução de solicitações de compra. |
| `EST-405DVSOL02` | F405AGC | Poder alterar via regra os dados de Remetente, Assunto, Destinatário, Cópia, Corpo e Anexo do e-mail da Devolução de Solicitação de Compra. |
| `EST-405EDMAI01` | F405APR | Com o sistema configurado para enviar e-mail ao solicitador, permitir ou não editar este e-mail antes de enviá-lo, sendo este gerado após... |
| `EST-405EDMAI02` | F405APR | Permite definir para quem devera ser enviado o email no momento da aprovação da solicitação de compra. |
| `EST-405EMAIL01` | — | Definir os usuários Remetente e Destinatário para o envio de e-mail na geração de solicitações de compras pelas telas de Análise de Repos... |
| `EST-405EMAIL02` | — | Selecionar quais os usuários que deverão receber e-mails na inclusão de solicitações de compra quando existe controle de aprovação multi-... |
| `EST-405EMAIL03` | F405AGC | Definir para o envio de e-mail no processo de devolução de solicitações de compra via agrupamento, quais os usuários devem receber o e-ma... |
| `EST-405EMAIL04` | F405APR | Permitir que seja personalizada a linha que contém a descrição da sequência e quantidade aprovada da solicitação. |
| `EST-405FILSO01` | — | Considerar a abrangência de filial cadastrada via SGU para o usuário logado. A ativação deste identificador considera a filial (campo Fil... |
| `EST-405HRPED01` | F405GSP, F421GSP. | Fazer com que a solicitação herde o rateio existente no item de cada pedido selecionado na tela ao processar. O rateio será gerado como s... |
| `EST-405LAGRC01` | F405AGC | Permitir que todos os campos utilizados pela telA F405AGC estejam disponíveis em uma regra pré-definida pelo cliente. |
| `EST-405NAOSU02` | F405SOL,F405SOS,F405GSA | Não sugerir o centro de custo em nenhuma tela de solicitações de compra. Esta informação ficará em branco até que o usuário faça alguma a... |
| `EST-405OBSOL01` | Solicitação de Compra | Ao inserir uma solicitação de compra, obriga ou não a informação da observação da solicitação conforme for definido via regra. A variável... |
| `EST-405PRSOL01` | F405SOL, F405GSA, F405SOS | Habilitar o campo Preço Solicitação, para que seja permitido e possível de alterá-lo por outro valor que é inicializado. |
| `EST-405RATSC01` | — | Informar qual a forma de rateio que deseja utilizar quando processar uma solicitação de compras. As formas válidas são: |
| `EST-405SOLAGCO` | web service com.senior.g5.co.mcm.est.requisicoes, porta requisicaoAgrupadaComposta. | quando o tipo de operação da requisição é **Comprar**, por padrão a rotina gera uma nova solicitação para cada item de requisição informa... |
| `EST-405SUDPE01` | F405SOL, F405GSA | Retornar uma nova data de previsão de entrega para a solicitação de compra através da variável de retorno VSDatPrv. Ao executar a regra c... |
| `EST-405SUGAG01` | F405GSA, F405GSE, F405SOL, F421GSP | Definir os códigos de Agrupamento Comercial e Agrupamento de Estoque de uma solicitação de compra de acordo com valores informados em uma... |
| `EST-405UMESC01` | F405GSA | Informar uma nova unidade de medida para que seja disponibilizada na grade da tela F405GSA. As variáveis disponibilizadas para a regra se... |
| `EST-405USSOL01` | F405SOL, F405GSA | Definir o usuário solicitante através de regra. Caso a regra retorne valor da variável VSUsuSol como ZERO, o sistema assume como usuário ... |

## FIN - Finanças

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `FIN-000CONAP01` | — | Definir via regra se o número da conta interna aprovada para pagamento do título e a sequência de junção de títulos pagos com mesmo chequ... |
| `FIN-000CSTCC01` | Todas as telas que utilizam Rateio | Bloquear o processo de movimentação caso ocorra alguma inconsistência de rateio para os campos de Conta Financeira, Conta Contábil e Cent... |
| `FIN-000CTRAV01` | F501TCP;F301TCR;F501ATL;F301ATL | Alterar o valor original e o vencimento original dos títulos do contas a pagar e contas a receber gerados via contrato. |
| `FIN-000DATAS01` | — | Não trazer a data atual, para o campo "Período Final", nas consultas do Financeiro. |
| `FIN-000EDPME01` | — | Tem a finalidade de não permitir o usuário continuar o processo nas telas F301MCR, F501MCP, F600GEC, F501LOT, F301BMA, F510PRM e F510PPR ... |
| `FIN-000EXPUP01` | F310PRB e F510PRM | Com este identificador cadastrado, ativo e vinculado a uma regra, é possível fazer com que a geração do arquivo de remessa (pagamento ou ... |
| `FIN-000FCXDC01` | — | Modificar o valor dos filtros data inicial e final de vencimento utilizados nas consultas de parcelas de contratos de venda (**obterParce... |
| `FIN-000FINRP01` | telas de baixa por compensação. | quando ativo, gera a retenção de valores na baixa por pagamento, somando os valores compensados anteriormente ao valor movimentado. |
| `FIN-000IMPAR01` | Geração Impostos | Com esse identificador ativo, não será considerado o valor base da tabela de retenções (E019RET.VLRBAS) e sim considerado o valor total p... |
| `FIN-000ULPGT01` | F301SUB e F501SUB | através desse identificador de regra é possível retornar ao sistema quais os tipos de baixa que atualizarão a data do último pagamento. S... |
| `FIN-000VCTDU01` | F610PFL; F611PFC | Postergar vencimento para um dia útil, quando o vencimento for no final de semana ou feriado. |
| `FIN-00EXCVAR01` | TSubstituicaoContasReceber/TSubstituicaoContasPagar | Esse identificador tem como objetivo não considerar o parâmetro EXCVAR (Exclusivo Varejo) na pesquisa de tipos de títulos nas rotinas de ... |
| `FIN-031IMHRE00` | F031IMH | Usar variáveis disponíveis da grade de índices por hora na tela - Moedas - Índice por Hora (F031IMH) para consistência via ponto de regra... |
| `FIN-039NOLSP01` | — | Indica que a atualização dos saldos nos históricos do **portador** não será on-line, assim melhorando a performance do processo. |
| `FIN-069NOLSG01` | — | Indica que a atualização dos saldos nos históricos do **grupo** de empresas não será on-line, assim melhorando a performance do processo. |
| `FIN-085NOLSC01` | — | Indica que a atualização dos saldos nos históricos do **cliente** não será on-line, assim melhorando a performance do processo. |
| `FIN-095NOLSF01` | — | Indica que a atualização dos saldos nos históricos do **fornecedor** não será on-line, assim melhorando a performance do processo. |
| `FIN-301ATLRE00` | F301ATL | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301ATUQC01` | ENTRADAS CR | Com este identificador ativo o usuário pode através de regra setar a variável VSAtualiza |
| `FIN-301AVPRE00` | F301AVP. | disponibilizar via regra todos os campos da tela para que o usuário valide as informações da forma que desejar. |
| `FIN-301BAACO01` | F301BAA. | quando ativo, o cálculo da comissão será com base no valor em aberto do título. Ele funciona apenas se houver títulos com transação de de... |
| `FIN-301BAARE00` | F301BAA | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301BCDRE00` | F301BCD | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301BLORE00` | F301BLO | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301BMARE00` | F301BMA | Este identificador tem como finalidade consistir os campos digitáveis da tela de baixa por lote automática (F301BMA) e será executado ao ... |
| `FIN-301BMDRE00` | F301BMD | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301BMVRE00` | F301BMV | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301CCFCD01` | — | Ao passar pelo campo Data Base da tela Consulta de Movimentos de Clientes e Fornecedores (F301CCF), esse identificador valida se a data i... |
| `FIN-301CCFCF01` | — | Consiste, ao marcar os itens de ambas as grades da tela Consulta de Movimentos de Clientes e Fornecedores (F301CCF), se os registros sele... |
| `FIN-301CCFDB01` | Consulta de Movimentos de Clientes e Fornecedores (F301CCF) | Quando este identificador está ativo, o campo Data Base permanece desabilitado. |
| `FIN-301CCFGP01` | — | Disponibiliza todas as informações do cabeçalho da tela Consulta de Movimentos de Clientes e Fornecedores (F301CCF) e todas as colunas da... |
| `FIN-301CCFGR01` | — | Disponibiliza todas as informações do cabeçalho da tela Consulta de Movimentos de Clientes e Fornecedores (F301CCF) e todas as colunas da... |
| `FIN-301CCFIP01` | Consulta de Movimentos de Clientes e Fornecedores (F301CCF) | Quando este identificador está ativo, a caixa de seleção Imprimir preparação permanece marcada. |
| `FIN-301CCPRE00` | F301CCP | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301CONBA02` | WEB | O Objetivo deste identificador de regras é bloquear a baixa de titulos em aberto fora de sequência. |
| `FIN-301CONTC01` | — | Consistir todos os dados da tela de geração de títulos via contrato (F301GTC) e gerar observação para cada título que for gerado; |
| `FIN-301CXBRE00` | F301CXB | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-301EBLRE00` | F301EBL | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar |
| `FIN-301EPRRE00` | F301EPR | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301GNDRE00` | F301GND | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301GTCRE00` | F301GTC | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301GTRRE00` | F301GTR | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301LOTRE00` | F301LOT | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301MCRFI01` | F301MCR | Tem o objetivo de permitir ou não a visualização do item de menu F301MCR (Financeiro > C. Receber > Baixas de Títulos > Baixa Manual). |
| `FIN-301MCRRE00` | F301MCR | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301NOLCR01` | — | Este identificador de regras tem por objetivo indicar que a atualização do plano financeiro para o módulo do contas a receber não será on... |
| `FIN-301SCRFI01` | F301SCR | Tem o objetivo de permitir ou não a visualização do item de menu F301SCR [ Financeiro > C. Receber > Títulos > Seleção de Campos ] |
| `FIN-301SUBRE00` | F301SUB | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301TCRRE00` | F301TCR | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-301TITAB01` | WEB | Permitir efetuar um filtro para que títulos ligados a determinadas formas de pagamento não sejam exibidos. |
| `FIN-302CCRCF01` | F302CCR | Esse identificador de regras tem a finalidade de consistir os filtros informados no momento do click imprimir da tela F302CCR. |
| `FIN-302CJMRE00` | F302CJM | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-310PEFRE00` | F310PEF | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-310PRARE00` | F310PRA | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-310PRBRE00` | F310PRB | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-315CRDCB01` | F315CRD | Executa regra ao incluir um novo critério, ou ao consultar um critério de distribuição na tela F315CRD. |
| `FIN-315CRDTT01` | F315CRD | Executa regra ao incluir cada registro na grade de títulos, quando a tela está no estado de inclusão, alteração e consulta, porém, soment... |
| `FIN-501APGRE00` | F501APG | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501APRRE00` | F501APR | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501ATLRE00` | F501ATL | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501AVPRE00` | F501AVP | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501BAARE00` | F501BAA | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501BCORE00` | F501BCO | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501BLMRE00` | F501BLM | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501EBLRE00` | F501EBL | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar |
| `FIN-501EPPRE00` | F501EPP | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501GCFRE00` | F501GCF | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501GTPRE00` | F501GTP | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501LOTRE00` | F501LOT | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501MCPFI01` | F501MCP | Tem o objetivo de permitir ou não a visualização do item de menu F501MCP (Financeiro > C. Pagar > Baixas de Títulos > Baixa Manual). |
| `FIN-501MCPRE00` | F501MCP | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501MPNRE00` | F501MPN | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501NOLCP01` | — | Este identificador de regras tem por objetivo indicar que a atualização do plano financeiro para o módulo do contas a pagar não será on-l... |
| `FIN-501PBTRC01` | Baixa por Cancelamento | Este Identificador de regras tem como objetivo ao estar ativo permitir baixar títulos do Rubi por cancelamento, porém neste caso ao exclu... |
| `FIN-501PENRE00` | F501PEN | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-501SCPFI01` | Títulos/Manutenção do Contas a Pagar - Personalização de campos (F501SCP) e Consulta de Títulos do Contas a Pagar - Seleção (F502SCP). | tem o objetivo de permitir ou não a visualização da tela F501SCP (Financeiro > C. Pagar > Títulos > Seleção de Campos) e do campo Empresa... |
| `FIN-501SEQGC01` | Aprovação multinível CP | Este identificador de regras tem por objetivo eliminar a sugestão de preparações durante a aprovação, e a mesma sendo sugerida durante a ... |
| `FIN-501SUBRE00` | F501SUB | Disponibilizar via regra, todos os campos das telas, para que o usuário consista as informações da forma que desejar. |
| `FIN-501TCPRE00` | F501TCP | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-502CJMRE00` | F502CJM | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-504CAPRE00` | F504CAP | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-504NOLCM01` | — | Este identificador de regras tem por objetivo indicar que a atualização do plano financeiro para o módulo de comissões não será on-line, ... |
| `FIN-504RACRE00` | F504RAC | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-504RCPRE00` | F504RCP | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-504RCPTP01` | F504RCP | Ao gerar a ordem de compra via pagamento de comissão, o campo parcelas especiais da ordem de compra será gerado com valor "S". |
| `FIN-600CBARE00` | F600CBA | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-600CHERE00` | F600CHE | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-600CONRE00` | F600CON | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-600ECHRE00` | F600ECH | Usar variáveis disponíveis na tela - Tesouraria>Preparação/Movimento>Gerações e Emissões (F600ECH) para consistência via ponto de regra. |
| `FIN-600ELCRE00` | F600ELP | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-600ELPRE00` | F600ELP | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-600FSCRE00` | F600FSC | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-600GECRE00` | F600GEC | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-600GMORE00` | F600GMO | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-600MCCRE00` | F600MCC | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-600NOLTE01` | — | Este identificador de regras tem por objetivo indicar que a atualização do plano financeiro para o módulo da tesouraria não será on-line,... |
| `FIN-600SMCFI01` | F600SMC | Tem o objetivo de permitir ou não a visualização do item de menu F600SMC [ Financeiro > Tesouraria > Seleção de Campos ] |
| `FIN-600TRFRE00` | F600TRF | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-605LOTRE00` | F605LOT | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-606APETP01` | F606APE | Esse identificador tem a finalidade de: |
| `FIN-606CCRRE00` | F606CCR | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-611FCPVL00` | F611FCP | No fluxo de caixa projetado, o valor é calculado conforme a média do dia no período base. Este identificador permite manipular este valor. |
| `FIN-611OCSUP01` | F611PFC | Este identificador tem como finalidade não carregar as Ordens de Compra suspensas no Fluxo de Caixa do Plano Financeiro. |
| `FIN-611PFCDC01` | F611PFC | Permite através de regra consistir o fluxo de caixa antes de processar. |
| `FIN-611PFCFC01` | FLUXO DE CAIXA/PARAMETROS | Criado o identificador de regras FIN-611PFCFC01. |
| `FIN-611PFCIF00` | F611PFC | Permite alterar via regra a data base e o valor de um registro que compõe o fluxo, conforme já ocorre manualmente. |
| `FIN-615ANALI01` | — | Quando existir este identificador, somente serão mostrados os c.custos e as contas financeiras analíticas na preparação de orçamento para... |
| `FIN-615AVISO01` | — | Quando existir este identificador, ao clicar no botão Mostrar e existir registros na grade de c.custos, será dado um aviso se deseja real... |
| `FIN-615CACRE00` | F615CAC | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615CDTPJ01` | Servicos - CadastroProjeto | Disponibilizar variáveis para serem passados valores na geração do cadastro de projeto via serviço. |
| `FIN-615CDTPJ02` | Serviços - SrCadastroProjeto | Com esse identificador ativo será possível fazer consistências de todos os campos declarados no serviço, mais os campos de usuário da tab... |
| `FIN-615COFNP01` | — | Quando o identificador estiver ativo, o orçamento que será utilizado para a consistência será somente dos níveis informados no controle d... |
| `FIN-615CSPBT01` | — | Quando esse identificador estiver ativo, fará o lançamento da baixa (CP ou CR) em projetos utilizando a data atual e não a data do docume... |
| `FIN-615CSPCA01` | — | Com esse identificador ativo, a conciliação de saldos de projetos irá executar da forma antiga (versão inferior a 5.8.1.1) |
| `FIN-615CSPCN01` | — | Quando esse identificador estiver ativo, habilitará na tela de Conciliação de Saldos de Projetos um controle chamado "Consistir rateios, ... |
| `FIN-615CSPDT01` | Conciliação de Projetos | Quando esse identificador estiver ativo, a conciliação de saldos de projetos passará a levar em consideração o período informado no regim... |
| `FIN-615CSPFR01` | F615CSP | Quando esse identificador estiver ativo, irá considerar somente as transações com forma de rateio maior que zero (E001TNS.ForRat > 0) na ... |
| `FIN-615CSPMF01` | F615CSP - Conciliação de Saldos | Esse identificador tem a finalidade de mostrar os filtros Fase, Conta Financeira e Centro de Custos na tela de conciliação de saldos de p... |
| `FIN-615CSPRQ01` | Conciliação de Projetos | Quanto ativa, processa todas as requisições, independente da situação. |
| `FIN-615CSPSI01` | F615CSP | Com esse identificador ativo o campo SitRat da tabela E615RAT ficariá igual a "A" nos movimentos gerados a partir da Conciliação de Saldo... |
| `FIN-615FATRE00` | F615FAT | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615FPJCT01` | F615FPJ e WebService: com.senior.g5.co.mfi.prj.cadastrofase | Quando este identificador estiver cadastrado e ativo, não será consistida a mensagem que exige informar a transação no cadastro de fases. |
| `FIN-615FPJRE00` | F615FPJ | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615GRPRE00` | — | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615IERAP01` | F615ACR | Se ativo e com regra cadastrada, esse identificador será executado quando houver alguma ação de aprovação, desaprovação ou reprovação uma... |
| `FIN-615IEREX01` | F615CER | Se ativo e com regra cadastrada, esse identificador será executado quando houver alguma ação de inclusão, alteração e exclusão de itens d... |
| `FIN-615IPTCL01` | F615IPT | Com este identificador ativo e na existência de uma regra efetiva. O usuário terá a possibilidade de vizualizar as situações em que exist... |
| `FIN-615IPTCR01` | F615IPT | Com este identificador ativo e existência de uma regra. O usuário terá a possibilidade de alterar a situação do item do protocolo como de... |
| `FIN-615LCTMA01` | — | Regra para gerar os lançamentos manuais de projetos. |
| `FIN-615LINRE00` | — | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615OABOR01` | F615OAP | Com esse identificador ativo, será possível realizar uma preparação de orçamento nos dois regimes(entrada/saída) no mesmo período para o ... |
| `FIN-615OABRE00` | F615OAB | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615OBSRE00` | F615OBS | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615OCCRE00` | F615OCC | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615OCFNA01` | F615OCF | Caso este identificador estiver cadastrado e ativo, será habilitado o botão "Rateio" no rodapé da tela de Incluido na Tela de Preparações... |
| `FIN-615OCFRE00` | F615OCF | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615OPFRE00` | F615OPF | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-615ORCRE00` | F615ORC | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-615ORFRE00` | F615ORF | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615OUSRE00` | F615OUS | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615PCAAP01` | F615PCA/F615APC | Se ativo e com regra cadastrada, esse identificador será executado quando houver alguma ação de aprovação, desaprovação ou reprovação uma... |
| `FIN-615PCACR01` | F615PCA | Com o identificador ativo é possível que o usuário decida via regra se a "Situação Prestação de Contas" da fique REP(padrão) ou ANA ao re... |
| `FIN-615PCALP01` | F615PCA | Este identificador tem como finalidade permitir ao usuário a consistência dos campos da prestação de contas antes da liberação de uma pre... |
| `FIN-615PENCL01` | F615PEN | Com este identificador ativo e na existência de uma regra efetiva. O usuário terá a possibilidade de vizualizar as situações em que exist... |
| `FIN-615POSFA01` | Posição financeira de Projetos (F615POS) | Quando ativo, as fases dos projetos financeiros que estão inativas não serão carregadas nas consultas. A funcionalidade será aplicada na ... |
| `FIN-615PPERE00` | F615PPE | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615PPFRE00` | F615PPF | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615PPJGP01` | F615SAT/F615APS | Quando esse identificador estiver ativo, serão geradas em modo on-line as pendências para o projeto ao efetuar a aprovação de solicitaçõe... |
| `FIN-615PRJAB01` | Preparação de orçamento de projetos | Com esse identificador ativo, será consistido para informar um projeto na abertura da preparação do orçamento (F615OABP). |
| `FIN-615PRJAO01` | F615PRJ / F615RPP | Esse identificador tem a finalidade de atualizar os orçamentos sintéticos a partir dos orçamentos analíticos antes da geração dos lançame... |
| `FIN-615PRJAS01` | rotina 29 - processo automático | A finalidade deste identificador de regras é alterar a situação dos projetos aprovados para suspenso pelo sistema, quando a data de execu... |
| `FIN-615PRJBE01` | F215FES | Quando esse identificador estiver ativo, será verificado o saldo financeiro/físico disponível de projetos na rotina de fechamento de esto... |
| `FIN-615PRJBL01` | Bloqueio Orçamento | Esse identificador tem a finalidade de enviar e-mail com o conteúdo da tela de bloqueio financeiro/físico. |
| `FIN-615PRJBL02` | F000BMP | Esse identificador tem a finalidade de enviar e-mail com o conteúdo da tela de bloqueio financeiro/físico. |
| `FIN-615PRJCA01` | F615ORC/F615ORF | Quando este identificador estiver ativo, o mesmo irá considerar somente as fases, as contas financeiras e os centro analíticos para o cál... |
| `FIN-615PRJCM01` | — | Desabilita consistência do controle mensal quando o projeto atual possui superior. |
| `FIN-615PRJDS01` | F615RPP | Quando esse identificador estiver ativo e a tela de cadastro de fases for acessada diretamente pelo menu do Gestão Empresarial \| ERP, irá... |
| `FIN-615PRJDU01` | F615DPR | Com esse identificador ativo é possível fazer consistência dos campos marcados/desmarcados da tela F615DPR. |
| `FIN-615PRJES01` | — | Esse identificador de regras serve para desativar a opção de Projeto Estoque no Sistema. |
| `FIN-615PRJES02` | Atualização on-line projetos | Esse identificador de regras serve para desativar a opção de Projeto Estoque no Sistema. |
| `FIN-615PRJIS01` | Geração de requisição | Esse identificador tem a finalidade de inverter os campos Soma/Subtrai quando gerada uma requisição de entrada de estoques para a atualiz... |
| `FIN-615PRJOB01` | F615OBS | Quando esse identificador estiver ativo, será sugerido por primeiro o valor "G - Gravada" no campo motivo situação da grade de observaçõe... |
| `FIN-615PRJPE01` | Movimentação on-line | Esse identificador tem a finalidade de liberar movimentações para projetos com situação igual a "ENC-Encerrado". |
| `FIN-615PRJRE00` | — | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615PRJRE01` | F615PRJ | Esse identificador tem a finalidade de retornar a máscara do projeto. |
| `FIN-615PRJRM01` | F616MNF - Serviços(relacionafasemunicipio) | F616MNP: Com este identificador ativo será possível excluir o relacionamento entre um município e um projeto mesmo que o município esteja... |
| `FIN-615PRJSI01` | — | Com essa regra ativa, é possível realizar consistências no projeto nas movimentações efetuadas on-line. |
| `FIN-615PRJSL01` | F615PRJ | Retornar o saldo do projeto somando ou não as fases conforme parametrizado na regra. |
| `FIN-615PRJSP01` | F615PRJ | Com este identificador cadastrado e ativo será possível alterar a situação do projeto para "APR" mesmo se não existirem fases cadastradas... |
| `FIN-615PRJTO00` | F615TOA | Esse identificador tem a finalidade de somente transferir orçamentos de natureza devedora(com sinal negativo: -100,00). |
| `FIN-615PRJVO01` | — | Com o identificador ativo será feita a verificação do orçamento financeiro a partir da geração de títulos via módulo de impostos. |
| `FIN-615PRJVS01` | Solicitações | Com esse identificador ativo será consistido o orçamento financeiro/físico na inclusão de uma solicitação de compra mesmo utilizando cont... |
| `FIN-615PSARE00` | F615PSA | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615PSARE01` | F615PSA | Este identificador tem a finalidade de consistir os campos da tela. |
| `FIN-615PVPRE00` | F615PVP | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615PVSRE00` | F615PVS | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615PXCRE00` | F615PXC | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615PXPRE00` | F615PXP | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615PXTRE00` | F615PXT | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615PXURE00` | F615PXU | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615RCPFA01` | — | Quando ativo, apresenta no menu as telas Financeiro > Projetos > Recursos Previstos e Financeiro > Projetos > Faturamento. |
| `FIN-615RCPFI01` | F615RCP | Com esse identificador de regras ativo, irá fazer a liberação do filtro no campo "Agrupamento Orçamento" retornando todos os tipos cadast... |
| `FIN-615RCPRE00` | F615RCP | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615RE00` | F615ORC | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `FIN-615RECPR01` | — | permite criar consistências, controles e processamentos para a rotina de pronunciamento contábil, com base nas informações do reconhecime... |
| `FIN-615RPJNP01` | Rateio pré-definido | Esse identificador de regras tem a finalidade de buscar o rateio pré-definido do tipo "E", quando as colunas Projeto e Fase estiverem cad... |
| `FIN-615RPPCL01` | F615RPP | Com este identificador ativo, será possível aprovar ou desaprovar recursos usando a aprovação multi-nível rotina 54 - Projeto. Para um re... |
| `FIN-615RPPCR01` | F615RPP |  |
| `FIN-615RPPLT01` | web services recursos previstos | Quando esse identificador estiver ativo será possível informar um Valor Total diferente do cálculo quantidade x preço unitário via web se... |
| `FIN-615RPPLT02` | web service recursos previstos |  |
| `FIN-615RPPUC01` | F615RPP - Webservices | Com esse identificador ativo, será possível informar o CEP para cada recurso informado na tela de recursos previstos e nos devidos webser... |
| `FIN-615RXPRE00` | F615RXP | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615SATAS01` | F615SAT/F615APS | Se ativo e com regra cadastrada, esse identificador será executado quando houver alguma ação de aprovação, desaprovação ou reprovação uma... |
| `FIN-615SATCR01` | F615SAT | Com o identificador ativo é possível que o usuário decida via regra se o campo "Situação Solicitação de Adiantamento" fique REP(padrão) o... |
| `FIN-615SATLS01` | F615SAT |  |
| `FIN-615SRAPR01` | Serviço - AprovarProjeto | Com esse identificador ativo será possível alimentar as variáveis codemp, numprj do serviço de aprovação de projetos. |
| `FIN-615SRDEF01` | Serviço - DeferirProjeto | Com esse identificador ativo será possível alimentar as variáveis codemp, numprj do serviço de deferimento de projetos. |
| `FIN-615SRDPR01` | Serviço - DuplicacaoProjetos | Disponibilizar variáveis para serem passados valores na geração da duplicação de projetos via serviço. |
| `FIN-615SRPAL01` | Serviço - CadastroPublicoAlvo | Disponibilizar variáveis para serem passados valores na geração do cadastro do público alvo via serviço. |
| `FIN-615SRPXP01` | Serviço - RelacionaPublicoAlvo | Disponibilizar variáveis para serem passados valores na geração do relacionamento do público alvo com projetos via serviço. |
| `FIN-615SRRPP01` | Serviço - ProjetoRecursos | Com esse identificador ativo, será possível passar valores via regra aos campos disponíveis para a inclusão/aprovação/desaprovação de rec... |
| `FIN-615SRSIT01` | Serviço - AlteraSituacaoProjeto | Disponibilizar variáveis para serem passados valores na geração da alteração da situação do projeto via serviço. |
| `FIN-615SRVAF01` | Serviço - AlteraPrazoFase | Disponibilizar variáveis para serem passados valores na geração da alteração de prazo das fases via serviço. |
| `FIN-615SRVAP01` | Serviço - AlteraPrazoProjeto | Disponibilizar variáveis para serem passados valores na geração da alteração de prazo de projetos via serviço. |
| `FIN-615SRVCF01` | Serviço - CadastroFase | Disponibilizar variáveis para serem passados valores na geração do cadastro de fases via serviço. |
| `FIN-615SRVCF02` | Serviço - CadastroFase | Com esse identificador ativo será possível fazer consistências de todos os campos declarados no serviço, mais os campos de usuário da tab... |
| `FIN-615SRVFN01` | Servicos - GerarOrcamentoFinanceiro | Disponibilizar variáveis para serem passados valores na geração de orçamento financeiro via serviço. |
| `FIN-615SRVFS01` | Serviço - GeraOrcamentoFisico | Disponibilizar variáveis para serem passados valores na geração de orçamento físico via serviço. |
| `FIN-615SRVOF01` | Serviço - BuscaOrcamentoProjeto | Disponibilizar variáveis para serem passados valores na geração da consulta do orçamento financeiro de projetos via serviço. |
| `FIN-615SRVOF02` | Serviço - BuscaOrcamentoFisicoProjeto | Disponibilizar variáveis para serem passados valores na geração da consulta do orçamento físico de projetos via serviço. |
| `FIN-615SRVPF01` | Serviço - BuscaPosicaoProjeto |  |
| `FIN-615SRVPF02` | Serviço - BuscaPosicaoFisicaProjeto | Disponibilizar variáveis para serem passados valores na geração da consulta da posição física de projetos via serviço. |
| `FIN-615SRVPF03` | Serviço - BuscaPosicaoFisicaProjetoGrid | Disponibilizar variáveis para serem passados valores na geração da consulta da posição física de projetos via serviço. |
| `FIN-615SRVPF04` | Serviço - BuscaPosicaoProjetoGrid | Disponibilizar variáveis para serem passados valores na geração da consulta da posição financeira de projetos via serviço. |
| `FIN-615TOACV02` | F615TOA | Com este identificador cadastrado e ativo, será possível atráves de uma regra, alterar os valores dos registros antes de processar, para ... |
| `FIN-615TSOCT01` | F615TSO | Quando a opção "Realizar transferências de orçamentos em níveis superiores" estiver marcada é necessário que os níveis de controle do orç... |
| `FIN-615TSOCV01` | F615TSO | Com este identificador cadastrado e ativo, será possível atráves de uma regra, alterar os valores dos registros antes de processar, para ... |
| `FIN-615TSONS01` | F615TSO | Com esse identificador ativo, não será realizado a consistência de saldos nos níveis superiores ao efetuar uma transferência com a opção ... |
| `FIN-615VGLRE00` | F615VGL | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-615VISRE00` | — | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-616CAVRE00` | F616CAV |  |
| `FIN-616CQPMR01` | F616CQP |  |
| `FIN-616CQRRE00` | F616CQR |  |
| `FIN-616CRQRE00` | F616CRQ |  |
| `FIN-616CRTRE00` | F616CRT | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-616CTORE00` | F616CTO | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-616EPACI01` | F616EPA |  |
| `FIN-616EPAMC01` | F616EPA | Esse identificador tem a finalidade de realizar a montagem da composição final da especificação do público alvo. |
| `FIN-616EXROF01` | F615ROF | O identificador tem o objetivo de possibilitar o usuário a decidir pela exclusão das aprovações ao excluir o registro de ocorrência. Ou s... |
| `FIN-616EXROP01` | F615ROP |  |
| `FIN-616FETRE00` | F616FET | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-616ICKBF01` | F616ICK | Com esse identificador ativo é permitido colocar um filtro no campo "Vincular o Item ao Projeto Superior:" |
| `FIN-616ICKHI01` | F616ICK | Quando ativo esse identificador habilida o campo Ordem do item para alterações mesmo que exista projeto relacionado com aquele cheklist. |
| `FIN-616LALRE00` | F616LAL | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-616MANRD01` | F615PRJ | Esse identificador tem a finalidade de retornar uma data para a geração do lançamento manual no momento da aprovação ou desaprovação de u... |
| `FIN-616MANRE00` | F616MAN | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-616MNFEC01` | F616MNF - Relacionamentos de Fase X Municípios | Esse identificador tem a finalidade de mostrar/esconder os campos Qtd e Valor da tela F616MNF. |
| `FIN-616OCORE00` | F616OCO | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-616QTMRE00` | F616QTM | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-616ROCCO01` | F616ROF/F616ROP | Esse identificador tem a finalidade de controlar os tipos de ocorrência relacionados aos fornecedores ou projetos. Esse identificador som... |
| `FIN-616ROCCR01` | F616ROC - Registro de Ocorrência | Se ativo e com regra cadastrada, esse identificador será executado quando houver alguma ação de aprovação, desaprovação ou reprovação em ... |
| `FIN-616ROCRE00` | F616ROC | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-616ROCSF01` | F616ROP | Esse identificador tem a finalidade de retornar um filtro para o campo número do projeto. |
| `FIN-616ROCUA01` | F616APO | Esse identificador tem a finalidade de controlar a aprovação de registros de ocorrências que não tenham passado pelo processo de aprovaçã... |
| `FIN-616ROFAP01` | F616APO |  |
| `FIN-616ROFRE00` | F616ROF |  |
| `FIN-616ROPAP01` | F616APO | Se ativo e com regra cadastrada, esse identificador será executado quando houver alguma ação de aprovação, desaprovação ou reprovação em ... |
| `FIN-616ROPRE00` | F616ROP | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-616SRMNF01` | Serviço - RelacionaFaseMunicipio | Disponibilizar variáveis para serem passados valores na geração do relacionamento do município com fases via serviço. |
| `FIN-616SRMNP01` | Serviço - RelacionaProjetoMunicipio | Disponibilizar variáveis para serem passados valores na geração do relacionamento do município com projetos via serviço. |
| `FIN-616SRVLM01` | Serviço de Lançamento Manuais em projetos |  |
| `FIN-616TROCN01` | F616TRO | Esse identificador tem a finalidade de consistir a numeração do código de ocorrências relacionados ao tipo de ocorrência. |
| `FIN-616TRORE00` | F616TRO | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `FIN-616TXCAC01` | F616Txc |  |
| `FIN-616TXCMI01` | F616Txc | Quando estiver ativo permite que o usuario faça a consistencia que preferir para adicionar o item na Grid da tela. |
| `FIN-650INFCO01` | — | Se existir este identificador de regra e o mesmo estiver ativo será permitido realizar a inversão gerencial consolidada, mostrando inclus... |
| `FIN-651ORCAS01` | F651ORC / F651CSC | Esse identificador tem a finalidade de totalizar o orçamento financeiro nas contas sintéticas realizando o somatório da diferença entre c... |

## FPR - Formação de Preço

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `FPR-621ACPUS01` | F621ACP | Com este indentificador ativo e ligado a uma regra é possível durante o processamento de atualização do Custo no Cadastro de Produtos gra... |
| `FPR-621ALTPC01` | — |  |
| `FPR-621CPCRI01` | Geração do Custo Padrão | Este identificador tem como objetivo principal permitir gerar o Custo Padrão dos itens selecionados mesmo que existam críticas. A rotina ... |
| `FPR-621CPPAI01` | F621GPV, F621GSI, F621ACP | Com este identificador ativo, os produtos de 2ª/3ª qualidade e reaproveitados terão seu custo padrão herdado do produto de 1ª qualidade (... |
| `FPR-621DESFI01` | F621APC | quando este identificador estiver cadastrado e ativo, ao utilizar a opção "Última Compra", no campo Origem do Preço Base na tela F621APC,... |
| `FPR-621GRASP01` | F621SIC | Com este identificador de regras cadastrado e ativo, na tela de F621SIC, ao informar uma tabela de seleção de produtos que contenha produ... |
| `FPR-621GSPMO01` | F621APC | Tem como objetivo ler o nome do campo de usuário que armazena a quantidade por montagem informada no pedido, para que seja possível busca... |
| `FPR-621ICMFN01` | F621SIC | Com este identificador de regras ativo e ligado à uma regra é possível buscar o percentual de ICMS por fornecedor na Seleção de Materiais... |
| `FPR-621ICMSD01` | F621APC | Para que seja calculado o Preço de Custo Base na tela de Cálculo do preço de venda para o Comércio utilizando o % Diferencial de ICMS. |
| `FPR-621ICMSR01` | F621APC | Efetuar o cálculo dos valores de impostos de maneira customizada quando o cálculo for efetuado com a opção "Origem do Preço Base" for pel... |
| `FPR-621NCICM01` | F621ACP | Alterar o cálculo do ICMS ST., quando varejo. |
| `FPR-621NFETI01` | Onde realiza busca de valor pela Última Compra | Com este identificador ativo, é possível informar na regra associada, o(s) tipo(s) de Notas Fiscais de Entrada que devem ser ignoradas na... |
| `FPR-621PCCAD01` | F621SIC. | Este identificador de regras tem como objetivo permitir que ao sugerir valores a partir de uma Tabela de Compras, sejam trazidos os perce... |
| `FPR-621PCFOR01` | F621SIC | Este identificador tem como finalidade permitir a busca dos percentuais de Pis e Cofins gravados no cadastro de Fornecedor quando utiliza... |
| `FPR-621PVCAL01` | F621GPV, F621SPV, F621AVC | Com esse identificador ativo, ao utilizar a fórmula 3 (Percentual de margem de contribuição) para cálculo do preço de venda para indústri... |
| `FPR-621PVSIM02` | F621SPV - Simulação do Preço de Venda | Exibir as "Despesas Variáveis de Venda", o "Preço de Venda" e o "Lucro Líquido" sem os valores dos Impostos. |
| `FPR-621SELFN01` | F621SIC | Este identificador tem como finalidade permitir que ao sugerir valores a partir de uma Tabela de Compras, sejam filtrados os produtos/ser... |
| `FPR-621SICDC01` | F621SIC | Este identificador de regra estando ativo fará com que na rotina de Seleção de Materais/Serviços para cotação quando for utilizada a opçã... |
| `FPR-621SICDC02` | F621SIC - Seleção de Materiais\|Serviços para Cotação | Implementado para que quando este identificador estiver ativo, na "Geração da Ficha Técnica" o sistema grave na tabela de cotação (inform... |
| `FPR-621SICDC03` | F621SIC - Seleção de Materiais\|Serviços para Cotação | Este identificador de regra estando ativo fará com que na rotina de "Seleção de Materais/Serviços para Cotação", quando for utilizada a o... |
| `FPR-621SICLF01` | F621SIC | Na tela F075PRO, há o campo "Usa Produto X Fornecedor" que quando estiver com a opção "S" (Sim), é necessário existir a ligação entre "Pr... |
| `FPR-621SUGVL01` | F621APC | Define, automaticamente, através de uma regra, os valores dos campos editáveis para os itens de produto disponíveis na guia Cálculo, da t... |
| `FPR-621TIPME01` | F622FTC,F621SIC,F622CFT | Com este cadastrado, ativo e ligado a uma regra é possível calcular Custos diferentes para o mesmo produto, classificando-os em mercado "... |
| `FPR-621VALIN01` | F622FTC, F621SIC, F621CIC, F621GPP, F621GCP | Permite a valorização de materiais e serviços inativos em custos, além da geração de ficha técnica e formação do custo padrão de produtos... |
| `FPR-622ESCAV01` | F622FTC - Geração de Ficha Técnica Custos | Tem como objetivo esconder críticas de aviso que não impedem importação de Fichas Técnicas no processo de geração de fichas técnicas no C... |
| `FPR-622FTCON01` | Geração da Ficha Técnica - F622FTC | Tem objetivo de buscar, via regra, os consumos utilizados no modelo/roteiro do produto. |
| `FPR-622FTMOD01` | F622FTC. | permite usar um código de modelo diferente na importação de fichas técnicas em custos. Esse modelo deve ser informado no sistema via regra. |
| `FPR-622FTNEW01` | Geração de fichas técnicas | Este identificador tem como objetivo disponibilizar a opção de geração de fichas utilizando a rotina (lógica de programação) antiga, ante... |
| `FPR-622FTROT01` | Geração de ficha técnica | Permite utilizar um código de roteiro diferenciado na importação de fichas técnicas em custos. Este roteiro é informado ao sistema via re... |
| `FPR-622FTSIM01` | Simulação da Ficha Técnica | Calcular via regra, a quantidade utilizada p/ ficha (Conforme unidade de medida) do consumo da matéria-prima por componente. |
| `FPR-622FTVAL01` | Consulta da Ficha valorizada | Se existir este identificador, na Consulta da Ficha valorizada, no campo Quantidade a Simular, será sugerido o Lote Técnico do Roteiro. |
| `FPR-622ICPFT01` | F622CFT e F622FTC. | ignorar o componente produzido na valorização da ficha técnica de custos. Seu retorno define se o componente produzido deve ser ignorado ... |
| `FPR-622OPCSE01` | F622FTC | Quando no Modelo do Produto há por exemplo dois serviços informados para o mesmo estágio, e no Roteiro do Produto neste mesmo estágio há ... |
| `FPR-622SIMUL01` | F622FCM - Ficha Técnica - Simulação | Este identificador permite que as fichas técnicas da Gestão de Preço para Indústria possam ser digitadas com simulação 0(zero), que indic... |
| `FPR-623VLRCP01` | Capacidade Produtiva (F623CPT) | Este identificador permite realizar o cálculo das capacidades produtivas dos centros de custos a partir de outros métodos que não são o p... |
| `FPR-627COLDE01` | Tabelas de Seleção de Produtos para Custos (F627TSP) | Este identificador possibilita definir via regra o campo de usuário da tabela de Derivações (E075DER), onde estarão informadas as coleçõe... |

## GER - Gerais

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `GER-000ABRASF1` | Nota Fiscal de Serviço Eletrônica. |  |
| `GER-000ABRASF2` | — | inibir a geração automática do arquivo eletrônico de envio pelo Gestão Empresarial \| ERP para Notas Fiscais de Serviço Eletrônicas padrão... |
| `GER-000ABRASF4` | — | Permitir que seja retornado se a filial utiliza a geração automática do arquivo eletrônico de envio pelo Gestão Empresarial \| ERP, para N... |
| `GER-000ACVLD01` | — | Este identificador tem por finalidade ignorar as datas de validade das notas fiscais de entrada na integração com WMS SILT. Quando o iden... |
| `GER-000AGRPSER` | sr00pfa.pas | Permitir agrupamento de séries quando as mesmas são sequências durante a exportação de pré-faturas. |
| `GER-000ALDEF01` | Busca de Preço | Permitir que os percentuais definidos por sugestão possam ser alterados. |
| `GER-000ALEMB01` | — | Alterar a transportadora do Pedido/Pré-Fatura/Nota Fiscal, o código da embalagem e o peso da embalagem. Chamado sempre que for gerada uma... |
| `GER-000ALTVB01` | — | Alterar os valores base dos impostos de retenção: COFINS Retenção (Tipo 22), PIS Retenção (Tipo 23), CSLL Retenção (Tipo 24) e OUTRAS Ret... |
| `GER-000APREM01` | — | alterar os usuários que receberão e-mail de aviso para aprovação de um processo nas rotinas de aprovação multinível. Executado apenas qua... |
| `GER-000APREM02` | F405SOL, F405SOS, F405GSA, F405GSP, F460CTR, F440GNE, F441CAP, F461GNC, F501TCP, F501ATL e web service com.senior.g5.co.mcm.est.geracaosolicitacaocompra.GerarSolicitacaoCompra. | permite customizar o e-mail enviado comunicando que a respectiva rotina necessita de aprovação (referente ao controle de aprovação multin... |
| `GER-000APRMU01` | — | alterar os níveis exigidos para aprovação de uma das rotinas de controle de aprovação multinível. Caso não retorne nenhum nível (VSNivExi... |
| `GER-000ATUTB01` | — | Atualizar tabelas de usuário e fazer controles em alguns eventos ocorridos no sistema. |
| `GER-000BAIPG01` | F301MCR;F301LOT;F301BMA;F301BMD;F301BCD;F301BMV;F301BLO;F501MCP;F501BLM;F501LOT;F600GEC | Se existe um fornecedor/cliente ligado ao cliente/fornecedor, verificar se existe algum título em aberto, e mostra mensagem "Fornecedor X... |
| `GER-000BBMOD01` | — | esse identificador de regras tem a finalidade de bloquear as baixas onde a moeda é diferente na conta interna e no título. |
| `GER-000BBMOD02` | F301BMV, F301MCR, F301BCD, F301BMD, F301BMA, F501MCP, F501LOT, F501BLM, F501BMD, F600GEC - opção Pagamento | permite baixar títulos envolvendo três moedas diferentes. |
| `GER-000BLQPE01` | impressão de bloqueto. | com esse identificador cadastrado, é possível enviar o bloqueto diretamente ao cliente por e-mail através das telas de emissão de bloquet... |
| `GER-000BUDEP01` | — | Buscar como depósito padrão, um depósito que seja da filial ativa sempre que este existir, ao invés de buscar o definido no cadastro do p... |
| `GER-000BUDEP03` | — | sugerir o depósito que será utilizado nos pedidos, notas fiscais de saída, ordens de compra e notas fiscais de entrada. |
| `GER-000CAMPR01` | Cadastro de Máscara de Produto | Ao cadastrar um ítem na máscara de produto, será chamada uma regra ligada ao identificador. |
| `GER-000CARDI01` | Integração ERP x Cardio | Parametrizar informações gerais de integração. |
| `GER-000CARDI02` | — | Tem como objetivo permitir informar projetos e fases para rateios importados de títulos do Cardio. |
| `GER-000CASPWMS` | — | Disparar a regra para permitir que o usuário altere a condição de cancelamento do saldo do pedido quando ocorre separação a menor no reto... |
| `GER-000CDPU001` | F085CAD, F095CAD, F073TRA e F090REP | Disponibilizar um ponto em que o cliente possa realizar alguma ação no momento em que o sistema indica que já existe um registro utilizan... |
| `GER-000CFVAR01` | WS Cupom Fiscal | Este identificador de regras tem por objetivo permitir a alteração da transação padrão de produtos e serviços nos dados gerais do cupom f... |
| `GER-000CMSUP01` | — | Consistir e alterar o valor ou percentual de comissão do representante superior de um título. |
| `GER-000CNLOT01` | F217DVP | Disponibilizar, na caixa de agrupamento "Conciliar", as opções "Saldo de Lotes" e "Saldo de Produtos". Ao processar a conciliação com a o... |
| `GER-000COCOT01` | Geral Comercial | Permitir a validação da cotação quando a mesma tem a sua situação alterada pelos processos. Atualmente as cotações podem assumir as 6 sit... |
| `GER-000COCTA01` | — | Diponibiliza a tela, a tabela e as quatro contas contábeis para o cliente fazer a regra de acordo com sua necessidade. |
| `GER-000CONCX01` | — | Implementado o identificador de regras GER - 000CONCX01 que será executado antes do consumo de uma conexão de usuário ao executar uma tel... |
| `GER-000CONSD01` | — |  |
| `GER-000COTAL01` | — | permite informar a cotação de emissão via regra. |
| `GER-000COTMA01` | MOVIMENTOS DE BAIXAS | Com este identificador cadastrado será possível através de regra, alterar o valor da cotação do pagamento para o cálculo da multímoeda na... |
| `GER-000CPLSU01` | F000DLS | Tem a finalidade de controlar a tela F000DLS pelo tempo informado na regra. |
| `GER-000CPTFD01` | — | Permite definir campos para o faturamento do frete e para o cálculo do frete. Recebe como valores de entrada os campos informados na tela... |
| `GER-000CPYCMP1` | — | Esse Identificador de Regras permite informar ao sistema se o campo que chamou a execução deve ou não ter seu valor copiado da Nota de Or... |
| `GER-000CRAVR01` | Todas | No processo do rateio montar o rateio via regra através da função "AdicionaRateioRegra". |
| `GER-000DEVWMS` | — | Permite que sejam alterados os dados da nota de devolução, que é gerada quando há um recebimento a menor no WMS. |
| `GER-000DIFPC01` | Rotina do cálculo do DIFAL. | Não realiza a validação do código ANP do produto no cálculo de DIFAL. |
| `GER-000DIRAN01` | F000ANX | Informar qual diretório será aberto por padrão (no componente de seleção de arquivos) no momento de anexar um documento, bem como, se dev... |
| `GER-000DIRAN02` | — | Permitir manipular o diretório de destino de um arquivo anexo de forma que este arquivo possa ser carregado a partir de qualquer local e ... |
| `GER-000DITAB01` | F909MOA e F210VOL | Determina o intervalo de tempo entre as leituras no processo de pesagem. |
| `GER-000DPUSU01` | — | Define se os campos de usuário serão duplicados ao duplicar uma tabela de preço ou contrato de venda. |
| `GER-000DQCNA01` | Rotinas ligadas a controles por lote | Permitir usuário definir quais campos (características do lote) não poderão ser alterados. |
| `GER-000ECOMM01` | Estoques Exclusão de Movimentos | Possibilita ao sistema conhecer qual é o depósito do e-commerce. |
| `GER-000EMAIL01` | Envio de e-mail |  |
| `GER-000EMBOP01` | F900ERP/Atualização de embalagens via movimento de estoque | Criar um relacionamento entre as embalagens dos pedidos (tabela E120EMB) e as O.Ps. (tabela E900COP), gravando o código da origem e o núm... |
| `GER-000ESCAL01` | Integração ERP x Escalamax | Parametrizar, de forma geral, todos os campos não contemplados nesta integração. |
| `GER-000ESCAL02` | Integração ERP X Escalamax | Disponibilizar durante a integração de um pedido a descrição completa de um item de serviço para regra. |
| `GER-000EUDLE01` | — | Definir estratégias de sequências de uso dos lotes de estoque. Para saber mais sobre todas as possibilidades de sugestão de lotes e série... |
| `GER-000EXCLG01` | — | Permitir filtrar os registros que serão excluídos na rotina de expurgo da tabela Cadastros - Log Genérico (E000LOG). Este identificador s... |
| `GER-000EXPWIS` | — | Permite executar diferentes ações após o commit de cada ordem de separação, tanto no processo de envio quanto no de retorno da separação.... |
| `GER-000FATNE01` | — | Gerar necessidades de produção de pedidos já liquidados ou já produzidos. |
| `GER-000FCIMS01` | F075FCI | Este identificador tem por finalidade alterar a forma de cálculo do Valor Importado e Valor de Saída dos produtos produzidos, quando o me... |
| `GER-000FILLO01` | — | Sugerir a "Filial Logada", no campo "Filial" da tela de seleção. |
| `GER-000FLPRO01` | F081TPA | Aplicar filtro de unidade de medida nos campos de produto da tela "F081TPA", ou seja, restringe o cadastro para produtos com a mesma unid... |
| `GER-000FODSU01` | Rotina 41 - Exportação de movimentos da requisição |  |
| `GER-000GERDE01` | — |  |
| `GER-000GERSDE1` | NFS-e SDE / F051GUI / F661GRI / F440MDF | incluir informações adicionais no arquivo. XML de RPS/NFS-e e MDF-e (emissão e cancelamento) gerado pelo ERP, quando utilizada a forma de... |
| `GER-000GERSDE2` | F140GNF e F140CAN | Disponibilizar as variáveis para a informação dos dados complementares de serviço (atividade portuária e construção civil), conforme Manu... |
| `GER-000GERSDE3` | — | Possibilitar a manipulação de algumas tags do grupo InfSenior na geração de XMLs no padrão Abrasf 1.0 para integração com eDocs. As tags ... |
| `GER-000GERSDE4` | — | altera a descrição do item da nota fiscal eletrônica de serviço (NFS-e), campos Valor Dedução, Valor Desconto, Base ISS, Percentual ISS, ... |
| `GER-000HDTPA01` | F081TPA | Tornar os campos "Pre. Mt. 2", "Cus. MO.", "Consumo Teórico", "Consumo Praticado", "Representante" e "Preço Orçado" somente leitura. |
| `GER-000HFOAU01` | F403FPR, F403LFP, F403LFS, F621CIC, F621SIC, F501BMD, F501GCF, F501MPN, F501SUB, F501TCP, F600GEC, F140LCR, F140LOT, F143ACQ, F143AFI, F145EBQ, F160REP, F161FCV, F172MAN, F115COE, F145EBQ, F145GSM, F140GNF, F420OCB, F440ERT, F420OCP, F211ADA, F410CEA, F410COS, F410PCT, F410SFP, F420DOC, F420GOC, F420GRD, F420OCC, F420OPE, F420OPS, F420OSC, F420OVC, F420PEN, F420PTS, F420RVC, F420SSD, F420TSO, F426CEQ, F435CCT, F435CST, F435GNF, F439FIX, F439SFX, F440CNF, F440DMC, F440ENF, F440GNE, F440NOR, F440NPR, F440NRI, F440VCB, F440VER, F443GNP, F450NFF, F460CTR, F460CXO, F460PFO, F461GNC, F424OCE e F435COS. | validar se a geração automática das definições/histórico do fornecedor será executada sem a necessidade de intervenção do usuário em dive... |
| `GER-000ICECO01` | — | ignorar caracteres especiais nas telas de cadastro, suprimindo a mensagem ao usuário. |
| `GER-000ICPGR01` | F120GRA | Informar qual é o código para a nova proporcionalidade, além de uma descrição da mesma. Ambas as informações são então gravadas no cadast... |
| `GER-000INDOP01` | Notas Fiscais de Saída (F140GNF) , Entrada de Pedidos com Avaliação de Produto (F120GPC) , Entrada de Pedidos Agrupado (F120GPD) e Contratos de Venda (F160NOV) | Sugerir IndOp - Indicador da Operação. |
| `GER-000INFIS01` | — | Permitir que seja definido por documento se o mesmo, deve ou não se integrado ao Gestão de Fretes. |
| `GER-000INGKO01` | — | Com este identificador, será possível alterar as informações da nota fiscal de saída na integração com o Gestão de Fretes \| GKO. |
| `GER-000INGKO02` | — | Com este identificador, será possível definir informações adicionais ou personalizadas da nota fiscal de saída na integração com o Gestão... |
| `GER-000INGKO03` | — | Com este identificador, será possível definir informações adicionais ou personalizadas dos participantes para as notas fiscais de saída n... |
| `GER-000INGKO04` | — | Com este identificador, será possível alterar as informações do item nas notas fiscais de saída, na integração com o Gestão de Fretes \| GKO. |
| `GER-000INGKO05` | — | Com este identificador, será possível definir informações adicionais ou personalizadas do item nas notas fiscais de saída, na integração ... |
| `GER-000INGKO06` | — | Com este identificador, será possível alterar as informações da nota fiscal de entrada na integração com o Gestão de Fretes \| GKO. |
| `GER-000INGKO07` | — | Com este identificador, será possível definir informações adicionais ou personalizadas da nota fiscal de entrada na integração com o Gest... |
| `GER-000INGKO08` | — | Com este identificador, será possível definir informações adicionais ou personalizadas dos participantes nas notas fiscais de entrada, na... |
| `GER-000INGKO09` | — | Com este identificador, será possível alterar as informações do item nas notas fiscais de entrada, na integração com o Gestão de Fretes \|... |
| `GER-000INGKO10` | — | Com este identificador, será possível definir informações adicionais ou personalizadas do item nas notas fiscais de entrada, na integraçã... |
| `GER-000INPAD01` | (26) Integração Padrão | Tem como finalidade possibilitar a manutenção e alteração dos registros importados e exportados através da rotina de integração padrão. |
| `GER-000INPAD02` | (26) Integração Padrão |  |
| `GER-000INPDV01` | integração ERP X CSI | Permitir alterar parametrizações diversas na integração ERP X CSI. |
| `GER-000INTBS01` | Integração Biosalc | Com este identificador de regra ativo, o campo "PRECO" da tabela "INT_CAD_MATERIAL_1" |
| `GER-000INTCNV` | sr000ctr.pas | Permitir parâmetros via regra em consulta de titulos de convênios a serem exportados pelo Web Service 'com.senior.g5.co.mfi.cre.titulos '... |
| `GER-000INTCWMS` | — | Desativar consistências durante a inclusão ou alteração de cadastros integrados com WMS. |
| `GER-000INTEG01` | Integração | Validar as informações que serão registradas no repositório de integrações (E000INT) referentes a inclusões, alterações e exclusões. |
| `GER-000INTEG02` | Integração | Impedir que sejam registradas informações no repositório de integrações (E000INT) referentes a inclusões, alterações e exclusões, para o ... |
| `GER-000INTMV01` | — | Este identificador de regras tem por objetivo permitir ao usuário alterar via regra o valor de alguns campos vindos do sistema "MV000i", ... |
| `GER-000INTMV02` | — | Este identificador de regras tem por objetivo permitir ao usuário alterar via regra o valor de alguns campos vindos do sistema "MV000i", ... |
| `GER-000INTMV03` | — |  |
| `GER-000INTMV04` | — |  |
| `GER-000INTRK01` | — | Permitir adicionar interessados ao tracking de pedidos, permitindo ao interessado consultar os documentos vinculados ao seu CPF/CNPJ. |
| `GER-000INTRK02` | — | Permitir definir os contatos que serão notificados no registro ou cancelamento de fase no tracking. |
| `GER-000INTSG01` | Integração ERP X WMS Saga | Definir parâmetros diversos na integração entre o ERP e o WMS Saga. |
| `GER-000INTSG02` | Integração ERP X WMS Saga | Permitir ao usuário enviar e-mail com o log de erros gerados na Integração Logística com WMS. |
| `GER-000INTSG03` | INTEGRAÇÃO ERP X WMS SAGA | Este identificador de regras, possui a finalidade de possibilitar a alteração do valor atribuido ao "CODPRP" (código do depositante) nas ... |
| `GER-000INTSG04` | INTEGRAÇÃO ERP X WMS SAGA | Este identificador de regras, possui a finalidade de possibilitar a troca da descrição do produto durante o processo de exportação de pro... |
| `GER-000INTSG05` | Integração logística WMS Saga | Permite manipular os valores passados à tabela intermediária "INT_ORDENTSAI" no processo de entrada pois, o ERP não possui algumas inform... |
| `GER-000INTSG06` | Integração logística WMS Saga | Permite manipular os valores passados à tabela intermediária "INT_ITMORDENTSAI" no processo de entrada (notas fiscais de entrada) pois, o... |
| `GER-000INTSG07` | Integração logística WMS Saga | Permite manipular os valores passados à tabela intermediária "INT_ORDENTSAI" no processo de saída pois, o ERP não possui algumas informaç... |
| `GER-000INTSG08` | Integração logística WMS Saga |  |
| `GER-000INTSG09` | Integração logística WMS Saga | Permite manipular os valores passados à tabela intermediária "INT_CADMER" pois, o ERP não possui algumas informações e por isso passa um ... |
| `GER-000INTSG10` | Integração logística WMS Saga |  |
| `GER-000INTSG12` | Integração logística WMS Saga | Permite manipular os valores passados à tabela intermediária "INT_CADPSJ" pois, o ERP não possui algumas informações e por isso passa um ... |
| `GER-000INTSG13` | Integração logística WMS Saga | Permite manipular os valores passados à tabela intermediária "INT_CADPSF" pois, o ERP não possui algumas informações e por isso passa um ... |
| `GER-000INTSG14` | Integração Logística WMS Saga | Permite manipular os valores passados à tabela intermediária "INT_RELSKUBRR" pois, o ERP não possui algumas informações e por isso passa ... |
| `GER-000INTSG15` | Integração ERP X SAGA WMS | Permite manipular as informações que serão armazenadas na tabela intermediária "INT_CADACSPSS". |
| `GER-000INTSG16` | — | Se ativo os campos CODGRPMER (família) e CODGRPREGARM (origem) da tabela intermediária "INT_CADMER" ficaram nulos na exportação de produt... |
| `GER-000INTSG17` | F000INT - Integração WMS Saga | Tem a finalidade de facilitar o uso da tela F000INT para que o usuário não necessite sempre digitar usuário, senha e serviço do banco int... |
| `GER-000INTSG18` | Gestão Empresarial \| ERP Logistica | Alterar a tabela de preço da nota fiscal de venda que será gerada no retorno por industrialização quando a quantidade recebida for menor ... |
| `GER-000INTSG19` | Integração Logística WMS Saga | Permite manipular valores passados à tabela intermediária "INT_RELCARITMORD" nos processos de entrada e saída pois o ERP não possui algum... |
| `GER-000INTSG20` | Integração Logística WMS Saga | Permite manipular valores passados à tabela intermediária "INT_CADLOTFAB" nos processos de entrada e saída pois o ERP não possui algumas ... |
| `GER-000INTSG21` | Integração Logística WMS Saga | Permite manipular valores passados à tabela intermediária "INT_MOVREQALTESQ" nos processos de movimentos de estoque do ERP para o WMS, po... |
| `GER-000INTSG22` | Integração Logística WMS Saga | Permite manipular os valores passados à tabela intermediária "INT_CADMERCMP" nos processos de exportação pacrial/completa de produtos poi... |
| `GER-000INTSG23` | Integração Logística WMS Saga | Identificador que permite desabilitar a geração de logs quando o Lote/Série informado no ERP não é o mesmo que foi separado/recebido no WMS. |
| `GER-000INTSG24` | Integração WMS Saga |  |
| `GER-000INTSG25` | F440GNE - Notas Fiscais de Entrada Agrupada (WMS WIS) | Permitir customizar os campos que podem ser alterados após enviar a nota fiscal de entrada para conferência de recebimento no WMS WIS. |
| `GER-000INTSG26` | Processo automático de integração com o WMS Saga (Rotina 54). | Permitir definir quais componentes de uma composição/ficha técnica serão exportados ao WMS Saga. |
| `GER-000INTSG27` | Inicialização do Processo de Inventário (F220INI) e web service Com.senior.g5.co.mcm.est.geracaoinventario, porta GerarInventarioEstoque. |  |
| `GER-000INTSGCN` | E075BAR | Desligar as consistências da integração WMS Saga |
| `GER-000INTSJ01` | — | Alterar as informações as serem gravadas nas definições do cliente durante a importação de clientes na integração ERP x SJ . |
| `GER-000INTSJ02` | — | Alterar as informações as serem gravadas nas definições do fornecedor durante a importação de fornecedores na integração ERP x SJ. |
| `GER-000INTSJ03` | — |  |
| `GER-000INTSJ04` | — | Validar informações importadas e importar informações de usuários na integração de CTRB (carta de frete) na integração ERP X SJ. |
| `GER-000INTSJ05` | — |  |
| `GER-000INTSJ06` | — | Alterar a transação do(s) item(ns) da nota fiscal de saída, no processo de integração das notas fiscais. |
| `GER-000INTSY02` | Processo automático de exportação de ordens de separação para Sythex. | Permite customizar via LSP, o código de tipo de pedido que utilizado para gravar a ordem de separação no WMS. |
| `GER-000INTSY03` | Processo automático do tipo "rotina" cujo código de rotina é "84" e parâmetro "TIPO" seja "RETORNOEXPEDICAO". | Permite criar procedimento personalizado ao importar o retorno de recebimento de notas fiscais de compra. |
| `GER-000INTSY04` | — | Permite manipular a data de entrega da ordem de separação na integração com WMS WIS. |
| `GER-000INTWM01` | Integração ERP X WMAS | Validar informações exportadas e exportar informações de usuários na integração de produtos e derivações na integração ERP X WMAS. |
| `GER-000INTWM02` | — | Alterar as descrições de produtos ao exportar para o WMAS. |
| `GER-000INTWM03` | Integração ERP X WMAS |  |
| `GER-000INTWM04` | F440WMS | Este identificador tem por finalidade permitir o uso do campo "Aprovar sem enviar ao WMS", que só ficará visível com o identificador cada... |
| `GER-000INTWM05` | Comercial - Compras |  |
| `GER-000INTWM06` | Gestão Empresarial \| ERP Logística | Tem como objetivo enviar e-mails para os responsáveis por processos, avisando-os quando: |
| `GER-000INTWM07` | Integração ERP Logística | Tem o objetivo de fechar uma nota fiscal de entrada automaticamente (sem intervenção humana), ao receber a confirmação do ERP Logística (... |
| `GER-000INTWM08` | Gestão Empresarial \| ERP Srv | Este indentificador de regra permite gerar agrupamentos para documentos (romaneios) de saída das seguintes formas (por integração, por cl... |
| `GER-000INTWM09` | Nota Fiscal de Saída, Pedido, Carga | Tem como finalidade, possibilitar a aprovação de documentos de saída (pedido, carga) sem envio ao ERP Logística. O tipo de documento depe... |
| `GER-000INTWM10` | — | Permite criar consistências impedindo a geração da ordem WMS. |
| `GER-000INVWMS` | — |  |
| `GER-000INWMS01` | — |  |
| `GER-000INWMS02` | — |  |
| `GER-000INWMS04` | — | Permitir que seja manipulado o tipo de recebimento a ser enviado para alocação no WMS. |
| `GER-000INWMS05` | F185CFG | Permitir definir se no retorno de uma nota fiscal conferida pelo Gestão de Armazenagem e que haja recebimento a menor, deve-se gerar auto... |
| `GER-000INWMS06` | F185CFG | Permitir definir na geração da ordem de recebimento, proveniente de nota fiscal de entrada no Gestão Empresarial \| ERP, a situação que o ... |
| `GER-000INWMS07` | — | Permitir manipular a sequência e estado de entrega em uma nota fiscal de saída (devolução) gerada automaticamente por ocasião de conferên... |
| `GER-000INWMS08` | — |  |
| `GER-000INWMS09` | — |  |
| `GER-000INWMS10` | — |  |
| `GER-000INWMS11` | — |  |
| `GER-000INWMS12` | — |  |
| `GER-000INWMS13` | — | Permitir que seja alterada a observação do cabeçalho da ordem de separação. |
| `GER-000INWMS14` | — | Permitir que sejam manipulados alguns dados na geração da nota de devolução, quando solicitado o cancelamento ao Gestão de Armazenagem e ... |
| `GER-000INWMS15` | — | Permitir sugerir um depósito em um movimento de estoque disparado pelo sistema WMS Alcis, quando o mesmo realiza um movimento de bloqueio... |
| `GER-000INWMS16` | — |  |
| `GER-000INWMS18` | F900RCP | Permitir que sejam sugeridas, via regra, algumas informações para a geração da ordem de separação, a partir da tela F900RCP. Também permi... |
| `GER-000INWMS19` | — | Notificar separação a menor de uma ordem de separação enviada ao Gestão de Armazenagem. |
| `GER-000INWMS20` | — | Permitir gerar uma ordem de separação de maneira customizada. Este identificador de regras trabalha associado à função de programador Ger... |
| `GER-000INWMS21` | — | Permitir que seja gerada uma ordem de recebimento de maneira customizada. Este identificador de regras trabalha associado à função de pro... |
| `GER-000INWMS22` | — | Notificar o cancelamento de uma ordem de recebimento pelo Gestão de Armazenagem. |
| `GER-000INWMS23` | — | Notificar uma separação a menor de uma ordem de separação enviada ao Gestão de Armazenagem. |
| `GER-000INWMS24` | — | Permite definir se a nota fiscal de remessa deve ser fechada, quando gerada pelo Gestão de Armazenagem \| WMS. |
| `GER-000INWMS25` | — | Permitir que sejam realizados tratamentos específicos, ao retornar a separação de uma ordem de separação de transferência de estoque agru... |
| `GER-000INWMS26` | — | Permitir que sejam realizadas conversões nas quantidades de envio ao Gestão de Armazenagem \| WMS e retorno do Gestão de Armazenagem \| WMS. |
| `GER-000INWMS27` | — | Permite executar operações por ocasião de um cancelamento de uma ordem de separação de transferência agrupada, com o cancelamento partind... |
| `GER-000INWMS28` | — | permite decidir, via regra, se a ordem de separação/recebimento deve ou não ser gerada para o Gestão de Armazenagem \| WMS Senior. Esse id... |
| `GER-000INWMS29` | — | Permite manipular as embalagens retornadas da separação de pré-fatura pelo WMS Alcis. |
| `GER-000INWMS30` | — | Permite criar um procedimento personalizado após o cancelamento da ordem de separação pelo Gestão de Armazenagem \| WMS Senior. |
| `GER-000INWMS31` | — | Disparar a regra para que o usuário possa tomar alguma ação após o processamento do retorno de uma ordem de separação do WMS Senior ou Al... |
| `GER-000INWMS32` | — | Disparar a regra para que o usuário possa alterar a data de movimento de estoque quando a mesma estiver zerada no retorno de uma ordem de... |
| `GER-000INWMS33` | — | Permite decidir, via regra, se o sinal de faturamento deve ou não ser enviado para o Gestão de Armazenagem \| WMS Senior. Esse identificad... |
| `GER-000INWMS35` | — | Permite customizar o código de barras livre do produto na exportação de documentos para o WMS. |
| `GER-000LBDIN01` | F000LBD | Fazer consistências definidas pelo cliente no início da limpeza de base de dados. |
| `GER-000LNFSE01` | NFS-e | Liberar a integração com emissor de nota fiscal de serviço eletrônica (NFS-e) com emissor "Converge.NET". |
| `GER-000LOTEWIS` | — | Este identificador de regras ter por objetivo mudar a lógica da busca da Data de Fabricação do Lote de um produto para Produtos controlad... |
| `GER-000LTFIL01` | — | Quando este identificador estiver cadastrado e ativo o sistema não preencherá a informação do código da filial logada nas telas de baixas... |
| `GER-000LTFIL02` | — |  |
| `GER-000MANFR01` | — | Incluir ou alterar o rateio somente quando a forma de rateio da transação for maior que zero. |
| `GER-000MAVTE01` | Comercial/Financeiro | O identificador de módulo "GER", código "000MAVTE01" é utilizado nas rotinas de impressão de modelos via sistema (não via gerador de mode... |
| `GER-000MINAG01` | Objeto para Controle de Lotes. | permitir manipular os valores adicionais de lote (agronegócio). É acionado no processamento e fechamento de NFs de entrada. Os campos PER... |
| `GER-000MLRCF10` | Telas de Rateio | Quando este identificador estiver ativo o percentual da conta não precisa ser = a 100% |
| `GER-000MONTA01` | — | Serve para alterar na explosão multinível (ficha) o valor do consumo de determinados componentes conforme conceito de rateio das montagens. |
| `GER-000MONTA02` | — | Serve para alterar na explosão multinível (ficha) o valor dos tempos de determinadas operações conforme conceito de rateio das montagens. |
| `GER-000MOTPA01` | F081TPA | Tornar os campos abaixo visíveis ou invisíveis quando necessário: |
| `GER-000MRTCO01` | — | Permitir ao usuário, que tem permissão para alterar os rateios, alterá-los na tela de manutenção de rateios, mesmo depois de contabilizados. |
| `GER-000MRTTI01` | — | Quando este identificador estiver cadastrado e ativo, o mesmo irá esconder os movimentos da tesouraria que estiverem inativos na tela de ... |
| `GER-000MSCAN01` | F420GOC e F440GNE | Define se o sistema deve ou não exibir mensagem de confirmação ao Cancelar; |
| `GER-000MSSAI01` | F420GOC e F440GNE | Define se o sistema deve ou não exibir mensagem de confirmação ao Fechar a tela; |
| `GER-000NDPFC01` | — | Este identificador de regras tem por objetivo evitar a consistência da natureza da conta financeira (credora e devedora), onde na tela de... |
| `GER-000NOLPJ01` | — | Com este identificar ativo, não atualizará on-line as Contas/Centro de Custos Analíticos (financeiro). |
| `GER-000NOLPJ02` | — | Com este identificar ativo, não atualizará on-line as Contas/Centro de Custos Sintéticos (financeiro). |
| `GER-000NOLPJ03` | — | Com este identificar ativo, não atualizará on-line as Contas/Centro de Custos Analíticos (físico). |
| `GER-000NOLPJ04` | — | Com este identificar ativo, não atualizará on-line as Contas/Centro de Custos Sintéticos (físico). |
| `GER-000NUMER01` | F210GIS | Gerar os intervalos de numeração já com a situação "2 - Numerado". O padrão é "1 -Não Numerado". |
| `GER-000OBTCP01` | — | Permitir que na geração de títulos de impostos no contas a pagar (baseados na tabela "E001TIT") seja possível personalizar a observação d... |
| `GER-000PERBS01` | — | Melhorar a performance do sistema em processos de geração de rateios em pedidos. Sua implementação se deu em resposta às lentidões observ... |
| `GER-000PERMO01` | — | Carregar uma lista com todos os campos chaves da tabela de movimentos de estoque (E210MVP) e consequentemente chamar a tela de personaliz... |
| `GER-000PEUSP01` | Produção | Definir quais usuário podem enxergar a estrutura de determinados produtos. |
| `GER-000PLANO01` | — | Somente atualizará o plano financeiro se a forma de rateio for diferente de zero (sem rateio). |
| `GER-000PLANO02` | — | Com este identificador de regras cadastrado e ativo os títulos de adiantamento do "CRE" e "CPA" que não movimentarem tesouraia trabalharã... |
| `GER-000PORTA01` | — | Caso este identificador exista, serão filtrados os portadores que não estão nem em aceito, tampouco em não aceitos para não aparecerem na... |
| `GER-000PRIPC01` | — | Define o valor padrão da categoria dos produtos por documento, modifica o tipo da entrega ou o CEP de entrega, no envio das informações d... |
| `GER-000PRJTE01` | Tela de Bloqueio do Projeto | Este identificador serve para definir um tempo limite para a tela de bloqueio de projetos permanecer aberta. Esse tempo indicará quando a... |
| `GER-000PRRAT01` | — | Consistir o rateio através de uma regra que será chamada quando houver o recálculo de rateio ou o usuário clicar no botão "OK" na tela de... |
| `GER-000PRRAT02` | — | Possibilita "liberar" ou "manter" o aviso ou bloqueio por insuficiência de saldo no orçamento do projeto. |
| `GER-000PRRAT03` | F000RPF | Somente criar a tela de rateio quando houver necessidade ganhando performance. |
| `GER-000PVTEL01` | Pedidos, Ordem de Compra, Consulta de Posição de Estoques(Lotes), Consulta de Movimentos de Estoque |  |
| `GER-000QTDAR01` | — | Informar uma quantidade de casas decimais para arredondamento do valor das parcelas. |
| `GER-000QTFAT01` | Mercado > Gestão de Distribuição > Cargas > Faturamento > Faturamento Individual de Cargas e Pedidos (F149GNC) | Controla como a quantidade do item na pré-fatura (QtdPpf), da tabela E135PES, é restaurada ao reabilitar uma pré-fatura após a inutilizaç... |
| `GER-000RATLC01` | Geração de rateio via web service | Com o identificador ativo, no momento em que o sistema estiver gerando rateio e o processo estiver sendo executado via web service, as me... |
| `GER-000RATMC01` | Geração de Rateios | Esse identificador tem a finalidade de liberar processo de geração de rateios, quando a transação indicar que a forma de rateio é com con... |
| `GER-000RATTE01` | — | Definir um tempo limite para a tela de rateios permanecer aberta. |
| `GER-000RCGKO01` | — | Com este identificador, será possível alterar informações do título a pagar, na integração com o Gestão de Fretes \| GKO. |
| `GER-000RCTMS01` | — | Permitir a customização das informações do título/parcela da fatura durante o processo de integração logística, antes da consistência na ... |
| `GER-000RCTMS02` | — | Permitir o bloqueio do cancelamento ou da exclusão de títulos vinculados à fatura durante o processo de integração logística, garantindo ... |
| `GER-000RCTMS03` | — | Permitir a personalização dos dados dos títulos após a consistência na base durante o processo de integração logística. Essa regra é exec... |
| `GER-000RCTMS04` | — | Permitir o ajuste, customização e registro das informações no cancelamento de faturas, incluindo a definição de qual transação será utili... |
| `GER-000REMIF01` | — | Desconsiderar o "-" (hífen) ao informar uma agência ou conta bancária nas telas de cadastros e/ou processos das contas e agências do banc... |
| `GER-000RESLIG1` | — | Permitir a personalização da decisão de atualização de vínculos cadastrais entre Cliente, Fornecedor, Transportadora e Representante, cen... |
| `GER-000RETMO01` | Montagem do Código do Produto | Retornar o código do modelo de produção para exibir as combinações referentes a este modelo. |
| `GER-000REVFT01` | Cadastro de Fotos | Permitir ao usuário informar manualmente o número da nova revisão da foto. |
| `GER-000RTCMP01` | F140PRE e F440GNE. | Esse Identificador de Regras permite informar ao sistema quais campos não devem ser copiados ao gerar uma Nota de Entrada/Saída de Devolu... |
| `GER-000SELEF01` | troca de empresa/filial e F700CMC. | disponibilizar um ponto para execução de regras após a troca de empresa ou filial ativa. |
| `GER-000SELEF02` | Gerais, Logon, FSELEMP, FSELFIL | Esse identificador permite aos usuários de forma programática (via regra ligada ao mesmo) restringir o acesso de um usuário a determinada... |
| `GER-000SEQAP01` | Geração de Controle de Aprovação | Controlar internamente no banco através da funcionalidade "Sequence" a numeração automática do controle de aprovação multinível. |
| `GER-000SFGKO01` | — | Alteração do XML da simulação de frete. |
| `GER-000SGCOM01` | F081TPA | Sugerir na grade de digitação dos agrupamentos das tabelas de preços, o percentual de comissão do representante. |
| `GER-000SIDXX01` | — |  |
| `GER-000SOCIN01` | Integração ERP x SOCIN | Habilitar a integração com o sistema SOCIN, em conjunto com o cadastramento dos parâmetros de integração da filial (F070INT). |
| `GER-000SOCIN03` | Integração ERP x E-Connect SOCIN | Definir se um representante deve ou não ser exportado para o sistema E-Connect SOCIN. |
| `GER-000SOCIN04` | Integração ERP X e-connect SOCIN | Permitir ao usuário escolher se um representante deve ou não ser exportado para uma filial. |
| `GER-000SOCIN05` | Processo Automático de Exportação de Produtos - Rotina 55 - Integração Sapiens - Socin. | O identificador GER-000SOCIN05 foi criado com a finalidade de que seja permitida a manipulação da situação tributária, que é exportada da... |
| `GER-000SUFIL01` | F420APR, F440APR, F460APR | Não sugerir a filial ativa nos filtros de cabeçalho das telas de aprovação de multinível. |
| `GER-000SUGVR01` | F081TPA,F081DTV,F081DTP | Sugerir na grade de digitação dos agrupamentos de tabela de preços e também na duplicação (F081DTV), valores para os campos "PREMT2" - Pr... |
| `GER-000SUGVR02` | F081TPA;F081DTV;F081DTP | Sugerir na grade de digitação dos agrupamentos das tabelas de preços, o valor do campo "PREORC" - preço orçado. A sugestão se dará no mom... |
| `GER-000SULOT01` | F000Dls | Sugerir via regra a primeira parte do código de lote ao clicar no botão "Sugere Lotes", utilizando como base a estrutura da máscara defin... |
| `GER-000TABPR02` | F081TPA |  |
| `GER-000VALOG01` | com.senior.g5.co.int.varejo.cupomfiscal - Gravar - Integrações - Varejo - Cupom Fiscal - Gravar | Ativar/desativar log de cupom fiscal. |
| `GER-000VERLO01` | Distribuição de Lotes | Aplicar consistências ao informar um lote na tela "F000DLS" (distribuição de lotes)grid de distribuição. |
| `GER-000WEBMN01` | Menu Web | Definir novos itens de menu no ERP Web, que ficarão subordinados ao menu Personalizadas. |
| `GER-000WNFC01` | Integração Nota Fiscal de Entrada |  |
| `GER-001CARAC01` | — | Ao informar uma Sequência Componente na tela de características por derivação, irá checar se existe algum outro produto/derivação com a m... |
| `GER-001CONPR01` | — | Posicionar na derivação em questão e posicionada também na página de características de derivação ao chamar a consulta de produtos/deriva... |
| `GER-001CSTNS01` | F001MTR | Disponibilizar somente a consulta, desabilitando os botões "Inserir", "Excluir" e "Duplicar". |
| `GER-001MOEDA01` | — | Se não existir cotação para o dia, será feito o seguinte questionamento: "Cotação da moeda XXXX para o dia XX/XX/XXXX não cadastrada, bus... |
| `GER-001TNSAF01` | F001CTC, F001DTE, F001TCM, F001TCP, F001TCX, F001TES, F001TPA, F001TPJ, F001TPM, F001TPR, F001TRE, F001TVE e F001DUP. | Disponibilizar a execução de regras definidas pelo usuário depois de incluir, alterar ou excluir um registro referente aos Dados Gerais d... |
| `GER-012FAM01` | — | Consistência gerais a serem feitas pelo usuário antes de se gravar/alterar uma família de produto. |
| `GER-019SEMFI01` | — | Tratamento multifilial para o controle de retenções de contribuições sociais. |
| `GER-028DTVCT01` | — | Alterar a data de vencimento calculada automaticamente em diversos pontos do sistema (contratos, faturas, notas fiscais, ordens de compra... |
| `GER-030AGEVC01` | F030BAN | Disponibiliza os campos da tabela de agências bancárias (E030AGE) para que sejam controlados pelo usuário estabelecendo a obrigatoriedade... |
| `GER-044CADCC01` | Cad. C. Custos (F044CCU) | Com este identificador ativo, será possível fazer consistências na hora de gravar alterações ou excluir um centro de custos na tela "F044... |
| `GER-044SEQDIS` | Cad. C. Custos (F044CCU) | Sugerir automaticamente a próxima sequência de distribuição na tela F044DCG. A sequência é sugerida quando o campo está zerado e o usuári... |
| `GER-051DISPCSU` | F051DIS. | permite gerar os valores de suspensão do PIS e COFINS via regra. |
| `GER-051DISPN01` | — |  |
| `GER-051DISPN02` | — |  |
| `GER-051SUGDISP` | F051DIS. | permite incluir um comando SQL na busca dos Dispositivos Fiscais para a sugestão. |
| `GER-066VARCV01` | F066VAR | Quando esse identificador estiver ativo, será necessário informar valores para os campos "Valor Máximo Troco" e "Valor Máximo Sangria" na... |
| `GER-068CNARE00` | F068CNA | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `GER-068NAPRE00` | F068NAP | Disponibilizar via regra todos os campos da tela, para que o usuário consista as informações da forma que desejar. |
| `GER-068NAPRE00` | F068UNA | Esse Identificador de Regras permite ao usuário executar consistências nos campos da tela F068UNA. |
| `GER-073CADAS01` | F073TRA | Disponibilizar os campos da tabela de transportadoras (E073TRA) para que sejam controlados pelo usuário estabelecendo a obrigatoriedade v... |
| `GER-073LIGTR01` | — | Ligar transportadoras a fornecedores com CNPJ/CGC diferentes. |
| `GER-073MOTTM01` | F073MOT | Altera o funcionamento do cadastro de motoristas (F073MOT): |
| `GER-073MOTVC01` | F073MOT | Ativar a validação do campo "Habilitação" no cadastro de motoristas. |
| `GER-073NAOMT01` | F135TRA | Não utilizar a ligação "Motorista x Veículo" ao exibir os dados na tela. |
| `GER-073NAOMT02` | F135FCA, F135FCP | Não consistir a ligação "Motorista x Veículo" nas telas de formação de cargas. |
| `GER-073VEIPL01` | F073VEI | Permitir que uma mesma placa de veículo seja cadastrada em várias transportadoras, sendo que todas podem ficar ativas. |
| `GER-073VEIVC01` | F073Vei / Cadastro de Veículos | Ativar a validação dos campos "Certificado", "Renavam" e "Chassi" no cadastro de veículos(F073VEI). |
| `GER-075ALTPR01` | F075EPP | Definir a tabela de preço. Se a tabela de preço já estiver informada na tela, não executará o identificador. |
| `GER-075ALTPR02` | F075EPP | Definir a tabela de preço para os itens. |
| `GER-075ALTSD01` | F075DPE, F075PRO e F075GFP. | permitir alterar a situação das derivações na empresa destino na rotina de duplicação de produto entre empresas. |
| `GER-075ATUDE01` | Cadastro de produtos | Atualizar automaticamente a descrição do modelo, roteiro e componente ao alterar a descrição de um produto. |
| `GER-075CACDF01` | F075PRO | Confirmar se atualiza o código/descrição fiscal da derivação do produto com o código/descrição fiscal montado pelo sistema conforme defin... |
| `GER-075CALPE01` | Todas as telas que fecham a nota fiscal de saída. | Este identificador de regras tem a finalidade de alterar os percentuais dos impostos para produtos e serviços. |
| `GER-075CAMPO01` | F075CAP/F075EPP | Personalizar campos de consulta da tela de "Análise de Produto" e de "Estoque/Preço de Produto". |
| `GER-075CAMPO02` | F120GPD, F129IPD, F405GSA, F420GOC, F440GNE, F119OCT, F140VCB, F120GPC, F120MCK, F016APV e F120GPB. | apresentar a tela de consulta de estoque/preço produto (F075EPP) em vez da tela padrão de consulta de produto ao pressionar a tecla `F3` ... |
| `GER-075CAMPO03` | F075EPP | Em complemento ao identificador "GER-075CAMPO01", este identificador permite montar um filtro personalizado para o conteúdo dos campos pe... |
| `GER-075CAMPO04` | F120GPD. | possibilitar a criação de um produto **Kit** no lançamento de pedidos na tela Entrada de Pedidos Agrupado (F120GPD). |
| `GER-075CAREG01` | F075EPP | Executado na tela "F075EPP" após o clique do botão "Mostrar", durante a carga dos registros na grade da referida tela. |
| `GER-075CDCPD01` | (F075PRO, F075LCA e F075GCP | Consistir a descrição livre informada para características sem componentes, nas telas do sistema onde é possível fazer a ligação entre ca... |
| `GER-075CDEAO01` | F075CDE, F075LCA, F075GCP, F075DPO | Disponibilizar um ponto onde possam ser feitos processamentos específicos após operações realizadas sobre um registro de característica d... |
| `GER-075CDETP01` | F075ETP e F075AET | Permitir a consistência na inclusão, alteração e exclusão das ligações entre produtos e especificações. |
| `GER-075CDLCB01` | F075BAR | Executado sempre que um registro for inserido, alterado ou excluído, sendo que a execução se dará antes das alterações serem confirmadas ... |
| `GER-075CNDPD01` | F075DPO e F714DEM | Permitir informar campos cujos valores não deverão ser duplicados para o novo produto/derivação. |
| `GER-075CPRAO01` | F075CPR, F075LCA, F075GCP, F075DPO, F075DPE | Disponibilizar um ponto onde possam ser feitos processamentos específicos após operações realizadas sobre um registro de característica d... |
| `GER-075CREPD01` | Exclusão de produtos/derivações | Ao excluir um produto ou derivação nas telas de cadastro do Gestão Empresarial \| ERP, internamente o sistema executa uma rotina que perco... |
| `GER-075CUGFP01` | F075GFP | Habilitar campos de usuário na tela de cadastro agrupado de produtos (F075GFP). |
| `GER-075DER01` | Cadastro de Produtos/Derivações | Permitir que o usuário consista, através da regra, o valor dos campos da tabela de produtos, guia derivações, para complementar as consis... |
| `GER-075DERAO01` | F075PRO, F075GFP, F075DPO, F075DPE, F075PFF, F075PPG, F075GRD. | Permitir processamentos específicos após operações realizadas sobre um registro de derivação de produto (E075DER). Chamado ao incluir, al... |
| `GER-075DESDR01` | F075PRO/F075GFP - Cadastro de Produtos | Permite alterar a descrição da derivação do produto pelas telas de cadastro de produtos, F075Pro e F075Gfp. O campo ficará habilitado par... |
| `GER-075DPENC01` | F075DPE, F075PRO, F075GFP, F080SER e F080CSA. |  |
| `GER-075EMAFL01` | F075PFL | Alterar, a partir da regra, o corpo e o assunto do email enviado para os reponsaveis pelas filiais no momento em que os produtos são reti... |
| `GER-075FCITE01` | F075FCI | Possibilitar a manipulação do conteúdo dos campos "Valor Importação", "Valor Saída", "Coeficiente FCI" e "Código do FCI". |
| `GER-075FCITE02` | F075FCI | Este identificador de regra quando ativo, deve retornar quais as aplicações de transações que serão desconsideradas durante a leitura das... |
| `GER-075FCIVS01` | F075FCI | Quando o identificador estiver ativo, irá buscar os componentes informados no modelo, e que não são utilizados na produção, para consider... |
| `GER-075FDFGF01` | Cadastro agrupado de produtos (F075GFP) | Quando este identificador estiver ativo, na tela de cadastro agrupado de produtos, as derivações serão filtradas de acordo com as faixas ... |
| `GER-075FOTPR01` | F075CPF | Este identificador tem por finalidade mostrar a foto em tamanho real na tela F075CPF. |
| `GER-075MARGM01` | Comercial/Vendas/Pedidos/Avaliação de Produto | Habilitar a utilização de uma regra para cálculo das margens de lucro utilizada na tela de entrada de pedidos com avaliação de produto (F... |
| `GER-075MCPRO01` | F075MCP (Montagem de Código de Produtos) | Permitir a montagem do código automaticamente através da sua regra. |
| `GER-075ORDQT01` | Cadastro de produtos agrupado (F075GFP) | Informar qual o critério de ordenação a ser considerado ao clicar no botão "Mostrar" da tela "F075GFP", bem como a quantidade de registro... |
| `GER-075PDFTD01` | Duplicação de produtos entre empresas | Duplicar produtos mesmo que o tipo de produto da origem na empresa destino seja diferente do tipo na empresa origem, ou seja, será possív... |
| `GER-075PPCAO01` | F075PPC, F075PCA, F075PGA | Disponibilizar um ponto onde possam ser feitos processamentos específicos após operações realizadas sobre um registro de ligação de produ... |
| `GER-075PRO01` | Cadastro de Produtos | Consistir os valores dos campos da tabela de produtos para complementar as consistências já existentes no sistema, conforme as necessidad... |
| `GER-075PRO02` | — | Consistir se o usuário ativo tem permissão para acessar a tela de produtos. |
| `GER-075PROAO01` | F075PRO, F075GFP, F075DPO, F075DPE, F075PFF, F075PPG, F075GRD | Disponibilizar um ponto onde possam ser feitos processamentos específicos após operações realizadas sobre um registro de produto (E075PRO... |
| `GER-075SELCP01` | — | Indicar quais os campos da tela de seleção (F075SEL) determinados usuários poderão ou não visualizar. |
| `GER-075SUDEP01` | — | Sugerir um depósito ao entrar na tela de "Análise de Produtos". |
| `GER-075TOCPD01` | F075CPD | Filtrar os registros mostrados na página Observação (1) pelo tipo da observação. |
| `GER-075USMPI01` | Montagem de Código de produto | Aplica tratamento multiusuário no cadastramento de produtos utilizando a mesma máscara incremental, por dois ou mais usuários simultaneam... |
| `GER-075VOLPD01` | F075PRO e F075GFP | Permite manipular o valor dos campos de Volume do Produto e Volume da Derivação. |
| `GER-080SERVI01` | F080SER e F080CSA | Consistências gerais a serem feitas pelo usuário antes de incluir, alterar ou excluir um serviço tanto no cadastro individual quanto no a... |
| `GER-080SERVI02` | F080SER e F080CSA | Executado após a inclusão, alteração ou exclusão de algum serviço, ou seja, após as informações serem gravadas ou excluídas no banco de d... |
| `GER-081ARRTP01` | — | Personalizar o arredondamento na tabela de preço quando da duplicação da tabela de venda. Na tela de "Seleção" deverá ser selecionado "Ar... |
| `GER-081COITP00` | F081TPA/F081GTP | Tratar apenas os itens de produto da tabela de preço. As suas características são: |
| `GER-081COITP01` | F081TPA/F081GTP | Tratar apenas os itens de produto da tabela de preço. As suas características são: |
| `GER-081COITP02` | F081TPA/F081GTP | Tratar apenas os itens de produto da tabela de preço. As suas características são: |
| `GER-081COTPV01` | F081TPA/F081GTP | Disponibilizar os dados gerais da tabela de preço para que possam ser efetuadas consistências antes de gravar ou alterar uma tabela de pr... |
| `GER-081DERGN01` | Busca de Preço | Efetuar a busca do preço base do produto sem filtrá-lo por derivação, ou seja, considera-se uma derivação genérica para o item. |
| `GER-081INTAB01` | Tabela Preços de Vendas | Controlar quais serão as tabelas de preços de vendas que serão integradas com o sistema PDV CSI. |
| `GER-081PEREX01` | F081TPA | Indicar se ao editar uma tabela de preços na tela agrupada, o usuário terá permissão para alterar informações do cabeçalho, das validades... |
| `GER-081UFTBL01` | — | Indica que os campos de tabela de preço devem respeitar o filtro descrito na regra do identificador de regras GER-000SELEF01. Eles respei... |
| `GER-082COTPC01` | F082GTP | Disponibilizado para efetuar consistências no momento de Cadastro/Alteração da tabela de preço de compra (guia Dados Gerais) ou das valid... |
| `GER-082PROFO01` | F082GTP. |  |
| `GER-084PISOL01` | F084FXA | A coluna "Sólido" da tela "F084FXA" ficará habilitada para a digitação e receberá o valor "N" automaticamente mesmo que haja somente uma ... |
| `GER-085CADAS01` | F085CAD | Alterar o valor padrão dos campos (inclusive de usuário) ao iniciar uma inserção no cadastro de clientes. |
| `GER-085CADAS02` | F085CAD. |  |
| `GER-085CADCL01` | F085CAD | Disponibiliza os campos da tabela de clientes (E085CLI) para que sejam controlados pelo usuário estabelecendo a obrigatoriedade via regra. |
| `GER-085CADCL02` | F085CAD | Aciona uma regra qualquer quando o botão "Regra", da tela de cadastro de clientes, é pressionado. |
| `GER-085CLIAO01` | F085CAD, F095FOR | Disponibilizar um ponto onde possam ser feitos processamentos específicos após operações realizadas sobre um registro de cliente (E085CLI... |
| `GER-085CLICA01` | F085INC | Criar, via regra, verificações se deve ou não mostrar todas as informações existentes na tela "F085INC". Este controle é feito via regra ... |
| `GER-085COBVC01` | F085COB | Disponibilizar os campos da tabela de endereços de cobrança de clientes (E085COB) para que sejam controlados pelo usuário na inclusão ou ... |
| `GER-085COENT01` | F085ENT | Este identificador foi criado com a finalidade de consistir alterações no endereço de entrega. |
| `GER-085CONMC01` | F085MCL | Fazer a consistência da inclusão, alteração ou exclusão da ligação cliente marca. |
| `GER-085CTOCL01` | — | Executar uma regra antes de gravar o registro (E085CTO). |
| `GER-085CXCCI01` | F085CXC | Com esse identificador cadastrado e associado a uma regra, ao carregar os dados para inserir novas ligações, na tela F085CXC será sugerid... |
| `GER-085CXCCI02` | F085CXC | Na carga dos dados de uma ligação para realizar uma alteração, será executado este identificador de regras permitindo a consulta dos dado... |
| `GER-085ENDGR01` | F085CAD | Permite definir os dados de entrega e cobrança do cliente. |
| `GER-085HCLAO01` | — | Disponibilizar um ponto onde possam ser feitos processamentos específicos após operações realizadas sobre um registro de definições/histó... |
| `GER-085HCLVP01` | F085CAD, F085HCL | Alterar o valor padrão dos campos, inclusive de usuário, ao iniciar uma inserção no cadastro de definições/históricos de clientes. |
| `GER-085HISCL01` | F085CAD, F085HCL | Disponibiliza os campos da tabela de histórico de clientes (E085HCL) para que sejam validados via regra. |
| `GER-085NGRCE01` | F085COB e F085ENT | Evita que na gravação de endereços de cobrança (E085COB) ou de endereços de entrega (E085ENT) de um cliente, os indicativos "E085CLI.TEMC... |
| `GER-085NOAQA01` | F135MPF | Não considerar, na tela de manutenção de pré-faturas (F135MPF), o parâmetro "% Acima Pedido Aceito" das definições do cliente (E085HCL.PE... |
| `GER-085OBSCL01` | Inclusão de clientes | Impede que seja gravada a observação, na "E085OBS", gerada quando um cliente é cadastrado no sistema. |
| `GER-085OBSCL02` | — | Permite gerar observações automáticas quando das alterações dos dados do cliente, que são: Nome, Endereço, Bairro, Cep, Cidade, Estado e ... |
| `GER-085VCNPJ01` | F085CAD | Este identificador tem a finalidade de consistir o CNPJ e CPF informados na tela de cadastro de clientes PROSPECT quando estiver ativo. |
| `GER-090CADRE01` | — | Executar uma regra antes de gravar um registro na tabela de representantes (E090REP). |
| `GER-092TPJRE00` | Projetos - Tipos de Projetos | Este identificador serve para efetuar as consistências via regra, de todos os campos disponíveis na tela mais as variáveis de sistema, po... |
| `GER-094CDECT01` | F094ECT | Consistir a inclusão, alteração e exclusão de registros na tela "F094ECT", tanto na página "Dados Gerais" quanto na página "Componentes". |
| `GER-095CADFO01` | F095CAD | Disponibiliza os campos da tabela de fornecedores (E095FOR) para que sejam controlados pelo usuário estabelecendo a obrigatoriedade via r... |
| `GER-095CADFO02` | F095CAD | Aciona uma regra qualquer quando o botão "Regra", da tela de cadastro de fornecedores, é pressionado. |
| `GER-095CADFO03` | F095CAD | Disponibilizar os campos da tabela "E095FOR" (cadastro de fornecedores) para que sejam visíveis via regra quando da inserção de um novo f... |
| `GER-095CADFO04` | SI095FOR | Ligar automaticamente um cliente a um fornecedor no momento do cadastro do cliente, caso o cliente já esteja cadastrado como fornecedor e... |
| `GER-095CTOAO01` | F095CTO | Disponibilizar um ponto onde possam ser feitos processamentos específicos após operações realizadas sobre um registro de contato de forne... |
| `GER-095CTOFO01` | — | Executar uma regra antes de gravar um registro na tabela de contatos de fornecedores (E095CTO). |
| `GER-095FORAO01` | F095CAD, F085CAD, F073TRA, F073MOT | Disponibilizar um ponto onde possam ser feitos processamentos específicos após operações realizadas sobre um registro de fornecedor (E095... |
| `GER-095FORAO02` | F095CAD, Serviços - Cadastro Fornecedores | Permite efetuar consistências em todos os campos da tabela de fornecedor, além de permitir atribuir valores para campos de usuário desta ... |
| `GER-095FORVP01` | F095CAD | Alterar o valor padrão dos campos (inclusive de usuário) ao iniciar uma inserção no cadastro de fornecedores. |
| `GER-095HFOVP01` | F095CAD, F095HFO | Alterar o valor padrão dos campos (inclusive de usuário) ao iniciar uma inserção no cadastro de definições/históricos de fornecedores. |
| `GER-095HISFO01` | F095CAD, F095HFO e F095HDU. | Disponibiliza os campos da tabela de histórico de fornecedores (E095HFO) para que sejam validados via regra. |
| `GER-095ORMAO01` | F095ORM | Disponibilizar um ponto onde possam ser feitos processamentos específicos após operações realizadas sobre um registro de endereço de orig... |
| `GER-099NCUOP01` | F099UCA | Não sugerir o cadastramento do usuário como operador quando cria ou altera o cadastro de usuário. |
| `GER-099UXPRE00` | — | Efetuar consistências, via regra, de todos os campos disponíveis na tela mais as variáveis de sistema. |
| `GER-115PRC001` | F115PRC. | Atribuir permissão aos usuários para os botões Retomar Prc. e Cancelar Prc. existentes na tela F115PRC. |
| `GER-120ALQTD01` | F120GPD | Alterar a quantidade do item do pedido após o mesmo ter efetuado cálculo de necessidades e a OP não estiver em produção. |
| `GER-120EUDLE01` | Pedidos | Anteriormente para fazer a sugestão de lotes o usuário deveria habilitar o identificador de regras "GER-000EUDLE01". Com este identificad... |
| `GER-120PEDAP01` | F120GPD, F120GPC, F120GPB e F129PED | Com esse identificador cadastrado e associado a uma regra, no momento de gerar as parcelas nas telas de pedidos (F120GPD, F120GPC, F120GP... |
| `GER-120PUCAN01` | F127MCC | Este identificador irá sugerir um analista para algum determinado pedido da F127MCC de acordo com a regra cadastrada. |
| `GER-135EUDLE01` | Pré-faturas e cargas. | Utilizado nas rotinas de pré-faturas e cargas. Antes, para fazer a sugestão de lotes, era necessário habilitar o identificador de regra G... |
| `GER-135FECCG01` | F135FEC | Este identificador tem por finalidade adaptar a tela para embalagens multi-nivel juntamente com processo de embarque e desembarque de emb... |
| `GER-135ORDEM01` | F135AEA | Altera a ordenação dos itens de pedido que são processados na tela Atendimento Automático de Pedidos (Análise de Embarque) (F135AEA) |
| `GER-140ALTVSID` | SID.NFV.ATUALIZARNFE | Esse Identificador de Regras tem por finalidade alterar a |
| `GER-140EUDLE01` | Notas Fiscais de Venda | Anteriormente para fazer a sugestão de Lotes o usuário deveria habilitar o identificador de regras "GER-000EUDLE01". Com este identificad... |
| `GER-140GPLTPDR` | — | Esse identificador de regras possibilita o faturamento de nota fiscal de saída que possua itens controlados por lote e estejam com o lote... |
| `GER-140NFVAP01` | F140GNF | Permite através de uma regra sugerir os percentuais para descontos de antecipação e pontualidade nas parcelas das notas fiscais de saída ... |
| `GER-140ORDEM01` | F135GNA. | Altera a ordenação dos itens da pré-fatura que são processados a partir da pré-fatura. |
| `GER-140REMCA01` | — | Utilizado para remover caracteres específicos informados pelo usuário durante a emissão do XML. |
| `GER-180HMOS01` | F180MOS. | Permite criar uma regra LSP para exibição dos registros da tela F180MOS. |
| `GER-210EADLE01` | Distribuição de lotes | Definir critérios/estratégias de abate dos lotes de estoque, para os quais foram feitas reservas, ou seja, quando existe reserva em lotes... |
| `GER-210EUDLE01` | Telas que movimentam Lote com exceção de movimentos manuais (F210MVP e F210LOT) | Anteriormente, para fazer a sugestão de lotes o usuário deveria habilitar o identificador de regras "GER-000EUDLE01". Com este identifica... |
| `GER-210EUDLE02` | F210LOT | Sugerir lotes no processamento de movimentos de saída de produtos controlados por lote. O identificador disponibilizará uma opção no cabe... |
| `GER-660CCRED01` | — | Consistir o valor dos cancelamentos da Redução Z com o valor líquido de cupons cancelados + valor líquido de cupons abandonados + valor d... |
| `GER-900EADLE01` | — | definir critérios/estratégias de abate dos lotes de estoque para os quais foram feitas reservas. |
| `GER-900EUDLE01` | — | Definir critérios/estratégias de sequências de uso dos lotes de estoque. |
| `GER-900EUDLE02` | — | Definir critérios/estratégias de sequências de uso dos lotes de estoque na geração dos lotes dos componentes da ordem de produção. |
| `GER-CANSUP0155` | — | quando ativo, não realiza a consistência de processamento multiusuário no fechamento das notas de venda. |
| `GER-CONSISTCEP` | — | ativa a consistência dos campos bairro e endereço no cadastro de CEP. |
| `GER-DESVISUAL0` | — | desabilita alguns visuais da Senior X, que não interferem na utilização do sistema, mas somente na sua aparência web. Com o identificador... |
| `GER-MON0292912` | F301BCD. | facilitar a identificação dos valores duplicados nos totalizadores da tela de Baixa por Recebimento de Cheques/Diversos do Contas a Receb... |
| `GER-MOTORCALCP` | — | Este identificador tem o objetivo de melhorar a performance do motor de cálculo dos impostos da Reforma Tributária (CBS/IBS), com foco em... |
| `GER-RATPERZERO` | — | permite fazer um rateio por percentual quando os campos VlrRat e VlrCta não forem preenchidos. |

## IMP - Impostos

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `IMP-000INS8601` | U000INR.PAS | Quando este identificador estiver ativo, serão executados os SQL's declarados nas variáveis disponibilizadas no lugar dos SQL's fixos do ... |
| `IMP-000INS8603` | U000INR.DFM e U000INR.PAS | Este identificador permite alterar o nome padrão dos arquivos texto gerados a partir da rotina de exportação dos arquivos da IN-86. |
| `IMP-000INS8606` | U000INR.PAS | Este identificador permitir a alteração dos nomes dos arquivos gerados nos registros. |
| `IMP-000INS8901` | F000INS | Quando este identificador estiver ativo, serão executados os SQL's declarados nas variáveis disponibilizadas no lugar dos SQL's fixos do ... |
| `IMP-000INS8903` | F000INS | Este identificador permitir a alterar o nome padrão dos arquivos texto gerados a partir da rotina de exportação da IN-89. |
| `IMP-000INTRC01` | F000INS e F669INS | Este identificador permite efetuar a troca de posição dos campos "Nr.Documento" e "Nr.Arquivamento" no arquivo gerado da tela F000INR e F... |
| `IMP-075FCISQ01` | F075FCI | Permitir ao usuário alterar os comandos SQL padrões do ERP no cálculo da FCI, quando é feito a busca pelos produtos produzidos e seus com... |
| `IMP-660APREXE` | apuração de impostos e declarações fiscais. Por exemplo: F669EFD, F669SPC, F669ECF, F669GDM (DESIF) e F669GDM_2 (ISS Municipal). | verificar se um processo integrado a um sistema de workflow pode ser executado pelo usuário indicado. Ao executar a regra, os dados são g... |
| `IMP-660CALCI02` | — | Este identificador quando cadastrado e ligado a uma regra, possibilita a alteração do índice do CIAP. |
| `IMP-660CALCI05` | F661CCI | Permitir que o valor de outros de ICMS das operações de vendas diferidas (CST = X51) sejam somados ao valor tributado no cálculo do índic... |
| `IMP-660CNFEXE` | apuração de impostos e declarações fiscais. Por exemplo: F669EFD, F669SPC, F669ECF, F669GDM (DESIF) e F669GDM_2 (ISS Municipal). | confirmar a execução de um processo integrado a um sistema de workflow para que possa ser executado pelo usuário indicado. |
| `IMP-660CONLA01` | F660NFV, F660NFC e F660TOF | Quando o identificador estiver cadastrado e ativo é possível via regra, implementar consistências para parar o lançamento de uma nota fis... |
| `IMP-660ESTOR01` | e660eli | Quando o identificador estiver cadastrado e ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL'... |
| `IMP-660I20SIMN` | — |  |
| `IMP-660INIES03` | F075CEP. | faz a ligação entre uma nota fiscal de saída/cupom fiscal e uma nota fiscal de entrada considerando o método do UEPS (último que entra, p... |
| `IMP-660INTEG01` | Integração de Notas Fiscais (F660INT). | quando o identificador estiver cadastrado e ativo, serão executados os SQLs declarados nas variáveis disponibilizadas no lugar dos SQLs f... |
| `IMP-660INTEG02` | — | Quando o identificador estiver cadastrado e ativo, os códigos atribuídos às variáveis servirão de filtro na rotina de integração das nota... |
| `IMP-660INTEG03` | F660INT | Este identificador é utilizado na integração das notas fiscais de entrada e saída da Gestão de Suprimentos e Mercado para a Gestão de Tri... |
| `IMP-660INTEG04` | F660INT | Este identificador é utilizado na integração das notas fiscais de entrada e saída da gestão de suprimentos e mercado para a gestão de tri... |
| `IMP-660INTEG05` | Integração Comercial-Fiscal | Este identificador tem por finalidade permitir o acesso aos dados que estão sendo gravados no banco de dados durante a rotina de integraç... |
| `IMP-660INTOD01` | F660IFI | Quando o identificador estiver cadastrado ativo, serão executados os SQL's declarados nas variáveis disponibilizadas, no lugar dos SQL's ... |
| `IMP-660INTOD02` | F660IFI. | este identificador tem por finalidade permitir alterar as informações que serão listadas na grade. Ao utilizá-lo, todos os valores necess... |
| `IMP-660INTOD03` | F660IFI | Quando o identificador estiver cadastrado ativo, serão executados os SQL's declarados nas variáveis disponibilizadas. Estes SQL são execu... |
| `IMP-660INTOD04` | F660IFI | Este identificador permite visualizar linha a linha da grade o que foi gravado na base de dados, caso exista a necessidade de estar inici... |
| `IMP-660INTRZ02` | F660INZ | Quando o identificador estiver ativo, o mesmo irá permitir alterar os valores das tabelas de "Totalizadores Diários" durante o processo d... |
| `IMP-660INTRZ06` | ReduçãoZ | Irá efetuar ajustes necessários na importação de uma reduçãoZ em que por ventura haja diferenças entre a alíquota e situação tributária d... |
| `IMP-660NCALC01` | Nota Fiscal de Entrada e Saída | Ação SID: quando este identificador estiver cadastrado e ativo, tem como finalidade não consistir os valores na importação da nota fiscal... |
| `IMP-660NFAWS01` | web service com.senior.g5.co.mct.imp.importarnotasfiscaisentrada. | suspende a modificação/alteração de notas com a mesma chave cadastrada na importação via web service, permitindo apenas inserir novas not... |
| `IMP-660QTDDEC1` | Integração Comercial-Fiscal (F660INT). | definir a quantidade de casas decimais em que serão arredondadas as alíquotas de PIS ST e COFINS ST durante o processo de integração de n... |
| `IMP-660RACDS01` | Somente na importação de Redução Z através do seguinte web service: | Indicar a realização do cálculo de ajuste de acréscimo e desconto na integração de redução Z. |
| `IMP-660STALIQ1` | — | Ao integrar para Tributos notas que possuam substituição tributária de PIS e COFINS, o valor da alíquota parametrizado no cadastro do imp... |
| `IMP-661AJUICMS` | Resumo de Apuração do Imposto (F661I18) | Este identificador permite inserir ajustes na apuração do ICMS, sem excluir os ajustes já adicionados na apuração de ICMS. |
| `IMP-661APISCOF` | — | O objetivo desse identificador é permitir os ajustes das contribuições sugeridos pela apuração de forma automática (normalmente relaciona... |
| `IMP-661BPISCOF` | — | O objetivo desse identificador é permitir que sejam sugeridos novos ajustes para apuração das contribuições de PIS/Cofins, sendo que os a... |
| `IMP-661CADIM01` | F661CAD. |  |
| `IMP-661CALAB01` | F661I12. | automatizar o ajuste das bases de cálculo do PIS/COFINS. Com ele ativo, o sistema lança como ajuste de base de cálculo (redução/acréscimo... |
| `IMP-661CALCI01` | F660NCI. | possibilitar a manutenção dos campos "Quantidade Meses CIAP, Valor ICMS Não Creditado, Valor ICMS, Valor ICMS Substituído, Diferença Alíq... |
| `IMP-661CALIM01` | c661IA1 | Este identificador permite alterar os valores e descrições dos campos da tela de calculo F661IA1 - Cálculo de IPI. |
| `IMP-661CALIM02` | F661IA1 | Este identificador permite alterar os valores e descrições dos campos da tela de cálculo do ICMS. |
| `IMP-661CALIM03` | — | Este identificador permite alterar os valores e descrições dos campos da tela de cálculo dos impostos IRPJ Lucro Presumido ou CSLL Presum... |
| `IMP-661CALIM04` | c661Ia4 | Permitir alteração de valores e descrições dos campos da tela de cálculo dos impostos PIS Não Cumulativo e COFINS Não Cumulativo. |
| `IMP-661CALIM05` | — | esse identificador de regra permite alterar os valores e descrições dos campos da tela de cálculo dos impostos ISS, PIS Substituto, Cofin... |
| `IMP-661CALIM06` | c661Ia6 | Este identificador permite alterar os valores da tela de cálculo dos impostos do tipo "6" (Base Faturamento). |
| `IMP-661CALIM07` | c661Ia7 | Este identificador permite alterar os valores da tela de cálculo dos impostos do tipo "98" (Contábil). |
| `IMP-661CALIM08` | F661IA8 | Este identificador permite alterar os valores da tela de cálculo dos impostos do tipo "30" (Super Simples). |
| `IMP-661CALIM09` | c661Ia9 | Este identificador permite alterar os valores da tela de cálculo dos impostos dos tipos "96" (Totalizador) e "97" (Livre). |
| `IMP-661CALIM10` | F661I10 | Este identificador permite alterar os valores da tela de cálculo do imposto do tipo "34" (ICMS ST por Estado), "63" (Dif. Aliq do ICMS in... |
| `IMP-661CALIM11` | F661I11 | Este identificador permite alterar os valores e descrições da tela de cálculo do imposto do tipo "95" (Regime de Caixa/Financeiro). |
| `IMP-661CPISCOF` | — | O objetivo desse identificador é permitir alterar os ajustes dos créditos sugeridos pela apuração de forma automatica (normalmente relaci... |
| `IMP-661DPISCOF` | — | O objetivo desse identificador é permitir que sejam sugeridos novos ajustes para a apuração das contribuições de PIS/Cofins, sendo que os... |
| `IMP-661EXCRST1` | F661EXC. | impedir que os créditos e suas compensações, apurados na tela Tributos pagos a maior/indevidamente (F661RST), sejam estornados durante o ... |
| `IMP-661EXTIT01` | F661FIN | Este identificador tem por sua finalidade permitir filtros para a exclusão dos titulos no financeiro. |
| `IMP-661FIMAT01` | F661PAI | Permitir a apuração agrupada do imposto do tipo 95-Regime de Caixa/ Financeiro. |
| `IMP-661GIREC01` | — | Este identificador permite alterar os campos da tabela E661GRI antes que a Guia de Recolhimento seja gravada na base. |
| `IMP-661GIREC02` | — | Permitir ao usuário calcular e atualizar, via regra, os valores de multa e juros (juros/multa) na guia de recolhimento. |
| `IMP-661GRTIT01` | F661IA1, F661IA2, F661IA3, F661IA4, F661IA5, F661IA6, F661IA7, F661I8, F661I9, F661I10 e F661I11 | Neste identificador está disponibilizado todo o conteúdo necessário para gerar o título de imposto no contas a pagar, possibilitando sua ... |
| `IMP-661IASQL02` | — |  |
| `IMP-661METDI01` | F661I12 | Quando este novo identificador estiver cadastrado e ativo, durante o cálculo dos impostos PIS e Cofins, o campo referente a proporcionali... |
| `IMP-661NFDEV01` | F661IA9 | Este identificador tem por finalidade alterar a data de inicio em que as devoluções de vendas deverão ser consideradas na apuração do imp... |
| `IMP-661PAICP01` | F661I14, F661I15, F661I16 e F661I17. | ao utilizar a função COMPENSAR_PRJ_BCN, com este identificador ativo o sistema vai consumir, preferencialmente, os saldos de BC negativa ... |
| `IMP-661PROCPRE` | F661I12, F661I15 e F661I19. | gerar informações sobre a apuração dos impostos 41, 42, 43, 44, 47, 48, 55, 56 e 65. Ele é ativado durante o processamento das apurações ... |
| `IMP-667RIRCP01` | F667RIR | este identificador tem por finalidade alterar o valor da receita, calculado a partir do movimento ao apurar o faturamento de competência ... |
| `IMP-667RIRCX01` | F667RIR | este identificador tem por finalidade alterar o valor da receita, calculado a partir do movimento ao apurar o faturamento de competência ... |
| `IMP-667RIRDV01` | F667RIR | este identificador tem por finalidade alterar o valor da receita, calculado a partir do movimento ao apurar as devoluções do faturamento ... |
| `IMP-669BEM01` | SPED Fiscal. | mantém os caracteres especiais no campo 02 - COD_IND_BEM (Código do Bem) nos registros 0300 e G125 do SPED Fiscal. O caractere pipe "\|" é... |
| `IMP-669DMEGD01` | F669DME. | Quando o identificador de regra estiver ativo, será gerado no quadro 48 da DIME, informações referente ao item E, que diz o seguinte: "e)... |
| `IMP-669GDIME01` | F669DME. | permite habilitar a regra para modificações de valores da DIME durante o processamento das informações. A regra é ativada ao clicar no bo... |
| `IMP-669GDIME02` | F669DME. | permite habilitar a regra para modificações de valores da DIME durante a leitura do arquivo gerado. A regra é ativada ao clicar no botão ... |
| `IMP-669GESPC01` | F669SPC | Possibilitar a geração da declaração SPED PIS/Cofins a partir de um agrupamento de filiais. |
| `IMP-669ISIMO01` | F669ISI | Este identificador permite alterar os campos, exceto os chaves, das tabelas E660NFV, E660INV, E660NFC, E660INC, E660TOF, E660REZ e E660IR... |
| `IMP-690AQRCO01` | — | este identificador de regras tem por objetivo permitir ao usuário a inclusão de uma regra que altere os dados do campo **VENTCF** na gera... |
| `IMP-690AQRCO02` | — | manipular o valor da Forma de Tributação do Fornecedor. |
| `IMP-690FORNF01` | R-2055 - Aquisição de Produção Rural (F690APR) e EFD-Reinf - Integração (F690ILA). | quando ativo, **não** verifica o cliente base do grupo de empresas, considerando o fornecedor da nota fiscal na importação dos lançamento... |
| `IMP-690ILARRAD` | F690ILA. | Alterar, a partir da regra, o comando SQL responsável pela geração dos registros R-2030 (Recursos Recebidos por Associação Desportiva) e ... |
| `IMP-690INTEG01` | F690ILA | Este identificador possibilita que o usuário ignore o comando SQL padrão do sistema, e escreva o seu próprio SQL, para a busca dos regist... |
| `IMP-690INTEG02` | F690ILA | Este identificador de regra possibilita as alterações de qualquer campo que estão sendo gravados na estrutura do eSocial, conforme uma in... |
| `IMP-690NATREND` | F690ILA. | permite, por meio de regra, a troca da **Natureza de rendimentos** na integração da EFD-Reinf. |
| `IMP-690REGCOMP` | EFD-Reinf - Integração (F690ILA). Para mais informações, confira o tópico Registros R-4010 - Retenções na Fonte - Pessoa Física e R-4020 - Retenções na Fonte - Pessoa Jurídica. | quando ativo, permite que sejam integradas, via tela F690ILA, as baixas de títulos substitutos originados de notas fiscais de entrada com... |
| `IMP-690REGRRET` | EFD-Reinf - Integração (F690ILA). Para mais informações, confira o tópico Registros R-4010 - Retenções na Fonte - Pessoa Física e R-4020 - Retenções na Fonte - Pessoa Jurídica > **Títulos vinculados à nota fiscal**. | quando ativo na integração do R-4020 por meio da F690ILA, será feito o recálculo da base e valor das retenções de contribuições sociais r... |

## INT - Integrações

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `INT-000GFSBF01` | — | Este identificador de regras permite inibir o uso da informação do código do benefício fiscal durante a geração do grupo fiscal de saída ... |
| `INT-000INTXT01` | — | Executado antes do processamento da movimentação de estoque, tem como objetivo permitir a alteração dos dados da requisição em formato JSON. |
| `INT-000INTXT02` | — | Executado após o processamento da movimentação de estoque, tem como objetivo permitir alterações e ajustes posteriores à execução da API. |
| `INT-000MECDP01` | — | é executado através do processo automático, e seu objetivo é permitir a inclusão de um filtro adicional ao SQL de busca das formas de pag... |
| `INT-000MECDP02` | — | é executado através do processo automático, e seu objetivo é permitir a manipulação de algum dos campos enviados ao Mercado Eletrônico. |
| `INT-000MEFOR01` | — | é executado através processo automático e seu objetivo é permitir a inclusão de um filtro adicional ao SQL de busca dos fornecedores que ... |
| `INT-000MEFOR02` | — | é executado através processo automático e seu objetivo é permitir o envio da tag GRUPO_FORNECEDOR para o Mercado Eletrônico. |
| `INT-000MEFOR03` | — | é executado através processo automático do Mercado Eletrônico e seu objetivo é permitir a chamada do serviço GetMessageFornecedor na plat... |
| `INT-000MEOC001` | — | é executado através do processo automático, e seu objetivo é permitir o ajuste de código de moeda nas ordens de compra recebidas pela int... |
| `INT-000MEOC002` | — | é executado através do processo automático, e seu objetivo é permitir a manipulação de alguns campos dos dados gerais da ordem de compra ... |
| `INT-000MEOC003` | — | é executado através do processo automático, e seu objetivo é permitir algum ajuste ou validação após a inserção da ordem de compra vinda ... |
| `INT-000MEOC004` | — | permitir personalizar a observação adicionada à ordem de compra referente as alterações de Status do pré-pedido no Mercado Eletrônico. |
| `INT-000MESC001` | — | é executado através do processo automático e seu objetivo é permitir a inclusão de um filtro adicional ao SQL de busca das solicitações d... |
| `INT-000MESC002` | — | é executado através do processo automático e seu objetivo é permitir o envio de atributos no item e no cabeçalho da requisição. |
| `INT-000MESC003` | — | é executado através do processo automático e seu objetivo é permitir a personalização de alguns campos presentes no XML da requisição. |
| `INT-000MESSC01` | — | é executado através do processo automático da integração do Mercado Eletrônico e seu objetivo é permitir a personalização de um campo de ... |
| `INT-115PRPCM01` | — | Este identificador permite a customização das informações enviadas para o App do Produtor Rural. |
| `INT-410LIBCOT1` | — | Tem como finalidade permitir a personalização do processo de liberação automática do processo de cotação para o quadro comparativo. Escol... |
| `INT-TRAVAOCAP1` | — | Reduzir o número de envios de status de pré-pedido para o Mercado Eletrônico quando uma ordem de compra está em aprovação multinível. Não... |

## MNT - Manutenção

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `MNT-103ADEAB01` | Cadastro de Equipamentos |  |
| `MNT-103AGELP01` | F103CEM | O objetivo deste identificador é permitir alterar o grupo de equipamentos ligados ao Patrimônio. |
| `MNT-103CCCEQ01` | F103CCE | Permitir que sejam feitas consistências personalizadas na inclusão/alteração/exclusão de coletas. |
| `MNT-103TSMEQ01` | Manutenção | A finalidade deste identificador é disponibilizar uma regra que será executada após a criação de uma manutenção e também na sua sua progr... |

## PAT - Patrimônio

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `PAT-670AGLOC01` | F670MAN | Agrupar as quantidades das localizações que estão no mesmo local real, portador e centro de custos em apenas um registro de localização. ... |
| `PAT-670ARRPE01` | F670EBN e F670EBI. | Quando cadastrado e ativo, realiza o arredondamento do percentual da NFE nos itens para quatro casas decimais. Utilizar quando for necess... |
| `PAT-670BAIOL01` | Geração de Movimentos (F670MAN) | Com este identificador de regras cadastrado e ativo, a movimentação patrimonial de baixa, quando possuir valor de venda informado, realiz... |
| `PAT-670BEMNF01` | F670EBA (Grade Item Nota Fiscal de Entrada). | quando ativo e com regra definida, permite criar uma regra para definir mais de um bem principal para cada item de nota fiscal. Conforme ... |
| `PAT-670BEMRE00` | F670BEM | Disponibilizar via regra os principais campos da tela antes de Inserir/Alterar, para que o usuário consista as informações da forma que d... |
| `PAT-670BEMRE01` | F670BEM | Disponibilizar via regra os principais campos da tela após inserir/alterar bens, para que o usuário consista as informações da forma que ... |
| `PAT-670BEMRE02` | F670BEM. | disponibilizar, via regra, os principais campos da tela antes de excluir um registro. Isto a fim de que o usuário consista/valide as info... |
| `PAT-670CALIN01` | Controladoria > Gestão de Patrimônio > Atualização Patrimonial > Geração (F670MEM). | quando cadastrado e ativo, a geração de cálculo será da seguinte forma: calcula todos os bens ativos, busca as empresas, filiais, espécie... |
| `PAT-670CALRE00` | F670CAL | Disponibilizar via regra os principais campos da tela antes de confirmar o processamento, para que o usuário consista as informações da f... |
| `PAT-670CCTUR01` | F670MAN | Permitir que o usuário determine, através de regra, se o bem deve assumir o turno do centro de custos. |
| `PAT-670CCUES01` | F670EBN. | Com este identificador de regra ativo, ao dar entrada em um bem por meio da rotina de inclusão de bens via NFE (F670EBN), será sugerido o... |
| `PAT-670CEMRE00` | F670CEM | Disponibilizar via regra os principais campos da tela antes de confirmar o processamento, para que o usuário consista as informações da f... |
| `PAT-670CEMRE01` | F670CEM | Disponibilizar via regra os principais campos da tela ao processar cada registro, para que o usuário consista as informações da forma que... |
| `PAT-670CONCC01` | Inclusão via NFE | Quando a máscara do código do bem possui espécie com a indicação "Verifica Espécie", é realizada a consistência da conta contábil e centr... |
| `PAT-670CONCL01` | f670CEM | Tem por finalidade consistir o processo do cálculo do bem. Antes do processamento do cálculo para cada bem, o sistema executará a regra a... |
| `PAT-670CONSI01` | Cadastro de bens/locais e Transferências entre centro de custos | Com uma regra associada é possível realizar consistências no cadastro de bens e localizações, assim como no processo de transferências en... |
| `PAT-670CORTE01` | F670CAL - Controladoria > Gestão de Patrimônio > Atualização Patrimonial > Geração | 1) Possibilita a alteração da depreciação acumulada oficial de corte utilizada na desvalorização por vida útil. |
| `PAT-670DESICM1` | F070FEF | desconta também o ICMS ST (E440IPC.VLRICS / E660INC.VLRSIC / E660INC.VLRIST / E660INC.VLRICN) do item na entrada do bem para o patrimônio... |
| `PAT-670DIFAC01` | Inclusão de Bens | Quando cadastrado e ativo, não permite cadastrar um bem com o campo "Tipo Acréscimo" diferente do informado na transação usada. Além de f... |
| `PAT-670DPTOT01` | F670CAL | Quando cadastrado, ativo e associado a uma regra, o usuário poderá estipular um valor base em moeda corrente para a depreciação total do ... |
| `PAT-670ECARE00` | F670ECA | Disponibilizar via regra os principais campos da tela antes de confirmar o processamento, para que o usuário consista as informações da f... |
| `PAT-670ENTVA01` | inclusão via NFE/requisição | permite alterar os campos Vlr. Uni. Aquisição Bem, Vlr. Uni. Aq. Bem p/ Créd. PIS, Vlr. Uni. Aq. Bem p/ Créd. COFINS e Vlr. Uni. Aq. Bem ... |
| `PAT-670ENTVA02` | F670EBI. | permite alterar o valor dos campos Vlr. Uni. Aquisição Bem, Vlr. Uni. Aq. Bem p/ Créd. PIS, Vlr.Uni.Aq.Bem p/ Créd. COFINS e Vlr. Uni. Aq... |
| `PAT-670ENTVA03` | Inclusão via NFE/Requisição | Permite a alteração do valor do campo "Vlr.Uni.Aquisição Bem" da grade de itens das notas fiscais de entrada de tipo 8 (NF Frete/Serviços... |
| `PAT-670ILORE00` | F670ILO | Disponibiliza via regra os principais campos da tela antes de confirmar o processamento, para que o usuário consista as informações da fo... |
| `PAT-670ILORE01` | F670ILO | Disponibiliza via regra os principais campos da tela ao processar cada registro, para que o usuário consista as informações da forma que ... |
| `PAT-670LOCMT01` | F670BEM | Por padrão, na inserção de um bem, o número da plaqueta recebe o código do bem ou permanece em branco, dependendo da parametrização da pe... |
| `PAT-670LOGER01` | F670EBA. | Gerar um LOG, na pasta de logs definida no CFG, quando ocorrer erro na inclusão de bem via requisição (F670EBA). Neste log poderão ser co... |
| `PAT-670LOTRE00` | F670LOT | Disponibiliza via regra os principais campos da tela antes de confirmar o processamento, para que o usuário consista as informações da fo... |
| `PAT-670LOTRE01` | F670LOT | Disponibiliza via regra os principais campos da tela ao processar cada registro, para que o usuário consista as informações da forma que ... |
| `PAT-670MANRE00` | F670MAN | Disponibiliza via regra os principais campos da tela antes de confirmar o processamento, para que o usuário consista as informações da fo... |
| `PAT-670MANRE01` | F670MAN | Disponibiliza via regra os principais campos da tela ao processar cada registro, para que o usuário consista as informações da forma que ... |
| `PAT-670MANRT01` | F670MAN | Até a versão 5.8.4: |
| `PAT-670MANTA01` | F670MAN | Quando cadastrado e ativo, fará com que o sistema não atualize as taxas de depreciação dos bens de acréscimos não assinalados na moviment... |
| `PAT-670MBEHB00` | F670CEM | Quando cadastrado e ativo, habilita o botão "Validar Bens" que possibilita o acesso à tela "F670MBE". |
| `PAT-670MCLRE00` | F670MCL | Disponibiliza via regra os principais campos da tela antes de confirmar o processamento, para que o usuário consista as informações da fo... |
| `PAT-670MCLRE01` | F670MCL | Disponibiliza via regra os principais campos da tela ao processar cada registro, para que o usuário consista as informações da forma que ... |
| `PAT-670MEMRE00` | F670MEM | Disponibilizar via regra os principais campos da tela antes de confirmar o processamento, para que o usuário consista as informações da f... |
| `PAT-670MEMRT01` | Memória de Cálculo Patrimonial (F670MEM). | Considerar movimentação de centro de custo no rateio. |
| `PAT-670NAODP01` | F670MAN | Quando cadastrado e ativo, não realiza o cálculo da depreciação automaticamente para os bens no momento das movimentações. |
| `PAT-670PREBA01` | F140NMP | Permite informar o nome de qualquer campo da tabela de bens (inclusive campos de usuário) para que seja sugerido o respectivo valor na ge... |
| `PAT-670RATNF01` | F670EBN | Quando cadastrado e ativo, ao cadastrar bens pela tela F670EBN, os novos bens herdarão o rateio da nota fiscal de origem (caso exista rat... |
| `PAT-670RATNF02` | F670EBI | Quando cadastrado e ativo, ao inserir bens pela tela F670EBI, os novos bens herdarão o rateio da nota fiscal de origem (caso exista rateio). |
| `PAT-670SALPT01` | F670CAL | Quando cadastrado e ativo, ao realizar uma movimentação utilizando a transação relacionada ao identificador de regras não será atualizada... |
| `PAT-670SUGAC01` | Inclusão e Manutenção de Bens | Quando cadastrado e ativo, será sugerida as datas de aceleração de depreciação no cadastro de bens, conforme o turno de depreciação. |
| `PAT-670TIPNF01` | F670EBA, F670EBN e F670EBI | Limitar os tipos de NF-e que devem ser apresentadas para integrar ao patrimônio nas telas abaixo: |
| `PAT-670TRFAC01` | F670MAN | Quando cadastrado e ativo, não permitirá transferências entre acréscimos e de bens principais para acréscimos. Caso algum dos campos abai... |
| `PAT-670TXDPR01` | Contábil>Patrimônio>Manutenção>Cálculo | Quando estiver cadastrado, ativo e relacionado a uma regra, possibilitará a mudança do percentual de depreciação do bem na rotina de cálc... |
| `PAT-670VLRAC01` | F670MAN - Controladoria > Gestão de Patrimônio > Controle de Bens > Movimentação > Geração | Quando este identificador de regras estiver cadastrado e ativo, na movimentação de alteração de vida últil com a opção de gerar acréscimo... |
| `PAT-674CONCL01` | F674CON | Tem o objetivo de permitir ou não a visualização do item de menu F674CON (F674CON - Cadastros > Controladoria > Patrimônio > Parâmetros p... |

## PCP - Planejamento e Controle Produção

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `PCP-000EPSIM01` | Geração do Cálculo de Necessidades, Geração de OP, F700CMC, F710CRP, F700FML | Possibilitar a execução das rotinas de Cálculo de Necessidades e Geração de OPs em terminais simultaneamente. |
| `PCP-000GOPVP01` | F900GLI, F910GPR | Permitir gerar OPs contendo mais de um produto, desde esse produto pertençam a mesma família e possuam o mesmo roteiro. A regra possui a ... |
| `PCP-800EPAFP01` | Fechamento Pedido | Explodir e Gera OP automaticamente no fechamento de um pedido, independente de que tela o pedido está sendo fechado. |
| `PCP-800SCHED01` | F800ITS (Importação TheScheduller) | Com este identificador ativo, será possível efetuar consistências (através da regra associada) na importação de cada registro do arquivo ... |
| `PCP-802EMAIL01` | F802MCI | Permitir enviar um email após alguma alteração no calendário industrial. |
| `PCP-813AEQIP01` | F813GNE e F813PRO. | indica se o sistema deve abater ou não o estoque disponível da quantidade a produzir de um item de pedido selecionado na explosão de nece... |
| `PCP-813AEQIP02` | F813PRO. | Indica se o sistema deve abater ou não o estoque disponível da quantidade a produzir de um item de pedido na grade da guia Produto/Serviç... |
| `PCP-813AGRNE01` | Explosão de Necessidades | Criado identificador para retornar o valor para o Campo Agrupamento de Necessidades. |
| `PCP-813ALTDT01` | Explosão de Necessidades | Permitir o usuário determinar a data líquida (limite para compra) da solicitação de compra. Serão passados para regra as seguintes inform... |
| `PCP-813AVADI01` | Calculo Necessidades (F813GNE) | Retorna as origens que não devem abater a disponibilidade de estoque da quantidade necessária. Quando ativo e não houver uma regra inform... |
| `PCP-813AVSLD01` | Explosão de Necessidades | Tem a função de buscar e abater da quantidade a produzir saldos de necessidades gerados a mais por agrupamento/período produção. Estes sa... |
| `PCP-813BUSOC01` | Explosão de Necessidades | No processo de explosão de necessidades, permita considerar somente as ordens de compras dentro de um determinado período ou conforme par... |
| `PCP-813CCSOL01` | Explosão (F813GNE) / Geração de O.Ps. (a partir da 5.3.2.1) | Permitir que na geração das solicitações de compra durante a explosão de necessidades, seja possível definir o centro de custo a ser util... |
| `PCP-813ERNBC01` | F813CNE | Eliminar as reservas de estoque da necessidade de compra ou produção dos componentes que não constam mais na estrutura do modelo. Ao canc... |
| `PCP-813EXPNE01` | — | Se existir este identificador, na explosão de necessidades não reservará estoque p/ os componentes cuja a origem estiver informada na reg... |
| `PCP-813FILGO01` | Explosão de Necessidades | Permitir o usuário definir o parâmetro Gera OP do Produto por filial. |
| `PCP-813GEREX01` | Explosão de Necessidades | Criado Identificador para tratar assuntos diversos na explosão de necessidades. Abaixo estão as varíaveis liberadas para esse identificador: |
| `PCP-813GRREP01` | Explosão de Necessidades | Permite ao usuário que, quando o sistema avaliar minimos de estoque do produto, possa ser gerado uma necessidade de reposição ou em vez d... |
| `PCP-813ITEEX01` | Explosão de Necessidades | Esse identificador foi criado para: |
| `PCP-813MNEST01` | Explosão de Necessidades | Identificador criado para avaliar Quantidades Mínimas, Máximas e Múltiplas do estoque. Quando uma necessidade é gerada, o sistema verific... |
| `PCP-813RESES01` | Explosão de Necessidades | Caso o identificador estiver cadastrado e ativo, o sistema não irá mais reservar automaticamente na explosão de necessidades o item de pe... |
| `PCP-813RETPD01` | Explosão de Necessidades | Retornar pedidos que serão selecionados e também retornar o agrupamento de explosão. A regra é chamada no evento mostrar. |
| `PCP-813TIPDS01` | Explosão de Necessidades. | Permitir escolher quais depósitos fazem parte da busca da quantidade disponível do componente, e também escolher qual será o depósito da ... |
| `PCP-813VRFQM01` | — | Identificador criado para que a Explosão e Geração de Ops não verifiquem mais a Qtde Mínima estabelecida no Produto. |
| `PCP-816GEROP01` | F816GRP | Quando este identificador estiver cadastrado e ativo, não será possível gerar necessidade para reposição de estoque na tela "Manufatura >... |
| `PCP-816GERPE01` | Produção para Repor Estoque | Caso o identificador estiver cadastrado, ativo e não possuir regra ligada, o sistema irá gerar pedido de previsão com os itens selecionad... |
| `PCP-816ORDEM01` | Analise Reposição Produção | Definir Ordenação Para Geração de Produção Repor Estoque. Essa ordenação refere-se a sequencia que os dados aparecerão na grade. |
| `PCP-820NDTSO01` | Simula Carga de Recursos (multinível) (F820SRE). | quando ativo, no cálculo da carga de recursos o sistema não descontará o tempo de sobreposição sobre o tempo total previsto da operação. ... |
| `PCP-850JCCRU01` | Simulação de Componentes | Esse identificador será chamado para cada linha retornada na tela, assim o usuário irá retornar um campo Ref. e a tela irá agrupar por Co... |
| `PCP-900AQMDM01` | F910GPR | Fazer reserva do componente avaliando uma qtde múltipla, que é a própria qtde utilizada do modelo. Prestar muita atenção com a qtde base ... |
| `PCP-900AQPOP01` | Alteração de Qtde Prevista da OP (F900AQP) | permitir ao usuário consistir a alteração da quantidade prevista da O.P.. |
| `PCP-900CANOP01` | F900CAN/F920COA | Permitir fazer validações antes do cancelamento de O.Ps. |
| `PCP-900CCOCS01` | Geração de ordens de compras de serviço via produção | Através da regra associada a este identificador, é possível definir qual centro de custos deve ser atribuído a cada item de serviço da or... |
| `PCP-900CGROP01` | F900ROP | A finalidade deste identificador é consistir as informações da tela F900ROP antes de iniciar o processamento dos dados. |
| `PCP-900CMORE01` | Inclusão/alteração/exclusão de componentes na OP/OS | Consistências no ato de inclusão, alteração ou exclusão de registros da tabela E900CMO. |
| `PCP-900DORBY01` | F900ADR - Alterar data prev./recalc. tempos/refazer Estágios e Operações da O.P./O.S. | Definir a ordem de listagem dos registros sobre a grade "O.Ps./O.Ss. para alteração da data prevista/recálculo dos tempos" da tela F900AD... |
| `PCP-900DPPPR01` | — | Permitir que o usuário utilize um sequenciamento (prioridade) a partir de um determinado produto e não apenas de O.Ps, que é o padrão. |
| `PCP-900EIROP01` | — | Quando este identificador estiver ativo, é possível refazer os estágios e operações de uma O.P. que controlava por estágios e agora contr... |
| `PCP-900FOCLO01` | — | Este identificador de regras tem por objetivo fechar a Ordem de Compra de Serviço automaticamente na liberação da ordem de produção. As l... |
| `PCP-900IGRMC01` | F909MIF, U916COL, Coletores | Identificador para Gerar Registro de Melhoria Contínua. |
| `PCP-900LIBOP01` | Liberação de O.Ps. (F900GLI) | Permitir que o usuário faça consistências através da regra deste identificador para verificar se a O.P. pode ser liberada. |
| `PCP-900MCEOP01` | Recalculo de componentes OP | O Padrão da tela de recalculo é sempre exlcuir o componente não utilizados, mas se tiver o identificador cadastrado, sempre irá excluir o... |
| `PCP-900NBLOP01` | F900GLI | Quando ativo, este identificador desabilita a validação feita na liberação de OP que obriga a mesma a ter as ordens de compra para serviç... |
| `PCP-900PDOCS01` | F900RST, F910GPR | Permitir alterar a descrição da Ordem de Compra gerada a partir da remessa de serviços para terceiros. |
| `PCP-900PSRMD01` | — | Ter um produto X com um modelo que contém um determinado serviço, e outro produto Y com um modelo sem o respectivo serviço. Sendo que, am... |
| `PCP-900RETEV01` | Explosão de Necessidades | retornar o indicador (Sim/Não) se o componente foi enviado pelo cliente. |
| `PCP-900ROPMC01` | F900ROP | Se a opção selecionada não for Sumarizada ou Duplicação, ao clicar no processar e com a opção "Gerar Comp" desmarcada, o identificador fa... |
| `PCP-900RPAGP01` | F910GPR | Permitir usuário gerar tabela de usuário ou qualquer outra coisa com a OP que acabou de ser gerada. |
| `PCP-900SEQOP01` | Geração de O.Ps. | Ativar a utilização do sequence do banco Oracle para gerar a numeração das O.Ps. |
| `PCP-900SRATOP01` | F900ADR. | Recalcular automaticamente os tempos e datas previstas da OP, após ter alterado a data prevista de início ou fim da OP/Estágio, independe... |
| `PCP-900TMLIB01` | — | Quando este identificador estiver ativo, será habilitada uma coluna na grade da tela F900GLI para que o usuário informe um novo modelo a ... |
| `PCP-910ACZRP01` | F910GPR | assume a categoria do cliente com zero para que este campo não seja considerado na quebra do relatório produção. Ao mostrar os dados na t... |
| `PCP-910AGROC01` | — | Ao gerar uma O.P. (não interessa de que tipo), o ERP por conceito agrupa todas as Ordens de Compra por Fornecedor. Para o cliente que não... |
| `PCP-910ALQGA01` | F910GPR | Ignorar a quantidade que o produto pai impôs sobre o filho, e sim respeitar as quantidades mínima, máxima e múltipla do produto em questã... |
| `PCP-910AQMOP01` | F910GPR | Esse identificador de regras tem como objetivo permitir que o usuário altere a quantidade máxima de produção no momento em que se vai ger... |
| `PCP-910CAEOP01` | F910GPR | Quando ativo, este identificador (Considera abatimento do estoque na geração da O.P.) deve retornar uma variável igual a "S - Sim" ou "N ... |
| `PCP-910CCEGO01` | F910GPR | Permitir definir se deverá ser avaliado possíveis componentes equivalentes. |
| `PCP-910CRPJG01` | U910Gpr | Na geração de O.Ps, gerar número do sub-lote a partir do último número qdo relatório de produção for o mesmo. |
| `PCP-910DDFOP01` | Geração de O.Ps./O.Ss. | Através da regra deste identificador será possível definir a data prevista de fim da O.P./O.S.. |
| `PCP-910DOPGO01` | F910GPR | Este identificador de regra tem como finalidade a ordenação para geração de Ordens de Produção. Esta ordenação refere-se à sequência em q... |
| `PCP-910DOPPI01` | F910GPR | Permitir usuário ordenar produtos intermediários na geração de OPs. |
| `PCP-910DPQOP01` | F910GPR. | As iniciais do identificador de regra (PCP-910DPQOP01) significa, Depósito na Quebra de OP. |
| `PCP-910DRGOP01` | Geração de O.Ps. | Através da regra deste identificador é possível definir o depósito de reserva dos componentes da O.P.. |
| `PCP-910DSSRO01` | Geração de O.Ps. (F910GPR). | permitir que o usuário escolha a melhor opção de roteiro para uma determinada operação da O.P. Também é possível escolher a melhor opção ... |
| `PCP-910ECNOP01` | — | Este identificador de regras tem por objetivo permitir que o usuário entre com um número que será a própria O.P. gerada. As letras ECNOP ... |
| `PCP-910ERQMI01` | F910GPR e F900ROP | Exceção Regra Quantidade Mínima |
| `PCP-910ERQMU01` | — | (Exceção a Regra da Quantidade Múltipla igual a 1). Se existir este identificador e determinado produto que está para gerar O.Ps. possui ... |
| `PCP-910ERQMU02` | — | (Exceção a Regra da Quantidade Múltipla e a OP for digitada). Se este identificador estiver ativo e a ordem de produção for digitada o si... |
| `PCP-910FPGOP01` | F910GPR | Deixar de aplicar o filtro do campo GerOrp da tabela E075PRO. Por default (sem identificador cadastrado) o filtro é "((E075PRO.GERORP = '... |
| `PCP-910FUGOP01` | Geração de OPs (F910GPR) | Permitir usuário concatenar uma parte do comando SQL que retorna dados pra gerar OP(s). |
| `PCP-910GEROP01` | — | Se existir este identificador, na geração de O.Ps. Será levado em consideração a forma de agrupamento que o próprio usuário criou na gera... |
| `PCP-910GOCSF01` | F910GPR, F900RST | Define que, na geração de ordem de compra para serviços de terceirização de OP, a ordem de compra deve ser gerada já com situação finaliz... |
| `PCP-910GOPJL01` | — | Permitir que as O.Ps. já sejam geradas com situação liberada. |
| `PCP-910GOSSL01` | F910GPR | Gerar OPs Sem Sub-Lote. |
| `PCP-910MRPMF01` | — | Quando este identificador estiver ativo e ligado a uma regra, é possível definir o código do relatório de produção (lote). |
| `PCP-910MRPMF02` | F910GPR. | Define um novo código de relatório de produção diferente para cada linha da grade da guia Detalhado, da tela Geração de Ordens de Produçã... |
| `PCP-910NGOCS01` | — | Indica que, na geração de OP, não será gerada ordem/solicitação de compra para os serviços de terceirização. |
| `PCP-910NGQOI01` | — | Não gera quantidade O.P. pelo índice de cada derivação em relação ao montante. Tendo esse identificador cadastrado, pega-se uma derivação... |
| `PCP-910NUSQO01` | F910GPR | Não utilizar sub-lote como fator de quebra de OP em produtos intermediários. Independente disso, as OPs deverão ser geradas com sub-lote,... |
| `PCP-910ODPCP01` | F910GPR | Ordenar Dados por Código do Produto (esse é o significado das letras O.D.P.C.P.) antes do pedido ao utilizar a página agrupada, visto que... |
| `PCP-910ODPCP02` | F910GPR | Ordenar Dados por Código do Produto (esse é o significado das letras O.D.P.C.P.) antes do pedido ao utilizar a página agrupada, visto que... |
| `PCP-910QOPMF01` | F910GPR | Quebra as ordens de produção, respeitando a quantidade limite da mini-fábrica. Utilizado pela tela F910GPR na geração agrupada dos produt... |
| `PCP-910QOPPI01` | F910GPR | Quebrar OPs a cada item do pedido, mesmo que for mesmo produto assim como também independente da derivação. |
| `PCP-910QPMRP01` | Geração de OPs (F910GPR) | Respeitar o limite pré-determinado na mini-fábrica, não interessando se para isso a rotina tiver que quebrar pedido, pois o default é não... |
| `PCP-910RNBOP01` | F910GPR / Geração de OPs | Esse identificador de regras tem como finalidade permitir a reserva de estoque dos componentes da OP mesmo que esteja indicado que o comp... |
| `PCP-910RNOPF01` | Função GerarOP | Quando este identificador estiver ativo, a função de programador GerarOP passará a retornar o número da O.P. gerada ao invés de retornar ... |
| `PCP-910RPARP01` | Geração de Ops | A partir do código do produto + derivação disponibilizado para a regra, obter um outro código que servirá como referência para quebra de ... |
| `PCP-910RPQRP01` | F910GPR | Quebrar Relatório de Produção conforme regra de negócio do cliente. |
| `PCP-910SORFP01` | — | A finalidade deste identificador é obrigar informar uma filial de produção e tb sugerir qual opção do roteiro padrão dessa filial de prod... |
| `PCP-911GRPRO01` | F911PCM | Permitir gerar o código do relatório de produção através de regra. |
| `PCP-912CRMDC01` | F912ROC - Reserva manual de Estoque de Componentes para O.Ps/O.Ss. | Identificador de regras adicionado para habilitar o usuário à consistência dos campos relacionados a reserva manual de componentes para O... |
| `PCP-991AGDLO01` | F991DLO | Validar informações (características) do lote e possibilitar gerar o lote do produto da O.P. via regra. |

## PRD - Produção

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `PRD-000ARFDP01` | Funções de programador |  |
| `PRD-000CFLTP01` | Diversas | Com esse identificador ativo, o código da filial logada já será sugerido automaticamente no respectivo campo do cabeçalho das telas F910G... |
| `PRD-000INTCB01` | F900BAC, F900ECS e F900ICO | Possibilita o recurso de leitura de código de barras nas telas F900BAC, F900ECS e F900ICO. |
| `PRD-700FIXEF01` | Cálculo tempo da operação | Caso o identificador de regras existir, o sistema não irá aplicar o % de eficiência informado na operação/filial sobre o tempo fixo calcu... |
| `PRD-800ETOSR01` | F800TSC | Faz com que a rotina de exportação para o TheScheduller exporte todas as opções de operação do roteiro, ao invés de exportar apenas a opç... |
| `PRD-800EXPML01` | Exportação para TheScheduller (F800TSC) | Permitir ao usuário que manipule as linhas a serem geradas nos arquivos de exportação para o TheScheduller através da regra |
| `PRD-800EXPTS01` | F800TSC | Permite definir na exportação de roteiros se devem ser exportados novas opções de operação para cada centro de recurso alternativo. |
| `PRD-800NEXPS01` | F800TSC - The Scheduller | Na tela de exportação de informações, a F800TSC, o padrão é exportar O.Ps. que também estão com a situação "Suspensa". Esse identificador... |
| `PRD-813GNERE00` | F813GNE | Utilizar os valores dos campos disponíveis na tela F813GNE para consistência via ponto de regra. |
| `PRD-900SIDAO01` | SID.Prd.ApontarOps | Manipular a mensagem de erro oriunda da ação SID.PRD.ApontarOps. |

## SGQ - Sistema de Gestão da Qualidade

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `SGQ-100CAPDQ01` | Aprovação de documentos (F100APR) | Consistir as aprovações de documentos da Qualidade. |
| `SGQ-100DBARQ01` | F100DOC - Controle de Documentos/ F100CQD - Consulta de Documentos | O objetivo desse Identificador de Regras será possibilitar que o botão "Abre Arq." seja desabilitado nas páginas "Atalhos" e "Documentos ... |
| `SGQ-100EDUAD01` | F100DOC | Com esse identificador ativo, na tela de cadastro de documentos do SGQ (F100DOC), o campo da data da última alteração não aparecerá mais ... |
| `SGQ-100PIAED01` | Documentos do SGQ (F100DOC) | Este identificador de regras será executado antes de excluir ou após alterar ou incluir algum documento na tela SGQ > Controle de Documen... |
| `SGQ-100SADOC01` | F100DOC | O objetivo deste identificador é permitir que o usuário possa definir manualmente o momento em que deverá ser feita a aprovação do docume... |
| `SGQ-101ATVER01` | F101INP | Permitir ao usuário decidir se deseja ou não que as informações alteradas no cadastro de Verificações sejam levadas para os planos de ins... |
| `SGQ-101GRIFA01` | F101INP e F101CPI | Incrementar automaticamente o número da revisão nas telas F101INP e F101CPI. |
| `SGQ-102GRICI01` | F102GRI | Através da regra deste identificador será possível realizar consistências antes do processamento das informações na tela F102GRI. |
| `SGQ-102ICFCI01` | F102ICF | Permitir realizar consistências na alteração do status do lote através da tela F102ICF. |
| `SGQ-102ICFCI02` | F102ICF | Permitir a realização de consistências antes de gravar os dados das inspeções na tela F102ICF. |
| `SGQ-102INSPE01` | Execução de inspeções (F102CEI); Inspeção de Recebimentos de Mercadorias (F430INP). | permite definir a forma da execução de inspeção: registro de inspeções individualmente ou um único do total. |
| `SGQ-102INSPE02` | Execução de inspeções (F102CEI) | O objetivo deste identificador de regra é possibilitar ao usuário consistir os dados da execução de inspeção, podendo impedir a gravação ... |
| `SGQ-102INSPE03` | Execução de inspeções (F102CEI) | Quando este identificador estiver ativo, fará com que o sistema grave a nota da inspeção feita no recebimento de produtos/serviços no cam... |
| `SGQ-102INSPE04` | Inspeções do SGQ (F102CEI) | Quando este identificador estiver ativo, será possível informar a quantidade inspecionada por verificação e também os valores mínimo e má... |
| `SGQ-102INSPE05` | Inspeção do SGQ (F102CEI) | Permitir informar uma quantidade a inspecionar diferente para cada inspeção de um plano na tela de execução de inspeções do SGQ (F102CEI). |
| `SGQ-102INSPE06` | Inspeções do SGQ (tela F102CEI) | Através da regra deste identificador, é possível definir qual o tipo do registro que deverá ser gerado ao informar um defeito numa inspeç... |
| `SGQ-102INSPE07` | Recebimento c/ inspeção (F430INP) | A regra associada a este identificador é executada no momento em que o usuário clica no botão "Processar" da tela de recebimento com insp... |
| `SGQ-102INSPE08` | Inspeção do SGQ (F102CEI e F900EIQ) | Este identificador, quando ativo, alterará o comportamento do ERP das seguintes formas: |
| `SGQ-102INSPE09` | Execução de Inspeções do SGQ (F102CEI) | Quando este identificador estiver ativo, ao iniciar uma execução de inspeção o plano será carregado trazendo todas as verificações com no... |
| `SGQ-102INSPE10` | F102CEI | O objetivo deste identificador é permitir que os valores alvo, mínimo e máximo sejam definidos através da regra. |
| `SGQ-102INSPE11` | F102CEI | Através da regra deste identificador será possível processar execuções de inspeção com situação igual a 2 ou 4, mesmo que a nota obtida s... |
| `SGQ-102INSPE12` | Inspeção de movimentos de O.P. (F900EIQ) | A regra deste identificador será executada uma vez para cada registro ao processar as informações na tela F900EIQ. |
| `SGQ-102INSPE13` | F430INP | Este identificador tem por objetivo permitir ao usuário inspecionar itens de serviço de NF's fechadas através da tela F430INP |
| `SGQ-102SUGNO01` | Execução de inspeções (F102CEI) | Através da regra deste identificador é possível sugerir a nota de cada verificação a partir do valor verificado. |
| `SGQ-102UQBIL01` | F102CEI | Quando este identificador estiver ativo, ao realizar inspeções livres (chamando a tela F102CEI diretamente no menu), o sistema vai utiliz... |
| `SGQ-103ADUCE01` | F103CEQ | Com este identificador ativo, ao inserir ou alterar uma calibração, o sistema verificará se a data da calibração em questão é maior do qu... |
| `SGQ-104CDAIE01` | F104AIE | Consistir os dados da tela de Acompanhamento de Implantação e Eficácia |
| `SGQ-104CDAPC01` | F104APC | Consistir os dados da tela de Cadastro de Ações Corretivas e Preventivas |
| `SGQ-104OBRNC01` | Registro de Melhoria Contínua (F104RMC) | O objetivo deste identificador é sugerir um valor para o campo "Descrição da situação" ao inserir um registro na tela F104RMC. |
| `SGQ-104RMCRG01` | F104RMC | Executar a regra associada na inclusão/alteração/exclusão de registros nesta tela |
| `SGQ-107AGIBD01` | Avaliação Fornecedores (F107CAL) | A regra associada a este identificador será executada Após a Gravação das Informações no Banco de Dados e, dessa forma, o usuário pode pe... |
| `SGQ-107PRAJC01` | F107CAL | Permitir recalcular avaliações de fornecedores. |
| `SGQ-430DQTAI01` | F210TPA | Transferir um item de uma nota do depósito de inspeção para até 5 depósitos definidos por regra. Permite transferir até 5 lotes ou séries... |
| `SGQ-900DATEX01` | Execução de Inspeções (SGQ) | Atribuir corretamente a data de inspeção na rotina que faz a movimentação de estoque da tela Execução de Inspeções (SGQ). |
| `SGQ-900DTDIQ01` | F900EIQ | Este identificador tem por finalidade permitir informar através de regra os valores para os campos Transação de Saída e Depósito Destino ... |
| `SGQ-900EIQQQCC` | F900EIQ | Trazer como parâmetro informações sobre a tela através de regra e retornar os valores nos seus campos correspondentes. Disponível apenas ... |
| `SGQ-900INPOP01` | F900CIP - Consulta de movimentos de O.P. com Inspeção pendente (SGQ). | Retorna se o movimento da ordem de produção deve ser mostrado na tela F900CIP - Consulta de movimentos de O.P. com Inspeção pendente, par... |
| `SGQ-900INSCF01` | F909MIF e F909MOA. | A função deste identificador é permitir que o usuário defina o status dos lotes que não irão para inspeção no controle por frequência. |
| `SGQ-900INSEE01` | Finalização de O.Ps. | A função deste identificador é permitir que o usuário defina se o movimento de finalização de O.P. deverá dar entrada no depósito de insp... |

## TES - Tesouraria

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `TES-600ALREC01` | — | Com este identificador, será possível alterar o nome do recebedor na tela "F600CHE > Finanças > Gestão de Tesouraria > Caixa e Bancos > P... |
| `TES-600ALVDC01` | — | Permite personalizar a regra de validação da data informada no campo **Data Conciliação** (F600CON). |
| `TES-600CCDOC01` | — | Com este identificador cadastrado e ativo, irá considerar o documento do movimento para a conciliação, quando não existir o número do che... |
| `TES-600CCOFF01` | Filtro Conta Interna | Com este identificador cadastrado e ativo, filtrará as contas internas pela filial logada. Somente serão acessíveis as contas internas qu... |
| `TES-600CCRSA01` | F606CCR | Com este identificador cadastrado, ativo e ligado a uma regra, a variável abaixo descrita receberá o valor total da aplicação de um deter... |
| `TES-600CHEAI01` | F143AFI, F600CHE, F600GEC | Com este identificador cadastrado e ativo, irá consistir informações após a inclusão de uma preparação. |
| `TES-600CHEPE01` | Preparação/Entrada da tesouraria | Com este identificador cadastrado e ativo, o cheque será emitido para a própria empresa. |
| `TES-600CHEUS01` | — | Com este identificador cadastrado e ativo, será possível definir via regra se será aceito ou não que determinado usuário possa gerar um c... |
| `TES-600CONAU01` | — | com este identificador cadastrado e ativo, pode-se personalizar a forma de como virão selecionadas as opções de Conciliação Automática. |
| `TES-600CONBC01` | F600CON | Com este identificador será possível chamar a tela F301BCD, através do botão "Pgto.Receber" da tela F600CON. A tela F301BCD funcionará da... |
| `TES-600CONCI01` | — | Com este identificador cadastrado e ativo, ao gerar movimentos de estorno os mesmos já serão conciliados, desde que exista apenas um movi... |
| `TES-600CONDI01` | — | Com este identificador cadastrado e ativo, será utilizada a Data Inicial como filtro na opção "Não Conciliados". |
| `TES-600CONLE01` | F600CON. | com este identificador cadastrado e ativo, a data de liberação dos movimentos vai receber a maior data encontrada entre todos os extratos... |
| `TES-600CONPF01` | — | Permitir a conciliação bancária fora do período definido nos parâmetros da filial da tesouraria. |
| `TES-600ECHCP01` | F600ECH | Executará regra (regra parametrizada no mesmo) após a atualização de cada movimento de título do contas a pagar no processamento da tela ... |
| `TES-600ECHHI01` | F600ECH e Baixa de Títulos do CR/CP. | definir, via regra, o histórico do movimento ao processar a preparação na tela F600ECH e ao baixar títulos do Contas a Receber e Contas a... |
| `TES-600ECHME01` | — | Este identificador tem a finalde de na tela F600ECH ao excluir um movimento, dê apenas a opção Mov X &Origens para a exclusão, quando des... |
| `TES-600GECBN01` | F600GEC | Na tela F600Gec quando ativo, esse identificador ao gerar o movimento de debito na tesouraria busca a natureza de gasto cadastrada para a... |
| `TES-600GECBN02` | F600GEC | Na tela F600Gec quando ativo, esse identificador ao gerar o movimento de crédito na tesouraria busca a natureza de gasto cadastrada para ... |
| `TES-600GECCC01` | F600GEC e F501BAA | habilita a associação do Contrato de Compra com um título de adiantamento a fornecedor. Na tela F600GEC serão apresentados os campos **Fi... |
| `TES-600GECCG01` | F600GEC | Esse identificador tem a finalidade de ativar a configuração da grade da tela F600GEC. |
| `TES-600GECCL01` | F600GEC - Crédito Cliente Via Previsão | Quando ativo, possibilita a consistência linha por linha dos campos disponibilizados (Cadastro de Variáveis). |
| `TES-600GECCO01` | F600GEC | Com este identificador cadastrado e ativo, ao gerar um Adto Fornecedor via Previsão o valor da preparação e o valor da efetivação ficará ... |
| `TES-600GECCO02` | F600GEC | com este identificador cadastrado e ativo, ao gerar um Crédito Cliente via Previsão, será calculada e apresentada a correção monetária. C... |
| `TES-600GECCP01` | Web service Crédito Fornecedor | Esse identificador de regras somente é acionado via web service. Sua funcionalidade é liberar as consistências realizadas a partir do núm... |
| `TES-600GECCP02` | Web service Crédito Fornecedor | Esse identificador de regras somente é acionado via web service. Sua funcionalidade é liberar o agrupamento de títulos para uma sequência... |
| `TES-600GECCR01` | Webservice Crédito Fornecedor | Esse identificador de regras somente é acionado via web service. Sua funcionalidade é permitir usar o mesmo número de cheque para a mesma... |
| `TES-600GECCV01` | F600GEC e F301BAA | Com este identificador cadastrado e ativo, irá habilitar a associação do Contrato de Venda com um título de adiantamento a Cliente. Na te... |
| `TES-600GECDV01` | F600GEC | Com este Identificador cadastrado e ativo, não irá permitir a devolução do crédito fornecedor quando o adiantamendo não tenha sido proces... |
| `TES-600GECHE01` | F600GEC | Com este identificador cadastrado e ativo, quando não possuir informação no campo Histórico ou Recebedor, na opção "Adiantamento Forneced... |
| `TES-600GECND01` | F600GEC | Com este identificador cadastrado e ativo, irá permitir montar o número do documento atráves de regra para as opções "Crédito Fornecedor"... |
| `TES-600GECOC01` | F600GEC e F501BAA | Com este identificador cadastrado e ativo, irá habilitar a associação da Ordem de Compra com um título de adiantamento a fornecedor. Quan... |
| `TES-600GECPE01` | F600GEC e F301BAA | Com este identificador cadastrado e ativo, irá habilitar a associação do Pedido de Venda com um título de adiantamento a Cliente. Na tela... |
| `TES-600GECSC01` | Web service Crédito Fornecedor | Esse identificador de regras somente é acionado via web service. A sua funcionalidade é para que o sistema não sugira determinados campos... |
| `TES-600GECTR01` | FINANCEIRO/TESOURARIA/PREPARACAO | Com este identificador cadastrado e ativo, o usuário pode realizar consistências nos campos da tela de preparaçao de transferência da tes... |
| `TES-600GECVP01` | — | Com este identificador cadastrado e ativo, irá manter as informações na tela após processar e limpar a grade. |
| `TES-600GMOAI01` | — | Com este identificador cadastrado e ativo, irá permitir o acesso aos dados do título após a inclusão do mesmo, na tela F600GMO. |
| `TES-600GMOGA01` | F600GMO | Com este identificador cadastrado e ativo, será permitido via regra montar os dados da tela que irá gerar o movimento. |
| `TES-600GMOGA02` | Processo automático 106 - Geração de Movimento de Tesouraria a partir de Extratos Bancários. | Com este identificador cadastrado e ativo é possível montar os dados que irão gerar o movimento a partir de extrato bancário via processo... |
| `TES-600GMOTR01` | F600GMO | Com este identificador cadastrado e ativo, irá disponibilizar através de regra os campos do processo de transferência da tela F600GMO. |
| `TES-600HAGMO01` | — | Com esse identificador cadastrado e ativo, na tela de geração de movimentos da tesouraria, chamada na opção Gera Movimento da tela de Con... |
| `TES-600HISNP01` | F600MCC e F600AML | Quando ativo, inativar o campo histórico do movimento nas telas F600MCC e F600AML, quando o movimento estiver contabilizado. |
| `TES-600MCCAC01` | F600MCC | Controlar a atualização on-line dos saldos da conta interna. |
| `TES-600MCCCD01` | F600MCC/F600AML | Com este identificador cadastrado e ativo, irá permitir alterar o campo "CodDoc - Tipo de Documento" de movimentos da Tesouraria (E600MCC... |
| `TES-600MCCOT01` | F600MCC | Com este identificador cadastrado e ativo, ao realizar a transferência para uma conta interna, a cotação sugerida no movimento será manti... |
| `TES-600MCCTR01` | — | Com este identificador cadastrado e ativo, o usuário poderá fazer consistências nos campos tela de transferência que é chamada na tela de... |
| `TES-600SEQCH01` | — | com este identificador cadastrado e ativo, a sequência do cheque será sugerida nas telas de: |
| `TES-600SEQCH02` | 510PRT(retorno pagamento eletronico) | Com este identificador cadastrado e ativo, o identificador TES-600SEQCH01 perde seu efeito para a tela de retorno de pagamento eletrônico... |
| `TES-600SEQUS01` | 600GEC-ENTRADAS DE AVISO/DEBITO | Com este identificador cadastrado e ativo, poderá definir via regra se será aceito ou não que determinado usuário possa gerar uma sequenc... |
| `TES-600SULOT01` | F600GEC/F501LOT/F501BMD. | Esse identificador tem a finalidade de alterar automaticamente a sequência de preparação ou a numeração de cheque quando existirem proces... |
| `TES-600SUOBT01` | F600GEC | Com este identificador cadastrado e ativo, serão gravadas as informações do Histórico e complemento junto com o campo da observação do tí... |
| `TES-601ECHNR01` | F600ECH | Com este identificador cadastrado e ativo, irá desabilitar a mensagem referente a consistência de numeração dos cheques. Será permitido u... |
| `TES-603CPCAP01` | F603CPC | Com este identificador cadastrado e ativo, irá habilitar a alteração da "Data Liberação" de preparações já processadas. |
| `TES-606ACTGE01` | F606ACT | Esse identificador tem a finalidade de mostrar o grupo "Valores padrões" que geram títulos de encargos na tela F606ACT. |
| `TES-606ACTPM01` | — | O objetivo desse identificador é permitir o cálculo das atualizações dos contratos de aplicação diretamente através de regra, oferecendo ... |
| `TES-606APEAC01` | F606APE | Esse identificador tem a finalidade de acumular os valores das parcelas no cálculo da prestação de carência do contrato de captação de re... |
| `TES-606APEPM01` | — | O objetivo desse identificador é permitir o cálculo das prestações dos contratos de empréstimos de forma alternativa a embarcada no ERP, ... |
| `TES-606CCRAI01` | F606CCR | Esse identificador tem a finalidade de alterar a data de entrada e o valor do título de imposto gerado pelo sistema durante o fechamento ... |
| `TES-606CCRCI01` | F606CCR | Esse identificador tem a finalidade de retornar a forma de cálculo do imposto IOF para os contratos de captação. |
| `TES-606CCRDM01` | F606CCR | Com esse identificador é possível informar datas diferentes para cada tipo de movimento gerado na hora em que o contrato de empréstimo é ... |
| `TES-606CCRGP01` | F606CCR | Esse identificador tem a finalidade de gerar os movimentos de juros quebrados na conta empréstimo, ou seja, serão gerados movimentos de j... |
| `TES-606CCRPT01` | F501LOT | Quando esse identificador estiver ativo, será permitido baixar títulos de empréstimos com transações diferentes do tipo "PG-Pagamento". |
| `TES-606CCRSA02` | F606CCR | Com este identificador cadastrado e ativo, irá permitir definir quais Filiais/Contratos/Produtos Bancários não serão considerados no cálc... |
| `TES-606CPTXA01` | F606CCR | Esse identificador tem o objetivo de alterar o cálculo do valor cotação da moeda do contrato e da moeda PTAX para a base do imposto IRRF ... |
| `TES-606EFIFI01` | — | o objetivo deste identificador é manipular as tags importadas pelo XML para buscar os valores dos campos da tela Extratos de Fundos de In... |
| `TES-606ESTOR01` | F606CCR | com o identificador cadastrado e ativo, os lançamentos serão estornados com a data do resgate. Também pode ser utilizado para que o movim... |
| `TES-606PBCAI01` | F606PBC | Com este identificador cadastrado e ativo, irá permitir o acesso aos dados do produto bancário após a inclusão do mesmo, na tela F606PBC. |
| `TES-606TCLML01` | F606TCL | Esse identificador tem a finalidade de mostrar uma data limite para o processo de transferência de títulos de prestações de longo para cu... |
| `TES-611FCCOG01` | F611FCC | Com este identificador cadastrado e ativo, o sistema deverá ordenar as contas financeiras na tela F611FCC pelo campo SEQCFC, tratando com... |

## VEN - Vendas

| Identificador | Tela | Finalidade (resumo) |
| --- | --- | --- |
| `VEN-000ABRAS20` | — | Permitir alterar o valor de algumas tags do arquivo XML da NFS-e no padrão ABRASF 2.0. Semelhante ao identificador de regras GER-000ABRASF1. |
| `VEN-000AJPCN01` | F120GPC | Ajustar o preço unitário ao invés de ajustar o preço de venda quando alterar as quantidades de venda ou quantidade pedida sem converter a... |
| `VEN-000ALCLF01` | Notas fiscais de saída e Pré-Faturas | Este identificador de regras tem por objetivo a alteração do código interno de classificação fiscal para os itens de produto e serviço da... |
| `VEN-000ALDES01` | — | Não concatenar a descrição da derivação no complemento do produto. |
| `VEN-000ALICD01` | Notas fiscais de saída, pré-fatura e pedidos. | Este identificador permite a alteração do valor de ICMS desonerado, bem como o motivo da desoneração ao calcular o item de produto da not... |
| `VEN-000ALICM01` | — | alterar o percentual, o valor e a base de ICMS ao calculá-lo. |
| `VEN-000ALIRF01` | — | Alterar o Percentual, Valor e a Base de IRRF quando é feito um cálculo do mesmo. É executado para itens de produto ou serviço desde que h... |
| `VEN-000ALISD01` | Cálculo de ICMS Substituído | alterar a base e percentual de ICMS Substituído Destacado no cálculo dos impostos da nota fiscal de saída. O valor do ICMS Substituído se... |
| `VEN-000ALPRO01` | F120GPD, F120GRA, F140GNF | Alterar o código do produto no momento da digitação do mesmo por um outro equivalente. |
| `VEN-000ALPRO02` | F140PRE | Alterar o código do produto por outro equivalente durante a transferência dos itens do pedido para a nota fiscal. |
| `VEN-000ATRES01` | — | O identificador tem por intuito realizar o acréscimo ou a diminuição das reservas normais e/ou reservas exclusivas de forma aprimorada, q... |
| `VEN-000ATUCR01` | — | Quando ativado, o sistema irá utilizar a rotina não otimizada para atualização de contratos. No cancelamento da nota fiscal. |
| `VEN-000BUDEP02` | — | Busca o depósito padrão na tabela de transação, a ser sugerido nas rotinas de Suprimentos/Compras e Mercado/Vendas. |
| `VEN-000CBAQF01` | F140GNF. | não sugerir a quantidade de itens do bem para a quantidade a faturar da nota fiscal ao inserir o **Código do Bem** na tela de Digitação d... |
| `VEN-000COMIS01` | — | Alterar o percentual de comissão dos itens de um pedido, pré-fatura ou nota fiscal. |
| `VEN-000COMIS02` | — | Alterar o percentual de comissão dos itens de um pedido ou nota fiscal |
| `VEN-000COMIS03` | — | Alterar o percentual, valor e base de comissão dos itens de um pedido ou nota fiscal. |
| `VEN-000CONIT01` | — | Permite consistir as informações de um item de Pedido, item de Nota Fiscal de Saída ou item de Pré-Fatura, permitindo bloquear a gravação... |
| `VEN-000CONNF01` | — | Consistir todos os dados da nota fiscal de saída permitindo gerar mensagem de erro ou retornar qualquer valor para a variável "VSBLONFV" ... |
| `VEN-000CONPV01` | Atendimento Manual de Pedidos (Pré-fatura) (F135APM) e web service com.senior.g5.co.mcm.ven.analiseembarque. | antes de pré-faturar os pedidos, este identificador de regra é executado para validar as informações do cliente. Caso o retorno da regra ... |
| `VEN-000CPNFV01` | SID=SID.Nfv.Gravar | Receber dois nomes de campos criados através da ação SID.Nfv.Gravar e gravar nestes campos criados na tabela "E140NFV" as informações env... |
| `VEN-000CRECL01` | Pedidos, NFV e Pré-Faturas. | personalizar a forma de verificação de bloqueio do cliente. É acionado para a nota fiscal de saída, pedidos e pré-faturas após a análise ... |
| `VEN-000CREGR01` | Pedidos, Pré-Faturas e NFV | Personalizar a forma de verificação de bloqueio do grupo de clientes. |
| `VEN-000CTCLA01` | — | Não efetuar a consistência e atualização do certificado de classificação. |
| `VEN-000CTCLA02` | Verificação de Certificados de Classificação | Permitir o controle de certificado de classificação de produtos controlados por Lote sem a necessidade de informar o número do lote no ca... |
| `VEN-000DLSUM01` | F000DLS | Definir que só pode ser cadastrado um lote por item. Desta forma não pode ter um item com dois lotes quando isso acontecer devem ser cada... |
| `VEN-000EXTNS01` | F140PRE | Indicar ao sistema que o identificador de regras VEN-000TNSDE01 deve ser executado para cada item de pedido carregado na tela Preparação ... |
| `VEN-000GPETV01` | — | Realizar algum processo desejado pelo cliente na integração de uma entrega do sistema de retaguarda para o ERP. |
| `VEN-000GRCCR01` | — | Gerar automaticamente as notas fiscais de remessa de outras filiais, quando as entregas forem atendidas através de pendência de carga. |
| `VEN-000GREFP01` | — | Indicativo se deve realizar a geração das guias de recolhimento de imposto de FCP de ICMS ST, agrupada por classificação fiscal e valor d... |
| `VEN-000ICMMO01` | — | alterar a alíquota, base e valor do ICMS Monofásico próprio. A regra é chamada sempre que um item de produto executar o cálculo do valor ... |
| `VEN-000ICMMO02` | — | alterar a alíquota, base e valor do ICMS Monofásico com retenção. A regra é chamada sempre que um item de produto executar o cálculo do v... |
| `VEN-000ICMMO03` | — | alterar a alíquota, base e valor do ICMS Monofásico diferido. A regra é chamada sempre que um item de produto executar o cálculo do valor... |
| `VEN-000ICMMO04` | — | alterar a alíquota, base e valor do ICMS Monofásico destacado. A regra é chamada sempre que um item de produto executar o cálculo do valo... |
| `VEN-000ISFIN01` | — | Diminuir o ISS do valor financeiro de um item de pedido ou nota fiscal. |
| `VEN-000LIGPC01` | — |  |
| `VEN-000LIMDT02` | — | Não sugerir intervalos para datas nas consultas do módulo mercado/vendas. As datas em todas as consultas (pedido, pedido item, nota fisca... |
| `VEN-000MDFE001` | F000ROD - Manifesto de Documentos Fiscais - Diversos. | Permite que o usuário possa incluir uma regra que altere os dados do vale pedágio na geração do XML em relação aos campos que foram infor... |
| `VEN-000OBRPU01` | — | Não obrigar que seja informado preço unitário nos itens de produto para as rotinas de pedido, na duplicação de pedidos e no ERP WEB ou SID. |
| `VEN-000PREME01` | — | Buscar o preço médio na Tabela em Estoques - Preço médio por filial (E210MED) e caso não encontrar, realizar a busca na Tabela em Cadastr... |
| `VEN-000PRENF01` | — | Anteriormente esse Identificador de Regras tinha como intuito inibir a nova forma de Sugestão de Preço Unitário para Notas Fiscais de Saí... |
| `VEN-000PRENF02` | — | Quando o Identificador de Regras estiver ativo, o sistema executa a sugestão do Preço Unitário para Notas de Saída de Transferência (Apli... |
| `VEN-000PRPES01` | — | Calcular o preço unitário com base no peso do produto. |
| `VEN-000PRUIS01` | — | Alterar o preço unitário de ICMS Substituído buscado da derivação. |
| `VEN-000REDUC01` | — | Soma o valor de frete antes de calcular a redução de ICMS Disponível em pedidos e notas fiscais de saída. |
| `VEN-000REPCP01` | — | Impedir a consistência da ligação entre condição de pagamento e o representante nas rotinas de vendas. |
| `VEN-000SUUMD01` | — | Sugerir a segunda unidade de medida do produto como unidade de medida de venda, na digitação de um novo item de produto para Pedidos, Not... |
| `VEN-000TABPR01` | — | Alterar o preço unitário e o percentual de desconto que são montados quando é informada uma tabela de preço. |
| `VEN-000TABPR03` | F081TPA;F081GTP;F081DTV;F081DTP | Alterar o preço base, os percentuais de tolerância e os valores de tolerância dos itens adicionados em uma tabela de preços. |
| `VEN-000TNSDE01` | — | alterar a transação de faturamento sugerida na geração de uma nota fiscal de saída. |
| `VEN-000TOLTP01` | — | Modificar o preço obtido da tabela de preço antes de atribuir a um pedido, nota fiscal de saída ou contrato, para que no teste de tolerân... |
| `VEN-000VARAE01` | — | Disponibilizar um ponto de regras para o uso genérico na rotina de validação da quantidade de reserva exclusiva dos pedidos. |
| `VEN-000VLRPR01` | — | Calcular valor para a variável VSVLRPRI, cujo valor será acrescido ao valor da primeira parcela do pedido, nota fiscal saída, fatura ou p... |
| `VEN-069PEDAB01` | — |  |
| `VEN-081IMTPR01` | F081CTV | Manipular as informações da tabela de preço. |
| `VEN-081TESTO01` | — | Inibir o teste de tolerância para o preço informado ou alterado no item de produto ou serviço nos pedidos e notas fiscais de saída, quand... |
| `VEN-085INFCL01` | F085INC | Aciona a regra associada ao identificador passando como parâmetros o cabeçalho da tela F085INC e também a origem da chamada, se pela grad... |
| `VEN-085TICLI01` | — | Filtrar os todos os Clientes que estão cadastrados como tipo (C - Clientes) ou ( A - Ambos), no campo CLIFOR. |
| `VEN-085TIPAC01` | — | indica como o sistema deve tratar o preço unitário convertendo o preço bruto dos produtos na geração de notas fiscais de saída e pedidos ... |
| `VEN-085VLRBA01` | Categorização de clientes para análise de crédito | Alterar o valor dias atraso e valor inclusão na rotina de categorização de crédito. |
| `VEN-113CPFRP01` | F113EXM | Definir o CPF do Representante da Empresa para ser utilizado no Nome do Arquivo do leiaute Anexo I, do SIGA. |
| `VEN-113EXMME01` | F113EXM | Este identificador tem por objetivo pegar a quantidade de unidades que consta na receita e multiplicar pela conversão, a fim de chegar à ... |
| `VEN-113EXMRS01` | F113EXM | Retornar o código SIGA da unidade da área a tratar. |
| `VEN-113EXMSA01` | F113EXM | Definir a situação das aplicações que será buscada na tela. |
| `VEN-113EXRER01` | F113EXR | Define o rol de produtos que emitiram receituário agronômico entre o período inicial e final, informados nos parâmetros da regra. A variá... |
| `VEN-113EXRME01` | F113EXR | Por meio deste identificador, é possível habilitar/desabilitar a conversão da capacidade da embalagem no momento de exportar as informaçõ... |
| `VEN-113EXRRS01` | — | Sugerir via regra o número de registro da SEAPI durante a exportação de registros dos dados de receituário na tela Exportação Movimentaçõ... |
| `VEN-113EXRRS02` | — | altera a forma de busca da informação do campo **Volume** na geração do arquivo para importação no sistema SIGA RS. Quando um produto/der... |
| `VEN-113NFREC01` | F140CAN. | Atuará no momento do cancelamento de uma nota de saída, caso ela tenha sido utilizada em um receituário agronômico. Nesse cenário, se a r... |
| `VEN-113REMVA01` | F113REM. | Remove a validação de multiusuário quando gerada uma receita na tela Emissão da receita agronômica (F113REM). |
| `VEN-113REMVA02` | F113REM. | Remove a validação de multiusuário quando gerada uma receita na tela Emissão da receita agronômica (F113REM). |
| `VEN-113REMVL01` | — | Faz validações para os eventos "Emitir Receitas" e "Cancelar Receitas" na Emissão da receita agronômica (F113REM). A partir da ativação d... |
| `VEN-113REMVL02` | — |  |
| `VEN-113VSREC01` | — | Atuar nas emissões dos receituários agronômicos para identificar casos onde a estrutura de ART/CREA indicar que há número de receita disp... |
| `VEN-115ASITP01` | — | Este identificador terá como objetivo definir se o sistema permitirá, ou não, mudar para o status específico do ticket para aguardando a ... |
| `VEN-115CARPR01` | — | Este identificador de regras tem como finalidade obter os dados de pesagem. O identificador VEN-115CARPR01 é chamado ao clicar no botão P... |
| `VEN-115CONDC01` | Controle de Entradas e Saídas - Expedição via Carga | Consistir ou alterar o tipo de documento que será emitido ao final de um processo na tela F115CAR quando for feita uma saída e não existi... |
| `VEN-115CONPS01` | Controle de Entradas e Saídas - Expedição via Carga | Consistir ou alterar a "Quantidade Calculada" e a "Quantidade Informada" de um processo na tela F115CAR quando for feita uma saída. |
| `VEN-115CONPS02` | F115CAR | Consistir os pesos de um processo de entrada ou saída na tela F115CAR. |
| `VEN-115CONPS03` | F115CAR. | Permitir alterar o Nome do Motorista, selecionar uma pré-fatura específica ou realizar alguma validação relacionada com a Placa do Veícul... |
| `VEN-115CSTPL01` | F115CST | Permitir cadastrar placas de veículos informadas na tela F115CST. |
| `VEN-115ERQTD01` | F115COS | Omitir os registros de pedido que não possuem quantidade em aberto durante o processo de pesagem de saída do caminhão. |
| `VEN-115INCPG01` | — | atribuir uma condição de pagamento a um item de ticket gerado pela rotina de expedição manual. A regra é executada no momento da carga do... |
| `VEN-115ORDLCT1` | — |  |
| `VEN-115PRO01` | F115REC | Alterar o recebimento com situação diferente de 1, isto é, sem a informação da nota. |
| `VEN-115PROAL01` | F115REC | Permitir a alteração na tela de recebimento de clientes, mesmo com situação diferente 1, isto é, mesmo sem informar a nota fiscal. |
| `VEN-115PROEN01` | — | Modificar a tela do F115COS para utilizar itens de pedidos de programação de entrega, onde também é possível modificar o produto sugerido... |
| `VEN-115SOLSN01` | — | Exibir uma tela onde o usuário poderá escolher o código da série da nota fiscal a ser emitida, na rotina de expedição |
| `VEN-119ALVLBR1` | Web service Com.senior.g5.co.mcm.ven.orcamento.CalculaImpostosOrcamento. | Calcular o valor bruto com base na quantidade de itens vs valor líquido do orçamento através do web service CalculaImpostosOrcamento. |
| `VEN-119CLITP01` | Vendas - Orçamentos. | buscar uma tabela de preço diferenciada por item de orçamento, permitindo utilizar mais de uma tabela de preço. |
| `VEN-119COOCT01` | F119OCT - Orçamentos | Identificador com a finalidade de possibilitar o acesso dos campos da tabela E119CMN (Componentes) e E119OMN (Operações), assim, retornan... |
| `VEN-119OCIGV01` | F119OCT | Esse identificador de regras trata os itens de produto de um orçamento e todos os campos da tabela E119OCI estarão disponíveis para consu... |
| `VEN-119OCIML01` | Vendas/Orçamentos | Alterar a forma de cálculo da margem de lucro no preço unitário. |
| `VEN-119OCIPR01` | F119OCT | Disponibilizar os campos chave da tabela de itens do orçamento. |
| `VEN-119OCITP01` | F119OCT | Quando este identificador estiver ativo, só será possível adicionar itens que estejam nas tabelas de preço informadas no orçamento. |
| `VEN-119OCTAP01` | F119OCT | Enviar email de após aprovação de orçamento vinculado a uma ocorrência de assitência técnica. |
| `VEN-119OCTBE01` | F119OCT/F119ERC | Permitir enviar e-mail para algum outro endereço definido via regra, que não o endereço definido no cadastro do cliente. |
| `VEN-119OCTGV01` | F119OCT | Esse identificador de regras trata os dados gerais de um orçamento e todos os campos da tabela E119OCT estarão disponíveis para consulta ... |
| `VEN-119OCTPD01` | F119GPV | Quando este identificador estiver ativo, ao gerar um pedido via orçamento através da tela F119GPV, o sistema irá sugerir o valor de desco... |
| `VEN-119OCTPD02` | F119GPV | Quando este identificador estiver ativo, ao gerar um pedido via orçamento através da tela F119GPV, o sistema irá sugerir o valor de desco... |
| `VEN-119OCTSV01` | Vendas/Orçamentos | Executado sempre ao gravar um orçamento. A gravação é feita ao sair da página "Dados Gerais", ao passar pelo campo "Situação Orçamento", ... |
| `VEN-120ACOBR01` | — | Exibe a tela de campos personalizados no momento da gravação de um item de pedido de produto, nesta tela serão incluídos os campos necess... |
| `VEN-120AGPED01` | Telas de lançamento de pedidos, exceto F120GPD. | Permite que seja implementada uma customização após o fechamento de um pedido de venda. |
| `VEN-120ALDAT01` | F120GPD, F120GPC e F120GRA | Alterar a data de entrega do pedido e dos seus itens no momento que o pedido é fechado. |
| `VEN-120ALDSC01` | — | Quando for feito um recálculo do pedido por algum motivo, com por exemplo a alteração da condição de pagamento, e o usuário disser sim qu... |
| `VEN-120ALFAT01` | F120GPD/F120GPC (Varejo). | quando ativo, ao fechar um pedido o sistema questiona se é um pedido de venda ou pré-venda. No caso de venda, o pedido é fechado com o ti... |
| `VEN-120ALFLT01` | F119OCT, F119SOR, F120DPE, F120GPB, F120GPC, F120GPP, F120GPD, F120PSP, F129PED, F120PVC, F129TMK, F129UFP, F140VCB, F120GRA, F120REM, F120DIV, F129DIV e F120DIG. | Permite a criação de filtros adicionais para o filtro dos campos Representante, Vendedor, Operador, Transportadora e Transportadora de Re... |
| `VEN-120ALICM01` | Pedidos | Retornar para o pedido o código do ICMS ST, Código do ICMS Especial, Código de Redução de Impostos ou outras informações (conforme variáv... |
| `VEN-120ALPRE01` | — | alterar o preço unitário e o percentual de desconto do item de produto. |
| `VEN-120ALPRE02` | F120GPC | Alterar o preço unitário. |
| `VEN-120ALPRE03` | Pedidos | é executado na busca de preço da tabela de preço quando o pedido for recalculado com busca de valores. Permite devolver o preço bruto, un... |
| `VEN-120ALPRE04` | Pedidos. | esse identificador disponibiliza as mesmas variáveis do identificador VEN-120ALPRE03. Disponibiliza também todos os campos (exceto campos... |
| `VEN-120ALTIP01` | — | Alterar os dados dos itens do pedido recalculando o mesmo. Os dados que podem ser alterados são o complemento do item, preço unitário, pe... |
| `VEN-120ALTPR01` | — | alterar a tabela de preços no momento em que um item do pedido é inserido. |
| `VEN-120ANNEC01` | Pedidos com Produtos em Multinível (F120PMN) | Permite a alteração do indicativo de necessidades de produção para itens de produto do tipo produzido, no fechamento do pedido ou na incl... |
| `VEN-120ATALH01` | F120GPD | A finalidade deste identificador é alterar o atalho do campo "Sel. Campos (J)" para o campo "Sim. Parcelas" devido ao campo "Sim. Parcela... |
| `VEN-120ATCIP01` | Pedidos | Esse identificador é um complemento ao identificador VEN-120CONIP01. Como este não permite o retorno de campos do sistema através da atri... |
| `VEN-120ATLPE01` | Liberação de pedidos para produção/engenharia | Executado no processamento da tela de liberação de pedidos para produção/engenharia. Estando associado a uma regra e sendo liberado o ite... |
| `VEN-120ATPRD01` | F120MPV - Manutenção Pedido previsão | Criado identificador para que quando usuário alterar uma qtde de um item de pedido tanto para mais como para menos, o sistema cancele e/o... |
| `VEN-120BLCMP01` | — | O identificador tem por intuito impedir a alteração manual da quantidade em componentes de um item de pedido kit. |
| `VEN-120BLFEC01` | — | Definir motivo de bloqueio (Campo E120PED.MotWms) do pedido de venda no fechamento. |
| `VEN-120BLOPM01` | F120GPC, F120GPD, SID.Ped.GravarProduto | o objetivo do identificador é determinar se deve ser feito, ou não, o bloqueio de produto kit sem modelo. |
| `VEN-120BLOVL01` | F120VAL, F120VAC, F129VAL (Telas do botão "Valores") | Indicar ao sistema se os campos das telas de valores do pedido deverão ficar habilitados, quando o faturamento do pedido for ECF. Se o id... |
| `VEN-120BLOWF01` | — | Permite modificar a observação da aprovação a ser enviada ao Workflow 2.0. |
| `VEN-120BUDSN01` | F120GPD. | Ao ativar essa regra, o sistema utiliza um método especial de localização dos itens, evitando falhas e garantindo o correto funcionamento... |
| `VEN-120CAPED01` | F120GRA, F120CAN, F120LIB, F120GPD, F120GPB | Executado após o cancelamento do pedido, não importando se foi confirmado ou não. |
| `VEN-120CCUIP01` | — | Permite a abertura da tela de campos personalizados do item de produto do pedido, ao gravar ou alterar o mesmo, para rotina de pedidos ag... |
| `VEN-120CGCIT01` | — | Este Identificador de Regras permite que o usuário escolha o tipo de consistência que será feito no campo CgcItm, quando o valor informad... |
| `VEN-120CGCIT02` | — | Este Identificador de Regras executa a consistência dos campos numéricos, com o método diferenciado, quando está sendo utilizado Web Serv... |
| `VEN-120CHKPE01` | F120LIB | Carregar os pedidos desmarcados na grade da tela de liberação depPedidos bloqueados. |
| `VEN-120CLIOF01` | F120GPD, F120GPC, F120GRA, F129PED | Alterar o percentual de oferta um e dois e desconto um ao cinco do pedido. O sistema já permite sugerir estes percentuais conforme determ... |
| `VEN-120CMKPR01` | 120MCK | Permite consistir a quantidade informada na grade. |
| `VEN-120CNFEC01` | — | Permitir ou não o fechamento de um pedido. |
| `VEN-120CNFEC02` | Pedido | Este identifcador tem por objetivo disponibilizar um ponto de regra após o fechamento do pedido, após o COMMIT executado no banco de dado... |
| `VEN-120CNIUF01` | F141CUF | Permitir fazer consistências entre o novo item de pedido e o item de pedido original, quando o item de pedido é gerado pela consulta à te... |
| `VEN-120CNPVE01` | F120GPD. | Disponibilizar um ponto de regra/customização ao clicar no botão Itens via Emb da tela F120GPD. |
| `VEN-120COCLI01` | Pedidos | Realizar consistências ao informar o código do cliente. |
| `VEN-120CODMC01` | PEDIDOS | Permitir alteração do código do produto e código da derivação na tela de manutenção da composição de produto Kit (F120MCK). |
| `VEN-120CODPO01` | F120GPC, F120GPD | Objetivo de definir via regra um portador para o pedido. Quando definido via regra o portador a sugestão feita da definição do cliente po... |
| `VEN-120COMIN01` | — | Consistir, no fechamento de um pedido, o valor do pedido com : |
| `VEN-120CONAP01` | ComercialVendasPedidosLiberação de Pedidos Bloqueados | Efetuar a consistência do campo "Aprovação" na grade de observações de bloqueio, após ser alterado. |
| `VEN-120CONDE01` | F440NFV | Realizar a consistência do saldo disponível da nota fiscal de remessa, ao gerar uma nota de devolução através de uma nota fiscal de saída. |
| `VEN-120CONDG01` | Pedidos - Inclusão/Alteração | Efetuar uma consistência dos dados gerais do pedido de venda via regra associada, antes do sistema efetuar a consistência interna, nos mo... |
| `VEN-120CONDG03` | Pedidos - Inclusão/Alteração | Baseado no identificador de regras VEN-120CONDG01 e por esse motivo comporta-se de forma parecida, mas com algumas diferenças importantes... |
| `VEN-120CONIP01` | Pedidos e itens de produtos. | Tem o mesmo intuito do identificador VEN-0000CONIT01, que é o de consistir os dados dos itens do pedido no momento de gravação. Porém, o ... |
| `VEN-120CONIP02` | — | Segue o modelo do identificador VEN-120CONIP01, porém o mesmo será executado após um item de produto do pedido ter sido gravado (tanto em... |
| `VEN-120CONIP03` | F120GPD | Este identificador foi baseado no identificador de regras VEN-120CONIP01 e por esse motivo comporta-se de forma idêntica a ele, com algum... |
| `VEN-120CONIS01` | Pedidos, itens de serviços | Tem o mesmo intuito do identificador VEN-000CONIT01, que é o de consistir os dados dos itens do pedido no momento de gravação. Porém, o i... |
| `VEN-120CONIS03` | — | Baseado no identificador de regras VEN-120CONIS01 e sua execução acontece logo após a execução deste. |
| `VEN-120CONOB01` | Consistência na observação de pedidos | Consistir as observações de pedidos, do mesmo modo que o identificador de regras 000CONIT01 nos itens do pedido, ou seja, no final, em um... |
| `VEN-120CONPE01` | F120GPC | Permitir a consistência dos dados gerais do pedido, bem como os campos de usuário da tabela E120PED, ao sair da aba "Dados Gerais" da tel... |
| `VEN-120CONSP01` | Pedidos | Alterar a reserva de estoque dos itens de produto quando é alterada manualmente a situação do pedido de: |
| `VEN-120CONVF01` | — | Não fazer nenhuma consistência para os campos do Valor de Frete por Unidade de Medida, Quantidade Base Valor de Frete e Fornecedor de Fre... |
| `VEN-120CPUDESC` | — | Alterar as descrições e o valor dos campos da tela F120CPU. |
| `VEN-120CRECL01` | — | Consistir o crédito do cliente no momento do fechamento do pedido não permitindo que o mesmo seja fechado se: saldo duplicatas + saldo ou... |
| `VEN-120CTEMB01` | — | permitir o tratamento e utilização de embalagens de estocagem no pedido, fazendo com que essas embalagens possam ser levadas para a nota ... |
| `VEN-120CTRCB01` | F120GPB | Este identificador tem a finalidade de controlar os CheckBoxes da tela F120GPB, podendo controlar os mesmos através de uma regra e de con... |
| `VEN-120DATGE01` | F120GPD e F120GPC | Esse identificador quando ativo altera a data de geração do pedido e dos itens do pedido conforme data de emissão, para isso a data de em... |
| `VEN-120DATPR01` | F120GPC e web service com.senior.g5.co.mcm.ven.pedidos. | indicar se, ao mudar a categoria do cliente, a data de previsão e a data de entrega do pedido devem ser alteradas para a data atual ou de... |
| `VEN-120DEEMI01` | — | Desabilita os campos de data de emissão do pedido, sugerindo sempre a data atual do sistema. |
| `VEN-120DEINC01` | — | Efetuar uma consistência dos dados gerais do pedido de venda, após o sistema efetuar a consistência interna, nos momentos de inclusão ou ... |
| `VEN-120DEPAN01` | F120DPE | Este identificador tem por objetivo permitir que o usuário consista a duplicação de pedido na tela F120DPE. Dessa forma, nesse identifica... |
| `VEN-120DEPFI01` | F120GRA | Filtrar os depósitos usados para verificação do estoque. |
| `VEN-120DERAT01` | — | Carregar apenas as derivações da faixa de grade que estiverem ligadas ao produto, nas telas relacionadas: F120GRA, F121CIP, F140PRE, F141... |
| `VEN-120DESPR01` | — | Sobrepõe a descrição do produto na NF que é obtida no pedido pela descrição do produto que existe na tabela de ligação de fornecedores / ... |
| `VEN-120DETNS02` | F120GPD e demais telas de pedidos (exceto a F120GRD e F161GPC), desde que o **Tipo do Pedido** seja **5 - Previsão**. | definir uma transação para os dados gerais na geração do pedido. O identificador é executado após passar pelo campo do número do pedido. |
| `VEN-120DISPO01` | — | Ao verificar o estoque disponível no Pedido, será somada a quantidade em Ordens de Produção (E210Est.QtdOrd) na quantidade em Estoque Fís... |
| `VEN-120DPAVC01` | Duplicação de pedidos | Efetuar a cópia do número da análise valorizada de custos que está atribuída ao item original do pedido para o item do pedido novo. |
| `VEN-120DTENT01` | Pedidos | Executado na consistência final do item do pedido. Este ponto de regra é idêntico ao 000CONIT01 para o item do pedido, sendo executado ap... |
| `VEN-120DUPRE01` | F120DPE | Esse identificador de regra tem como finalidade, quando ativo, permitir manter o representante do pedido que foi duplicado para o novo pe... |
| `VEN-120EKISM01` | F120GPC, F120GPD | Abre a tela de composição de um produto KIT para produtos tipo KITque não possuem modelo pré-definido. Pode também não ser adicionado nen... |
| `VEN-120EMAEB01` | PRODUÇÃO | Enviar e-mail indicando que o embarque está aguardando liberação financeira, após a finalização da produção de todos os itens de pedidos ... |
| `VEN-120EMALE01` | F120LFE | Enviar e-mail indicando a liberação financeira de veículos dos embarques. |
| `VEN-120EMAPB01` | — | Enviar um e-mail automáticamente a um destinatário informado na regra quando um pedido do cliente for bloqueado por problemas de crédito. |
| `VEN-120EMBAN01` | F120GRA. | Indicar o código da embalagem a ser utilizado na formação de embalagem do pedido na tela F120GRA. |
| `VEN-120EMBES01` | F120AEP | Indica ao sistema que alguns processos não serão executados, afim de melhorar a performance da rotina de análise de estoque de embalagem. |
| `VEN-120EPPFI01` | F075EPP. | sugerir os valores dos campos de filtro da tela F075EPP, sendo executado ao abri-la. |
| `VEN-120EQPED01` | F120GPD. | quando ativo, na tela Entrada de Pedidos Agrupado (F120GPD), o estoque dos produtos inseridos no pedido serão consistidos no fechamento d... |
| `VEN-120EXCLU01` | F120GPD, F120CAN, F120GPB, F120GPC, F120GRA, F120PMN, F120PSP, F120PVC, F129PED, F129UFP, SID.Ped.Excluir, com.senior.g5.co.mcm.ven.pedidos | Permitir a consistência do pedido antes da exclusão física deste na base de dados. |
| `VEN-120EXCOB01` | O120PED | Não deixa exluir as Observações (E120OBS) geradas automaticamente no processo aprovação de pedido por área. |
| `VEN-120EXPGR01` | — | efetuar a distribuição de grades via regra quando a soma das quantidades informadas numa grade é superior ao somatório das quantidade de ... |
| `VEN-120EXTCR01` | Rotinas de pedido, quando houver a exclusão de títulos relacionados ao pedido | Definir se um título pode ou não ser excluído |
| `VEN-120EXTPK01` | — | Permite definir via regra se será ou não exibida a tela de composição de produto do tipo KIT para determinado usuário, no momento de digi... |
| `VEN-120FAPED01` | Faturamento de pedidos | Permitir a validação de pedidos que podem ou não serem faturados pela rotina de processo agendado 126 - Faturamento de Pedidos. |
| `VEN-120FATPE01` | — | Executado ao informar ou alterar o cliente do pedido e a partir deste será possível definir o campo FATPED do pedido. Para que o identifi... |
| `VEN-120FILFA01` | Análise de Estoques de Embalagens (F120AEP) e Entrada de Pedidos via Grade de Produtos (F120GRA). | Define a filial de faturamento do pedido e o novo depósito a ser utilizado nos itens. A rotina analisa os depósitos da filial logada e ou... |
| `VEN-120FILIP01` | F120GPC/F120GPD/SapiensWEB | Quando o usuário for um representante, ou seja, no cadastro de usuário o campo "Representante" não estiver zerado, e este representante p... |
| `VEN-120FIPRF01` | F120GRA | Definir um percentual de oferta que será rateado proporcionalmente a todos os itens de pedido, sendo que o mesmo será somado ao percentua... |
| `VEN-120FISCP01` | F120SIP | Tem como objetivo definir via regra o filtros dos campos "Produto Base", "Derivação Base", "Produto" e "Derivação", localizados no cabeça... |
| `VEN-120FIUMV01` | F120GPD, F120GPC e F120GPB | Será efetuado um filtro na unidade de medida de venda (campo U.M. Ven. da grade de produtos), onde será exibido somente as unidades que c... |
| `VEN-120FLLIB01` | ComercialVendasPedidosLiberação de Pedidos Bloqueados | Retorna um comando em linguagem SQL para ser concatenado ao comando principal de seleção de pedidos, na tela de Liberação de Pedidos Bloq... |
| `VEN-120FORGR01` | F120GRA | Informar as quantidades de grades (somatório das quantidade de derivações) possíveis de aceitar para um item de pedido em grade, de acord... |
| `VEN-120GELIG01` | F120GPC, F120GPD, F120GPB, F129PED, F140PRE, F140GNF | Definir via regra se o sistema deverá efetuar a consistência da informação referente a tabela de preço pelas ligações "Tabela de Preço x ... |
| `VEN-120GERFE01` | — | Definir que as embalagens do pedido sempre serão geradas com a situação 2 (Fechada), forçando assim a sua conferência. |
| `VEN-120GERNE01` | Entrada de Pedidos Simplificado (F120GPB). | permite cancelar um item, total ou parcialmente, que tenha gerado necessidades para produção (GerNec = 2 e 3). |
| `VEN-120GERTI01` | — | Abrir automaticamente a tela de geração de titulos via pedido, quando um pedido for fechado na tela F120GPD. Somente será executado se o ... |
| `VEN-120GPPDP01` | F120GPP | Executado imediatamente após o processamento ou fechamento do pedido na tela F120GPP, disponibilizando todos os campos da tabela E120PED ... |
| `VEN-120GRAFP01` | — |  |
| `VEN-120GRAGR01` | F120GPD - Botão Grade II | Repassa para a regra associada ao identificador uma lista de derivações ligadas aos produtos indicando, em cada item da lista, em que pro... |
| `VEN-120IDSPE01` | Pedidos | Não exigir e inibir a distribuição (manual ou sugestão automática) de números de série em todas as rotinas do pedido. |
| `VEN-120IMPPE01` | Telas de pedido que permite imprimir | Quando não é ERP varejo ao imprimir um pedido vai ser exibida a tela de modelos onde o usuário vai escolher o modelo desejado caso tiver ... |
| `VEN-120INFME01` | F120GPD | Inclui o item de menu "Informações de Mercado" no botão Produto, localizado no rodapé da tela em questão. |
| `VEN-120INFRE01` | — | Atribuir automaticamente valor de frete para os itens de pedido no momento de recálculo ou fechamento dos mesmos. As entradas digitadas p... |
| `VEN-120INSCP01` | F120SIP | Permitir ou não o carregamento de registros na grade "Produtos". O identificador será executado a cada registro a ser carregado na grade ... |
| `VEN-120IPATP01` | F120GRA | Obrigar que um determinado item seja atendido por pronta entrega. Ou seja, não gera embalagens para produção. Portanto quando for feita a... |
| `VEN-120ISMCK01` | F120MCK | Possibilita que sejam incluídos novos itens na distribuição de lotes da nota fiscal de saída, quando o sistema exibe a tela F120MCK duran... |
| `VEN-120ITEPA01` | — | Não permitir a alteração manual de itens de pedido (Produto ou Serviço) que estejam na Situação 2 (Aberto Parcial). |
| `VEN-120KITMS01` | F120GPD e F120GPC | Tem como objetivo não exibir a mensagem se deseja excluir os componentes do kit quando o kit é excluido. |
| `VEN-120LIBER01` | F120LIB | é executado antes da liberação efetiva do pedido no sistema. Para a regra ligada ao identificador, serão enviados os campos de **Empresa,... |
| `VEN-120LIBER02` | Liberação de Pedidos Bloqueados | Executado para cada pedido marcado na grade, no momento do processamento. O mesmo só funciona na liberação de pedidos bloqueados por área... |
| `VEN-120LIBER03` | F120LIB | Executado para cada observação do pedido selecionado na grade de observações, no momento do processamento. O mesmo só funciona na liberaç... |
| `VEN-120LIBER04` | — | Permitir criar um procedimento personalizado após liberar, reabilitar ou cancelar o pedido no sistema, quando o processo for realizado pe... |
| `VEN-120LIMCL01` | — | indicar se a análise do limite de crédito para o pedido e nota fiscal devem considerar todas as empresas e filiais cadastradas. É conside... |
| `VEN-120LOTES01` | Pedido | Quando houver a reserva de estoques no item do pedido de um produto controlado por Lote, a rotina após a informação do depósito, verifica... |
| `VEN-120LOTPA01` | Pedidos. | sugerir o lote padrão da origem do produto no pedido quando existir reserva de estoque. Caso exista uma reserva e ela esteja ativa, o ide... |
| `VEN-120LQTDS01` | — | Liberar a quantidade pedida do item de produto ou serviço do pedido, quando o item estiver na situação 3 (Suspenso) |
| `VEN-120MOSDE01` | F120GPC/F120GPD/F129PED/F129UFP/F120GPB | Permite definir como a descrição da derivação deverá ser exibida no rodapé da tela. |
| `VEN-120MSGPC01` | Pedidos | Indicar ao sistema se a consistência do campo "Pedido Cliente" deverá ser realizada retornando uma mensagem de erro, ou então, somente um... |
| `VEN-120NCTEC01` | F120GPD, F120GPC e web service com.senior.g5.co.mcm.ven.pedidos. | Esse identificador de regras impede a consistência executada na alteração do cliente no pedido, quando há incompatibilidade entre a tabel... |
| `VEN-120NUMCE01` | F129PED | Permite definir via regra número da cesta/número de controle interno. |
| `VEN-120NUMEM01` | PedidosFormação de Embalagens | É executado ao gravar a linha na grade de embalagens. São passados ao mesmo os dados do pedido (empresa, filial e número) e deve ser reto... |
| `VEN-120OBTGR01` | ComercialVendasPedidosAgrupados - botão grade II | Permite retornar uma lista de derivações ligadas aos produtos indicando, em cada item da lista, em que produto deve ser iniciada a distri... |
| `VEN-120OCPAR01` | F120GPD. | permite alterar o indicativo se há parcelas especiais no pedido (TemPar) quando ele é gerado a partir de uma ordem de compra. Esse identi... |
| `VEN-120OCPCO01` | F125GPO | Copiar informações dos campos de usuário da ordem de compra e também dos itens da ordem de compra para o pedido e também para os itens do... |
| `VEN-120PARCE01` | — | Permitir que as parcelas do Pedido sejam geradas com número de dias ou data de vencimento e se for por data de vencimento permite informa... |
| `VEN-120PCTIT01` | — |  |
| `VEN-120PDEMB01` | — |  |
| `VEN-120PEBLO01` | F000PEX / web service de pedidos | Se o identificador estiver ativo não exporta pedido bloqueado. |
| `VEN-120PEDSE01` | Telas de pedido | Quando o campo "Nº Pedido Automático" do cadastro de filial vendas "F070FVE - Cadastros > Filiais > Parâmetros por Gestão > Vendas e Fatu... |
| `VEN-120PESBR00` | F120GPD | Permite retornar para o ERP quando possuir integração com o Gestão de Fretes uma série de transações que não validarão se o parâmetro Som... |
| `VEN-120PRECK01` | Pedidos com produtos em multi-nível | Nas rotinas de pedido com produto em multi-nível, em que os produtos componentes de um produto KIT podem possuir preço unitário, esse ide... |
| `VEN-120PRECL01` | F120GPC | Adicionar o campo "Valor Calculado" à grade de produtos da tela e possibilitar que este seja calculado via regra. |
| `VEN-120PRECL02` | F120GPC. | Permite alterar o preço unitário do item do pedido. |
| `VEN-120PRECL04` | F120GPC. | Permite alterar o preço unitário do item do pedido. |
| `VEN-120PRECL05` | Não se aplica. | Alterar o preço unitário do produto ao incluir ou simular um pedido através das portas GravarPedidos e SimularPedidos no web service com.... |
| `VEN-120PRECO01` | — | Alterar o preço unitário do item do pedido, utilizando descontos informados pelo usuário |
| `VEN-120PRECO02` | — | Alterar o preço unitário do item do pedido, utilizando descontos informados pelo usuário e também informar valores para os campos percent... |
| `VEN-120PREIP02` | F120GPD. | valida os dados dos itens do pedido antes do item ser gravado no pedido. Segue o modelo dos identificadores VEN-120CONIP01 e VEN-120CONIP... |
| `VEN-120PREKI01` | F120MCK | Habilitar os campos de preço, tabela de preço, percentual de desconto e valor de desconto referentes ao produto da composição do KIT para... |
| `VEN-120PRODU01` | F120GPD, F120GPC | Este identificador tem como finalidade consistir estoque disponível para produtos produzidos, pois, produtos produzidos podem fazer a res... |
| `VEN-120PSDUP01` | F120DPE. | Permitir criar um procedimento personalizado após a duplicação de pedidos. |
| `VEN-120PSPFI01` | F120PSP | Permitir definir outro filtro para os produtos, também permitindo definir se quer aplicar o filtro de alguns campos existente na tela jun... |
| `VEN-120PTITM01` | — |  |
| `VEN-120PVCRA01` | F120PVC | Tem como objetivo permitir copiar o rateio do item do contrato para o item do pedido, esse processo é permitido quando o pedido é gerado ... |
| `VEN-120QTDKI01` | pedidos (exceto as telas F120GPD e F120SOR). | permite que, na alteração da quantidade do produto KIT no pedido, sejam alteradas, proporcionalmente, as quantidades nos componentes liga... |
| `VEN-120QTLOT01` | — | Sugerir a quantidade disponível para um determinado lote quando este for informado na tela de distribuição de lotes. O sistema irá sugeri... |
| `VEN-120QTPED01` | — | Permitir alterar a quantidade pedida de um item de produto no momento em que ela for informada. |
| `VEN-120QTPED02` | F120GPD, F120GPC | Alterar a quantidade pedida de um item de produto no momento em que ela for alterada. |
| `VEN-120QTRAE01` | F135APM,F135AEA,F135FCP,F135FCA,F135FCR,F135IPC | Liberar a criação de LOG para carga/pré-fatura, para rastrear assim a movimentação no campo "quantidade reservada em análise" (QtdRae). |
| `VEN-120RATIT01` | — | Será sempre feito o rateio de um pedido por item tentando buscar o rateio pré-definido do tipo "C" (composto), mesmo que tenha sido infor... |
| `VEN-120RATIT02` | — | Gerar rateios por item, obedecendo a regra geral para rateios. |
| `VEN-120RECAL01` | Todas as telas de pedidos | Indicar ao sistema que é necessário realizar o recalculo do pedido, mesmo quando o sistema não encontrar alterações (que não sejam percen... |
| `VEN-120RECAP01` | F120GPC. | Indica para o sistema se deve buscar os valores atualizados do cadastro do produto no recalcular com busca de valores da tela F120GPC. |
| `VEN-120RECAS01` | F120GPC. | Indica para o sistema se deve buscar os valores atualizados do cadastro do serviço no recalcular com busca de valores da tela F120GPC. |
| `VEN-120RECBV01` | Rotinas de pedido, exceto a tela F120GPD e importação via modelos | Retornar para o sistema um indicativo se o pedido deverá ser recalculado buscando valores ou não. |
| `VEN-120RECPE01` | F120GPC, F140PRE, F120GRA, F129PED | Determina se deve ou não recalcular todos os itens do pedido. Quando esse identificador de regra estiver ativo vai recalcular somente os ... |
| `VEN-120RECPE02` | F120GPC, F140PRE, F120GRA, F129PED | Determina se deve ou não recalcular todos os itens do pedido. Quando esse identificador de regra estiver ativo vai recalcular somente os ... |
| `VEN-120REIMP01` | Telas de Pedido | Este identificador tem por finalidade possibilitar a reimpressão de um pedido quando o sistema utilizar a integração com o ERP Varejo e o... |
| `VEN-120SALES01` | F120GPC, F120GPD, F120GRA | Determina se deve ou não exibir a mensagem de estoque. Desta forma via regra pode ser feita consistência para determinar se um produto ou... |
| `VEN-120SEQLI01` | — | Quando ativo, ao excluir um item de produto ou item de serviço, o sistema seguirá para o próximo item da sequência, não retornando ao pri... |
| `VEN-120SERES01` | — | Exibir na geração, manutenção e consulta de pedidos, se a série sugerida ou informada na grade da tela de distribuição de séries está ou ... |
| `VEN-120SITEB01` | Produção | Indicar, ao finalizar a produção de um item de pedido, que o sistema deverá efetuar checagem para verificar se todos os itens do embarque... |
| `VEN-120SNTIT01` | Pedidos | Retornar a série financeira para geração de numeração do título, quando este título é gerado via pedido. Como não existe um parâmetro ou ... |
| `VEN-120SQCTO01` | — | Informar, via regra, um contato para o pedido tendo como base o código da empresa, filial, e cliente do pedido, além do contado atual usa... |
| `VEN-120STPWS01` | Web service de Pedido e Todas as telas de Pedido exceto a F120GPD | Indicar se vai sugerir ou não a tabela de preço na inclusão de produto/serviço. |
| `VEN-120SUFRA01` | — | Caso o identificador de regra estiver ativo o cálculo de desconto SUFRAMA (Zona Franca) será feito em sua totalidade, independente de qua... |
| `VEN-120SUGOP01` | Pedido | Devolver ao sistema o código do operador. |
| `VEN-120SUGTP01` | F120GPD- Itens via Embalagem (F120PVE) | Modificar a tabela de preço do item de produto do pedido a ser gerado durante o processamento, substituindo a sugerida dos dados gerais d... |
| `VEN-120SUREP01` | Pedidos | Sugerir o representante e o vendedor do pedido. |
| `VEN-120SUSPE01` | — | Quando ativo, tem como ação padrão, alterar a situação do pedido para "Suspenso" no fechamento. É possível também vincular uma regra e al... |
| `VEN-120SUVEN01` | F120GPD, F120GPC, F129UFP, F129TMK | Definir o código do vendedor nas telas de pedido F120GPC, F120GPD, F129UFP, F129TMK. |
| `VEN-120TNSDE01` | todas as telas de pedidos. | é acionado na inserção de um item e quando o código do produto/serviço for informado. |
| `VEN-120TPRST01` | F120GPD, F120GPC e F120GPB. | permitir a emissão de pedidos a partir de tabelas de preço de vendas com aplicação parametrizada como **2 - Outros ST**. |
| `VEN-120TRARE01` | Pedidos | Sugerir o CEP da transportadora de redespacho para o campo "CEP para cálculo do frete no pedido". |
| `VEN-120UFPCL01` | F129UFP | Efetuar cálculos e retornar o valor calculado em um campo na grade de produtos. Permirindo definir sua descrição e valor de forma dinâmica. |
| `VEN-120ULFAT01` | — | Indicar se a busca dos últimos faturamentos para a tela de pedidos será feita pela quantidade de notas ou pela quantidade de meses. |
| `VEN-120UPDES01` | — | Executar um comando SQL na regra associada. |
| `VEN-120VALPD01` | Pedidos | O identificador VEN-120VALPD01 tem por finalidade disponibilizar um ponto de regra antes do cálculo dos valores do pedido. |
| `VEN-120VENCA01` | F129PED/F120GPB | Permite retornar se pedido é calcenter, a transação para os produtos e a condição de pagamento. |
| `VEN-120VLOUT01` | — | Permitir alterar os valores de Outras Despesas do pedido no momento do rateio dos mesmos. |
| `VEN-121VLPED01` | F121CIP | Possibilitar definir o tipo de valor do campo Valor Pedido na tela de Consulta de Itens de Pedidos (F121CIP). |
| `VEN-129FILPE01` | F129PED | Permite definir uma nova filial para o pedido, conforme os cliente informado para o pedido. |
| `VEN-129GRITE01` | F129IPD | Gravar item a item os produtos digitados na tela F129IPD na tabela, permitindo a utilização do identificador de regras VEN-000CONIT01 no ... |
| `VEN-129SALDO01` | — | Fazer a consistência na adição dos items de pedidos provenientes da tela de Pedidos de Telemarkentig. |
| `VEN-129TABMX01` | — | Buscar uma tabela de preços para mostrar os produtos que fazem parte do MIX do cliente. |
| `VEN-135AGPFA01` | F135APF | Montar um filtro personalizado para o agrupamento de pré-faturas na tela F135APF. Este filtro será utilizado para a exibição das pré-fatu... |
| `VEN-135AGRUP01` | F135FCP | Este identificador foi criado com a finalidade de dizer quais clientes irão agrupar os pedidos em uma unica pré-fatura na formação de car... |
| `VEN-135ALPES01` | F135FCP/F135FCA | Este identificador tem por finalidade alterar os pesos líquido e bruto dos itens de produtos da formação de carga durante o respectivo ca... |
| `VEN-135ALQTD01` | Análise de Embarque | Alterar a quantidade à faturar dos iItens das pré-faturas antes da sua geração. |
| `VEN-135ALTST01` | Atendimento Automático de Pedidos (Análise de Embarque). | manter a situação padrão (2 ou 3) das pré-faturas que não possuem bloqueios quando o campo **Gera pré-fatura bloqueada** está marcado na ... |
| `VEN-135APMAG01` | F135APM | Disponibilizar o campo "Data Entrega" que será carregado com o valor de "Data do agendamento da entraga" ao sair do campo de pedido. |
| `VEN-135ARPER01` | F135FCP. | Ajusta o valor do campo % Atender da tela Formação de Cargas (via Pedidos) (F135FCP). Em alguns momentos, o campo era preenchido com um v... |
| `VEN-135BQRPD01` | F135FCP. | Garantir que a quantidade de reserva exclusiva do item seja sempre considerada na carga dos itens do pedido nas telas de seleção, inclusi... |
| `VEN-135BUSQT01` | F135FEC | Informar uma nova quantidade do item que está sendo embalado na pré-fatura. O valor padrão da quantidade passada para o identificador ser... |
| `VEN-135CASLD01` | — | Sempre vai sugerir "N" para o campo "Cancela Saldo" nas telas de formação de carga. Uma funcionalidade similar está presente nos identifi... |
| `VEN-135CASLD02` | F135MCA, F135FCR | Irá sugerir o valor "S" para o campo "Cancela Saldo" na tela F135MCA. Uma funcionalidade similar está presente nos identificadores VEN-13... |
| `VEN-135CASLD03` | F135FCP. | Definição do indicativo se pode cancelar o saldo na geração dos itens da carga por meio de regra. Uma funcionalidade similar está present... |
| `VEN-135CBCCA01` | F135CCA |  |
| `VEN-135CBCCA02` | F135CCA | Tem o intuito de posicionar a grade de itens não conferidos da pré-fatura, em um determinado registro que será indicado pela regra. |
| `VEN-135CBCCA03` | F135CCA. | possibilita a escolha da ação realizada ao executar a opção "processar" do fechamento da conferência. Na tela F135CCA, ao finalizar uma c... |
| `VEN-135CCACC01` | F135CCA | Habilitar o campo "Cód. Barras Cliente", em que o usuário entrará com um código interno e conferirá via regra o mesmo, permitindo ou não ... |
| `VEN-135CCACC02` | F135CCA_RDCG - Mercado / Gestão de Distribuição / Cargas / Conferência de Cargas (Quantidades) | Permite executar uma regra ao concluir a conferência de quantidades de uma pré-fatura. O sistema repassa à regra as informações dos itens... |
| `VEN-135CFEPF01` | F135CFE | Este identificador tem por finalidade permitir realizar consitências do código de barras lido pela tela F135CFE (Mercado > Gestão de Fatu... |
| `VEN-135CFGBT01` | F135MPF | Este identificador foi criado com o intuito de controlar os botões [Canc. PF., Diversos, LiberarCarga, FinalizarPlano e LiberarPlano]; |
| `VEN-135CODBA01` | Geração de pré-faturas | O código de barras gerado pelo ERP para identificar a pré-fatura é composto pelo código da empresa(4 posições) + código da filial(4 posiç... |
| `VEN-135COLEST1` | F135RCR | quando cadastrado e ativo, habilita o uso de cache para a busca dos registros referentes ao estoque na tela **F135RCR**. |
| `VEN-135CONCP01` | Análise de Embarque | É executado no processamento da tela F135AEA e também em web service, porém serve apenas para consistências e não manipulação de valores.... |
| `VEN-135CONDG01` | F135MPF. | Disponibilizar um ponto de regra que permita ao usuário validar as informações dos dados gerais da pré-fatura na tela Manutenção de Pré-f... |
| `VEN-135CRECL01` | F135APM,F135AEA,F135MPF,F135FCA,F135FCP,F135FCR e F135MCA | Retornar para o sistema valores para os campos VLRFRE, CIFFOB, SOMFRE e SITPFA para as pré-faturas e cargas. Será acionado após a gravaçã... |
| `VEN-135CTRMA01` | F135APM | Identificador com o objetivo de permitir que as gerações de Pré-Faturas sejam feitas pela parte inicial das máscaras dos produtos. Isto p... |
| `VEN-135CTRMA02` | F135APM | Identificador que funcionará em conjunto com o VEN-135CTRMA02 e servirá para que o usuário possa retornar um campo de usuário para ser us... |
| `VEN-135DEVLO01` | F135ECA, F135MPF | Este identificador tem a finalidade de devolver ao pedido o código de lote padrão ao excluir uma carga. |
| `VEN-135DISIP01` | — | Possibilita tratar, por conta própria, os critérios na formação da carga, removendo pedidos que não deseja-se atender naquele momento. |
| `VEN-135DISPD01` | — | Possibilita tratar, por conta própria, os critérios na formação da carga, removendo pedidos que não deseja-se atender naquele momento. |
| `VEN-135DISPO01` | Pré-fatura | Buscar o saldo disponível do lote para a formação das embalagens. Na tela F135FEC estando o identificador ativo o sistema irá buscar o sa... |
| `VEN-135EMBAL01` | F135FET | Disponibilizar para a regra associada a chave completa da pré-fatura (CodEmp, CodFil, NumAne, NumPfa) informada na tela F135FET quando o ... |
| `VEN-135ESMEM01` | PRÉ-FATURAS E CARGAS. | Este identificador tem por finalidade atualizar o estoque somente no final do processamento das pré-faturas (Cargas e Análises de Embarqu... |
| `VEN-135EUDLE02` | Rotinas de formação de carga. | Sugerir lotes e suas respectivas quantidades. Para saber mais sobre todas as possibilidades de sugestão de lotes e séries, clique aqui. |
| `VEN-135EXCPF01` | Exclusão de Pré-Faturas | Este identificador tem por objetivo permitir a execução de uma regra no momento em que o sistema executa a exclusão de pré-faturas. Esta ... |
| `VEN-135EXCPF02` | Telas: F135APM, F135LIB, F135MPF. Influenciando também nas rotinas de integração com o WMS. | Este identificador tem por finalidade consistir após o cancelamento das pré-faturas a validação da situação dos itens dos pedidos. Existi... |
| `VEN-135FCANC01` | — | Esse identificador possibilita que a conferência de cargas na tela F135CCA seja processada e concluída sem que o usuário conferente tenha... |
| `VEN-135FLPFA01` | — | retornar um comando em linguagem SQL para ser concatenado ao comando principal de faturamento de pré-faturas; disponibilizar dois pontos ... |
| `VEN-135GLUSU01` | F135FCP / F135CPL | Este identificador foi criado com a finalidade de gravar campos de usuario no final do processamento da formação de cargas via pedido (F1... |
| `VEN-135GNACGP` | — |  |
| `VEN-135GNALI01` | — | Gravar no banco de dados a cada nota fiscal processada na tela de geração de notas fiscais via pré-faturas. |
| `VEN-135GNALI02` | F135GNA (Faturamento via Pré-Faturas) | Gravar no banco de dados (commit) a cada cabeçalho de nota fiscal processado. Após o processamento dos itens, um novo comando "commit" é ... |
| `VEN-135HABCP01` | F135GNA | Atribuir um valor ou bloquear a edição das opções na tela F135GNA: |
| `VEN-135INFQT01` | F135FEC | Exibir o campo "Qtde" no cabeçalho da tela F135FEC. |
| `VEN-135LCKPD01` | — | travar a tabela |
| `VEN-135LCKPD02` | — | Travar a tabela de |
| `VEN-135LCLOR01` | Agrupamento de Pré-Faturas (F135APF) | Permite ao cliente configurar a posição do campo Forma de Pagamento (CODFPG) na cláusula ORDER BY da query de seleção de pré-faturas na r... |
| `VEN-135LEIBA01` | F135FEC e F135FET | Devolver para o sistema 4 variáveis a serem consistidas como segue: |
| `VEN-135LIBPD01` | F135IPC | Consistir o pedido que está para ser incluído em uma carga pelas telas F135FCP e F135IPC ao carregá-lo na grade de pedidos das mesmas. Ca... |
| `VEN-135LIBPF01` | F135FET | Liberar uma Pré-Fatura para faturamento na tela mencionada sem que seja necessário realizar a leitura de todos os itens vinculados a mesma. |
| `VEN-135LIBPF02` | F135LIB | Executar a regra associada ao identificador quando a opção selecionada no campo Modalidade da tela F135LIB for "Cancelar pré-faturas" ou ... |
| `VEN-135LOTPA01` | Pré-fatura | permitir gerar pré-faturas com o lote padrão definido no pedido. Para saber mais sobre todas as possibilidades de sugestão de lotes e sér... |
| `VEN-135LOTPA02` | — | Este identificador só tem funcionalidade na geração de carga via pedido quando for através do módulo de Distribuição. A finalidade dele é... |
| `VEN-135LPMCA01` | Processamento da carga na tela F135MCA | No processamento da carga na tela F135MCA, as quantidades distribuídas para o lote padrão eram consideradas, permitindo que a pré-fatura ... |
| `VEN-135MODLS00` | Redistribuição de lotes na tela F135MCA | Durante a redistribuição de lotes, existindo divergências entre a quantidade do item da pré-fatura e a soma das quantidades distribuídas ... |
| `VEN-135MOSPB01` | F135FEC | Exibir a informação do peso bruto do último produto lido abaixo do campo "Código" do cabeçalho da tela. |
| `VEN-135MSGLB01` | F135FET | Apresentar uma mensagem de liberação diferente quando ocorrer a leitura de algum ìtem que não estejam presentes na Pré-Fatura. Se isto oc... |
| `VEN-135NAOIP01` | F135FCA,F135FCP,F135MCA,F135RCR. | Fazer com que o sistema não informe mais aos usuários que estão fechando uma determinada carga, que existe uma pendência de entrega para ... |
| `VEN-135NAOTR01` | F135FCA, F135FCP, F135RCR e F135CCA. | não obrigar informar transportadora/veículo e não consistir a capacidade de pesos e volumes. Com isto, não serão apresentadas as mensagen... |
| `VEN-135NEXCA01` | F135ECA | Exibir na tela F135ECA a opção "Excluir somente as pré-faturas, mantendo a carga". Ao processar, caso esta opção esteja selecionada, some... |
| `VEN-135NOLOG01` | Pré-faturas | Não gerar arquivos de LOG nas rotinas de pré-faturas. Os arquivos de LOG somente serão gerados se ocorrer erros durante o processo. |
| `VEN-135NRVOL01` | F135FEC | Gerar o Número da Embalgem de acordo com os campos: |
| `VEN-135NVDET01` | F135RCR. | permite personalizar o nível de detalhe da atualização da barra de progresso durante o carregamento da tela **F135FCR**. O valor padrão, ... |
| `VEN-135ORDPR01` | F135APF | Informar via regra quais campos da tabela de produtos (E075PRO) serão utilizados para ordenação no agrupamento de pré-faturas, sendo os i... |
| `VEN-135ORPES01` | F135CCA | Informar via regra quais campos da tabela de itens da pré-fatura (E135PES) serão utilizados para ordenação na conferência de cargas, send... |
| `VEN-135ORPFA01` | F135FCP | Reordenar os pedidos carregados na grade de pedidos da tela F135FCP antes da geração das pré-faturas. Após o carregamento dos pedidos o u... |
| `VEN-135PAEST01` | — | Exigir que o estado do cliente que está sendo feita a formação da carga tenha parâmetros cadastrados em Cadastros > Mercado e Suprimentos... |
| `VEN-135PERVA01` | F135MPF. | Disponibilizar um ponto de regra que permite ao usuário definir se deseja possibilitar alterações nos itens da pré-fatura na tela Manuten... |
| `VEN-135PESPF01` | Rotinas de Pré-fatura principalmente F135MPF | Este identificador associado a uma regra tem por finalidade indicar se o peso deverá ser considerado quando a transação possui parâmetro ... |
| `VEN-135PESVO01` | F135FEC | Alterar o peso bruto, líquido e o volume do produto na embalagem da pré-fatura. Será acionado ao processar a embalagem para cada item de ... |
| `VEN-135PGANT01` | F135APM, F135AEA | Identificador criado com a finalidade de poder controlar via regra se a pré-fatura bloqueia ou não quando o pedido tiver pagamento anteci... |
| `VEN-135PPETI01` | Formação de Cargas | Gerar carga somente se o pedido possuir estoque para todos os itens, desde que a opção "Mostra só com estoque" estiver definida como "S".... |
| `VEN-135PRANE01` | F135FCP e F135FCR. | Disponibilizar um ponto de regra após o processamento e gravação do banco de uma pré-fatura. |
| `VEN-135PROAU01` | F135APF | Permite que sejam inseridos filtros de pedidos no processo automático de geração de pré-fatura. Os filtros que podem ser retornados repre... |
| `VEN-135QTATE01` | F135APM | Tem por finalidade manipular via regra a quantidade atendida do item do pedido. |
| `VEN-135QTLOT01` | — | Sugerir ao usuário a quantidade disponível para um determinado lote quando este for informado na tela de distribuição de lotes. Será suge... |
| `VEN-135RCRCR01` | F135RCR. | quando cadastrado e ativo, habilita o uso de cache para os registros de estoque (T210EST) durante o processamento da tela **F135FCR**, ev... |
| `VEN-135SEQEM01` | — | Este identificador tem a finalidade de controlar a geração do número de sequência de embalagem na tela F135FEC. O sistema sempre irá incr... |
| `VEN-135SERES01` | Pré-Faturas | Não obrigar a distribuição de série na geração da pré-fatura, seja pela análise de embarque ou pela geração manual. Quando for utilizado ... |
| `VEN-135SITPF01` | — | Definir que a pré-fatura quando gerada irá possuir a situação de "Para Faturar" ao invés de receber a situação "Em Preparação" como é o p... |
| `VEN-135TEMPA01` | F135APM, F135AEA, F135FCP e F135FCS. | Gravar no campo TEMPAR da tabela E135PFA o valor N quando o pedido possuir parcelas especiais (E120PED.TEMPAR = S). Dessa forma, ao fatur... |
| `VEN-135TIPLE01` | F135FEC | Permitir utilizar diferentes tipos de leitura na tela de formação de embalagens (via radiofreqüência) sem que para isto tenha que alterar... |
| `VEN-135TNSPD01` | F135FCP | Permitir ao usuário informar através de regra a abrangência de transações de produto permitidas para a formação das cargas. |
| `VEN-135TNVAS01` | F135VAS, F143ACQ | Permitir que o próprio usuário através de uma regra, possa definir qual será a transação de entrada e de saída a ser utilizada no process... |
| `VEN-135TRPED01` | F135FCA, F135FCP e F135RCR. | quando ativo com o identificador de regra VEN-135NAOTR01, se houver várias transportadoras nos pedidos elas serão herdadas para as pré-fa... |
| `VEN-135UPTLT01` | — | Este Identificador de Regras altera a rotina executada ao processar a geração de embalagens quando a análise possui itens de produto cont... |
| `VEN-135VFMLT01` | F135FCP. | Permitir que seja gerado um erro, por meio da regra, caso o usuário altere a quantidade a faturar na tela Formação de Cargas (via Pedidos... |
| `VEN-135VOLIT01` | F135FCP | Objetivo deste identificador é permitir que o valor do volume do produto na formação de cargas via pedido F135FCP possa ser definido atra... |
| `VEN-135VQABE01` | — | Valida a disponibilidade do estoque do lote de forma mais eficaz, considerando apenas a quantidade disponível para o lote e não do produt... |
| `VEN-140AESAL01` | F140CAN. | Indica uma tabela e campos de usuário para a gravação dos dados da ação eletrônica. É utilizado na rotina que salva os dados da ação elet... |
| `VEN-140AGFPG01` | F140GNF | Quando o identificador estiver ativo, o sistema agrupará o somatório das parcelas do mesmo tipo de pagamento na tag <detPag>. |
| `VEN-140AGTNS01` | F140LOT | Agrupar transações para que apareçam na tela associada ao botão Seleção. |
| `VEN-140ALDIV01` | Notas Fiscais - Inserção/Alteração | Permitir que todas as informações da nota fiscal contidas nas telas chamadas a partir do botão Diversos sejam sugeridas via regra. |
| `VEN-140ALDRM01` | Geração de Cobrança e Remessa | Enviar para a regra a chave da nota de cobrança e a chave da nota de remessa, permitindo assim que ele possa alterar via regra o valor de... |
| `VEN-140ALFIN01` | — | Alterar o valor financeiro dos itens de produto ou serviço de uma nota fiscal de saída. Chamado sempre que for feita uma alteração no val... |
| `VEN-140ALIMP01` | — |  |
| `VEN-140ALOBS01` | Fechamento de notas fiscais de saída | Alterar a observação dos dados gerais da nota fiscal de saída ao fechar. |
| `VEN-140ALPES01` | inclusão de itens na nota fiscal. | alterar os pesos dos itens de produto de notas fiscais de venda durante o cálculo do item na nota fiscal. Todas os campos da tabela de it... |
| `VEN-140ALQDE01` | — | Permite a alteração da quantidade de notas fiscais que vão formar um lote. Podendo estas notas serem do tipo: |
| `VEN-140ALSNS01` | F115COE | Este identificador tem a finalidade de definir a série da nota fiscal de prestação de serviço quando existem taxas inerentes à devolução.... |
| `VEN-140ALTCM01` | — | Este identificador permite alterar o código de município durante o cancelamento de uma nota de serviço eletrônico. |
| `VEN-140ALTDT01` | F140FGR | Personalizar as datas de previsão e entrega. O identificador será acionado na abertura da tela. |
| `VEN-140ALTENT1` | — | O Identificador de Regras permite executar a alteração da sequência de Entrega da Nota Fiscal de Saída. |
| `VEN-140ALTMT01` | — | Este Identificador de regras altera o tipo de cálculo de diferimento utilizado ao gerar a Nota de Saída de Devolução, quando existe uma d... |
| `VEN-140ALTMT01` | F140DIV | Permitir a alteração da transportadora do motorista e o motorista da nota fiscal, independente do tipo de empresa (E070EMP.TIPEMP), do ti... |
| `VEN-140ALTPG01` | F066FPG. | alterar o tipo de pagamento de um documento fiscal na geração do .XML. Para mais informações, confira a documentação completa da NT 2020.... |
| `VEN-140ALTRA01` | F140PRE,F115COE,Web Service | Permitir alterar as informações de rateio do item de produto da nota fiscal de saída de devolução gerada a partir de uma nota fiscal de e... |
| `VEN-140ALTRA02` | F140PRE e Web Service | Permitir alterar as informações de rateio do item de serviço da nota fiscal de saída de devolução gerada a partir de uma nota fiscal de e... |
| `VEN-140ALTTM01` | — | Alterar o papel do Tomador quando o CNPJ do Tomador for igual ao CNPJ de uma das seguintes figuras: Remetente, Destinatário, Expedidor, R... |
| `VEN-140ALTTRA1` | — | Esse Identificador de Regras é executado ao definir o Código da Transportadora da Nota Fiscal de Saída que está sendo gerada na tela F140... |
| `VEN-140ARICS01` | — | Definir a forma de arredondamento para ICMS Substituto, isto é, repassando informações para regra, o usuário poderá definir se existe ou ... |
| `VEN-140ATNFA01` | — | Este Identificador de Regras irá ignorar o método de Atualização da Série Fiscal (NumNfe) da Tabela de Série (E020SNF) quando estiver exe... |
| `VEN-140ATUSU01` | Notas Fiscais de Saída. | acionar a regra em pontos específicos das rotinas que envolvem notas fiscais de saída para manipular os campos de usuário das tabelas que... |
| `VEN-140BANFV01` | F140PRE | Abrir a rotina de aproveitamento de títulos de crédito do financeiro (F301BAA) no fechamento da nota fiscal de saída do tipo 1, quando os... |
| `VEN-140BENEF01` | — |  |
| `VEN-140BLQIN01` | F066FPG. | é utilizado para que o sistema **desconsidere** as alterações relacionadas ao intermediador de operação (geração das tags). Caso ativo, s... |
| `VEN-140CALFR01` | — | Caso exista este identificador e for informado o fornecedor, valor e quantidade base de frete, o sistema irá jogar para o campo valor de ... |
| `VEN-140CALSB01` | Notas fiscais de saída/devolução | Permitir que seja retornado o valor do subsídio da DAP para o item de produto da nota fiscal de saída. |
| `VEN-140CANAE01` | F140CAN. | ativa um recurso que melhora a integração entre o sistema de Gestão Empresarial e o Sistema de Documentos Eletrônicos, garantindo sincron... |
| `VEN-140CANAE02` | SID.Nfv.Cancelar (RFNF). | ativa um recurso que melhora a integração entre o sistema de Gestão Empresarial e o Sistema de Documentos Eletrônicos, garantindo sincron... |
| `VEN-140CANFD01` | F140CAN. | define como o sistema marcará as notas ao utilizar o botão **Marcar** da tela F140CAN. A variável **VENASITDOE** ficará em branco ao exec... |
| `VEN-140CANNF01` | F140CAN. | ao escolher a opção **Cancelar Notas** ou **Reabilitar Notas** na tela F140CAN, é possível indicar ao sistema por meio das variáveis do i... |
| `VEN-140CANNS01` | F140CAN e Com.senior.g5.co.int.eletronicos.documentos.ImportarRetornos_6. | O identificador de regras implica na busca executada por registros na tabela Vendas - Relacionamentos entre notas fiscais de saída (E140R... |
| `VEN-140CANSL01` | F140PRE | O identificador quando ativo e a opção da nota fiscal de saída for "Via Pedido", deixa disponível na tela F140PRE o campo "Saldo Cancelar... |
| `VEN-140CANTB01` | F140CAN | Quando o identificador de regras "VEN-140CANTB01" estiver ativo, ele será consistido ao cancelar um documento fiscal (F140CAN) se esse já... |
| `VEN-140CAPDC01` | F440GNE. | Permitir se deve cancelar o Pedido na geração da Nota Fiscal de Devolução da Nota de Cobrança. |
| `VEN-140CCNPE01` | F140CAN. | Quando cadastrado e ativo, não executa a consistência da data de emissão da nota versus o período da filial de estoque da empresa. Quando... |
| `VEN-140CFGCB01` | F140VCB | Montar o código de barras com código, quantidade e valor, retornando o tamanho de cada campo dentro de um mesmo código de barras. |
| `VEN-140CFILE01` | Importação de Cupom Fiscal | Sugerir lotes e suas respectivas quantidades, quando o web service com.senior.g5.co.int.varejo.cupomfiscal@Gravar não receber uma distrib... |
| `VEN-140CIMPRF1` | — | Este Identificador de Regras possibilita ajustar diferenças de arredondamento (“perda de precisão”) nos impostos da Reforma Tributária (C... |
| `VEN-140CINFE01` | F140NRP | Verifica se considera o item da nota fiscal de entrada para sugerir o componente utilizado na fabricação. Pode ser utilizado por exemplo,... |
| `VEN-140CMTALT1` | Web service Com.senior.g5.co.mcm.ven.notafiscal, porta GravarNotasFiscaisSaída | Esse identificador de regras tem por finalidade persistir a nota fiscal gerada na base de dados, mesmo quando ocorrer rejeição da nota na... |
| `VEN-140CNFEC01` | — | Consistir o fechamento de uma nota fiscal. O identificador irá disponibilizar a chave de acesso da nota fiscal para que, via regra, seja ... |
| `VEN-140CNFEC02` | Fechamento de Notas Fiscais de Saída | Consistir o fechamento de uma nota fiscal. O identificador irá disponibilizar a chave de acesso da nota fiscal para que, via regra, seja ... |
| `VEN-140CNFEC03` | Fechamento de notas fiscais de venda | Consistir o fechamento de uma nota fiscal. O identificador irá disponibilizar a chave de acesso da nota fiscal para que, via regra, seja ... |
| `VEN-140CONES01` | — | Não consistir estoque quando da preparação de notas fiscais de saída através de notas fiscais de entrada. |
| `VEN-140CONOR01` | F140PRE | Permitir ao usuário fazer consistências via regra a partir dos documentos selecionados como origem para a nota fiscal de venda (pedido, n... |
| `VEN-140COPPE01` | F140PRE | Determinar quais os campos que devem ser copiados do cabeçalho do pedido para o cabeçalho da nota fiscal. |
| `VEN-140COS0001` | — |  |
| `VEN-140COTMO01` | F140PRE, F140LOT | Redefinir o campo CotEmi da tabela de títulos E301TCR. Assim, via regra pode ser determinado se deve ser gravado no campo CotEmi a cotaçã... |
| `VEN-140CRIFE01` | F115CAR, F115NPF, F140FGR, F149GNP, F149GNC, F149GNP, F135GNA. | quando uma nota fiscal de saída for gerada, ao consistir os saldos do estoque de cada produto, caso existir um critério de formação de es... |
| `VEN-140CT00000` | Conhecimento de transporte eletrônico | Manipular informações do conhecimento de transporte antes da geração do arquivo XML. |
| `VEN-140CT00B28` | Conhecimento de Transporte Eletrônico (CT-e) | Alterar o grupo de informações complementares do CT-e. |
| `VEN-140CT00B30` | Conhecimento de Transporte Eletrônico (CT-e) | Alterar o grupo de informações complementares do CT-e. |
| `VEN-140CT00B36` | — | Manipular os dados do endereço do tomador do serviço. |
| `VEN-140CTC0002` | Conhecimento Transporte Eletronico. | Identificador criado para a busca dos lacres do conhecimento e da quantidade rateada. |
| `VEN-140CTE0001` | — |  |
| `VEN-140CTEUN01` | F140COL e F140CTS. | Sugere os campos referente a unidade de medida da composição do conhecimento de transporte do CT-e. |
| `VEN-140CTRCT01` | F140COL | Este identificador tem por objetivo retornar os valores para os campos da rotina de preparação do CTRC (tela F140COL) após o usuário info... |
| `VEN-140CV00991` | NFS-e | Alterar informações dos campos na geração da nota fiscal de serviço para emissor converge.net. |
| `VEN-140CV00992` | NFS-e | Alterar informações dos campos na geração da nota fiscal de serviço para emissor converge.net. |
| `VEN-140CV00993` | NFS-e | Alterar informações dos campos na geração da nota fiscal de serviço para emissor converge.net. |
| `VEN-140CV00994` | NFS-e | Alterar informações dos campos na geração da nota fiscal de serviço para emissor converge.net. |
| `VEN-140CV00995` | NFS-e | Alterar informações dos campos na geração da nota fiscal de serviço para emissor converge.net. |
| `VEN-140DATGE01` | — | Poder alterar a data de emissão conforme a data de geração da nota. |
| `VEN-140DEFICLI` | — | Permite controlar se alguns campos da nota fiscal podem ser sugeridos ou não a partir das definições do cliente. |
| `VEN-140DESCO01` | — | Criar um desconto diretamente na geração da nota fiscal via pedido. |
| `VEN-140DEVLO01` | F140CAN | Este identificador tem a finalidade de devolver ao pedido o código de lote padrão ao cancelar a nota com reabilitação de pedido para a te... |
| `VEN-140DISFS01` | Cálculo de item de produto e serviço da nota fiscal de venda e de compra. | Permitir alterar o código do Dispositivo e o valor de ajuste do item da Nota Fiscal via regra. O Identificador é executado antes da suges... |
| `VEN-140DISLO01` | — | Fazer a distribuição de lotes automaticamente (Funciona em conjunto com o GER-000EUDLE01). |
| `VEN-140DISPO01` | F140PRE;F140LOT;F140DSI | Ao verificar o estoque disponível na nota fiscal, será somada a quantidade em ordens de produção (E210EET.QTDORD) na quantidade em Estoqu... |
| `VEN-140DTCAN01` | F140CAN. | mudar a data da movimentação no cancelamento da nota fiscal. |
| `VEN-140DTPAR01` | — | Retornar a data base para a geração das parcelas |
| `VEN-140EMTST01` | Notas Fiscais de Saída | Retornar para o ERP se a pergunta referente a informação do conhecimento de transporte (F140GNF) deverá "ser exibida", ou se o sistema de... |
| `VEN-140EPTOR01` | SID.Nft.MarcarEPT | Permitir que a busca do produto/derivação seja feita através de um código de origem retornado pela regra. O identificador é acionado na a... |
| `VEN-140ESTNG01` | F140LOT e F149GNA | Exibir um aviso se não existir estoque suficiente para o faturamento de um produto/derivação/depósito nas telas de faturamento agrupado. |
| `VEN-140EUDLE02` | Notas Fiscais de Venda | Sugerir lotes e suas respectivas quantidades. Para saber mais sobre todas as possibilidades de sugestão de lotes e séries, clique aqui. |
| `VEN-140FGRCO01` | F140FGR | Fazer a consistência dos valores que serão faturados e do saldo restante do pedido. As consistências feitas serão apresentadas em um novo... |
| `VEN-140FLNDC01` | Nota Fiscal de Serviço Eletrônica de Florianópolis | Permitir a geração da tag . |
| `VEN-140FRENF01` | F140PRE/F140GNF | No momento do fechamento das notas fiscais, será possível alterar os valores de frete (VlrFre), frete destacado (VlrFrd), percentual de i... |
| `VEN-140FSCOM01` | Notas fiscais de saída (F140PRE, F140GNF, F140LOT, F161GPD, F161FCV). | Inserir ou alterar dados de uma NFCom. |
| `VEN-140GCRED01` | Geração de arquivos de notas fiscais. | Quando ativado, permite que o usuário preencha os valores das subtags do grupo gcred, gerando assim a tag gcred na emissão da nota fiscal. |
| `VEN-140GECAN01` | F140CAN. | Gerar uma inconsistência no processo de cancelamento após salvar o contexto da emissão. |
| `VEN-140GECAN02` | F140CAN. | Gerar uma inconsistência no processo de cancelamento antes de atualizar as informações eletrônicas da nota. |
| `VEN-140GECAN03` | F140CAN. | Gerar uma inconsistência no processo de cancelamento após atualizar as informações eletrônicas da nota. |
| `VEN-140GECTF01` | F140COL | Indica se gera Carta Frete no fechamento do CTRC. |
| `VEN-140GEGFA01` | F140GNF, F140CAN. | Indicar ao sistema se deve ser gerado o grupo gFat no XML da nota de comunicação. |
| `VEN-140GERAS01` | — | indica se deve gerar informações de lotes para fins de rastreabilidade de produtos. |
| `VEN-140GERID01` | — | Altera os identificadores com nome id do arquivo XML da NFS-e, para que sejam iniciados com o valor ID seguido pela numeração gerada atua... |
| `VEN-140GERPE01` | — | Gerar os registros de pendências quando o tipo de informação Nota Fiscal de Saída estiver ativo. |
| `VEN-140GERTRIB` | NF-e | Ao ativar este identificador de regras a rotina de emissão de NF-e vai considerar as tags "vTotTrib" no layout. |
| `VEN-140HABCP01` | F140PRE - Preparação de NFS | Este identificador de regras tem por objetivo definir a disponibilidade de alguns campos da tela de preparação de notas fiscais de saída ... |
| `VEN-140HEIMP01` | F149GNA e F149GNC. |  |
| `VEN-140HIPFA01` | — | Permitir, via regra, buscar automaticamente a forma de pagamento cadastrada na pré-fatura durante a emissão da nota fiscal, mesmo quando ... |
| `VEN-140HODP01` | F140GNF e web service Com.senior.g5.co.mcm.ven.notafiscal, porta GravarNotasFiscaisSaida_13 | Herda outros dados do pedido, responsável por herdar os valores de outras: dados de outras despesas, frete, encargos, seguro, outros, val... |
| `VEN-140IDEMAWP` | — | personalizar os e-mails que vão receber os documentos eletrônicos e os links de boletos, sendo que e-mails da transportadora recebem apen... |
| `VEN-140IDEPRWP` | — | permite personalizar o texto de cada parcela descrita no e-mail de envio de links de boleto ou QR Codes Pix. |
| `VEN-140IGVAL01` | F115CAR. | Força o recálculo dos valores no momento do fechamento da nota fiscal, mesmo que o cliente não possua Tabela de Preço de Frete cadastrada... |
| `VEN-140IMPBL01` | F140GNF | Consistir a obrigatoriedade da impressão de bloquetos no fechamento da nota fiscal via tela F140GNF. |
| `VEN-140IMPBL02` | F140GNF | Replicar o arquivo gerado após a impressão automática de boleto no fechamento da nota fiscal. Este identificador de regras somente será e... |
| `VEN-140IMPRE01` | — | Definir via regra se a Nota Fiscal deve ou não ser impressa. |
| `VEN-140IMPRE02` | F140CAN | Disponibilizar para um modelo de relatório ligado a tela F140CAN a abrangência dos números das notas fiscais emitidas por esta tela. Este... |
| `VEN-140IMPRT00` | Web service Com.senior.g5.co.int.eletronicos.documentos, porta ImportarRetornos. | O identificador será executado logo depois de carregar os valores da requisição de entrada e os valores do documento eletrônico na rotina... |
| `VEN-140IMPRT01` | Web service Com.senior.g5.co.int.eletronicos.documentos, porta ImportarRetornos. | O identificador será executado antes do processamento da rotina do web service Com.senior.g5.co.int.eletronicos.documentos, porta Importa... |
| `VEN-140IMPRT02` | Web service Com.senior.g5.co.int.eletronicos.documentos, porta ImportarRetornos. | O identificador será executado depois de processar / antes do commit da rotina do web service Com.senior.g5.co.int.eletronicos.documentos... |
| `VEN-140IMPRT03` | Web service Com.senior.g5.co.int.eletronicos.documentos, porta ImportarRetornos. | O identificador será executado depois do commit da rotina do web service Com.senior.g5.co.int.eletronicos.documentos, porta ImportarRetor... |
| `VEN-140IMPRT04` | Web service Com.senior.g5.co.int.eletronicos.documentos, porta ImportarRetornos. | O identificador será executado quando ocorrer algum erro na requisição da rotina do web service Com.senior.g5.co.int.eletronicos.document... |
| `VEN-140IMPRT11` | Web service Com.senior.g5.co.int.eletronicos.documentos, porta ImportarRetornos. | O identificador será executado antes de processar uma autorização de cancelamento na rotina do web service Com.senior.g5.co.int.eletronic... |
| `VEN-140INFFT01` | — |  |
| `VEN-140INFQT01` | F140CCB | Exibir o campo "Qtde" no cabeçalho da tela F140CCB. |
| `VEN-140IS01000` | Nota Fiscal de Serviço Eletrônica | Retornar dados referentes ao Cancelamento de NFS-e, do Serviço para o ERP através de uma regra associada. Utilizado na integração com NDD... |
| `VEN-140IS02000` | Nota Fiscal Eletrônica de Serviço | Retornar dados da nota fiscal para o ERP através de uma regra associada. |
| `VEN-140IS02100` | Nota Fiscal Eletrônica de Serviço | Retornar dados da identificação da nota fiscal para o ERP através de uma regra associada. |
| `VEN-140IS02200` | Nota Fiscal Eletrônica de Serviço | Retornar dados da RPS Substituto para o ERP através de uma regra associada. |
| `VEN-140IS02300` | Nota Fiscal Eletrônica de Serviço | Retornar dados do Serviço para o ERP através de uma regra associada. |
| `VEN-140IS02310` | Nota Fiscal Eletrônica de Serviço | Retornar dados dos Valores relacionados ao Serviço para o ERP através de uma regra associada. |
| `VEN-140IS02400` | Nota Fiscal Eletrônica de Serviço | Retornar dados do Prestador do Serviço para o ERP através de uma regra associada. |
| `VEN-140IS02500` | Nota Fiscal Eletrônica de Serviço | Retornar Informações do Tomador do Serviço para o ERP através de uma regra associada. |
| `VEN-140IS02510` | Nota Fiscal Eletrônica de Serviço | Retornar Identificação do Tomador do Serviço para o ERP através de uma regra associada. |
| `VEN-140IS02520` | Nota Fiscal Eletrônica de Serviço | Retornar dados do Endereço do Tomador para o ERP através de uma regra associada. |
| `VEN-140IS02530` | Nota Fiscal Eletrônica de Serviço | Retornar Informações de Contato do Tomador do Serviço para o ERP através de uma regra associada. |
| `VEN-140IS02600` | Nota Fiscal Eletrônica de Serviço | Retornar dados do Intermediário do Serviço para o ERP através de uma regra associada. |
| `VEN-140IS02700` | Nota Fiscal Eletrônica de Serviço | Retornar dados referente Construção Civil para o ERP através de uma regra associada. |
| `VEN-140IS09000` | Nota Fiscal de Serviço Eletrônica | Retornar dados referente a informações adicionais através de uma regra associada |
| `VEN-140IS09100` | Nota Fiscal de Serviço Eletrônico | Retornar dados referente ao Email no registro 9100 da NDDigital através de uma regra associada. Utilizado na integração com NDDigital. |
| `VEN-140ISRET01` | — | Calcular o valor de Imposto Sobre Serviços (ISS) retido, para composição da respectiva tag no arquivo XML da NF-e. |
| `VEN-140LEIBA01` | F140VCB | Devolver para o sistema 6 variáveis a serem consistidas como segue: |
| `VEN-140LEIBA02` | F140NFT | Devolver para o sistema 5 variáveis a serem consistidas como segue: |
| `VEN-140LGENT01` | F140PRE | Permitirá adicionar ao filtro padrão do ERP um aprimoramento na verificação da existência de uma nota de remessa vinculada a uma nota de ... |
| `VEN-140LIBCB01` | — | Liberar a geração das tags <cBarra> e <cBarraTrib> no XML de NFE, bem como a sua alteração via regra. Portanto, a geração das tags soment... |
| `VEN-140LIBTR01` | Faturamento Notas Fiscais Saída | Liberar uma transação aberta no banco de dados para reduzir o tempo de bloqueio (lock) das tabelas envolvidas no processo de faturamento. |
| `VEN-140LIGNE01` | F140PRE | Fazer ligação entre itens de notas fiscais de venda (tipo 5) com itens de notas fiscais de compra, atualizando quantidades, mesmo originá... |
| `VEN-140LIGPC01` | — | Quando esse Identificador está ativo, o sistema buscará diversos parâmetros fiscais da ligação entre Produto x Cliente. Quando houver, dá... |
| `VEN-140LOTHR01` | — | Quando estiver ativo, o sistema executa o faturamento de um pedido travando a tabela Cadastros - Representantes - Históricos (E090HRP) du... |
| `VEN-140LTRAS01` | — | gerar lista com informações de lotes para fins de rastreabilidade de produtos que não usam o controle de lotes do sistema. |
| `VEN-140MDFE001` | MDF-e. | Permite informar dados para tags opcionais do leiaute do arquivo eletrônico de MDF-e. Quando utilizado este identificador, deve-se enviar... |
| `VEN-140MDFE002` | MDF-e | Regra para auxiliar na geração do MDF-e. |
| `VEN-140MDFE003` | — | Regra para auxiliar na geração do MDF-e. |
| `VEN-140MDFE004` | F145CME, F145EBQ | Definir os dados da propriedade dos veículos de tração e reboque na geração do arquivo XML do MDF-e. |
| `VEN-140MDFE005` | F145EBQ, F145GSM e F440MDF. | Carregar os seguros de carga e suas averbações ao inserir um manifesto nas telas F145EBQ, F145GSM e F440MDF. |
| `VEN-140MDFE006` | F145EBQ, F145GSM e F440MDF. | Carrega os produtos perigosos ao inserir uma composição do manifesto nas telas F145EBQ, F145GSM e F440MDF. |
| `VEN-140MDFE007` | F145EBQ, F145GSM e F440MDF. | este identificador de regras será executado ao fechar o documento através das telas de emissão de MDF-e. Através dele, o cliente poderá a... |
| `VEN-140MDFE008` | F145CME. | permite informar o número de contrato do transportador com o contratante e o valor global do contrato para os contratantes do MDF-e. |
| `VEN-140MDFEA00` | F145EBQ, F145GSM e F440MDF. | MDF-e Automático - Documentos Fiscais para Emissão do MDF-e. Ver Geração automática de MDF-e. |
| `VEN-140MDFEA01` | F145EBQ, F145GSM e F440MDF. | MDF-e Automático - Dados Gerais. Ver Geração automática de MDF-e. |
| `VEN-140MDFEA02` | F145EBQ, F145GSM e F440MDF. | MDF-e Automático - Rotas. Ver Geração automática de MDF-e. |
| `VEN-140MDFEA03` | F145EBQ, F145GSM e F440MDF. | MDF-e Automático - Lacres. Ver Geração automática de MDF-e. |
| `VEN-140MDFEA04` | F145EBQ, F145GSM e F440MDF. | MDF-e Automático - Vale Pedágio. Ver Geração automática de MDF-e. |
| `VEN-140MDFEA05` | F145EBQ, F145GSM e F440MDF. | MDF-e Automático - Seguro de Carga. Ver Geração automática de MDF-e. |
| `VEN-140MDFEA06` | F145EBQ, F145GSM e F440MDF. | MDF-e Automático - Unidades de Transporte e Unidades de Carga. Ver Geração automática de MDF-e. |
| `VEN-140MDFEA07` | F145EBQ, F145GSM e F440MDF. | MDF-e Automático - Produto Perigoso. Ver Geração automática de MDF-e. |
| `VEN-140MDFEMAN` | F145CME, MDFE. | Permitir o retorno manual do Manifesto Eletrônico de Documentos Fiscais e seus respectivos eventos. |
| `VEN-140MGCLA01` | F140GNF | Suprimir a mensagem de inexistência de classificação fiscal do produto na digitação de notas fiscais. |
| `VEN-140MNTEM01` | F149GNC. | Manter os campos Qtde./Código Emb. e Peso Bruto/Líquido dos dados gerais da nota fiscal no fechamento pela tela F149GNC. |
| `VEN-140MNTEM02` | F149GNC. | Sugerir nos campos Peso Bruto/Líquido da tela F149DIV, os pesos da embalagem ou dados gerais da nota fiscal. Apenas irá atuar quando a no... |
| `VEN-140MNTEM03` | F140FGR. | Este Identificador de Regras possibilita retornar ao sistema se deve ou não ser gerado registros na tabela E140EPD quando um pedido em gr... |
| `VEN-140MNTTR01` | faturamento. | definir, no momento do cálculo do item das notas fiscais de saída, pré-faturas e cargas, se o ERP deve manter o percentual do pedido para... |
| `VEN-140MNTVL01` | Fechamento de notas fiscais de saída | Definir se um determinado imposto será sofrerá arredondamento quando o seu valor totalizado nos itens não conferir com o valor total dos ... |
| `VEN-140MSGDZ01` | — | Esse Identificador de Regras inativa a funcionalidade de sugerir as mensagens fiscais na nota fiscal de saída, cadastradas na ligação ent... |
| `VEN-140NAHCL01` | F140CAN | Quando ativo, tem como objetivo fazer com que o sistema deixa de atualizar o histórico do cliente no cancelamento de uma nota fiscal/cupo... |
| `VEN-140NAOPRE0` | é utilizado em todas as rotinas que permitem a geração de uma NF-e ou NFS-e. | indica ao sistema que, na emissão dos arquivos eletrônicos das notas fiscais de venda (NFE-e/NFS-e), ele não deve gerá-los no padrão .PRE... |
| `VEN-140NCQLT01` | F140PRE | Efetuar a distribuição de lotes dos itens dos pedidos, sem que o sistema exija que o somatório das quantidades dos lotes seja igual a qua... |
| `VEN-140NE00E03` | Nota Fiscal Eletrônica | Retornar os dados da identificação do destinatário da nota fiscal eletrônica para o ERP através de uma regra associada. |
| `VEN-140NEAGR02` | — | Nota Fiscal Eletrônica - Permitir o agrupamento de itens idênticos. O padrão da nota fiscal eletrônica é emitir o arquivo eletrônico idên... |
| `VEN-140NEAGR03` | — | Este identificador tem a finalidade de desconsiderar a derivação no agrupamento, ou seja, o usuário poderá informar 2 itens com um mesmo ... |
| `VEN-140NEAGR04` | Processo de geração e fechamento de notas fiscais do tipo 6. |  |
| `VEN-140NEARQBK` | Nota fiscal eletrônica | Nota Fiscal Eletrônica e Carta de Correção Eletrônica - Permite salvar backup do arquivo eletrônico gerado. |
| `VEN-140NEAUT01` | — | Retorna o Grupo Autorização para obter XML da NFE. É executado sempre que uma nota fiscal eletrônica é emitida ou cancelada. |
| `VEN-140NECAN01` | — | Nota Fiscal Eletrônica - Enviar para o arquivo eletrônico informações do registro de aquisição de Cana. |
| `VEN-140NECER01` | — | Com este identificador de regra ativo desliga a assinatura digital dos arquivos XML de NF-e, CT-e, MF-e NFS-e (ABRASF) e MD-e. |
| `VEN-140NECER02` | — | Solicitar o certificado digital a cada emissão de NF-e, e NFS-e (ABRASF) e CT-e |
| `VEN-140NEDGE01` | — | Permite a manipulação de dados gerais da Nota Fiscal Eletrônica e Carta de Correção Eletrônica. |
| `VEN-140NEDGE02` | — | Permitir alterar configurações relacionadas a nota fiscal eletrônica. |
| `VEN-140NEESP01` | — | Nota Fiscal Eletrônica e Nota Fiscal de Serviço Eletrônica (Abrasf) - Tem como finalidade remover a função CDATA no campo DescricaoServic... |
| `VEN-140NEESP02` | — | Remover a função CDATA do XML de NFe para determinadas situações. |
| `VEN-140NEGRE01` | — | utilizado para preencher os campos do grupo de exportação da NFe (**nDraw, nRE, chNFe, qExport e NatExp**). Para as tags **nRE, chNFe e q... |
| `VEN-140NEIFR01` | — | Enviar para nota eletrônica a retenção de icms no frete quando informado na nota. Ele é executado no fechamento da nota fiscal de saída. |
| `VEN-140NEIMPBO` | Nota Fiscal Eletrônica (qualquer tela que manipule status de notas) e Retorno de status de NF para o ERP. | permite criar regras após a autorização de uma nota fiscal eletrônica (NF-e e NFS-e) com base na chave primária da nota fiscal na tabela ... |
| `VEN-140NEINF01` | — | Nota Fiscal Eletrônica - Permite informar campos de uso livre do contribuinte. |
| `VEN-140NEINF02` | — | Possibilidade de utilizar filtros de impressão customizada, que são utilizados para que haja mais flexibilidade na impressão dos document... |
| `VEN-140NEINF03` | — | Possibilidade de utilizar filtros de impressão customizada, que são utilizados para que haja mais flexibilidade na impressão dos document... |
| `VEN-140NEITE01` | — | Nota Fiscal Eletrônica - Permite a manipulação de informações dos Itens da NF-e. |
| `VEN-140NELAC01` | — | Nota Fiscal Eletrônica - Permite informar lacres dos volumes ligados a nota fiscal |
| `VEN-140NEMED02` | — | Nota Fiscal Eletrônica - Permite alterar a tabela de preço e número do registro Anvisa de medicamentos. |
| `VEN-140NENDD01` | — | tem como finalidade adicionar sufixos padrões para usuários do sistema NDDigital ao nome do arquivo eletrônico gerado pelo ERP e disponib... |
| `VEN-140NEORD02` | — | Nota Fiscal Eletrônica - Permitir ao usuário alterar a ordem em que os itens são gerados no arquivo eletrônico. |
| `VEN-140NERAS01` | — |  |
| `VEN-140NFATVEV` | F140GNF. | Manipular campos do grupo atvEvento do arquivo XML da NFS-e Senior 2.0. |
| `VEN-140NFCOM01` | — | Permite gerar o grupo gProcRef na emissão do XML da NFCom. |
| `VEN-140NFPAR01` | F140GNF, F140CAN. | Permitir o envio de dados de faturamento (grupo Faturas) no XML da NFS-e em situações onde não há integração financeira configurada e exi... |
| `VEN-140NFSES20` | F070FVE. | Manipular dados antes da geração do XML da NFS-e com o leiaute Senior 2.0. |
| `VEN-140NFSOBRA` | F140GNF. | Manipular campos do grupo Obra do arquivo XML da NFS-e Senior 2.0. |
| `VEN-140NFSSE20` | — | Manipular Série Fiscal da Nota de Serviço para o modelo NFS-e Senior 2.0 e ABRASF. |
| `VEN-140NOMCL01` | F140CAN, F140GNF | F140GNF: disponibilizar na tela ao lado do campo "Cliente" a descrição do "Nome do Cliente" (E085CLI.NOMCLI). |
| `VEN-140NOSER01` | Notas Fiscais | Indicar ao sistema que a distribuição de séries não deve ser feita. Para que isto seja possível, além deste identificador estar ativo, é ... |
| `VEN-140NOTPF01` | F140LOT | Indicar que o recálculo do valor de frete não seja realizado. |
| `VEN-140NSDED01` | — | Alterar as informações relacionadas à operação de dedução para composição da respectiva tag no arquivo .XML da NFS-e. |
| `VEN-140NTNEXC1` | Processo Automático 126 - Faturamento de Pedidos; | Esse Identificador de Regras possui a chave da nota fiscal de saída e é executado apenas quando o Processo Automático 126 - Faturamento d... |
| `VEN-140NUMNF01` | F140PRE | Quando ativo tem funcionalidade de otimizar a consistência do campo Nº Nota Fiscal na geração de notas fiscais na tela F140PRE. |
| `VEN-140NZDIF01` | F140GNF | Não zerar o percentual de diferimento dos itens quando o percentual de diferimento for maior que zero e a CST diferente de "051", no fech... |
| `VEN-140OBSAL01` | F140CAN | Concatenar uma observação via regra na observação padrão de cancelamento ou de reabilitação. |
| `VEN-140OBSCP01` | 140PRE | Copiar de outras notas fiscais a observação existente na nota fiscal e as observações da nota que foram informadas no cadastro de observa... |
| `VEN-140OBTCR01` | Notas Fiscais | Retorne observações para os títulos gerados através das parcelas das notas fiscais de saída. |
| `VEN-140OMFAP01` | F140LOT | Indicar que o campo "Observação Motivo" deverá ser apresentado na grade e através da associação de uma regra ao identificador, retornar p... |
| `VEN-140ORCOM01` | — | Permite definir se a tag de origem do combustível deve ou não ser gerada. A chamada do identificador acontecerá para cada item de produto... |
| `VEN-140ORDEM01` | — | Classificar por ordem de produto/serviço e sequência de item de pedido os produtos e serviços provenientes de um pedido na geração de uma... |
| `VEN-140PARMA01` | — | permite a alteração da data fixa informada no vencimento das parcelas na condição de pagamento durante a geração de uma nota fiscal. |
| `VEN-140PARMA01` | — | manipular as parcelas da nota no momento do fechamento, em forma de lista. |
| `VEN-140PAUFD01` | F145EBQ | O identificador de regras adicionará a UF de passagem informada no embarque na tag <infPercurso> quando essa UF for a mesma da UF de dest... |
| `VEN-140PCATI01` | F140CAN. | Permite cancelar uma nota fiscal mesmo com título contabilizado |
| `VEN-140PERTO01` | F140PRE, F135APM, F135CCA, F135CMC, F135FCA, F135FCP, F135FCS, F135MCA, F135MPF, F140NFR e F140GNF. | Retornar um percentual diferente de tolerância à quantidade faturada, para permitir valores acima ou abaixo do configurado no cadastro de... |
| `VEN-140POPCT01` | F140GNF. | preencher os campos da grade "Composição Conhecimento". Os campos "codemp, codfil, codsnf, numnfv e seqcct" pertencentes à chave primária... |
| `VEN-140PRECO01` | — | Alterar o preço unitário e o percentual ou valor de desconto do item do pedido que é gravado na nota fiscal, quando este é transferido pa... |
| `VEN-140PRECO02` | — | Alterar o preço unitário e o percentual de desconto do item do pedido de serviço que é gravado na nota fiscal, quando este é transferido ... |
| `VEN-140QMCIN01` | F140FGR. | Realizar atualização das embalagens provenientes do pedido em grupo, de acordo com o valor da variável retornada pelo identificador de re... |
| `VEN-140QTDMA01` | F140VCB | Definir a quantidade máxima de produtos que podem ser informados na tela 140VCB. |
| `VEN-140QTFAT01` | F140PRE, F140NFR, F140LOT e F161FCV. | enviar uma sugestão de **Quantidade a Faturar** na geração de Notas Fiscais de Saída. São disponibilizadas variáveis com os dados gerais ... |
| `VEN-140QTLOT01` | — | Na digitação de uma nota fiscal manual na tela de entrada de notas fiscais de saída, quando for infomado o lote do produto será sugerida ... |
| `VEN-140QTLOT02` | — | Sugerir a quantidade disponível para um determinado lote quando este for informado na tela de distribuição de lotes. O sistema irá sugeri... |
| `VEN-140RATIT01` | — | Quando existir o identificador será sempre feito o rateio de uma nota fiscal por item tentando buscar o rateio pré-definido do tipo "C" (... |
| `VEN-140RATIT02` | — | Gerar rateios por item, obedecendo a regra geral para rateios. |
| `VEN-140REABI01` | — | Personalizar a forma de verificação se o usuário pode reabilitar NF emitida. |
| `VEN-140REABI02` | — | Reabilitar notas canceladas. |
| `VEN-140REABI03` | F140CAN | Passar para a regra o código do cliente e a chave da nota fiscal que estiver sendo reabilitada ou cancelada. |
| `VEN-140REMVA01` | F141CLG | Efetuar a antiga forma de carregamento das notas fiscais de compra e nota fiscal de frete ao abrir a tela Consulta de Notas Fiscais de En... |
| `VEN-140RPDSI01` | — | Esse identificador de regras ajustará a situação do item do pedido, assim como sua quantidade de reserva e reserva exclusiva, no cancelam... |
| `VEN-140RTCOM01` | Retorno de componentes de serviço produzido | Permitir que o usuário selecione as notas fiscais de compra que tenham os componentes a serem retornados. Na regra, após selecionar as no... |
| `VEN-140SACTI01` | — | Obter o código do sacado informado no pedido para os títulos gerados pelo faturamento deste pedido. E necessário existir um campo de usuá... |
| `VEN-140SBNFV01` | — | Questionar o usuário após o fechamento da nota se ele deseja chamar a tela de baixa por substituição - F301SUB, e mostrar os títulos que ... |
| `VEN-140SGRED01` | Faturamento | O objetivo desde identificador de regras é sugerir o código de redução de ICMS e/ou o ICMS Especial do item de produto ou serviço que est... |
| `VEN-140SGRED02` | Geração de pedidos (F120GPC e F120GPD). | O objetivo deste identificador de regras é permitir a sugestão dos seguintes códigos para pedidos: |
| `VEN-140SQUCP01` | — | Sugere a quantidade utilizada do componente na O.P. no campo Quantidade da grade Componentes Utilizados na Formação do Produto, senão cal... |
| `VEN-140SUGMS01` | Notas fiscais de saída | Esse identificador de regra tem como objetivo definir as mensagens para nota fiscal, tanto para os dados gerais como para os itens. |
| `VEN-140SUGMS02` | — | Esse identificador de regra tem como objetivo gerar novas mensagens, além das mensagens padrões da nota fiscal, tanto para dados gerais c... |
| `VEN-140TAGTRA1` | — | O identificador de regras VEN-140TAGTRA1 disponibiliza: |
| `VEN-140TIPNF01` | F135GNA | Alterar o tipo da nota fiscal de saída. |
| `VEN-140TITCO01` | Notas Fiscais de Saída. | definir se os valores de ICMS, IPI, ICMS Subst., Frete, Seguro, Outros ou Arredondamento da primeira parcela de um título gerado no Conta... |
| `VEN-140TITFR01` | — | Alterar a data de vencimento dos titulos de frete. |
| `VEN-140TNSCP01` | Notas Fiscais - Ret. Comp. Rec. p/ Ind. | Sugerir as transações do cabeçalho e dos itens das notas fiscais de retorno de componentes recebidos para industrialização geradas automa... |
| `VEN-140TNSDF01` | Notas Fiscais de Saída. | Permite que o sistema não valide a natureza de operação da transação da nota fiscal, na realização do cálculo do DIFAL. |
| `VEN-140TOTPC01` | — | Conferência e manipulação dos totalizadores de PIS e COFINS. |
| `VEN-140TPCIMP1` | F140GNF. | O identificador de regras VEN-140TPCIMP1 define para o sistema qual o método de ajuste deve ser aplicado aos valores dos impostos durante... |
| `VEN-140TPFRE01` | Notas Fiscais de Saída | Manter o tipo de frete informado no pedido, mesmo quando a transportadora tem tipo de frete padrão diferente do informado. |
| `VEN-140VALIN01` | — | Quando habilitada a regra, permite que o vínculo de uma nota fiscal substituta seja realizado, mesmo que a nota fiscal substituída já ten... |
| `VEN-140VALVD01` | — | Tem a finalidade de indicar se deve ser feita a validação do valor de outros do item da nota. |
| `VEN-140VLOUD01` | Notas fiscais de saída | Permitir que seja retornado o valor outras despesas destacado para o item de produto e serviço da nota fiscal de saída e item de produto ... |
| `VEN-140VLRAL01` | Cálculo de tributos da NFe e NFs-e | Permite a manipulação do valor base que será considerado no cálculo do valor aproximado da tributação do item da nota fiscal. |
| `VEN-140VLRMO01` | Fechamento de Notas Fiscais de Saída | Permite alterar o valor de movimento de estoque. |
| `VEN-140VSFAP01` | F140LOT | Mostrar os campos "Percentual", "Valor de Descontos" e "Valor Arredondamento" na grade de pedidos. |
| `VEN-140VSFAP02` | F140LOT | Indicar para o ERP como o sistema deverá considerar a soma da quantidade máxima de itens das notas para a quebra de notas fiscais. O sist... |
| `VEN-140WSNFPD1` | — |  |
| `VEN-140ZEAIC01` | U000CIM | Zerar a alíquota do ICMS em situações onde a base e o valor do imposto estiverem zeradas, como no caso de se ter uma tabela de redução de... |
| `VEN-140ZERVL01` | NOTAS FISCAIS DE SAÍDA | Informado, via regra, qual dos impostos de retenção devem sofrer zeramento. Surgiu para atender a necessidade de controle de base mínima ... |
| `VEN-141ULTFA01` | F141CUF | Disponibilizar campos do cabeçalho e algumas funcionalidades da tela F141CUF (tela aberta pelos itens de menu do botão "Últimos Faturamet... |
| `VEN-143CHDEV01` | F143ASC. | Atualizar o campo Quantidade Cheques s/ Fundo das definições do cliente. |
| `VEN-143CHEMO01` | F143AFI | Definir se os cheques serão informados na guia de Duplicatas ou na Guia de Cheques no acerto financeiro. |
| `VEN-143COANT01` | — | Consistir se existe algum acerto anterior ao informado que ainda não foi fechado. |
| `VEN-143COVAL01` | F143AFI | Não efetuar consistências de valores no Processar da tela de Romaneio de Acerto. |
| `VEN-143EXMOV01` | F143AFI | Permitir a exclusão do movimento dos títulos já processados na tela de romaneio de acerto. |
| `VEN-143FECRO01` | F143AFI | Não fazer as consistências dos títulos baixados no romaneio, podendo o romaneio ser processado/fechado. Os títulos poderão ser baixados p... |
| `VEN-143GERTI01` | F143AFI | Gerar um novo título no Acerto Financeiro do Distribuidor, quando o título original for pago com um cheque pré datado. |
| `VEN-143GERTI02` | F143AFI | Permitir gerar um outro título na tela de Acerto Financeiro, quando o título original for pago com um cheque. Se o identificador existir ... |
| `VEN-143LEITO01` | F143AFI | Desmembrar o código de barras lido na tela de Acerto Financeiro, com as informações do cheque, de uma forma diferente da forma padrão do ... |
| `VEN-143MOTOC01` | F143ACQ | O grande objetivo deste identificador é informar ao sistema o que deve ser feito com a respectiva nota fiscal que retornou da entrega do ... |
| `VEN-143SUTIT01` | F143ACQ | Sugerir os 5 campos principais para a geração de um Título a Pagar, sendo eles: Tipo do Título (VSCODTPT), Transação do Título (VSTnsTit)... |
| `VEN-143TNSEN01` | F143ACQ | Sugerir uma transação para a entrada de estoque. |
| `VEN-143TNSVA01` | F143ACQ | Alterar a transação de pedido quando o mesmo retornou pela tela de acerto. |
| `VEN-144MINUT01` | F144MIN | Executar um comando SQL que foi montado na regra. |
| `VEN-145CONEB01` | F145EBQ | Consistir o processamento dos controles de embarque. Este processamento contempla a inclusão, alteração ou exclusão das notas fiscais do ... |
| `VEN-145FAEKM01` | F145FAE | Alterar o valor do campo "KM a considerar" da grade "Apuração". |
| `VEN-145MODRL01` | F145EBQ | Alterar o modelo de relatório utilizado no identificador de modelo da tela de controle de embarque de acordo com a transportadora. |
| `VEN-145NFTRA01` | F145EBQ | Evita que o sistema carregue na tela de pesquisa apenas notas fiscais do controle de embarque que tenham a mesma transportadora do própri... |
| `VEN-145RESBA01` | F145CME. | Tem como objetivo carregar os manifestos sem gerar erro para resoluções menores, como por exemplo, em notebooks |
| `VEN-146NNUCP01` | F140CAN ou F302CRB -> F146Nnu e F305EBD (Emissão de bloquetos) | Permite que os campos da tela Impressão de Bloquetos (F146NNU) fiquem ou não editáveis. Esses campos possuem variáveis disponíveis na reg... |
| `VEN-149FLGNA01` | Faturamento Agrupado de Cargas (F149GNA) | Otimizar a busca das Análises e Pré-Faturas através da tela Faturamento Agrupado de Cargas (F149GNA), utilizando Join. |
| `VEN-150CLGRE01` | F150GNF | Definir o cliente da fatura quando for utilizado o agrupamento por grupo de empresas. |
| `VEN-160ALREA01` | F160NOV | Permitir que a data do último reajuste do item do contrato de venda (produtos e serviços) possa ser alterada para uma data menor que a da... |
| `VEN-160ALREA02` | F160NOV | Permitir alteração dos valores do contrato quando existir algum reajuste. |
| `VEN-160ALTPC01` | F160NOV | permite otimizar a rotina de atualização do Código Produto no Cliente, buscando o código antigo da base de dados sempre antes de atualiza... |
| `VEN-160ATUVL01` | F160NOV | Este identificador tem por finalidade permitir que os valores de Preço / Desconto / Comissão dos itens de produtos ou serviços do contrat... |
| `VEN-160CAMPO02` | — | Esse identificador de regra tem o propósito de possibilitar o retorno do preço fatura e/ou preço padrão alterado via regra e será executa... |
| `VEN-160CAOPC01` | F161GPD | Permitir definir um valor padrão para os campos "Busca e Recalcula Valores", "Máx. de Itens na Nota", "Modalidade", "Ordenação", "Fechar ... |
| `VEN-160CLIAL01` | F160NOV | Determina se pode ou não alterar o cliente do contrato quando já tiver um pedido gerado para o contrato. |
| `VEN-160CLIPE01` | F161GPC | Tem como objetivo permitir definir se o cliente a ser usado para geração do pedido via contrato deve ser o cliente do contrato ou o clien... |
| `VEN-160CLTIT01` | F160NOV | Definir que o cliente dos títulos gerados será o cliente do contrato nos contratos financeiros da tela de contratos de venda. Se inativo,... |
| `VEN-160CONCT01` | F160NOV. | é acionado após a gravação do contrato de venda, porém antes da gravação no banco de dados, podendo impedir que o contrato seja gravado, ... |
| `VEN-160CONCT02` | — | O objetivo deste identificador é permitir que após a gravação dos dados do contrato de venda, seja possível alterar os campos da tabela E... |
| `VEN-160DESPR01` | F160NOV | Alterar o campo Complemento dos Itens de Produto que está sendo incluído em um Contrato de Vendas. Chamado na saída do campo Código da De... |
| `VEN-160DSCIT01` | F161GPD | Montar via regra a descrição do item de serviço e/ou produto para a nota fiscal. |
| `VEN-160EXCTR01` | F160NOV | Realizar consistências ao excluir ou inativar o contrato. |
| `VEN-160INCVP01` | F160NOV. | Esse identificador de regra é executado antes de o commit ser realizado no banco de dados, permitindo que sejam feitas consistências com ... |
| `VEN-160INCVS01` | F160NOV | Esse identificador de regra é executado antes de dar o commit no banco de dados, dessa forma pode ser feita consistências com os valores ... |
| `VEN-160OBCTR01` | — | Alterar o valor do campo Objeto que é sugerido dos Contratos de Venda para a observação da nota fiscal quando da sua geração via Contrato... |
| `VEN-160OMTPR01` | F160NOV | Não buscar a tabela de preço padrão do histórico/definição do cliente de faturamento do contrato de venda, tanto para os dados gerais do ... |
| `VEN-160PRECO01` | Atua no web service com.senior.g5.co.mcm.ven.contratovenda. | Este identificador foi criado com o intuito de manipular o preço padrão e o preço Unitário do item de serviço do contrato. |
| `VEN-160PROAS01` | F160NOV | Informar o produto e derivação associados ao serviço via campos de usuário ao incluir um item na grade de serviços da tela F160NOV. Serão... |
| `VEN-160PRORA01` | — | Alterar a forma de cálculo e faturamento dos contratos com critério de faturamento por validade que utilizam o cálculo pró-rata. A forma ... |
| `VEN-160REAIT01` | F160NOV | Quando este identificador estiver ativo, ao excluir um reajuste na tela F160NOV, o sistema irá atualizar os itens atribuindo novamente a ... |
| `VEN-160REGRA01` | F160NOV | Este identificador de regras tem por objetivo disponibilizar todos os campos das tabelas E160CVS, E160CVP ou E160LPS. |
| `VEN-160SERCP01` | — | Alterar o campo Complemento dos Itens de Serviço que estão sendo incluídos em um determinado Contrato de Vendas. Chamado na saída do camp... |
| `VEN-160SITCT01` | F160NOV | Realizar consistências ao alterar a situação do contrato de venda ou a situação de seus itens de serviços e produtos. |
| `VEN-160SUCTA01` | F160NOV | Indicativo se ao gerar um contrato financeiro (tipo 3), se não for informada uma conta contábil na página "Financeiro", deverá sugerir a ... |
| `VEN-160TITSU01` | — | No momento da geração das Notas Fiscais de Saídas via Contratos Comerciais, o sistema irá procurar por todos os títulos vencidos do clien... |
| `VEN-160ULREA01` | F160NOV | Disponibilizar (tornar visível) o campo "Último Reajuste" no cadastro de contrato de vendas. |
| `VEN-160USUCT01` | F160NOV | Quando ativo tem a funcionalidade de realizar o tratamento multiusuário na tela F160NOV. |
| `VEN-160VALCP01` | é utilizado na tela Contratos de Venda (F160NOV) e web service Com.senior.g5.co.mcm.ven.contratovenda. | Validar e aplicar regras ao contrato de venda antes da gravação no banco de dados, permitindo bloquear a gravação, caso necessário. A reg... |
| `VEN-160VALCS01` | é utilizado na tela Contratos de Venda (F160NOV) e web service Com.senior.g5.co.mcm.ven.contratovenda. | Validar e aplicar regras ao contrato de venda antes da gravação no banco de dados, permitindo bloquear a gravação, caso necessário. A reg... |
| `VEN-160VALCT01` | é utilizado na tela Contratos de Venda (F160NOV) e web service Com.senior.g5.co.mcm.ven.contratovenda. | Validar e aplicar regras ao contrato de venda antes da gravação no banco de dados, permitindo bloquear a gravação, caso necessário. A reg... |
| `VEN-160ZERCO01` | — | Não fazer o pagamento de comissão ao representante superior do representante de um determinado contrato de venda, quando for faturada alg... |
| `VEN-161ALDSC01` | F161GPD | Alterar o percentual ou o valor de desconto das grids de produtos e serviços da tela F161GPD. Somente serão liberados os campos para alte... |
| `VEN-161NEWVAL` | F161GPD. | Esse identificador indica ao sistema se a existência de registros nas grades da tela deve ser validada de uma nova forma, desenvolvida es... |
| `VEN-161PRECO01` | F161FCV e F161GPD. | alterar o preço unitário e o percentual de desconto do item do contrato (serviço/produtos) gravado na nota fiscal. |
| `VEN-161SEALE01` | F161FCV - Faturamento de Contratos Variáveis. | Executa o controle multiusuário de forma diferenciada ao processar contratos na tela F161FCV. Esse identificador pode ser necessário quan... |
| `VEN-162TIPCT01` | F162CTR | Definir o tipo padrão que deverá ser exibido ao carregar a tela de consulta de contratos - F162CTR. |
| `VEN-171APROV01` | F171COT | Aprovar mais de uma cotação de transporte. |
| `VEN-171VLFRE01` | F171COT | Não permitir que uma cotação tem o valor de frete zerado. |
| `VEN-504APCPG01` | F504APC | Definir o valor de comissão das grades Produtos, Serviços e Ocorrências Ass. Téc. |
| `VEN-999TNSDE01` | F999PAN. | Alterar a transação de faturamento sugerida na geração de uma nota fiscal de saída oriunda de uma Pendência Automática (tela F999PAN). |

_Total: 3157 identificadores de regras._
