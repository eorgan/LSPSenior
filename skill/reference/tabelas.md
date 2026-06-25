# Índice de Tabelas do Dicionário de Dados Senior (R996TBL)

> Índice navegável de 3120 tabelas nativas do ERP Senior.
> Gerado a partir de R996TBL.csv exportado da base Oracle.
> Para ver os campos de uma tabela:
>   `python3 scripts/buscar_tabela.py <TABELA> --campos`
> Para buscar tabelas por descrição:
>   `python3 scripts/buscar_tabela.py <termo>`

## (sem módulo)

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000ALE` | Alíquota de partilha de ICMS para venda não presencial entre estados | SeqInt |
| `E000BAL` | Cadastro de Definições de Leitura da Balança | CodEmp;CodUsu |
| `E000EEP` | Parâmetros de execução de processos para fechamento da Controladoria | IdeUni |
| `E000EPS` | Estados de passagem do percurso do MDF-e | IdePer;SeqEps |
| `E000HEP` | Histórico de Execução de Processo | IdeUni |
| `E000IPA` | Insight de Processos Automáticos | CodIsg |
| `E000ITM` | Intermediadores da Transação (NF-e/NFC-e) | CodEmp;CodItm |
| `E000MIN` | Monitoramento de Insights de Processos Automáticos. | IdeUni |
| `E000PER` | Percursos do MDF-e | IdeUni |
| `E000PLE` | Plano de execução dos webservices | IdeUni |
| `E000PPA` | Parâmetros de Insights de Processos Automáticos | CodEmp;RotSap |
| `E019ALE` | Alíquota de partilha de ICMS para venda não presencial entre estados | CodAle |
| `E022IOP` | Cadastro do Código indicador da operação de fornecimento para NFS-e | CODIOP |
| `E027EQI` | Enquadramento do IPI | CodEnq |
| `E027LSF` | Ligação entre situação/classificação tributária do CBS/IBS e NCM | IdeUni |
| `E027NOP` | Ligação entre NBS/IndOp para NFS-e | IdeUni |
| `E027SCR` | Cadastro da situação e classificação tributária do CBS/IBS (cClassTrib) | IdeUni |
| `E044ACC` | Agrupamentos de Centros de Custo | CodEmp;CodAcc |
| `E049SQL` | Configurador de SQL | CodEmp;CodSql;SeqSql |
| `E050ICB` | Composição para estorno dos créditos ICMS Monofásico | IdeUni |
| `E051CBS` | Cadastro de alíquotas do CBS | IdeUni |
| `E051DCG` | Cadastro da Distribuição de Compra Governamental | DatBas |
| `E051FCI` | Cadastro de Aplicação da CBS/IBS | CodFin |
| `E051HAC` | Histórico de alterações dos cadastros da Reforma Tributária | IdeUni |
| `E051IBM` | Cadastro de alíquotas do IBS do Município | IdeUni |
| `E051IBU` | Cadastro de alíquotas do IBS da UF | IdeUni |
| `E051PCI` | Cadastro do Crédito Presumido da CBS/IBS | CodPci |
| `E051RCG` | Cadastro do Redutor de Compra Governamental | DatBas |
| `E055DDE` | Combinações dos Detalhamentos das Receitas/Deduções e Exclusões PIS/COFINS | IdeUni |
| `E055ILC` | Cadastros > Tributos > Lista de código LLC 116/03 para apuração do ISS | IdeUni |
| `E055RDE` | Detalhamento das Receitas/Deduções e Exclusões PIS/COFINS | CodEmp;CodFil;CodDet;DatCpt;SeqCon |
| `E063BAO` | Cadastro de Vínculo de Balança X Operação X Câmera X Finalidade. | CodEmp;CodFil;CodBal;SeqBao |
| `E075PAT` | Cadastro de Princípio Ativo | CodEmp;CodPat |
| `E075PXU` | [DEPRECADA] | CodEmp;CodPro;CodDer;UniMed |
| `E099PXU` | Usuários da rotina de parametrização genérica | IdeUni |
| `E099ROT` | Parâmetros para rotinas genéricas | IdeUni |
| `E111REC` | Recebimentos Varejo | CodEmp;CodFil;SeqRec |
| `E113RPF` | Ligação Responsável Técnico X Filial | CodEmp;CodFil;CodAgr |
| `E114CCS` | Cadastro de Categoria de Sementes | CodEmp;CodCcs |
| `E115EXB` | Registros já integrados que estavam na tabela E115EXT são movidos para essa | IdeUni |
| `E115LEI` | Logs de integração de Controles de entrada/Saida | IdeUni |
| `E115TAX` | Taxas na devolução | CodEmp;CodFil;DatEnt;SeqEnt;SeqPro;CodItx;TipPtx;DatIni;DatFim |
| `E120LOP` | Log de Operações em Pedidos | IdeUni |
| `E135LOP` | Log de Operações em Analises | IdeUni |
| `E140LOP` | Log de Operações em Notas de Saída | IdeUni |
| `E190IPE` | Itens de pedido para geração do Registros do PAF-ECF (Varejo Terceiros) | CodEmp;CodFil;NumPed;SeqIpe |
| `E210CEV` | Controle de Estoque do Varejo | CodEmp;CodFil;DatPrc |
| `E210CTR` | Controle de Processo Sapiens Varejo | CodEmp;CodFil |
| `E250VCT` | Cadastro de Valores de Cota Capital | IdeUni |
| `E410FXC` | Faixas de Cotações por Valor | CodEmp;SeqFxc |
| `E439IPO` | Itens de Produto da Fixação | CodEmp;CodFil;NumFix;SeqIpo |
| `E501INT` | Detalhes integração títulos a pagar | CodEmp;CodFil;NumTit;CodTpt;CodFor;CodInt;FilInt |
| `E603IMC` | Composição Societária dos Imóveis Rurais | IdeUni |
| `E603IMR` | Cadastro de Imóveis Rurais | IdeUni |
| `E603IMV` | Vigência da Composição Societária dos Imóveis Rurais | IdeUni |
| `E603LOG` | Log do LCDPR | CodEmp;TipLog;SeqLog |
| `E625EQC` | Equivalências de Centros de Custo | NumMtc;CodAcc;CodCcu |
| `E632CNG` | Custo do produto por natureza de gasto | NumMtc;CodPro;CodDer;CodNtg |
| `E636CMM` | Consumo e custo de materiais manutenção | NumMtc;CodEmp;CodEqp;NumMnt;CodCcu;CodPro;CodDer |
| `E636CTM` | Consumo de tempo manutenção | NumMtc;CodEmp;CodEqp;NumMnt;CodCcu |
| `E660DPP` | Parametrização das dependências dos processos de fechamento fiscal/contábil | IdeUni |
| `E660IBI` | Integração dos Detalhamentos das Receitas/Deduções e Exclusões de PIS/COFINS | IdeUni |
| `E660ICC` | Itens de cupons fiscais cancelados | CodEmp;CodFil;CodEqu;CroEcf;NumCfi;SeqIte |
| `E660PFC` | Parâmetros de execução de processos para fechamento da Controladoria | IdeUni |
| `E660PPF` | Parametrização dos processos de fechamento fiscal/contábil | IdeUni |
| `E660RDE` | Dispositivos fiscais dos itens das notas fiscais de entrada | IdeDie;SeqDie |
| `E660RDS` | Dispositivos fiscais dos itens das notas fiscais de saída | IdeDis;SeqDis |
| `E661DGR` | Documentos fiscais associados as guias de recolhimento para o EFD ICMS IPI | IdeUni |
| `E661EAB` | Créditos de PIS/COFINS Relativos a Abertura de Estoque | CodEmp;CodFil;CmpRef;CmpCre;CstCre |
| `E661ONF` | Origens apuração do FUST e FUNTTEL | CodEmp;CodFil;CodImp;DatApi;FilMov;AliImp |
| `E661PID` | Nota Fiscal Saída Parcela ICMS Importação | CodEmp;CodFil;CodImp;DatApi;CptLct;CodCli;NumNfi;CodSnf |
| `E661PII` | Nota Fiscal Entrada Parcela ICMS Importação | CodEmp;CodFil;DatApi;CodImp;CptLct;CodFor;NumNfi;CodSnf |
| `E661SCR` | Sequenciamento de utilização das Créditos | IdeUcr;SeqMov |
| `E661SRE` | Sequenciamento de utilização das Retenções | IdeUcr;SeqMov |
| `E661UCR` | Método de utilização Retenções/Créditos PIS/COFINS | IdeUcr |
| `E900APT` | Apontamentos originados da plataforma Senior X | IdeUni |
| `E900ETQ` | Etiquetas originadas da plataforma Senior X | IdeUni |
| `E900LRR` | Leitura de OP's para Remessa e Retorno de Serviço de Terceiros | CodEmp;CodOri;NumOrp;CodEtg;SeqRot;RemSer |
| `E930MPO` | Parada de Recurso para o Painel OEE | IdeUni |
| `E930MPR` | Parada de Recurso | CodEmp;CodFil;CodEtg;CodCre;IdeBem;DatMpr;CodMtv;SeqMpr |
| `E996PIP` | Pendências de integração via processo automático | IdeUni |
| `E996RPP` | Retorno das pendências de integração via processo automático | IdeUni |
| `E999EOT` | Evento de origem das tarefas de usuários para envio ao Workflow 2.0 | IdeUni |
| `E999FER` | Fila de eventos ocorridos em rotinas para processamento e envio ao Workflow 2.0 | IdeUni |
| `E999HCP` | Histórico dos envios/retornos das tarefas Workflow 2.0 | IdeUni |
| `E999HEO` | Histórico do evento de origem das tarefas de usuários enviadas ao Workflow 2.0 | IdeUni |
| `E999IPF` | Imagens para Homepage-XT de Filial | IdeUni |
| `E999MSH` | Mensagens de Sistema Homepage-XT | IdeUni |
| `E999PPW` | Processos personalizados para integração com o Workflow 2.0 | IdeUni |
| `E999ROW` | Registros de ocorrências dos processos de envio ao Workflow 2.0 |  |
| `E999TES` | Tarefas de usuários para envio ao Workflow 2.0 | IdeUni |
| `FIN_INTEGRACAO_PENDENC` | Tabela primitivas oriundas da G7 que não foram importadas com êxito | id |
| `MGOE_APONTAMENTO_PARADA` | Tabela de Consolidação dos Apontamentos de Paradas OEE | id |
| `MGOE_CALEND_FABRIL` | Tabela de Calendário Fabril OEE | id |
| `MGOE_CENTRO_RECURSO` | Tabela de Centro de Recursos OEE | id |
| `MGOE_CENTRO_RECURSO_HIST` | Tabela de Histórico de Centro de Recurso OEE | id |
| `MGOE_DISPOSITIVO` | Tabela de Dispositivos de Visualização OEE | id |
| `MGOE_DISP_CENTRO_RECURSO` | Tabela de Centro de Recurso por Dispositivos de Visualização OEE | id |
| `MGOE_INDICADOR` | Tabela de Cálculo de Indicadores OEE | id |
| `MGOE_MOVIMENTO_OP` | Tabela de Consolidação dos Apontamentos de Produção OEE | id |
| `MGOE_NOTIFICACAO` | Tabela de Notificações de Apontamentos de Produção OEE | id |
| `MGOE_PARAMETRO_INDICE` | Tabela de Parâmetros de Indicadores OEE | id |
| `MGOE_PENDENCIA_CALCULO` | Tabela de Datas Pendentes de Cálculo de Indicadores OEE | id |
| `MGOE_RECURSO_HIST` | Tabela de Histórico de Recursos OEE | id |
| `R900ACP` | Usuários Informações complementares |  |
| `R900ALK` | Modo de acesso dos aplicativos (tipo de login utilizado) |  |
| `R900APD` | Cadastro Usuários People Data | PERID;DATSEQ;SEQREG;VERSEQ |
| `R900CMC` | Registro de comandos SQL em ambientes Cloud |  |
| `R900DBA` | Eventos a serem monitorados pelo CBDS | NumEve;DATSEQ |
| `R900DBR` | Direitos do CBDS | NumRig;DATSEQ |
| `R900DFA` | Padrão de permissão de acesso para novos menus | CODDFA |
| `R900DUS` | Dados de uso do sistema (deprecada) |  |
| `R900GLP` | Informação sobre geração de log de alterações de permissões |  |
| `R900IG6` | Tabelas para integração com G6 | TblNam |
| `R900IMB` | Define as tabelas que serão monitoradas pelas aplicativos do Mobilidade | TblNam;AplMob |
| `R900IMC` | Descreve as alterações realizadas nos registros das tabelas monitoradas. | SeqTran;SeqOp |
| `R900LDC` | Configuração de LDAP |  |
| `R900NDS` | Dados de uso do sistema (sequência) | USRNAM;SYSMOD;ACTDATE |
| `R900NTF` | Notificações | Ntf_ID |
| `R900NXV` | Controle da rotina que retorna próximo valor de campo chave | CODPKY |
| `R900PCT` | Permissões de Configuração de Tela | CodPer;NomEle;DATSEQ |
| `R900RPP` | Regras por evento | NomFor;ModID;EveID |
| `R900TSV` | Valores de direito de Acesso a tabelas e campos | TBLNAM;DATSEQ |
| `R900WSC` | Configurações de Webservice | ENABLE |
| `R900WSL` | Lista de Webservices | WSId |
| `R902CMD` | Comandos customizados para extração de dados do sistema | CMDID |
| `R902EAT` | Atributos de ambiente | ATRKEY |
| `R902EUS` | Estatísticas de uso do sistema | ACTDAT;SYSMOD;ACTTYP;OBJNAM;ACTCTX |
| `R902VCS` | Validação de conexão com os servidores da Senior | ENDORI |
| `R903AGR` | Grupos de acesso dos usuários | GRPID;MEMID |
| `R904LMC` | Restrições aplicadadas no sistema | ID |
| `R904LMP` | Mapeamento de restrições de sistema | IDTRES;IDTLMT |
| `R904LUC` | Restrições de sistema | IDNUMR |
| `R904URS` | Uso de sistema | IDNUMR;DATREF |
| `R904VCS` | Validação de conexão com os servidores da Senior | ENDORI |
| `R910AUS` | Cadastro Usuários | CodEnt;SEQREG;VERSEQ |
| `R910CMP` | Tabelas (só para consultas) | NomTbl;NomCmp |
| `R910COB` | Objetos com configuração (só para consultas) | ObjId |
| `R910DAM` | Descrição de permissões de aplicação e módulos | RigId |
| `R910DCB` | Descrição Permissões CBDS | CodPer |
| `R910ENT` | Entidades de segurança (só para consultas) | CodEnt |
| `R910GRP` | Grupos (só para consultas) | CodEnt |
| `R910MDG` | Modelos (só para consultas) | IdMod;NomMod |
| `R910MGP` | Membros dos grupos (só para consultas) | CodGrp;CodMbr |
| `R910MNU` | Menus (só para consultas) | NomMnu |
| `R910PAM` | Permissões de aplicação/módulos | RigId;CodEnt |
| `R910PAR` | Permissões de aplicação/rotinas (só para consultas) | RigId;CodEnt |
| `R910PBL` | Políticas de bloqueio de usuários (só para consultas) | CodPol |
| `R910PCB` | Permissões do CBDS | CodPer;CodEnt |
| `R910PCN` | Permissões concedidas (só para consultas) | CodPer;CodEnt |
| `R910PCO` | Permissão de configuração (só para consultas) | ObjId;CodEnt |
| `R910PDS` | Políticas de duração de senhas (só para consultas) | CodPol |
| `R910PER` | Permissões de usuários (só para consultas) | CodPer |
| `R910PMC` | Permissões de tabelas (só para consultas) | NomTbl;NomCmp;CodEnt |
| `R910PMD` | Permissões de Modelos (só para consultas) | IdMod;CodEnt |
| `R910PMN` | Permissões de menus (só para consultas) | NomMnu;CodEnt |
| `R910PMO` | Permissões de módulos (só para consultas) | ModId;CodEnt |
| `R910PMT` | Permissões de tabelas (só para consultas) | NomTbl;CodEnt |
| `R910PSA` | Políticas de senhas antigas (só para consultas) | CodPol |
| `R910TBL` | Tabelas (só para consultas) | NomTbl |
| `R910USU` | Usuários (só para consultas) | CodEnt |
| `R911MOD` | Controle de usuário | NumSec;ModNam |
| `R911SEC` | Controle de conexões | NumSec |
| `R911SRV` | Controle de conexões | NumSrv |
| `R920FDT` | Formulários X-Window (dados). | XWFID;DATSEQ |
| `R920FRD` | Formulários X-Window compilados. | FRMNAM;DATSEQ |
| `R920IDT` | Interfaces (dados). | ITFID;DATSEQ |
| `R920ITF` | Interfaces (cabeçalho). | ITFID |
| `R920MNU` | Interfaces X-Window (menus) | ModId;PosMnu |
| `R920SYD` | Sistemas x Formulários (dados) | SYSID;DATSEQ |
| `R920SYS` | Sistemas x Formulários | SYSID |
| `R920WDT` | Formulários Web (Dados). | WFRID;DATSEQ |
| `R920WFD` | Formulários Web compilados. | WFRNAM;DATSEQ |
| `R920WFR` | Formulários Web (cabeçalho). | WFRID |
| `R920WMN` | Interfaces Web (menus) | ModId;PosMnu |
| `R920XWF` | Formulários X-Window (cabeçalho). | XWFID |
| `R930VCV` | Variável de Controle de Versão de Recurso | VarCtl |
| `R930VRE` | Versões dos Recursos | CodRec |
| `R940CHN` | Registro de alterações de configurações | ChnKnd;ChnKey |
| `R940DIC` | Configurações Internacionais de campo por tabela | CodTip;TabNam;FldNam |
| `R940END` | Dicionário de tradução de enumerações | LngKey;EnmNam;EnmKey |
| `R940FIC` | Configurações internacionais de campos | CODTIP;FRMNAM;TABIND;FLDNAM |
| `R940FLD` | Dicionário de tradução de campos de Tabelas/Views | LngKey;TbVNam;FldNam;PrpId |
| `R940FRD` | Dicionário de tradução de forms e controles | LngKey;FrmNam;CtrNam;PrpId;ValSeq;ModId |
| `R940GID` | Dicionário de tradução de formulários SGI | LngKey;FrmNam;NatVal |
| `R940LNG` | Cadastro de Idiomas | LngKey |
| `R940PAI` | Cadastro de Paises | CodPai |
| `R940RCF` | Cadastro de Configurações Regionais | CodCfg |
| `R940RCM` | Cadastro de Máscaras para configurações Regionais | CodCfg;OriMsk |
| `R940TIC` | Configurações internacionais de guias | CODTIP;FRMNAM;TABIND |
| `R940TTF` | Campos que permitem tradução | TABNAM;FLDNAM |
| `R940TVD` | Dicionário de tradução de Tabelas/Views | LngKey;TbVNam |
| `R940ULN` | Relação Usuário/Idioma | CodEnt |
| `R940UPA` | Relação Usuário/País | CodEnt |
| `R940URC` | Relação Usuário/Configuração Regional | CodEnt |
| `R950NET` | Configurações de internet | DatSeq |
| `R960COL` | Colunas visíveis no console de administração |  |
| `R960CON` | Configurações do Console de Administração |  |
| `R960MCP` | Permissões de multicamada |  |
| `R960PAR` | Parâmetros de processamentos de multicamada | IDREQ;TIPPAR;IDSEQ |
| `R960PRI` | Prioridades de execução de processamentos Multicamada | TIPSER;CODENT |
| `R960PRT` | Portas dos serviços | PRVID;SRVID;PRTID;PRMSEQ |
| `R960PRV` | Provedores de serviços | PRVID |
| `R960REQ` | Requisições de serviços Multicamada | IDREQ |
| `R960RUL` | Regra da porta do serviço | PRVID;SRVID;PRTID;RULSEQ |
| `R960SRV` | Serviços | PRVID;SRVID |
| `R960WIN` | Janela de execução de processamentos Multicamada | HORBLO;TIPSER |
| `R975CTR` | Parâmetros de usuário | MODID;CODUSU;PARID |
| `R975FAV` | Favoritos do painel de navegação da área de trabalho | MODID;CODUSU;ITEMORD |
| `R975MAC` | Histórico de Forms/Cubo/Relatórios mais acessados | MODID;CODUSU;ITEMID;ITKIND |
| `R975PRP` | Propriedades de itens referenciados nas tabelas R970MAC e R970SNS | MODID;ITEMID |
| `R975RAC` | Histórico de acesso recente a Forms/Cubo/Relatórios | MODID;CODUSU;ITEMID;ITKIND |
| `R975SNS` | Snapshots de items do painel "Início" da área de trabalho | MODID;CODUSU;ITEMID |
| `R980PPE` | Preferências de usuário | CODUSU;USRAGT;RESHOR;RESVER;PERSPE |
| `R995CPA` | Categoria de auditoria de tela | CODCPA;CODSYS |
| `R995CTA` | Categoria versus tipo | CODCPA;CODTPA;CODSYS |
| `R995CTE` | Log categoria versus tipo ativo | CODCPA;CODTPA;CODSYS |
| `R995MCA` | Mensagem da categoria | CODCPA;CODSYS;VERCPA |
| `R995MTA` | Mensagem por tipo de parametro da auditoria de tela | CODTPA;CODSYS;VERTPA |
| `R995PCA` | Parametros da categoria | CODCPA;CODSYS;NAMPCA |
| `R995PRC` | Parametros da categoria | CODRPA;NAMPPA |
| `R995PRT` | Parâmetros do tipo de auditoria | CODRPA;NAMPPA |
| `R995RPA` | Registro de auditoria | CODRPA |
| `R995TPA` | Tipos de auditoria | CODTPA;CODSYS |
| `R996CHC` | Check Constraints | TBLNAM;CHCNAM |
| `R996FLD` | Campos do usuário | TblNam;FldNam |
| `R996FND` | Campos do índice do usuário | TblNam;IndNam;FldOrd |
| `R996IND` | Índices do usuário | TblNam;IndNam |
| `R996LNF` | Tabela dos campos que fazem parte de um link do usuário | TblLnk;FldLnk;FldSrc |
| `R996LNK` | Tabela de definição de Links do usuário | TBLSRC;FLDNAM |
| `R996LSF` | Chaves das listas definidas pelo usuário | LSTNAM;KEYNAM |
| `R996LST` | Listas definidas pelo usuário | LSTNAM |
| `R996REL` | Relacionamentos do usuário | RELNAM |
| `R996RFL` | Campos do relacionamento | RELNAM;RELORD |
| `R996SPN` | Stored Procedure do usuário | StpNam |
| `R996TBL` | Tabelas do usuário | TBLNAM |
| `R996USP` | Parâmetros de stored procedure do usuário | StpNam;ParNam |
| `R996VIW` | Views do usuário | VIWNAM;VIWSEQ |
| `R997BST` | Storage dos campos BLOB (DB2) | TBLNAM;FLDNAM |
| `R997OSL` | Linguagens cadastradas para suporte de ordenação em Oracle | OraLng |
| `R997OST` | Storage de tabelas Oracle | TBLNAM |
| `R998CTG` | Configuração dos campos da Tela Gerada | CodUsu;ModId;NomFrm;NroPag;FldNam |
| `R998FLD` | Campos do usuário | TblNam;FldNam |
| `R998FND` | Campos do índice do usuário | TblNam;IndNam;FldOrd |
| `R998IND` | Índices do usuário | TblNam;IndNam |
| `R998LNF` | Tabela dos campos que fazem parte de um link do usuário | TblLnk;FldLnk;FldSrc |
| `R998LNK` | Tabela de definição de Links do usuário | TBLSRC;FLDNAM |
| `R998LSF` | Chaves das listas definidas pelo usuário | LSTNAM;KEYNAM |
| `R998LST` | Listas definidas pelo usuário | LSTNAM |
| `R998REL` | Relacionamentos do usuário | RELNAM |
| `R998RFL` | Campos do relacionamento | RELNAM;RELORD |
| `R998SCP` | Script do usuário | EXEINI;EXEORD;SCPSEQ |
| `R998SPN` | Stored Procedure do usuário | StpNam |
| `R998TBL` | Tabelas do usuário | TBLNAM |
| `R998UFM` | Campos de usuário em MemoryTable | CodUsu;ModId;NomGrd;NomFrm;SeqDat |
| `R998USP` | Parâmetros de stored procedure do usuário | StpNam;ParNam |
| `R998VIW` | Views do usuário | VIWNAM;VIWSEQ |
| `R999ASD` | Configuração assinatura digital | CodUsu;CodMod;AssTip;DatSeq |
| `R999BAR` | Menus personalizados pelo usuário | CodUsu;ModId;CodBar |
| `R999BOT` | Menus personalizados pelo usuário | CodUsu;ModId;CodBar;IndBot |
| `R999CDD` | Ocorrências dos Níveis do Especial | TipCad;CodNiv |
| `R999CDM` | Mestre Cadastro dos Níveis do Especial | TipCad |
| `R999CPM` | Configurações Performance dos Modelos de Relatórios | CodUsu;NomMod |
| `R999CUB` | Modelos de Cubos | CubSys;CubCat;CubNum |
| `R999ENT` | Valores de Entrada | CodUsu;CodMod;NomVar;ValSeq |
| `R999ESP` | Descrição dos Especiais | TipEsp;NumEsp;HieEsp |
| `R999FST` | Configurações de performance das telas | NomFrm;CodUsu |
| `R999GRF` | Campos das grids personalizadas pelo usuário | CodUsu;ModId;NomFrm;NomGri;FldNam |
| `R999GRI` | Grids personalizadas pelo usuário | CodUsu;ModId;NomFrm;NomGri |
| `R999GUC` | Grupos de modelos | SysGrp;CodGrp |
| `R999GUI` | Itens de grupos de modelos | SysGrp;CodGrp;NomMod |
| `R999HOR` | Tabela de trabalho do recurso de Fuso horário e horário de verão |  |
| `R999INS` | Uso genérico | NumIns;DatSeq |
| `R999LIS` | Gravação das configurações da tela de listagem dos modelos | CodUsu |
| `R999MDS` | Últimos modelos acessados | CodSys;CodUsu;CodMod |
| `R999MEN` | Menus personalizados pelo usuário | CodUsu;ModID;NamMen |
| `R999OUT` | Parametrização de saída dos modelos por usuário | CodUsu;CodMod;DatSeq |
| `R999PCL` | Layout corrente das Perspectivas de Negócio | ModId;CodUsu;PNID |
| `R999PEN` | Perspectivas de Negócio | ModId;PNID |
| `R999PNL` | Layouts das Perspectivas de Negócio | ModId;PNID;LAYID |
| `R999PSQ` | Configuração da Tela de Pesquisa de Registros | NomPsq;CodUsu;SrcFrm |
| `R999RUL` | Cadastro de regra de ordenação de sql server (Collation) não homologada | CodRul;SeqRul |
| `R999VER` | Registro da Versão |  |
| `R999VIS` | Visões do Cubo | CodUsu;CubNam;VISID |
| `R999VRD` | Versão do recursos de Banco de Dados |  |
| `RGRC_CART_CONSOLIDACAO` | Consolidação com resultados dos indicadores do painel de mercado | id |
| `RGRC_PARAM_CONSOLIDACAO` | Consolidação dos parâmetros do painel de mercado | id |
| `RTC_ERPX_CHAVE_AGR` | Chaves de negócio ERP XT e Gestão Agro SeniorX | ID |
| `RTC_ERPX_CHAVE_FND` | Chaves de negócio ERP XT e SeniorX | ID |
| `RTC_ERPX_CHAVE_MAN` | Chaves de negócio ERP XT e Gestão Industrial SeniorX | ID |
| `RTC_ERPX_CONFIG` | Configurações de integração SeniorX |  |
| `RTC_ERPX_CONFIG_TABELAS` | Configurações de tabelas de integração SeniorX |  |
| `RTC_ERPX_STATUS_AGR` | Controle das pendências de integração Agronegócio SeniorX | OPERATIONID |
| `RTC_ERPX_STATUS_FND` | Controle das pendências de integração SeniorX | OPERATIONID |
| `RTC_ERPX_STATUS_MAN` | Controle das pendências de integração manufatura SeniorX | OPERATIONID |
| `RTC_ERP_AWS_INITIALLOAD` | Tabela da carga inicial da replicação AWS (Tabela utilizada pelas soluções de RH e ERP) | id |
| `RTC_ERP_AWS_STATUS` | Registros já replicados pelo replicador AWS (Tabela utilizada pelas soluções de RH e ERP) | OPERATIONID |
| `RTC_ERP_GCP_STATUS` | Controle das pendências de integração do gestão de pedidos | OPERATIONID |
| `RTC_ERP_GKO_STATUS` | Controle das pendências de integração com GKO | OPERATIONID |
| `RTC_ERP_LOG_STATUS` | Controle das pendências de integração com WMS | OPERATIONID |
| `RTC_FCX_STATUS` | Controle das pendências de integração do fluxo de caixa | OPERATIONID |
| `RTC_INATIVE_REPLICATION` | Tabelas que serão ignoradas na replicação para cloud |  |
| `RTC_PENDENCIES` | Tabela de pendências de replicação | ID |
| `RTC_PEND_CONTROLE` | Tabela controle pendências por integração | NAME;ID |
| `RTC_REPLICATIONDEF` | Definição das tabelas de replicação | ID |
| `RTC_REPLICATORDEF` | Definição dos replicadores | REPLICATOR |
| `SGSU_CART_CONSOLIDACAO` | Consolidação com resultados dos indicadores do painel de suprimentos | id |
| `SGSU_PARAM_CONSOLIDACAO` | Consolidação dos parâmetros do painel de suprimentos | id |
| `W000ACP` | Tabela para manutenção de processos de workflow ativos | PROCID |
| `W000DEL` | Tabela para manutenção de delegações de pendências de um processo de workflow | PRCIID;PRCSTP;ACTVID;DELSEQ |
| `W000DPR` | Tabela para manutenção de processos publicados de workflow | PROCID;PRCVER |
| `W000EXP` | Tabela para manutenção de expirações de pendências | PRCIID;PRCSTP;ACTVID;EXPSEQ |
| `W000KEY` | Mantém chaves associadas à instâncias de processos | PRCIID |
| `W000PCY` | Tabela para manutenção de pendências de processos do workflow | PRCIID;PRCSTP;ACTVID |
| `W000PID` | Tabela para controle de identificadores de instância de processos |  |
| `W000PRC` | Tabela para manutenção de processos importados | PROCID;PRCVER |
| `W000PRI` | Tabela para manutenção de instâncias de processos em execução | PRCIID |
| `W000STP` | Tabela de manutenção de passos executados pelo processo | PRCIID;ACTVID;PRCSTP |
| `W000TMP` | Tabela para manutenção de dados temporários na execução de processos | PRCIID;ACTVID;PRCSTP;TMPTYP |
| `W000TMR` | Tabela para manutenção de temporizadores de processos | PRCIID;ELEMID;PRCSTP;TMRTYP |
| `W000VAR` | Tabela para a manutenção de variáveis publicas relacionadas a pendências | PRCIID;ACTVID;PRCSTP;VARCOD |
| `W100ACC` | Permissões por processo | PROCID;DATSEQ |
| `W100EMA` | Templates de e-mail | EMAIDX |
| `W200EVT` | Tabela para histórico de execução dos processos | PRCIID;ELEMID;PRCSTP;EVTSEQ |
| `W200PCY` | Tabela para histórico de execução de pendências de processos de workflow | PRCIID;ACTVID;PRCSTP |
| `W200PRI` | Tabela para manutenção do histórico de execução de processos | PRCIID |
| `W200UPP` | Tabela para manutenção de usuários que participaram de um processo | PRCIID;USERID;MILLIS;UPPTYP |
| `W200VAR` | Tabela para manutenção de histórico de variáveis públicas relacionadas ao processo | PRCIID;VARCOD |

## Agendador

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R999AGE` | Programação de processos automáticos | CODPRO |

## Agronegócio

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E113BNF` | Tabelas - Beneficiamento | CodEmp;CodBnf |
| `E113CAT` | Tabelas - Categoria do Lote | CodEmp;CodCat |
| `E113COA` | Tabelas - Cadastro de Operações | CodEmp;CodCoa |
| `E113CUL` | Tabelas - Cultivar | CodEmp;CodEtp;CodCul |
| `E113ETP` | Tabelas - Espécie | CodEmp;CodEtp |
| `E113FXI` | Tabelas - Relacionamento Item do Contrato X Item de Classificação X Acréscimo Financeiro X Faixas | CodEmp;CodFil;NumCtr;DatCpt;SeqCcp;CodIcl;PerIni;PerFim |
| `E113ICL` | Tabelas - Item de Classificação | CodEmp;CodIcl |
| `E113IPH` | Tabelas - Itens de Melhoria de PH | CodEmp;CodMph;SeqMph |
| `E113ITX` | Tabelas - Item de Taxa | CodEmp;CodItx |
| `E113IXA` | Tabelas - Relacionamento Item do Contrato X Item de Classificação X Acréscimo Financeiro | CodEmp;CodFil;NumCtr;DatCpt;SeqCcp;CodIcl |
| `E113IXI` | Tabelas - Faixas do item de classificação X Moeda | CodEmp;CodFil;CodFam;CodPro;CodIcl;VlrIni;VlrFin |
| `E113IXM` | Tabelas - Item de classificação X Moeda | CodEmp;CodFil;CodFam;CodPro;CodIcl |
| `E113MPH` | Tabelas - Melhoria de PH | CodEmp;CodMph |
| `E113PIP` | Tabelas - Relacionamento Produto X Item de Classificação X Percentual | CodEmp;CodFam;CodPro;CodIcl;TipFco;AplDsc;PerIni;PerFim |
| `E113PNE` | Tabelas - Peneira | CodEmp;CodPne |
| `E113PTX` | Tabelas - Relacionamento Produto X Item de Taxa X Parâmetros | CodEmp;CodFam;CodPro;AplPtx;CodItx;TipPtx;DatIni;DatFim;TipFco |
| `E113PXI` | Tabelas - Relacionamento Produto X Item de Classificação | CodEmp;CodFam;CodPro;CodIcl |
| `E113PXT` | Tabelas - Relacionamento Produto X Item de Taxa | CodEmp;CodFam;CodPro;CodItx |
| `E113SAF` | Tabelas - Safra | CodEmp;CodSaf |
| `E113SLT` | Tabelas - Status Lote | CodEmp;CodSlt |
| `E113TRG` | Tabelas - Variedade | CodEmp;CodTrg |
| `E113TRM` | Tabelas - Tratamento | CodEmp;CodTrm |
| `E113VIC` | Tabelas - Relacionamento Variedade x Itens de Classificação | CodEmp;CodTrg;CodIcl |
| `E113XML` | Tabelas - Armazenamento arquivos XML | IdeUni |
| `E115PRC` | Lote de processamento | NumPrc;SeqPrc;SeqIte |
| `E435ACF` | Tabelas - Recebimento - Acréscimo Financeiro | CodEmp;CodFil;NumCtr;DatCpt;SeqCcp;CodIcl;PerIni;PerFim;DatEnt;SeqEnt;FilOcp;NumOcp;SeqIpo |
| `E439ACF` | Tabelas - Fixação de Preços - Acréscimo Financeiro | CodEmp;CodFil;NumCtr;DatCpt;SeqCcp;CodIcl;PerIni;PerFim;NumFix;FilOcp;NumOcp;SeqIpo |

## Assistência Técnica/Controle Garantia

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E118ENO` | Equipamentos Necessários | CodEmp;CodFil;NumOcr;SeqIoc;CodEqp |
| `E118GAR` | Garantias | CodEmp;SeqGar |
| `E118IOC` | Itens da Ocorrência | CodEmp;CodFil;NumOcr;SeqIoc |
| `E118OCR` | Registro de Ocorrências e Acompanhamento (Follow-up) | CodEmp;CodFil;NumOcr |
| `E118PSI` | Produtos e Serviços Necessários | CodEmp;CodFil;NumOcr;SeqIoc;SeqPsi |
| `E118TOC` | Trâmites do registro de ocorrência | CodEmp;CodFil;NumOcr;SeqIoc;SeqToc |

## Assistência técnica

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E118DCA` | Notas fiscais da ocorrência | IdeUni |
| `E118SUB` | Itens substitutos | CodEmp;CodFil;NumOcr;SeqSub |

## Ato Cooperado

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E260PRN` | Proporcionalidade do Movimento de Ato Cooperado | IdeUni |

## Automatismos de processos

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000LEP` | Métricas | IdeUni |

## C.Pagar

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E501AVM` | Registro do Ajuste a Valor de Mercado | IdeUni |
| `E501AVP` | Registro do Ajuste a Valor Presente | IdeUni |
| `E501BNK` | Títulos - ERP Banking | CodEmp;CodFil;NumTit;CodTpt;CodFor;SeqBnk |
| `E501GKO` | Títulos - GKO | CodEmp;CodFil;NumTit;CodTpt;CodFor |
| `E501LPA` | Variação Cambial - Log de Processamento | IdeUni |
| `E501LVM` | Ajuste a Valor de Mercado - Log | IdeUni |
| `E501MAP` | Títulos - Movimentos Ajuste Valor Presente | CodEmp;CodFil;NumTit;CodTpt;CodFor;SeqMov |
| `E501MCP` | Títulos - Movimentos | CodEmp;CodFil;NumTit;CodTpt;CodFor;SeqMov |
| `E501MOP` | Títulos - Observações | CodEmp;CodFil;NumTit;CodTpt;CodFor;SeqMov |
| `E501MRT` | Títulos - Registro dos Movimentos de Retenção | CodEmp;CodFil;NumTit;CodTpt;CodFor;SeqMrt |
| `E501MVA` | Títulos - Movimento Variação Cambial | CodEmp;CodFil;NumTit;CodTpt;CodFor;SeqMov |
| `E501MVM` | Títulos - Movimentos de Ajuste a Valor de Mercado | CodEmp;CodFil;NumTit;CodTpt;CodFor;SeqMov |
| `E501OSU` | Substituição - Composição | OriSub;SeqOri |
| `E501RAP` | Títulos - Rateios dos Movimentos do Ajuste Valor Presente | CodEmp;CodFil;NumTit;CodTpt;CodFor;SeqMov;SeqRat |
| `E501RAT` | Títulos - Rateios dos Movimentos | CodEmp;CodFil;NumTit;CodTpt;CodFor;SeqMov;SeqRat |
| `E501RET` | Substituição - Dados Gerais | OriSub |
| `E501TCP` | Títulos - Dados Gerais | CodEmp;CodFil;NumTit;CodTpt;CodFor |
| `E501TRT` | Títulos - Controle da Retenção de Impostos | CodEmp;CodFil;CodFor;CodCli;TipImp;MesAno |
| `E501VPA` | Registro da Variação Cambial | IdeUni |
| `E504CAP` | Comissões - Movimentos (Conta Corrente) | CodEmp;CodFil;CodRep;SeqCom |
| `E504RAT` | Comissões - Rateios dos Movimentos | CodEmp;CodFil;CodRep;SeqCom;SeqRat |
| `E504SUP` | Comissões - Representantes superiores | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv;SeqIsv;CodRep |
| `E510ECO` | Títulos - Registro dos Títulos para Encontro de Contas | NumEco;CodEmp;CodFil;NumTit;CodTpt;CodFor |
| `E510LPE` | Títulos - Log do Envio do Pagamento Eletrônico | CodEmp;CodPor;NumArb |
| `E510RPE` | Títulos - Registro dos Pagamentos Eletrônicos | CodPor;CodEmp;CodFil;NumTit;CodTpt;CodFor;SeqRpe |

## C.Receber

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E301AVM` | Registro do Ajuste a Valor de Mercado | IdeUni |
| `E301AVP` | Registro do Ajuste a Valor Presente | IdeUni |
| `E301BNK` | Títulos - ERP Banking | CodEmp;CodFil;NumTit;CodTpt;SeqBnk |
| `E301CCV` | Títulos - Valores utilizados pelos clientes conveniados | CodEmp;CodFil;NumTit;CodTpt;CliCnv |
| `E301CTI` | Títulos - Dados de Cobrança Pagamento | CodEmp;CodFil;NumTit;CodTpt |
| `E301HDC` | Títulos - Histórico dos Dados de Cobrança | CodEmp;CodFil;NumTit;CodTpt;SeqHis |
| `E301LAJ` | Ajuste a Valor Presente - Log | IdeUni |
| `E301LCR` | Variação Cambial - Log de Processamento | IdeUni |
| `E301LVM` | Ajuste a Valor de Mercado - Log | IdeUni |
| `E301MAR` | Títulos - Movimentos Ajuste Valor Presente | CodEmp;CodFil;NumTit;CodTpt;SeqMov |
| `E301MCR` | Títulos - Movimentos | CodEmp;CodFil;NumTit;CodTpt;SeqMov |
| `E301MOR` | Títulos - Observações | CodEmp;CodFil;NumTit;CodTpt;SeqMov |
| `E301MVM` | Títulos - Movimentos de Ajuste a Valor de Mercado | CodEmp;CodFil;NumTit;CodTpt;SeqMov |
| `E301MVR` | Títulos - Movimento Variação Cambial | CodEmp;CodFil;NumTit;CodTpt;SeqMov |
| `E301OSU` | Substituição - Composição | OriSub;SeqOri |
| `E301RAR` | Títulos - Rateio dos Movimentos do Ajuste Valor Presente | CodEmp;CodFil;NumTit;CodTpt;SeqMov;SeqRat |
| `E301RAT` | Títulos - Rateios dos Movimentos | CodEmp;CodFil;NumTit;CodTpt;SeqMov;SeqRat |
| `E301RET` | Substituição - Dados Gerais | OriSub |
| `E301SRT` | Títulos - Simulação da Renegociação de Títulos | IdeUni |
| `E301TCR` | Títulos - Dados Gerais | CodEmp;CodFil;NumTit;CodTpt |
| `E301TPC` | Títulos - Dados de Cobrança | CodEmp;CodFil;NumTit;CodTpt |
| `E301TPX` | Títulos - Dados do PIX | CodEmp;CodFil;NumTit;CodTpt |
| `E301VCR` | Registro da Variação Cambial | IdeUni |
| `E302PAP` | Títulos - Posições títulos analítica por Portador | CodEmp;UsuGer;DatGer;HorGer;DatBas;CodPor;CodCrt;CodFil;NumTit;CodTpt |
| `E302PTP` | Títulos - Posições títulos por Portador | CodEmp;UsuGer;DatGer;HorGer;DatBas |
| `E310ECO` | Títulos - Registro dos Títulos para Encontro de Contas | NumEco;CodEmp;CodFil;NumTit;CodTpt |
| `E310ITB` | Instruções de Títulos p/ Banco | CodEmp;CodFil;NumTit;CodTpt;CodOcr;SeqItb |
| `E310ITR` | Instruções de Preparações p/ Banco | CodEmp;DatRpr;NumRpr;CodOcr;SeqItr |
| `E310PEF` | Títulos - Registro dos Títulos para Pendências Financeiras | CodEmp;CodFil;NumPef;SeqPef;NumTit;CodTpt |
| `E310RPR` | Títulos - Registro dos Títulos para Preparação da CE | CodEmp;CodFil;DatRpr;NumRpr;NumTit;CodTpt |
| `E320ACB` | Cobrança - Assessorias de Cobrança | CodEmp;CodAcb |
| `E320ACI` | Cobrança - Acionamentos de Clientes em Cobrança | CodEmp;CodAci |
| `E320DMF` | Cobrança - Definição de Metas de Cobrança por Fases | CodEmp;CodFil;DatCmp;TipMet;CodFcb |
| `E320DMG` | Cobrança - Definição de Metas Globais de Cobrança | CodEmp;DatCmp;TipMet |
| `E320DMO` | Cobrança - Definição de Metas de Cobrança por Operadores | CodEmp;DatCmp;TipMet;CodOcb |
| `E320FCA` | Cobrança - Fases de Comissão das Assessorias de Cobrança | CodEmp;CodFca |
| `E320FCB` | Cobrança - Fases de Cobrança | CodEmp;CodFil;CodFcb |
| `E320GOC` | Cobrança - Grupo de Operadores de Cobrança | CodEmp;CodGoc |
| `E320LAF` | Cobrança - Ligação de Assessorias Cobrança X Fases | CodEmp;CodAcb;CodFil;CodFcb |
| `E320LFO` | Cobrança - Ligação de Operadores Cobrança X Filiais | CodEmp;CodFil;CodOcb |
| `E320LGA` | Cobrança - Ligação de Grupo de Operadores Cobrança X Acionamentos | CodEmp;CodGoc;CodAci |
| `E320LGO` | Cobrança - Ligação de Operadores de Cobrança X Grupos de Empresas | IdeUni |
| `E320LOC` | Cobrança - Ligação de Operadores de Cobrança X Clientes | IdeUni |
| `E320LOE` | Cobrança - Ligação de Operadores de Cobrança X Estados | IdeUni |
| `E320LOF` | Cobrança - Ligação de Operadores Cobrança X Fases | CodEmp;CodOcb;CodFil;CodFcb;DatIni |
| `E320LOG` | Cobrança - Ligação de Operadores Cobrança X Grupo | CodEmp;CodOcb;CodGoc |
| `E320LOP` | Cobrança - Ligação de Operadores de Cobrança X CEP | IdeUni |
| `E320LOR` | Cobrança - Ligação de Operadores de Cobrança X CNPJ Raiz | IdeUni |
| `E320OCB` | Cobrança - Operadores de Cobrança | CodEmp;CodOcb |
| `E320OPC` | Cobrança - Órgãos de Proteção ao Crédito | CodEmp;CodFil;CodOpc |
| `E320PMF` | Cobrança - Premiação de Metas de Cobrança por Fases | CodEmp;CodFil;TipMet;CodFcb |
| `E320PMO` | Cobrança - Premiação de Metas de Cobrança por Operador | CodEmp;TipMet;CodOcb |
| `E321ATC` | Cobrança - Acionamento de Títulos em Cobrança | CodEmp;CodFil;NumTit;CodTpt;SeqAtc |
| `E322AGR` | Cobrança - Agrupamento de Títulos Renegociados | CodEmp;FilAgr;DatAgr;ChvAgr |
| `E322AGS` | Cobrança - Agrupamento de Títulos Renegociados - Simulação | IdeUni |
| `E322DSR` | Cobrança - Detalhes da Simulação da Renegociação | IdeUni |
| `E322OTA` | Cobrança - Ocorrência de Títulos em Assessorias de Cobrança | CodEmp;CodFil;NumTit;CodTpt;CodAcb;SeqOta |
| `E501LAJ` | Ajuste a Valor Presente - Log | IdeUni |

## Cadastro

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E055CLL` | Tributos - Contas Lalur e Lacs | CodEmp;CodFil;CodImp;CodCon |
| `E095CBO` | Produtos - CBO - Classificação brasileira de ocupações | NUMCBO |
| `E097MON` | Pendências de Montagem | CodEmp;CodFil;NumMon;SeqMon |
| `E097OCM` | Pendências de Montagem - Ocorrências | CodEmp;CodFil;NumMon;SeqMon;SeqOcm |
| `E097PEN` | Pendências para a Carga | CodEmp;DatGer;SeqPen |
| `E097VMO` | Pendências de Montagem - Valores | CodEmp;CodFil;NumMon;SeqMon;SeqVmo |

## Cadastro da nomenclatura brasileira de serviços

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E022NBS` | NBS | IdeUni |

## Cadastros

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000AGE` | Processos Automáticos | CodPra |
| `E000AVA` | Definição de avalistas para os documentos de contrato, pedido e nota fiscal | CodEmp;CodFil;SeqAva |
| `E000CLG` | Log Genérico - Colunas para Não Gerar | NomTab;NomCam |
| `E000ERA` | Processos Automáticos - Entrada de Relatórios | CodPra;NomVar |
| `E000LOG` | Log Genérico | NomTab;SeqLog;TipLog |
| `E000LPA` | Processos Automáticos - Logs | CodPra;SeqLog |
| `E000NIV` | Níveis | CodNiv |
| `E000PFU` | Perfis de Usuário (Varejo) | CodPer |
| `E000PRA` | Processos Automáticos | CodPra |
| `E000WIZ` | Processo Inicialização (GO UP) | CodEmp;CodFil;CodPrc |
| `E001LTF` | Transações - Ligação Transação X Filial | CodEmp;CodFil;CodTns;DatIni |
| `E001TXA` | Finanças - Contas a Pagar/Receber - Transações desconsideradas para Ajustes Financeiros | CodEmp;CodTns |
| `E002AXT` | Finanças - Contas a Pagar/Receber - Tipos de Título desconsiderados para Ajustes Financeiros | CodEmp;CodTpt |
| `E002PJF` | Finanças - Parâmetros Ajustes Financeiros | IdeUni |
| `E002PVC` | Finanças - Parâmetros Variação Cambial | IdeUni |
| `E002PVM` | Finanças - Parâmetros Ajuste a Valor de Mercado | IdeUni |
| `E002RXT` | Finanças - Contas a Pagar/Receber - Relacionamento entre Tipo de Título | CodEmp;CodTpt;TptRlc |
| `E002TXN` | Finanças - Contas a Pagar/Receber - Relacionamento Tipo de Título X  Natura de Gastos | CodEmp;CodTpt;CodNtg |
| `E002TXT` | Finanças - Contas a Pagar/Receber - Relacionamento Tipo de Título X  Transação | CodEmp;CodTpt;CodTns |
| `E003PEM` | Controles por Empresa | CodEmp |
| `E010ACI` | Características - Itens dos Agrupamentos | CodEmp;CodAgp;CodCte |
| `E010ACR` | Características - Relacionamentos dos Agrupamentos | CodEmp;CodAgp;SeqRel;CodCte |
| `E010AGP` | Características - Agrupamentos | CodEmp;CodAgp |
| `E010CCP` | Características de Produto - Componentes | CodEmp;CodCte;SeqCcp |
| `E010CTE` | Características de Produto | CodEmp;CodCte |
| `E012CSP` | Famílias - Características | CodEmp;CodFam;CodCte |
| `E012DPD` | Famílias - Distribuição Proporcional por Derivações | CodEmp;CodFam;CodMdp;CodDer |
| `E012EFA` | Exclusões de Famílias | CodEmp;CodFam |
| `E012FAM` | Famílias | CodEmp;CodFam |
| `E012FME` | Ligação Família X Máscara Endereçamento Produto | CodEmp;CodFam;CodMep |
| `E012FXF` | Ligação Família X Fornecedor | CodEmp;CodFam;CodFor |
| `E012FXT` | Ligação Família X Transação | CodEmp;CodFam;CodTns |
| `E012LFE` | Ligação Família X Estágios Produção | CodEmp;CodFam;CodEtg |
| `E012LFF` | Ligação Faixas da Grade X Famílias | CodEmp;CodFam;CodFxa |
| `E012MNF` | Minifábricas | CodEmp;CodMnf |
| `E012RAT` | Famílias - Rateios | CodEmp;CodFam;SeqRat |
| `E013AGP` | Formas de Agrupamento para Produtos | CodEmp;CodAgp |
| `E013RAT` | Formas de Agrupamento para Produtos - Rateios | CodEmp;CodAgp;SeqRat |
| `E015EME` | Exclusões de Unidades de Medida | UniMed |
| `E015MED` | Unidades de Medida | UniMed |
| `E015TCU` | Unidades de Medida - Conversões | UniMed;UniMe2 |
| `E019ANP` | Produtos - Código ANP | CodAnp |
| `E019TIM` | Tabela de partilha ICMS Monofásico | CodTim |
| `E020MSL` | Movimentação dos Selos de IPI | CodEmp;CodFil;CodSip;SeqSip |
| `E020RJE` | Relacionamento série do ERP X JDE | IdeUni |
| `E020SCO` | Relacionamento entre série origem e destino | IdeUni |
| `E020SEL` | Controle dos Selos de IPI | CodEmp;CodFil;CodSip |
| `E023AXG` | Finanças - Contas a Pagar/Receber - Grupos de Contas desconsiderados para Ajustes Financeiros | CodEmp;CodCrp |
| `E030AGE` | Bancos - Agências | CodBan;CodAge |
| `E030BAN` | Bancos | CodBan |
| `E030CCB` | Bancos - Configurações Correspondente Bancário | CodBan;CodEmp |
| `E030PCB` | Bancos - Produtos Corresp.Bancário | CodBan;CodPcb |
| `E030SUP` | Bancos - Superintendências | CodBan;CodSup |
| `E031AJF` | Finanças - Contas a Pagar/Receber - Modeas desconsiderados para Ajustes Financeiros | CodEmp;CodMoe |
| `E032FIN` | Financeiras | CodEmp;CodFin |
| `E032MRF` | Financeiras - Motivos de retorno | CodEmp;CodFin;NumSeq |
| `E032TFI` | Financeiras - Tabelas de Financiamento | CodEmp;CodFin;NumTab |
| `E032TFJ` | Financeiras - Juros por Parcelas de Financiamento | CodEmp;CodFin;NumTab;QtdPar |
| `E032TPC` | Financeiras - Financiamento Definido por Parcelas e Dias de Carência | CodEmp;CodFin;NumTab;QtdPar;DiaCar |
| `E038ACO` | Ações Corretivas | CodEmp;CodAco |
| `E039EPO` | Exclusões de Portadores | CodEmp;CodPor |
| `E039HPO` | Portadores - Históricos | CodEmp;CodPor;CodFil |
| `E039POR` | Portadores | CodEmp;CodPor |
| `E039RAT` | Portadores - Rateios | CodEmp;CodPor;CodFil;SeqRat |
| `E044CCU` | Centros de Custos | CodEmp;CodCcu |
| `E044COM` | Composição de Lançamentos |  |
| `E044DIS` | Tabela de Distribuição de Custo | IdeUni |
| `E044GEN` | Tabela auxiliar genérica para composição de calculo de distribuição | IdeUni |
| `E044ICF` | Itens Matriz de Distribuição de Cultura em Formação | IdeUni |
| `E044IDC` | Itens Matriz de Distribuição de Custos | IdeUni |
| `E044IGF` | Itens Matriz de Gastos por Filial | IdeUni |
| `E044LOT` | Lotes relacionados a distribuição de custo | IdeUni |
| `E044MCD` | Matriz de Distribuição de Custos | IdeUni |
| `E044MCF` | Matriz de Distribuição de Cultura em Formação | IdeUni |
| `E044MGF` | Matriz de Distribuição de Gastos por Filial | IdeUni |
| `E044RAT` | Centros de Custos - Rateios | CodEmp;CodCcu;SeqRat |
| `E050CTD` | Tributos - Código tributação da DESIF | IdeUni |
| `E050DCM` | Tributos - Desdobramento da conta mista | IdeUni |
| `E050TAR` | Tributos - Tarifas bancárias | IdeUni |
| `E051PIV` | Tributos - Partilha do ISS por vigência | CodImp;CmpRef |
| `E052ACO` | Ações | CodEmp;CodAco |
| `E053FIR` | Tributos - Formação Faturamento IRPJ e CSLL | CodEmp;DatBas;CodTns;TipApl |
| `E055AGR` | Tributos - Parâmetros de Impostos por Família | CodEmp;CodFil;CodImp;DatBas;CodFam |
| `E055BNF` | Tributos - Benefício fiscal | CodEmp;CodBnf |
| `E055CAT` | Configurações Crédito Acumulado | CodEmp;CodTns;CodLan;SeqCat |
| `E055CCP` | Tributos - Parâmetro de Configuração da Contribuição Previdenciária | CodEmp;CodFil;CodImp;DatBas;ConPre |
| `E055CIU` | Usuários - Cadastro Ligação da Apuração Imposto x Usuário | IdeUni |
| `E055CPR` | Tributos - Tabela de presunção por Competência | CodEmp;CodPre;DatCmp |
| `E055EST` | Tributos - Parâmetros de Configuração do Estoque | CodEmp;CodFil;CodImp;DatBas;CodPro;CodDer |
| `E055FCT` | Configurações Crédito Acumulado - Filtro | CodEmp;CodTns;CodLan;SeqCat;ProImp;TipNfs;TipNfe;CodEdc;CodStr;PerIcm |
| `E055FHP` | Histórico de alterações do produto/derivação por filial | IdeFhp |
| `E055FHS` | Histórico de alterações do serviço por filial | IdeFhs |
| `E055HPF` | Histórico de alterações do produto/derivação | IdeHpf |
| `E055HSF` | Histórico de alterações do serviço | IdeHsf |
| `E055IIF` | Tributos - Parâmetros da apuração do ISS próprio das instituições financeiras | IdeUni |
| `E055PAE` | Tributos - Parametros da Apuração de Encerramento | CodEmp;CodFil;CodImp;DatRef |
| `E055PER` | Tributos - Parâmetros das Exceções dos Impostos de Retenção | IdeUni |
| `E055PFA` | Tributos - Forma de Apuração da Estimativa Mensal | CodEmp;CodFil;CodImp;DatRef |
| `E055PSU` | Tributos - Parâmetro de Configuração do Subsídio | CodEmp;CodFil;CodImp;DatBas;CodFor;CodCli |
| `E055PTE` | Tributos - Parâmetros das Transações de Exportação | IdeUni |
| `E055RCX` | Tributos - Parâmetros regime de caixa / financeiro | CodEmp;CodFil;CodImp;DatBas;SeqRcx |
| `E055TPR` | Tributos - Tabela de Presunção | CodEmp;CodPre |
| `E056DES` | Motivos de Desconto | CodEmp;CodMot |
| `E056IMO` | Tributos - Unidade Imobiliária | CodEmp;CodImo |
| `E057ENV` | Exclusões de Motivos de Não Venda | CodMot |
| `E057NVE` | Motivos de Não Venda | CodMot |
| `E058CON` | Concorrentes | CodEmp;CodCon |
| `E063PAL` | Palmtop | CodEmp;CodPal |
| `E064AUV` | Auxiliares de Vendas | CodAuv |
| `E064SEG` | Segmentos e Cadastro CNAE | CodCna |
| `E065AVL` | Agenda de Visitas/Ligações | DatVis;SeqVis |
| `E066FOT` | Filiais de Operadoras de Telefonia | CodEmp;CodOte;CodFot |
| `E066OPE` | Operadoras Cartões de Débito/Crédito | CodOpe |
| `E066OPP` | Ocorrências Retorno Operadoras Cartões | CodOpe;CodOpp |
| `E066OTE` | Operadoras de Telefonia | CodEmp;CodOte |
| `E066TOC` | Taxas de Operadoras de Cartão de Débito/Crédito | CodOpe;NumPar;BanCar |
| `E069CNP` | Convênios - Períodos de Crédito | CodCnv;CptCnv;SeqCnv |
| `E069CNV` | Convênios | CodCnv |
| `E069CXC` | Convênios - Convênios x Condições de Pagamento | CodEmp;CodCpg;CodCnv |
| `E069CXF` | Convênios - Convênios x Formas de Pagamento | CodEmp;CodFpg;CodCnv |
| `E069GRE` | Grupos de Empresas | CodGre |
| `E069HGR` | Grupos de Empresas - Históricos | CodGre;CodEmp;CodFil |
| `E069LPV` | Convênios - Ligações Convênio x Produto | CodCnv;CodEmp;CodPro;CodDer |
| `E069MAS` | Seguradoras - Máscaras de Apólice | CodEmp;CodSeg;CodFil;ForInc;TipSse;SeqMas |
| `E069NSA` | Seguradoras - Reinícios do Número Sequencial da Apólice | CodEmp;CodSeg;CodFil;SeqNsa |
| `E069SEG` | Seguradoras | CodEmp;CodSeg |
| `E069TCV` | Tipos de Convênio | TipCnv |
| `E070AFI` | Filiais - Agrupamento de Filiais | CodEmp;CodAfi |
| `E070CDE` | Filiais - Dependências | CodEmp;CodFil;CodDep |
| `E070CFC` | Filiais - Classificações Filiais para Análise de Crédito | CodEmp;CodCfc |
| `E070CFE` | Empresas - Cadastro no financiador externo | CodEmp;CodFin |
| `E070CPD` | Filiais - Paralisação da dependência comunicada ao BACEN | CodEmp;CodFil;CodDep;DatIni |
| `E070CPR` | Filiais - Parâmetros Compras | CodEmp;CodFil |
| `E070CTB` | Filiais - Parâmetros Contabilidade | CodEmp;CodFil |
| `E070ECC` | Empresas - Cota Capital | CodEmp |
| `E070ECN` | Empresas - Definições das consistências habilitadas para a empresa | CodEmp |
| `E070ECT` | Empresas - Parâmetros Contabilidade | CodEmp |
| `E070EEM` | Exclusões de Empresas | CodEmp |
| `E070EFI` | Exclusões de Filiais | CodEmp;CodFil |
| `E070EFN` | Empresas - Parâmetros Financeiros | CodEmp |
| `E070EMP` | Empresas | CodEmp |
| `E070ENT` | Empresas - Endereços de Entrega | CodEmp;CodFil;SeqEnt |
| `E070EPF` | Empresas - Parâmetros Fiscais | CodEmp |
| `E070EPR` | Empresas - Parâmetros para Manufatura e Serviços | CodEmp |
| `E070EPT` | Empresas - Parâmetros Patrimônio | CodEmp |
| `E070EST` | Filiais - Parâmetros Estoques | CodEmp;CodFil |
| `E070FAF` | Filiais - Filiais atendidas pela filial de assistência técnica | CodEmp;CodFil;SeqFaf |
| `E070FAM` | Filiais - Parâmetros por Família | CodEmp;CodFil;CodFam |
| `E070FCF` | Filiais - Fases de Classificação Filiais para Crédito | CodEmp;CodFcf |
| `E070FCP` | Filiais - Parâmetros Contas a Pagar | CodEmp;CodFil |
| `E070FFE` | Filiais - Cadastro no Financiador Externo | CodEmp;CodFil;CodFin |
| `E070FIL` | Filiais | CodEmp;CodFil |
| `E070FIN` | Filiais - Parâmetros Financeiros | CodEmp;CodFil |
| `E070FPR` | Filiais - Parâmetros para Manufatura e Serviços | CodEmp;CodFil |
| `E070FRE` | Filiais - Parâmetros Gestão Contas a Receber | CodEmp;CodFil |
| `E070FTR` | Filiais - Parâmetros Transporte | CodEmp;CodFil |
| `E070FXP` | Filiais - Produtos não Permitidos | CodEmp;CodFil;SeqFxp |
| `E070FXT` | Filiais - Ligação Filial X Transação | CodEmp;CodFil;CodTns |
| `E070IMP` | Filiais - Parâmetros Tributos | CodEmp;CodFil |
| `E070INS` | Filiais - ICMS Simples Nacional | CodEmp;CodFil;DatCpt |
| `E070INT` | Filiais - Parâmetros Integrações | CodEmp;CodFil |
| `E070LAE` | Filiais - Cadastro no Autenticador de Crédito | CodEmp;CodFil;CodAec |
| `E070LAM` | Empresas - Cadastro no Autenticador de Crédito | CodEmp;CodAec |
| `E070LCF` | Filiais - Ligação de Classificação Filiais X Fases | CodEmp;CodCfc;CodFcf |
| `E070LGF` | Filiais - Cadastro na Financeira | CodEmp;CodFil;CodFin |
| `E070MCF` | Filiais - Movimento de Compra por Competência | CodEmp;CodFil;VcfCpr;CodNtg;SeqMcf |
| `E070PAT` | Filiais - Parâmetros Patrimônio | CodEmp;CodFil |
| `E070PDE` | Filiais - Data paralisação da filial comunicada ao BACEN | CodEmp;CodFil;DatIni |
| `E070PFO` | Filiais - Períodos de fechamento por Origem | CodEmp;CodFil;CodOri |
| `E070PGE` | Empresas - Parâmetros Gerais | CodEmp |
| `E070PRE` | Mercado e Suprimentos - Parâmetros do Recebimento Eletrônico | IdeUni |
| `E070PRF` | Empresa - Tributos - Período do Refis | SeqPer |
| `E070PRJ` | Filiais - Parâmetros do Controle de Projetos | CodEmp;CodFil |
| `E070RDT` | Filiais - Restrições de Destinatários em Notas Fiscais de Transferência | SeqRdt |
| `E070RET` | Filiais - Ligação Filial X Locais de Retirada | CodEmp;CodFil;CodRet |
| `E070SFL` | Filiais - Serviços Financeiros para Varejo | CodEmp;CodFil;CodSer;CodPro |
| `E070TES` | Filiais - Parâmetros Tesouraria | CodEmp;CodFil |
| `E070VCF` | Filiais - Verbas de Compra por Competência | CodEmp;CodFil;VcfCpr;CodNtg |
| `E070VCH` | Filiais - Verbas de Compra por Competência - Histórico de alterações | CodEmp;CodFil;DatAlt;SeqAlt |
| `E070VEN` | Filiais - Parâmetros Vendas | CodEmp;CodFil |
| `E073ETR` | Transportadoras - Exclusões de Transportadoras | CodTra |
| `E073FIS` | Transportadoras - Pessoa Física | CodTra |
| `E073HMO` | Transportadoras - Histórico do Motorista | CodTra;CodMtr;SeqObs |
| `E073HVE` | Transportadoras - Histórico do Veículo | CodTra;PlaVei;SeqObs |
| `E073LMR` | Transportadoras - Ligação do Motorista às Rotas | CodTra;CodMtr;CodRoe |
| `E073LVM` | Transportadoras - Ligação do Motorista aos veículos | CodTra;PlaVei;TraMot;CodMtr |
| `E073LVR` | Transportadoras - Ligação do Veículo às Rotas de Entrega | CodTra;PlaVei;CodRoe |
| `E073LVV` | Transportadoras - Ligação do Cavalo ao Reboque | CodTra;PlaCav;TraReb;PlaReb |
| `E073MAR` | Marcas de Veículos | CodMar |
| `E073MOD` | Modelos de Veículos | CodMod |
| `E073MOT` | Transportadoras - Motoristas | CodTra;CodMtr |
| `E073OBS` | Transportadoras - Observações | CodTra;SeqObs |
| `E073PRT` | Transportadoras - Veículos - Proprietário | IdePrt |
| `E073RES` | Transportadoras - Reserva de Veículos | CodTra;PlaVei;DatRes;CodRoe |
| `E073TAG` | Tipos de veículos X agrupamento comercial | CodEmp;CodTip;CodAgp |
| `E073TIP` | Tipos de Veículos | CodTip |
| `E073TME` | Tipos de Mercadoria | CodTme |
| `E073TRA` | Transportadoras | CodTra |
| `E073VEI` | Transportadoras - Veículos | CodTra;PlaVei |
| `E073VNC` | Clientes X tipos de veículos não permitidos | CodTip;CodCli |
| `E073VTR` | Transportadoras - Histórico de Alteração Fiscal da Transportadora | CodTra;DatAtu;HorAtu;SeqAtu |
| `E075BAR` | Produtos - Códigos de Barras | CodEmp;CodBar |
| `E075BLO` | Produtos - Bloqueio | SeqBlo |
| `E075CAT` | Categoria | IdeUni |
| `E075CDE` | Produtos - Características p/ Derivação | CodEmp;CodPro;CodDer;CodCte;SeqCcp |
| `E075CNP` | Subprodutos/componentes do produto produzido | IdeUni;IdeOpr |
| `E075CPC` | Produtos - Correlação entre códigos de produtos comercializados | CodEmp;ProCom;DerCom;CodPro;CodDer |
| `E075CPL` | Produtos - Produtos Complementares | IdePdc |
| `E075CPR` | Produtos - Características por Produto | CodEmp;CodPro;CodCte;SeqCcp |
| `E075CRF` | Produtos - Características do Fabricante | CodEmp;CodPro;CodDer |
| `E075DER` | Produtos - Derivações | CodEmp;CodPro;CodDer |
| `E075DPD` | Produtos - Distribuição proporcional por Derivação | CodEmp;CodPro;CodDer |
| `E075EDE` | Exclusões de Derivações | CodEmp;CodPro;CodDer |
| `E075EPP` | Exclusões de Ligação Produto/Derivação ao Cliente | CodEmp;CodPro;CodDer;CodCli |
| `E075EPR` | Exclusões de Produtos | CodEmp;CodPro |
| `E075EQI` | Produtos - Equivalentes | CodEmp;CodPro;CodDer;ProEqi;DerEqi |
| `E075ETP` | Produtos - Especificações Técnicas Conformidade p/ Produtos | CodEmp;CodPro;CodDer;CodEct;SeqCet |
| `E075FCI` | Cálculo do FCI | CodEmp;CodFil;CodPro;CodDer;NumSep;CodLot;CodDep;PerFim |
| `E075FOT` | Produtos - Fotos | CodEmp;FotPro;FotDer;SeqFot |
| `E075FPR` | Ligação entre a empresa e o produto produzido por filial | IdeOfc;IdeOpr;CodFil |
| `E075FTT` | Produtos - Texto Descritivo Técnico (Fotos) | CodEmp;FotPro;FotDer;SeqFot;SeqFtt |
| `E075HIS` | Produtos - Históricos | CodEmp;CodPro;CodDer;SeqHis |
| `E075IBP` | Tabela do IBPT | IdeUni |
| `E075IMP` | Produtos - Impostos por Produto | CodEmp;CodPro;CodImp;DatBas |
| `E075INF` | Produtos - Impostos no Documento Fiscal | CodEmp;CodFil;CodPro;CodDer;CodSer;PerInf |
| `E075LMF` | Ligação Minifábricas X Família/Produtos | CodEmp;CodFam;CodPro;CodMnf |
| `E075LPF` | Produtos - Liga Fotos aos Produtos | CodEmp;CodPro;CodDer;SeqLpf |
| `E075LPV` | Produtos - Ligação Produto/Derivação com Aplicações de Venda | CodEmp;CodPro;CodDer;CodApv |
| `E075LTP` | Integrações - Sapiens Varejo - Produto X Transação | CodEmp;CodFil;CodPro;CodDer |
| `E075MAE` | Produtos - Informações de Manuseio, Armazenagem e Embalagem | CodEmp;CodPro;CodDer |
| `E075MES` | Cabeçalho de Custo de Produto por Data | IdeUni |
| `E075NFC` | Notas Fiscais de Compra dos Componentes | IdeUni;IdeOpr |
| `E075NFV` | Notas Fiscais de Venda do Produto Produzido | IdeUni;IdeOpr |
| `E075OBS` | Produtos - Observações Adicionais do Produto/Derivação | CodEmp;CodPro;CodDer;DatGer;SeqObs |
| `E075OFC` | Origens do cálculo da FCI por Empresa/Filial e Período | IdeUni |
| `E075OPR` | Produto Produzido | IdeUni |
| `E075PAC` | Características - Ligação Produto X Agrupamento | CodEmp;CodAgp;SeqRel;CodPro;CodDer |
| `E075PCB` | Produtos - Percentual Origem | CodEmp;CodPro;CodUfo;DatIni |
| `E075PCD` | Preço de custo por produto e derivação | IdeUni |
| `E075PCO` | Produtos - Índice de Produtividade e Consumo Médio | CodEmp;CodPro;CodDer;DatBas |
| `E075PFI` | Produtos - Parâmetros por Filial | CodEmp;CodFil;CodPro |
| `E075PIC` | Produtos - Informações Complementares | CodEmp;CodPro |
| `E075PPC` | Produtos - Ligação Produto/Derivação ao Cliente | CodEmp;CodPro;CodDer;CodCli;SigUfs;CodTns |
| `E075PPF` | Produtos - Ligação Produto/Derivação ao Fabricante | CodEmp;CodPro;CodDer;CodFab;CodFor;ProFab |
| `E075PRF` | Registros de familia de produto | CodEmp;CodPro |
| `E075PRO` | Produtos | CodEmp;CodPro |
| `E075PXT` | Produtos - Ligação Produto X Transação | CodEmp;CodPro;CodTns |
| `E075RAT` | Produtos - Rateios | CodEmp;CodPro;SeqRat |
| `E075RPF` | Produtos - Ligação Produto X Filial | SeqRpf |
| `E075SUB` | Produtos - Substituto | CodEmp;CodPro;CodDer |
| `E075TPR` | Tabela de preço do produto produzido | IdeUni;IdeOpr |
| `E075UDP` | Produtos - Unidades de Despacho do Produto | CodEmp;CodPro;CodDer;CodBar |
| `E075VDR` | Produtos - Alteração de Derivações | CodEmp;CodPro;CodDer;DatAtu;HorAtu;SeqAtu |
| `E075VIN` | Vendas para o mercado interno | IdeUni;IdeOpr |
| `E075VPR` | Produtos - Alteração de Produtos | CodEmp;CodPro;DatAtu;HorAtu;SeqAtu |
| `E076FAB` | Fabricantes | CodFab |
| `E076LMC` | Marcas - Ligação Marca X Condição Pagamento | CodMar;EmpCpg;CodCpg |
| `E076LML` | Marcas - Ligação Marca X Lista de Preço | CodMar;EmpLip;CodLip |
| `E076LMT` | Marcas - Ligação Marca X Tabela de Preço | CodMar;EmpTpr;CodTpr |
| `E076MAR` | Marcas | CodMar |
| `E076TGE` | Tipos de Garantia Estendida | CodEmp;CodTge;TipTge;PrzTge |
| `E077BAN` | Favorecidos - Contas Bancárias | CodFav;SeqBan |
| `E077FAV` | Favorecidos | CodFav |
| `E079ARE` | Áreas da Empresa | CodEmp;CodAre |
| `E080CSE` | Serviços - Características | CodEmp;CodSer;CodCte |
| `E080FSM` | Serviços - Ligação Fornecedor X Serviço X Município | CodEmp;CodFor;CodSer;RaiFor;RaiPrt;DatIni |
| `E080LTP` | Integrações - Sapiens Varejo - Serviço X Transação | CodEmp;CodFil;CodSer |
| `E080RAT` | Serviços - Rateios | CodEmp;CodSer;SeqRat |
| `E080SER` | Serviços | CodEmp;CodSer |
| `E080SXC` | Serviços - Ligação Serviço X CEP | CodEmp;CodSer;CepIni;DatIni |
| `E080SXT` | Serviços - Ligação Serviço X Transação | CodEmp;CodSer;CodTns |
| `E080TSI` | Serviços - Tipos de Serviço | CodEmp;SerImp |
| `E080TXM` | Serviços - Ligação Tipo de Serviço X Município | CodEmp;SerImp;CodRai;DatIni |
| `E083EES` | Exclusão de Espécies de Origens de Produto | CodEmp;CodEso |
| `E083EOR` | Exclusão de Origens de Produto | CodEmp;CodOri |
| `E083ESO` | Espécies de Origens de Produto | CodEmp;CodEso |
| `E083ORI` | Origens de Produto | CodEmp;CodOri |
| `E083TEO` | Tipos de Espécies de Origens de Produto | CodEmp;CodTeo |
| `E084CBM` | Máscara Código do Bem - Componentes | CodEmp;CodMbm;CodMcb |
| `E084CBN` | Combinações da Máscara Produto | CodEmp;CodMpr;CodCpr;SeqCbn |
| `E084CMD` | Máscara Derivação - Componentes | CodEmp;CodMdp;CodDer |
| `E084CME` | Máscara Endereçamento Produto - Componentes | CodEmp;CodMep;CodCme |
| `E084CPC` | Opções da Máscara Produto - Componentes | CodEmp;CodMpc;CodCpc |
| `E084CPJ` | Máscara Projeto - Componentes | CodEmp;CodMpj;CodCpj |
| `E084CPR` | Máscara Produto - Componentes | CodEmp;CodMpr;CodCpr |
| `E084CSL` | Máscara Séries e Lotes - Componentes | CodEmp;CodMsl;CodCsl |
| `E084DFX` | Derivações da Faixa | CodEmp;CodFxa;CodDer |
| `E084DPG` | Proporcionalidade da Faixa da Grade - Derivações | CodEmp;CodFxa;CodPgr;CodDer |
| `E084FXA` | Faixas da Grade | CodEmp;CodFxa |
| `E084LOP` | Liga Opções da Máscara ao Produto | CodEmp;CodMpc;CodCpc;CodPro;CodDer |
| `E084MBM` | Máscara Código do Bem | CodEmp;CodMbm |
| `E084MDP` | Máscara Derivação | CodEmp;CodMdp |
| `E084MEP` | Máscara endereçamento do produto | CodEmp;CodMep |
| `E084MPC` | Opções da Máscara Produto | CodEmp;CodMpc |
| `E084MPJ` | Máscara Projeto | CodEmp;CodMpj |
| `E084MPR` | Máscara Produto | CodEmp;CodMpr |
| `E084MSL` | Máscara Séries e Lotes | CodEmp;CodMsl |
| `E084PGR` | Proporcionalidade da Faixa da Grade - Dados Gerais | CodEmp;CodFxa;CodPgr |
| `E085AEC` | Clientes - Autenticadores Externos de Créditos de Clientes | CodEmp;CodAec |
| `E085AIC` | Clientes - Áreas de Interesse | CodCli;CodAri |
| `E085CAE` | Clientes - Consultas de Autenticadores Externos de Créditos | IdeUni |
| `E085CCA` | Clientes - Categorias Clientes para Análise de Crédito | CodCca |
| `E085CCE` | Clientes - Ligação Cliente X Tipos de Contas X Eventos | CodEmp;CodCli;CodTcc;NumCco;CodEtc |
| `E085CCL` | Clientes - Características | CodCli;CodCcl;SeqOrd |
| `E085CLI` | Clientes | CodCli |
| `E085CNV` | Clientes - Convênio | CodCli;CodCnv |
| `E085COB` | Clientes - Endereços de Cobrança | CodCli;SeqCob |
| `E085COP` | Clientes - Informações de Cooperado | CodCli;SeqCoo |
| `E085CTA` | Clientes - Assuntos X Contatos | CodCli;CodAss;SeqCto |
| `E085CTO` | Clientes - Contatos | CodCli;SeqCto |
| `E085CXC` | Clientes - Ligação Cliente X Tipos de Contas | CodEmp;CodCli;CodTcc;NumCco |
| `E085CXT` | Clientes - Ligação Cliente X Transação | CodCli;CodEmp;CodTns |
| `E085DCV` | Clientes - Convênios - Dependentes | CodCli;CodCnv;DepCnv |
| `E085DEP` | Clientes - Dependentes | CodCli;CodDpd |
| `E085DIA` | Clientes - Dias de Visita/Ligação | CodCli;SeqDia |
| `E085ECL` | Clientes - Exclusões de Clientes | CodCli |
| `E085ECO` | Clientes - Exclusões de Endereços de Cobrança | CodCli;SeqCob |
| `E085ECT` | Clientes - Exclusões de Contatos | CodCli;SeqCto |
| `E085EEN` | Clientes - Exclusões de Endereços de Entrega | CodCli;SeqEnt |
| `E085EEX` | Integrações - Exceção de Exportação | CodInt;CodCli |
| `E085EFI` | Clientes - Exclusões de Dados Pessoa Física | CodCli |
| `E085EFP` | Clientes - Exclusões de Formas de Pagamento | CodCli;CodEmp;CodFil;CodFpg |
| `E085EHC` | Clientes - Exclusões de Históricos de Clientes | CodCli;CodEmp;CodFil |
| `E085EJU` | Clientes - Exclusão de Dados Pessoa Jurídica | CodCli |
| `E085ENT` | Clientes - Endereços de Entrega | CodCli;SeqEnt |
| `E085EOB` | Clientes - Exclusões de Observações | CodCli;SeqObs |
| `E085FIS` | Clientes - Dados Pessoa Física | CodCli |
| `E085FPG` | Clientes - Formas de Pagamento | CodCli;CodEmp;CodFil;CodFpg |
| `E085HBM` | Clientes - Histórico de Bens de Cliente | CodCli;SeqHbm |
| `E085HCL` | Clientes - Históricos | CodCli;CodEmp;CodFil |
| `E085HCO` | Clientes - Histórico de Cooperado | CodCli;SeqCoo;SeqHco |
| `E085HIN` | Clientes - Históricos nos Informantes | CodCli;CodInf |
| `E085IMG` | Clientes - Imagens | CodCli;SeqImg |
| `E085INE` | Clientes - Inscrição Estadual | CodCli;SigUfs |
| `E085JUR` | Clientes - Dados Pessoa Jurídica | CodCli |
| `E085LAF` | Clientes - Ligação Autenticadores Crédito X Filiais | CodEmp;CodAec;CodFil |
| `E085MCL` | Clientes - Ligação Cliente X Marca | CodCli;CodEmp;CodMar |
| `E085OBS` | Clientes - Observações | CodCli;SeqObs |
| `E085OCO` | Clientes - Observações do Cooperado | CodCli;SeqCoo;SeqOco |
| `E085PRO` | Clientes - Propriedades | CodCli;CodPrp |
| `E085PVL` | Clientes - Parâmetros de Visita/Ligação | CodCli |
| `E085RAC` | Clientes - Retorno Autenticadores Externo Créditos | CodCli;CodEmp;CodFil;CodAec;SeqRac |
| `E085RAT` | Clientes - Rateios | CodCli;CodEmp;CodFil;SeqRat |
| `E085REP` | Clientes - Ligação Representante X Cliente | CodCli;CodRep |
| `E085RXC` | Clientes - Relação Cliente X Cliente | CodCli;CliRel |
| `E085SCN` | Clientes  - Segmentos x CNAE | CodCli;CodCna |
| `E085SPC` | Clientes  - Consultas ao SPC | IdeUni |
| `E085SPR` | Clientes - Propriedades - Subpropriedades | CodCli;CodPrp;CodSpr |
| `E085VCL` | Clientes - Histórico de Alteração Fiscal do Cliente | CodCli;DatAtu;HorAtu;SeqAtu |
| `E086BAN` | Sacados - Contas Bancárias | CodSac;SeqBan |
| `E086SAC` | Sacados | CodSac |
| `E087INF` | Referências Comerciais e Bancárias | CodInf |
| `E090CID` | Representantes - Cidades de Atuação | CodRep;CodRai |
| `E090ERE` | Representantes - Exclusões de Representantes | CodRep |
| `E090HCT` | Representantes - Cotas por Agrupamento | CodRep;CodEmp;CodAgt |
| `E090HFR` | Representantes - Hierarquia de Funções | CodEmp;CodFil;CatRep;NivCat |
| `E090HRP` | Representantes - Históricos | CodRep;CodEmp |
| `E090INS` | Representantes - Controle de Retenção de INSS | CodRep;MesAno |
| `E090LRF` | Representantes - Ligação Representante X Fornecedor | CodRep;CodFor |
| `E090MRE` | Representantes - Definições de Representante X Marca | CodRep;CodEmp;CodMar |
| `E090OBS` | Representantes - Observações | CodRep;SeqObs |
| `E090RAT` | Representantes - Rateios | CodRep;CodEmp;SeqRat |
| `E090RCP` | Representantes - Ligação Representante X Condição Pagamento | CodRep;CodMar;EmpCpg;CodCpg |
| `E090REP` | Representantes | CodRep |
| `E090RLI` | Representantes - Ligação Representante X Lista de Preços | CodRep;CodMar;EmpLip;CodLip |
| `E090RTP` | Representantes - Ligação Representante X Tabela de Preços | CodRep;CodMar;EmpTpr;CodTpr |
| `E090VRE` | Representantes - Histórico de Alteração Fiscal do Representante | CodRep;DatAtu;HorAtu;SeqAtu |
| `E094CET` | Especificações Conformidade  Produto - Componentes | CodEmp;CodEct;SeqCet |
| `E094ECT` | Especificações Conformidade  Produto | CodEmp;CodEct |
| `E095AIF` | Fornecedores - Áreas de Interesse | CodFor;CodAri |
| `E095BAN` | Fornecedores - Contas Bancárias | CodFor;SeqBan |
| `E095CFO` | Fornecedores - Características | CodFor;CodCcl;SeqOrd |
| `E095CTA` | Fornecedores - Assunto X Contato | CodFor;CodAss;SeqCto |
| `E095CTO` | Fornecedores - Contatos | CodFor;SeqCto |
| `E095DAA` | Fornecedores - DAP - Acessória Associadas | CodDap;CodDaa |
| `E095DAP` | Fornecedores - DAP - Declaração de Aptidão ao Pronaf | CodDap |
| `E095DEP` | Fornecedores - Dependentes | CodFor;CodDpd |
| `E095ECT` | Fornecedores - Exclusão de Contatos | CodFor;SeqCto |
| `E095EED` | Fornecedores - Recibo de Pagamento Autônomo de Terceiros | CodFor;MesAno;IdeUni |
| `E095EFO` | Fornecedores - Exclusões de Fornecedores | CodFor |
| `E095FCP` | Fornecedores - Chaves PIXs | CodEmp;CodFil;CodFor;SeqChv |
| `E095FOR` | Fornecedores - Cadastros | CodFor |
| `E095FPG` | Fornecedores - Formas de Pagamento | CodFor;CodEmp;CodFil;CodFpg |
| `E095FXS` | Fornecedores - Ligação Fornecedor X Série | CodFor;CodEmp;CodFil;CodSnf |
| `E095FXT` | Fornecedores - Ligação Fornecedor X Transação | CodFor;CodEmp;CodTns |
| `E095HFO` | Fornecedores - Históricos | CodFor;CodEmp;CodFil |
| `E095INE` | Fornecedores - Inscrição Estadual | CodFor;SigUfs |
| `E095INS` | Fornecedores - Controle de Retenção de INSS | CodFor;MesAno |
| `E095LLT` | Ligação da Lotação Tributária x Fornecedor por Filial | IdeUni |
| `E095LOT` | Lotação Tributária | IdeUni |
| `E095OBS` | Fornecedores - Observações | CodFor;SeqObs |
| `E095ORM` | Fornecedores - Origem das Mercadorias | CodFor;SeqOrm |
| `E095ORM_REC` | Recebimento de Documentos Eletrônicos - Fornecedores - Origem das Mercadorias | CgcCpf;SeqOrm |
| `E095RAT` | Fornecedores - Rateios | CodFor;CodEmp;CodFil;SeqRat |
| `E095SCN` | Fornecedores - Segmentos x CNAE | CodFor;CodCna |
| `E095VFO` | Fornecedores - Histórico de Alteração Fiscal do Fornecedor | CodFor;DatAtu;HorAtu;SeqAtu |
| `E099ALS` | Usuários - Agrupamentos Liberados para Compras | CodEmp;CodUsu;CodAgc |
| `E099CCH` | Cotas de Compra por Competência - Histórico de alterações | CodEmp;DatAlt;SeqAlt |
| `E099CCO` | Usuários - Cotas de Compra por Competência | CodEmp;CodUsu;CcoCpr;CodAgc |
| `E099CER` | Usuários - Certificados Digitais | CodEmp;CodFil;CodUsu |
| `E099CPR` | Usuários - Cotas de Compra por Competência | CodEmp;CodUsu |
| `E099FIN` | Usuários - Finanças | CodEmp;CodUsu |
| `E099GCO` | Usuários - Parâmetros Gestão Controladoria | CodEmp;CodUsu |
| `E099IPE` | Usuários - Tabela log de processos executados por usuário | IdeUni |
| `E099LAE` | Usuários - Cadastro no Autenticador de Crédito | CodEmp;CodUsu;CodAec |
| `E099PAR` | Usuários - Parâmetros Fluxo de Caixa (2) | CodEmp;CodUsu |
| `E099PAS` | Usuários - Parâmetros Fluxo de Caixa (2) - Distribuição Títulos Anteriores | CodEmp;CodUsu;SeqPas |
| `E099PAT` | Usuários - Simulação de Transferência de Saldos Bancários | CodEmp;CodUsu |
| `E099TPG` | Usuários - Últimos Parâmetros Solicitados | CodEmp;CodUsu;CodTpg |
| `E099TTM` | Usuários - Dados de login com TTM da TAN | CodEmp;CodUsu;CodAec;CodFil |
| `E099UCP` | Usuários - Parâmetros Compras | CodEmp;CodUsu |
| `E099UDE` | Usuários - Parâmetros Documentos Eletrônicos | CodEmp;CodUsu |
| `E099UPA` | Usuários - Tabela processos executados por usuário | IdeUni |
| `E099UPF` | Usuários - Parâmetros por fiial | CodEmp;CodUsu;CodFil |
| `E099USE` | Usuários - Extenção | CodEmp;CodUsu |
| `E099USU` | Usuários | CodEmp;CodUsu |
| `E099UVE` | Usuários - Parâmetros Vendas | CodEmp;CodUsu |
| `E099UXB` | Usuários X Contas Contábeis Liberadas | CodEmp;CodUsu;CtaRed |
| `E099UXB_HIS` | Histórico - Usuários X Contas Contábeis Liberadas | CodEmp;CodMpc;CodUsu;CtaRed |
| `E099UXC` | Usuários X Contas Internas Bloqueadas | CodEmp;CodUsu;NumCco |
| `E099UXF` | Usuários X Contas Financeiras Liberadas | CodEmp;CodUsu;CtaFin |
| `E099UXP` | Usuários X Produtos e Derivações Liberadas | CodEmp;CodUsu;CodPro;CodDer |
| `E099UXT` | Usuários X Transações Bloqueadas | CodEmp;CodUsu;CodTns |
| `E099UXU` | Usuários X Centro de Custos Liberados | CodEmp;CodUsu;CodCcu |

## Chaves de negócio ERP XT e SeniorX

| Tabela | Descrição | PK |
| --- | --- | --- |
| `RTC_ERPX_CHAVE_FIN_TIT_CP` | Títulos de contas a pagar | ID |
| `RTC_ERPX_CHAVE_FIN_TIT_CR` | Títulos de contas a receber | ID |
| `RTC_ERPX_CHAVE_FND_ORI_MER` | Fornecedores - Origem das Mercadorias | ID |
| `RTC_ERPX_CHAVE_FND_PESSOA` | Fornecedores | ID |
| `RTC_ERPX_CHAVE_SUP_NFC` | Notas fiscais de entrada | ID |
| `RTC_ERPX_CHV_FND_LIG_PRODEP` | Produtos por Depósito | ID |

## Compra

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E101CCL` | Controle de Classificação de Laudo | IdeCcl |
| `E101ICL` | Controle de Itens de Classificação de Laudo | IdeCcl;CodTcl |

## Compra/Serviços

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E440LCR` | Notas Fiscais de Entrada - Itens de Produto - Ligação Entre Itens de Produto de Notas Fiscais de Entrada por Compra/Serviço e Retorno. | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIpc;SeqIsc;EmpNrc;FilNrc;ForNrc;NumNrc;SnfNrc;IpcNrc |

## Compras

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E115NFC` | Notas Fiscais de compra vínculadas a pesagem | IdeUni |
| `E115OCP` | Ordens de compra vínculadas a pesagem | IdeUni |
| `E403EFP` | Exclusões de Fornecedores por Produtos | CodEmp;CodFor;CodPro;CodDer;SigUfs;CodTns |
| `E403FPR` | Fornecedores por Produtos | CodEmp;CodFor;CodPro;CodDer;SigUfs;CodTns |
| `E403FSE` | Fornecedores por Serviços | CodEmp;CodFor;CodSer |
| `E405MOD` | Solicitações de Compra - Modalidades | CodEmp;CodMod |
| `E405OBS` | Solicitações de Compra - Observações | CodEmp;NumSol;SeqSol;SeqObs |
| `E405PRI` | Solicitações de Compra - Prioridades | CodEmp;CodPri |
| `E405RAT` | Solicitações de Compra - Rateios | CodEmp;NumSol;SeqSol;SeqRat |
| `E405SOL` | Solicitações de Compra - Dados Gerais | CodEmp;NumSol;SeqSol |
| `E410COT` | Cotações - Preços dos Produtos e Serviços | CodEmp;NumCot;SeqCot |
| `E410CPE` | Cotações - Parcelas de Entrega | CodEmp;NumCot;SeqCot;SeqCpe |
| `E410CSE` | Cotações - Preços dos Serviços | CodEmp;NumCot;SeqCot |
| `E410FPC` | Processo de Cotação - Fornecedores Selecionados | CodEmp;NumPct;CodFor |
| `E410LCO` | Cotações - Ligação com a Ordem de Compra | CodEmp;NumCot;SeqCot;SeqLco |
| `E410LIC` | Processo de Cotação - Licitações | CodEmp;NumPct |
| `E410OBS` | Cotações - Observações | CodEmp;NumCot;SeqCot;SeqObs |
| `E410PCT` | Processo de Cotação | CodEmp;NumPct |
| `E410SAV` | Cotações - Histórico de Rodadas | CodEmp;NumPct;NumCot;SeqCot;SeqSav |
| `E420ACF` | Ordens de Compra - Itens de Produto - Acréscimo Financeiro | CodEmp;CodFil;NumOcp;SeqIpo;FilCtr;NumCtr;DatCpt;SeqCcp;CodIcl |
| `E420CCO` | Ordens de Compra - Cotas de Compra por Competência | CodEmp;CodFil;NumOcp;SeqCco |
| `E420DLS` | Ordens de Compra - Entrada, Vencimento, Lote, Série | CodEmp;CodFil;NumOcp;SeqIpo;SeqDls |
| `E420IPO` | Ordens de Compra - Itens de Produto | CodEmp;CodFil;NumOcp;SeqIpo |
| `E420IPR` | Ordens de Compra - Itens de Produto - Reforma tributária | CodEmp;CodFil;NumOcp;SeqIpo;CodImp |
| `E420ISO` | Ordens de Compra - Itens de Serviço | CodEmp;CodFil;NumOcp;SeqIso |
| `E420ISR` | Ordens de Compra - Itens de Serviço - Reforma tributária | CodEmp;CodFil;NumOcp;SeqIso;CodImp |
| `E420OBS` | Ordens de Compra - Observações | CodEmp;CodFil;NumOcp;SeqObs |
| `E420OCP` | Ordens de Compra - Dados Gerais | CodEmp;CodFil;NumOcp |
| `E420OXO` | Ordens de Compra - Ligação OC x OC | CodEmp;CodFil;NumOcp;SeqIpo;SeqIso |
| `E420PAR` | Ordens de Compra - Parcelas | CodEmp;CodFil;NumOcp;SeqPar |
| `E420PER` | Ordens de Compra - Percentual de Participação por Fornecedor | CodEmp;CodFil;NumOcp;CodFor |
| `E420RAT` | Ordens de Compra - Rateios | CodEmp;CodFil;NumOcp;SeqRat |
| `E426CLE` | Coleta de Produtos em Fornecedores - Dados Gerais | CodEmp;CodFil;NumCle |
| `E426ICL` | Coleta de Produtos em Fornecedores - Itens | CodEmp;CodFil;NumCle;SeqIcl |
| `E435BLO` | Bloqueio de produtos | CodFor;SeqBlo |
| `E435IBL` | Bloqueio de produtos - Itens | CodFor;SeqBlo;CodEmp;CodFil;NumOcp;SeqIpo |
| `E435OBS` | Observações | CodFor;SeqBlo;SeqObs |
| `E439FIX` | Fixação de Preços | CodEmp;CodFil;NumFix |
| `E439PAR` | Fixação de Preços - Parcelas | CodEmp;CodFil;NumFix;SeqPar |
| `E439PRF` | Tabelas - Proposta de Fixação | SeqPrf |
| `E439TAX` | Fixação de Preços - Taxas - Itens | CodEmp;CodFil;NumFix;CodItx;FilOcp;NumOcp;SeqIpo;TipPtx;DatIni;DatFim |
| `E440AVB` | Notas Fiscais de Entrada - Seguro da Carga - Averbação | CodEmp;CodFil;CodSnf;NumNfc;SeqSeg;SeqAvb |
| `E440CCE` | Notas Fiscais de Entrada - Controle de eventos de documentos eletrônicos | CodEmp;CodFil;CodFor;NumNfc;CodSnf;TipEve;SeqEve |
| `E440CDV` | Contagens de Produtos - Divergências | CodEmp;CodFil;NumCnt;SeqDiv |
| `E440CEC` | Notas Fiscais de Entrada - Controle de eventos de documentos eletrônicos - Eventos do conhecimento de transporte eletrônico | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqEve;TipEve;SeqCec |
| `E440CMC` | Notas Fiscais de Entrada - Controle de Movimento de Cooperado | IdeUni |
| `E440CMP` | Notas Fiscais de Entrada - Manifesto Documento Fiscal - Componentes do Pagamento | CodEmp;CodFil;CodSma;NumMan;SeqCmp |
| `E440CNF` | Contagens de Produtos - Notas Conferência | CodEmp;CodFil;NumCnt;SeqCnt |
| `E440CNT` | Contagens de produtos - Dados Gerais | CodEmp;CodFil;NumCnt |
| `E440DAC` | Notas Fiscais de Entrada - Dias de Aquisição de Cana | CodEmp;CodFil;CodFor;NumNfc;CodSnf;DiaAqi |
| `E440DCI` | Notas Fiscais de Entrada - Detalhamento por Classificação dos Itens | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqCla |
| `E440DDC` | Notas Fiscais de Entrada - Taxas e Contribuições Cana de Açúcar | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqDdc |
| `E440DFP` | Notas Fiscais de Entrada - Itens de Produto - Dispositivos Fiscais | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIpc;SeqDis |
| `E440DFS` | Notas Fiscais de Entrada - Itens de Serviço - Dispositivos Fiscais | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIsc;SeqDis |
| `E440DLS` | Notas Fiscais de Entrada - Entrada, Vencimento, Lote, Série | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIpc;SeqDls |
| `E440DPR` | Nota Fiscal de Entrada - Documento Fiscal Produtor Rural | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqDpr |
| `E440EED` | Notas Fiscais de Entrada - Recibo de Pagamento Autônomo de Terceiros | IdeUni |
| `E440EXF` | Notas Fiscais de Entrada - Ligação Notas de Frete | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqExf |
| `E440EXS` | Ligação entre nota de entrada e nota de saída | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqExs |
| `E440HAR` | Notas Fiscais de Entrada - Histórico de arredondamento | CodEmp;CodFil;DatAlt;SeqAlt |
| `E440ICT` | Contagens de Produtos - Itens | CodEmp;CodFil;NumCnt;SeqCnt |
| `E440IMD` | Notas Fiscais de Entrada - Itens de Manifesto Documento Fiscal | CodEmp;CodFil;CodSma;NumMan;SeqImd |
| `E440IMP` | Notas Fiscais de Entrada - Impostos por Produto nos itens de Nota Fiscal | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIpc;CodImp |
| `E440IPC` | Notas Fiscais de Entrada - Itens de Produto | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIpc |
| `E440IPR` | Notas Fiscais de Entrada - Itens de Produto - Reforma tributária | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIpc;CodImp |
| `E440IRO` | Notas Fiscais de Entrada - Créditos de Royalties dos Itens de Produto | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIpc |
| `E440ISC` | Notas Fiscais de Entrada - Itens de Serviço | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIsc |
| `E440ISR` | Notas Fiscais de Entrada - Itens de Serviço - Reforma tributária | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIsc;CodImp |
| `E440LAC` | Notas Fiscais de Entrada - Itens de Manifesto Lacres | CodEmp;CodFil;CodSnf;NumNfc;SeqImd;SeqLac;SeqUnt;SeqUnc |
| `E440LNP` | Ligação Entre Itens de Produto de Notas Fiscais de Entrada | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIpc;SeqLnp |
| `E440LNS` | Ligação Entre Itens de Serviço de Notas Fiscais de Entrada | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIsc;SeqLns |
| `E440LPN` | Ligação Entre Itens de Produto de Notas Fiscais de Entrada e Saída | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIpc;SeqLpn |
| `E440LSN` | Ligação Entre Itens de Serviço de Notas Fiscais de Entrada e Saída | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIsc;SeqLsn |
| `E440MDE` | Controle de eventos da manifestação do destinatário | CodEmp;CodFil;ChvNel;TipEve;SeqEve |
| `E440MDF` | Notas Fiscais de Entrada - Manifesto Documento Fiscal | CodEmp;CodFil;CodSma;NumMan |
| `E440MDP` | Notas Fiscais de Entrada - Manifesto Documento Fiscal - Parcelas | CodEmp;CodFil;CodSma;NumMan;NumPar |
| `E440MNC` | Notas Fiscais de Entrada - Mensagens | SeqMnc |
| `E440NFC` | Notas Fiscais de Entrada - Dados Gerais | CodEmp;CodFil;CodFor;NumNfc;CodSnf |
| `E440NFG` | Notas Fiscais de Entrada - Dados Gerais - Extensão | CodEmp;CodFil;CodFor;NumNfc;CodSnf |
| `E440NFR` | Nota referenciada da nota fiscal de entrada | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqNfr |
| `E440NIM` | Notas Fiscais de Entrada - Impostos item de Produto da Nota Fiscal | CodEmp;CodFil;CodFor;NumNfc;CodSnf;CodImp |
| `E440OBS` | Notas Fiscais de Entrada - Observações | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqObs |
| `E440PAR` | Notas Fiscais de Entrada - Parcelas | CodEmp;CodFil;CodFor;NumNfc;CodSnf;CodPar |
| `E440PCD` | Notas Fiscais de Entrada - Itens de Produto - Diversos | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIpc |
| `E440PPE` | Nota Fiscal de Entrada - Dados do MDFe - Produto Perigoso | CodEmp;CodFil;CodSnf;NumNfc;SeqImd;SeqPpe |
| `E440RAC` | Notas Fiscais de Entrada - Registro de Aquisição de Cana | CodEmp;CodFil;CodFor;NumNfc;CodSnf |
| `E440RAT` | Notas Fiscais de Entrada - Rateios | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqRat |
| `E440RCI` | Notas Fiscais de Entrada - Registro de Entrada de produtos para controle de impostos | IdeRci |
| `E440RMD` | Notas Fiscais de Entrada - Rotas do Manifesto Documento Fiscal | CodEmp;CodFil;CodSma;NumMan;SeqRmd;SeqImd |
| `E440SEG` | Notas Fiscais de Entrada - Itens de Manifesto Seguro da Carga | CodEmp;CodFil;CodSnf;NumNfc;SeqSeg |
| `E440TAX` | Notas Fiscais de Entrada - Itens de Produtos - Taxas | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIpc;CodItx;TipPtx;DatIni;DatFim |
| `E440TSV` | Notas Fiscais de Entrada - Itens de Produtos - NF Taxas Serviço | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqIpc;CodItx;TipPtx;DatIni;DatFim |
| `E440UNC` | Notas Fiscais de Entrada - Itens de Manifesto Unidades de Carga | CodEmp;CodFil;CodSnf;NumNfc;SeqImd;SeqUnc |
| `E440UNT` | Notas Fiscais de Entrada - Itens de Manifesto Unidades de Transporte | CodEmp;CodFil;CodSnf;NumNfc;SeqImd;SeqUnt |
| `E440VPE` | Nota Fiscal de Entrada - Manifesto de Documentos Fiscais - Vale Pedágio | CodEmp;CodFil;CodSnf;NumNfc;SeqVpe |
| `E440VPP` | Notas Fiscais de Entrada - Valorização - Produto | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqVpp |
| `E440VPR` | Notas Fiscais de Entrada - Valorização | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqVpr |
| `E440VPS` | Notas Fiscais de Entrada - Valorização - Serviço | CodEmp;CodFil;CodFor;NumNfc;CodSnf;SeqVps |
| `E441DLS` | Contagem de Produtos - Entrada, Vencimento, Lote, Série | CodEmp;CodFil;NumCnt;SeqCnt;SeqDls |
| `E445NFC` | Notas Fiscais de Saída utilizadas como Crédito para o produtor rural | CodEmp;CodFil;CodFor;SeqOrm;SeqPrc;SeqCre |
| `E445NFG` | Notas Fiscais com Recuperação do Crédito | CodEmp;CodFil;CodFor;SeqOrm;SeqPrc;SeqNfg |
| `E445NFP` | Notas Fiscais de Entrada utilizadas na Produção do produtor rural | CodEmp;CodFil;CodFor;SeqOrm;SeqPrc;SeqPro |
| `E445PAR` | Parcelas para Recuperação do Crédito | CodEmp;CodFil;CodFor;SeqOrm;SeqPrc;SeqCre;SeqPar |
| `E445PRC` | Processo de Controle de Créditos | CodEmp;CodFil;CodFor;SeqOrm;SeqPrc |
| `E450NFC` | Notas Fiscais Fatura - Composição | CodEmp;CodFil;NumNff;CodFor;NumNfc |
| `E450NFF` | Notas Fiscais Fatura - Dados Gerais | CodEmp;CodFil;NumNff;CodFor |
| `E450PNF` | Notas Fiscais Fatura - Parcelas | CodEmp;CodFil;NumNff;CodFor;NumPar |
| `E450RAT` | Notas Fiscais Fatura - Rateios | CodEmp;CodFil;NumNff;CodFor;SeqRat |
| `E460APL` | Contratos - Aplicações | CodEmp;CodApl |
| `E460CCP` | Contratos - Itens de Produto | CodEmp;CodFil;NumCtr;DatCpt;SeqCcp |
| `E460CCS` | Contratos - Itens de Serviço | CodEmp;CodFil;NumCtr;DatCpt;SeqCcs |
| `E460CTR` | Contratos - Dados Gerais | CodEmp;CodFil;NumCtr |
| `E460DOC` | Contratos - Documentos | CodEmp;CodFil;NumCtr;SeqDoc |
| `E460EVE` | Contratos - Eventos | CodEmp;CodFil;NumCtr;SeqEve |
| `E460HAS` | Contratos - Participação Fornecedores - Auxilar - Hash | CodEmp;CodFil;NumCtr;CodFor |
| `E460ICL` | Contratos - Itens de classificação | CodEmp;CodFil;CodIcl;NumCtr;DatCpt;SeqCcp;TipIcl |
| `E460IFO` | Contratos - Rateio das Formas de Pagamento por Fornecedor | CodEmp;CodFil;NumCtr;SeqImo;CodFor;CodFav;SeqBan |
| `E460IMO` | Contratos - Itens das Formas de Pagamento | CodEmp;CodFil;NumCtr;SeqImo |
| `E460IPR` | Contratos - Itens de Produto - Reforma tributária | CodEmp;CodFil;NumCtr;DatCpt;SeqCcp;CodImp |
| `E460ISR` | Contratos - Itens de Serviço - Reforma tributária | CodEmp;CodFil;NumCtr;DatCpt;SeqCcs;CodImp |
| `E460OBS` | Contratos - Observações | CodEmp;CodFil;NumCtr;SeqObs |
| `E460PAR` | Contrado de compras - Parcelas | CodEmp;CodFil;NumCtr;SeqPar |
| `E460PDC` | Contratos - Participação Fornecedores - Distribuição Condição de Pagamento para Compra Imediata | CodEmp;CodFil;NumCtr;DatCpt;SeqCcp;CodFor;CodCpg |
| `E460PFO` | Contratos - Participação Fornecedores | CodEmp;CodFil;NumCtr;DatCpt;SeqCcp;CodFor |
| `E460RAT` | Contratos - Rateios | CodEmp;CodFil;NumCtr;SeqRat |
| `E460REA` | Contratos - Históricos | CodEmp;CodFil;NumCtr;DatCpt;SeqCcs;SeqCcp;UltRea |
| `E460TAX` | Contratos - Taxas no Contrato | CodEmp;CodFil;NumCtr;DatCpt;SeqCcp;CodItx;TipPtx;DatIni;DatFim |
| `E460USU` | Contratos - Usuários Liberadores de Eventos | CodEmp;CodFil;NumCtr;SeqEve;CodUsu |

## Configuração da Tela de Pesquisa de Registros

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R999PSF` | Campos | NomPsq;CodUsu;SrcFrm;FldNam |

## Cont. Custos

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E630FOC` | Quantidades Finalizadas por Estágio/C.C. | NumMtc;CodOri;NumOrp;CodEtg;CodCcu;TipMpe |
| `E630LOG` | Logs | DatGer;SeqLog |
| `E630PCC` | Parâmetros da Contabilidade de Custos | NumMtc |
| `E630SPE` | Saldos de Produtos por Estágio | NumMtc;CodPro;CodDer;CodEtg;CodCcu;CodOri;NumOrp;TipMpe |
| `E631CMC` | Consumo de Materiais p/ CC | NumMtc;CodCcu;CodOri;NumOrp;CodPro;CodDer |
| `E631CPT` | Consumo Padrão de Tempo p/ CC | NumMtc;CodCcu;CodOri;NumOrp |
| `E631MCP` | Movimentação a Custo Padrão p/ CC | NumMtc;CodEtg;CodCcu;CodPro;CodDer;CodOri;NumOrp;TipMpe;McpEos;TipVal;CodGng |
| `E631SCP` | Saldos de Produtos a Custo Padrão p/ CC | NumMtc;CodEtg;CodCcu;CodPro;CodDer;CodOri;NumOrp |
| `E631TNG` | Taxa por natureza de gasto | NumMtc;CodCcu;CodNtg |
| `E631VCP` | Variação de Custo dos Processos | NumMtc;CodCcu;CodGng;CodOri;NumOrp |
| `E631VMC` | Variação de Materiais por Centro de Custo | NumMtc;CodCcu;CodPro;CodDer;CodOri;NumOrp |
| `E632CAO` | Custo Ajustado por Ordem de Produção | NumMtc;CodPro;CodDer;CodOri;NumOrp |
| `E632CPA` | Custo Ajustado dos Produtos | NumMtc;CodPro;CodDer |
| `E632CPM` | Custo dos Produtos (Matérias-Primas) | NumMtc;CodPro;CodDer;SeqCpm |
| `E632DIV` | Valores de entradas diversas na O.P. | NumMtc;CodOri;NumOrp;SeqDiv |
| `E632PFO` | Controle de ajuste de custos por níveis de origem | NumMtc;NumOri |
| `E632VIN` | Variação de intermediários | NumMtc;CodPro;CodDer;CodOri;NumOrp |
| `E633AOP` | Análise de Desempenho de O.P. | CodAop |
| `E633IOP` | Itens de Análise de Desempenho de O.P. | CodAop;AbsInd |
| `E633POP` | Parâmetros da Análise de Desempenho da O.P. | CodAop;TipMtc;NumPar |
| `E634CPR` | Custo da Produção | NumMtc;DatMov;CodOri;NumOrp;CodEtg;CodCcu;CodCmp;DerCmp |
| `E636MNT` | Custos de Manutenção | NumMtc;CodEmp;CodEqp;NumMnt;CodCcu |

## Controladoria

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E043MDP` | Gestão de Contabilidade - Transferência de Saldos de Plano de Contas Anterior | CodEmp;CodMpc;SeqMpc |
| `E043PPC` | Percentual Plano de Contas Referencial | CodEmp;AbrFil;CodAfi;MesAno;CtaRed |
| `E660ATA` | Tributos - Apuração das tarifas bancárias | IdeUni |
| `E660DAR` | Tributos - Demonstrativo apuração da receita tributável e ISSQN devido por substituto | IdeUni |
| `E660DCL` | Tributos - Detalhamento por Cliente/Fornecedor do demonstrativo apuração da receita tributável e ISSQN devido por substituto | IdeUni |
| `E660DDI` | Tributos -  Detalhamento por Data Movimentação do demonstrativo apuração da receita tributável e ISSQN devido por substituto | IdeUni |

## Controle de Aprovação Multinível

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E614USU` | Registro de Operações Efetuadas | CodEmp;CodFil;RotNap;NumApr;SeqApr |

## Contábil

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E046RAT` | Lançamentos - Rateios |  |
| `E640CFT` | SPED - Fato Contábil (DMPL/DLPA) - Composição | CodEmp;NumFtc;NumLct;DebCre |
| `E640CFT_HIS` | Histórico - SPED - Fato Contábil (DMPL/DLPA) - Composição | CodEmp;CodMpc;NumFtc;NumLct;DebCre |
| `E640DRS` | Detalhes Razão Auxiliar das Subcontas | CodEmp;IdeRas;IdeDrs |
| `E640FTC` | SPED - Fato Contábil (DMPL/DLPA) | CodEmp;NumFtc |
| `E640LCT` | Lançamento - Lançamentos Contábeis | CodEmp;NumLct |
| `E640LCT_HIS` | Histórico - Lançamento - Lançamentos Contábeis | CodEmp;CodMpc;NumLct |
| `E640LCT_TMP` | Lançamento - Lançamentos Contábeis - Temporária |  |
| `E640LOG` | Lançamento - LOG's | CodEmp;NumLot;NumLct;SeqLog |
| `E640LOT` | Lançamento - Lotes | CodEmp;NumLot |
| `E640LOT_HIS` | Histórico - Lançamento - Lotes | CodEmp;CodMpc;NumLot |
| `E640LTR` | Lançamento - Lotes Relacionados | CodEmp;NumLot;DatPrc |
| `E640RAS` | Razão Auxiliar das Subcontas | CodEmp;IdeRas |
| `E640RAT` | Lançamento - Rateios | CodEmp;NumLct;CtaRed;CodCcu |
| `E640RAT_HIS` | Histórico - Lançamento - Rateios | CodEmp;CodMpc;NumLct;CtaRed;CodCcu |
| `E640RCP` | Lançamento - Relacionamento - Lançamentos Contábeis x Contra Partidas | CodRcp |
| `E640RCP_HIS` | Histórico - Lançamento - Relacionamento - Lançamentos Contábeis x Contra Partidas | CodRcp;CodMpc |
| `E642LCT` | Lançamento - Lançamentos Auxiliares | CodEmp;NumLct;CtaRed;CtaAux;SeqLct |
| `E642LCT_HIS` | Histórico - Lançamento - Lançamentos Auxiliares | CodEmp;CodMpc;NumLct;CtaRed;CtaAux;SeqLct |
| `E643LCA` | Lançamento - Composição Auxiliar dos Lançamentos Programados | CodEmp;CodFil;CodPrg;CtaRed;CtaAux;SeqLct |
| `E643LPG` | Lançamento - Lançamentos Programados | CodEmp;CodFil;CodPrg |
| `E643RAT` | Lançamento - Rateios de Lançamentos Programados | CodEmp;CodFil;CodPrg;CtaRed;CodCcu |
| `E643RLP` | Lançamento - Relacionamento Lançamentos X Programação | CodEmp;CodFil;CodPrg;SeqPrg |
| `E644LAM` | Lançamento - Lançamentos X Ajuste Valor de Mercado | CodEmp;NumLct;SeqLct |
| `E644LCO` | Lançamento - Lançamentos X Comissões | CodEmp;NumLct;SeqLct |
| `E644LES` | Lançamento - Lançamentos X Estoques | CodEmp;NumLct;SeqLct |
| `E644LFF` | Lançamento - Lançamentos X Faturas | CodEmp;NumLct;SeqLct |
| `E644LIB` | Lançamento - Lançamentos X Unidade Imobiliária Vendida | CodEmp;NumLct;SeqLct |
| `E644LIC` | Lançamento - Lançamentos X Tributos (Cálculos) | CodEmp;NumLct;SeqLct |
| `E644LIM` | Lançamento - Lançamentos X Tributos (Notas Fiscais) | CodEmp;NumLct;SeqLct |
| `E644LIO` | Lançamento - Lançamentos X Tributos (Outros Documentos) | CodEmp;NumLct;SeqLct |
| `E644LMA` | Lançamento - Lançamentos X Ajuste Financeiro | CodEmp;NumLct;SeqLct |
| `E644LNF` | Lançamento - Lançamentos X Notas Fiscais | CodEmp;NumLct;SeqLct |
| `E644LPA` | Lançamento - Lançamentos X Patrimônio | CodEmp;NumLct;SeqLct |
| `E644LPR` | Lançamento - Lançamentos X Projetos | CodEmp;NumLct;SeqLct |
| `E644LRP` | Lançamento - Lançamentos X Recibo de Pagamento Autônomo | CodEmp;NumLct;SeqLct |
| `E644LRZ` | Lançamento - Lançamentos X Tributos (Redução Z) | CodEmp;NumLct;SeqLct |
| `E644LTC` | Lançamento - Lançamentos X Cota Capital | CodEmp;NumLct;SeqLct |
| `E644LTE` | Lançamento - Lançamentos X Tesouraria | CodEmp;NumLct;SeqLct |
| `E644LTI` | Lançamento - Lançamentos X Títulos | CodEmp;NumLct;SeqLct |
| `E644LVC` | Lançamento - Lançamentos X Variação Cambial | CodEmp;NumLct;SeqLct |
| `E645CAP` | Fatos Contábeis  X Comissões | IdeUni |
| `E645CCR` | Fatos Contábeis X Aplicação\Captação Recursos | IdeUni |
| `E645CFC` | Lançamento - Conciliação Fornecedores/Clientes | CodEmp;NumCon;SeqCon |
| `E645CRP` | Fatos Contábeis X Tributos (Cálculos) | IdeUni |
| `E645FAT` | Fatos Contábeis | CodEmp;NumFtc |
| `E645FIX` | Fatos Contábeis X Fixação | IdeUni |
| `E645FUF` | Fatos Contábeis X Chave Única Financeira | IdeUni |
| `E645ICO` | Fatos Contábeis X Tributos Compras | IdeUni |
| `E645IVI` | Fatos Contábeis X Unidade Imobiliária Vendida - Custo Incorrido | IdeUni |
| `E645IVO` | Fatos Contábeis X Unidade Imobiliária Vendida - Custo Orçado | IdeUni |
| `E645IVR` | Fatos Contábeis X Unidade Imobiliária Vendida - Valores Recebidos | IdeUni |
| `E645LIC` | Fatos Contábeis X Tributos (Cálculos) | IdeUni |
| `E645LIG` | Fatos Contábeis X  Estoque - Transferência | IdeUni |
| `E645LIM` | Fatos Contábeis X Tributos (Notas Fiscais) | IdeUni |
| `E645LIO` | Fatos Contábeis X Tributos (Outros Documentos) | IdeUni |
| `E645LRZ` | Fatos Contábeis - Redução Z - Movimento | IdeUni |
| `E645LTC` | Fatos Contábeis X Cota Capital | IdeUni |
| `E645LVC` | Fatos Contábeis X  Variação Cambial | IdeUni |
| `E645MAP` | Fatos Contábeis X Movimentos Ajuste Valor Presente | IdeUni |
| `E645MAR` | Fatos Contábeis X Movimentos Ajuste Valor Presente | IdeUni |
| `E645MCC` | Fatos Contábeis X Tesouraria | IdeUni |
| `E645MCP` | Fatos Contábeis X Contas a Pagar | IdeUni |
| `E645MCR` | Fatos Contábeis X Contas a Receber | IdeUni |
| `E645MPA` | Fatos Contábeis X Patrimônio | IdeUni |
| `E645MPJ` | Fatos Contábeis X Projetos | IdeUni |
| `E645MVA` | Fatos Contábeis X C. Pagar - Movimentos Variação Cambial | IdeUni |
| `E645MVP` | Fatos Contábeis X Movimentos Ajuste Valor Presente | IdeUni |
| `E645MVR` | Fatos Contábeis X C. Receber - Movimentos Variação Cambial | IdeUni |
| `E645NFC` | Fatos Contábeis X Nota Fiscal de Entrada | IdeUni |
| `E645NFF` | Fatos Contábeis X Notas Fiscais Fatura | IdeUni |
| `E645NFV` | Fatos Contábeis X Nota Fiscal de Saída | IdeUni |
| `E645PAM` | Fatos Contábeis X C. Pagar - Movimentos Ajuste Valor de Mercado | IdeUni |
| `E645RAM` | Fatos Contábeis X C. Receber - Movimentos Ajuste Valor de Mercado | IdeUni |
| `E645TRF` | Fatos Contábeis X Transferências | IdeUni |
| `E645UIV` | Fatos Contábeis X Unidade Imobiliária Vendida | IdeUni |
| `E648LCT` | Lançamento - Lançamentos Contábeis Convertidos | CodEmp;NumLct |
| `E648LCT_HIS` | Histórico - Lançamento - Lançamentos Contábeis Convertidos | CodEmp;CodMpc;NumLct |
| `E648LOG` | Lançamento Convertido - LOG's | CodEmp;NumLot;NumLct;SeqLog |
| `E650AJU` | Ajuste Contábil | CodEmp;CodAju |
| `E650DIF` | Saldo - Diferenças por Dia | CodEmp;CodFil;DatDif |
| `E650ELI` | Saldos - Histórico de Eliminações (Intercompany) | IdeUni |
| `E650EMI` | Empresas Intercompany | IdeUni |
| `E650INT` | Parâmetros - Para Integrações Contábeis | CodEmp;CodFil |
| `E650LAJ` | Ajuste Contábil - LOG's | CodEmp;CodAju;SeqLog |
| `E650PMA` | Parâmetros - Controles Contábeis por Mês/Ano | CodEmp;CodFil;MesAno |
| `E650PMA_HIS` | Histórico - Parâmetros - Controles Contábeis por Mês/Ano | CodEmp;CodMpc;CodFil;MesAno |
| `E650RTO` | Saldo - Mensal e Orçamento por Centro de Custos (PC) | CodEmp;CodFil;MesAno;CtaRed;CodCcu;CtaFin |
| `E650RTO_HIS` | Histórico - Saldo - Mensal e Orçamento por Centro de Custos (PC) | CodEmp;CodMpc;CodFil;MesAno;CtaRed;CodCcu;CtaFin |
| `E650SAL` | Saldo - Mensal e Orçamento por Conta Contábil | CodEmp;CodFil;MesAno;CtaRed |
| `E650SAL_HIS` | Histórico - Saldo - Mensal e Orçamento por Conta Contábil | CodEmp;CodMpc;CodFil;MesAno;CtaRed |
| `E650SCO` | Saldo - Mensal por Conta Contábil/Centro de Custo/Origem | IdeUni |
| `E650SLC` | Saldo - Mensal por Conta Contábil e Centro de Custo | CodEmp;CodFil;MesAno;ClaCta;CtaRed;ClaCcu;CodCcu |
| `E650SLC_HIS` | Histórico - Saldo - Mensal por Conta Contábil e Centro de Custo | CodEmp;CodMpc;CodFil;MesAno;ClaCta;CtaRed;ClaCcu;CodCcu |
| `E651ROC` | Saldo - Registro de Orçamentos (PF) | CodEmp;CodFil;MesAno;CtaFin;CodCcu;SeqIte |
| `E651RTO` | Saldo - Mensal e Orçamento por Centro de Custos (PF) | CodEmp;CodFil;MesAno;CtaFin;CodCcu |
| `E651SAL` | Saldo - Mensal e Orçamento por Conta Financeira | CodEmp;CodFil;MesAno;CtaFin |
| `E652SAL` | Saldo  - Mensal por Conta Auxiliar X Contábil | CodEmp;CodFil;MesAno;CtaAux;CtaRed |
| `E652SAL_HIS` | Histórico - Saldo  - Mensal por Conta Auxiliar | CodEmp;CodMpc;CodFil;MesAno;CtaAux;CtaRed |
| `E658SAL` | Saldo Convertido - Mensal por Conta Contábil | CodEmp;CodFil;MesAno;CodMoe;CtaRed |
| `E658SAL_HIS` | Histórico - Saldo Convertido - Mensal por Conta Contábil | CodEmp;CodMpc;CodFil;MesAno;CodMoe;CtaRed |

## Convênios

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E069CMC` | Movimentos de Conta Convênio | IdeUni |

## Cota Capital

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E250CTC` | Movimentações - Dados Gerais. | IdeUni |
| `E250DIS` | Movimentação Itens - Critério de Distribuição. | IdeUni |
| `E250FIX` | Movimentações Itens - Fixação | IdeUni |
| `E250ICT` | Movimentações - Movimentação Itens | IdeUni |
| `E250NFC` | Movimentações Itens - Nota Fisca Entrada | IdeUni |
| `E250NFV` | Movimentações Itens - Nota Fisca Saída | IdeUni |
| `E250PFO` | Movimentações Itens - Contrato Participação Forncedor | IdeUni |
| `E250TCP` | Movimentações Itens - Contas a Pagar | IdeUni |
| `E250TCR` | Movimentações Itens - Contas a Receber | IdeUni |
| `E250TCT` | Movimentações Itens - Transferência | IdeUni |

## Cubo de Decisão

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R900GDC` | Controle de Usuários | TemplId;DatSeq |

## Custos

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E620CCC` | Cadastro Componentes de Cálculo de Custos | CodCcc |
| `E620DEF` | Parâmetros Gerais | CodEmp |
| `E620VCD` | Valores Componentes - Por Data | CodEmp;CodCcc;DatIni;CodCcu;CodOri;CodFam;CodPro;CodDer |
| `E620VCT` | Valores Componentes - Por Tabela | CodEmp;CodCcc;NumMtc;CodCcu;CodOri;CodFam;CodPro;CodDer;CodAgp |
| `E621APC` | Análise de Preço de Venda para Comércio | CodEmp;CodFil;CodApc |
| `E621AVC` | Análise Valorizada de Custos | CodEmp;CodPro;CodDer;CodAvc |
| `E621CAQ` | Itens de Produtos - Custos de Aquisição | CodEmp;CodFil;CodApc;CodPro;CodDer;SeqPvc;SeqCaq |
| `E621CPC` | Componentes de Cálculo de Análise de Preço de Venda para Comércio | CodEmp;CodFil;CodApc;CodPro;CodDer;SeqPvc;CodCcc |
| `E621CPG` | Itens de Produtos - Condições de Pagamento | CodEmp;CodFil;CodApc;CodPro;CodDer;SeqPvc;CodCpg |
| `E621IPC` | Itens de Análise de Preço de Venda para Comércio | CodEmp;CodFil;CodApc;CodPro;CodDer;SeqPvc |
| `E621ISI` | Itens de Produtos - Simulações | NumMtc;CodPro;CodDer;CodSim |
| `E621ITC` | Itens de Tabelas de Custos | NumMtc;CodPro;CodDer;CodSer;CodOri;NumOrp |
| `E621MTC` | Mestre de Tabelas de Custos | NumMtc |
| `E621OBS` | Observações | NumMtc;SeqObs |
| `E621PCI` | Preço cotado de insumos (Produtos e Serviços) | NumMtc;CodPro;CodDer;CodSer |
| `E621SPI` | Simulação do Preço de Venda Individual | CodEmp;CodFil;CodPro;CodDer;CodSpi |
| `E621UCI` | Utilização de Cotações de Insumos (Produtos e Serviços) | NumMtc;CodPro;CodDer;CodSer;NumCpr;SeqCpr;NumCse;SeqCse |
| `E621UTI` | Controle de Utilização das Tabelas de Custos | NumMtc;TipUti |
| `E621UTP` | Utilização de Tabelas por Processos | CodEmp;CodFil;TipMtc;CodMtc;SeqUti |
| `E622CPN` | Componentes do Produto | NumLig;DatBas;CodEtg;SeqFic |
| `E622DAT` | Datas Bases das Fichas de Custo | NumLig;DatBas |
| `E622DER` | Componentes do Produto por Derivação | NumLig;SeqLig |
| `E622REL` | Tabela da Explosão da Ficha de Custos |  |
| `E622SIM` | Ficha Técnica de custos | NumLig |
| `E623CAP` | Capacidades Produtivas | NumMtc;CodEmp;CodCcu;NivCap |
| `E623NCP` | Níveis de Capacidades Produtivas | CodEmp;NivCap |
| `E623RCC` | Redutores de Capacidades Produtivas X Centro de Custo | CodEmp;NivCap;CodRcp;CodCcu |
| `E623RCP` | Redutores de Capacidades Produtivas | CodEmp;NivCap;CodRcp |
| `E623VRT` | Valores de Redutores por Tabela | NumMtc;CodEmp;CodCcu;NivCap;CodRcp |
| `E624LIG` | Ligação dos Agrupamentos para Cotação aos Produtos | CodEmp;CodPro;CodDer |
| `E624REF` | Agrupamento de Produtos para Cotação | CodEmp;CodRef |
| `E626DCC` | Critérios de Distribuição de CIF X C. Custo | NumDci;CcuDes |
| `E626DCI` | Critérios Distribuição de Custos Indiretos de Fabricação | NumDci |
| `E626ORC` | Orçamento dos Centros de Custo | NumMtc;CodEmp;CodCcu;CodNtg |
| `E626ORD` | Orçamento dos Centros de Custo - Distribuído | NumMtc;CodEmp;CodCcu;CodNtg;CcuOri;NtgOri |
| `E626TAX` | Taxas de Custos dos Processos | NumMtc;CodEmp;CodCcu;CodGng |
| `E626TRC` | Taxas de Custos dos Redutores de Capacidade | NumMtc;CodEmp;CodCcu;CodGng;NivCap |
| `E627ISP` | Itens Tabela de Seleção de Produtos | CodEmp;CodMsp;CodOri;CodFam;CodPro;CodDer |
| `E627MSP` | Mestre de Seleção de Produtos | CodEmp;CodMsp |
| `E628IVP` | Itens de Volumes de Produtos | CodEmp;CodMvp;CodPro;CodDer |
| `E628MVP` | Mestre de Volume de Produtos | CodEmp;CodMvp |
| `E631CPO` | Custo Padrão por Origem | NumMtc;CodOri;TipVal;CodPro;CodDer;CodCcu |
| `E634MCR` | Produção a Custo Real - Movimentos | NumMtc;CodOri;NumOrp;CodPro;CodDer;TipVal;McrEos |
| `E634SCR` | Produção a Custo Real - Saldos | NumMtc;CodOri;NumOrp;CodPro;CodDer |
| `E635CAC` | Critérios de apropriação dos custos conjuntos | NumMtc;CodPro;CodDer |

## Dispositivos Fiscais

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E663DIS` | Cadastro |  |

## Distribuidor

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E143CHE` | Romaneio de Acerto - Cheques | CodEmp;CodFil;NumRom;CheBan;CheAge;CheCta;CheNum |
| `E143DEV` | Romaneio de Acerto - Devoluções | CodEmp;CodFil;NumRom;SeqDev |
| `E143DIA` | Romaneio de acerto - Diárias do motorista | CodEmp;CodFil;NumRom;SeqDia |
| `E143DUP` | Romaneio de Acerto - Duplicatas | CodEmp;CodFil;NumRom;NumTit;CodTpt |
| `E143DVI` | Romaneio de Acerto - Despesas de Viagem | CodEmp;CodFil;NumRom;SeqDvi |
| `E143IPV` | Romaneio de Acerto - Itens de Notas Fiscais de Saída | CodEmp;CodFil;NumRom;FilNfv;CodSnf;NumNfv;SeqIpv |
| `E143LCN` | Romaneio de Acerto - Ligação do Cheque as Notas Fiscais | CodEmp;CodFil;NumRom;CheBan;CheAge;CheCta;CheNum;SeqLcn |
| `E143LCT` | Romaneio de Acerto - Ligação do Cheque aos Títulos | CodEmp;CodFil;NumRom;CheBan;CheAge;CheCta;CheNum;SeqLct |
| `E143NFV` | Romaneio de Acerto - Notas Fiscais de Saída | CodEmp;CodFil;NumRom;FilNfv;CodSnf;NumNfv |
| `E143PAG` | Romaneio de acerto - Contas a pagar | CodEmp;CodFil;NumRom;NumTit;CodTpt;CodFor |
| `E143PEN` | Romaneio de Acerto - Pendências | CodEmp;CodFil;NumRom;DatGer;SeqPen |
| `E143ROM` | Romaneio de Acerto - Dados Gerais | CodEmp;CodFil;NumRom |
| `E143TRO` | Romaneio de Acerto - Troco | CodEmp;CodFil;NumRom;SeqTro |
| `E143VAL` | Romaneio de Acerto - Vales | CodEmp;CodFil;NumRom;SeqVal |

## Estoques

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E114EMB` | Recebimento - Destinação - Embalagens Vazias | CodEmp;CodFil;SeqMov |
| `E114IPE` | Ítens - Recebimento - Destinação - Embalagens Vazias | CodEmp;CodFil;SeqMov;SeqIpe |
| `E114IPT` | Ítens - Transferência de Saldos - Agrotóxicos - Sementes e Mudas | CodEmp;CodFil;SeqMov;SeqIpt |
| `E114TRA` | Transferência de Saldos - Agrotóxicos - Sementes e Mudas | CodEmp;CodFil;SeqMov |
| `E140PMV_TMP` | Pendências de movimentação de estoque - Temporária |  |
| `E204CUR` | Cadastro - Curvas de classificação de estoques | CodEmp;CodCur |
| `E204FXN` | Cadastro - Ligação Família x Níveis de curvas de classificação de estoques | CodEmp;CodNiv;CodFam |
| `E204HCL` | Curvas de Classificação de Estoques - Histórico de classificação automática | IdeUni |
| `E204NIC` | Cadastro - Níveis de curvas de classificação de estoques | CodEmp;CodNiv |
| `E204OXN` | Cadastro - Ligação Origem x Níveis de curvas de classificação de estoques | CodEmp;CodNiv;CodOri |
| `E204PXN` | Cadastro - Ligação Produto/Derivação x Níveis de curvas de classificação de estoques | CodEmp;CodNiv;CodPro;CodDer |
| `E205DEP` | Depósitos - Cadastro | CodEmp;CodDep |
| `E205DXP` | Depósitos - Produtos não Permitidos | CodEmp;CodDep;SeqDxp |
| `E205DXT` | Depósitos - Ligação Depósito X Transação | CodEmp;CodDep;CodTns |
| `E205END` | Depósitos - Endereçamento de Produtos | CodEmp;CodEnd |
| `E205LFD` | Depósitos - Ligações Filial x Depósito | CodEmp;CodFil;CodDep |
| `E205MDE` | Depósitos - Máscaras | CodEmp;CodMde |
| `E205MEN` | Depósitos - Famílias de endereçamento produto | CodEmp;CodEnd |
| `E205RAT` | Depósitos - Rateios | CodEmp;CodDep;SeqRat |
| `E207ATD` | Requisições - Tabela auxiliar de Atendimentos | CodEmp;CodFil;NumEme;SeqEme;SeqAtd |
| `E207DLS` | Requisições - Entrada, Vencimento Lote e Série | CodEmp;NumEme;SeqEme;SeqDls |
| `E207EME` | Requisições | CodEmp;NumEme;SeqEme |
| `E207RAT` | Requisições - Rateios | CodEmp;NumEme;SeqEme;SeqRat |
| `E210ACM` | Acúmulos Mensais (Consumo, Entradas e Devoluções) | CodEmp;CodFil;CodPro;CodDer;CodDep;MesAno |
| `E210CCA` | Cortes para controle de Análise de Reposição | CodEmp;CodPro;CodDer;CodDep;DatCor |
| `E210CCD` | Consignações por Depósito | CodEmp;CodPro;CodDer;CodDep;CodCli;CodFor |
| `E210CEI` | Controle Individual por Código de Barras | CodEmp;CodPro;CodDer;CodBar;SeqBar |
| `E210CSG` | Consignações | CodEmp;CodPro;CodDer;CodCli;CodFor |
| `E210DEA` | Documentos do movimento de estoque agrupado | SeqDea |
| `E210DLS` | Produtos por Depósito, Data Entrada/Validade, Lote e Série | CodEmp;CodPro;CodDer;CodDep;NumSep;CodLot;SeqEnt |
| `E210DRE` | Documento de reserva | IdeUni |
| `E210EAV` | Arquivos de estoque do varejo |  |
| `E210EFI` | Conteúdo das Embalagens de Estocagem (Volume) | CodEmp;NumEmb;SeqEfi |
| `E210EMA` | Cadastro de Análise de Evolução do Estoque Mínimo Automatizado | CodEmp |
| `E210EMB` | Embalagens de Estocagem | CodEmp;NumEmb |
| `E210END` | Estoque Negativo no dia | CodEmp;CodFil;CodPro;CodDer;DatNeg |
| `E210EPD` | Conteúdo das Embalagens de Estocagem | CodEmp;NumEmb;SeqEpd |
| `E210EST` | Produtos por Depósito | CodEmp;CodPro;CodDer;CodDep |
| `E210EXC` | Movimentos Excluídos | CodEmp;CodPro;CodDer;CodDep;DatMov;SeqExc |
| `E210FEM` | Faixa de Evolução do Estoque Mínimo Automatizado | CodEmp;SeqFem |
| `E210HEM` | Histórico de Evolução do Estoque Mínimo Automatizado | IdeUni |
| `E210HIS` | Histórico de reserva | IdeUni |
| `E210LFI` | Conteúdo das Embalagens de Estocagem (Volume - Lotes) | CodEmp;NumEmb;SeqEfi;SeqLfi |
| `E210LIG` | Ligação de Movimentos | CodEmp;CodLig |
| `E210MEA` | Movimento de estoque agrupado | SeqMea |
| `E210MEA_TMP` | Movimento de estoque agrupado - Temporária |  |
| `E210MED` | Preço médio por filial | CodEmp;CodFil;CodPro;CodDer |
| `E210MIN` | Quantidades Mínimas para Reposição | CodEmp;CodPro;CodDer;CodDep |
| `E210MMF` | Preço Médio Mensal Fixo | CodEmp;CodFil;CodPro;CodDer;MesAno |
| `E210MPM` | Movimentos - Preço Médio Depósito | IdeUni |
| `E210MVP` | Movimentos | CodEmp;CodPro;CodDer;CodDep;DatMov;SeqMov |
| `E210OBS` | Observações | CodEmp;CodPro;CodDer;CodDep;DatObs;SeqObs |
| `E210OSF` | Saldos físicos mensais - Observações | CodEmp;CodFil;MesIni;MesFin |
| `E210PMD` | Preço Médio Depósito | IdeUni |
| `E210PNU` | Produtos Numerados | CodEmp;CodPro;CodDer;CodDep;NumSep |
| `E210RAT` | Rateios dos Movimentos | CodEmp;CodPro;CodDer;CodDep;DatMov;SeqMov;SeqRat |
| `E210RES` | Produtos Reservados | IdeUni |
| `E210SCM` | Saldos Consignados Mensais | CodEmp;CodFil;CodPro;CodDer;CodDep;MesAno;CodCli;CodFor |
| `E210SFC` | Saldos Consignados Mensais por Depósito | CodEmp;CodPro;CodDer;CodDep;CodCli;CodFor;MesAno |
| `E210SFE` | Saldos Físicos Mensais | CodEmp;CodFil;CodPro;CodDer;CodDep;MesAno |
| `E210SLB` | Saldos da Limpeza de Base | CodEmp;FilDep;CodPro;CodDer;CodDep;CodLot |
| `E210TRA` | Valorização Transferências | IdeUni |
| `E213IQT` | Quebra Técnica - Itens | CodEmp;CodQbt;CodPro;CodDer;CodDep;DatMov;SeqMov |
| `E213QBT` | Quebra Técnica - Dados Gerais | CodEmp;CodQbt |
| `E215DET` | Detalhes de Execução de Fechamento / Atualização de Estoques | IdeUni |
| `E215FES` | Fechamento dos Estoques | CodEmp;CodFil;DatGer;SeqGer |
| `E215MAC` | Movimentos de Acertos não Gerados | IdeUni |
| `E215REG` | Registros de Fechamento / Atualização de Estoques | IdeUni |
| `E220CLS` | Inventários - Contagens por Lote e Série | CodEmp;DatInv;CodDep;CodPro;CodDer;NumCon;SeqDls |
| `E220CON` | Inventários - Contagens | CodEmp;DatInv;CodDep;CodPro;CodDer;NumCon |
| `E220DCL` | Inventários - Documento das contagens por Lote e Série | CodEmp;DatInv;CodDep;CodPro;CodDer;NumCon;SeqCon;SeqDls |
| `E220DLS` | Inventários - Itens de Produto - Distribuição de Lotes e Séries | CodEmp;DatInv;CodDep;CodPro;CodDer;SeqDls |
| `E220DOC` | Inventários - Documentos das Contagens | CodEmp;DatInv;CodDep;CodPro;CodDer;NumCon;SeqCon |
| `E220EMB` | Inventários de Embalagens - Dados Gerais | CodEmp;DatInv;NumInv |
| `E220INV` | Inventários - Dados Gerais | CodEmp;DatInv;CodDep |
| `E220ITE` | Inventários - Itens de Produto | CodEmp;DatInv;CodDep;CodPro;CodDer |
| `E220IVE` | Inventários  de Embalagens - Itens | CodEmp;DatInv;NumInv;NumEmb |
| `E220JCO` | Inventários - Contagens - Justificativas | CodEmp;DatInv;CodDep;CodPro;CodDer;NumCon;SeqJus |
| `E220JLS` | Inventários - Contagens por Lote e Série - Justificativas | CodEmp;DatInv;CodDep;CodPro;CodDer;NumCon;SeqDls;SeqJus |

## Eventos

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E999CPX` | Contas a pagar | SeqCpx |
| `E999CRX` | Contas a receber | SeqCrx |

## Exportador

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R900GEX` | Controle de Usuários | TemplId;DatSeq |

## Exportação do TBS para a base

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R996TRG` | Triggers | TrgNam;TblNam |

## Ficha

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E700CBN` | Modelo - Combinações de Componentes | CodEmp;CodMod;CodCbn |
| `E700CMM` | Modelo - Componentes | CodEmp;CodMod;CodEtg;SeqMod |
| `E700COC` | Modelo - Coordenadas do Componente | CodEmp;CodMod;CodEtg;SeqMod;SeqCoc |
| `E700CTM` | Modelo - Consumo Componente por Derivação | CodEmp;CodMod;CodEtg;SeqMod;CodDer |
| `E700DMO` | Modelo - Derivações Possíveis | CodEmp;CodMod;CodDer |
| `E700IBN` | Modelo - Itens Combinações de Componentes | CodEmp;CodMod;CodCbn;SeqCbn |
| `E700ITR` | Modelo - Tabela de relacionamento entre derivações - Itens | CodEmp;CodTar;CodRlc;CodDe1 |
| `E700LMP` | Modelo - Liga Modelo X Produto | CodEmp;CodMod;CodPro;CodEtg;SeqMod |
| `E700MOD` | Modelo - Dados Gerais | CodEmp;CodMod |
| `E700NSR` | Modelo - Narrativa por Seq. Componente | CodEmp;CodMod;CodEtg;SeqMod;SeqNsr |
| `E700PCE` | Modelo - Componentes Exclusivos para Fabricar Pedido/Item | CodEmp;CodFil;NumPed;SeqIpd;CodEtg;SeqMod;SeqPce |
| `E700TAR` | Modelo - Tabela de relacionamento entre derivações | CodEmp;CodTar;CodRlc |
| `E700VCC` | Modelo - Versões Consumos | CodEmp;CodMod;CodEtg;SeqMod;CodDer;DatAlt;VerMod |
| `E700VCM` | Modelo - Versões Componentes | CodEmp;CodMod;CodEtg;SeqMod;DatAlt;VerMod |
| `E700VMO` | Modelo - Versões Modelo | CodEmp;CodMod;DatAlt;VerMod |
| `E705SVA` | Modelo - Variações Consumo - Seqüências | CodEmp;CodMdp;CodVac;CodDer |
| `E705VAC` | Modelo - Variações Consumo de Componentes por Derivação | CodEmp;CodMdp;CodVac |
| `E710APL` | Roteiro - Aplicações de Componentes na Seqüência Operacional | CodEmp;CodRot;CodEtg;SfxEtr;SeqRot;SfxSeq;CodMod;SeqMod |
| `E710CTP` | Roteiro - Cálculo de Tempo da Seqüência Operacional | CodEmp;CodRot;CodEtg;SfxEtr;SeqRot;SfxSeq;CodOpr |
| `E710ETR` | Roteiro - Estágios | CodEmp;CodRot;CodEtg;SfxEtr |
| `E710IMG` | Roteiro - Imagem para Seqüência Operacional | CodEmp;CodRot;CodEtg;SfxEtr;SeqRot;SfxSeq;SeqImg |
| `E710LRP` | Roteiro - Liga Roteiro X Produto | CodEmp;CodPro;CodDer;CodRot;CodEtg;SfxEtr;SeqRot;SfxSeq |
| `E710NSR` | Roteiro - Narrativa da Seqüência Operacional | CodEmp;CodRot;CodEtg;SfxEtr;SeqRot;SfxSeq;SeqNsr |
| `E710PCR` | Roteiro - Seqüência Operações Exclusivas para fabricar Pedido/Item | CodEmp;CodFil;NumPed;SeqIpd;CodEtg;SfxEtr;SeqRot;SfxSeq;SeqPcr |
| `E710ROT` | Roteiro - Dados Gerais | CodEmp;CodRot |
| `E710SQA` | Roteiro - Acessório para Seqüência Operacional | CodEmp;CodRot;CodEtg;SfxEtr;SeqRot;SfxSeq;CodAcs |
| `E710SQR` | Roteiro - Seqüência Operacional | CodEmp;CodRot;CodEtg;SfxEtr;SeqRot;SfxSeq |
| `E710SRF` | Ligação Seq. Roteiro com Ferramentas | CodEmp;CodRot;CodEtg;SfxEtr;SeqRot;SfxSeq;CodFrt;DerFrt |
| `E710VCR` | Roteiro - Versões Seqüências Operações | CodEmp;CodRot;CodEtg;SfxEtr;SeqRot;SfxSeq;DatAlt |
| `E710VCT` | Roteiro - Versões Estágios | CodEmp;CodRot;CodEtg;SfxEtr;DatAlt |
| `E710VRO` | Roteiro - Versões Roteiro | CodEmp;CodRot;DatAlt |
| `E720FOT` | Roteiro - Fotos (Imagem) Detalhes Técnicos | CodEmp;FotDet;SeqFot |
| `E720LOF` | Ligação Operações X Família Ferramentas | CodEmp;CodOpr;CodFam;CodFrt;DerFrt |
| `E720NOF` | Roteiro - Narrativas p/ Operações (Instruções) | CodEmp;CodNof |
| `E720OAC` | Roteiro - Cadastro de Acessórios da Operação | CodEmp;CodOpr;CodAcs |
| `E720OPR` | Roteiro - Cadastro de Operações de Fabricação | CodEmp;CodOpr |
| `E720SNO` | Roteiro - Seqüência de Narrativas p/ Operações (Instruções) | CodEmp;CodNof;SeqSno |
| `E720VCO` | Roteiro - Versões Operações Fabricação | CodEmp;CodOpr;DatAlt |
| `E725CRE` | Roteiro - Cadastro Centro de Recursos | CodEmp;CodCre |
| `E725CRS` | Roteiro - Cadastro Centro de Recursos Substitutos | CodEmp;CodCre;CreSbs |
| `E727ACS` | Roteiro - Cadastro de Acessórios p/ Operação | CodEmp;CodAcs |

## Filial

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E070FAG` | Parâmetros para Assistência Técnica e Garantia | CodEmp;CodFil |

## Financeiro

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E315CRD` | Critério de Distribuição | CodEmp;CodCrd |
| `E315PAR` | Critério de Distribuição - Parcelas | CodEmp;CodCrd;SeqTrp;CodPar |
| `E315TIT` | Critério de Distribuição - Títulos | CodEmp;CodCrd;SeqTrp |
| `E606ACD` | Aplicação\Captação Recursos - Atualização Diária | CodEmp;CodFil;NumCcr;DatAcd;SeqAcd |
| `E606APT` | Aplicação\Captação Recursos - Atualizações Prestações | CodEmp;CodFil;NumCcr;DatAtu;SeqAtu;DatPre;SeqPre;SeqVct |
| `E606CAC` | Cálculo Contratos Aplicação\Captação Recursos | CodEmp;CodCac |
| `E606CAD` | Aplicação\Captação Recursos - Controle Antecipação Descontos | CodEmp;CodFil;NumCcr;DatMov;SeqMov;NumTit;CodTpt |
| `E606CCR` | Aplicação\Captação Recursos - Cadastro | CodEmp;CodFil;NumCcr |
| `E606CFI` | Composição do Fundo de Investimento | IdeUni |
| `E606CLP` | Aplicação\Captação Recursos - Títulos Curto e Longo Prazo | CodEmp;CodFil;NumCcr;NumTit;CodTpt;CodFor |
| `E606COE` | Itens do Cálculo Origem do Contratos Aplicação\Captação Recursos | CodEmp;CodFil;NumCcr;CodCac;SeqCal |
| `E606EFI` | Extrato do Fundo de Investimento | IdeUni |
| `E606GAR` | Aplicação\Captação Recursos - Garantias | CodEmp;CodFil;NumCcr;SeqGar |
| `E606ICC` | Itens do Cálculo do Contratos Aplicação\Captação Recursos - Seqüência | CodEmp;CodCac;SeqIcc |
| `E606MAA` | Aplicação\Captação Recursos - Movimentos Atualizações Aplicações | CodEmp;CodFil;NumCcr;SeqMaa |
| `E606MTP` | Aplicação\Captação Recursos - Movimentações Títulos Prestações | CodEmp;CodFil;NumCcr;SeqIte |
| `E606PAR` | Aplicação\Captação Recursos - Parcelas | CodEmp;CodFil;NumCcr;SeqPar |
| `E606PBC` | Produto Bancário Contratos Aplicação\Captação Recursos | CodEmp;CodPbc |
| `E606PBT` | Itens da Tributação do Contratos Aplicação\Captação Recursos - Seqüência | CodEmp;CodPbc;CodImp |
| `E606PRE` | Aplicação\Captação Recursos - Prestações | CodEmp;CodFil;NumCcr;DatPre;SeqPre;SeqVct |
| `E606SAL` | Aplicação\Captação Recursos - Saldos | CodEmp;CodFil;NumCcr;DatCmp |
| `E606TGA` | Aplicação\Captação Recursos - Tipo de Garantias | CodEmp;TipGar |
| `E606TPB` | Tipos Produto Bancário Contratos Aplicação\Captação Recursos | CodEmp;CodTpb |
| `E606TRE` | Tipos Remessa Exterior Contratos Aplicação\Captação Recursos | CodEmp;CodTre |
| `E614APR` | Controle de Aprovação Financeira | CodEmp;CodFil;RotNap;NumApr |
| `E614OBS` | Controle de Aprovação Financeira - Observações | CodEmp;CodFil;RotNap;NumApr;SeqObs |
| `E615APT` | Projetos - Anexos Protocolo | CodEmp;CodPtc;SeqApt |
| `E615CER` | Projetos - Controle Entrega Relatórios | CodEmp;NumPrj;CodPer |
| `E615CRD` | Projetos - Cadastro Remetente/Destinatário | TipCrd;CodCrd |
| `E615CSP` | Projetos - Conciliação de Projetos | CodEmp;NumPrj;UsuGer;NumCrl |
| `E615EVO` | Projetos - Lançamentos da Evolução de Projeto | CodEmp;CodFil;NumPrj;CodFpj;DatLct;SeqLct |
| `E615FAT` | Projetos - Faturamento X Parcelas | CodEmp;NumPrj;SeqFat |
| `E615FFS` | Projetos - Faturamento X Fases Executadas | CodEmp;NumPrj;SeqFat;CodFpj |
| `E615FPD` | Projetos - Faturamento X Itens de Pedido | CodEmp;NumPrj;SeqFat;CodFil;NumPed;SeqIpd;SeqIsp |
| `E615FPJ` | Projetos - Fases | CodEmp;NumPrj;CodFpj |
| `E615GRP` | Projetos - Grupos | CodEmp;CodGrp |
| `E615IER` | Projetos - Itens Entrega Relatórios | CodEmp;NumPrj;CodPer;SeqPer |
| `E615IPT` | Projetos - Itens Protocolo | CodEmp;CodPtc;SeqIpt |
| `E615LIN` | Projetos - Linhas | CodEmp;CodLin |
| `E615OAB` | Projetos - Preparação de orçamento para Projeto - Abertura | CodEmp;CodOrc |
| `E615OBS` | Projetos - Observações/Detalhes Técnicos | CodEmp;NumPrj;SeqObs |
| `E615OCC` | Projetos - Preparação de orçamento para Projeto - Contas X C.Custo | CodEmp;CodOrc;CodUsu;CodFpj;CodCcu;CtaFin;RatAss;MesAno |
| `E615OOB` | Projetos - Preparação de orçamento para Projeto- Observações/Detalhes | CodEmp;CodOrc;SeqObs |
| `E615OPC` | Projetos - Observações Prestação de Contas do Adiantamento | CodEmp;CodFor;NumPrj;CodPca;SeqObs |
| `E615ORC` | Projetos - Orçamentos para Projetos | CodEmp;NumPrj;CodFpj;CtaFin;CodCcu;MesAno |
| `E615ORF` | Projetos - Orçamentos - Físicos | CodEmp;NumPrj;CodFpj;CtaFin;CodCcu;TipRec;CodPro;CodDer;CodSer;MesAno |
| `E615OSA` | Projetos - Observações Solicitação de Adiantamento | CodEmp;CodFor;NumPrj;CodSol;SeqObs |
| `E615OUS` | Projetos - Preparação de orçamento para Projeto - Usuários Gestores | CodEmp;CodOrc;CodUsu |
| `E615PCA` | Projetos - Prestação de Contas do Adiantamento | CodEmp;CodFor;NumPrj;CodPca |
| `E615PFP` | Projetos - Pendências do Fornecedor do Projeto | CodEmp;CodFor;AssPen;SeqPen |
| `E615POF` | Projetos - Posição dos Recursos Físicos | CodEmp;NumPrj;CodFpj;TipRec;CodPro;CodDer;CodSer;RotPpj;MesAno;CtaFin;CodCcu |
| `E615POS` | Projetos - Posição dos Projetos | CodEmp;NumPrj;CodFpj;CtaFin;CodCcu;RotPpj;MesAno |
| `E615PPE` | Projetos - Parâmetros Pendências do Projeto | CodEmp;NumPrj;AssPen |
| `E615PPF` | Projetos - Parâmetros Pendências do Fornecedor | CodEmp;CodFor;AssPen |
| `E615PPJ` | Projetos - Pendências do Projeto | CodEmp;NumPrj;AssPen;SeqPen |
| `E615PRJ` | Projetos - Cadastro | CodEmp;NumPrj |
| `E615PSA` | Projetos - Parâmetros Solicitação de Adiantamento | CodEmp;NumPrj |
| `E615PTC` | Projetos - Cadastro Protocolo | CodEmp;CodPtc |
| `E615PVP` | Projetos - Relacionamento Projetos X Produtos | CodEmp;NumPrj;CodPro |
| `E615PVS` | Projetos - Relacionamento Projetos X Serviços | CodEmp;NumPrj;CodSer |
| `E615PXC` | Projetos - Relacionamento Projetos X Centro de Custos | CodEmp;NumPrj;CodCcu |
| `E615PXM` | Projetos - Prestação de Contas de Adiantamentos X Movimentos | CodEmp;CodFor;NumPrj;CodFil;CodPca;NumTit;CodTpt;NumNfc;CodSnf |
| `E615PXP` | Projetos - Relacionamento Projetos X Plano Financeiro (Contas) | CodEmp;NumPrj;CtaFin |
| `E615PXS` | Projetos - Prestação de Contas X Solicitação de Adiantamento | CodEmp;CodFor;NumPrj;CodPca;ForSol;CodSol |
| `E615PXT` | Projetos - Relacionamento Projetos X Tesouraria (Contas Internas) | CodEmp;NumPrj;NumCco |
| `E615PXU` | Projetos - Relacionamento Projetos X Usuários | CodEmp;NumPrj;CodUsu |
| `E615RAF` | Projetos - Rateios dos Lançamentos Físicos | CodEmp;NumPrj;CodFpj;TipRec;CodPro;CodDer;CodSer;CtaFin;CtaRed;CodCcu;SeqRat |
| `E615RAT` | Projetos - Rateios dos Lançamentos | CodEmp;NumPrj;CodFpj;CtaFin;CtaRed;CodCcu;SeqRat |
| `E615RCP` | Projetos - Recursos Previstos | CodEmp;NumPrj;SeqRcp |
| `E615REC` | Projetos - Reconhecimento de Receita (IFRS/POC) | IdeUni |
| `E615RIC` | Projetos - Reconhecimento de Receita (IFRS/POC) - Origem Contrato - Itens do contrato | IdeUni |
| `E615RIR` | Projetos - Reconhecimento de Receita (IFRS/POC) - Origem Contrato - Rateios itens do contrato | IdeUni |
| `E615RLC` | Projetos - Reconhecimento de Receita (IFRS/POC) - Lançamentos | IdeUni |
| `E615ROE` | Projetos - Reconhecimento de Receita (IFRS/POC) - Origem Evolução | IdeUni |
| `E615ROI` | Projetos - Reconhecimento de Receita (IFRS/POC) - Origem Incorrido | IdeUni |
| `E615ROL` | Projetos - Reconhecimento de Receita (IFRS/POC) - Origem Incorrido - Lançamentos | IdeUni |
| `E615ROO` | Projetos - Reconhecimento de Receita (IFRS/POC) - Origem Orçamento | IdeUni |
| `E615ROR` | Projetos - Reconhecimento de Receita (IFRS/POC) - Origem Contrato | IdeUni |
| `E615RPC` | Projetos - Relacionamento Projetos X Coordenadores | CodEmp;NumPrj;CpfCor |
| `E615RPJ` | Projetos - Rateios do Cadastro de Projetos | CodEmp;PrjRat;SeqRat |
| `E615RPP` | Projetos - Orçamentos - Recursos | CodEmp;NumPrj;TipAca;SeqRpp;SeqIte;MesAno |
| `E615SAT` | Projetos - Solicitações de Adiantamento | CodEmp;CodFor;NumPrj;CodSol |
| `E615SPJ` | Projetos - Situações dos Projetos | CodEmp;CodSpj |
| `E615SXS` | Projetos - Relacionamento entre as Situações dos Projetos | CodEmp;SpjOri;SpjDes |
| `E615SXT` | Projetos - Solicitação de Adiantamento X Títulos CP | CodEmp;CodFor;NumPrj;CodSol;CodFil;NumTit;CodTpt |
| `E615TSO` | Projetos - Orçamento - Transferência de Saldos de Orçamento | CodEmp;DatTso;SeqTso;SeqIts;OriDes;EmpTso;NumPrj;CodFpj;CtaFin;CodCcu;MesAno;TipRec |
| `E615VGL` | Projetos - Relacionamento Visões X Grupos X Linhas | CodEmp;CodVis;CodGrp;CodLin;SeqVgl |
| `E615VIS` | Projetos - Visão | CodEmp;CodVis |
| `E616ACL` | Projetos - Adicionais - Aprovação do CheckList | CodEmp;NumPrj;CodChk |
| `E616ARP` | Projetos - Arquivos | CodEmp;NumPrj;SeqArp |
| `E616ATV` | Projetos - Atividades | CodEmp;NumPrj;SeqAtv |
| `E616CAV` | Projetos - Adicionais - Atividade | CodEmp;CodCav |
| `E616CRT` | Projetos - Adicionais - Características | CodEmp;CodCrt |
| `E616DCK` | Projetos - Dados do CheckList | CodEmp;NumPrj;CodChk;CodIte |
| `E616EPA` | Projetos - Adicionais - Especificação de Público Alvo x Projetos | CodEmp;NumPrj;SeqEpa |
| `E616FET` | Projetos - Adicionais - Faixas Etárias | CodEmp;CodFet |
| `E616IAP` | Projetos - Adicionais - Informações Adicionais | CodEmp;NumPrj;CodTip;SeqIap |
| `E616LAL` | Projetos - Adicionais - Localização Público Alvo | CodEmp;CodLal |
| `E616MAN` | Projetos - Lançamentos Manuais | CodEmp;DatGer;SeqGer |
| `E616MET` | Projetos - Adicionais - Metas | CodEmp;CodMet |
| `E616MNF` | Projetos - Relacionamento Fases X Municípios | CodEmp;NumPrj;CodFpj;CepIni |
| `E616MNP` | Projetos - Relacionamento Projetos X Municípios | CodEmp;NumPrj;CepIni |
| `E616OCO` | Projetos - Adicionais - Ocupação | CodEmp;CodOco |
| `E616ORF` | Projetos - Observações Registros de Ocorrência de Fornecedor | CodEmp;CodFor;SeqRoc;SeqOrf |
| `E616ORP` | Projetos - Observações Registros de Ocorrência de Projeto | CodEmp;NumPrj;SeqRoc;SeqOrp |
| `E616PAL` | Projetos - Adicionais - Público Alvo | CodEmp;CodPal |
| `E616PRP` | Projetos - Preparação de orçamento para Projeto - Recursos | CodEmp;CodOrc;CodUsu;SeqPrp |
| `E616PXP` | Projetos - Relacionamentos - Projetos X Público Alvo | CodEmp;NumPrj;CodPal |
| `E616QTM` | Projetos - Metas do Projeto | CodEmp;NumPrj;CodMet |
| `E616RAT` | Projetos - Rateios dos Lançamentos Manuais | CodEmp;DatGer;SeqGer;SeqRat |
| `E616TIP` | Projetos - Adicionais - Tipos de Informações | CodEmp;CodTip |
| `E616TXC` | Projetos - Relacionamentos - Tipos de Projetos X Itens do CheckList | CodEmp;CodTpj;CodChk;CodIte |
| `E616TXL` | Projetos - Relacionamentos - Tipos de Projetos X Itens do CheckList | CodEmp;CodTpj;NumPrj;CodChk;CodIte |
| `E616TXM` | Projetos - Relacionamentos - Tipo de Projetos X Metas | CodEmp;CodTpj;CodMet |
| `E616TXP` | Projetos - Relacionamentos - Tipo de Projetos X Público Alvo | CodEmp;CodTpj;CodPal |
| `E616TXR` | Projetos - Relacionamentos - Tipo de Projetos X Produtos | CodEmp;CodTpj |
| `E616TXT` | Projetos - Relacionamentos - Tipo de Projetos X Metas | CodEmp;CodTpj;NumPrj;CodMet |

## Finanças

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E603FEC` | Fechamento do LCDPR | CodEmp |
| `E603ILC` | Inconsistências do LCDPR | IdeIlc;SeqLci |
| `E603INE` | Integralização das Notas Fiscais de Entrega Futura do LCDPR | IdeUni |
| `E603LCI` | Apuração do LCDPR por Imóvel | SeqLci |
| `E603LCP` | Apuração do LCDPR por Produtor | SeqLcp |
| `E603LPM` | Lançamentos Manuais no LCDPR | CodEmp;DatLan;SeqLan |
| `E603RET` | Retenção - Composição Substituição - LCDPR | IdeUni |
| `E603SNE` | Saldo das Notas Fiscais de Entrega Futura do LCDPR | IdeUni |

## G6

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R900PAC` | Permissões de Perspectivas | PERNAM;DATSEQ |
| `R900TAC` | Permissões de tags de perspectivas | TAGNAM;DATSEQ |
| `R980CST` | Estilos customizados | NAME |
| `R980PER` | Catálogo de perspectivas existentes | PERNAM;PERCTX |
| `R980REG` | Regras | CLANAM |
| `R981TPX` | Controle do sequencial para transações de negócios | CodPrxTra |
| `R981TRA` | Controle de transações de negócios | CodTra |
| `R981TRD` | Detalhes de transações de negócios | CodTra;CodTraDet |

## Genérica

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R900GPR` | Global Parameters | PRMID |
| `R900UPR` | User Parameters | CodUsu;ModId;PrmId |
| `R999ARG` | Application Rights | RigId |
| `R999ARP` | Application Rights Permissions | RigId;DatSeq |
| `R999MOD` | System Modules | ModId |
| `R999MPR` | System Module Permissions | ModId;DatSeq |

## Gerador de Consultas

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R900GQU` | Controle de Usuários | TemplId;DatSeq |

## Gerador de Relatórios

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R900GRT` | Controle de Usuários | TemplId;DatSeq |

## Gerais

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000NEX` | Integração de notas fiscais de entrada com seniorX | SeqItx |
| `E000NSX` | Integração de notas fiscais de saída com seniorX | SeqItx |
| `E000PDX` | Integração de pedidos com seniorX | SeqItx |
| `E000PFX` | Integração de pré-faturas com seniorX | SeqItx |

## Geração automática de documentos eletrônicos

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E999PAN` | Pendências | IdeUni |
| `E999PCR` | Multa-Juros / Pgt. Antecipado | IdeUni |
| `E999PEI` | Perda Estoque - Itens | IdeUni;SeqIte |
| `E999PES` | Perda Estoque | IdeUni |

## Gestão de Tributos

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E663AIP` | DIMP - Registro 0600 | IdeUni |
| `E663CCL` | DIMP - Registro 0100 | IdeUni |
| `E663CCP` | DIMP - Competência | IdeUni |
| `E663CMC` | DIMP - Registro 0200 | IdeUni |
| `E663CVC` | DIMP - Registro 0105 | IdeUni |
| `E663DIP` | DIMP - Registro 0300 | IdeUni |
| `E663IIE` | DIMP - Registro 0700 | IdeUni |
| `E663ILD` | DIMP - Registro 0002 | IdeUni |
| `E663MOF` | DIMP - Resumo mensal das operações financeiras (Registro 1500 e 1600) | IdeUni |
| `E663ODP` | DIMP - Operações diárias de pagamento (registros 1100 e 1200) | IdeUni |
| `E663TCC` | DIMP - Registro 0200 | IdeUni |

## Grupos

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R900CPG` | Informações complementares | PERID |

## Histórico de acesso a Forms/Cubo/Relatórios

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R975ACC` | Deprecada | MODID;CODUSU;ITEMID;DATACC;TIMACC |

## Imobiliárias

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E661IDS` | Unidade Imobiliária Vendida - Dispositivos Fiscais | CodEmp;CodFil;LctUiv;CodDfs |
| `E661IID` | Incorporação Imobiliária - RET - Dispositivos Fiscais | CodEmp;CodFil;LctIir;CodDfs |
| `E661IIR` | Incorporação Imobiliária - Regimes Especiais de Tributação | CodEmp;CodFil;LctIir |
| `E661IVI` | Unidade Imobiliária Vendida - Custo Incorrido | CodEmp;CodFil;LctUiv;MesAno |
| `E661IVO` | Unidade Imobiliária Vendida - Custo Orçado | CodEmp;CodFil;LctUiv;MesAno |
| `E661IVR` | Unidade Imobiliária Vendida - Valores Recebidos | CodEmp;CodFil;LctUiv;MesAno |
| `E661OIM` | Locações/Intermediações | CodEmp;CodFil;NumLct |
| `E661UIV` | Unidade Imobiliária Vendida | CodEmp;CodFil;LctUiv |

## Importador

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R900GIM` | Controle de Usuários | TemplId;DatSeq |

## Imposto

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E660MTR` | Notas Fiscais de Saída - Modal de Transporte | CodEmp;CodFil;CodSnf;NumNfi;SeqMtr |

## Impostos

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E055ISS` | Parâmetros por Cidade ISS do ISS Retido | CodEmp;CodFil;CodImp;DatBas;CodRai |
| `E075LOG` | Impostos Por Produto Agro - Log de alterações | CodEmp;CodPro;CodImp;DatBas;SeqLog |
| `E660CCO` | Componentes do ICMS Ativo Permanente | CodEmp;CodBem;CodCom |
| `E660CCT` | Nota Fiscal de Saída - Composição do Conhecimento de Transporte | CodEmp;CodFil;CodCli;NumNfi;NumNff;CodSnf;CodTns;SeqCct |
| `E660CIP` | Controle ICMS Ativo Permanente | CodEmp;CodFil;CodFor;NumNfi;NumNff;CodSnf;CodTns;SeqInc;MesAno;CodBem |
| `E660DCI` | Notas Fiscais de Entrada - Detalhamento por Classificação dos Itens | CodEmp;CodFil;CodFor;CodSnf;NumNfi;SeqCla |
| `E660DEX` | Controle de Embarque de Exportação - Documentos Redex | CodEmp;CodFil;NumEbq;SeqEbq |
| `E660DGC` | Nota Fiscal de Entrada - Dados Gerais | CodEmp;CodFil;CodFor;CodSnf;NumNfi |
| `E660DGV` | Nota Fiscal de Saída - Dados Gerais | CodEmp;CodFil;CodSnf;NumNfi |
| `E660DLC` | Nota Fiscal de Entrada - Entrada, Vencimento, Lote, Série | CodEmp;CodFil;CodFor;CodSnf;NumNfi;SeqIpc;SeqDls |
| `E660DLV` | Nota Fiscal de Saída - Entrada, Vencimento, Lote, Série | CodEmp;CodFil;CodSnf;NumNfi;SeqIpv;SeqDls |
| `E660DPR` | Nota Fiscal de Entrada - Documento Fiscal Produtor Rural | CodEmp;CodFil;CodFor;CodSnf;NumNfi;SeqDpr |
| `E660ERT` | Nota Fiscal de Entrada - Impostos Reforma tributária | CodEmp;CodFil;CodFor;NumNfi;NumNff;CodSnf;CodTns;SeqInc;CodImp |
| `E660EXF` | Notas Fiscais de Entrada - Ligação Notas de Frete | CodEmp;CodFil;CodFor;CodSnf;NumNfi;SeqExf |
| `E660EXP` | Controle de Embarque de Exportação - Dados Gerais | CodEmp;CodFil;NumEbq |
| `E660FIS` | Geral | CodEmp;CodFil;IdfFrm;DatReg;CodReg;NomCam;SeqCam |
| `E660IDE` | Nota Fiscal de Saída - Informações de Documentos Eletrônicos | CodEmp;CodFil;CodSnf;NumNfi |
| `E660IEX` | Controle de Embarque de Exportação - Itens dos Documentos Redex | CodEmp;CodFil;NumEbq;SeqEbq;SeqIte |
| `E660IMP` | Nota Fiscal de Entrada - Itens de Produto/Serviço - Impostos por Item | CodEmp;CodFil;CodFor;NumNfi;NumNff;CodSnf;CodTns;SeqInc;CodImp |
| `E660IMS` | Nota Fiscal de Saída - Itens de Produto/Serviço - Impostos por Item | CodEmp;CodFil;CodCli;NumNfi;NumNff;CodSnf;CodTns;SeqInv;CodImp |
| `E660INC` | Nota Fiscal de Entrada - Itens de Produto/Serviço | CodEmp;CodFil;CodFor;NumNfi;NumNff;CodSnf;CodTns;SeqInc |
| `E660INV` | Nota Fiscal de Saída - Itens de Produto/Serviço | CodEmp;CodFil;CodCli;NumNfi;NumNff;CodSnf;CodTns;SeqInv |
| `E660IRZ` | Redução Z - Itens de Produto | CodEmp;CodFil;CodEqu;DatRef;SeqRez;NumCfi;SeqIte |
| `E660LNC` | Nota Fiscal de Compra - Ligação entre Itens | CodEmp;CodFil;CodFor;CodSnf;NumNfi;SeqIpc;SeqLni |
| `E660LNV` | Nota Fiscal de Saída - Ligação entre Itens | CodEmp;CodFil;CodSnf;NumNfi;SeqIpv;SeqLni |
| `E660LOG` | Parâmetros Fiscais | CodEmp;CodFil;DesPrc;DatLog;HorLog;UsuLog;SeqLan |
| `E660MPG` | Redução Z - Meios de Pagamento | CodEmp;CodFil;CodEqu;DatRef;CodMpg |
| `E660NFC` | Nota Fiscal de Entrada - Agrupamento por Alíquota e CFOP | CodEmp;CodFil;CodFor;NumNfi;NumNff;CodSnf;CodTns |
| `E660NFV` | Nota Fiscal de Saída - Agrupamento por Alíquota e CFOP | CodEmp;CodFil;CodCli;NumNfi;NumNff;CodSnf;CodTns |
| `E660NFX` | Controle de Embarque de Exportação - Composição Notas Fiscais | CodEmp;CodFil;NumEbq;SeqEbq |
| `E660ODC` | Outros Documentos | CodEmp;CodFil;NumDoc;SeqDoc |
| `E660PAC` | Nota Fiscal de Entrada - Parcelas | CodEmp;CodFil;CodFor;CodSnf;NumNfi;CodPar |
| `E660PAR` | Redução Z - Parcelas | CodEmp;CodFil;CodEqu;DatRef;SeqRez;NumCfi;CodSnf;CodPar |
| `E660PAV` | Nota Fiscal de Saída - Parcelas | CodEmp;CodFil;CodSnf;NumNfi;CodPar |
| `E660POD` | Outros Documentos - Parcelas | CodEmp;CodFil;NumDoc;SeqDoc;CodPar |
| `E660REZ` | Redução Z - Movimento | CodEmp;CodFil;CodEqu;DatRef;SeqRez |
| `E660RRZ` | Registro do controle de saídas de cupons fiscais | IdeUni |
| `E660RSC` | Registro de controle de entrada | IdeRsc |
| `E660RSV` | Registro de Controle de Saídas | IdeRsv |
| `E660RTC` | Nota Fiscal de Entrada - Rateios | CodEmp;CodFil;CodFor;NumNfi;NumNff;CodSnf;CodTns;SeqRat |
| `E660RTV` | Nota Fiscal de Saída - Rateios | CodEmp;CodFil;CodCli;NumNfi;NumNff;CodSnf;CodTns;SeqRat |
| `E660RTZ` | Redução Z - Movimentos - Rateios | CodEmp;CodFil;CodEqu;DatRef;SeqRez;SeqRat |
| `E660SRT` | Nota Fiscal de Saída - Impostos Reforma tributária | CodEmp;CodFil;CodCli;NumNfi;NumNff;CodSnf;CodTns;SeqInv;CodImp |
| `E660TNF` | Redução Z - Totalizadores Não Fiscais | CodEmp;CodFil;CodEqu;DatRef;CodTot |
| `E660TOF` | Redução Z - Totalizadores Fiscais | CodEmp;CodFil;CodEqu;DatRef |
| `E660TOR` | Redução Z - Detalhamento dos totalizadores importados | IdeUni |
| `E661AJC` | Ajustes da apuração do ISS Retido | CodEmp;CodFil;CodImp;CodRai;DatApi;SeqAjc;TipAjc |
| `E661ASP` | Resumo da Contribuição do SPED Pis/Cofins | CodEmp;CodFil;CodImp;DatApi |
| `E661CAI` | Compensações Aproveitadas nos Pagamentos | CodEmp;CodFil;CodImp;DatApi;SeqMci;SeqCai |
| `E661CAL` | Resumo da Apuração para a Instituição ou Dependência IdeCtd | IdeUni |
| `E661CCC` | Conta Corrente por Cidade ISS | CodEmp;CodFil;CodImp;CodRai;DatApi |
| `E661CCI` | Conta Corrente dos Impostos | CodEmp;CodFil;CodImp;DatApi |
| `E661CIA` | Resumo da Apuração dos Impostos por Família Agro | IdeUni |
| `E661CIS` | Créditos do ISS Retido | IdeUni |
| `E661CRE` | Controle dos Créditos Fiscais do SPED Pis/Cofins | CodEmp;CodFil;CodImp;DatApi;SeqMov;PerApu;OriCre;NumCgc;TipCre |
| `E661CSP` | Resumos dos Créditos do SPED Pis/Cofins | CodEmp;CodFil;CodImp;DatApi;TipCre;AliImp |
| `E661CSS` | Resumo da apuração do Simples | CodEmp;CodFil;CodImp;DatApi |
| `E661CUF` | Conta Corrente dos Impostos por Estado | CodEmp;CodFil;CodImp;SigUfs;DatApi |
| `E661DEC` | Valores Declaratórios da Apuração | CodEmp;CodFil;CodImp;DatApi;SeqDec |
| `E661GRI` | Guias de Recolhimento de Impostos | CodEmp;CodFil;CodImp;DatApi;SeqLct |
| `E661HTL` | Histórico de transferência de linhas | IdeUni |
| `E661MCI` | Movimentos dos Impostos | CodEmp;CodFil;CodImp;DatApi;SeqMci |
| `E661OAS` | Detalhamento Contribuição para SPED Pis/Cofins | CodEmp;CodFil;CodImp;DatApi;ConSoc;AliImp |
| `E661OCI` | Resumo das Origens dos Impostos por Cidade ISS | CodEmp;CodFil;CodImp;CodRai;DatApi;NopOpe |
| `E661OCS` | Detalhamento Base Cálculo do Crédito SPED Pis/Cofins | CodEmp;CodFil;CodImp;DatApi;TipCre;AliImp;BasCre;CstCre |
| `E661OCX` | Resumo das Origens dos Impostos de Regime de Caixa para Pis e Cofins | CodEmp;CodFil;CodImp;DatApi;CodCst;CodEdc;NopOpe;CtaRed;SeqOri |
| `E661ORI` | Resumo das Origens dos Impostos | CodEmp;CodFil;CodImp;DatApi;CodAgf;CodTns |
| `E661OUF` | Resumo das Origens dos Impostos por Estado | CodEmp;CodFil;CodImp;SigUfs;DatApi;CodAgf;NopOpe |
| `E661RAE` | Resumo do Cálculo - Adicionais e Exclusões | CodEmp;CodFil;CodImp;DatApi;CodAgf;SeqRae |
| `E661RAF` | Resumo do Imposto por Agrupamento Fiscal | CodEmp;CodFil;CodImp;DatApi;CodAgf |
| `E661RAT` | Rateios dos Movimentos dos Impostos | CodEmp;CodFil;CodImp;DatApi;SeqMci;SeqRat |
| `E661REC` | Resumo do Imposto por Cidade ISS | CodEmp;CodFil;CodImp;CodRai;DatApi |
| `E661RES` | Resumo do Cálculo dos Impostos | CodEmp;CodFil;CodImp;DatApi |
| `E661RET` | Controle dos Valores Retidos do SPED PIS/Cofins | CodEmp;CodFil;CodImp;DatApi;SeqMov;PerApu;NatRet;TipTds;LinTds |
| `E661RUF` | Resumo do Cálculo dos Impostos por Estado | CodEmp;CodFil;CodImp;SigUfs;DatApi |
| `E661VIE` | Valores Internos e Externos | IdeUni |
| `E662CAL` | Resumo Prévias da Apuração para a Instituição ou Dependência Tributação Desif | IdeUni |
| `E662CPS` | Controle dos Impostos a Compensar | CodEmp;CodFil;CodImp;DatCps |
| `E662ICP` | Aproveitamento das Compensações | CodEmp;CodFil;CodImp;DatCps;SeqCps |
| `E666FGT` | Faturamento Mês p/ Grupo Fiscal x Transação | CodEmp;CodFil;DatCpt;CodAgf;CodTns |
| `E667FMB` | Faturamento Mês Bruto Por Filial | CodEmp;CodFil;DatCpt |
| `E667SFB` | Faturamento Mês para SPED Pis/Cofins | CodEmp;CodFil;DatCpt;TipRem |
| `E667SMC` | Matriz de Crédito SPED Pis/Cofins | CodEmp;CodFil;DatCpt;TipRem;CstCre |
| `E667SOR` | Resumo das Origens do Faturamento Mês para SPED Pis/Cofins | CodEmp;CodFil;DatCpt;TipRem;FilMov;CstOri;NopOpe |
| `E668FAE` | Faturamento Mês Líquido - Adições e Exclusões | CodEmp;DatCpt;SeqFae |
| `E668FML` | Faturamento Mês Líquido da Empresa | CodEmp;DatCpt |
| `E668SAE` | Faturamento Mês para SPED Pis/Cofins - Adições e Exclusões | CodEmp;CodFil;DatCpt;TipRem;SeqSae |
| `E690ORI` | Resumo das Origens da EFD Reinf | CodEmp;CodFil;CodImp;DatApi;TipReg;IdeUni |

## Insight Control

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000INP` | Ligação Insights X Papéis | IdeUni |
| `E000INS` | Controle de Insights | HasHid |
| `E000PAP` | Papéis da Plataforma (Roles) | IdeUni |

## Insights

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000OBI` | Observações | CodIsg;SeqObs |

## IntegraÃ§Ã£o Senior X

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E199CPM` | Controle de processamento de mensagens | IDEMSG;IDEROT |

## IntegraÃ§Ãµes Senior X

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E199ROT` | Rotinas | IdeUni |

## Integração

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E110CCU` | Centros de Custos | ImpExp;CodEmp;CodCcu;SeqInt |
| `E110CLI` | Clientes | ImpExp;CodCli;SeqInt |
| `E110COB` | Clientes - Endereços de Cobrança | ImpExp;CodCli;SeqCob;SeqInt |
| `E110CPG` | Condição de Pagamento | ImpExp;CodEmp;CodCpg;SeqInt |
| `E110DER` | Derivações | ImpExp;CodEmp;CodPro;CodDer;SeqInt |
| `E110DOC` | Documentos - Dados Gerais | ImpExp;CodEmp;CodFil;CodSnf;NumDoc;CodFor;SeqInt |
| `E110ENT` | Clientes - Endereços de Entrega | ImpExp;CodCli;SeqEnt;SeqInt |
| `E110FOR` | Fornecedores | ImpExp;CodFor;SeqInt |
| `E110HCL` | Clientes - Históricos | ImpExp;CodCli;CodEmp;CodFil;SeqInt |
| `E110HFO` | Fornecedores - Históricos | ImpExp;CodFor;CodEmp;CodFil;SeqInt |
| `E110ICP` | Condição de Pagamento - Parcelas | ImpExp;CodEmp;CodCpg;SeqIcp;SeqInt |
| `E110IDF` | Impostos para Documento Fiscal | CodEmp;CodFil;CodPro;CodDer;CodSer;PerInf |
| `E110IPR` | Documentos - Itens de Produtos | ImpExp;CodEmp;CodFil;CodSnf;NumDoc;CodFor;SeqIpr;SeqInt |
| `E110ISR` | Documentos - Itens de Serviços | ImpExp;CodEmp;CodFil;CodSnf;NumDoc;CodFor;SeqIsr;SeqInt |
| `E110MCP` | C. Pagar - Títulos - Movimentos | ImpExp;CodEmp;CodFil;NumTit;CodTpt;CodFor;SeqMov;SeqInt |
| `E110MCR` | C. Receber - Títulos - Movimentos | ImpExp;CodEmp;CodFil;NumTit;CodTpt;SeqMov;SeqInt |
| `E110MVP` | Estoques - Movimentos | ImpExp;CodEmp;CodPro;CodDer;CodDep;DatMov;SeqMov;SeqInt |
| `E110PLA` | Plano Contábil - Contas | ImpExp;CodEmp;CtaRed;SeqInt |
| `E110PRO` | Produtos | ImpExp;CodEmp;CodPro;SeqInt |
| `E110REP` | Representantes | ImpExp;CodRep;SeqInt |
| `E110TCP` | C. Pagar - Títulos - Dados Gerais | ImpExp;CodEmp;CodFil;NumTit;CodTpt;CodFor;SeqInt |
| `E110TCR` | C. Receber - Títulos - Dados Gerais | ImpExp;CodEmp;CodFil;NumTit;CodTpt;SeqInt |
| `E110TRA` | Transportadoras | ImpExp;CodTra;SeqInt |
| `E115CFG` | Configuração de Integração Senior X - Agronegócio Senior | IdeUni |
| `E115CHA` | Controle de Hash - Agronegócio Senior | IdeUni |
| `E185CFF` | Operador Logístico - Ligação Classificação Fiscal x Família | IdeUni |
| `E185CFG` | Cadastros - Configurações - Configuração de integração ERP WMS Silt | CodEmp;CodFil |
| `E185CFP` | Operador Logístico - Ligação Classificação Fiscal x Produto | IdeUni |
| `E185GKO` | Configurações - Configuração de integração ERP GKO | CodEmp;CodFil |
| `E185MOT` | Cadastros - Configurações - Motivos de bloqueio do pedido de venda | CodEmp;CodFil;MotBlq |
| `E185PRO` | Cadastros - Produtos |  |
| `E185PRS` | Cadastros - Ligação de produtos | CodEmp;CodPro;IdtInt |
| `E185TNS` | Cadastros - Configurações - Ligação Transação x CFOP | CodEmp;CodFil;ModSlt;LisMod;ComNop |

## Integração WMS

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E140FWP` | Nota Fiscal de Saída - Fila de registros de cancelamento a processar | Ideuni |
| `E140HSW` | Nota Fiscal de Saída - Histórico das situações de integração com WMS | Ideuni |
| `E140SIW` | Nota Fiscal de Saída - Situação da integração com WMS | Ideuni |

## Integração com a plataforma

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E115ECE` | Etapas dos registros | IdeUni |

## Integrações

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000CGR` | Controle de Geração de Relatórios | SeqCgr |
| `E000CMC` | Convênios Movimento de Conta | SeqInt |
| `E000CMP` | Configuração de web service - Campos exportados | SeqCmp |
| `E000CSE` | Varejo - Controle de Séries Externas | CodEmp;CodPro;CodDer;NumSep;CodFor |
| `E000CWS` | Configuração de web service | SeqcWS |
| `E000HCV` | Varejo - Histórico de configuração | CodEmp;CodFil;SeqHis |
| `E000LOC` | Varejo - Ligação O.P. com Cupom Fiscal | IdeLoc |
| `E000OPC` | Varejo - O.P. com pendência de baixa de componentes | IdeOpc |
| `E000PPD` | Estoques - Posição de estoque do produto em determinado momento | IDEUNI |
| `E001TCV` | Varejo - Transação de Cupom X Transação de Nota Consumidor Final | CodEmp;CodTns |
| `E028VAR` | Varejo - Parâmetros da Condição de Pagamento | CodEmp;CodFil;CodCpg |
| `E066CAR` | Varejo - Cartão Presente | CodEmp;CodFil;CarPre |
| `E066DVP` | Varejo - Desconto por valor de parcela | IdeUni |
| `E066LCP` | Varejo - Ligação Forma x Condição | CodEmp;CodFil;CodCpg;CodFpg |
| `E066VAR` | Varejo - Parâmetros da Forma de Pagamento | CodEmp;CodFil;CodFpg;CodEqu |
| `E070ONF` | Varejo - Operações de nota fiscal | CodEmp;CodFil;CodOpe |
| `E070VAR` | Varejo - Parâmetros de Integração | CodEmp;CodFil;CodInt |
| `E090VAR` | Varejo - Parâmetros de representante (vendedor) | CodEmp;CodFil;CodRep |
| `E199PSU` | G5 x G7 - Parâmetros para integração com Suprimentos G7 | CodEmp;CodFil |
| `E997EXT` | Ligação de Usuário G5 com Usuário G7 | IdeUni |
| `E997TAP` | Tokens por aplicação para integração SeniorX | AppNam |
| `E998CLI` | WMS - Clientes | IdeUni |
| `E998CTA` | Cotei - Pendência de envio de Compradores | IdeUni |
| `E998CTC` | Cotei - Pendência de Envio das Condições de Pagamento | IdeUni |
| `E998CTE` | Cotei - Fila de Cotações Pendentes para Envio | IdeUni |
| `E998CTF` | Cotei - Cotações Finalizadas | IdeUni |
| `E998CTO` | Cotei - Fornecedores Pendentes da Fila de Cotações | IdeUni |
| `E998CTR` | Cotei - Fila de Cotações Pendentes de Retorno | IdeUni |
| `E998EME` | WMS - Ordem de Recebimento - Movimento Estoque Manuais | IdeUni |
| `E998FOR` | WMS - Fornecedores | IdeUni |
| `E998IOR` | WMS - Ordem de Recebimento - Itens de Produto | IdeUni |
| `E998IOS` | WMS - Ordem de Separação - Itens de Produto | IdeUni |
| `E998IRW` | Ordem de Recebimento - Itens de Produto conferidos no wms | IdeUni |
| `E998LOS` | WMS - Ordem de Separação - Lotes dos Itens de Produto | IdeUni |
| `E998LSC` | WMS - Lotes e séries conferidos | IdeUni |
| `E998LSR` | WMS - Lotes e séries originais da Ordem de Recebimento | IdeIor;NumSeq |
| `E998MEW` | WMS - Ordem de Separação - Movimento Estoque originados no wms | IdeUni |
| `E998NFC` | WMS - Ordem de Recebimento - Nota Fiscal de Entrada | IdeOrc |
| `E998NFV` | WMS - Nota Fiscal de Saída X Ordem Separação | CodEmp;CodFil;CodSnf;NumNfv |
| `E998ORC` | WMS - Ordem de Recebimdnto - Dados Gerais | IdeUni |
| `E998ORM` | WMS - Ordem de Produção ERP(Apontamento de produção) X Ordem de Recebimento | CodEmp;CodOri;NumOrp;SeqInt |
| `E998ORP` | WMS - Ordem de Recebimento - Payloads | IdeOrp |
| `E998ORW` | WMS - Ordem de Recebimdnto no Wms | IdeUni |
| `E998OSC` | WMS - Ordem de Separação - Dados Gerais | IdeUni |
| `E998OSE` | WMS - Ordem de Separação - Ordens de origem externa | IdeUni |
| `E998OSM` | WMS - Ordem de Produção ERP X Ordem Separação | CodEmp;CodOri;NumOrp;SeqInt |
| `E998OSP` | WMS - Ordem de Separação - Payloads | IdeOsc |
| `E998OSR` | WMS - Requisição de Estoque ERP x Ordem de Separação | CodEmp;NumEme;SeqEme;SeqInt |
| `E998PED` | WMS SILT - Pedido de Venda X Ordem Separação | CodEmp;CodFil;NumPed |
| `E998PFE` | WMS - Pré-fatura X Ordem Separação | CodEmp;CodFil;NumAne;NumPfa |
| `E998PIS` | WMS - Ordem de Separação - Itens de Produto - Personalização | IdeUni |
| `E998POS` | WMS - Ordem de Separação - Dados Gerais - Personalização | IdeUni |
| `E998PRO` | WMS - Produtos | IdeUni |
| `E998SMA` | WMS - Ordem de Separação/Recebimento - Movimentos/Transferências de Estoque Agrupados | IdeUni |
| `E998SME` | WMS - Ordem de Separação - Movimento Estoque Manuais | IdeUni |
| `E998SOS` | WMS - Ordem de Separação - Séries dos Itens de Produto | IdeUni |
| `E998SXT` | WMS - Lotes de Integração | CodInt;CodEmp;CodFil;IdeInt;IdeUni |
| `E998TRA` | WMS - Transportadoras | IdeUni |

## Integrações com plataforma

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E115EXC` | Customizações | IdeExt |

## LGPD

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R901CFG` | Configurações Gerais |  |
| `R901ENV` | Campos de Informações de Envolvidos no Dossiê | NumSec;TipEnv |
| `R901INF` | Informações do Dossiê | NumSec;OrdInf |
| `R901LOG` | Log de exclusão/anonimização | DatLog;HorLog;SeqLog |
| `R901OPE` | Informações do Usuário Operador da LGPD | CodUsu |

## Lançamentos

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E669DFC` | Controle Documentos Cancelados | CodEmp;CodFil;DatCpt;CodSnf;NumAid;SeqLct |
| `E669DFI` | Controle Documentos Utilizados | CodEmp;CodFil;DatCpt;CodSnf;NumAid |

## Ligação de produtos ou serviços por estado

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E070PEE` | Operações de entrada | CodEmp;CodFil;DatIni;SigUfs;CodPro;CodSer |
| `E070PSE` | Operações de saída | CodEmp;CodFil;DatIni;SigUfs;CodPro;CodSer |

## Limpeza do log de eventos

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R995LIM` | Auditoria de telas | CODCPA;CODTPA;CODSYS |

## Log

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R900LCN` | Controlador de Registros em R900LOG |  |
| `R900LOG` | Eventos Registrados | EVTPOS |
| `R900LSV` | Valores de direito de acesso do Visualizador de Eventos | RSCNAM;DATSEQ |

## Manufatura

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000PGM` | Parâmetros - Parâmetros Gerais Manufatura | IdeUni |

## Manutenção

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E103CAT` | Categorias | CodEmp;CodCat |
| `E103CCE` | Coleta por Equipamento/Ferramenta | CodEmp;CodEqp;CodCcm;DatCol;HorCol |
| `E103CCM` | Tipo de Coletas | CodEmp;CodCcm |
| `E103CGE` | Ligação Grupo de Equipamentos/Ferramentas X Tipo de Coleta | CodEmp;CodGrp;CodCcm |
| `E103EMT` | Registro de Manutenção | CodEmp;CodEqp;NumMnt |
| `E103EQP` | Equipamentos | CodEmp;CodEqp |
| `E103GRP` | Grupo de Equipamentos/Ferramentas | CodEmp;CodGrp |
| `E103MVE` | Movimento de Estoque | CodEmp;CodEqp;NumMnt;SeqMve |
| `E103OMT` | Observações da Execução de Manutenção | CodEmp;CodEqp;NumMnt;SeqObs |
| `E103PRI` | Prioridades de Manutenção | CodEmp;CodPri |
| `E103RPS` | Requisição Produto/Serviço | CodEmp;CodEqp;NumMnt;SeqRps |
| `E103SGE` | Ligação de Serviço e Grupo de Equipamentos/Ferramentas | CodEmp;CodGrp;CodSer;SeqPrg |
| `E103SVF` | Concessões de vida/sobrevida equipamento/ferramenta | CodEmp;CodEqp;SeqSvf |
| `E103TCC` | Troca de Contador de Tipo de Coleta | CodEmp;CodEqp;CodCcm;DatTcc;HorTcc |

## Menus personalizados

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R999MAD` | Add Ons | TIPO;CodUsu;MODID;NamMen;ID |

## Mercado

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E113AES` | Gestão de Vendas - Assinatura Eletrônica do Receituário pelo Sign | CodEmp;CodFil;SeqRem |
| `E113LAS` | Gestão de Vendas - Assinatura Eletrônica do Receituário pelo Sign - Log Detalhado | CodEmp;CodFil;SeqRem;SeqLog |
| `E113RCA` | Gestão de Vendas - Receituário Agronômico - Receitas Canceladas para Reaproveitar | CodEmp;CodFil;SeqRem |
| `E113RCF` | Gestão de Vendas - Receituário Agronômico - Característica da receita agronômica finalizada | CodEmp;CodFil;SeqRem;SeqRei;CodCtr |
| `E113REC` | Gestão de Vendas - Receituário Agronômico - Característica receita agronômica | CodEmp;CodFil;SeqRem;SeqRei;CodCtr |
| `E113REF` | Gestão de Vendas - Receituário Agronômico - Receita agronômica finalizada | CodEmp;CodFil;SeqRem |
| `E113REI` | Gestão de Vendas - Receituário Agronômico - Itens da receita agronômica | CodEmp;CodFil;SeqRem;SeqRei |
| `E113REM` | Gestão de Vendas - Receituário Agronômico - Emissão da receita agronômica | CodEmp;CodFil;SeqRem |
| `E113RIF` | Gestão de Vendas - Receituário Agronômico - Itens da receita agronômica finalizada | CodEmp;CodFil;SeqRem;SeqRei |

## Mobile

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R950CTD` | Configuração detalhes | CodTkn;CodPar |
| `R950CTM` | Configuração dos tokens | CodTkn |

## Motivos de Parada

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E018LMN` | Ligação com Equipamento e Serviço de Manutenção | CodEmp;CodMtv;CodEqp;CodSer |

## Notas Explicativas

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E046GNE` | Grupos | CodEmp;GruNex |
| `E046NEI` | Imagens | CodEmp;GruNex;CodImg |
| `E046NEX` | Notas | CodEmp;GruNex;SeqNex |

## Notas Fiscais de Entrada

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E440CCP` | eventos de documentos eletrônicos - Produtos do Documento | CodEmp;CodFil;CodFor;CodSnf;NumNfc;TipEve;SeqEve;SeqIpc |
| `E440CCS` | eventos de documentos eletrônicos - Serviços do Documento | CodEmp;CodFil;CodFor;CodSnf;NumNfc;TipEve;SeqEve;SeqIsc |

## Notas fiscais de saída

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E140EGD` | Erros de Geração de documento eletrônico | IdeUni |
| `E140NRN` | Notas que tiveram erro de geração em processo paralelo | CodEmp;CodFil;CodSnf;NumNfv |

## O.P./O.S.

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E900CCB` | Contagem das quantidades da O.P./O.S. via código de barras | CodEmp;CodOri;NumOrp;CodEtg;SeqRot;SeqEoq |
| `E900CMI` | Componentes Utilizados Individualmente (Rastreabilidade Lote/Série) | CodEmp;CodOri;NumOrp;CodEtg;SeqCmp;SeqCmi |
| `E900CMO` | Componentes Utilizados | CodEmp;CodOri;NumOrp;CodEtg;SeqCmp |
| `E900CMR` | Agrupamento Componentes Utilizados Individualmente (Rastreabilidade Lote/Série) | CodEmp;CodOri;NumOrp;CodEtg;SeqCmr |
| `E900CPB` | Componentes Pendentes p/ Baixar (O.Ps./O.Ss./Produtos Precisam Ser Explodidos) | CodEmp;CodOri;NumOrp;CodEtg;SeqRot;CodPro;CodDer;StsPro |
| `E900CPR` | Controle processos de remessa para terceiros via WS | CodEmp;NumPrc |
| `E900DLS` | Quantidades Entrada, Vencimento, Lote, Série | CodEmp;CodOri;NumOrp;CodPro;CodDer;SeqDls |
| `E900DOP` | Defeitos de fabricação p/ Estágios | CodEmp;CodOri;NumOrp;CodEtg;SeqDop;CodDft |
| `E900ECO` | Apontamento Especificações Conformidade p/ Produto | CodEmp;CodOri;NumOrp;CodPro;CodDer;CodEct |
| `E900EOF` | Movimentação Ferramentas/Equipamentos utilizados no apontamento | CodEmp;CodOri;NumOrp;CodEtg;SeqEoq;CodFrt;DerFrt;CodEqp |
| `E900EOO` | Movimentação OP/OS para o Painel OEE | IdeUni |
| `E900EOQ` | Movimentação OP/OS | CodEmp;CodOri;NumOrp;CodEtg;SeqEoq |
| `E900GOP` | Guias O.P. p/ Derivação | CodEmp;CodOri;NumOrp;NumGop |
| `E900HOO` | Horários Ocupados por O.Ps./O.Ss. | CodEmp;CodFil;CodEtg;CodCre;DatCin;SeqOrc;SeqHoo |
| `E900IPR` | Itens do processo de remessa para terceiros | CodEmp;NumPrc;SeqIpr |
| `E900IRS` | Informações para Remessa/Retorno de Serviço de Terceiros | CodEmp;CodOri;NumOrp;CodEtg;SeqRot;RemSer |
| `E900NSR` | Narrativa da Seqüência Operacional | CodEmp;CodOri;NumOrp;CodEtg;SfxEtr;SeqRot;SfxSeq;SeqNsr |
| `E900OBS` | Observações Adicionais da O.P. | CodEmp;CodOri;NumOrp;SeqObs |
| `E900OOF` | Ferramentas/Equipamentos previstos para utilização na operação | CodEmp;CodOri;NumOrp;CodEtg;SfxEtr;SeqRot;SfxSeq;CodFrt;DerFrt;SeqOof |
| `E900OPR` | Ordens de Produção do processo de remessa para terceiros | CodEmp;NumPrc;SeqOpr |
| `E900ORC` | Ocupação dos Recursos no Calendário Industrial | CodEmp;CodFil;CodEtg;CodCre;DatCin;SeqOrc |
| `E900POP` | Pedidos da O.P./O.S. | CodEmp;CodOri;NumOrp;CodFil;NumPed;SeqIpd;CodPvp;PvpPai;CodPro;CodDer;AgrNec;AgrPai |
| `E900QDO` | Quantidades para Produto/Serviço e Derivação | CodEmp;CodOri;NumOrp;CodPro;CodDer |
| `E900RCP` | Remessa de componentes da OP | CodEmp;CodOri;NumOrp;CodEtg;SeqCmp;SeqDls |
| `E900ROP` | Agrupamentos de O.Ps./O.Ss. p/ Derivação (Reprocesso/Sumarização) | CodEmp;CodOri;OrpRpc;NumOrp;CodPro;CodDer |
| `E900SET` | Controle de Remessa/Retorno Serviços Terceiros | CodEmp;CodOri;NumOrp;CodEtg;SeqRot;CodPro;CodDer;SeqSet |
| `E900SOP` | Serviços Executados por Terceiros | CodEmp;CodOri;NumOrp;CodEtg;SeqRot;SeqSop |

## OP

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E900ICP` | Incorporação Produtos | CodEmp;CodOri;NumOrp;SeqIcp |

## OP/OS

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E900COP` | Cabeçalho (Dados Gerais) | CodEmp;CodOri;NumOrp |
| `E900EOP` | Estágios de produção | CodEmp;CodOri;NumOrp;CodEtg |
| `E900MEO` | Movimento de Estoque | CodEmp;CodOri;NumOrp;SeqMeo |
| `E900OOP` | Sequência Operacional | CodEmp;CodOri;NumOrp;CodEtg;SfxEtr;SeqRot;SfxSeq |
| `E900RIN` | Remessa/Retorno Serviços Terceiros - Ligação Item Nota Fiscal Venda | CodEmp;CodOri;NumOrp;CodEtg;SeqRot;CodPro;CodDer;SeqSet;CodFil;CodSnf;NumNfv;SeqIpv |
| `E900SPR` | Subproduto | CodEmp;CodOri;NumOrp;CodEtg;SeqSpr |

## PCP

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E802CIN` | Calendário Industrial | CodEmp;CodFil;CodEtg;CodCre;DatCin |
| `E803HTR` | Horários do Turno de Trabalho | CodEmp;CodEtg;CodCre;TurTrb;DatVal;SeqHtr |
| `E803TRB` | Dados do Turno de Trabalho | CodEmp;CodEtg;CodCre;TurTrb;DatVal |
| `E810DRP` | Dados do C. de Recursos p/ Cálculo Carga | CodEmp;CodPvp;CodCre;CodEtg |
| `E811PTU` | Carga - Produto Tempo Utilizado p/ Recurso | CodEmp;CodPvp;CgaSml;CodCre;CodPro;CodDer |
| `E812RSU` | Carga - Recursos Utilizados Como Substitutos | CodEmp;CodPvp;CgaSml;CodCre;CreSbs |
| `E812RUP` | Carga - Recursos Utilizados no Período | CodEmp;CodPvp;CgaSml;CodCre |
| `E814DLS` | Quantidades Entrada, Vencimento, Lote, Série | CodEmp;CodFil;NumPed;SeqIpd;CodPvp;CodPro;CodDer;SeqDls |
| `E814NBC` | Necessidades Compras p/ Produção | CodEmp;CodFil;NumPed;SeqIpd;CodPvp;CodPro;CodDer;PvpPai;AgrNec;AgrPai |
| `E815DLS` | Quantidades Entrada, Vencimento, Lote, Série | CodEmp;CodFil;NumPed;SeqIpd;CodPvp;CodPro;CodDer;SeqDls |
| `E815NBP` | Necessidades Produtos | CodEmp;CodFil;NumPed;SeqIpd;CodPvp;CodPro;CodDer;PvpPai;AgrNec;AgrPai |
| `E825LCP` | Layout Células de Produção | CodEmp;CodCel;DatLcp;CodEtg;CodCre |

## Painel de Integração

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E115PIC` | Comandos Personalizados | IdeUni |

## Parada de Equipamento

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E930OBP` | Observações | CodEmp;NumPre;SeqObs |
| `E930PRE` | Dados Gerais | CodEmp;NumPre |
| `E930PRO` | Dados Gerais para o Painel OEE | IdeUni |

## Parâmetros

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E004PAD` | Geração automática de documentos eletrônicos | IdeUni |

## Parâmetros da categoria do evento de auditoria

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R995PTA` | Auditoria de telas | CODTPA;CODSYS;NAMPTA |

## Parâmetros do Recebimento Eletrônico

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E070CRE` | Grupos de Campos - Campos | IdeUni |
| `E070GRE` | Grupos de Campos | IdeUni |
| `E070IRE` | Itens | IdeUni |
| `E070RIG` | Relacionamento entre Itens e Grupos | IdeUni |

## Patrimônio

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E670BEM` | Cadastro dos Bens do Patrimônio | CodEmp;CodBem |
| `E670CAL` | Histórico do Cálculo do Bem | CodEmp;CodBem;DatCal |
| `E670CCB` | Características do Bem | CodEmp;CodBem;CodCbm |
| `E670CEX` | Bens - Exaustão - Competências | CodEmp;CodBem;AnoBas;ComExa |
| `E670CIN` | Histórico do Cálculo do Incentivo | CodEmp;CodBem;CodInc;DatCin |
| `E670DRA` | Bens - Definições de rateios | CodEmp;CodBem;DatLoc;SeqLoc;CodCcu |
| `E670INC` | Incentivos Fiscais do Bem | CodEmp;CodBem;CodInc |
| `E670LOC` | Localização do Bem | CodEmp;CodBem;DatLoc;SeqLoc |
| `E670LOG` | Log de Telas | CodEmp;CodBem;DatLct;HorLct |
| `E670MLO` | Movimentos de Localizações | NumMan;SeqMlo |
| `E670MOV` | Movimentação Contábil | CodEmp;CodBem;DatMov;SeqMov |
| `E670OBS` | Observações do Bem | CodEmp;CodBem;SeqObs |
| `E670PEX` | Bens - Exaustão - Anos/Vida Útil | CodEmp;CodBem;AnoBas |
| `E670POR` | Portadores de bens | CodEmp;CodPor |
| `E670RAT` | Rateios da Movimentação Contábil | CodEmp;CodBem;DatMov;SeqMov;SeqRat |
| `E670SAL` | Saldos Mensais do Patrimônio | CodEmp;CodFil;MesAno;SeqSal |
| `E673CBM` | Cadastro das Características do Bem | CodEmp;CodCbm |
| `E673CCB` | Cadastro dos Componentes Características | CodEmp;CodCbm;SeqCcp |
| `E674CEX` | Espécies - Exaustão - Competências | CodEmp;CodEsp;AnoBas;ComExa |
| `E674CON` | Cadastro das Contas Contábeis para Contabilização | CodEmp;CodEsp;CodCcu;CodTns;DatVal |
| `E674ESP` | Cadastro de Espécies | CodEmp;CodEsp |
| `E674INV` | Cadastro de Investimentos | CodEmp;CodInv;DatVal |
| `E674LOR` | Cadastro de Locais | CodEmp;CodLoc |
| `E674PEA` | Parâmetros por Espécie e Tipo de Acréscimo | CodEmp;CodEsp;TipAcr |
| `E674PEN` | Cadastro de Penhores | CodEmp;CodPen;DatVal |
| `E674PEX` | Espécies - Exaustão - Anos/Vida Útil | CodEmp;CodEsp;AnoBas |
| `E674TUR` | Cadastro de Turnos para Desvalorização | CodEmp;CodTur |
| `E675TIN` | Tipos de Incentivos | CodInc |
| `E676BIN` | Bens do Inventário | CodEmp;CodInv;CodBem;DatLoc;SeqLoc |
| `E676CON` | Conferências do Inventário | CodEmp;CodInv;CodBem;DatLoc;SeqLoc;NumCon |
| `E676INV` | Cadastro de Inventários | CodEmp;CodInv |
| `E676MOC` | Movimentos de Conciliação do Inventário | CodEmp;CodInv;CodBem;DatLoc;SeqLoc;SeqCon |

## Pendências

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000MTX` | Tesouraria - Fluxo de caixa SeniorX | CodEmp;NumCco;DatMov;SeqMov |

## Perspectivas de Negócio

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R900PEN` | Controle de Usuários | MODID;PNID;DATSEQ |

## Produção

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E906GRP` | Grupos de Operadores | CodEmp;CodGrp |
| `E906OPE` | Operadores | CodEmp;NumCad |

## Qualidade/Inspeção

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E101TCL` | Tipos para Classificação de Laudo | CodTcl |

## Recebimento de Documentos Eletrônicos

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000IPR` | Notas de Entrada - Itens de Produto - Reforma tributária | CgcFil;CgcFor;ChvNel;SeqIpc;CodImp |
| `E000ISR` | Notas de Entrada - Itens de Serviço - Reforma tributária | CgcFil;CgcFor;ChvNel;SeqIsc;CodImp |

## Recebimento de Documentos eletrônicos

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000NFC_DEST` | Notas Fiscais de entrada - Destinatário | CgcFil;CgcFor;ChvNel |
| `E000NFC_EMIT` | Notas Fiscais de entrada - Emitente | CgcFil;CgcFor;ChvNel |

## Recebimentos Varejo

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E111ITE` | Itens | CodEmp;CodFil;SeqRec;SeqIte |
| `E111PAR` | Parcelamento | CodEmp;CodFil;SeqRec;SeqPar |
| `E111TEF` | Dados TEF | CodEmp;CodFil;SeqRec;SeqTef |

## Receituário Agronômico

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E113ACR` | ART CREA | CodAgr;SigUfs;CodArt |
| `E113AEQ` | Equipamento na Aplicação | CodEmp;CodEtp;CodDpp;CodDia;CodPro;CodDer;SeqEqp |
| `E113APL` | Aplicação | CodEmp;CodEtp;CodDpp;CodDia;CodPro;CodDer |
| `E113APT` | Tipo de aplicação | CodApt |
| `E113BEQ` | Equipamento na Bula | CodEmp;CodPro;SeqEqp |
| `E113BUL` | Bula do Produto | CodEmp;CodPro |
| `E113CCA` | Categoria de comercialização de agrotóxico | CodCca |
| `E113CEB` | Código por estado na bula | CodEmp;CodPro;SigUfs |
| `E113CEC` | Código por estado da cultura, praga e produto na  aplicação | CodEmp;CodPro;CodDer;CodEtp;CodDpp;CodDia;SigUfs;DesCam |
| `E113CEE` | Código por estado da embalagem, unidade de medida e capacidade na  aplicação | CodEmp;CodPro;CodDer;CodEtp;CodDpp;CodDia;SigUfs;CodEmb;UniMed;QtdRec |
| `E113CFB` | Característica ficha de emergência na bula | CodEmp;CodPro;CodCfe |
| `E113CFE` | Característica ficha de emergência | CodCfe |
| `E113CLB` | Classe/tipo do produto da bula | CodEmp;CodPro;CodClo |
| `E113CLO` | Classe/Tipo de produto | CodClo |
| `E113CRA` | CREA | CodAgr;SigUfs |
| `E113CRB` | Característica receita agronômica na bula | CodEmp;CodPro;CodCtr |
| `E113CRE` | Característica receita agronômica na aplicação | CodEmp;CodPro;CodDer;CodEtp;CodDpp;CodDia;CodCtr |
| `E113CTR` | Característica da receita agronômica | CodCtr |
| `E113CTT` | Texto padrão para tipo de caracteristica  agronômica | TipCar;CodCtt |
| `E113DIA` | Diagnóstico | CodEmp;CodEtp;CodDpp;CodDia |
| `E113DIE` | Ligação praga/problema x estado | CodDpp;SigUfs |
| `E113DPP` | Praga/problema | CodDpp |
| `E113ECE` | Ligação embalagem e unidade de medida X estado | CodEmp;CodPro;CodDer;CodEmb;UniMed;QtdRec;SigUfs |
| `E113ECR` | Restrição por estado na aplicação | CodEmp;CodPro;CodDer;CodEtp;CodDpp;CodDia;SigUfs;DatIni |
| `E113EPE` | Ligação espécie/cultura x estado | CodEmp;CodEtp;SigUfs |
| `E113EQP` | Cadastro de Equipamentos | SeqEqp |
| `E113FRM` | Formulação | CodFrm |
| `E113PAB` | Princípio ativo na bula | CodEmp;CodPro;CodPra |
| `E113PCE` | Ligação produto x estado | CodEmp;CodPro;CodDer;SigUfs |
| `E113PEU` | Ligação produto x embalagem x unidade de medida | CodEmp;CodPro;CodDer;CodEmb;UniMed;QtdRec |
| `E113PRA` | Princípio ativo | CodPra |
| `E113REB` | Restrição por estado na bula | CodEmp;CodPro;SigUfs;DatIni |
| `E113RTC` | Responsável técnico | CodAgr |
| `E113UMD` | Unidade de medida da dose | UniMed |
| `E113UME` | Ligação unidade de medida da dose X estado | UniMed;SigUfs |

## Recetuário Agronômico

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E113BTA` | Tipo de aplicação na bula | CodEmp;CodPro;CodApt |

## Regras

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R900RUL` | controle de usuários | TemplId;DatSeq |

## SGQ

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E100APR` | Documentos - Histórico de Aprovações | CodEmp;CodDoc;SeqApr |
| `E100COP` | Documentos - Cópias Físicas | CodEmp;CodDoc;SeqCop |
| `E100DOC` | Documentos - Cadastro | CodEmp;CodDoc |
| `E100HDC` | Documentos - Históricos | CodEmp;CodDoc;SeqHdc |
| `E100PGQ` | Parâmetros | CodEmp;CodFil |
| `E100RDC` | Documentos - Referências Entre Documentos | CodEmp;CodDoc;EmpRdc;DocRdc |
| `E100RUC` | Documentos - Usuários X Cópias Físicas | CodEmp;CodDoc;SeqCop;CodUsu |
| `E100TDC` | Documentos - Tipos | CodEmp;CodTdc |
| `E101DFI` | Inspeções - Definição de Frequência de Inspeção | CodEmp;CodPro;CodDer;SeqDfi |
| `E101INP` | Inspeções - Cadastro | CodEmp;CodInp |
| `E101PIN` | Inspeções - Planos | CodEmp;CodPin |
| `E101PSR` | Inspeções - Ligação Plano de Inspeção X Roteiro de Produção | CodEmp;CodPin;SeqPxi;CodRot;CodEtg;SfxEtr;SeqRot;SfxSeq;CodPro;CodDer |
| `E101PXI` | Inspeções - Ligações com Planos | CodEmp;CodPin;SeqPxi |
| `E101PXV` | Inspeções - Verificações do Plano | CodEmp;CodPin;SeqPxi;SeqPxv |
| `E101VER` | Verificações padrões de inspeção | CodEmp;CodInp;SeqVer |
| `E102DEI` | Inspeções - Defeitos Encontrados | CodEmp;NumEpi;SeqEin;SeqDei |
| `E102EIN` | Inspeções - Execução | CodEmp;NumEpi;SeqEin |
| `E102EIV` | Execução de Verificações | CodEmp;NumEpi;SeqEin;SeqEiv |
| `E102EPI` | Inspeções - Execução de Planos | CodEmp;NumEpi |
| `E102ICF` | Inspeções - Inspeções pelo Controle de Frequência | CodEmp;CodPro;CodDer;SeqDfi;SeqIcf |
| `E102RDE` | Registro de Desvios | CodEmp;NumEpi;SeqEin |
| `E103CEQ` | Calibração de Equipamentos de Inspeção | CodEmp;CodEqp;SeqCeq |
| `E104AIE` | Acompanhamento de Implantação e Eficácia de Ações Preventivas e Corretivas | CodEmp;TipRmc;NumRmc;SeqApc;SeqAie |
| `E104APC` | Ações Preventivas e Corretivas | CodEmp;TipRmc;NumRmc;SeqApc |
| `E104ORG` | Origem do Registro da Qualidade | CodRgq |
| `E104RIS` | Registro de Requisitos ISO | ReqIso |
| `E104RMC` | Registros para Melhoria Contínua | CodEmp;TipRmc;NumRmc |
| `E104TRM` | Tipo de Documento para Registros para Melhoria Contínua | TipRmc |
| `E105EMA` | Manutenções - Execução | CodEmp;NumEpm;SeqEma |
| `E105EPM` | Manutenções - Execução de Planos | CodEmp;NumEpm |
| `E105MAN` | Manutenções - Cadastro | CodEmp;CodMan |
| `E105PMA` | Manutenções - Planos | CodEmp;CodPma |
| `E105PXM` | Manutenções - Ligações com Planos | CodEmp;CodPma;SeqPxm |
| `E106ASS` | Atendimento de Fornecedores - Assuntos | CodEmp;CodAss |
| `E106ATE` | Atendimento de Fornecedores - Registro | CodEmp;CodFil;CodFor;SeqAte |
| `E107AFO` | Avaliação Fornecedores - Avaliação | CodEmp;NumAfo |
| `E107ATE` | Avaliação Fornecedores - Atendimentos Avaliação | CodEmp;NumAfo;CodFil;CodFor;SeqAte |
| `E107EMP` | Avaliação Fornecedores - Parâmetros para Empresa | CodEmp |
| `E107FIL` | Avaliação Fornecedores - Filiais Avaliação | CodEmp;NumAfo;CodFil |
| `E107FOR` | Avaliação Fornecedores - Fornecedores Avaliação | CodEmp;NumAfo;CodFil;CodFor |
| `E107NFC` | Avaliação Fornecedores - Notas Fiscais Avaliação | CodEmp;NumAfo;CodFil;CodFor;CodSnf;NumNfc |
| `E107PDF` | Avaliação Fornecedores - Produtos/Derivações Avaliação | CodEmp;NumAfo;CodFil;CodFor;CodPro;CodDer |
| `E107SEF` | Avaliação Fornecedores - Serviços Avaliação | CodEmp;NumAfo;CodFil;CodFor;CodSer |

## SGU

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R900LSO` | Logon com usuário do SO |  |

## SPED ECF

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E661CIF` | Lucro Real - Informações da Base de Cálculo dos Incentivos Fiscais | CodEmp;CodFil;CodImp;DatApi |

## Tabela de Configurações de Performance

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R997CPS` | Storages | CodPer;SeqDat |

## Tabelas

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000ACR` | Integrações - Hub de Royalties - Atualização de Consumo de Royalties | SeqInt |
| `E000AEC` | Integrações - Autenticadores Externos de Créditos de Cliente | SeqInt |
| `E000AGC` | Integrações - Agrupamentos | SeqInt |
| `E000ANX` | Controle de arquivos anexos | CodEmp;RotAnx;NumAnx;SeqAnx |
| `E000ATN` | Integrações - Registro de alterações de títulos do autenticador externo | SeqReg |
| `E000ATV` | Integrações - Atributos de Vendas | SeqInt |
| `E000ATX` | Autotextos | CodEmp;AplAtx;CodAtx |
| `E000BAN` | Integrações - Bancos | SeqInt |
| `E000BCP` | Integrações - Títulos a Pagar - Baixas por compensação | SeqInt |
| `E000BDE` | Integrações - Log bloqueio/desbloqueio de estoque via WMS | IdeReg |
| `E000BEM` | Integrações - Bem | SeqInt |
| `E000BNF` | Integrações - Situações Tributárias X Dispositivo Fiscal | SeqInt |
| `E000BUS` | Busca Avançada - Geral | CodBus |
| `E000CAP` | Integrações - Categoria de Produtos | SeqInt |
| `E000CCA` | Integrações - Categorias de Crédito | SeqInt |
| `E000CCC` | Gerais - Controle de consumo de códigos diversos | IdeUni |
| `E000CCO` | Integrações - Contas Internas | SeqInt |
| `E000CCU` | Integrações - Centro de Custos | SeqInt |
| `E000CEP` | Integrações - Ceps | SeqInt |
| `E000CER` | Integrações - Hub de Royalties - Cancelamento de Entrega de Royalties dos Participantes | SeqInt |
| `E000CFP` | Parâmetros - Campos por forma de pagamento | SeqCfp |
| `E000CFR` | Integrações - Hub de Royalties - Cancelamento de Fixação de Royalties | SeqInt |
| `E000CHE` | Integrações - Preparação de Tesouraria (Cheques/Avisos) | SeqInt |
| `E000CID` | Integrações - Cidades | SeqInt |
| `E000CIM` | Integrações - Controle de Importações | CodEmp;CodFil;CodInt;IdeInt;IdtReq |
| `E000CIR` | Integrações - Hub de Royalties - Compra Imediata Royalties dos Participantes | SeqInt |
| `E000CIX` | Integrações - Controle de registros integrados | SeqInt;CodInt;IdeInt |
| `E000CLC` | Integrações - Coleções de Produtos | SeqInt |
| `E000CLF` | Integrações - Classificações fiscais | SeqInt |
| `E000CLI` | Integrações - Clientes | SeqInt |
| `E000CNV` | Integrações - Convênios | SeqInt |
| `E000COR` | Gerais - Cores | CodCor |
| `E000CPG` | Integrações - Condições de Pagamento | SeqInt |
| `E000CPV` | Integrações - Pendência de Configurações Parâmetros Valores | SeqInt |
| `E000CRR` | Gerais - Correct Control | VerAmb;VerIno;VerBas;VerCpl;CodCrr |
| `E000CRT` | Integrações - Carteiras de cobrança | SeqInt |
| `E000CSI` | Integração - Cadastro de serviços intermediados | SeqInt |
| `E000CTC` | Integrações - Movimento de Cota Capital | SeqInt |
| `E000CTR` | Integrações - Contrato de Venda | SeqInt |
| `E000CXC` | Integrações - Controle de Cupons X Convênios | CodEmp;CodFil;CodEqu;CroEcf;NumCfi;CodCnv |
| `E000CXU` | Integrações - Ligação Categoria Produto x Usuarios | SeqInt |
| `E000DCD` | Gerais - Diretiva de Coleta de Dados do Cliente |  |
| `E000DCF` | Integrações - Dados do cálculo de frete | SeqInt |
| `E000DEP` | Integrações - Depósitos | SeqInt |
| `E000DLS` | Recebimento de Documentos Eletrônicos - Entrada, Vencimento, Lote, Série | CgcFil;CgcFor;ChvNel;SeqIpc;SeqDls |
| `E000DME` | Integrações - Definições de Metas | SeqInt |
| `E000DOW` | Integrações - Distribuição de lote/série de itens de ordens de separação/recebimento | CodEmp;CodFil;NumOrd;SeqIto;SeqDls |
| `E000DVS` | Integrações - Notas fiscais de saída - Devolução | SeqInt |
| `E000EBQ` | Integrações - Serviço de Frete da Filial | SeqInt |
| `E000EIC` | Integrações - Exceções de Integração de Cupom Fiscal | CodInt;CodEmp;CodFil;SeqEis |
| `E000EIS` | Integrações - Exceções de Integração com Sistemas Terceiros | CodInt;CodEmp;CodFil;TipEis;SeqEis |
| `E000EIW` | Integrações - Exceções da integração | CodEmp;CodFil;NumOrd |
| `E000EIZ` | Integrações - Exceções de Integração de Redução Z | CodInt;CodEmp;CodFil;SeqEis |
| `E000EMB` | Integrações - Tipos de Embalagem | SeqInt |
| `E000EME` | Integrações - Requisições Estoque | SeqInt |
| `E000EMI` | Integração - Requisição de Estoques - Controle de integração | IdeUni |
| `E000EMS` | Ext. Dados - Log de tentativa de acesso por módulo | IdeUni |
| `E000ENE` | Integrações - Cancelamento notas fiscais de entrada | SeqInt |
| `E000ENR` | Integrações - Hub de Royalties - Entrega de Royalties dos Participantes | SeqInt |
| `E000ENT` | Integrações - Entregas Varejo | SeqInt |
| `E000EOW` | Integrações - Embalagens da ordem WMS | CodEmp;CodFil;NumOrd;SeqEow |
| `E000EPT` | Integrações - Exceções de Integração de Pagamento de Títulos | CodInt;CodEmp;CodFil;SeqEis |
| `E000EQF` | Integrações - Equipamentos Fiscais | SeqInt |
| `E000ERT` | Integrações autenticador externo - Cancelamento de renegociacao | SeqReg |
| `E000ESL` | Integrações - Exportação Saldo de Lotes | SeqInt |
| `E000ESP` | Integrações - Espécie de Bens | SeqInt |
| `E000EST` | Integrações - Saldo de Estoque | SeqInt |
| `E000ETK` | Eventos - Tracking | SeqEtk |
| `E000ETP` | Integrações - Exclusão de Títulos a Pagar | SeqInt |
| `E000ETR` | Integrações - Exclusão de Títulos a Receber | SeqInt |
| `E000EXC` | Integrações - Exceção Exportação | CodCli;CodInt |
| `E000EXF` | Recebimento de Documentos Eletrônicos - Notas Fiscais de Entrada - Ligação Notas de Frete | CgcFil;CgcFor;ChvNel;SeqExf |
| `E000FAB` | Integrações - Fabricantes | SeqInt |
| `E000FAM` | Integrações - Famílias | SeqInt |
| `E000FAV` | Integração - Controle de Favorecidos | SeqInt |
| `E000FBA` | Busca Avançada - Filtros | IdeFba |
| `E000FEC` | Gerais - Controle de Fechamento de Período | CodEmp;CodFil;ModFec;SeqFec |
| `E000FER` | Integrações - Feriados | SeqInt |
| `E000FIL` | Integrações - Filiais | SeqInt |
| `E000FIN` | Integrações - Financeiras | SeqInt |
| `E000FIR` | Integrações - Hub de Royalties - Fixação de Royalties | SeqInt |
| `E000FOP` | Integrações - Fotos de Produtos | SeqInt |
| `E000FOR` | Integrações - Fornecedores | SeqInt |
| `E000FOT` | Integrações - Filiais de Operadoras de Telefonia | SeqInt |
| `E000FPG` | Integrações - Formas de Pagamento | SeqInt |
| `E000FPJ` | Integrações - Projetos - Fases | SeqInt |
| `E000FPR` | Integrações - Ligação Produto x Fornecedor | SeqInt |
| `E000GEM` | Integrações - Grupo de empresas | SeqInt |
| `E000GFE` | Integrações - Grupo Fiscal para compras | IdeGfe |
| `E000GFI` | Integrações - Pendências de Grupos Fiscais | SeqInt |
| `E000GPF` | Integrações - Grupo Fiscal | IdeNgf |
| `E000GRI` | Busca eDocs - Guia de Recolhimento de Impostos | IdeGri |
| `E000IBA` | Busca Avançada - Itens | IdeIba |
| `E000IBP` | Integrações - Tabela IBPT | SeqInt |
| `E000IBT` | Integrações - Intenção de baixas de títulos C.Receber | CodEmp;CodFil;NumTit;CodTpt;SeqIbt |
| `E000ICL` | Integrações - Item de Classificação | SeqInt |
| `E000IEC` | Integrações - Controle de Início e Término das Exportações | CodInt;IdeInt;CodEmp;CodFil;TipExp |
| `E000IEX` | Integrações - Índices de controle de exportação dados |  |
| `E000ILP` | Lista de Presentes- Itens | IdeIlp |
| `E000ILR` | Integrações - Carga Inicial | SeqIlr |
| `E000ILV` | Lista de Presentes - Itens Vendidos | IdeIlv |
| `E000IMO` | Integrações - Índices Moedas | SeqInt |
| `E000IMP` | Integrações - Alíquotas de Reduções Z | CodEmp;CodFil;CodEqu;CroEcf;DatRef;CodStr |
| `E000INT` | Gerais - Integrações | CodInt;NomTab;SeqInt |
| `E000IOW` | Integrações - Itens de ordens de separação/recebimento | CodEmp;CodFil;NumOrd;SeqIto |
| `E000IPC` | Recebimento de Documentos Eletrônicos - Notas Fiscais de Entrada - Itens de Produto | CgcFil;CgcFor;ChvNel;SeqIpc |
| `E000IPC_FLT` | Integração - Notas Fiscais de Entrada - Itens da folha do leite | CodEmp;CodFil;CodFor;NumInt;SeqIpc |
| `E000IPF` | Integrações - Perfis de Usuário | SeqInt |
| `E000IPV` | Integrações - PDVS | SeqInt |
| `E000ISC` | Recebimento de Documentos Eletrônicos - Notas Fiscais de Entrada - Itens de Serviço | CgcFil;CgcFor;ChvNel;SeqIsc |
| `E000LBD` | Gerais - Limpeza de Base | CodAss;SeqLbd |
| `E000LBE` | Gerais - Limpeza Base por Empresa e Filial | CodAss;SeqLbd;CodEmp;CodFil |
| `E000LBS` | Gerais - Limpeza de base Saldos | CodAss;SeqLbd;SeqLbs |
| `E000LDP` | Integrações - Itens Log de Integração Receituário Agronômico | IdeUni |
| `E000LDX` | Gerais - Log dos documentos enviadaos para integração com seniorX | IdeUni |
| `E000LEX` | Gerais - Log dos erros retornados da integração com seniorX | IdeUni |
| `E000LIN` | Integrações - Log de Integração Receituário Agronômico | IdeUni |
| `E000LLU` | Ext. Dados - Log de tentativa de acesso por módulo e usuário | IdeUni |
| `E000LLX` | Gerais - Log dos lotes enviadaos para integração com seniorX | IdeUni |
| `E000LNP` | Recebimento de Documentos Eletrônicos - Notas Fiscais de Entrada - Ligação Entre Itens Produto Notas Fiscais de Entrada | IdeUni |
| `E000LNS` | Recebimento de Documentos Eletrônicos - Notas Fiscais de Entrada - Ligação Entre Itens Serviço Notas Fiscais de Entrada | IdeUni |
| `E000LOT` | Integrações - Lote Contábil | SeqInt |
| `E000LPD` | Integrações - Ligação Produto X Depósitos | SeqInt |
| `E000LPR` | Lista de Presentes | IdeLpr |
| `E000LPV` | Integrações - Convênio X Produto | SeqInt |
| `E000LRE` | Recebimento de Documentos Eletrônicos - Log | CgcFil;CgcFor;ChvNel;SeqLre |
| `E000LRI` | Integrações - Log de Retorno Integração Receituário Agronômico | IdeUni |
| `E000MCD` | Integrações - Matriz de Distribuição de Custos | SeqInt |
| `E000MCP` | Integrações - Títulos a Pagar - Movimentações | SeqInt |
| `E000MCR` | Integrações - Títulos a Receber - Movimentações | SeqInt |
| `E000MCX` | Integrações - Movimentos do Caixa | CodEmp;CodFil;CodEqu;DatMov;SeqMov |
| `E000MED` | Integrações - Unidades de Medida | SeqInt |
| `E000MOE` | Integrações - Moedas | SeqInt |
| `E000MON` | Integrações - Montagens | SeqInt |
| `E000MOT` | Integrações - Motivos de situações | SeqInt |
| `E000MPV` | Integrações - Marcas de Produtos | SeqInt |
| `E000MTE` | Integrações - Movimentos de Tesouraria | SeqInt |
| `E000MTR` | Integrações - Motoristas | SeqInt |
| `E000MVE` | Integrações - Movimentos de Estoque | SeqInt |
| `E000MVI` | Integração - Movimentos de Estoque - Controle de integração | IdeUni |
| `E000NFC` | Recebimento de Documentos Eletrônicos - Notas Fiscais de Entrada - Dados Gerais | CgcFil;CgcFor;ChvNel |
| `E000NFC_FLT` | Recebimento de Documentos Eletrônicos - Notas Fiscais de Entrada - Dados Gerais | CodEmp;CodFil;CodFor;NumInt |
| `E000NFD` | Integrações - Item nota fiscal de saída | SeqInt |
| `E000NFE` | Integrações - Notas fiscais de entrada | SeqInt |
| `E000NFL` | Integração - Notas de Entrada - Controle de integração folha do leite | IdeUni |
| `E000NFS` | Integrações - Notas fiscais de saída | SeqInt |
| `E000NRF` | Recebimento de Documentos Eletrônicos - Notas Fiscais de Entrada - Notas Referênciadas | IdeUni |
| `E000NTG` | Integrações - Naturezas de Gasto | SeqInt |
| `E000OAT` | Integrações - Ocorrências Assistência Técnica | SeqInt |
| `E000OBC` | Integrações - Observações do Cliente | SeqInt |
| `E000OBS` | Gerais - Observações | DatGer;SeqObs |
| `E000ODW` | Integrações - Ordens de separação/recebimento | CodEmp;CodFil;NumOrd |
| `E000ONF` | Integrações - Operações de nota fiscal | SeqInt |
| `E000OPE` | Integrações - Operadoras de Cartão | SeqInt |
| `E000ORI` | Integrações - Origens de Produto | SeqInt |
| `E000OTE` | Integrações - Operadoras de Telefonia | SeqInt |
| `E000OXW` | Integrações - Ordem X Item da ordem WMS | CodEmp;CodFil;NumOrd;SeqIto;SeqOtw |
| `E000PAI` | Integrações - Países | SeqInt |
| `E000PAR` | Recebimento de Documentos Eletrônicos - Notas Fiscais de Entrada - Parcelas | CgcFil;CgcFor;ChvNel;CodPar |
| `E000PCD` | Recebimento de Documentos Eletrônicos - Notas Fiscais de Entrada - Itens de Produto - Diversos | CgcFil;CgcFor;ChvNel;SeqIpc |
| `E000PCM` | Integrações - Contas ou Centro de Custos | SeqInt |
| `E000PCO` | Integrações - Definições de Comissões | SeqInt |
| `E000PCP` | Integrações - Preço custo de produto por data | SeqInt |
| `E000PDV` | Integrações - Parâmetros PDV | IdeUni |
| `E000PED` | Integrações - Pedidos | SeqInt |
| `E000PEP` | Integrações - Pendências da posição de estoque de produtos | SeqInt |
| `E000PFA` | Integrações - Clientes | SeqInt |
| `E000PFP` | Integrações - Parâmetros por forma de pagamento | SeqInt |
| `E000PLA` | Integrações - Plano de Conta Contábil | SeqInt |
| `E000PLF` | Integrações - Contas financeiras | SeqInt |
| `E000PME` | Integrações - Preço Médio Movimentos de Estoque | SeqInt |
| `E000PMF` | Integrações - Preço Médio de Produto | SeqInt |
| `E000POC` | Integrações - Ordem de Compra | SeqInt |
| `E000POR` | Integrações - Portadores | SeqInt |
| `E000PRD` | Integrações - Propriedade e Subpropriedade | SeqInt |
| `E000PRJ` | Integrações - Projetos | SeqInt |
| `E000PRO` | Integrações - Produtos | SeqInt |
| `E000PRS` | Integrações - Processos integrados | IdeUni |
| `E000PXF` | Parâmetros por Form | CodEmp;CodFil;CodUsu;IdfFrm;CmpFrm |
| `E000RAI` | Integrações - Retorno de Análise de Crédito | SeqInt |
| `E000RAM` | Integrações - Ramos de atividade | SeqInt |
| `E000RCT` | Integrações - Receituário Agronômico | SeqInt |
| `E000RDT` | Integrações - Restrições de Destinatários em Notas Fiscais de Transferência | SeqInt |
| `E000REP` | Integrações - Representantes | SeqInt |
| `E000REZ` | Integrações - Reduções Z | CodEmp;CodFil;CodEqu;CroEcf;DatRef |
| `E000RHA` | Integrações - Retorno da persistência por HASH para o sistema integrador | IdeUni |
| `E000RIP` | Integrações - Retornos de Integração | SeqRip |
| `E000RIT` | Integrações - Retorno de chaves integradas do ERP | SeqInt |
| `E000RMO` | Integrações - Ordem de Compra - Recebimento de Mercadoria | SeqInt |
| `E000RNT` | Integrações - Renegociações de títulos do autenticador | SeqReg |
| `E000ROC` | Integrações - Retornos de Integração - Ligação Ordem de Compra | SeqRip |
| `E000SAC` | Integrações - Sacado | SeqInt |
| `E000SAF` | Integrações - Safra | SeqInt |
| `E000SCO` | Integrações - Saldo Contábil Mensal Centro Custo/Origem | SeqInt |
| `E000SEG` | Integrações - Seguradoras | SeqInt |
| `E000SER` | Integrações - Serviços | SeqInt |
| `E000SIN` | Integrações - Inicialização de integrações | SeqSin |
| `E000SIS` | Integrações - Sistemas Integrados | CodInt |
| `E000SNF` | Integrações - Séries de Notas Fiscais | SeqInt |
| `E000SOL` | Integrações - Solicitação de Compra | SeqInt |
| `E000SXT` | Integrações - Sistema X Tipo de Informação para Integração | CodInt;CodEmp;CodFil;IdeInt |
| `E000TAN` | Integrações com autenticador externo - Registro  das movimentações dos títulos | SeqReg |
| `E000TAP` | Integrações - Token Wiipo | SeqInt |
| `E000TCP` | Integrações - Títulos a Pagar | SeqInt |
| `E000TCR` | Integrações - Títulos a Receber | SeqInt |
| `E000TFR` | Integrações - Tabelas de preço de Frete | SeqInt |
| `E000TJU` | Integrações - Tabela de juros | SeqInt |
| `E000TMO` | Integrações - Transações X Motivos | SeqInt |
| `E000TNS` | Integrações - Transações e CFOP | SeqInt |
| `E000TPD` | Integrações - Tributos de Produto no Documento Fiscal | SeqInt |
| `E000TPR` | Integrações - Tabelas de preço | SeqInt |
| `E000TPS` | Integrações - Tributos de Serviço no Documento Fiscal | SeqInt |
| `E000TPT` | Integrações - Tipos de Título | SeqInt |
| `E000TRP` | Integrações - Transportadoras | SeqInt |
| `E000UFS` | Integrações - Estados | SeqInt |
| `E000UNA` | Integrações - Usuários Controle Aprovações | SeqInt |
| `E000USU` | Integrações - Usuários | SeqInt |
| `E000UXP` | Integrações - Ligação Usuarios x Produtos | SeqInt |
| `E000VCF` | Integrações - Verbas de compra das filiais | SeqInt |
| `E001AGR` | Transações - Parâmetros de Impostos da Transação | CodEmp;CodTns;CodImp |
| `E001EST` | Transações - Estoques | CodEmp;CodTns |
| `E001ETN` | Exclusões de Transações | CodEmp;CodTns |
| `E001INE` | Transações - Parâmetros de Incentivos Estaduais da Transação | CodEmp;CodTns |
| `E001INT` | Transações - Integrações | CodEmp;CodTns;TnsInt |
| `E001LTE` | Transações - Transação por Tipo de Empresa | CodEmp;TipEmp;CodEdc |
| `E001NOF` | Naturezas de Operação FAF | CodEmp;DatCpt |
| `E001RAT` | Transações - Rateios | CodEmp;CodTns;SeqRat |
| `E001TCP` | Transações - Compras | CodEmp;CodTns |
| `E001TCT` | Transações - Cota Capital | CodEmp;CodTns |
| `E001TFI` | Transações - Financeiro | CodEmp;CodTns |
| `E001TIT` | Transações - Títulos de Impostos | CodEmp;CodTns;CodFil;SeqTit |
| `E001TMO` | Transações - Ligação Transação x Motivos de Ocorrência | CodEmp;CodFil;CodTns;CodMot |
| `E001TNC` | Transações Complementar | CodEmp;CodTns |
| `E001TNP` | Transações - Ligação Transação x Natureza de Operação | CodEmp;CodFil;CodTns;ComNop;SigUfs |
| `E001TNS` | Transações | CodEmp;CodTns |
| `E001TPA` | Transações - Patrimônio | CodEmp;CodTns |
| `E001TPC` | Transação - Parâmetros Complementares (GO UP) | CodEmp;CodTns;SeqTns |
| `E001TPJ` | Transações - Projetos | CodEmp;CodTns |
| `E001TVE` | Transações - Vendas | CodEmp;CodTns |
| `E001TXF` | Transação - Ligação Transação X Conta Financeira | CodEmp;CodTns;CtaFin |
| `E001TXT` | Transação - Ligação Transação Saída X Transação Entrada | CodEmp;TnsVen;TnsCpr;SeqTxt |
| `E002HTT` | Tipos de Título - Contas por Empresa | CodTpt;CodEmp |
| `E002RAT` | Tipos de Título - Rateios | CodTpt;CodEmp;SeqRat |
| `E002TPT` | Tipos de Título | CodTpt |
| `E004CAR` | Parâmetros - Carga | CodEmp;CodFil |
| `E004CPF` | Critérios para Pontuação de Fornecedores | CodCri |
| `E004PAE` | Parâmetros - Análise de Embarque | CodEmp;CodFil |
| `E004PAR` | Parâmetros - Fluxo de Caixa (2) | CodEmp |
| `E004PAS` | Parâmetros - Fluxo de Caixa (2) - Distribuição Títulos Anteriores | CodEmp;SeqPas |
| `E004PAT` | Parâmetros - Simulação de Transferência de Saldos Bancários | CodEmp |
| `E004TPG` | Parâmetros - Últimos Parâmetros Solicitados | CodEmp;CodTpg |
| `E005CEL` | Células de Produção (Grupos de Trabalho) | CodEmp;CodCel |
| `E005CEO` | Ligação Célula X Estágio/Operação | CodEmp;CodCel;CodEtg |
| `E006EEN` | Estrutura de Endereços | CodEen |
| `E006PAI` | Países | CodPai |
| `E007UFS` | Estados | SigUfs |
| `E008CEP` | Cep | CepIni |
| `E008ENT` | Cidades para RAIS - Valores de entrada dos relatórios municipais | CodEmp;CodRai;CodMod;NomVar;ValSeq |
| `E008ERA` | Exclusões de Cidades para RAIS | CodRai |
| `E008GDM` | Cidades para RAIS - Parâmetros para geração das DESIF | CodEmp;CodRai;DatIni |
| `E008RAI` | Cidades para RAIS - SIG | CodRai |
| `E009PPE` | Parâmetros por Estados | CodEmp;SigUfs;CodFil |
| `E009PTE` | Parâmetros por Transação e Estado | CodEmp;SeqPte |
| `E009RAF` | Parâmetros - Recuperação de ICMS sobre acréscimo financeiro | CodEmp;SigUfs;QtdPar |
| `E011CLC` | Coleções de Produtos | CodClc |
| `E011DEF` | Defeitos de Fabricação (Não Conformidade) | CodEmp;CodDft |
| `E011PCL` | Produtos de Validades de Coleção de Produtos | CodClc;SeqVlc;CodEmp;CodPro;CodDer |
| `E011VCL` | Validades de Coleções de Produtos | CodClc;SeqVlc |
| `E014CCC` | Características de Clientes/Fornecedores - Componentes | CodCcl;CodCcc |
| `E014CCL` | Características de Clientes/Fornecedores | CodCcl |
| `E016APV` | Aplicações de vendas | CodEmp;CodApv |
| `E016PVP` | Períodos de  Produção/Vendas | CodEmp;CodPvp |
| `E017DRL` | Configuração de leiaute do Recebimento Eletrônico - Campos | IdeUni |
| `E017LRE` | Configuração de leiaute do Recebimento Eletrônico | IdeUni |
| `E017REL` | Configuração de leiaute do Recebimento Eletrônico - Registros | IdeUni |
| `E017RVE` | Regiões de Venda | CodEmp;CodRve |
| `E018MTV` | Motivos de Parada de Recurso/Equipamento | CodEmp;CodMtv |
| `E019ICM` | ICMS Especial - Por Estado | CodTic;SigUfs;CodEmp;CodFil |
| `E019RED` | Redução de Impostos - Por Estado | CodTrd;TipImp;SigUfs;CodEmp;CodFil |
| `E019RET` | Controle de Retenção de Impostos | CodEmp;CodFil;CodFor;CodCli;TipImp;MesAno |
| `E019SUB` | Substituição de ICMS -  Por Estado | CodTst;SigUfs;CodEmp;CodFil;AplSub;DatIni;CodCrt |
| `E019TIC` | ICMS Especial | CodTic |
| `E019TRD` | Redução de Impostos | CodTrd |
| `E019TST` | Substituição de ICMS | CodTst |
| `E019VST` | Substituições de impostos - Validades | CodTst;CodEmp;CodFil;DatIni |
| `E020AID` | Séries de Notas Fiscais - Autorização para Impressão de Documentos Fiscais | CodEmp;CodFil;CodSnf;SeqSnf |
| `E020PAR` | Séries de Notas Fiscais - Parcelas | CodEmp;CodFil;CodSnf;CodPar |
| `E020SNF` | Séries de Notas Fiscais | CodEmp;CodFil;CodSnf |
| `E021FCO` | Formas de Correspondência | CodEmp;CodFco |
| `E021LMS` | Liga Motivos e Aplicações a Possíveis Soluções | AplMot;CodMot;CodSlc |
| `E021MOT` | Motivos das Situações das Tabelas | CodMot |
| `E021SLC` | Possíveis Soluções Para Motivos Diversos | CodSlc |
| `E022CLF` | Classificações Fiscais | CodClf |
| `E022VCL` | Alterações de Classificações Fiscais | CodClf;DatAtu;HorAtu;SeqAtu |
| `E023CRP` | Grupos de Contas a Receber ou Pagar | CodCrp |
| `E023HRP` | Grupos de Contas a Receber ou Pagar - Contas por Empresa | CodCrp;CodEmp |
| `E023RAT` | Grupos de Contas a Receber ou Pagar - Rateios | CodCrp;CodEmp;SeqRat |
| `E024MSD` | Mensagens para Nota Fiscal de Saída e Contrato de Venda - Campos dinâmicos | SeqMsd |
| `E024MSG` | Mensagens para Nota Fiscal de Saída e Contrato de Venda | CodMsg |
| `E025FER` | Feriados Nacionais | DiaFer;MesFer;AnoFer;CepIni |
| `E026ERA` | Exclusões de Ramos de Atividade | CodRam |
| `E026RAM` | Ramos de Atividade | CodRam |
| `E027BNF` | Situações Tributárias X Dispositivo Fiscal | CodEmp;SigUfs;CodStr;DatIni;CodClf;CodTns;CodPro;CodSer |
| `E027STR` | Situações Tributárias | CodStr |
| `E028CPG` | Condição de Pagamento | CodEmp;CodCpg |
| `E028ECP` | Exclusões de Condições de Pagamento | CodEmp;CodCpg |
| `E028ICP` | Condição de Pagamento - Parcelas | CodEmp;CodCpg;SeqIcp |
| `E028LIP` | Listas de Preço | CodEmp;CodLip |
| `E028LJP` | Integrações - Ligações de Perfil de Usuário com Tabela de Juros | NumSeq;CodPer |
| `E028NCP` | Condição de Pagamento - Controle Alteração Automática | CodEmp;CodCpg;NovCpg |
| `E028OAT` | Integrações - Ordem de Aplicação da Tabela de Juros | CodEmp;AplTju |
| `E028TJU` | Integrações - Tabela de Juros | NumSeq |
| `E029MPT` | Motivos de Prorrogação de Títulos | CodMpt |
| `E030CBC` | Bancos - Cidades atendidas | CodBan;CepCid |
| `E030CRC` | Bancos - Carteiras de Cobrança | CodBan;CodCrt |
| `E030ETC` | Bancos - Espécies de Título | CodBan;CodTpt |
| `E030IBC` | Bancos - Instruções Bancárias | CodBan;CodIns |
| `E030NPF` | Natureza Operação Pendências Financeiras | CodNpf |
| `E030ORM` | Bancos - Ocorrências de Remessa | CodBan;CodOcr |
| `E030ORP` | Bancos - Ocorrências de Retorno do PE (Pagamento Eletrônico) | CodBan;CodOct;OctBan |
| `E030ORT` | Bancos - Ocorrências de Retorno | CodBan;CodOct;OctBan |
| `E030OTP` | Bancos - Tipos de Pagamentos | CodBan;TipPgt;PgtBan |
| `E030TBB` | Bancos - Tarifas | CodBan;CodTrb;TrbBan |
| `E030TBE` | Tarifas Bancárias - Empresa | CodTrb;CodEmp |
| `E030TMB` | Bancos - Tabelas de Moeda | CodBan;CodMoe |
| `E030TRB` | Tarifas Bancárias | CodTrb |
| `E030TTB` | Bancos - Tipos de Tributos | CodBan;TipImp;TriBan |
| `E031IME` | Moedas - Índices por Data (Especial) | CodMoe;DatMoe |
| `E031IMH` | Moedas - Índices por Hora | CodMoe;DatMoe;HorCot |
| `E031IMO` | Moedas - Índices por Data | CodMoe;DatMoe |
| `E031MOE` | Moedas | CodMoe |
| `E031SMO` | Séries Cotações Moedas | IdeUni |
| `E031VMM` | Moedas - Valorização Multimoeda | CodMoe;CodEmp;CodFil;DatIni;DatFim;SeqVmm |
| `E032EDC` | Modelos de Documento | CodEdc |
| `E033CRT` | Carteiras de Cobrança Internas | CodCrt |
| `E034ETC` | Eventos | CodEmp;CodEtc |
| `E034TCC` | Tipos de Contas | CodTcc |
| `E034TXE` | Tipos de Contas X  Eventos | CodEmp;CodTcc;CodEtc |
| `E035OCR` | Ocorrências Internas de Remessa | CodOcr |
| `E035OCT` | Ocorrências Internas de Retorno | CodOct |
| `E035OCV` | Ocorrências Internas de Retorno - Empresa | CodOct;CodEmp |
| `E035OPE` | Ocorrências Internas de Retorno do PE (Pagamento Eletrônico) | CodOct |
| `E035REL` | Relacionamento de instruções | CodBan;CodOct;OctBan |
| `E036INS` | Instruções Bancárias Internas | CodIns |
| `E037DSV` | Definições para Sugestão de Valores | TipDef;SeqDef |
| `E037FRJ` | Fórmulas de Reajustes | CodEmp;CodFrj |
| `E037HVD` | Histórico de Valores por Definições | TipDef;SeqDef;SeqVal;DatAtu;HorAtu;SeqAtu |
| `E037TDC` | Taxa por Dias a Compensar | CodEmp;QdtDia |
| `E037VDS` | Valores por Definições | TipDef;SeqDef;SeqVal |
| `E040FIR` | Tabelas IRRF - Faixas | CptIrf;LimFai |
| `E040IRF` | Tabelas IRRF | CptIrf |
| `E041CEB` | Critérios e Endereços de Busca para Formas de Contabilização | OriFct;AnaSin;SeqCeb |
| `E042CPD` | Contas Contábeis Padrões | CodEmp;CodCpd |
| `E043CMP` | Modelos de Planos - Controle Processo Validade Modelo de Plano | CodMpc;CodMpa |
| `E043LPD` | Modelos de Planos - Ligação Plano Empresa X Município | CodMpc;CodRai;CptIni;CtaRed |
| `E043MMP` | Modelos de Planos - Máscaras das Classificações | CodMpc;CodGcc |
| `E043MPC` | Modelos de Planos | CodMpc |
| `E043PCM` | Modelos de Planos - Contas ou Centros de Custos | CodMpc;CtaRed |
| `E043RMP` | Modelos de Planos - Relacionamento entre Modelos de Planos (De/Para) | CodMpc;CodMpu;CodMpa;SeqMpc |
| `E043VMP` | Modelos de Planos - Períodos de Validade dos Modelos de Planos |  |
| `E044BLO` | Bloqueio de Movimento de Estoque | IdeUni |
| `E045AGL` | Aglutinação Contábil | CodAgl |
| `E045CAG` | Aglutinação Contábil - Composição | CodAgl;SeqCmp |
| `E045CCC` | Relacionamento entre Centro Custo/Conta Auxiliar X Conta Contábil X Critério | CodEmp;CodFil;CtaAux;CodCcu;CtaRed |
| `E045CDI` | Critério de Distribuição | CodEmp;CodCri |
| `E045CSO` | Plano Contábil - Eliminações Saldos p/ Consolidação | CodEmp;CtaRed;EmpEli;CtaEli;EmpCon;CtaCon;MesAno |
| `E045CSO_HIS` | Histórico - Plano Contábil - Eliminações Saldos p/ Consolidação | CodEmp;CodMpc;CtaRed;EmpEli;CtaEli;EmpCon;MesAno |
| `E045CXA` | Plano Contábil - Relacionamento Contas X Cta. Auxiliar | CodEmp;CtaRed;CtaAux |
| `E045CXC` | Plano Contábil - Relacionamento Contas X Centro de Custos | CodEmp;CtaRed;CodCcu |
| `E045CXC_HIS` | Histórico - Plano Contábil - Relacionamento Contas X Centro de Custos Liberados | CodEmp;CodMpc;CtaRed;CodCcu |
| `E045DCR` | Definição de Critério | CodEmp;CodFil;CodCri;MesAno;CodCcu;CtaAux |
| `E045PCA` | Plano Composição Auxiliar - Contas | CodEmp;CtaAux |
| `E045PLA` | Plano Contábil - Contas | CodEmp;CtaRed |
| `E045PLA_HIS` | Histórico - Plano Contábil - Contas | CodEmp;CodMpc;CtaRed |
| `E045RAT` | Plano Contábil - Rateios | CodEmp;CtaRed;CodCcu |
| `E045RAT_HIS` | Histórico - Plano Contábil - Rateios | CodEmp;CodMpc;CtaRed;CodCcu |
| `E045RCC` | Plano Contábil - Relacionamento com Centros de  Custos | CodEmp;CodRcc |
| `E046CMP` | Visões Contábeis - Plano de Contas | CodEmp;CodVis;CtaVis;SeqCol;SeqCmp |
| `E046COL` | Visões contábeis - Colunas | CodEmp;CodVis;SeqCol |
| `E046FAV` | Faixa de Aglutinadores por visão. | CodVis |
| `E046HPD` | Históricos Padrões | CodHpd |
| `E046PAR` | Visões Contábeis - Parâmetros Processados | IdeUni |
| `E046PCP` | Visões Contábeis - Parâmetros Processados - Detalhamento | IdeUni |
| `E046PLA` | Visões Contábeis - Plano de Contas | CodEmp;CodVis;CtaVis |
| `E046VAR` | Visões Contábeis - Variáveis | CodEmp;CodVar |
| `E046VIS` | Visões Contábeis - Visão | CodEmp;CodVis |
| `E046VNE` | Visões Contábeis - Notas Explicativas | CodEmp;CodVis;CtaVis;SeqCol;SeqCmp;PerIni;PerFim;NumFtc |
| `E047GNG` | Naturezas de Gasto - Grupos | CodEmp;CodGng |
| `E047LMN` | Naturezas de Gasto - Ligação Natureza de Gasto x Motivo | CodEmp;CodFil;CodNtg;CodMot |
| `E047NTG` | Naturezas de Gasto | CodEmp;CodNtg |
| `E047RAT` | Naturezas de Gasto - Rateios | CodEmp;CodNtg;SeqRat |
| `E048FCT` | Formas de Contabilização | CodEmp;CodFct |
| `E048SFC` | Formas de Contabilização - Itens | CodEmp;CodFct;SeqFct |
| `E049AIR` | Tributos - Alíquotas de Tributos Retidos | CodEmp;TipImp;MesAno;PerImp |
| `E049ALT` | Aplicações das Listas Dinâmicas | CodLst;SeqAlt |
| `E049DEC` | Declarações | CodDec |
| `E049DRE` | Definição do Registro | CodDec;CodReg;NomCam |
| `E049ILT` | Itens das Listas Dinâmicas | CodLst;CodIlt |
| `E049LLT` | Ligações de Listas Dinâmicas | SeqLig |
| `E049LST` | Listas Dinâmicas | CodLst |
| `E049REG` | Registro | CodDec;CodReg |
| `E049TTR` | Tributos - Tabela de Tributação | CodEmp;CodImp;DatCpt;CodAgf;SeqTtr |
| `E050EQF` | Impostos - Equipamentos Fiscais | CodEmp;CodFil;CodEqu |
| `E050PAC` | Tributos - Controle de produção de usina | IdeUni |
| `E050PRO` | Tributos - Controle de produção de usina - Produto | IdeUni |
| `E050TNS` | Tributos - Controle de produção de usina - Transação | IdeUni |
| `E051DIS` | Impostos - Dispositivos Fiscais | CodEmp;CodDfs |
| `E051GUI` | Impostos - Guias de Recolhimento | CodEmp;CodGri |
| `E051IMP` | Impostos - Tabela de Impostos | CodImp |
| `E051RNF` | Impostos - Dispositivos Fiscais - Reinf | CodEmp;CodDfs |
| `E051SUS` | Impostos - Suspensão de Exigibilidade | IdeUni |
| `E053FFB` | Impostos - Parâmetros Formação Faturamento Bruto Mês | CodEmp;DatBas;CodTns |
| `E054FFL` | Impostos - Formação Faturamento Líquido Mês | CodEmp;DatBas |
| `E054PFL` | Impostos - Parâmetros Formação Faturamento Líquido Mês | CodEmp;DatBas;CodTns |
| `E055COM` | Impostos - Composição Imposto | CodEmp;CodFil;CodImp;DatBas;SeqCom |
| `E055CTB` | Impostos - Parâmetro Contábil Formação Base Impostos | CodEmp;CodFil;CodImp;DatBas;CtaRed |
| `E055FIP` | Impostos - Parâmetro Financeiro/Patrimônio Formação Base Impostos | CodEmp;CodFil;CodImp;DatBas;CodTns;CodCli;CodFor;CodTpt |
| `E055FVB` | Impostos - Parâmetro Formação Base Impostos | CodEmp;CodFil;CodImp;DatBas;CodTns |
| `E055LIG` | Impostos - Ligação entre Impostos | CodEmp;CodFil;CodImp;DatBas;SeqLig |
| `E055NRE` | Reinf - Natureza de Rendimentos | IdeUni |
| `E055PAR` | Impostos - Parâmetros dos Impostos por Filial | CodEmp;CodFil;CodImp |
| `E055PFT` | Tributos - Perfil Tributário | CodEmp;CodPft |
| `E055SPC` | Impostos - Parâmetro Contribuição SPED Pis/Cofins | CodEmp;CodFil;CodImp;DatBas;ConSoc |
| `E055SUB` | Impostos - Parâmetro por Estado para Substituição Tributária | CodEmp;CodFil;CodImp;DatBas;SigUfs |
| `E059AGE` | Agrupamentos para Embalagens | CodAge |
| `E059CON` | Conteúdo das Embalagens | CodEmb;SeqCon |
| `E059EMB` | Tipos de Embalagens | CodEmb |
| `E059HIE` | Agrupamentos para Embalagens | HieAge |
| `E059LEP` | Tipos de Embalagens - Ligação Embalagens como Produto | CodEmb;CodEmp;CodPro;CodDer |
| `E059LPE` | Ligação Produtos x Embalagens | CodEmp;CodPro;CodDer;CodEmb |
| `E059LPV` | Ligação Produtos x Volumes | CodEmp;CodPro;CodDer;CodTvl |
| `E059SIT` | Situações da Embalagem | CodSit |
| `E059TVE` | Tipos de Volume (Embalagens) | CodEmp;CodTvl;SeqTvl |
| `E059TVL` | Tipos de Volume | CodEmp;CodTvl |
| `E060TAS` | Tabela de Assuntos | CodAss |
| `E061ARI` | Tabela de Áreas de Interesse | CodAri |
| `E062DIA` | Dias de saída para a Rota de Entrega | CodRoe;SeqDia |
| `E062EDI` | Exclusões de Dias de saída para a Rota de Entrega | CodRoe;SeqDia |
| `E062ERO` | Exclusões de Rotas ou Localidades de Entrega | CodRoe |
| `E062LOC` | Locais de Entrega | LocEnt |
| `E062RET` | Localidades de Retirada | CodRet |
| `E062ROE` | Rotas ou Localidades de Entrega | CodRoe |
| `E062SRO` | Sub Rotas | CodRoe;CodSro |
| `E063BAL` | Cadastros - Balança de pesagem. | CodEmp;CodFil;CodBal |
| `E063CAM` | Cadastros - Câmera de Pesagem de Carga. | CodEmp;CodFil;CodCam |
| `E063FOT` | Cadastros - Fotos. | CodEmp;CodFil;IdePca;SeqFot |
| `E063TIF` | Vínculo - Ticket de Pesagem x Fotos. | CodEmp;CodFil;IdePca;SeqFot;DatEnt;SeqEnt |
| `E064CAT` | Categorias para Clientes | CatCli |
| `E064CDI` | Canais de Distribuição | CodCdi |
| `E066EFP` | Exclusões de Formas de Pagamento | CodEmp;CodFpg |
| `E066FPG` | Formas de Pagamento | CodEmp;CodFpg |
| `E067CPR` | Integrações - Cartão Presente | CodEmp;NumCpr |
| `E067FIN` | Finalidade de compra e venda | CodFin |
| `E067HCP` | Integrações - Histórico Cartão Presente | CodEmp;NumCpr;SeqHcp |
| `E067TDV` | Tipos de Devolução | CodMot |
| `E068CNA` | Centros de Custos por Usuário e Nível de Aprovação | CodEmp;RotNap;CodNap;CodUsu;CodCcu |
| `E068NAP` | Níveis de Aprovação | CodEmp;RotNap;CodNap |
| `E068RNA` | Rotinas para Controle de Níveis de Aprovação | CodEmp;RotNap |
| `E068UNA` | Usuários por Nível de Aprovação | CodEmp;RotNap;CodNap;CodUsu |
| `E068USI` | Usuários Substituídos na Aprovação Multinível | CodEmp;RotNap;CodUsu;DatIni |
| `E068UST` | Usuários de Substituição da Aprovação Multinível | CodEmp;RotNap;CodUsu;DatIni;UsuSub;DatIns |
| `E068VAM` | Valores para aprovação multinível | CodEmp;RotNap;CodAga;VlrFna |
| `E069CCS` | Seguros - Coberturas de seguro | IdeUni |
| `E069CPC` | Seguros - Coeficientes por plano e cobertura | IdeUni |
| `E069CSE` | Seguros - Cadastro de seguro | IdeUni |
| `E069CXG` | Convênios X Grupos | CodCnv;CodGps |
| `E069FAS` | Seguros - Faixas de aplicação do seguro | IdeUni |
| `E069FIL` | Convênios - Ligação Convênio x Filial | IdeUni |
| `E069GPS` | Convênios - Grupo de Produtos e Serviços | CodGps |
| `E069IGR` | Convênios - Itens de Grupo de Produto/Serviço | CodGps;SeqIgr |
| `E069PSE` | Seguros - Planos de seguro | IdeUni |
| `E070CFO` | Integrações - Tabela comparação operação integração - CFOP / Transação ERP | IdeUni |
| `E070OPN` | Integrações - Operações de nota fiscal do sistema a integrar | IdeUni |
| `E070PDV` | Varejo - PDVS | CodEmp;CodFil;NumPdv |
| `E071CTR` | Royalties - Contratos | CodEmp;CtrRoy |
| `E071ROY` | Royalties | CodEmp;CodRoy |
| `E072PES` | Pesquisa de Mercado | CodEmp;CodPro;CodDer;CodFor;CodCli;SeqPes |
| `E073TRA_REC` | Recebimento de Documentos Eletrônicos - Transportadoras | CgcCpf |
| `E074VIA` | Vias de Transportes | CodVia |
| `E075CXU` | Ligações - Categorias de Produto x Usuários | CodEmp;CodUsu;IdeCat |
| `E075GFE` | Integrações - Grupo Fiscal Produto x UF - Compra | IdeUni |
| `E075LCC` | Produto - Ligação Contas para Preço de Custo por Produto | IdeUni |
| `E075LTC` | Produto - Ligação Transação para Preço de Custo por Produto | IdeUni |
| `E075UGF` | Integrações - Grupo Fiscal Produto x UF | SeqUgf |
| `E078CLM` | Controle dos Lotes de Movimentos de Baixa | DatBai;OriBai;SeqLot |
| `E078FAI` | Controle dos Últimos Números Utilizados - Faixas | CodEmp;CodFil;CamBas;SeqFai |
| `E078MLB` | Movimentos da Tesouraria gerados nos lotes de baixa | ChvLot;CodEmp;NumCco;DatMov;SeqMov |
| `E078TLB` | Títulos dos Movimentos dos Lotes de Baixa |  |
| `E078ULT` | Controle dos Últimos Números Utilizados | CodEmp;CodFil;CamBas |
| `E080CSI` | Serviços - Cadastro de serviços intermediados | IdeUni |
| `E080ISV` | Serviços - Parametrizações de Intermediação | NumSeq |
| `E080SIF` | Serviços - Serviços intermediados X Filiais | IdeCsi;CodEmp;CodFil |
| `E081ATF` | Atributos da Venda - Filiais | IdcAtf |
| `E081ATV` | Atributos da Venda - Dados Gerais | IdcAtv |
| `E081CPG` | Atributos da Venda - Condições - Condições de pagamento | IdcCpg |
| `E081EIT` | Exclusões de Itens de Produto | CodEmp;CodTpr;DatIni;CodPro;CodDer;QtdMax |
| `E081ETA` | Exclusões de Tabelas de Preços de Venda | CodEmp;CodTpr |
| `E081ETP` | Exclusões de Validades | CodEmp;CodTpr;DatIni |
| `E081FCE` | Tabela de Preços de Frete - Preços por Estados/Cidades | CodEmp;CodTab;DatIni;SigUfs;CepIni |
| `E081FDI` | Tabela de Preços de Frete - Preços por Distância | CodEmp;CodTab;DatIni;DisIni |
| `E081FLC` | Tabela de Preços de Frete - Preços por Localização | CodEmp;CodTab;DatIni;LocEnt;SeqFlc |
| `E081FPE` | Tabela de Preços de Frete - Preços por Peso | CodEmp;CodTab;DatIni;PesIni |
| `E081FPG` | Atributos da Venda - Condições - Formas de Pagamentos | IdcFpg |
| `E081FVL` | Tabela de Preços de Frete - Preços por Valor | CodEmp;CodTab;DatIni;VlrIni |
| `E081FVO` | Tabela de Preços de Frete - Preços por Volume | CodEmp;CodTab;DatIni;VolIni |
| `E081IAB` | Atributos da Venda - Itens e Valores Condicionados (Benefícios) | IdcIab |
| `E081IAC` | Atributos da Venda - Condições | IdcIac |
| `E081ICA` | Atributos da Venda - Itens e Valores Condicionais | IdcIca |
| `E081IMA` | Tabelas de Preços de Venda - Itens por Modelo de Produto e Agrupamento de Preço | CodEmp;CodTpr;DatIni;CodMod;CodAgm |
| `E081ITF` | Tabelas de Preços de Venda - Itens por Faixa da Grade | CodEmp;CodTpr;DatIni;CodPro;CodFxa |
| `E081ITP` | Tabelas de Preços de Venda - Itens de Produto | CodEmp;CodTpr;DatIni;CodPro;CodDer;QtdMax |
| `E081ITS` | Tabelas de Preços de Venda - Itens de Serviço | CodEmp;CodTpr;DatIni;CodSer;QtdMax |
| `E081LIP` | Tabelas de Preços de Venda - Log dos Itens de Produto | CodEmp;CodTpr;DatIni;CodPro;CodDer;QtdMax;DatAlt;HorAlt;SeqAlt |
| `E081LIS` | Tabelas de Preços de Venda - Log dos Itens de Serviço | CodEmp;CodTpr;DatIni;CodSer;QtdMax;DatAlt;HorAlt;SeqAlt |
| `E081LPR` | Tabelas de Preços de Venda - Log Validades | CodEmp;CodTpr;DatIni;DatAlt;HorAlt;SeqAlt |
| `E081PFU` | Atributos da Venda - Condições - Perfis de Usuário | IdeUni |
| `E081TAB` | Tabelas de Preços de Venda - Dados Gerais | CodEmp;CodTpr |
| `E081TES` | Tabela de Preço de Venda - ICMS por Estado | CodEmp;CodTpr;SigUfs |
| `E081TFR` | Tabela de Preços de Frete - Dados Gerais | CodEmp;CodTab |
| `E081TPC` | Tabelas de Preços de Venda - Ligação com Condições de Pagamento | CodEmp;CodTpr;CodCpg |
| `E081TPF` | Tabelas de Preços de Venda - Ligação com Formas de Pagamento | CodEmp;CodTpr;CodFpg |
| `E081TPL` | Tabelas de Preços de Venda - Ligação com Filiais | CodEmp;CodTpr;CodFil |
| `E081TPR` | Tabelas de Preços de Venda - Validades | CodEmp;CodTpr;DatIni |
| `E081VFR` | Tabela de Preços de Frete - Validades | CodEmp;CodTab;DatIni |
| `E081VGE` | Tabelas de Preço de Venda - Valores Garantia Estendida | CodEmp;CodTpr;DatIni;CodAgg;PrzTge;CodTge;NumSeq |
| `E081VPP` | Tabelas de Preço de Venda - Valores Parcela Protegida | CodEmp;CodTpr;DatIni;NumSeq |
| `E082ITP` | Tabelas de Preços de Fornecedores - Itens de Produto | CodEmp;CodTpr;DatIni;ProFor;QtdMax |
| `E082ITS` | Tabelas de Preços de Fornecedores - Itens de Serviço | CodEmp;CodTpr;DatIni;QtdMax;CodSer;CodPro;CodDer |
| `E082LIP` | Tabelas de Preços de Fornecedores - Log dos Itens de Produto | CodEmp;CodTpr;DatIni;ProFor;QtdMax;CodPro;CodDer;DatAlt;HorAlt;SeqAlt |
| `E082LIS` | Tabelas de Preços de Fornecedores - Log dos Itens de Serviço | CodEmp;CodTpr;DatIni;QtdMax;CodSer;CodPro;CodDer;DatAlt;HorAlt;SeqAlt |
| `E082LPR` | Tabelas de Preços de Fornecedores - Log Validades | CodEmp;CodTpr;DatIni;DatAlt;HorAlt;SeqAlt |
| `E082TAB` | Tabelas de Preços de Fornecedores - Dados Gerais | CodEmp;CodTpr |
| `E082TPR` | Tabelas de Preços de Fornecedores - Validades | CodEmp;CodTpr;DatIni |
| `E088CCL` | Certificado de Classificação - Dados Gerais | CodEmp;SerCcl;NumCcl |
| `E088LPC` | Certificado de Classificação - Ligação Produto ao Certificado de Classificação | CodEmp;SerCcl;NumCcl;CodPro;CodDer;CodFil |
| `E089DOC` | Tipos de Documento | CodEmp;CodDoc |
| `E089RAT` | Tipos de Documento - Rateios | CodEmp;CodDoc;SeqRat |
| `E091ASS` | Plano Financeiro - Assuntos | CodEmp;RatAss |
| `E091FXA` | Plano Financeiro - Relacionamento Contas X Assuntos | CodEmp;CtaFin;RatAss |
| `E091FXC` | Plano Financeiro - Relacionamento Contas X Centro de Custos Liberados | CodEmp;CtaFin;CodCcu |
| `E091PLF` | Plano Financeiro - Contas | CodEmp;CtaFin |
| `E091RAP` | Plano Financeiro - Rateios Padrões | CodEmp;CodRat |
| `E091RAT` | Plano Financeiro - Rateios | CodEmp;CtaFin;CodCcu |
| `E091RFC` | Plano Financeiro - Relacionamentos com Centros de Custos | CodEmp;CodRfc |
| `E091RPA` | Plano Financeiro - Rateios Padrões (Assunto) | CodEmp;CodRat;CodCcu |
| `E092TPJ` | Projetos - Tipos de Projetos | CodEmp;CodTpj |
| `E093ETG` | Estágios da Produção | CodEmp;CodEtg |
| `E095FOR_REC` | Recebimento de Documentos Eletrônicos - Fornecedores | CgcCpf |
| `E096MDR` | Controle de Modelos de Relatórios | CodEmp;CodFil;IdeMdr;SeqMdr |
| `E098LOG` | Identificador de Ponto de Regras/Personalização - Log's | CodEmp;ModSis;IdeReg;CodTns;SeqReg |
| `E098REG` | Identificador de Ponto de Regras/Personalização | CodEmp;ModSis;IdeReg;CodTns |
| `E115DLS` | Lotes selecionados para devolução | CodEmp;CodFil;DatEnt;SeqEnt;SeqPro;SeqDls |
| `E115HCF` | Integrações - Hub de Royalties - Créditos de Royalties por fornecedor | IdeUni |
| `E115HRF` | Integrações - Hub de Royalties - Itens Fixados/Movimentados | IdeUni |
| `E115HRY` | Integrações - Hub de Royalties - Créditos de Royalties dos Participantes da Pesagem | IdeUni |
| `E115ICG` | Integração - Itens Configuração - Agronegócio Senior | IdeUni |
| `E115LOG` | Integrações - Hub de Royalties - Log Gestão Hub de Royalties | IdeUni |
| `E115NOX` | Integrações - OriginaçãoX - Notas Fiscais de Entrada | CodEmp;CodFil;CodFor;NumNfc;CodSnf |
| `E115PRI` | Integração - Pendencias Itens Produtores Rurais - Agronegócio Senior | IdeUni |
| `E115PRL` | Integração - Log - Agronegócio Senior | IdeUni |
| `E115PRL_HIS` | Histórico - Integração - Log - Agronegócio Senior | IdeUni |
| `E115PRP` | Integração - Pendencias Produtores Rurais - Agronegócio Senior | IdeUni |
| `E115PRU` | Integração - Produtores Rurais - App do Produtor | CgcCpf |
| `E120TMS` | Integrações - Calculo de frete com o TMS | TmsPed |
| `E140ANF` | Notas Fiscais de Saída - NFCom | CodEmp;CodFil;CodSnf;NumNfv |
| `E140CPR` | Integrações - Detalhamento Venda Cartão Presente | CodEmp;CodFil;CodSnf;NumNfv |
| `E140DEC` | Notas Fiscais de Saída - Notas de Débito e Crédito | CodEmp;CodFil;CodSnf;NumNfv |
| `E140DEF` | Notas Fiscais de Saída - Defensivo Agrícula | CodEmp;CodFil;CodSnf;NumNfv;SeqDef |
| `E140TNF` | Notas Fiscais de Saída - Diversos | CodEmp;CodFil;CodSnf;NumNfv |
| `E140VFE` | Notas Fiscais de SaÃ­da - Valores de Financiamento Externo | CodEmp;CodFil;CodSnf;NumNfv |
| `E180CFW` | Integrações - WMS - Cancelamento de faturamento de ordem de separação WMS | CodEmp;CodFil;CodSnf;NumNfv;NumOrd |
| `E180DLS` | Integrações - WMS - Distribuição de lotes e séries | CodEmp;CodFil;NumOrd;SeqIto;SeqDls |
| `E180EOW` | Integrações - WMS - Eventos de ordem WMS | CodEmp;CodFil;NumOrd;SeqEow |
| `E180IPF` | Integrações - WMS - Itens de ordem WMS originada de pré-fatura | CodEmp;CodFil;NumOrd;SeqIto |
| `E180IPO` | Integrações - WMS - Itens de ordem WMS originada de apontamento produção | CodEmp;CodFil;NumOrd;SeqIto |
| `E180ITO` | Integrações - WMS - Itens de ordem WMS | CodEmp;CodFil;NumOrd;SeqIto |
| `E190HCF` | Integrações - Varejo Terceiros - Hash Cupom Fiscal | SeqHas |
| `E190HPV` | Integrações - Varejo Terceiros - Hash Pedido Venda | SeqHas |
| `E190HSC` | Integrações - Varejo Terceiros - Hash Cadastro | CodTab;SeqHas |
| `E191CPT` | Integrações - Configurações Parâmetros Tipos | IdeUni |
| `E191CPV` | Integrações - Configurações Parâmetros Valores | IdeUni |
| `E191FII` | Integrações - Flags internas de integração | ChvSis;ChvIde |
| `E192DRS` | Sincronização Cadastros - Definição de registros sinc. de cadastros |  |
| `E301TAN` | Integrações - Títulos faturados no autenticador externo | SeqReg |
| `E403FPP` | Fornecedores por Produtos do Produto no fornecedor | IdeUni |
| `E420RIX` | Integrações - Relac. do item da OC com a necessidade da Senior X | CodEmp;CodFil;NumOcp;SeqIpo |
| `E420RSX` | Integrações - Relac. do item de serviço da OC com a necessidade da Senior X | CodEmp;CodFil;NumOcp;SeqIso |
| `E439IPF` | Itens de Proposta de Fixação | SeqIpf |
| `E439LPF` | Log de Erros - Itens de Proposta de Fixação | SeqLpf |
| `E440DEC` | Notas Fiscais de Entrada - Notas de Débito e Crédito | CodEmp;CodFil;CodFor;NumNfc;CodSnf |
| `E460CCC` | Integrações - Contrato de Compras | SeqInt |
| `E606CXB` | Financeiro - Aplicação\Captação Recursos - Bens em Garantia | IdeUni |
| `E615CAC` | Financeiro - Projetos - Cadastro de Coordenador | CpfCor |
| `E616AOF` | Financeiro - Projetos - Aprovação Registro Ocorrências Fornecedores | CodEmp;TipAor;CodFor;SeqRoc |
| `E616AOP` | Financeiro - Projetos - Aprovação Registro Ocorrências Projetos | CodEmp;TipAor;NumPrj;SeqRoc |
| `E616CQP` | Financeiro - Projetos - Questionário do Projeto | CodEmp;NumPrj;CodCqp;CodQue |
| `E616CQR` | Financeiro - Projetos - Questões de Risco | CodEmp;CodQue |
| `E616CRQ` | Financeiro - Projetos - Respostas das Questões de Risco | CodEmp;CodQue;CodRes |
| `E616CTO` | Financeiro - Projetos - Cadastro de Tipo de Ocorrência | CodEmp;CodCto |
| `E616ICK` | Financeiro - Projetos - Itens do CheckList | CodEmp;CodChk;CodIte |
| `E616ROC` | Financeiro - Projetos - Registro de Ocorrências | CodEmp;TipRoc;SeqRoc |
| `E616ROF` | Financeiro - Projetos - Registro de Ocorrências de Fornecedores | CodEmp;CodFor;SeqRoc |
| `E616ROP` | Financeiro - Projetos - Registro de Ocorrências de Projetos | CodEmp;NumPrj;SeqRoc |
| `E616TCL` | Financeiro - Projetos - Tipos de CheckList | CodEmp;CodChk |
| `E616TRO` | Financeiro - Projetos - Tipo Relacionado com Ocorrência | CodEmp;CodCto;CodOco |
| `E661ARC` | Impostos - Acréscimo/Redução da base de cálculo do PIS/Cofins | IdeUni |
| `E669CCP` | Portaria CAT 42/2018 - Produtos Utilizados | IdeUni |
| `E669CNE` | Portaria CAT 42/2018 - Notas Fiscais de Entrada Utilizadas | IdeUni |
| `E669CNS` | Portaria CAT 42/2018 - Notas Fiscais de Saída Utilizadas | IdeUni |
| `E669CRP` | Tributos - Composição das receitas do período, receita bruta e demais receitas | IdeUni |
| `E669CXE` | Controle por Escrituração |  |
| `E669DEC` | Tributos - Parâmetros Geração por Declaração | IdeUni |
| `E669DRE` | Tributos - Linhas Geração por Declaração | IdeUni;IdeDec |
| `E669ECD` | Tributos - Estrutura de conferência das declarações | IdeUni |
| `E669FCD` | Tributos - Filtros de conferência das declarações | IdeUni |
| `E669PXE` | Parâmetros por Escrituração | IdePxe |
| `E916PAR` | Parâmetros por Form | CodEmp;CodFil;CodUsu;NomCom |
| `E997PXT` | Parâmetros do ERP XT | IdeUni |
| `E998FDC` | Integrações - Logística - Documentos origem da fatura | IdeFtr;SeqFdc |
| `E998FTR` | Integrações - Logística - Fatura | IdeUni |
| `E998IME` | Integrações - Integração Mercado Eletrônico | CodEmp;IntCme;DatReq;HorReq;SegReq |
| `E998TCP` | Integrações - Logística - Contas a pagar | CodEmp;CodFil;NumTit;CodTpt;CodFor |
| `E998TCR` | Integrações - Logística - Contas a receber | CodEmp;CodFil;NumTit;CodTpt |
| `V011SEX` | Sexo | CodSex |

## Tecnologia

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000PRP` | Dados da Proprietária |  |

## Tesouraria

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E600AGE` | Agendamento de Transferência entre Contas Internas | IdeUni |
| `E600CCO` | Conta - Cadastro | CodEmp;NumCco |
| `E600CCP` | Conta - Chaves PIXs | CodEmp;NumCco;SeqChv |
| `E600CHE` | Preparação - Cheques/Avisos | CodEmp;NumCco;OriChe;DatPre;DatLib;SeqChe |
| `E600DIA` | Movimento - Controle de Saldo por Dia | CodEmp;NumCco;DiaSal |
| `E600ICH` | Preparação - Composição de Cheques/Avisos | CodEmp;NumCco;OriChe;DatPre;DatLib;SeqChe;SeqIte |
| `E600MCC` | Movimento - Movimentações das Contas | CodEmp;NumCco;DatMov;SeqMov |
| `E600MES` | Movimento - Controle dos Saldos Mensais das Contas | CodEmp;NumCco;DatCmp |
| `E600PCF` | Parâmetros Contas Correntes e Caixa por Filial | CodEmp;NumCco;CodFil |
| `E600PDR` | Conta - Produtor Rural | IdeUni |
| `E600PXT` | Processo X Transação | CodEmp;ProTes;TipOpc;CodTns;TnsTit |
| `E600RAT` | Movimento - Rateios das Movimentações | CodEmp;NumCco;DatMov;SeqMov;SeqRat |
| `E600RCH` | Preparação - Rateios | CodEmp;NumCco;OriChe;DatPre;DatLib;SeqChe;SeqRat |
| `E600RCO` | Conta - Rateios do Cadastro das Contas | CodEmp;NumCco;SeqRat |
| `E600TAL` | Controle de Talonário Cheques de Contas Correntes | CodEmp;NumCco;CodFil;CheIni |
| `E600TRF` | Movimento - Controle das Transferências | CodEmp;NumCco;DatMov;SeqMov;CcoTra |
| `E605BNK` | Extrato - Dados de integração com ERP Banking | IdeUni |
| `E605EXT` | Extrato - Movimentos Bancários para Conciliação | CodEmp;NumCco;DatExt;SeqExt |
| `E607TRA` | Simulação de Transferência de Saldos Bancários - Analítico | CodEmp;CodTrf;EmpCco;NumCco;FilCco;TipTta;SeqTra |
| `E607TRF` | Simulação de Transferência de Saldos Bancários - Dados Gerais | CodEmp;CodTrf |
| `E607TRS` | Simulação de Transferência de Saldos Bancários - Sintético | CodEmp;CodTrf;EmpCco;NumCco;FilCco |
| `E610FCC` | Fluxo de Caixa - Contrato de compra | CodEmp;CodFlu;DatIni;SeqRel |
| `E610FCH` | Fluxo de Caixa - Preparação da tesouraria | CodEmp;CodFlu;DatIni;SeqRel |
| `E610FCO` | Fluxo de Caixa - Comissões | CodEmp;CodFlu;DatIni;SeqRel |
| `E610FCV` | Fluxo de Caixa - Contrato de venda | CodEmp;DatIni;CodFlu;SeqRel |
| `E610FLU` | Fluxo de Caixa | CodEmp;DatIni;CodFlu |
| `E610FMT` | Fluxo de Caixa - Movimentos da tesouraria | CodEmp;CodFlu;DatIni;SeqRel |
| `E610FOC` | Fluxo de Caixa - Ordem de Compra | CodEmp;DatIni;CodFlu;SeqRel |
| `E610FPD` | Fluxo de Caixa - Pedido | CodEmp;DatIni;CodFlu;SeqRel |
| `E610FTP` | Fluxo de Caixa - Títulos C. Pagar | CodEmp;DatIni;CodFlu;SeqRel |
| `E610FTR` | Fluxo de Caixa - Títulos C. Receber | CodEmp;DatIni;CodFlu;SeqRel |
| `E610PRZ` | Fluxo de Caixa - Parâmetros da tela | CodEmp;CodFlu;NomCmp |
| `E611FLU` | Fluxo de Caixa - Dados Gerais | CodEmp;CodFlu |
| `E611FTA` | Fluxo de Caixa - Distribuição Títulos Anteriores | CodEmp;CodFlu;SeqFta |
| `E611RES` | Fluxo de Caixa - Resumo por Conta | CodEmp;CodFlu;VisFlu;CtaFin;DatBas;TipCfc |
| `E611VAL` | Fluxo de Caixa - Origens dos Valores | CodEmp;CodFlu;VisFlu;CtaFin;DatBas;TipCfc;SeqOri |
| `E611VPF` | Fluxo de Caixa - Outros Valores Previstos Fluxo | CodEmp;CodFil;CtaFin;DatBas |
| `E645TCR` | Fatos Contábeis X Aplicação\Captação Recursos | IdeUni |

## Transporte

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E172IMA` | Manifesto - Itens | CodEmp;CodFil;CodSma;NumMan;SeqIma |
| `E172MAN` | Manifesto - Dados Gerais | CodEmp;CodFil;CodSma;NumMan |
| `E173CFR` | Carta Frete | CodEmp;CodFil;NumCfr |

## Tributos

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E055DEP` | Débitos Especiais | IdeUni |
| `E055FAN` | Alíquota nominal e dedução por faixa de faturamento do simples | IdeUni |
| `E055ICM` | Parâmetros para geração da guia por código de arrecadação - ICMS | IdeUni |
| `E055IPI` | Parâmetros para geração da guia por código de arrecadação - IPI | IdeUni |
| `E055TAN` | Alíquota nominal do simples por estado | IdeUni |
| `E075CMO` | Notas Fiscais de Entrada Matéria Prima - INOVAR-AUTO | IdeCmo;SeqNfe |
| `E075MON` | Resumo Entrada/Saídas Cliente - INOVAR-AUTO | IdeMon |
| `E075VMO` | Notas Fiscais de Saída Acabado - INOVAR-AUTO | IdeVmo;SeqNfs |
| `E660ACP` | Apontamentos de Componentes de Produção Própria - SPED Fiscal | IdeAcp |
| `E660ACT` | Apontamentos de Componentes de Produção em Terceiro - SPED Fiscal | IdeAct |
| `E660APP` | Apontamentos da OP de Produção Própria - SPED Fiscal | IdeApp |
| `E660APT` | Apontamentos da OP de Produção em Terceiro - SPED Fiscal | IdeApt |
| `E660ARV` | eSocial - Pessoa Física - Identificação do Advogado | IdeUni |
| `E660BBO` | Cadastro de Bicos da Bomba de Combustível - SPED Fiscal | CodEmp;CodFil;NumSer;CodBic |
| `E660BRI` | Baixa dos Rateios de Títulos do Contas a Receber para o IPRJ | CodEmp;CodFil;CodTpt;NumTit;CodTns;NumPrj;DatPgt |
| `E660BXT` | Baixa dos títulos de contas a receber diferidos | CodEmp;CodFil;CodTpt;NumTit;ConSoc;AliPif;AliCff;DatPgt |
| `E660CAB` | Identificação da apuração do bloco K | IdeUni |
| `E660CBO` | Cadastro de Bombas de Combustíveis - SPED Fiscal | CodEmp;CodFil;NumSer |
| `E660CCJ` | Componentes Utilizados na Ordem de Produção Conjunta - SPED Fiscal | IdeUni |
| `E660CEX` | Controle ICMS Ativo Permanente Extemporâneo | CodEmp;CodBem;ComExp;NumPar |
| `E660CFT` | Produtos Componentes (Insumos) da Ficha Técnica - SPED Fiscal | IdeCft |
| `E660CIN` | E-SOCIAL - Mensagens de retorno do eDOCS | IdeUni;IdeNre |
| `E660COE` | Correção estoque - SPED Fiscal | IdeUni |
| `E660COI` | Correção Consumo - SPED Fiscal | IdeUni |
| `E660COR` | Correção apontamento - SPED Fiscal | IdeUni |
| `E660CRP` | Dados Gerais do Recibo de Pagamento Autônomo | IdeUni |
| `E660DIA` | Declaração de Ingresso no Amazonas | IdeUni |
| `E660DID` | Desmonte item destino - SPED Fiscal | IdeUni |
| `E660DIO` | Desmonte item origem - SPED Fiscal | IdeUni |
| `E660EED` | Recibo de Pagamento Autônomo | IdeUni |
| `E660EFD` | Controle de produção de usina - Movimentos | IdeUni |
| `E660EPT` | Saldo de Estoque Próprio em Terceiro - SPED Fiscal | IdeEpt |
| `E660ESP` | Saldo de Estoque Próprio - SPED Fiscal | IdeEsp |
| `E660ETE` | Saldo de Estoque de Terceiro em Poder da Empresa - SPED Fiscal | IdeEte |
| `E660FTE` | Ficha Técnica do Produto Produzido - SPED Fiscal | IdeFte |
| `E660IMD` | Itens da Nota Fiscal Saída de Produto/Serviço - Mensagens | SeqImd |
| `E660INF` | Informações Mensais | CodEmp;CodFil;DatPer |
| `E660IPC` | Origem PIS/COFINS - Itens | IdeUni |
| `E660IRP` | Itens do Recibo de Pagamento Autônomo | IdeUni |
| `E660LBO` | Cadastro de Lacres das Bombas de Combustíveis - SPED Fiscal | CodEmp;CodFil;NumSer;NumLac |
| `E660LTD` | Tabela Dinâmica - Linhas - Histórico | IdeLtd |
| `E660MCO` | Movimentação Diária de Combustíveis - SPED Fiscal | CodEmp;CodFil;CodPro;CodDer;DatFec |
| `E660MIA` | Multiplicadores de ICMS do Amazonas | IdeUni |
| `E660MNC` | Nota Fiscal de Entrada - Mensagens | SeqMnc |
| `E660MNV` | Nota Fiscal de Saída - Mensagens | SeqMnv |
| `E660MTA` | Movimentação Diária de Combustíveis por Tanque - SPED Fiscal | CodEmp;CodFil;CodPro;CodDer;DatFec;NumTan |
| `E660NER` | Nota fiscal de entrada de imposto retido | IdeUni |
| `E660NEX` | Notas Fiscais do Exportador | CodEmp;CodFil;NumEbq;SeqEbq;SeqNex |
| `E660NRC` | Nota Referenciada da Nota Fiscal de Entrada | CodEmp;CodFil;CodFor;CodSnf;NumNfi;SeqNfr |
| `E660NRE` | eSocial - Número do Recibo | IdeUni |
| `E660NRV` | Nota Referenciada da Nota Fiscal de Saída | CodEmp;CodFil;CodSnf;NumNfi;SeqNfr |
| `E660NSR` | Nota fiscal de saída de imposto retido | IdeUni |
| `E660OCJ` | Ordem de Produção Conjunta - SPED Fiscal | IdeUni |
| `E660OPC` | Origem PIS/COFINS | IdeUni |
| `E660ORP` | Ordem de Produção - SPED Fiscal | IdeOrp |
| `E660PAE` | Período de Apuração do Estoque e Produção - SPED Fiscal | IdePae |
| `E660PAL` | Detalhamento Pensão Alimentícia do RPA | IdeUni |
| `E660PCJ` | Itens Produzidos na Ordem de Produção Conjunta - SPED Fiscal | IdeUni |
| `E660PDI` | Items Produtos DIA | IdeUni |
| `E660PRP` | Processos dos itens do Recibo de Pagamento Autï¿½nomo | IdeUni |
| `E660RAR` | Rastreamento OP, Apontamento produção reprocesso - SPED Fiscal | IdeUni |
| `E660RCA` | Rastreamento Correção de Apontamentos - SPED Fiscal | IdeUni |
| `E660RCE` | Rastreamento Correção de Estoque - SPED Fiscal | IdeUni |
| `E660RCJ` | Rastreamento de Ordem de Produção Conjunta - SPED Fiscal | IdeUni |
| `E660RCK` | Rastreamento de NF de Venda do ERP Geradora de Apontamento de OP de Produção próprio de Produtos Kit - SPED Fiscal | IdeRck |
| `E660RCR` | Rastreamento de Componente Reaproveitado de OP Gerador de Transferência Entre Produtos - SPED Fiscal | IdeRcr |
| `E660RCX` | Resumo dos Impostos de Regime de Caixa para Pis e Cofins | CodEmp;CodFil;CodTpt;NumTit;ConSoc;AliPif;AliCff;DatPgt;SeqMov |
| `E660RDZ` | Dispositivos fiscais dos itens do cupom fiscal | IdeUni |
| `E660REC` | Reprocesso consumo - SPED Fiscal | IdeUni |
| `E660REP` | Reprocesso apontamento - SPED Fiscal | IdeUni |
| `E660RIV` | Rastreamento de NF de Venda do ERP Geradora de Apontamento de OP de Produção próprio de Produtos Kit - SPED Fiscal | IdeRiv |
| `E660RMD` | Rastreamento de Movimento de Desmonte - SPED Fiscal | IdeUni |
| `E660RNR` | Rastreamento de NF de Retorno do ERP Geradora de Apontamento de OP de Produção em Terceiro - SPED Fiscal | IdeRnr |
| `E660ROP` | Rastreamento de OP do ERP Geradora de Apontamento de OP de Produção Própria - SPED Fiscal | IdeRop |
| `E660ROT` | Rastreamento de OP do ERP Geradora de Apontamento de OP de Produção em Terceiro - SPED Fiscal | IdeRot |
| `E660RPP` | Rastreamento de Apontamento de OP de Produção Própria Gerador de Transferência Entre Produtos - SPED Fiscal | IdeRpp |
| `E660RPT` | Rastreamento de Apontamento de OP de Produção em Terceiro Gerador de Transferência Entre Produtos - SPED Fiscal | IdeRpt |
| `E660RSM` | Registro de médias do controle de entrada do ICMS-ST | IdeUni |
| `E660RTD` | Rateios de títulos do contas a receber diferidos pela contribuição | CodEmp;CodFil;CodTpt;NumTit;ConSoc;AliPif;AliCff |
| `E660RTE` | Rastreamento de Movimento de Transferência do ERP Gerador de Transferência Entre Produtos - SPED Fiscal | IdeRte |
| `E660RTI` | Rateios de Títulos do Contas a Receber para IRPJ | CodEmp;CodFil;CodTpt;NumTit;CodTns;NumPrj |
| `E660SCT` | Nota Fiscal de Saída - CT-e substituído | CodEmp;CodFil;CodSnf;NumNfi |
| `E660TDS` | Tabela Dinâmica - Tabelas - Histórico | IdeTds |
| `E660TDU` | Tabela Dinâmica - Última Versão | TipTds;EspTds;CodLin |
| `E660TEP` | Transferências Entre Produtos - SPED Fiscal | IdeTep |
| `E660TIT` | Títulos de contas a receber diferidos | CodEmp;CodFil;CodTpt;NumTit |
| `E660TNE` | Nota fiscal de entrada - Títulos de impostos retidos | IdeUni |
| `E660TNS` | Nota fiscal de saída - Títulos de impostos retidos | IdeUni |
| `E660VVE` | Volume de Vendas de Combustíveis - SPED Fiscal | CodEmp;CodFil;CodPro;CodDer;DatFec;NumTan;CodBic |
| `E661ACC` | Ajustes dos Créditos do SPED Contribuições | CodEmp;CodFil;CodImp;DatApi;TipCre;AliImp;SeqAjs |
| `E661ACS` | Ajustes das Contribuições do SPED Contribuições | CodEmp;CodFil;CodImp;DatApi;ConSoc;AliImp;SeqAjs |
| `E661AIF` | Ajustes Apuração ISS das Instituições Financeiras | IdeUni |
| `E661AJR` | Ajustes da apuração do EFD-Reinf | IdeUni |
| `E661AJS` | Ajustes da apuração do ICMS | IdeAjs;SeqAjs;TipAjs |
| `E661ALT` | Tabela Dinâmica - Detalhamento Apuração | CodEmp;CodFil;CodImp;DatApi;TipTds;CodLin |
| `E661ATD` | Tabela Dinâmica - Identificação | CodEmp;CodFil;CodImp;DatApi;TipTds |
| `E661CAD` | Crédito apropriação direta PIS/Cofins | IdeUni |
| `E661CCE` | Controle dos créditos fiscais do ICMS e subapurações | IdeUni |
| `E661CCF` | Conta Corrente dos Impostos de Cliente e Fornecedor | CodEmp;CodFil;CodImp;CodFor;CodCli;DatApi |
| `E661CEX` | Controle dos Créditos Extemporâneos de PIS/COFINS | CodEmp;CodFil;CodImp;DatApi;SeqMov;PerApu;TipCre;FilNfc;CodFor;NumNfi;NumNff;CodSnf;CodTns;SeqInc |
| `E661CPR` | Resumo das Origens dos Impostos da Contribuição Previdenciária | CodEmp;CodFil;CodImp;DatApi;ConPre |
| `E661CRA` | Conferência retenção | IdeUni |
| `E661DAI` | Conta Corrente por Cidade ISS das Instituições Financeiras | IdeUni |
| `E661DAN` | Contribuição diferida em períodos anteriores para SPED PIS/Cofins | CodEmp;CodFil;CodImp;DatApi;ConSoc;AliImp;NatCre;PerApu;DatRec |
| `E661DCE` | Demonstrativos do controle dos créd. fiscais do ICMS e subapurações | IdeUni |
| `E661DCR` | Detalhamento da retenção | IdeUni |
| `E661DCT` | Demonstrativo de Créditos do ICMS Sobre Transporte Aéreo | IdeUni |
| `E661DED` | Deduções Diversas de PIS/Cofins | CodEmp;CodFil;DatApi;RegTri;NumCgc;IndOri |
| `E661DIF` | Controle do diferido no período para SPED PIS/Cofins | CodEmp;CodFil;CodImp;DatApi;ConSoc;AliImp;CodCli;TipCre |
| `E661DOC` | Documentos vinculados a ajustes da apuração do ICMS | IdeUni |
| `E661DOR` | Origem Controle de Retenções | IdeUni |
| `E661FAF` | Modalidade FAF | CodEmp;CodFil;CPTFAF |
| `E661IAC` | Controle do Valor Acumulado dos Impostos | IdeUni |
| `E661ICR` | Resumo da apuração por código do documento de arrecadação | IdeUni |
| `E661LRA` | Ligação resumo apuração e ajustes | CodEmp;CodFil;CodImp;DatApi |
| `E661OCF` | Resumo das Origens dos Impostos de Cliente e Fornecedor | CodEmp;CodFil;CodImp;CodFor;CodCli;DatApi;CodAgf;CodTns |
| `E661ODI` | Origens da contribuição diferida em períodos anteriores | CodEmp;CodFil;CodImp;DatApi;ConSoc;AliImp;NatCre;SeqOri |
| `E661OES` | Resumo das Origens dos Impostos por Produto | CodEmp;CodFil;CodImp;DatApi;CodPro;CodDer;CodCli |
| `E661ORR` | Origem Controle de Retenções(E661RET) | IdeRet |
| `E661PAP` | Cadastro dos Parâmetros da Apuração do Imposto | IdePap;SeqDie |
| `E661RCF` | Resumo do Cálculo dos Impostos de Cliente e Fornecedor | CodEmp;CodFil;CodImp;CodFor;CodCli;DatApi |
| `E661RPR` | Resumo por produto para a GNRE | IdeUni |
| `E661RRR` | Detalhamento das Restituições | IdeUni |
| `E661RRT` | Detalhamento das Compensações | IdeUni |
| `E661RST` | Resumo dos Créditos da Apuração | IdeUni |
| `E661RTD` | Tabela Dinâmica - Resumo Apuração | CodEmp;CodFil;CodImp;DatApi |
| `E661SAC` | Saldo do Controle de Retenções para Origem | IdeUni |
| `E661SCO` | Composição Base Cálculo PIS/COFINS - Soc. Cooperativas | CodEmp;CodFil;CodImp;DatApi;ConSoc;AliImp |
| `E661TCD` | Títulos do Conta Corrente dos Impostos por Cidade ISS | CodEmp;CodFil;CodImp;CodRai;DatApi;FilTit;NumTit;CodTpt;CodFor |
| `E661TCF` | Títulos do Conta Corrente dos Impostos de Cliente e Fornecedor | CodEmp;CodFil;CodImp;CodFor;CodCli;DatApi;NumTit;TptTit;ForTit;FilTit |
| `E661TCI` | Títulos do Conta Corrente dos Impostos | CodEmp;CodFil;CodImp;DatApi;NumTit;TptTit;ForTit;FilTit |
| `E661TCP` | Resumo Origens Contribuição Previdenciária X Transação | IdeTcp |
| `E661TCR` | Resumo Origens Contribuição Previdenciária X Código do Ajuste - REINF | IdeUni |
| `E661TUF` | Títulos do Conta Corrente dos Impostos por Estado | CodEmp;CodFil;CodImp;SigUfs;DatApi;NumTit;TptTit;ForTit;FilTit |
| `E661VIS` | Tabela Dinâmica - Visão Contábil | CodEmp;CodFil;CodImp;DatApi;CodVis;ClaCta |
| `E662ALT` | Prévias IRPJ/CSLL - Detalhamento Apuração | IdeUni |
| `E662CCC` | Prévias do ISS Retido - Apuração | IdeUni |
| `E662CPC` | Prévias PIS/Cofins - Créditos | IdeUni |
| `E662DAI` | Prévias do ISS das Inst. Financeiras - Detalhamento | IdeUni |
| `E662DCC` | Prévias PIS/Cofins - Base Créditos | IdeUni |
| `E662EAB` | Prévias PIS/Cofins - Abertura de Estoque | IdeUni |
| `E662IBI` | Prévias PIS/Cofins - Receitas, Deduções e Exclusões Financeiras | IdeUni |
| `E662ICI` | Prévias ISS Retido - Itens Nota Fiscal de Entrada | IdeUni |
| `E662INC` | Prévias PIS/Cofins - Itens Nota Fiscal de Entrada | IdeUni |
| `E662INF` | Prévias PIS/Cofins - Informações Mensais | IdeUni |
| `E662INV` | Prévias PIS/Cofins - Itens Nota Fiscal de Saída | IdeUni |
| `E662IPC` | Prévias PIS/Cofins - Contribuições | IdeUni |
| `E662IRZ` | Prévias PIS/Cofins - Itens Cupom Fiscal | IdeUni |
| `E662ISI` | Prévias ISS Retido - Itens Nota Fiscal de Saída | IdeUni |
| `E662IVI` | Prévias PIS/Cofins - Custo Incorrido | IdeUni |
| `E662IVO` | Prévias PIS/Cofins - Custo Orçado | IdeUni |
| `E662IVR` | Prévias PIS/Cofins - Valores Recebidos | IdeUni |
| `E662MOV` | Prévias PIS/Cofins - Patrimônio | IdeUni |
| `E662ODE` | Prévias PIS/Cofins - Outros Documentos de Entrada | IdeUni |
| `E662ODS` | Prévias PIS/Cofins - Outros Documentos de Entrada | IdeUni |
| `E662OIF` | Prévias do ISS das Inst. Financeiras - Origens | IdeUni |
| `E662PIF` | Prévias do ISS das Inst. Financeiras - Apuração | IdeUni |
| `E662PIT` | Prévias do ISS Retido - Identificação | IdeUni |
| `E662PPC` | Prévias PIS/Cofins - Apuração | IdeUni |
| `E662RCX` | Prévias PIS/Cofins - Regime de Caixa | IdeUni |
| `E662RTD` | Prévias do IRPJ/CSLL - Apuração | IdeUni |
| `E664CBL` | LALUR/LACS - Lançamentos - Contas Contábeis - Lançamentos | CodEmp;CodFil;CodImp;DatApi;NumLct;CtaRed;CodCcu;LctCtb |
| `E664CTB` | LALUR/LACS - Lançamentos - Contas Contábeis | CodEmp;CodFil;CodImp;DatApi;NumLct;CtaRed;CodCcu;CodHpd |
| `E664DIS` | LALUR/LACS - Lançamentos - Dispositivos Fiscais | CodEmp;CodFil;CodImp;DatApi;NumLct;CodDfs |
| `E664LCB` | LALUR/LACS - Lançamentos - Parte B | CodEmp;CodFil;CodImp;DatApi;NumLct;CodCon |
| `E664LCT` | LALUR/LACS - Lançamentos | CodEmp;CodFil;CodImp;DatApi;NumLct |
| `E664OCT` | LALUR/LACS - Lançamentos - Origens Contas Contábeis | CodEmp;CodFil;CodImp;DatApi;NumLct;IdeOct |
| `E664SAL` | LALUR/LACS - Controle de Saldos das Contas da Parte B | CodEmp;CodFil;CodImp;DatApi;CodCon |
| `E665ACC` | Auxiliar do módulo 3 (fichas 3A e 3B) da apuração da CAT83/09, para crédito acumulado de ICMS | IdeAcc |
| `E665ACD` | Auxiliar do módulo 3 (fichas 3A e 3B) da apuração da CAT83/09, para devolução de saída | IdeAcd |
| `E665CEA` | Componentes Ficha 5A - Ficha Técnica unitária da produção,  Apuração da CAT83/09 | IdeCea |
| `E665CEG` | Componentes Ficha 5G - Inventário de produtos em elaboração por material componente,  Apuração da CAT83/09 | IdeCeg |
| `E665CLO` | Códigos de lançamento para CAT83/09 | IdeClo |
| `E665FAA` | Ficha 1A - Controle de Materiais,  Apuração da CAT83/09 | IdeFaa |
| `E665FAB` | Ficha 1B - Controle de Valores Agregados na Industrialização por outro Estabelecimento, Apuração da CAT83/09 | IdeFab |
| `E665FAD` | Ficha 1D - Controle de Serviços de Comunicações, Apuração da CAT83/09 | IdeFad |
| `E665FBG` | Ficha 2G - Produtos em Elaboração,  Apuração da CAT83/09 | IdeFbg |
| `E665FCA` | Ficha 3A - Controle de Produtos Acabados,  Apuração da CAT83/09 | IdeFca |
| `E665FCB` | Ficha 3B - Controle de Materiais,  Apuração da CAT83/09 | IdeFcb |
| `E665FCL` | Filtros de códigos de lançamento para CAT83/09 | IdeFcl |
| `E665FEA` | Ficha 5A - Ficha Técnica unitária da produção,  Apuração da CAT83/09 | IdeFea |
| `E665FEB` | Ficha 5B - Demonstrativo de Materiais Resultantes de Perdas e Sobras - Produtos em Elaboração,  Apuração da CAT83/09 | IdeFeb |
| `E665FEG` | Ficha 5G - Inventário de produtos em elaboração por material componente,  Apuração da CAT83/09 | IdeFeg |
| `E665FEH` | Ficha 5H - Dados da exportação indireta comprovada,  Apuração da CAT83/09 | IdeFeh |
| `E665FFC` | Ficha 6C - Demonstrativo das Operações Geradoras de Crédito Acumulado do ICMS (Saídas sem o pagamento do Imposto - Exportação),  Apuração da CAT83/09 | IdeFfc |
| `E665FFD` | Ficha 6D - Demonstrativo das Operações Geradoras de Crédito Acumulado do ICMS (Saídas sem o pagamento do Imposto - Zona Franca de Manaus),  Apuração da CAT83/09 | IdeFfd |
| `E665FME` | Filtros de códigos de lançamento de movimentos de estoque para CAT83/09 | IdeFme |
| `E665FNE` | Filtros de códigos de lançamento de notas fiscais de entrada para CAT83/09. | IdeFne |
| `E665FNS` | Filtros de códigos de lançamento de notas fiscais de saída para CAT83/09. | IdeFns |
| `E665LAN` | Lançamentos da apuração da CAT83/09 | IdeLan |
| `E665LDD` | Itens de documentos diversos relacionados aos lançamentos da apuração da CAT83/09 | IdeLdd |
| `E665LIE` | Itens de nota fiscal de entrada relacionados aos lançamentos da apuração da CAT83/09 | IdeLie |
| `E665LIS` | Itens de nota fiscal de saída relacionados aos lançamentos da apuração da CAT83/09 | IdeLis |
| `E665LME` | Movimentos de estoques relacionados aos lançamentos da apuração da CAT83/09 | IdeLme |
| `E665LTR` | Transferência de lançamentos da CAT83/09 | IdeLtr |
| `E665MAA` | Movimentação Ficha 1A - Controle de Materiais, Apuração da CAT83/09 | IdeMaa |
| `E665MAB` | Movimentação Ficha 1B - Controle de Valores Agregados na Industrialização por outro Estabelecimento, Apuração da CAT83/09 | IdeMab |
| `E665MAC` | Movimentação Ficha 1C - Controle de Energia Eletrica, Apuração da CAT83/09 | IdeMac |
| `E665MAD` | Movimentação Ficha 1D - Controle de Serviços de Comunicações, Apuração da CAT83/09 | IdeMad |
| `E665MBE` | Movimentos da Ficha 2E - Gastos Gerais de Fabricação, Apuração da CAT83/09 | IdeMbe |
| `E665MBG` | Movimentação Ficha 2G - Produtos em Elaboração, Apuração da CAT83/09 | IdeMbg |
| `E665MCA` | Movimentação Ficha 3A - Controle de Produtos Acabados, Apuração da CAT83/09 | IdeMca |
| `E665MCB` | Movimentação Ficha 3B - Controle de Mercadorias de Revenda, Apuração da CAT83/09 | IdeMcb |
| `E665MEB` | Movimentação Ficha 5B - Demonstrativo de Materiais Resultantes de Perdas e Sobras, Apuração da CAT83/09 | IdeMeb |
| `E665PAT` | Parâmetros para CAT83/09 | CodEmp;CodFil |
| `E665PEA` | Período apuração CAT83/09 | IdePea |
| `E665PNE` | Parâmetros para CAT83/09 - Natureza de Gasto Energia Elétrica | CodEmp;CodFil;CodNtg |
| `E665PNG` | Parâmetros para CAT83/09 - Natureza de Gasto Gastos Gerais Fabricação | CodEmp;CodFil;NtgGgf |
| `E665REA` | Ficha 5A/5B - Auxiliar Rateio Reaproveitamento, Apuração da CAT83/09 | IdeUni |
| `E667OIC` | Origens da Apuração do Faturamento do IRPJ/CSLL | IdeOic;SeqOic |
| `E667RAC` | Receita apurada - CSLL | CodEmp;CodFil;DatCpt;SeqRac |
| `E667RAF` | Receita apurada | CodEmp;CodFil;DatCpt |
| `E667RAI` | Receita apurada - IRPJ | CodEmp;CodFil;DatCpt;SeqRai |
| `E667RDC` | Receita apurada - CSLL - Detalhamento | CodEmp;CodFil;DatCpt;SeqRac;SeqDet |
| `E667RDI` | Receita apurada - IRPJ - Detalhamento | CodEmp;CodFil;DatCpt;SeqRac;SeqDet |
| `E669CIN` | NFTS - Mensagens de retorno do eDOCS | IdeUni;IdeNre |
| `E669NRE` | NFTS - Número do recibo | IdeUni |
| `E669TDL` | Tabela Dinâmica Não Relacionada Apuração - Detalhamento | CodEmp;CodFil;CodImp;DatApi;TipTds;CodLin |
| `E669TDN` | Tabela Dinâmica Não Relacionada Apuração | CodEmp;CodFil;CodImp;DatApi;TipTds |
| `E690ADI` | REINF - Processos relacionados a não retenção de CP - Entradas | IdeUni |
| `E690ADJ` | REINF - Processos relacionados a não retenção de CP - Saídas | IdeUni |
| `E690ADR` | REINF - Receitas Repassadas para Associação Desportiva | IdeUni |
| `E690ADS` | REINF - Receitas Recebidas por Associação Desportiva | IdeUni |
| `E690AJS` | REINF - Ajustes da contribuição apurada no período | IdeUni |
| `E690APR` | REINF - Aquisição de Produção Rural | IdeUni |
| `E690ARE` | REINF - Receitas Repassadas para Associação Desportiva - Recursos Repassados | IdeUni |
| `E690ARJ` | REINF - Pessoa Jurídica - Identificação do Advogado | IdeUni |
| `E690ARP` | REINF - Pessoa Fisica - Identificação do Advogado | IdeUni |
| `E690ARR` | REINF - Receitas Recebidas por Associação Desportiva - Recursos Recebidos | IdeUni |
| `E690ARV` | REINF - Pessoa Física - Identificação do Advogado | IdeUni |
| `E690BNI` | REINF - Retenções na Fonte - Beneficiários não identificados | IdeUni |
| `E690BNP` | REINF - Beneficiários não identificados - Processos | IdeUni |
| `E690BPA` | REINF - Pessoa Física - Informações dos dependentes e beneficiários da pensão alimentícia | IdeUni |
| `E690CIN` | REINF - Mensagens de retorno do eDOCS | IdeUni;IdeNre |
| `E690CON` | REINF - Detalhamento da receita bruta | IdeUni |
| `E690CPT` | REINF - Cadastro de Competência | IdeCpt |
| `E690CRP` | REINF - Detalhamento da receita bruta - Processos | IdeUni |
| `E690DDE` | REINF - Pessoa Física - Detalhamento das Deduções | IdeUni |
| `E690DPS` | REINF - Pessoa Física - Dependente do plano de saúde coletivo empresarial | IdeUni |
| `E690DSS` | REINF - Totalização das Receitas | IdeUni |
| `E690ICP` | REINF - Informação da Comercialização de Produção | IdeUni |
| `E690INC` | REINF - Itens da Nota Fiscal de Entrada | IdeUni |
| `E690INV` | REINF - Itens da Nota Fiscal de Saída | IdeUni |
| `E690IRE` | REINF - Pessoa Fisica - Reembolso do titula do plano de saúde coletivo empresarial | IdeUni |
| `E690NFC` | REINF - Nota Fiscal de Entrada | IdeUni |
| `E690NFV` | REINF - Nota Fiscal de Saída | IdeUni |
| `E690NRE` | REINF - Número do Recibo | IdeUni |
| `E690OFJ` | REINF - Origem das retenções dos registros R-4010 e R-4020 | IdeUni |
| `E690OPS` | REINF - Pessoa Fisica - Identificação da operadora de plano privado de saúde coletivo empresarial de assistência à saúde | IdeUni |
| `E690ORE` | REINF - Outras Receitas do Esperáculo Desportivo | IdeUni |
| `E690PAR` | REINF - Processos relacionados a não retenção de CP - Aquisição de Produção Rural | IdeUni |
| `E690PDS` | REINF - Processos relacionados a não retenção de CP | IdeUni |
| `E690PJU` | REINF - Pessoa Física - Demais rendimentos decorrentes de decisão judicial. | IdeUni |
| `E690PNR` | REINF - Pessoa Jurídica - Informações de processos relacionados a não retenção de tributos ou depósitos judiciais | IdeUni |
| `E690PPF` | REINF - Pessoa Física - Informações de processos relacionados a não retenção de tributos ou depósitos judiciais | IdeUni |
| `E690PPJ` | REINF - Pessoa Jurídica - Informações complementares relativas a rendimentos decorrentes de decisão judicial | IdeUni |
| `E690PPR` | REINF - Informações de Processos | IdeUni |
| `E690RDE` | REINF - Pessoa Fisica - Reembolso do dependente do plano de saúde coletivo empresarial | IdeUni |
| `E690RED` | REINF - Entidade promotora do espetáculo desportivo | IdeUni |
| `E690REP` | REINF - Receitas Repassadas para Associação Desportiva - Processos | IdeUni |
| `E690RIG` | REINF - Receita de Venda de Ingressos | IdeUni |
| `E690RIN` | REINF - Pessoa Física - Rendimentos isentos e não tributáveis | IdeUni |
| `E690RNP` | REINF - Retenção do Recebimento - Processos | IdeUni |
| `E690RNR` | REINF - Retenção no Recebimento | IdeUni |
| `E690RPF` | REINF - Retenções na Fonte - Pessoa Física | IdeUni |
| `E690RPJ` | REINF - Retenções na Fonte - Pessoa Jurídica | IdeUni |
| `E690RRA` | REINF - Pessoa Física - Informações complementares relativas a rendimentos redimentos recebidos acumuladamente - RRA | IdeUni |
| `E690RRP` | REINF - Receitas Recebidas por Associação Desportiva - Processos | IdeUni |

## Usuários

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E099CAE` | Dados de Conexão no Autenticador de Crédito | CodEmp;CodAec |
| `E099UAB` | Abrangência de usuários | CodUsu;SeqAbr |
| `R900CPL` | Informações complementares | PERID |
| `R900DSB` | Designations of Substitutes | DesId |
| `R900FAC` | Forms Access | FRMID;DATSEQ |
| `R900GRP` | Group Members | GRPID;MEMID |
| `R900PDT` | People Data | PERID;DATSEQ |
| `R900POL` | Policies | POLKND;POLID;DATSEQ |
| `R900PPL` | People | PERID |
| `R900UAD` | User Audit Definitions | UEVID;DATSEQ |
| `R900URG` | User Rights | URGID;DATSEQ |
| `R900WPR` | Week Periods | DatSeq |
| `R901UVG` | User View Groups | PerId;GrpId |
| `R901UVP` | User Views for People | PerId |
| `R999POS` | Posições das forms | CodUsu;NomFrm;NomOri |
| `R999USU` | Tabela Antiga | CodUsu |

## Varejo

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E147EIE` | Controle de Entregas - Entregas dos itens | SeqEie |
| `E147ENT` | Controle de Entregas - Dados Gerais | IdeUni |
| `E147HIS` | Controle de Entregas - Histórico | IdeEnt;SeqHis |
| `E147ITE` | Controle de Entregas - Itens da Entrega | IdeEnt;SeqIte |
| `E147NFS` | Controle de Entregas - Notas Fiscais | IdeEnt;SeqNfs |
| `E147OCO` | Controle de Entregas - Ocorrências | IdeEnt;SeqOco |
| `E147VAE` | Controle de Entrega - Valores | IdeEnt;SeqVae |

## Vendas

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E119CMN` | Orçamentos - Componentes | CodEmp;NumOct;VerOct;SeqOci;IdxCmn |
| `E119IPR` | Orçamentos - Itens - Reforma tributária | CodEmp;NumOct;VerOct;SeqOci;CodImp |
| `E119ISR` | Orçamentos - Solicitações de orçamentos - Itens | CodEmp;NumSor;SeqIsr |
| `E119IVC` | Orçamentos - Valores Complementares por Item | CodEmp;NumOct;VerOct;SeqOci;CodTvc |
| `E119OBS` | Orçamentos - Observações | CodEmp;NumOct;VerOct;SeqObs |
| `E119OCI` | Orçamentos - Itens | CodEmp;NumOct;VerOct;SeqOci |
| `E119OCT` | Orçamentos - Dados Gerais | CodEmp;NumOct;VerOct |
| `E119OMN` | Orçamentos - Operações | CodEmp;NumOct;VerOct;SeqOci;IdxPai;SeqOmn |
| `E119SOR` | Orçamentos - Solicitações de orçamento | CodEmp;NumSor |
| `E119TPO` | Orçamentos - Parâmetros | CodEmp;CodTpo |
| `E119TVC` | Orçamentos - Valores Complementares por Item | CodEmp;CodTvc |
| `E120AAC` | Pedidos - Aprovação da Análise de Crédito | CodEmp;CodFil;NumPed;SeqPac |
| `E120AVA` | Pedidos - Avalistas | CodEmp;CodFil;NumPed;SeqAva |
| `E120BPD` | Pedidos - Bloqueios do Pedido | CodEmp;CodFil;NumPed;SeqBlo |
| `E120DEF` | Pedidos - Defensivo Agrícula | CodEmp;CodFil;NumPed;SeqDef |
| `E120DLS` | Pedidos - Entrada, Vencimento, Lote, Série | CodEmp;CodFil;NumPed;SeqIpd;SeqDls |
| `E120EAC` | Pedidos - Envio do Pedido para Análise de Crédito Externa | CodEmp;CodFil;NumPed;SeqEac |
| `E120EAP` | Pedidos - Envio de Parcelas para Análise de Crédito Externa | CodEmp;CodFil;NumPed;SeqEac;SeqPar |
| `E120EBP` | Pedidos - Embarques do Pedido | CodEmp;CodFil;NumPed;NumEbp |
| `E120EEB` | Pedidos - Embalagens para Embarque | CodEmp;CodFil;NumPed;SeqIpd;NumEmb |
| `E120EIP` | Exclusões de Itens de Produto | IdeEip |
| `E120EMB` | Pedidos - Embalagens | CodEmp;CodFil;NumPed;SeqEmb |
| `E120EPD` | Pedidos - Conteúdo das Embalagens | CodEmp;CodFil;NumPed;SeqEmb;SeqEpd |
| `E120EPE` | Exclusões de Pedidos | IdeEpe |
| `E120FPP` | Pedidos - Fila paralela para geracao de notas/pré-faturas | IdeUni |
| `E120IEB` | Pedidos - Itens do Embarque | CodEmp;CodFil;NumPed;NumEbp;SeqIpd |
| `E120INP` | Pedidos - Indicadores de negócio | IdeUni |
| `E120IPA` | Pedidos - Alterações dos Itens de Produto | CodEmp;CodFil;NumPed;SeqIpd;DatAlt |
| `E120IPD` | Pedidos - Itens de Produto | CodEmp;CodFil;NumPed;SeqIpd |
| `E120IPM` | Pedidos - Itens abertos para MRP | CodEmp;CodFil;NumPed;SeqIpd;SeqIpm |
| `E120IPR` | Pedidos - Itens de Produto - Reforma tributária | CodEmp;CodFil;NumPed;SeqIpd;CodImp |
| `E120ISA` | Pedidos - Alterações dos Itens de Serviço | CodEmp;CodFil;NumPed;SeqIsp;DatAlt |
| `E120ISP` | Pedidos - Itens de Serviço | CodEmp;CodFil;NumPed;SeqIsp |
| `E120ISR` | Pedidos - Itens de Serviço - Reforma tributária | CodEmp;CodFil;NumPed;SeqIsp;CodImp |
| `E120LPO` | Pedidos - Ligação de Pedido X Ordens Compra | CodEmp;CodFil;NumPed;SeqIpd;EmpOcp;FilOcp;NumOcp;SeqIpo |
| `E120MTK` | Pedidos - Movimentações Tracking | CodEmp;CodFil;NumPed;CodTrk;SeqMtk |
| `E120OBS` | Pedidos - Observações | CodEmp;CodFil;NumPed;SeqObs |
| `E120PAR` | Pedidos - Parcelas | CodEmp;CodFil;NumPed;SeqPar |
| `E120PED` | Pedidos - Dados Gerais | CodEmp;CodFil;NumPed |
| `E120PPD` | Pedidos - Itens de Produto - Complementar | CodEmp;CodFil;NumPed;SeqIpd |
| `E120PUC` | Pedidos - Pedidos por Usuário na Central de Crédito | CodEmp;CodFil;NumPed;UsuAna |
| `E120PXP` | Pedidos - Ligação de Pedido X Pedidos - Produtos | CodEmp;CodFil;NumPed;SeqIpd;SeqPxp |
| `E120PXS` | Pedidos - Ligação de Pedido X Pedidos - Serviços | CodEmp;CodFil;NumPed;SeqIsp;SeqPxs |
| `E120RAT` | Pedidos - Rateios | CodEmp;CodFil;NumPed;SeqRat |
| `E120REI` | Pedidos - Itens de Produto - Dados dos itens da Receita | CodEmp;CodFil;NumPed;SeqIpd |
| `E120SCF` | Pedidos - Controle da simulação de frete | CodEmp;CodFil;NumPed;SeqSml |
| `E120SGF` | Pedidos - Controle das sugestões de frete recebidas da simulação | CodEmp;CodFil;NumPed;SeqSml;SeqSgf |
| `E120SPA` | Pedidos - Situação Pedido na Análise de Crédito | CodEmp;CodFil;NumPed;SeqSpa |
| `E120TRK` | Pedidos - Tracking | CodEmp;CodFil;NumPed;CodTrk |
| `E120VEB` | Pedidos - Veículos do Embarque | CodEmp;CodFil;NumPed;NumEbp;SeqVeb |
| `E130AGS` | Controle de Metas - Parâmetros - Agrupamentos e Tipos de Serviços | CodEmp;CodPme;CptPme;ProSer;SeqDme;CodAgp;VarSer |
| `E130CCR` | Cotas - Controle por Representante | CodEmp;CodRep;CodRai;MesAno |
| `E130COT` | Cotas - Por Mês dos Representante | CodEmp;CodRep;CodAgt;MesAno |
| `E130CSU` | Controle de Metas - Parâmetros - Categoria do Representante (base) | CodEmp;CodPme;CptPme;ProSer;SeqDme;CodAgp;VarSer;CodRep |
| `E130DME` | Controle de Metas - Parâmetros - Gerais | CodEmp;CodPme;CptPme;ProSer;SeqDme;CodAgp;VarSer |
| `E130HFI` | Controle de Metas - Parâmetros - Filiais | CodEmp;CodPme;CptPme;ProSer;SeqDme;CodAgp;VarSer;CodRep;CodFil |
| `E130PME` | Controle de Metas - Períodos de Apuração | CodEmp;CodPme;CptPme;ProSer |
| `E130PMT` | Controle de Metas - Parâmetros - Índice esperado dentro do Período(PMT) | CodEmp;CodPme;CptPme;ProSer;SeqDme;CodAgp;VarSer;DatIni;DatFin |
| `E130REP` | Controle de Metas - Parâmetros - Representantes (vendedores) | CodEmp;CodPme;CptPme;ProSer;SeqDme;CodAgp;VarSer;CodRep;CodFil;RepFil |
| `E130VEN` | Cotas - Vendas do Mês por Representante | CodEmp;CodRep;CodRai;CodCli;CodAgt;MesAno |
| `E131CPH` | Comissionamento - Produtos - Percentuais | CodEmp;CodPco;CodFil;CptPco;TipDcp;CodAgp;SeqDcp;FxaIni;CatRep |
| `E131CSH` | Comissionamento - Serviços - Percentuais | CodEmp;CodPco;CodFil;CptPco;VarSer;FxaIni;SeqDcs;CatRep |
| `E131DCP` | Comissionamento - Produtos | CodEmp;CodPco;CodFil;CptPco;TipDcp;CodAgp;FxaIni;SeqDcp |
| `E131DCS` | Comissionamento - Serviços | CodEmp;CodPco;CodFil;CptPco;VarSer;FxaIni;SeqDcs |
| `E131PCO` | Comissionamento - Períodos de Apuração | CodEmp;CodPco;CodFil;CptPco |
| `E135ANE` | Análise de Embarque - Dados Gerais | CodEmp;CodFil;NumAne |
| `E135DLS` | Análise de Embarque - Entrada, Vencimento, Lote, Série | CodEmp;CodFil;NumAne;NumPfa;SeqPes;SeqDls |
| `E135EMB` | Análise de Embarque - Embalagens | CodEmp;CodFil;NumAne;NumPfa;SeqEmb |
| `E135EPD` | Análise de Embarque - Conteúdo das Embalagens | CodEmp;CodFil;NumAne;NumPfa;SeqEmb;SeqEpd |
| `E135FPP` | Pré-Faturas - Fila paralela para geracao de notas fiscais | IdeUni |
| `E135IPR` | Analise - Itens de Produto - Reforma tributária | CodEmp;CodFil;NumAne;NumPfa;SeqPes;CodImp |
| `E135LCR` | Análise de Embarque - Controle de Lacres | CodEmp;CodFil;NumAne;NumPfa;NumLcr |
| `E135LEI` | Análise de Embarque - Histórico de Leituras | IdeLei |
| `E135OBS` | Analise de Embarque - Observações Pré-Faturas | CodEmp;CodFil;NumAne;NumPfa;SeqObs |
| `E135PAR` | Análise de Embarque - Parcelas | CodEmp;CodFil;NumAne;NumPfa;CodPar |
| `E135PEN` | Distribuição - Cargas - Ligação de Pendências a Carga | CodEmp;CodFil;NumAne;DatGer;SeqPen |
| `E135PES` | Análise de Embarque - Itens de Produto e Serviço | CodEmp;CodFil;NumAne;NumPfa;SeqPes |
| `E135PFA` | Análise de Embarque - Pré-faturas | CodEmp;CodFil;NumAne;NumPfa |
| `E135PLA` | Análise de Embarque - Placas | CodEmp;CodFil;NumAne;NumPfa;CodTra;CodMtr;PlaVei |
| `E135RAT` | Análise de Embarque - Rateios | CodEmp;CodFil;NumAne;NumPfa;SeqRat |
| `E140ADE` | Ações do Documento Eletronico | IdeUni |
| `E140ANT` | Nota Fiscal de Saída - Dados do Conhecimento de Transporte - Documentos Anteriores | CodEmp;CodFil;CodSnf;NumNfv;CodTra;SeqDoc |
| `E140ATR` | Notas Fiscais de Saída - Atributos da Venda | CodEmp;CodFil;CodSnf;NumNfv;IdcIab |
| `E140AUT` | Notas Fiscais de Saída - Dados Gerais - Autorizados Download XML | CodEmp;CodFil;CodSnf;NumNfv;SeqAut |
| `E140AVA` | Notas Fiscais de Saída - Avalistas | CodEmp;CodFil;CodSnf;NumNfv;SeqAva |
| `E140AVB` | Notas Fiscais de Saída - Informações de seguro - Averbações | CodEmp;CodFil;CodSnf;NumNfv;SeqSeg;SeqAvb |
| `E140CCE` | Notas Fiscais de Saída - Controle de eventos de documentos eletrônicos | CodEmp;CodFil;CodSnf;NumNfv;TipEve;SeqEve |
| `E140CCN` | Notas Fiscais de Saída - Notas fiscais referenciadas a eventos de documentos eletrônicos | CodEmp;CodFil;CodSnf;NumNfv;TipEve;SeqEve;NumNfr |
| `E140CCP` | Notas Fiscais de Saída - Controle de eventos de documentos eletrônicos - Produtos do Documento | CodEmp;CodFil;CodSnf;NumNfv;TipEve;SeqEve;SeqIpv |
| `E140CCS` | Notas Fiscais de Saída - Controle de eventos de documentos eletrônicos - Serviços do Documento | CodEmp;CodFil;CodSnf;NumNfv;TipEve;SeqEve;SeqIsv |
| `E140CCT` | Nota Fiscal de Saída - Composição do Conhecimento de Transporte | CodEmp;CodFil;CodSnf;NumNfv;SeqCct |
| `E140CEC` | Notas Fiscais de Saída - Controle de eventos de documentos eletrônicos - Eventos do conhecimento de transporte eletrônico | CodEmp;CodFil;CodSnf;NumNfv;SeqEve;TipEve;SeqCec |
| `E140CMC` | Notas Fiscais de Saída - Controle de Movimento de Cooperado | IdeUni |
| `E140CMP` | Nota Fiscal de Saída - Dados do Conhecimento de Transporte - Componentes do Valor da Prestação | CodEmp;CodFil;CodSnf;NumNfv;SeqCmp |
| `E140CPK` | Notas Fiscais de Saída - Componentes do Produto KIT | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv;SeqCpk |
| `E140CTE` | Nota Fiscal de Saída - Dados do Conhecimento de Transporte | CodEmp;CodFil;CodSnf;NumNfv |
| `E140DCF` | Notas Fiscais de Saída - Dados Gerais - Dados Cupom Fiscal | CodEmp;CodFil;CodSnf;NumNfv |
| `E140DFP` | Notas Fiscais de Saída - Itens de Produto - Dispositivos Fiscais | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv;SeqDis |
| `E140DFS` | Notas Fiscais de Saída - Itens de Serviço - Dispositivos Fiscais | CodEmp;CodFil;CodSnf;NumNfv;SeqIsv;SeqDis |
| `E140DLS` | Notas Fiscais de Saída - Entrada, Vencimento, Lote, Série | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv;SeqDls |
| `E140DTP` | Notas Fiscais de Saída - Detalhamento de Tributos em Produtos | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv |
| `E140DTS` | Notas Fiscais de Saída - Detalhamento de Tributos em Serviços | CodEmp;CodFil;CodSnf;NumNfv;SeqIsv |
| `E140ECO` | Notas Fiscais de Saída - Controle dos eventos do ECONF | IdeUni |
| `E140EIP` | Exclusões de Notas Fiscais de Saída | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv |
| `E140EMB` | Notas Fiscais de Saída - Embalagens | CodEmp;CodFil;CodSnf;NumNfv;SeqEmb |
| `E140ENT` | Controle de entregas | CodEmp;CodFil;CodSnf;NumNfv;SeqEnt |
| `E140EPD` | Notas Fiscais de Saída - Conteúdo das Embalagens | CodEmp;CodFil;CodSnf;NumNfv;SeqEmb;SeqEpd |
| `E140EPT` | Notas Fiscais Saída - Embalagens/Produtos para Transferência | EmpOri;FilOri;EmpDes;FilDes;PlaVei;SeqEpt |
| `E140HDE` | Notas Fiscais de Saída - Histórico de Documentos Eletrônicos | CodEmp;CodFil;CodSnf;NumNfv;NumMan;SeqHde |
| `E140IAA` | Nota Fiscal de Saída - Dados do Conhecimento de Transporte - Informações adicionais do modal aéreo | CodEmp;CodFil;CodSnf;NumNfv;SeqIaa |
| `E140IDE` | Informações de Documentos Eletrônicos | CodEmp;CodFil;CodSnf;NumNfv |
| `E140IMP` | Notas Fiscais de Saída - Itens de Produto - Impostos | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv;CodImp |
| `E140IPM` | Notas Fiscais de Saída - Itens de Produto - Mensagens | SeqIpm |
| `E140IPO` | Notas Fiscais de Saída - Itens de Produto - Ordens de Compra Vinculadas |  |
| `E140IPR` | Notas Fiscais de Saída - Itens de Produto - Reforma tributária | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv;CodImp |
| `E140IPV` | Notas Fiscais de Saída - Itens de Produtos | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv |
| `E140IQC` | Informações de quantidades da carga | CodEmp;CodFil;CodSnf;NumNfv;SeqCct;SeqIqc |
| `E140ISM` | Notas Fiscais de Saída - Itens de Seviço - Mensagens | SeqIsm |
| `E140ISR` | Notas Fiscais de Saída - Itens de Serviço - Reforma tributária | CodEmp;CodFil;CodSnf;NumNfv;SeqIsv;CodImp |
| `E140ISV` | Notas Fiscais de Saída - Itens de Serviços | CodEmp;CodFil;CodSnf;NumNfv;SeqIsv |
| `E140LAC` | Nota Fiscal de Saída - Lacres | CodEmp;CodFil;CodSnf;NumNfv;SeqLac;SeqUnt;TipUnt;CodIdt;SeqUnc;TipUnc;CodIdc |
| `E140LNP` | Ligação Entre Itens de Produto de Notas Fiscais de Saída | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv;SeqLnp |
| `E140LNS` | Ligação Entre Itens de Serviço de Notas Fiscais de Saída | CodEmp;CodFil;CodSnf;NumNfv;SeqIsv;SeqLns |
| `E140LPS` | Ligação Entre Itens de Produto e Itens de Serviço de Notas Fiscais de Saída | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv;SeqLps |
| `E140MNV` | Notas Fiscais de Saída - Mensagens | SeqMnv |
| `E140MTR` | Notas Fiscais de Saída - Modal de Transporte | CodEmp;CodFil;CodSnf;NumNfv;SeqMtr |
| `E140NEM` | Notas Fiscais de Saída - Observações de Notas Fiscais Emitidas Manualmente | CodEmp;CodFil;CodSnf;NumNfv;SeqObs |
| `E140NFA` | Registros de Faturamento Total Anual | IdeUni |
| `E140NFR` | Nota referenciada da nota fiscal de saída | CodEmp;CodFil;CodSnf;NumNfv;SeqNfr |
| `E140NFV` | Notas Fiscais de Saída - Dados Gerais | CodEmp;CodFil;CodSnf;NumNfv |
| `E140NPA` | Nota Fiscal de Saída - Dados do Conhecimento de Transporte - Notas fiscais dos Documentos Anteriores | CodEmp;CodFil;CodSnf;NumNfv;CodTra;SeqDoc;SeqNpa |
| `E140NRR` | Nota referenciada de reembolso da NFS-e | CodEmp;CodFil;CodSnf;NumNfv;SeqNrr |
| `E140OBS` | Notas Fiscais de Saída - Observações | CodEmp;CodFil;CodSnf;NumNfv;TipInf;SeqObs |
| `E140PAR` | Notas Fiscais de Saída - Parcelas | CodEmp;CodFil;CodSnf;NumNfv;CodPar |
| `E140PAS` | Nota Fiscal de Saída - Dados do Conhecimento de Transporte - Previsão do Fluxo da Carga - Passagens | CodEmp;CodFil;CodSnf;NumNfv;SeqPas |
| `E140PER` | Nota Fiscal de Saída - Dados do Conhecimento de Transporte OS - Informações do percurso do CT-e | CodEmp;CodFil;CodSnf;NumNfv;UfsPer |
| `E140PFE` | Notas Fiscais de Saída - Pendências de movimentação financeira executadas | SeqPfe |
| `E140PME` | Notas Fiscais de Saída - Pendência de movimentação de estoque executada | SeqPme |
| `E140PMF` | Notas Fiscais de Saída - Pendências de movimentação financeira | SeqPmf |
| `E140PMV` | Notas Fiscais de Saída - Pendência de movimentação de estoque | SeqPmv |
| `E140PPA` | Nota Fiscal de Saída - Dados do CTe - Modal Aéreo - Produto Perigoso | CodEmp;CodFil;CodSnf;NumNfv;SeqPpa |
| `E140PPE` | Nota Fiscal de Saída - Dados do CTe/MDFe - Produto Perigoso | CodEmp;CodFil;CodSnf;NumNfv;SeqCct;SeqPpe |
| `E140PSI` | Notas Fiscais de Saída - Controle de eventos de prorrogação de suspensão de ICMS | IdeUni |
| `E140PVD` | Notas Fiscais de Saída - Itens de Produtos - Diversos | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv |
| `E140RAT` | Notas Fiscais de Saída - Rateios | CodEmp;CodFil;CodSnf;NumNfv;SeqRat |
| `E140RCI` | Notas Fiscais de Saída - Registro de saída de produtos para controle de impostos | IdsRci |
| `E140RCV` | Complementos de Venda - Nota Fiscal de Saída | CodEmp;CodFil;CodSnf;NumNfv;SeqRcv |
| `E140REI` | Notas Fiscais de Saída - Itens de Produtos - Dados dos itens da Receita | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv |
| `E140REN` | Relacionamentos entre Notas Fiscais de Saída | CodEmp;CodFil;CodSnf;NumNfv;SeqRel |
| `E140ROP` | Relacionamento da nota fiscal de retorno de industrialização com as ordens de produção | IdeUni |
| `E140SEG` | Notas Fiscais de Saída - Informações de seguro | CodEmp;CodFil;CodSnf;NumNfv;SeqSeg |
| `E140TAX` | Notas Fiscais de Saída - Itens de Produtos - Taxas | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv;CodItx;TipPtx;DatIni;DatFim |
| `E140TER` | Notas Fiscais de Saída - Itens de Produtos - Terminais Adicionais NFCom | CodEmp;CodFil;CodSnf;NumNfv;SeqTer |
| `E140TSV` | Notas Fiscais de Saída - Itens de Produtos - NF Taxas Serviço | CodEmp;CodFil;CodSnf;NumNfv;SeqIpv;CodItx;TipPtx;DatIni;DatFim |
| `E140UNC` | Nota Fiscal de Saída - Composição do Conhecimento de Transporte - Unidades de Carga | CodEmp;CodFil;CodSnf;NumNfv;SeqCct;SeqUnc;TipUnc;CodIdc |
| `E140UNT` | Nota Fiscal de Saída - Composição do Conhecimento de Transporte - Unidades de Transporte | CodEmp;CodFil;CodSnf;NumNfv;SeqCct;SeqUnt;TipUnt;CodIdt |
| `E140VPE` | Nota Fiscal de Saída - Vale Pedágio | CodEmp;CodFil;CodSnf;NumNfv;SeqVpe |
| `E140VTR` | Nota Fiscal de Saída - Dados do Conhecimento de Transporte - Veículos Transportados | CodEmp;CodFil;CodSnf;NumNfv;SeqVtr |
| `E145CCD` | Controle de Embarques - Carga e Descarga | CodEmp;CodFil;NumEbq;SeqMov |
| `E145CLD` | Controle de Embarques - Local de Descarregamento | CodEmp;CodFil;NumEbq;SeqEbq;SeqMov |
| `E145CMP` | Controle de Embarques - Componentes do Pagamento | CodEmp;CodFil;NumEbq;SeqCmp |
| `E145EBQ` | Controle de Embarques - Dados Gerais | CodEmp;CodFil;NumEbq |
| `E145NEX` | Controle de Embarques - Notas fiscais de saída do exportador | CodEmp;CodFil;NumEbq;SeqEbq;SeqNex |
| `E145NFV` | Controle de Embarques - Composição Notas Fiscais | CodEmp;CodFil;NumEbq;SeqEbq |
| `E145OCE` | Controle de Embarques - Ocorrências | CodEmp;CodFil;NumEbq;SeqOce |
| `E145PAR` | Controle de Embarques - Parcelas | CodEmp;CodFil;NumEbq;NumPar |
| `E145VAE` | Controle de Embarques - Valores | CodEmp;CodFil;NumEbq;SeqVae |
| `E146CMP` | Carregamentos de Pedidos - Componentes do Itens do Carregamento | CodEmp;CodFil;NumCpe;NumPed;SeqIpd;SeqCmp |
| `E146CPE` | Carregamentos de Pedidos | CodEmp;CodFil;NumCpe |
| `E146ITE` | Carregamentos de Pedidos - Itens de Pedido | CodEmp;CodFil;NumCpe;NumPed;SeqIpd |
| `E146OBS` | Carregamentos de Pedidos - Observações | CodEmp;CodFil;NumCpe;SeqObs |
| `E150NFF` | Notas Fiscais Fatura - Dados Gerais | CodEmp;CodFil;NumNff |
| `E150NFV` | Notas Fiscais Fatura - Composição | CodEmp;CodFil;NumNff;NumNfv |
| `E150OBS` | Notas Fiscais Fatura - Observações | CodEmp;CodFil;NumNff;SeqObs |
| `E150PNF` | Notas Fiscais Fatura - Parcelas | CodEmp;CodFil;NumNff;NumPar |
| `E150RAT` | Notas Fiscais Fatura - Rateios | CodEmp;CodFil;NumNff;SeqRat |
| `E160CDV` | Contratos - Produtos/derivações válidas (produtos homologados) | CodEmp;CodFil;NumCtr;DatCpt;SeqCvp;SeqCdv |
| `E160CLI` | Contratos - Ligação clientes x contratos | CodEmp;CodFil;NumCtr;CodCli |
| `E160CTR` | Contratos - Dados gerais | CodEmp;CodFil;NumCtr |
| `E160CVP` | Contratos - Itens de produto | CodEmp;CodFil;NumCtr;DatCpt;SeqCvp |
| `E160CVS` | Contratos - Itens de serviço | CodEmp;CodFil;NumCtr;DatCpt;SeqCvs |
| `E160EMP` | Contratos - Tabela de empenhos | CodEmp;CodFil;NumCtr;NumEmp |
| `E160GRU` | Contratos - Grupos de produtos | CodEmp;CodFil;NumCtr;CodGru |
| `E160IMO` | Contratos - Itens das formas de pagamento | CodEmp;CodFil;NumCtr;SeqImo |
| `E160IPR` | Contratos - Itens de Produto - Reforma tributária | CodEmp;CodFil;NumCtr;DatCpt;SeqCvp;CodImp |
| `E160ISR` | Contratos - Itens de Serviço - Reforma tributária | CodEmp;CodFil;NumCtr;DatCpt;SeqCvs;CodImp |
| `E160LOG` | Contratos - Log | CodEmp;CodFil;NumCtr;SeqLog |
| `E160LPS` | Contratos - Ligação dos Produtos aos Serviços do Contrato | CodEmp;CodFil;NumCtr;DatCpt;SeqCvs;SeqIpr |
| `E160MAP` | Contratos - Mensagens para Agrupamentos de Produtos do Contrato | CodEmp;CodFil;NumCtr;CodAgc |
| `E160OBS` | Contratos - Observações | CodEmp;CodFil;NumCtr;SeqObs |
| `E160PAR` | Contratos - Parcelas | CodEmp;CodFil;NumCtr;SeqPar |
| `E160RAT` | Contratos - Rateios | CodEmp;CodFil;NumCtr;SeqRat |
| `E160REA` | Contratos - Históricos dos reajustes | CodEmp;CodFil;NumCtr;DatCpt;SeqCvs;SeqCvp;UltRea |
| `E160REP` | Contratos - Repasses para fornecedores | CodEmp;CodFil;NumCtr;SeqRep |
| `E160TER` | Notas Fiscais de Saída - Itens de Produtos - Terminais Adicionais NFCom | CodEmp;CodFil;NumCtr;SeqTer |
| `E170COL` | Coletas - Dados Gerais | CodEmp;CodFil;NumCol |
| `E170OBS` | Coletas - Observações | CodEmp;CodFil;NumCol;SeqObs |
| `E170VEI` | Coletas - Veículo e Motorista | CodEmp;CodFil;NumCol;SeqVei |
| `E171COT` | Coletas - Cotações de Frete | CodEmp;CodFil;NumCol;SeqCot |
| `E171VEI` | Coletas - Veículos das Cotações de Frete | CodEmp;CodFil;NumCol;SeqCot;SeqVei |

## Vendas/Compras

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E000CES` | Controle de Entrada e Saída - Dados Gerais | SeqInt |
| `E115CAQ` | Controle de Entrada e Saída - Certificado de Análise de Qualidade | IdeUni |
| `E115CES` | Controle de Entrada e Saída - Dados Gerais | CodEmp;CodFil;DatEnt;SeqEnt |
| `E115DOC` | Controle de Entrada e Saída - Documentos Gerados | CodEmp;CodFil;DatEnt;SeqEnt;SeqDoc |
| `E115EXT` | Controle de Entrada e Saída - Pesagem com origem de sistema externo | IdeUni |
| `E115FLA` | Controle de Entrada e Saída - Ligação Filial x Área x LPR | CodEmp;CodFil;IdeLpr;IdeAre |
| `E115HAS` | Controle de Entrada e Saída - Dados Gerais - Auxiliar - Hash | CodEmp;CodFil;CodSaf;CodFam;CodPro;CgcCpf |
| `E115ICL` | Controle de Entrada e Saída - Itens de classificação | CodEmp;CodFil;DatEnt;SeqEnt;SeqPro;CodIcl;TipIcl |
| `E115LGA` | Controle de Entrada e Saída - Ligação Grupo de usuários X área | CodEmp;CodFil;IdeAre;GrpUsu |
| `E115OBS` | Controle de Entrada e Saída - Observações | CodEmp;CodFil;DatEnt;SeqEnt;SeqObs |
| `E115PAR` | Controle de Entrada e Saída - Participantes da Pesagem | IdeUni |
| `E115PFO` | Fornecedores Participantes | CodEmp;CodFil;DatEnt;SeqEnt;SeqPfo |
| `E115PRO` | Controle de Entrada e Saída - Produtos/Derivação | CodEmp;CodFil;DatEnt;SeqEnt;SeqPro |
| `E115PXA` | Controle de Entrada e Saída - Produtos X Acréscimos Financeiros | CodEmp;CodFil;DatEnt;SeqEnt;SeqPro;SeqPxa |
| `E115ROY` | Controle de Entrada e Saída - Créditos de Royalties dos Participantes da Pesagem | IdeUni |
| `E115YAR` | Controle de Entrada e Saída - Áreas integradas com o YMS | IdeUni |
| `E115YLP` | Controle de Entrada e Saída - LPRS integrados com o YMS | IdeUni |

## WebService Comunicados

| Tabela | Descrição | PK |
| --- | --- | --- |
| `R958WSF` | Controle de Falha de Carga de Mensagens - Estação | NamSta |
| `R958WSM` | Controle Mensagens Enviadas | NamIde |
| `R958WSU` | Controle Leitura - Usuários | NamIde;CodUsu |

## Workflow

| Tabela | Descrição | PK |
| --- | --- | --- |
| `W000CPY` | Dados politica comercial |  |

## X Platfom

| Tabela | Descrição | PK |
| --- | --- | --- |
| `E198GED` | GED - Tipos de Arquivo para GED | IdeTag |
| `E198GVA` | GED - Tipos de Arquivo para GED - Variáveis Armazenamento | IdeUni |
| `E998GDE` | GED - Declaração para GED | IdeUni |
| `E998GED` | GED - Arquivo para GED | IdeUni |

_Total: 3120 tabelas. Campos: `python3 scripts/buscar_tabela.py <TABELA> --campos`_
