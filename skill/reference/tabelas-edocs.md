# Dicionário de Dados — eDocs

> Fonte: GSBD do SDE (Gerenciador de Schema de Banco de Dados)
> Versão de referência: **5.08.16.90** (`5081690`)
> Total de tabelas: **344**
> Legenda das colunas: **Campos** = número de colunas próprias | **FKs** = chaves estrangeiras | **Idx** = índices | **Criada em** = versão em que a tabela surgiu

> ⚠️ **Base separada do ERP.** As tabelas `N*` / `INTERF_*` vivem no banco do **eDocs**, não no
> banco do ERP (`E0*`/`R9*` — ver `reference/tabelas.md`). Não faça JOIN entre os dois sem
> confirmar que a conexão é a mesma; e nunca `INSERT`/`UPDATE`/`DELETE` direto — a entrada de
> dados é pela camada de interface (`INTERF_*`) ou pelos web services do eDocs.

> Este arquivo é grande (~2000 linhas). **Não leia inteiro** — use:
> `python3 scripts/buscar_tabela_edocs.py <termo>`             busca por nome/descrição
> `python3 scripts/buscar_tabela_edocs.py <TABELA> --campos`   campos, tipos por SGBD, FKs, índices
> `python3 scripts/buscar_tabela_edocs.py --modulo N130`       lista as tabelas de um módulo
> `python3 scripts/buscar_tabela_edocs.py --modulos`           índice dos módulos

Este dicionário está organizado por módulo/área funcional, identificado pelo prefixo do nome da tabela.

---

## Índice de Módulos

| Prefixo | Módulo / Documento Eletrônico | Nº de Tabelas |
|---------|-------------------------------|---------------|
| (sem prefixo) | Interface de integração e lotes legados | 34 |
| N010 | Sistema / Segurança / Configuração / Multitenant | 39 |
| N100 | Cadastros gerais (filiais, empresas, certificados, e-mail) | 41 |
| N130 | NF-e (Nota Fiscal Eletrônica de Produto) | 46 |
| N140 | NFS-e (Nota Fiscal de Serviço Eletrônica) | 34 |
| N150 | CT-e (Conhecimento de Transporte Eletrônico) | 30 |
| N170 | MDF-e (Manifesto Eletrônico de Documentos Fiscais) | 18 |
| N180 | eSocial | 19 |
| N190 | NFC-e (Nota Fiscal de Consumidor Eletrônica) | 12 |
| N200 | CF-e / SAT (Cupom Fiscal Eletrônico) | 9 |
| N210 | EFD-Reinf | 7 |
| N220 | GNRE (Guia Nacional de Recolhimento de Tributos Estaduais) | 11 |
| N230 | Bloco X | 4 |
| N240 | GRF-GTS (Guia de Recolhimento do FGTS) | 3 |
| N250 | Receituário Agronômico | 5 |
| N260 | Recintos Aduaneiros | 4 |
| N270 | SISDEV | 4 |
| N280 | IDAF | 5 |
| N290 | DT-e (Documento de Transporte Eletrônico) | 6 |
| N310 | NF3-e (Nota Fiscal de Energia Elétrica Eletrônica) | 5 |
| N320 | NFTS (Nota Fiscal do Tomador de Serviço) | 9 |
| N330 | DC-e (Declaração de Conteúdo Eletrônico) | 6 |
| N340 | NFCom (Nota Fiscal Fatura de Comunicação Eletrônica) | 10 |

---

## Interface de Integração e Lotes (tabelas legadas, sem prefixo N)

Tabelas de entrada de dados via interface de integração (ERP → eDocs) e controle de lotes/contingência da primeira geração do produto.

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| CONTAT_ESTAB | Contatos da filial | 4 | 0 | 1 | v5060401 |
| CONTRL_CONTNG | Controle de entrada em contingência | 6 | 0 | 1 | v5060401 |
| CRIT_EVENTO_NFE | Críticas de evento de NF-e | 3 | 2 | 1 | v5060401 |
| DET_CRIT_XML | Detalhe de crítica de XML | 3 | 1 | 1 | v5060401 |
| EVENTO_NFE | Evento de NF-e | 15 | 7 | 4 | v5060401 |
| INTERF_ARMA | Interface — armamento | 6 | 1 | 1 | v5060401 |
| INTERF_CANA_DEDUC | Interface — deduções de cana | 4 | 0 | 0 | v5060401 |
| INTERF_CANA_FORDIA | Interface — fornecimento diário de cana | 4 | 0 | 0 | v5060401 |
| INTERF_CANCEL_NFE | Interface — cancelamento de NF-e | 15 | 1 | 2 | v5060401 |
| INTERF_COMBST | Interface — combustível | 17 | 1 | 1 | v5060401 |
| INTERF_DUPLCT_NFE | Interface — duplicatas da NF-e | 4 | 1 | 1 | v5060401 |
| INTERF_ICMS_NFE | Interface — ICMS da NF-e | 26 | 0 | 1 | v5060401 |
| INTERF_INF_ADIC_CONTRB | Interface — informações adicionais do contribuinte | 3 | 1 | 1 | v5060401 |
| INTERF_INF_ADIC_DANFE | Interface — informações adicionais do DANFE | 3 | 1 | 1 | v5060401 |
| INTERF_INF_ADIC_FISCO | Interface — informações adicionais do fisco | 3 | 1 | 1 | v5060401 |
| INTERF_ITEM_NFE | Interface — item da NF-e | 108 | 18 | 18 | v5060401 |
| INTERF_ITEM_NFE_ADI | Interface — adições do item da NF-e | 6 | 1 | 1 | v5060401 |
| INTERF_ITEM_NFE_DI | Interface — DI do item da NF-e | 8 | 1 | 1 | v5060401 |
| INTERF_LACRE_NFE | Interface — lacres da NF-e | 3 | 1 | 1 | v5060401 |
| INTERF_MEDICM | Interface — medicamentos | 7 | 1 | 0 | v5060401 |
| INTERF_NFE | Interface — cabeçalho da NF-e | 196 | 2 | 11 | v5060401 |
| INTERF_NFE_REF | Interface — NF-e referenciada | 20 | 1 | 1 | v5060401 |
| INTERF_PROCES_REFER | Interface — processo referenciado | 3 | 1 | 1 | v5060401 |
| INTERF_REBOQ | Interface — reboque | 4 | 1 | 1 | v5060401 |
| INTERF_VEICUL | Interface — veículo | 28 | 1 | 1 | v5060401 |
| INTERF_VOLUME_NFE | Interface — volumes da NF-e | 7 | 1 | 1 | v5060401 |
| ITEM_LOTE_DPEC | Item do lote DPEC | 4 | 2 | 3 | v5060401 |
| ITEM_LOTE_NFE | Item do lote de NF-e | 8 | 2 | 2 | v5060401 |
| LOTE_DPEC | Lote DPEC | 9 | 0 | 1 | v5060401 |
| LOTE_NFE | Lote de NF-e | 13 | 0 | 1 | v5060401 |

## N010 — Sistema, Segurança, Configuração e Multitenant

Controle de acesso (usuários, grupos, funções), parâmetros de sistema/empresa/filial/usuário/emissor/tenant, versionamento, processamento em segundo plano e armazenamento de binários.

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N010AAG | Controle de acesso N-N entre grupos/usuários e funções | 0 | 2 | 0 | v5070301 |
| N010ACE | Controle de acesso — funções | 4 | 1 | 0 | v5070301 |
| N010AGE | Associação N-N entre grupo/usuário e empresa | 0 | 2 | 0 | v5080399 |
| N010AGF | Controle de acesso N-N entre grupo/usuários e filiais | 0 | 2 | 0 | v5070301 |
| N010AGM | Vínculo de usuários/grupos a emissores | 0 | 2 | 0 | v5080936 |
| N010AGU | Controle de acesso — grupos e usuários | 10 | 0 | 0 | v5070301 |
| N010ARQ | Armazena arquivos em banco de dados | 4 | 0 | 0 | v5081126 |
| N010AUG | Controle de acesso N-N entre usuários e grupos | 0 | 2 | 0 | v5070301 |
| N010BIN | Binários do sistema | 2 | 0 | 0 | v5081201 |
| N010CAO | Controle de acesso das origens de um usuário | 2 | 1 | 0 | v5081101 |
| N010CET | Controle de execuções temporizadas | 5 | 0 | 0 | v5081143 |
| N010CLI | Cliente remoto | 9 | 1 | 0 | v5081132 |
| N010COL | Coletas | 3 | 0 | 0 | v5081045 |
| N010CVT | Configuração do Validador Tributário IOB por filial | 10 | 1 | 0 | v5081690 |
| N010EMI | Histórico de emissões agrupadas por código de serviço | 10 | 0 | 0 | v5081065 |
| N010FVT | Filtro de envio do Validador Tributário IOB | 6 | 1 | 0 | v5081690 |
| N010HAS | Histórico de alteração de serial | 4 | 1 | 0 | v5081126 |
| N010HBA | Histórico de comandos executados pelo GSBD | 2 | 0 | 0 | v5081057 |
| N010IMG | Armazena imagens e logotipos | 3 | 2 | 0 | v5080901 |
| N010ORU | Ordenação customizada por usuário | 5 | 1 | 0 | v5080701 |
| N010PAC | Parâmetro de sistema por estado | 3 | 1 | 0 | v5081104 |
| N010PAE | Parâmetros da empresa | 3 | 1 | 0 | v5080399 |
| N010PAF | Parâmetros da filial | 3 | 1 | 0 | v5060401 |
| N010PAR | Parâmetros do sistema | 2 | 0 | 0 | v5060401 |
| N010PAU | Parâmetros de usuário | 3 | 1 | 0 | v5080701 |
| N010PEM | Parâmetros de emissor | 3 | 1 | 0 | v5080901 |
| N010PFR | Espelho da proprietária | 5 | 0 | 1 | v5080911 |
| N010PRO | Controle de processamento em segundo plano | 10 | 2 | 0 | v5080901 |
| N010PTE | Parâmetros do tenant | 3 | 1 | 0 | v5081201 |
| N010RES | Resultados de processamento em segundo plano | 4 | 1 | 0 | v5080901 |
| N010SVC | Prioridade de consulta de ambientes SVC para NF-e | 2 | 1 | 0 | v5080101 |
| N010SVT | Controle dos serviços temporizados | 3 | 0 | 0 | v5081115 |
| N010TEN | Tenant | 16 | 0 | 0 | v5081201 |
| N010TSE | Controle de token de alteração de senha | 3 | 1 | 0 | v5080901 |
| N010VER | Controle de versões do sistema | 4 | 0 | 0 | v5060401 |

## N100 — Cadastros Gerais

Cadastros de empresas, filiais, certificados digitais, endereços, municípios/estados/países, contas de recebimento, templates e filtros de impressão, contingências e e-mails.

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N100CCA | Controle de contingência automática | 3 | 2 | 0 | v5081101 |
| N100CER | Certificados das filiais | 8 | 2 | 0 | v5070401 |
| N100CIN | Críticas de integração | 22 | 2 | 2 | v5060401 |
| N100CNS | Controle de consultas de NSU | 7 | 1 | 1 | v5080804 |
| N100CON | Controle de contingências das filiais | 8 | 2 | 0 | v5060501 |
| N100EMA | Anexos de mensagem | 3 | 1 | 0 | v5080601 |
| N100EMI | Cadastro de emissores de documentos | 7 | 1 | 0 | v5080901 |
| N100EML | E-mails associados aos documentos eletrônicos | 2 | 0 | 0 | v5060401 |
| N100EMP | Cadastro de empresa | 5 | 0 | 0 | v5080399 |
| N100EMR | Críticas de e-mail de recebimento | 8 | 1 | 0 | v5080601 |
| N100END | Endereço | 7 | 2 | 0 | v5060501 |
| N100ENP | N-N de e-mail com pessoa | 0 | 2 | 0 | v5060501 |
| N100ERC | Configuração por estado para reconsulta de documento | 4 | 2 | 0 | v5080914 |
| N100EST | Código IBGE do Estado | 5 | 1 | 0 | v5060401 |
| N100FER | Data tratada como feriado | 4 | 1 | 0 | v5081140 |
| N100FIC | Condições dos filtros de impressão | 4 | 1 | 0 | v5060401 |
| N100FIL | Filiais | 86 | 2 | 1 | v5060401 |
| N100FIM | Filtros de impressão | 12 | 3 | 0 | v5060401 |
| N100FTP | FTPs para envio eletrônico | 13 | 2 | 0 | v5081115 |
| N100FTR | Filtro de impressão da informação adicional Senior | 3 | 4 | 0 | v5080801 |
| N100HIS | Histórico de alterações dos Web Services (N100WEB) | 5 | 1 | 0 | v5080813 |
| N100ICM | Imposto — ICMS | 9 | 0 | 0 | v5060501 |
| N100IMP | Impressoras por filial | 3 | 1 | 0 | v5080701 |
| N100INS | Inscrições municipais vinculadas a uma filial | 5 | 2 | 0 | v5081057 |
| N100MUN | Tabela de municípios | 6 | 1 | 1 | v5060401 |
| N100NRE | Vínculos dos templates de impressão com filial/empresa | 1 | 3 | 0 | v5081126 |
| N100NSU | Controla sequência do NSU para consultas de manifestação | 6 | 1 | 0 | v5070301 |
| N100PAI | País BACEN | 4 | 0 | 0 | v5060401 |
| N100PES | Pessoas associadas aos documentos eletrônicos | 9 | 1 | 0 | v5060501 |
| N100PIM | Pendências de impressão | 6 | 1 | 0 | v5081126 |
| N100PRT | Mapeamento de identificadores/URLs dos Print Services | 7 | 1 | 2 | v5080201 |
| N100REC | Contas de recebimento de documentos eletrônicos | 15 | 1 | 0 | v5060503 |
| N100REL | Templates de relatório | 9 | 0 | 0 | v5081126 |
| N100RTO | Origens que terão o retorno desativado | 2 | 1 | 0 | v5081206 |
| N100TRA | Tentativa de reprocessamento automática | 6 | 0 | 0 | v5081556 |
| N100WEB | Web Services | 6 | 2 | 1 | v5060401 |
| N100XML | Armazenamento de arquivos XML processados | 3 | 0 | 0 | v5070201 |

## N130 — NF-e (Nota Fiscal Eletrônica de Produto)

Nota fiscal de produto e seus eventos: cancelamento, carta de correção (CC-e), inutilização, manifestação do destinatário, EPEC, comprovante de entrega, ator interessado, registro de saída, prorrogação de ICMS, eventos genéricos e validação tributária.

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N130AIN | Evento de Ator Interessado na NF-e | 5 | 1 | 0 | v5081518 |
| N130APP | Autorização dos eventos de pedido de prorrogação | 4 | 1 | 0 | v5080901 |
| N130CAC | Cancelamento de comprovante de entrega | 3 | 1 | 0 | v5081339 |
| N130CAN | Evento de cancelamento de NF-e | 5 | 1 | 0 | v5070201 |
| N130CCE | Carta de correção eletrônica (CC-e) | 21 | 4 | 1 | v5060401 |
| N130CDU | Duplicatas (documento único) | 3 | 0 | 0 | v5060401 |
| N130CEN | Comprovante de entrega | 9 | 1 | 0 | v5081339 |
| N130CMA | Consultas de manifestação de destinatário | 17 | 1 | 1 | v5070301 |
| N130CRA | Controle do reprocessamento automático | 2 | 2 | 0 | v5081556 |
| N130CRS | Cancelamento de Registro de Saída | 9 | 3 | 0 | v5081428 |
| N130CTG | NF-e de produto emitidas em contingência | 1 | 2 | 0 | v5080714 |
| N130EGC | Catálogo de eventos genéricos de NF-e | 7 | 0 | 0 | v5081601 |
| N130EME | Associação N-N entre eventos e e-mails | 3 | 2 | 0 | v5070201 |
| N130EML | Associação entre e-mail e NF-e | 7 | 3 | 0 | v5060401 |
| N130ENF | Informações comuns de eventos de NF-e | 18 | 4 | 2 | v5070201 |
| N130EPE | EPEC para NF-e | 2 | 1 | 0 | v5080602 |
| N130EVG | Eventos genéricos de NF-e | 7 | 1 | 0 | v5081601 |
| N130EVT | Evento de sistema de NF-e de produto | 9 | 9 | 1 | v5080401 |
| N130HSI | Histórico de situação | 3 | 1 | 1 | v5060401 |
| N130IAC | Informações Adicionais do Contribuinte | 3 | 1 | 0 | v5080510 |
| N130INU | Inutilização de NF-e | 25 | 3 | 0 | v5060401 |
| N130ISE | Informações adicionais leiaute Senior | 9 | 1 | 0 | v5080846 |
| N130LEV | Lote de evento de NF-e | 4 | 1 | 0 | v5070201 |
| N130LOT | Lote de nota fiscal de produto | 4 | 1 | 0 | v5080401 |
| N130LRG | Lote para eventos de registro de saída | 6 | 1 | 0 | v5081428 |
| N130LTC | N-N entre evento de NF-e e lote | 0 | 2 | 0 | v5070201 |
| N130MAF | Evento de manifestação do destinatário | 3 | 2 | 0 | v5070301 |
| N130MCA | Cancelamentos de manifestação de destinatário | 3 | 1 | 0 | v5070301 |
| N130NAR | Vínculo de notas fiscais com arquivos | 1 | 2 | 0 | v5081126 |
| N130NEM | Vínculo entre anexos de e-mail e NF-e | 1 | 3 | 0 | v5081126 |
| N130NFE | Nota fiscal de produto | 54 | 3 | 1 | v5080401 |
| N130NNL | N-N entre lote e nota fiscal de produto | 0 | 2 | 0 | v5080401 |
| N130PII | Item do pedido de prorrogação de isenção do ICMS | 6 | 1 | 0 | v5080901 |
| N130PPI | Pedido de prorrogação de isenção de ICMS | 5 | 1 | 0 | v5080901 |
| N130REV | Resumos de eventos do WS de distribuição de documentos | 7 | 1 | 0 | v5080612 |
| N130RGL | Controle dos lotes rejeitados | 0 | 2 | 0 | v5081428 |
| N130RSN | Evento de registro de saída para NF-e | 13 | 3 | 0 | v5081428 |
| N130TCA | Controle de tentativas de envio de cancelamento (erro 999) | 4 | 0 | 0 | v5081501 |
| N130VIN | Documentos vinculados a uma NF-e | 8 | 0 | 0 | v5081057 |
| N130VTB | Validação tributária NF-e | 8 | 1 | 0 | v5081690 |
| N130XML | Associação entre NF-e e arquivos XML processados | 6 | 8 | 0 | v5070201 |

## N140 — NFS-e (Nota Fiscal de Serviço Eletrônica)

Nota fiscal de serviço, eventos, críticas, informações adicionais (Senior, construção civil), recebimento, e a estrutura de manutenção de parâmetros de municípios/fornecedores e URLs.

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N140CAN | Cancelamento de NFS-e | 14 | 3 | 1 | v5060401 |
| N140CLT | Controle de lote | 4 | 1 | 0 | v5060401 |
| N140CRE | Controle de recebimento | 4 | 1 | 0 | v5081214 |
| N140CRI | Críticas de eventos de NFS-e | 4 | 2 | 0 | v5081140 |
| N140CTN | Código de Tributação Nacional | 3 | 0 | 0 | v5081642 |
| N140DPR | Dados da prestação | 13 | 1 | 0 | v5060401 |
| N140EML | Associação entre e-mail e NFS-e | 5 | 2 | 0 | v5060401 |
| N140ERE | Erros de recebimento | 6 | 1 | 0 | v5081223 |
| N140EVT | Eventos de NFS-e | 8 | 2 | 0 | v5081140 |
| N140FAT | Informações adicionais de faturas | 6 | 1 | 0 | v5080303 |
| N140FOR | Fornecedor de recebimento | 7 | 2 | 0 | v5081223 |
| N140IAS | Informações adicionais para construção civil e atividades portuárias | 19 | 2 | 0 | v5070403 |
| N140IIS | Itens de informações adicionais Senior | 41 | 1 | 0 | v5070403 |
| N140ILS | Itens de serviço e suas descrições | 3 | 0 | 0 | v5081428 |
| N140ISE | Informações adicionais Senior | 65 | 2 | 0 | v5070403 |
| N140LNS | Lote de NFS-e | 8 | 1 | 1 | v5060401 |
| N140LTN | N-N de lote e NFS-e | 0 | 2 | 0 | v5060401 |
| N140MCF | Parâmetros customizados de fornecedores | 3 | 1 | 0 | v5081511 |
| N140MCM | Municípios customizados | 2 | 1 | 0 | v5081511 |
| N140MCU | Endereços customizados de URLs | 4 | 1 | 0 | v5081511 |
| N140MMN | Parâmetros de municípios | 3 | 2 | 0 | v5081511 |
| N140MNF | Estrutura de parâmetros de fornecedores | 5 | 0 | 0 | v5081511 |
| N140MNM | Estrutura de parâmetros de municípios | 4 | 0 | 0 | v5081511 |
| N140MNP | Fornecedores para manutenção de prefeituras | 3 | 0 | 0 | v5081511 |
| N140MNU | Estrutura de URLs | 3 | 0 | 0 | v5081511 |
| N140MPF | Parâmetros padrões de fornecedores | 4 | 1 | 0 | v5081511 |
| N140MPM | Municípios padrões | 2 | 1 | 0 | v5081511 |
| N140MPU | Endereços padrões de URLs | 5 | 1 | 0 | v5081511 |
| N140NAR | Vínculo de NFS-e com arquivos | 1 | 2 | 0 | v5081126 |
| N140NEM | Vínculo entre anexos de e-mail e NFS-e | 1 | 2 | 0 | v5081126 |
| N140NFR | Referências aos arquivos originais de recebimento de NFS-e | 1 | 2 | 0 | v5081351 |
| N140NFS | Nota fiscal de serviço | 94 | 4 | 8 | v5060401 |
| N140NNS | Aba de NSU de NFS-e (Ambiente Nacional) | 6 | 1 | 2 | v5081634 |
| N140PAM | Parâmetros de município | 3 | 1 | 0 | v5060401 |
| N140PAR | Parâmetros | 2 | 2 | 0 | v5060401 |
| N140PMS | Parâmetros de município de sistema | 3 | 1 | 0 | v5080201 |
| N140XML | Associação entre NFS-e e arquivos XML processados | 4 | 3 | 0 | v5070201 |

## N150 — CT-e (Conhecimento de Transporte Eletrônico)

Conhecimento de frete e seus eventos: cancelamento, carta de correção, EPEC, inutilização, comprovante de entrega, insucesso de entrega, prestação de serviço em desacordo e complementação.

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N150AUX | Autorizados para download do XML do DF-e | 3 | 1 | 0 | v5080301 |
| N150CAC | Cancelamento de comprovante de entrega | 3 | 1 | 0 | v5081128 |
| N150CAN | Cancelamentos de CT-e | 12 | 2 | 0 | v5060501 |
| N150CCE | Evento de carta de correção | 7 | 1 | 0 | v5080401 |
| N150CEN | Comprovante de entrega de CT-e | 6 | 1 | 0 | v5081128 |
| N150CIE | Cancelamento de evento de Insucesso de Entrega CT-e 4.00 | 3 | 1 | 0 | v5081439 |
| N150CMP | Dados complementares do CT-e (operacionais/comerciais) | 18 | 1 | 0 | v5060501 |
| N150COM | CT-e complementado | 5 | 2 | 0 | v5060501 |
| N150CPS | Cancelamento de prestação de serviço em desacordo | 4 | 1 | 0 | v5081455 |
| N150CTE | Conhecimento de frete eletrônico | 63 | 12 | 6 | v5060501 |
| N150CTG | CT-e emitidos em contingência | 1 | 2 | 0 | v5080714 |
| N150CVA | Componentes do valor da prestação | 3 | 2 | 0 | v5060501 |
| N150ECT | Evento de CT-e | 14 | 3 | 0 | v5080301 |
| N150EML | E-mail do conhecimento de frete | 4 | 3 | 0 | v5060501 |
| N150EPE | EPEC de CT-e | 2 | 1 | 0 | v5080605 |
| N150EVT | Eventos do conhecimento de frete | 9 | 4 | 0 | v5060501 |
| N150ICC | Grupo de informações de correção | 5 | 1 | 0 | v5080401 |
| N150IEC | Insucesso de Entrega CT-e 4.00 | 5 | 1 | 0 | v5081439 |
| N150INU | Inutilização de CT-e | 17 | 1 | 0 | v5060501 |
| N150ISE | Informações adicionais leiaute Senior | 1 | 1 | 0 | v5080846 |
| N150LTC | N-N lote e conhecimento de frete | 0 | 2 | 0 | v5060501 |
| N150LTE | Lote conhecimento de frete | 5 | 0 | 0 | v5060501 |
| N150NAR | Vínculo de arquivos com CT-e | 1 | 2 | 0 | v5081126 |
| N150NEM | Vínculo entre anexos de e-mail e CT-e | 1 | 3 | 0 | v5081126 |
| N150NFE | Informações de NF-e do CT-e | 4 | 1 | 0 | v5060501 |
| N150OBS | Campo de uso livre do contribuinte | 4 | 1 | 0 | v5060501 |
| N150OUT | Informações de outros documentos do CT-e | 7 | 1 | 0 | v5060501 |
| N150PAS | Passagem | 2 | 1 | 0 | v5060501 |
| N150PSD | Evento de prestação de serviço em desacordo | 4 | 1 | 0 | v5080924 |
| N150XML | Associação entre CT-e e arquivo XML processado | 5 | 5 | 0 | v5070201 |

## N170 — MDF-e (Manifesto Eletrônico de Documentos Fiscais)

Manifesto e seus eventos: cancelamento, encerramento, inclusão de condutor/DF-e, pagamento de operação, confirmação de transporte e alteração de pagamento.

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N170APM | Alteração do Pagamento do Serviço de Transporte MDF-e | 2 | 1 | 0 | v5081428 |
| N170CAN | Cancelamento como evento do MDF-e | 4 | 1 | 0 | v5070401 |
| N170CTM | Confirmação do evento de Transporte — MDF-e | 16 | 2 | 0 | v5081364 |
| N170EMD | Evento do documento MDF-e | 12 | 2 | 0 | v5070401 |
| N170EML | N-N de e-mail com MDF-e | 4 | 3 | 0 | v5080901 |
| N170ENC | Encerramento do MDF-e | 4 | 2 | 0 | v5070401 |
| N170EVT | Eventos do sistema para MDF-e | 7 | 4 | 0 | v5070401 |
| N170IDF | Inclusão de DF-e de MDF-e | 2 | 2 | 0 | v5081122 |
| N170INC | Inclusão de informações do condutor do veículo | 4 | 1 | 0 | v5080401 |
| N170ISE | Informações adicionais de MDF-e | 1 | 1 | 0 | v5080801 |
| N170LTC | N-N entre MDF-e e lote | 0 | 2 | 0 | v5070401 |
| N170LTM | Lote de MDF-e | 4 | 1 | 0 | v5070401 |
| N170MDF | Manifesto Eletrônico de Documentos Fiscais | 39 | 5 | 4 | v5070401 |
| N170MNE | Registros da Consulta de Manifestos Não Encerrados | 5 | 2 | 0 | v5080901 |
| N170NEM | Vínculo entre anexos de e-mail e MDF-e | 1 | 3 | 0 | v5081126 |
| N170POM | Pagamento de operação | 2 | 1 | 0 | v5081201 |
| N170XML | N-N entre MDF-e e armazenamento XML ou evento | 3 | 4 | 0 | v5070401 |

## N180 — eSocial

Eventos iniciais, mensais, trabalhistas e não periódicos, lotes, críticas, controle de dependências, unificação de CPFs e consignações.

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N180CON | Consignações do empregador | 6 | 3 | 0 | v5081553 |
| N180CPF | Controle de CPFs para unificação | 3 | 1 | 0 | v5081046 |
| N180DEC | Detalhes de crítica de eSocial | 5 | 1 | 0 | v5080936 |
| N180DEP | Controle de dependências do eSocial | 3 | 0 | 0 | v5081001 |
| N180EMR | E-mails para rejeições do eSocial | 3 | 2 | 0 | v5081027 |
| N180EVT | Eventos de sistema para eSocial | 7 | 7 | 0 | v5080399 |
| N180EXT | Eventos externos | 6 | 2 | 0 | v5081649 |
| N180INI | Eventos iniciais | 20 | 2 | 1 | v5080399 |
| N180LOT | Lote de eventos do eSocial | 8 | 1 | 0 | v5080901 |
| N180MEN | Eventos mensais | 22 | 2 | 3 | v5080399 |
| N180NLI | Associação entre lote e eventos iniciais | 0 | 2 | 0 | v5080901 |
| N180NLN | Associação entre lote e eventos não periódicos | 0 | 2 | 0 | v5080901 |
| N180NLP | Associação entre lote e eventos periódicos | 0 | 2 | 0 | v5080901 |
| N180RVU | Resultados das validações de unificação | 3 | 2 | 0 | v5081045 |
| N180TRA | Eventos trabalhistas | 19 | 2 | 2 | v5080399 |
| N180VIN | Vínculo entre eventos do eSocial | 2 | 4 | 0 | v5080936 |
| N180XML | N-N entre documentos de eSocial e armazenamento XML | 5 | 4 | 0 | v5080399 |

## N190 — NFC-e (Nota Fiscal de Consumidor Eletrônica)

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N190CAN | Cancelamento de NFC-e | 4 | 1 | 0 | v5080701 |
| N190EML | Associação entre NFC-e e e-mails | 4 | 3 | 0 | v5080701 |
| N190ENF | Informação de eventos de NFC-e | 12 | 1 | 0 | v5080701 |
| N190EPE | EPEC de NFC-e | 2 | 1 | 0 | v5080911 |
| N190EVT | Eventos de sistema de NFC-e | 9 | 4 | 0 | v5080701 |
| N190INU | Inutilização de NFC-e | 12 | 1 | 0 | v5080701 |
| N190LOE | N-N de lote com evento de sistema | 0 | 2 | 0 | v5080701 |
| N190LOT | Lote de NFC-e e eventos | 5 | 1 | 0 | v5080701 |
| N190NEM | Vínculo entre anexos de e-mail e NFC-e | 1 | 3 | 0 | v5081126 |
| N190NFC | Nota fiscal eletrônica de consumidor | 34 | 2 | 1 | v5080701 |
| N190NNL | N-N de lote com cupom eletrônico | 0 | 2 | 0 | v5080701 |
| N190XML | Associação entre XML e NFC-e/eventos | 5 | 4 | 0 | v5080701 |

## N200 — CF-e / SAT (Cupom Fiscal Eletrônico)

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N200CAN | Cancelamento de CF-e | 4 | 1 | 0 | v5080827 |
| N200CFE | Cupom fiscal eletrônico | 17 | 1 | 1 | v5080827 |
| N200EML | E-mail para CF-e | 3 | 3 | 0 | v5080827 |
| N200EVT | Evento de sistema de CF-e | 9 | 2 | 0 | v5080827 |
| N200MSG | Mensagens recebidas através do SAT | 6 | 1 | 0 | v5080827 |
| N200NEM | Vínculo entre anexos de e-mail e CF-e | 1 | 3 | 0 | v5081126 |
| N200SAT | Dados dos SATs | 24 | 3 | 0 | v5080827 |
| N200SIG | Assinaturas AC do SAT | 3 | 1 | 0 | v5081213 |
| N200XML | Armazenamento de XML para CF-e | 4 | 3 | 0 | v5080827 |

## N210 — EFD-Reinf

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N210DEC | Detalhes de crítica de EFD-Reinf | 4 | 1 | 0 | v5080944 |
| N210EVT | Eventos de sistema de Reinf | 6 | 2 | 0 | v5080944 |
| N210LOT | Lote de Reinf | 4 | 2 | 0 | v5080944 |
| N210NLR | N-N Reinf/Lote | 0 | 2 | 0 | v5080944 |
| N210REI | EFD-Reinf | 19 | 2 | 1 | v5080944 |
| N210VIN | Vínculos de Reinf | 2 | 2 | 0 | v5080944 |
| N210XML | Associação entre eventos de Reinf e XML armazenado | 4 | 2 | 0 | v5080944 |

## N220 — GNRE (Guia Nacional de Recolhimento de Tributos Estaduais)

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N220CEG | Configuração por estados para GNRE | 6 | 2 | 0 | v5081001 |
| N220CFG | Configuração de estado GNRE | 7 | 1 | 0 | v5081001 |
| N220CGN | Complementos para geração de GNRE | 9 | 2 | 0 | v5081026 |
| N220CRG | Complemento da receita de GNRE (InfSenior) | 7 | 1 | 0 | v5081026 |
| N220CUE | Customizações de campos adicionais de GNRE | 8 | 2 | 0 | v5081101 |
| N220DRG | Dados de receita de GNRE | 11 | 1 | 0 | v5081140 |
| N220EVT | Eventos de sistema GNRE | 6 | 2 | 0 | v5081001 |
| N220GNN | N-N de lote e GNRE | 2 | 2 | 0 | v5081001 |
| N220GNR | GNRE | 42 | 3 | 1 | v5081001 |
| N220LOT | Lote GNRE | 4 | 1 | 0 | v5081001 |
| N220XML | N-N dos arquivos XML de GNRE | 4 | 2 | 0 | v5081101 |

## N230 — Bloco X

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N230BLO | Bloco X | 13 | 1 | 1 | v5081015 |
| N230EVT | Eventos de sistema de Bloco X | 6 | 2 | 0 | v5081015 |
| N230MAN | Manutenção de Bloco X | 10 | 1 | 0 | v5081140 |
| N230XML | N-N XML de Bloco X | 4 | 3 | 0 | v5081015 |

## N240 — GRF-GTS (Guia de Recolhimento do FGTS)

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N240EVT | Evento de sistema GRF-GTS | 6 | 1 | 0 | v5081101 |
| N240GRF | GRF-GTS | 10 | 1 | 1 | v5081101 |
| N240XML | XML GRF-GTS | 4 | 2 | 0 | v5081101 |

## N250 — Receituário Agronômico

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N250CRA | Cancelamento de receituário agronômico | 3 | 1 | 0 | v5081126 |
| N250DET | Detalhamento de rejeições de receituário agronômico | 2 | 1 | 0 | v5081126 |
| N250EVT | Eventos de sistema de receituário agronômico | 6 | 2 | 0 | v5081126 |
| N250RAG | Receituários agronômicos | 10 | 2 | 1 | v5081126 |
| N250XML | XMLs de receituário agronômico | 4 | 3 | 0 | v5081126 |

## N260 — Recintos Aduaneiros

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N260DET | Detalhamentos de críticas dos recintos aduaneiros | 3 | 1 | 0 | v5081251 |
| N260EVT | Eventos de sistema dos recintos aduaneiros | 6 | 1 | 0 | v5081251 |
| N260REC | Recintos aduaneiros | 12 | 2 | 2 | v5081251 |
| N260XML | XML dos recintos aduaneiros | 4 | 2 | 0 | v5081251 |

## N270 — SISDEV

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N270CAN | Cancelamentos do SISDEV | 6 | 1 | 0 | v5081245 |
| N270EVT | Eventos de sistema do SISDEV | 7 | 3 | 0 | v5081245 |
| N270SID | Eventos do SISDEV | 10 | 1 | 0 | v5081245 |
| N270XML | N-N dos XMLs de SISDEV | 3 | 3 | 0 | v5081245 |

## N280 — IDAF

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N280CAN | Cancelamento IDAF | 7 | 2 | 0 | v5081290 |
| N280DET | Detalhamentos de críticas dos IDAFs | 2 | 1 | 0 | v5081290 |
| N280EVT | Evento IDAF | 7 | 3 | 0 | v5081290 |
| N280IDA | IDAF | 10 | 1 | 0 | v5081290 |
| N280XML | XML IDAF | 3 | 3 | 0 | v5081290 |

## N290 — DT-e (Documento de Transporte Eletrônico)

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N290CAN | Cancelamento DT-e | 4 | 1 | 0 | v5081489 |
| N290DTE | DT-e | 15 | 5 | 0 | v5081489 |
| N290EDT | Informação de evento do DT-e | 10 | 1 | 0 | v5081489 |
| N290EML | E-mails | 4 | 3 | 0 | v5081489 |
| N290EVT | Evento DT-e | 8 | 2 | 0 | v5081489 |
| N290XML | XML do DT-e | 3 | 3 | 0 | v5081489 |

## N310 — NF3-e (Nota Fiscal de Energia Elétrica Eletrônica)

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N310CAN | Cancelamento de NF3-e | 4 | 1 | 0 | v5081401 |
| N310EN3 | Evento de NF3-e | 11 | 1 | 0 | v5081401 |
| N310EVT | Evento de sistema de NF3-e | 7 | 2 | 0 | v5081401 |
| N310NF3 | NF3-e | 29 | 2 | 1 | v5081401 |
| N310XML | XML de NF3-e | 4 | 4 | 0 | v5081401 |

## N320 — NFTS (Nota Fiscal do Tomador de Serviço)

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N320CRI | Críticas de NFTS | 4 | 1 | 0 | v5081455 |
| N320EUR | Endereço URL de fornecedores NFTS | 3 | 1 | 0 | v5081455 |
| N320EVT | Evento de sistema NFTS | 7 | 2 | 0 | v5081455 |
| N320FOR | Fornecedor de NFTS | 3 | 0 | 0 | v5081455 |
| N320LOT | Lote de NFTS | 6 | 1 | 0 | v5081455 |
| N320MUF | Município do fornecedor NFTS | 2 | 2 | 0 | v5081455 |
| N320NTS | Nota do tomador de serviço | 14 | 3 | 1 | v5081455 |
| N320URL | URL de web services da NFTS | 3 | 2 | 0 | v5081455 |
| N320XML | XMLs salvos de NFTS | 2 | 3 | 0 | v5081455 |

## N330 — DC-e (Declaração de Conteúdo Eletrônico)

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N330CAN | Cancelamento da DC-e | 5 | 1 | 0 | v5081518 |
| N330CRI | Crítica do documento DC-e | 4 | 1 | 0 | v5081518 |
| N330DCE | Documento DC-e (declaração de conteúdo eletrônico) | 21 | 4 | 1 | v5081518 |
| N330EDC | Informação de eventos da DC-e | 10 | 2 | 0 | v5081518 |
| N330EVT | Eventos da DC-e | 6 | 3 | 0 | v5081518 |
| N330XML | XMLs da DC-e | 4 | 3 | 0 | v5081518 |

## N340 — NFCom (Nota Fiscal Fatura de Comunicação Eletrônica)

| Tabela | Descrição | Campos | FKs | Idx | Criada em |
|--------|-----------|:------:|:---:|:---:|:---------:|
| N340CAN | Cancelamento NFCom | 5 | 1 | 0 | v5081528 |
| N340CRI | Críticas NFCom | 4 | 1 | 0 | v5081528 |
| N340EME | E-mail de evento NFCom | 3 | 2 | 0 | v5081528 |
| N340EMN | E-mails NFCom | 6 | 3 | 0 | v5081528 |
| N340ENF | Informações comuns aos eventos da NFCom | 12 | 3 | 0 | v5081528 |
| N340EVT | Eventos da NFCom | 7 | 4 | 0 | v5081528 |
| N340NAR | Arquivo NFCom | 1 | 2 | 0 | v5081528 |
| N340NEM | Anexo de e-mail NFCom | 1 | 3 | 0 | v5081528 |
| N340NFC | Nota Fiscal de Comunicação | 28 | 7 | 0 | v5081528 |
| N340XML | Arquivos XML NFCom | 5 | 4 | 0 | v5081528 |

---

## Observações

- **Padrão de nomenclatura**: tabelas com prefixo `N` seguem o padrão `Nxxx` onde o número identifica o módulo/documento eletrônico. As tabelas sem prefixo (`INTERF_*`, `LOTE_*`, etc.) são da camada de interface de integração original.
- **Tabelas de relacionamento N-N** (0 campos próprios, 2 FKs) implementam associações muitos-para-muitos entre entidades, por exemplo `N130NNL` (lote ↔ NF-e) e `N180NLI` (lote ↔ eventos iniciais).
- **Tabelas `*XML`**: cada módulo possui uma tabela de associação entre seus documentos/eventos e o armazenamento de XML processado (`N100XML` centraliza o conteúdo).
- **Tabelas `*EVT`**: registram os eventos de sistema (histórico de estados/ações) de cada tipo de documento.
- Para detalhamento **campo a campo** de qualquer tabela (tipos por SGBD, PKs, FKs e índices), é possível expandir este dicionário via consulta específica ao GSBD.

---

# Detalhamento de Campos — Módulos N130, N140 e N220

> Tipos informados por SGBD (Oracle / SQL Server / PostgreSQL). `[PK]` = chave primária. FKs e índices listados após cada tabela.

## Campos — Módulo N130 (NF-e)

### N130NFE — Nota fiscal de produto
Versão de criação: 5080401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQNFE `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência de nota fiscal de produto |
| SITNFE | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação |
| SITRET | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação retorno |
| SITIMP | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação impressão |
| VERNFE | NOT NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Versão do documento |
| NUMNFE | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Número |
| SERNFE | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Série |
| TOTNFE | NOT NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Total da nota |
| DATEMI | NOT NULL | DATE | DATETIME | TIMESTAMP | Data de emissão |
| DATETS | NULL | DATE | DATETIME | TIMESTAMP | Data entrada ou saída |
| DOCTIP | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Tipo do documento do destinatário |
| DOCDES | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Documento do destinatário |
| NOMDES | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Nome destinatário |
| DATREC | NULL | DATE | DATETIME | TIMESTAMP | Data recebimento |
| PROREC | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Protocolo |
| IDENFE | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave |
| IDEERP | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave do ERP |
| TIPPRO | NOT NULL | VARCHAR2(1) | NVARCHAR(1) | VARCHAR(1) | Tipo Processamento |
| DATCON | NULL | DATE | DATETIME | TIMESTAMP | Data de reconsulta na SEFAZ |
| SITANT | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação anterior do documento (controle de falhas/reprocessamento) |
| CNPEMI | NOT NULL | NUMBER(14,0) | NUMERIC(14) | NUMERIC(14,0) | CNPJ do emitente |
| NOMEMI | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Nome do emitente |
| TIPEMI | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo de emissão do documento |
| TOTICM | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor total do ICMS |
| SUBTRI | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor da substituição tributária |
| IEEMIS | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Inscrição estadual do emissor |
| MOTCTG | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Motivo da contingência |
| DATCTG | NULL | DATE | DATETIME | TIMESTAMP | Data recebimento contingência |
| TIPOPE | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Tipo de Operação (0-Entrada/1-Saída) |
| IEDEST | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Inscrição estadual do destinatário |
| FUSCTG | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Fuso horário da data/hora de contingência |
| FUSEMI | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Fuso horário da data de emissão |
| FUSREC | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Fuso horário da data de recebimento |
| CAMEML | NULL | VARCHAR2(500) | NVARCHAR(500) | VARCHAR(500) | Caminho do e-mail de recebimento |
| DIGVAL | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Digest Value (autenticidade do documento) |
| TIPREL | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo de relacionamento entre a filial e o documento |
| TIPNFE | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo da nota |
| IDEGER | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Identificação do software gerador da nota |
| SITAUD | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação da auditoria fiscal |
| DATPRO | NULL | DATE | DATETIME | TIMESTAMP | Data do processamento da nota |
| DATIMP | NULL | DATE | DATETIME | TIMESTAMP | Data da solicitação da impressão |
| TIPAMB | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo ambiente |
| VERORI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Versão do software de origem |
| TPDEMI | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo documento emissor |
| SITMAN | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Situação da manifestação |
| CODSFZ | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código de mensagem da SEFAZ |
| MSGSFZ | NULL | VARCHAR2(4000 CHAR) | NVARCHAR(4000) | VARCHAR(4000) | Mensagem retornada da SEFAZ |
| SITENE | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação envio de e-mail |
| DATMAN | NULL | DATE | DATETIME | TIMESTAMP | Data da manifestação |
| EMIALF | NULL | VARCHAR2(14) | NVARCHAR(14) | VARCHAR(14) | CNPJ alfanumérico |
| PLAVEC | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Placa do veículo |
| NOMTRA | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Nome da transportadora |
| DOCTRA | NULL | VARCHAR2(14) | NVARCHAR(14) | VARCHAR(14) | CPF/CNPJ da transportadora |

**FKs:** `SEQFIL → N100FIL.SEQFIL` (NOT NULL) · `SEQUFD → N100EST.SEQEST` (NOT NULL) · `SEQUFE → N100EST.SEQEST` (NULL)
**Índices:** `IX_N130NFE_0` (DATPRO, TIPAMB, SEQFIL, TIPPRO)

### N130AIN — Evento de Ator Interessado na NF-e
Versão de criação: 5081518

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQAIN `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial da tabela |
| SITAIN | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação do evento |
| TIPAUT | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Tipo de autor responsável pela geração do evento |
| DOCAUT | NOT NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Documento do responsável autorizado |
| TPAUTO | NULL | VARCHAR2(1) | NVARCHAR(1) | VARCHAR(1) | Tipo de autorização |

**FKs:** `SEQENF → N130ENF.SEQENF` (NOT NULL)

### N130APP — Autorização dos eventos do pedido de prorrogação
Versão de criação: 5080901

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQAPP `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência PK |
| PRTAUT | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Protocolo de autorização do evento |
| DATAUT | NOT NULL | DATE | DATETIME | TIMESTAMP | Data de autorização |
| TIPEVT | NOT NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Tipo do evento |

**FKs:** `→ N130PPI.SEQPPI` (NOT NULL)

### N130CAC — Cancelamento de comprovante de entrega
Versão de criação: 5081339

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCAC `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| SITCAC | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação cancelamento |
| PRTCEN | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Protocolo do comprovante cancelado |

**FKs:** `SEQENF → N130ENF.SEQENF` (NOT NULL)

### N130CAN — Evento de cancelamento de NF-e
Versão de criação: 5070201

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCAN `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência do cancelamento |
| CODSIT | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação do cancelamento |
| PRTNFE | NOT NULL | NUMBER(20) | NUMERIC(20) | NUMERIC(20) | Protocolo de autorização da NF-e |
| JUSCAN | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Justificativa do cancelamento |
| CAMEML | NULL | VARCHAR2(500) | NVARCHAR(500) | VARCHAR(500) | Caminho do e-mail de recebimento |

**FKs:** `→ N130ENF.SEQENF` (NOT NULL)

### N130CCE — Carta de correção eletrônica (CC-e)
Versão de criação: 5060401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCCE `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| CODSIT | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código situação |
| VERCCE | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Versão da CC-e |
| DSCCOR | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Descrição da correção |
| IMPCCE | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Situação da impressão |
| CAMEML | NULL | VARCHAR2(500) | NVARCHAR(500) | VARCHAR(500) | Caminho do e-mail de recebimento |

**FKs:** `→ N130CDU.SEQCDU` (NOT NULL) · `→ N130ENF.SEQENF` (NULL)
**Índices:** `IX_N160CCE_0` (CODSIT)

### N130CDU — Descrição de uso / evento (documento único)
Versão de criação: 5060401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCDU `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| DSCUSO | NOT NULL | VARCHAR2(4000) | NVARCHAR(4000) | VARCHAR(4000) | Descrição de uso |
| DSCEVT | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Descrição do evento |

### N130CEN — Comprovante de entrega
Versão de criação: 5081339

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCEN `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial da tabela |
| DOCREC | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Documento do recebedor |
| NOMREC | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Nome do recebedor |
| DATENT | NOT NULL | DATE | DATETIME | TIMESTAMP | Data entrega |
| FUSENT | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Fuso horário |
| SITCEN | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação comprovante entrega |
| DATHAS | NULL | DATE | DATETIME | TIMESTAMP | Data Hash |
| FUSHAS | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Fuso horário hash |
| HASCEN | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Hash comprovante entrega |

**FKs:** `SEQENF → N130ENF.SEQENF` (NOT NULL)

### N130CMA — Consultas de manifestação de destinatário para NF-e
Versão de criação: 5070301

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCMA `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência consulta |
| CHVNFE | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave do documento |
| CNPEMI | NULL | NUMBER(14,0) | NUMERIC(14) | NUMERIC(14,0) | CNPJ do emitente |
| CPFEMI | NULL | NUMBER(11) | NUMERIC(11) | NUMERIC(11) | CPF do emitente |
| NOMEMI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Razão social do emitente |
| IESEMI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Inscrição estadual do emitente |
| DATEMI | NOT NULL | DATE | DATETIME | TIMESTAMP | Data de emissão |
| TIPOPE | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Tipo da operação (entrada/saída) |
| VALNFE | NOT NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor da NF-e |
| DIGVAL | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Digest Value da NF-e |
| DATREC | NOT NULL | DATE | DATETIME | TIMESTAMP | Data do recibo da NF-e |
| SITNFE | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação da NF-e |
| SITMAN | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação da manifestação |
| NUMNSU | NULL | NUMBER(20) | NUMERIC(20) | NUMERIC(20) | Número do NSU do documento |
| SERNFE | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Série da NF-e |
| NUMNFE | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Número da NF-e |
| CNPALF | NULL | VARCHAR2(14) | NVARCHAR(14) | VARCHAR(14) | CNPJ alfanumérico |

**FKs:** `SEQFIL → N100FIL.SEQFIL` (NOT NULL)
**Índices:** `IX_N130CMA_0` (DATEMI)

### N130CRA — Controle do reprocessamento automático
Versão de criação: 5081556

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCRA `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Chave primária |
| QTDTVA | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Quantidade de tentativa atual |

**FKs:** `SEQTRA → N100TRA.SEQTRA` (NOT NULL) · `SEQNFE → N130NFE.SEQNFE` (NOT NULL)

### N130CRS — Cancelamento de Registro de Saída
Versão de criação: 5081428

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCRS `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência do cancelamento |
| TIPAMB | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo ambiente |
| VERAPL | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Versão aplicativo |
| SITCAC | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Situação cancelamento |
| CHANFE | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave NF-e do Registro Saída |
| NUMPRO | NOT NULL | NUMBER(20) | NUMERIC(20) | NUMERIC(20) | Número protocolo |
| MOTCAN | NOT NULL | VARCHAR2(255) | NVARCHAR(255) | VARCHAR(255) | Motivo cancelamento |
| SITRET | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação do retorno |
| DATCAN | NULL | DATE | DATETIME | TIMESTAMP | Data cancelamento |

**FKs:** `SEQFIL → N100FIL.SEQFIL` (NULL) · `SEQRSN → N130RSN.SEQRSN` (NULL)

### N130CTG — NF-e de produto emitidas em contingência
Versão de criação: 5080714

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCTG `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Identificador sequencial único (PK) |

**FKs:** `NFECTG → N130NFE.SEQNFE` (NOT NULL) · `EMICTG → N100CON.SEQCON` (NOT NULL)

### N130EGC — Catálogo de eventos genéricos de NF-e
Versão de criação: 5081601

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQEGC `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| DESEVE | NOT NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Descrição do evento `<descEvento>` |
| TIPEVE | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Tipo do evento de NF-e |
| TIPOPE | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Tipo de operação associada ao evento |
| TIPPRO | NULL | VARCHAR2(1) | NVARCHAR(1) | VARCHAR(1) | Tipo de processamento (Emissão/Recebimento ou null = ambos) |
| TIPDOE | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo de Documento Eletrônico para retorno ao ERP |
| PRFARQ | NOT NULL | VARCHAR2(20) | NVARCHAR(20) | VARCHAR(20) | Prefixo usado para nome de arquivo do evento |

### N130EME — Associação N-N entre eventos e e-mails
Versão de criação: 5070201

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQEME `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência da associação |
| SITENV | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Situação do envio |
| DATEML | NULL | DATE | DATETIME | TIMESTAMP | Data de envio do e-mail |

**FKs:** `→ N100EML.SEQEML` (NOT NULL) · `→ N130ENF.SEQENF` (NOT NULL)

### N130EML — Associação entre e-mail e NF-e
Versão de criação: 5060401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQNNF `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência da associação |
| SITENV | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Situação do envio do e-mail |
| TIPEML | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Tipo de endereço de e-mail |
| DATEML | NULL | DATE | DATETIME | TIMESTAMP | Data de envio do e-mail |
| CFGEML | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Configurações do e-mail |
| SEQNFE | NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Número sequencial da NF-e |
| CONADI | NULL | VARCHAR2(4000) | NVARCHAR(4000) | VARCHAR(4000) | Conteúdo adicional |

**FKs:** `→ N100EML.SEQEML` (NOT NULL) · `SEQNF3 → N130NFE.SEQNFE` (NULL)

### N130ENF — Informações comuns dos eventos de NF-e
Versão de criação: 5070201

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| IDEVNT | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Identificador do evento |
| TIPAMB | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Tipo de ambiente de emissão |
| DATEVT | NOT NULL | DATE | DATETIME | TIMESTAMP | Data do evento |
| TIPEVT | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Tipo evento |
| NUMEVT | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Número do evento |
| VEREVT | NOT NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Versão do evento |
| CODSTA | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código de situação SEFAZ |
| DESCNP | NULL | NUMBER(14,0) | NUMERIC(14) | NUMERIC(14,0) | CNPJ destinatário |
| DESCPF | NULL | NUMBER(11) | NUMERIC(11) | NUMERIC(11) | CPF do destinatário |
| DATSEF | NULL | DATE | DATETIME | TIMESTAMP | Data retorno SEFAZ |
| PRTSEF | NULL | NUMBER(20) | NUMERIC(20) | NUMERIC(20) | Protocolo SEFAZ |
| DATERP | NULL | DATE | DATETIME | TIMESTAMP | Data de retorno ao ERP |
| SEQENF `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência do evento da NF-e |
| SITRET | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação do retorno |
| EVTFUS | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Fuso horário da data do evento |
| SEFFUS | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Fuso horário da data de autorização da SEFAZ |
| SEQNFE | NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Número sequencial da NF-e |
| DESALF | NULL | VARCHAR2(14) | NVARCHAR(14) | VARCHAR(14) | CNPJ alfanumérico |

**FKs:** `SEQEST → N100EST.SEQEST` (NOT NULL) · `SEQFIL → N100FIL.SEQFIL` (NOT NULL) · `SEQNF3 → N130NFE.SEQNFE` (NULL)
**Índices:** `IX_N130ENF_0` (DATEVT) · `IX_N130ENF_1` (TIPEVT)

### N130EPE — EPEC para NF-e
Versão de criação: 5080602

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQEPE `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência para EPEC |
| SITEPE | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação do EPEC |

**FKs:** `→ N130ENF.SEQENF` (NOT NULL)

### N130EVG — Eventos Genéricos de NF-e
Versão de criação: 5081601

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQEVG `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência do evento genérico |
| SITEVE | NOT NULL | NUMBER(4) | NUMERIC(4) | NUMERIC(4) | Situação do evento |
| DOCEMI | NOT NULL | VARCHAR2(14) | NVARCHAR(14) | VARCHAR(14) | Documento do emissor do evento |
| TIPEVE | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código do evento |
| DTLEVE | NOT NULL | CLOB | NVARCHAR(MAX) | TEXT | XML com detalhes do evento `<detEvento>` |
| PRTEVC | NULL | NUMBER(20) | NUMERIC(20) | NUMERIC(20) | Protocolo do evento a ser cancelado |
| TIPEVC | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código do tipo de evento a ser cancelado |

**FKs:** `SEQENF → N130ENF.SEQENF` (NOT NULL)

### N130EVT — Evento de sistema de NF-e de produto
Versão de criação: 5080401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQEVT `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência do evento |
| TIPEVT | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo do evento |
| DATEVT | NOT NULL | DATE | DATETIME | TIMESTAMP | Data do evento |
| DSCUSR | NOT NULL | VARCHAR2(60) | NVARCHAR(60) | VARCHAR(60) | Usuário que gerou o evento |
| CODCRI | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código da crítica |
| DESCRI | NULL | VARCHAR2(4000) | NVARCHAR(4000) | VARCHAR(4000) | Descrição da crítica |
| SITEML | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação do envio de e-mail |

**FKs:** `→ N130NFE.SEQNFE` (NULL) · `→ N130LOT.SEQLOT` (NULL) · `→ N130ENF.SEQENF` (NULL) · `SEQINU → N130INU.SEQINN` (NULL) · `SEQLEV → N130LEV.SEQLEV` (NULL) · `SEQRGS → N130RSN.SEQRSN` (NULL) · `SEQLRG → N130LRG.SEQLOT` (NULL) · `SEQCRS → N130CRS.SEQCRS` (NULL)
**Índices:** `IX_N130EVT_0` (SITEML, FK_4ad656b9, TIPEVT)

### N130HSI — Histórico de situação
Versão de criação: 5060401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQHSI `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência histórico de situação |
| DATSIT | NOT NULL | DATE | DATETIME | TIMESTAMP | Data da alteração da situação |
| SITNFE | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Situação da NF-e |

**FKs:** `SEQNFE → INTERF_NFE.NUM_SEQ_NFE` (NOT NULL)

### N130IAC — Informações Adicionais do Contribuinte
Versão de criação: 5080510

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQIAC `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência da associação |
| OBSCMP | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Observação campo |
| OBSTXT | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Observação texto |

**FKs:** `→ N130NFE.SEQNFE` (NOT NULL)

### N130INU — Inutilização de NF-e
Versão de criação: 5060401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQINN `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial da solicitação de inutilização |
| MODINU | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Modelo do documento fiscal (55) |
| SERINU | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Série do documento fiscal |
| NUMINI | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Número NF-e inicial |
| NUMFIM | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Número NF-e final |
| DSCMOT | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Motivo da inutilização |
| DATPRO | NOT NULL | DATE | DATETIME | TIMESTAMP | Data/hora do registro da solicitação |
| PROSEF | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Número do protocolo da SEFAZ |
| SITINU | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código do status da resposta da SEFAZ |
| DATSEF | NULL | DATE | DATETIME | TIMESTAMP | Data/hora do processamento na SEFAZ |
| ANOINU | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Ano da solicitação de inutilização |
| IDEINU | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave |
| SITRET | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação do retorno |
| FUSPRO | NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Fuso horário de recebimento |
| IDEGER | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Identificação do gerador |
| VERDOC | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Versão do documento |
| TIPAMB | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo ambiente |

**FKs:** `UFEINU → N100EST.SEQEST` (NULL) · `→ N100FIL.SEQFIL` (NULL)

### N130ISE — Informações adicionais leiaute Senior
Versão de criação: 5080846

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQISE `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência informações adicionais |
| DIFGNR | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código de receita para DIFAL |
| FCPGNR | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código de receita para FCP |
| ICMGNR | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código de receita para ICMS/ST |
| CONDIF | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Convênio GNRE DIFAL |
| CONFCP | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Convênio GNRE FCP |
| CONICM | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Convênio GNRE ICMS-ST |
| FSTGNR | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código de receita para FCP/ST |
| CONFST | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Convênio para notas com FCP/ST |

**FKs:** `→ N130NFE.SEQNFE` (NOT NULL)

### N130LEV — Lote de evento de NF-e
Versão de criação: 5070201

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQLEV `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência do lote de NF-e |
| VERLTE | NOT NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Versão do lote |
| TIPAMB | NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Tipo de ambiente retornado da SEFAZ |
| CODSTA | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação retornada da SEFAZ |

**FKs:** `SEQFIL → N100FIL.SEQFIL` (NULL)

### N130LOT — Lote de nota fiscal de produto
Versão de criação: 5080401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQLOT `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência de lote |
| SITLOT | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação do lote |
| DATREC | NULL | DATE | DATETIME | TIMESTAMP | Data recebimento |
| PROREC | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Protocolo de recebimento |

**FKs:** `SEQFIL → N100FIL.SEQFIL` (NOT NULL)

### N130LRG — Lote para eventos de registro de saída
Versão de criação: 5081428

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQLOT `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência do lote |
| SITLOT | NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação lote |
| DATREC | NULL | DATE | DATETIME | TIMESTAMP | Data recebimento |
| PROREC | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Protocolo recebimento |
| IDLOTE | NOT NULL | NUMBER(15) | NUMERIC(15) | NUMERIC(15) | Identificador lote |
| CODSTA | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código status resposta |

**FKs:** `SEQFIL → N100FIL.SEQFIL` (NULL)

### N130LTC — N-N entre evento de NF-e e lote
Versão de criação: 5070201

Tabela de relacionamento (sem campos próprios).
**FKs:** `→ N130ENF.SEQENF` (NOT NULL) · `→ N130LEV.SEQLEV` (NOT NULL)

### N130MAF — Evento de manifestação do destinatário
Versão de criação: 5070301

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQMAF `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência da manifestação |
| JUSMAN | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Justificativa da manifestação |
| CODSIT | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Situação da manifestação |

**FKs:** `→ N130ENF.SEQENF` (NOT NULL) · `→ N130CMA.SEQCMA` (NULL)

### N130MCA — Cancelamentos de manifestação de destinatário
Versão de criação: 5070301

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQMCA `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência do cancelamento de manifestação |
| DATAUT | NOT NULL | DATE | DATETIME | TIMESTAMP | Data autorização do cancelamento |
| NUMNSU | NOT NULL | NUMBER(20) | NUMERIC(20) | NUMERIC(20) | Número do NSU do cancelamento |

**FKs:** `→ N130CMA.SEQCMA` (NOT NULL)

### N130NAR — Vínculo de notas fiscais com arquivos
Versão de criação: 5081126

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQNAR `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial |

**FKs:** `SEQNFE → N130NFE.SEQNFE` (NOT NULL) · `SEQARQ → N010ARQ.SEQARQ` (NOT NULL)

### N130NEM — Vínculo entre anexos de e-mail e NF-e
Versão de criação: 5081126

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQNEM `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial |

**FKs:** `SEQNFE → N130NFE.SEQNFE` (NULL) · `SEQENF → N130ENF.SEQENF` (NULL) · `SEQEMA → N100EMA.SEQEMA` (NOT NULL)

### N130NNL — N-N entre lote e nota fiscal de produto
Versão de criação: 5080401

Tabela de relacionamento (sem campos próprios).
**FKs:** `→ N130NFE.SEQNFE` (NOT NULL) · `→ N130LOT.SEQLOT` (NOT NULL)

### N130PII — Item do pedido de prorrogação de isenção do ICMS
Versão de criação: 5080901

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQPII `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial PK |
| NUMPII | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Número do item |
| QTDPII | NOT NULL | NUMBER(16,4) | NUMERIC(16,4) | NUMERIC(16,4) | Quantidade de itens |
| SITPII | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação do item |
| JUSSIT | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Justificativa da situação |
| JUSTEX | NULL | VARCHAR2(4000) | NVARCHAR(4000) | VARCHAR(4000) | Justificativa |

**FKs:** `→ N130PPI.SEQPPI` (NOT NULL)

### N130PPI — Pedido de prorrogação de isenção de ICMS
Versão de criação: 5080901

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQPPI `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial PK |
| SITPPI | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação do pedido |
| PRTNFE | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Protocolo da NF-e |
| IDPCAN | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Identificador do cancelamento |
| IMPPPI | NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação da impressão |

**FKs:** `→ N130ENF.SEQENF` (NOT NULL)

### N130REV — Resumos de eventos do WS de distribuição de documentos
Versão de criação: 5080612

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQREV `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial dos resumos de evento |
| CHVNFE | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave da nota fiscal vinculada ao evento |
| NUMEVE | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Número sequencial do evento na SEFAZ |
| TIPEVE | NOT NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Tipo de evento (ex: 110110) |
| DSCEVE | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Descrição do tipo de evento |
| DATAUT | NOT NULL | DATE | DATETIME | TIMESTAMP | Data de autorização |

**FKs:** `→ N130CMA.SEQCMA` (NOT NULL)

### N130RGL — Controle dos lotes rejeitados
Versão de criação: 5081428

Tabela de relacionamento (sem campos próprios).
**FKs:** `SEQRSN → N130RSN.SEQRSN` (NULL) · `SEQLRG → N130LRG.SEQLOT` (NOT NULL)

### N130RSN — Evento de registro de saída para NF-e
Versão de criação: 5081428

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQRSN `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência da tabela |
| SITRET | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação do retorno ERP |
| SITRGS | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Situação registro saída |
| CHANFE | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave de acesso |
| DATSAI | NOT NULL | DATE | DATETIME | TIMESTAMP | Data/hora saída |
| TIPAMB | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo ambiente |
| VERDOC | NOT NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Versão documento |
| NUMPRO | NULL | NUMBER(15) | NUMERIC(15) | NUMERIC(15) | Número do protocolo |
| DATSEF | NULL | DATE | DATETIME | TIMESTAMP | Data retorno SEFAZ |
| SEFFUS | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Fuso horário retorno SEFAZ |
| CODSTA | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código de status resposta |
| IDEREG | NOT NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Identificador do registro de saída |

**FKs:** `SEQLOT → N130LRG.SEQLOT` (NULL) · `SEQFIL → N100FIL.SEQFIL` (NULL) · `SEQNFE → N130NFE.SEQNFE` (NULL)

### N130TCA — Controle de tentativas de envio de cancelamento (erro 999)
Versão de criação: 5081501

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQTCA `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência da tabela |
| SEQCAN | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência de cancelamento |
| NUMTEN | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Número de tentativas de cancelamento |
| DATULT | NOT NULL | DATE | DATETIME | TIMESTAMP | Data da última tentativa de envio |

### N130VIN — Documentos vinculados a uma NF-e
Versão de criação: 5081057

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQVIN `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial da tabela |
| CHVNFE | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave da nota vinculada |
| TIPEVT | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Tipo do evento retornado |
| DATAUT | NOT NULL | DATE | DATETIME | TIMESTAMP | Data de autorização do evento |
| FUSAUT | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Fuso horário da data de autorização |
| PROAUT | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Protocolo de autorização |
| TIPDOC | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo de documento vinculado à nota |

### N130VTB — Validação tributária NF-e
Versão de criação: 5081690

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQVTB `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| SITVTB | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Situação validação tributária |
| URLDET | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | URL Detalhes |
| DATVTB | NULL | DATE | DATETIME | TIMESTAMP | Data da conclusão da validação |
| UPLVTB | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | ID do upload (lote) enviado ao parceiro |
| MOTDSC | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Motivo do descarte do documento pelo parceiro |
| TENVTB | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Quantidade de tentativas de consulta de resultado |
| PRXPOL | NULL | DATE | DATETIME | TIMESTAMP | Momento a partir do qual a próxima consulta deve ocorrer |

**FKs:** `SEQNFE → N130NFE.SEQNFE` (NOT NULL)

### N130XML — Associação entre NF-e e arquivos XML processados
Versão de criação: 5070201

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQNXM `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência da associação |
| HASARQ | NOT NULL | NUMBER(20) | NUMERIC(20) | NUMERIC(20) | Hash do conteúdo do arquivo |
| DATSAL | NOT NULL | DATE | DATETIME | TIMESTAMP | Data de salvamento do arquivo |
| TIPARQ | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Tipo do arquivo |
| SEQNFE | NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Número sequencial da NF-e |
| ENVDAT | NOT NULL | NUMBER(1) | NUMERIC(1) | BOOLEAN | Indica se foi enviado ao data lake |

**FKs:** `→ N100XML.SEQXML` (NOT NULL) · `SEQCAN → INTERF_CANCEL_NFE.NUM_SEQ_CANCEL_NFE` (NULL) · `→ N130ENF.SEQENF` (NULL) · `SEQNF3 → N130NFE.SEQNFE` (NULL) · `SEQINU → N130INU.SEQINN` (NULL) · `SEQRGS → N130RSN.SEQRSN` (NULL) · `SEQCRS → N130CRS.SEQCRS` (NULL)

## Campos — Módulo N140 (NFS-e)

### N140NFS — Nota fiscal de serviço
Versão de criação: 5060401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQNFS `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência da NFS-e |
| VLRCRT | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor COFINS |
| VLRPIT | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor PIS |
| VLRIRF | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor IRRF |
| VLRCSL | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor CSLL |
| ISSRET | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | ISS retido |
| VLRISS | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor ISS |
| VLRISR | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor ISS retido |
| VLROUR | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor outras retenções |
| VLRBIS | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor base ISS |
| PERISS | NULL | NUMBER(15,4) | NUMERIC(15,4) | NUMERIC(15,4) | Alíquota ISS |
| VLRLIQ | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor líquido |
| VLRDEI | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor deduções |
| VLRDES | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor desconto |
| SERIMP | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Série impressa |
| CLAFIS | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Classificação fiscal |
| CODFIM | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Código fim |
| CPLISV | NULL | VARCHAR2(4000 CHAR) | NVARCHAR(4000) | VARCHAR(4000) | Complemento do serviço |
| CODRAI | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código município (raiz) |
| CGCCPF | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | CNPJ/CPF do cliente |
| IMUCLI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Inscrição municipal do cliente |
| NOMCLI | NULL | VARCHAR2(255) | NVARCHAR(255) | VARCHAR(255) | Nome do cliente |
| ENDCLI | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Endereço do cliente |
| NUMEND | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Número do endereço |
| CPLEND | NULL | VARCHAR2(255) | NVARCHAR(255) | VARCHAR(255) | Complemento do endereço |
| BAICLI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Bairro do cliente |
| CLIRAI | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código município do cliente |
| SIGUFS | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Sigla UF |
| CEPCLI | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | CEP do cliente |
| FONCLI | NULL | VARCHAR2(20) | NVARCHAR(20) | VARCHAR(20) | Telefone do cliente |
| CODVER | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Código de verificação |
| NUMNFS | NULL | NUMBER(15) | NUMERIC(15) | NUMERIC(15) | Número da NFS-e |
| DATAUT | NULL | DATE | DATETIME | TIMESTAMP | Data de autorização |
| DATERP | NULL | DATE | DATETIME | TIMESTAMP | Data de retorno ao ERP |
| TIPPES | NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Tipo documento (CPF ou CNPJ) |
| RPSIDE | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Identificador do RPS |
| SITNEL | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Situação NFS-e |
| IMPRPS | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Situação de impressão do RPS |
| NUMNFV | NULL | NUMBER(15) | NUMERIC(15) | NUMERIC(15) | Número do RPS |
| CODSNF | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Código série NFS-e |
| TIPNFS | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Tipo NFS-e |
| DATEMI | NULL | DATE | DATETIME | TIMESTAMP | Data de emissão |
| NOPPRO | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Natureza operação/prestador |
| REGEST | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Regime especial de tributação |
| OPTSIM | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Optante Simples Nacional |
| INCCUL | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Incentivador cultural |
| SITNFV | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Situação do RPS |
| VLRBRU | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor bruto |
| VLRDED | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor deduções |
| VLRINS | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor INSS |
| OBSNFS | NULL | VARCHAR2(4000) | NVARCHAR(4000) | VARCHAR(4000) | Observação da nota fiscal |
| TIPREC | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Tipo recolhimento |
| SITANT | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação anterior à marcação de falha |
| NUMSUB | NULL | NUMBER(15) | NUMERIC(15) | NUMERIC(15) | Número do RPS de substituição |
| SERSUB | NULL | VARCHAR2(5) | NVARCHAR(5) | VARCHAR(5) | Série do RPS de substituição |
| TIPSUB | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo RPS de substituição |
| SITTRI | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Situação tributária |
| SITRET | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação do retorno |
| VALTRI | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor carga tributária |
| PERTRI | NULL | NUMBER(5,2) | NUMERIC(5,2) | NUMERIC(5,2) | Percentual carga tributária |
| FONTRI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Fonte carga tributária |
| CODOBR | NULL | VARCHAR2(30) | NVARCHAR(30) | VARCHAR(30) | Código da obra |
| CODART | NULL | VARCHAR(15) | NVARCHAR(15) | VARCHAR(15) | Código da ART |
| SERNFS | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Série de NFS-e |
| CODCNA | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Código CNAE (novo) |
| NUMSBT | NULL | NUMBER(15) | NUMERIC(15) | NUMERIC(15) | Número da nota substituída |
| SERSBT | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Série da nota substituída |
| TIPSBT | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Tipo da nota substituída |
| INFADI | NULL | VARCHAR2(4000) | NVARCHAR(4000) | VARCHAR(4000) | Informações adicionais da prefeitura |
| DATCAR | NULL | DATE | DATETIME | TIMESTAMP | Data do carimbo da assinatura digital |
| INSMUN | NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Inscrição municipal do RPS |
| TIPAMB | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo do ambiente |
| URLDOC | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | URL do documento |
| CONSUB | NULL | NUMBER(1) | NUMERIC(1) | BOOLEAN | Indica se a consulta de substituição precisa executar |
| TIPPRO | NOT NULL | VARCHAR2(1) | NVARCHAR(1) | VARCHAR(1) | Emissão ou recebimento |
| ORIDOC | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Origem documento |
| CAMEML | NULL | VARCHAR2(500) | NVARCHAR(500) | VARCHAR(500) | Caminho do e-mail de recebimento |
| DATPRO | NULL | DATE | DATETIME | TIMESTAMP | Data de processamento |
| SITENE | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação envio de e-mail |
| RAZINT | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Razão social do intermediário de serviço |
| INCINT | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Inscrição municipal do intermediário |
| CNPINT | NULL | NUMBER(14,0) | NUMERIC(14) | NUMERIC(14,0) | CNPJ/CPF do intermediário de serviço |
| TIPINT | NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Tipo do intermediário de serviço |
| TIPORI | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo origem documento recebido |
| CHVACE | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave de acesso |
| OUTINF | NULL | VARCHAR2(4000 CHAR) | NVARCHAR(4000) | VARCHAR(4000) | Campo outras informações |
| NFSNAC | NULL | NUMBER(1) | NUMERIC(1) | BOOLEAN | Indica se é NFS-e Nacional |
| CODFOR | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do fornecedor (FornecedorNfseEnum) |
| VERNFS | NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Versão da NFS-e (Abrasf, Nacional) |
| CHVNFS | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave da NFS-e (Ambiente Nacional) |
| CHVSBT | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave da NFS-e substituída |

**FKs:** `NUMDPR → N140DPR.NUMSEQ` (NULL) · `SEQMEN → N100MUN.SEQMUN` (NULL) · `→ N100FIL.SEQFIL` (NULL)
**Índices:** `IX_N140NFS_0` (DATEMI) · `IX_N140NFS_1` (NUMCGC, SITNEL, SITRET) · `IX_N140NFS_2` (CODSNF, NUMNFV, NUMCGC) · `IX_N140NFS_3` (TIPPRO, IMPRPS, SITNEL, CONSUB) · `IX_N140NFS_4` (DATEMI, SITNEL, NUMNFV, FK_0e2f45d7, TIPPRO) · `IX_N140NFS_5` (SITNEL, FK_0e2f45d7, CONSUB) · `IX_N140NFS_6` (SITNEL, FK_0e2f45d7) · `IX_N140NFS_7` (DATPRO, TIPAMB, TIPPRO, FK_0e2f45d7)

### N140CAN — Cancelamento de NFS-e
Versão de criação: 5060401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCAN `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência do cancelamento |
| NUMNFS | NOT NULL | NUMBER(15) | NUMERIC(15) | NUMERIC(15) | Número da NFS-e |
| DATCAN | NULL | DATE | DATETIME | TIMESTAMP | Data do cancelamento |
| SEQNFS | NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência da NFS-e |
| SITCAN | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Situação do cancelamento |
| DATERP | NULL | DATE | DATETIME | TIMESTAMP | Data de retorno ao ERP |
| CODCAN | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código do cancelamento |
| IDECAN | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Identificador do cancelamento |
| MOTCAN | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Motivo do cancelamento |
| SITRET | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação do retorno |
| CODSNF | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Código da série |
| NUMNFV | NULL | NUMBER(15) | NUMERIC(15) | NUMERIC(15) | Número do RPS |
| CAMEML | NULL | VARCHAR2(500) | NVARCHAR(500) | VARCHAR(500) | Caminho do e-mail de recebimento |
| INSMUN | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Inscrição municipal |

**FKs:** `CODFIL → N100FIL.SEQFIL` (NOT NULL) · `SEQMUN → N100MUN.SEQMUN` (NULL) · `SEQPRE → N140DPR.NUMSEQ` (NULL)
**Índices:** `IX_N140CAN_0` (CODFIL, DATCAN)

### N140CLT — Crítica de lote NFS-e
Versão de criação: 5060401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCRT `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial da crítica |
| DSCCOR | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Ação para resolução do problema |
| DSCERR | NULL | VARCHAR2(1000 CHAR) | NVARCHAR(1000) | VARCHAR(1000) | Descrição do erro |
| CODERR | NOT NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Código do erro |

**FKs:** `→ N140LNS.NUM_SEQ_LOTE_NFSE` (NOT NULL)

### N140CRE — Controle de recebimento
Versão de criação: 5081214

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCRE `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| CHACON | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave |
| CAMEML | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Caminho do eml |
| SITREC | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação |

**FKs:** `→ N100EMP.SEQEMP` (NOT NULL)

### N140CRI — Críticas de eventos de NFS-e
Versão de criação: 5081140

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCRI `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial |
| CODCRI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Código da crítica |
| MSGCRI | NULL | VARCHAR2(1000 CHAR) | NVARCHAR(1000) | VARCHAR(1000) | Mensagem da crítica |
| DSCSOL | NULL | VARCHAR2(1000 CHAR) | NVARCHAR(1000) | VARCHAR(1000) | Solução |

**FKs:** `SEQEVT → N140EVT.SEQEVT` (NOT NULL)

### N140CTN — Código de Tributação Nacional
Versão de criação: 5081642

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCTN `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| CODTRN | NOT NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Código de tributação nacional |
| DSCCTN | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Descrição do código de tributação nacional |

### N140DPR — Dados do prestador
Versão de criação: 5060401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| NUMSEQ `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Número sequencial dos dados do prestador |
| DSCRAZ | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Razão social |
| DSCFAT | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Nome fantasia |
| ENDCLI | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Endereço (rua) |
| NUMEND | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Número do endereço |
| BAICLI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Bairro do cliente |
| CLIRAI | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código do município |
| SIGUFS | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Sigla do estado |
| CEPCLI | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | CEP do endereço |
| FONCLI | NULL | VARCHAR2(20) | NVARCHAR(20) | VARCHAR(20) | Telefone |
| CPLEND | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Complemento do endereço |
| NUMCGC | NOT NULL | NUMBER(14,0) | NUMERIC(14) | NUMERIC(14,0) | CNPJ do estabelecimento |
| DOCALF | NOT NULL | VARCHAR2(14) | NVARCHAR(14) | VARCHAR(14) | CNPJ alfanumérico |

### N140EML — Associação entre e-mail e NFS-e
Versão de criação: 5060401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQNNS `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial da associação |
| SITENV | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Situação do envio |
| DATEML | NULL | DATE | DATETIME | TIMESTAMP | Data de envio do e-mail |
| CFGEML | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Configurações do e-mail |
| CONADI | NULL | VARCHAR2(4000) | NVARCHAR(4000) | VARCHAR(4000) | Conteúdo adicional |

**FKs:** `→ N140NFS.SEQNFS` (NOT NULL) · `→ N100EML.SEQEML` (NOT NULL)

### N140ERE — Erros de recebimento
Versão de criação: 5081223

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQERE `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| TIPARQ | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo de arquivo |
| CHAENV | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave envio |
| NOMARQ | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Nome arquivo |
| CAMEML | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Caminho |
| BINARQ | NOT NULL | BLOB | VARBINARY(MAX) | BYTEA | Binário |

**FKs:** `→ N100EMP.SEQEMP` (NOT NULL)

### N140EVT — Eventos de NFS-e
Versão de criação: 5081140

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQEVT `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial |
| TIPEVT | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo do evento |
| CODCRI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Código da crítica |
| DESCRI | NULL | VARCHAR2(1000 CHAR) | NVARCHAR(1000) | VARCHAR(1000) | Descrição da crítica |
| USUOPE | NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Usuário gerador do evento |
| SITEML | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação de envio de e-mail |
| DATEVT | NULL | DATE | DATETIME | TIMESTAMP | Data de geração do evento |

**FKs:** `SEQNFS → N140NFS.SEQNFS` (NULL) · `SEQCAN → N140CAN.SEQCAN` (NULL)

### N140FAT — Informações adicionais de faturas
Versão de criação: 5080303

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQFAT `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência fatura |
| DATVEN | NOT NULL | DATE | DATETIME | TIMESTAMP | Data do vencimento |
| FATNUM | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Número da fatura |
| FATVAL | NOT NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor da fatura |
| CODPAR | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Parcela |
| CODPAG | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Condição de pagamento |

**FKs:** `→ N140ISE.SEQISE` (NOT NULL)

### N140FOR — Fornecedor de recebimento
Versão de criação: 5081223

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQFOR `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial |
| NOMFOR | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Nome |
| CNPFOR | NOT NULL | NUMBER(14,0) | NUMERIC(14) | NUMERIC(14,0) | CNPJ |
| INSMUN | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Inscrição municipal |
| TIPDOC | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo de documento |
| TIPCLI | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo cliente recebimento |
| FORALF | NOT NULL | VARCHAR2(14) | NVARCHAR(14) | VARCHAR(14) | CNPJ alfanumérico |

**FKs:** `→ N100MUN.SEQMUN` (NOT NULL) · `→ N100FIL.SEQFIL` (NOT NULL)

### N140IAS — Informações adicionais (construção civil e atividades portuárias)
Versão de criação: 5070403

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQIAS `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência das informações adicionais |
| CONNOM | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Construção Civil - Nome da obra |
| CONDDM | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Construção Civil - Dedução de material |
| CONDSE | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Construção Civil - Dedução subempreitada |
| ENDLOG | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Endereço logradouro |
| ENDNUM | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Endereço número |
| ENDCOM | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Endereço complemento |
| ENDBAI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Endereço bairro |
| ENDMUN | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Código do município |
| ENDCEP | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Endereço CEP |
| PORNOM | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Atividade portuária - Nome/Razão Social |
| PORPRO | NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Atividade portuária - Proprietário? |
| PORCNP | NULL | NUMBER(14,0) | NUMERIC(14) | NUMERIC(14,0) | Atividade portuária - CNPJ |
| PORCPF | NULL | NUMBER(11) | NUMERIC(11) | NUMERIC(11) | Atividade portuária - CPF |
| POREMB | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Atividade portuária - Nome embarcação |
| PORBAN | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Atividade portuária - Bandeira embarcação |
| PORNOP | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Atividade portuária - Nome porto |
| PORENT | NULL | DATE | DATETIME | TIMESTAMP | Atividade portuária - Data entrada |
| PORSAI | NULL | DATE | DATETIME | TIMESTAMP | Atividade portuária - Data saída |

**FKs:** `→ N140ISE.SEQISE` (NOT NULL) · `SEQEST → N100EST.SEQEST` (NULL)

### N140IIS — Itens de informações adicionais Senior
Versão de criação: 5070403

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQIIS `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência item informações adicionais |
| ITENOM | NULL | VARCHAR2(4000 CHAR) | NVARCHAR(4000) | VARCHAR(4000) | Nome/descrição do item |
| VALBRU | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor bruto |
| VALLIQ | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor líquido |
| OBSITE | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Observação do item |
| ITEQTD | NULL | NUMBER(16,5) | NUMERIC(16,5) | NUMERIC(16,5) | Quantidade do item |
| VALUNI | NULL | NUMBER(15,5) | NUMERIC(15,5) | NUMERIC(15,5) | Valor unitário do item |
| VALISS | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor ISS retido |
| VALDED | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor deduções |
| VALBAS | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor base ISS |
| VALDES | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor desconto |
| PRCDED | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Percentual de dedução |
| CODITE | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Código do item |
| CODTRI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Código de tributação no município |
| LISSER | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Item da lista de serviço |
| UNIMED | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Unidade de medida |
| ALIISS | NULL | NUMBER(5,2) | NUMERIC(5,2) | NUMERIC(5,2) | Alíquota do ISS |
| VALIS2 | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor do ISS |
| BASINS | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Base do INSS |
| ALIINS | NULL | NUMBER(5,2) | NUMERIC(5,2) | NUMERIC(5,2) | Alíquota INSS |
| VALINS | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor INSS |
| BASEIR | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Base do IR |
| ALIQIR | NULL | NUMBER(5,2) | NUMERIC(5,2) | NUMERIC(5,2) | Alíquota IR |
| VALOIR | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor do IR |
| BASCOF | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Base do COFINS retido |
| ALICOF | NULL | NUMBER(5,2) | NUMERIC(5,2) | NUMERIC(5,2) | Alíquota COFINS retido |
| VALCOF | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor COFINS retido |
| BASCSL | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Base do CSLL retido |
| ALICSL | NULL | NUMBER(5,2) | NUMERIC(5,2) | NUMERIC(5,2) | Alíquota CSLL retido |
| VALCSL | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor CSLL retido |
| BASPIS | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Base do PIS retido |
| ALIPIS | NULL | NUMBER(5,2) | NUMERIC(5,2) | NUMERIC(5,2) | Alíquota PIS retido |
| VALPIS | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor PIS retido |
| CODSIT | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Código Situação Tributária |
| VALBRP | NULL | NUMBER(15,4) | NUMERIC(15,4) | NUMERIC(15,4) | Valor bruto preciso |
| VBISSP | NULL | NUMBER(15,4) | NUMERIC(15,4) | NUMERIC(15,4) | Valor base ISS preciso |
| IDXITM | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Índice do item na lista no InfSenior |
| TIPDED | NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Tipo da dedução |
| DOCREF | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Documento referência |
| NUMREF | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Número nota referência |
| VALREF | NULL | NUMBER(15,4) | NUMERIC(15,4) | NUMERIC(15,4) | Valor referência |

**FKs:** `→ N140ISE.SEQISE` (NOT NULL)

### N140ILS — Itens de serviço e descrições
Versão de criação: 5081428

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| CODSER `[PK]` | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código do serviço (inteiro) |
| IDESER | NOT NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Código do serviço (texto) |
| DSCSER | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Descrição do serviço |

### N140ISE — Informações adicionais Senior
Versão de criação: 5070403

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQISE `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência informações adicionais |
| NOMPRE | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Nome prestador |
| LOGPRE | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Logradouro prestador |
| NUMPRE | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Número endereço prestador |
| CEPPRE | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | CEP endereço prestador |
| BARPRE | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Bairro endereço prestador |
| EMLPRE | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | E-mail prestador |
| NOMTOM | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Nome/razão social tomador |
| ENDTOM | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Endereço do tomador |
| NUMTOM | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Número endereço tomador |
| BARTOM | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Bairro tomador |
| MUNTOM | NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Código do município do tomador |
| SUFTOM | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Sigla UF do tomador |
| PAITOM | NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Código do país do tomador |
| IESTOM | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Inscrição estadual do tomador |
| MUNINC | NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Município de incidência do serviço |
| OBSISE | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Observações do InfSenior |
| PERPIT | NULL | NUMBER(15,4) | NUMERIC(15,4) | NUMERIC(15,4) | Alíquota PIS |
| PERCRT | NULL | NUMBER(15,4) | NUMERIC(15,4) | NUMERIC(15,4) | Alíquota COFINS |
| PERINS | NULL | NUMBER(15,4) | NUMERIC(15,4) | NUMERIC(15,4) | Alíquota INSS |
| PERIRF | NULL | NUMBER(15,4) | NUMERIC(15,4) | NUMERIC(15,4) | Alíquota IR |
| PERCSL | NULL | NUMBER(15,4) | NUMERIC(15,4) | NUMERIC(15,4) | Alíquota CSLL |
| NMCTOM | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Nome do município do tomador (Correios) |
| SIETOM | NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação especial do tomador |
| NOMPAP | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Nome país prestação do serviço |
| NOMPAT | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Nome país do tomador |
| NUMIFI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Número de identificação fiscal |
| CODNBS | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Código NBS |
| CARTRI | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor carga tributária |
| CODFPS | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Código Fiscal de Prestação de Serviço |
| TOTREC | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor total recebido |
| TRIMUN | NULL | VARCHAR2(1) | NVARCHAR(1) | VARCHAR(1) | Tributa no município do prestador |
| NUMPRO | NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Número de processo |
| CNEMUN | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | CNAE Município |
| TPLPRS | NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Tipo de logradouro da prestação de serviço |
| LOGPRS | NULL | VARCHAR2(1000 CHAR) | NVARCHAR(1000) | VARCHAR(1000) | Logradouro da prestação do serviço |
| NUMPRS | NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Número do endereço da prestação |
| COMPRS | NULL | VARCHAR2(1000 CHAR) | NVARCHAR(1000) | VARCHAR(1000) | Complemento do endereço da prestação |
| BAIPRS | NULL | VARCHAR2(1000 CHAR) | NVARCHAR(1000) | VARCHAR(1000) | Bairro da prestação do serviço |
| NMUPRS | NULL | VARCHAR2(1000 CHAR) | NVARCHAR(1000) | VARCHAR(1000) | Nome do município da prestação de serviço |
| SUFPRS | NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Sigla da UF da prestação do serviço |
| CEPPRS | NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | CEP da prestação do serviço |
| CODPAI | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Código país da prestação de serviço |
| NATOPE | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Natureza de operação |
| TIPENP | NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Tipo do endereço prestador |
| TIPENT | NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Tipo do endereço tomador |
| DATCOM | NULL | DATE | DATETIME | TIMESTAMP | Data de competência |
| RECBRU | NULL | NUMBER(16,5) | NUMERIC(16,5) | NUMERIC(16,5) | Receita bruta PGDAS |
| TIPBAT | NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Tipo de bairro do tomador |
| INFEND | NULL | NUMBER(1) | NUMERIC(1) | BOOLEAN | Informar endereço |
| TIPOPE | NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Tipo operação |
| IDNEXG | NULL | VARCHAR2(100 CHAR) | NVARCHAR(100) | VARCHAR(100) | Identificação da não exigibilidade do ISSQN |
| MUNINT | NULL | NUMBER(20) | NUMERIC(20) | NUMERIC(20) | Município intermediário serviço |
| ISRINT | NULL | NUMBER(1) | NUMERIC(1) | INTEGER | ISS retido do intermediário serviço |
| EMLINT | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | E-mail do intermediário serviço |
| CODTNA | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Código de tributação nacional (NFS-e Nacional) |
| REGASN | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Regime de apuração do Simples Nacional |
| EXGISS | NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Exigibilidade ISS |
| PCSRET | NULL | NUMBER(1) | NUMERIC(1) | INTEGER | PIS/COFINS retido |
| PCSVBC | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Base cálculo do PIS/COFINS |
| CODSIT | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Código situação tributária |
| VLRCOF | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor do COFINS |
| ALQPNR | NULL | NUMBER(15,4) | NUMERIC(15,4) | NUMERIC(15,4) | Alíquota do PIS não retido |
| ALQCNR | NULL | NUMBER(15,4) | NUMERIC(15,4) | NUMERIC(15,4) | Alíquota do COFINS não retido |
| VLRPIS | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor do PIS |

**FKs:** `SEQEST → N100EST.SEQEST` (NULL) · `→ N140NFS.SEQNFS` (NOT NULL)

### N140LNS — Lote de NFS-e
Versão de criação: 5060401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| NUM_SEQ_LOTE_NFSE `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência do lote de NFS-e |
| LOTE_ID | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | ID do lote |
| NUM_LOTE | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Número do lote |
| SITLOT | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Situação do lote |
| IM_EMISSOR | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Inscrição municipal do emissor |
| NUMPRT | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Número do protocolo |
| NUMORI | NULL | NUMBER(20) | NUMERIC(20) | NUMERIC(20) | Número único |

**FKs:** `→ N100FIL.SEQFIL` (NULL)
**Índices:** `IX_N140LNS_0` (SITLOT)

### N140LTN — N-N de lote e NFS-e
Versão de criação: 5060401

Tabela de relacionamento (sem campos próprios).
**FKs:** `→ N140LNS.NUM_SEQ_LOTE_NFSE` (NOT NULL) · `→ N140NFS.SEQNFS` (NOT NULL)

### N140NAR — Vínculo de NFS-e com arquivos
Versão de criação: 5081126

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQNAR `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial |

**FKs:** `SEQNFS → N140NFS.SEQNFS` (NOT NULL) · `SEQARQ → N010ARQ.SEQARQ` (NOT NULL)

### N140NEM — Vínculo entre anexos de e-mail e NFS-e
Versão de criação: 5081126

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQNEM `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial |

**FKs:** `SEQNFS → N140NFS.SEQNFS` (NULL) · `SEQEMA → N100EMA.SEQEMA` (NOT NULL)

### N140NFR — Referências aos arquivos originais de recebimento de NFS-e
Versão de criação: 5081351

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQNFR `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência da tabela |

**FKs:** `SEQNFS → N140NFS.SEQNFS` (NOT NULL) · `SEQARQ → N010ARQ.SEQARQ` (NOT NULL)

### N140NNS — Aba de NSU de NFS-e (Ambiente Nacional)
Versão de criação: 5081634

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQNNS `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| NUMNSU | NOT NULL | NUMBER(20) | NUMERIC(20) | NUMERIC(20) | Número da NSU |
| SITNSU | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Situação da NSU |
| DATCON | NULL | DATE | DATETIME | TIMESTAMP | Data da consulta |
| MOTNSU | NULL | VARCHAR2(1000 CHAR) | NVARCHAR(1000) | VARCHAR(1000) | Motivo da situação da NSU |
| NUMNFS | NULL | NUMBER(20) | NUMERIC(20) | NUMERIC(20) | Número da NFS-e |

**FKs:** `SEQFIL → N100FIL.SEQFIL` (NOT NULL)
**Índices:** `IX_N140NNS_0` (SITNSU, DATCON) · `IX_N140NNS_1` (SEQFIL)

### N140PAM — Parâmetros de município
Versão de criação: 5060401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| NUMSEQ `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Número sequencial do parâmetro |
| DSCPAR | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Descrição do parâmetro |
| IDTPAR | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Identificador do parâmetro |

**FKs:** `NUMCID → N100MUN.SEQMUN` (NOT NULL)

### N140PAR — Parâmetros
Versão de criação: 5060401

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| NUMSEQ `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Código sequencial da configuração |
| DSCVAL | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Valor atribuído ao parâmetro |

**FKs:** `NUMCGC → N100FIL.SEQFIL` (NOT NULL) · `NUMPAM → N140PAM.NUMSEQ` (NOT NULL)

### N140PMS — Parâmetros de município de sistema
Versão de criação: 5080201

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQPMS `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência do parâmetro |
| IDEPAR | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Identificação do parâmetro |
| VALPAR | NOT NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Valor do parâmetro |

**FKs:** `SEQMUN → N100MUN.SEQMUN` (NOT NULL)

### N140XML — Associação entre NFS-e e arquivos XML processados
Versão de criação: 5070201

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQNXM `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência da associação |
| HASARQ | NOT NULL | NUMBER(20) | NUMERIC(20) | NUMERIC(20) | Hash do arquivo associado |
| DATSAL | NOT NULL | DATE | DATETIME | TIMESTAMP | Data de salvamento do arquivo |
| TIPXML | NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Tipo XML (integrado, autorizado) |

**FKs:** `→ N100XML.SEQXML` (NOT NULL) · `→ N140NFS.SEQNFS` (NOT NULL) · `→ N140CAN.SEQCAN` (NULL)

#### Estrutura de manutenção de parâmetros (fornecedores/municípios/URLs de NFS-e)

### N140MNP — Fornecedores para manutenção de prefeituras
Versão de criação: 5081511

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQMNP `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| CODFOR | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do fornecedor (FornecedorNfseEnum) |
| USAURL | NOT NULL | NUMBER(1) | NUMERIC(1) | BOOLEAN | Utiliza o cadastro de URL |

### N140MNF — Estrutura de parâmetros de fornecedores
Versão de criação: 5081511

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQMNF `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| CODFOR | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do fornecedor (FornecedorNfseEnum) |
| CODPAF | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do parâmetro (ParametroFornecedorNfseEnum) |
| PDRVAL | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Valor padrão |
| INTPAF | NOT NULL | NUMBER(1) | NUMERIC(1) | BOOLEAN | Indica se é parâmetro interno |

### N140MNM — Estrutura de parâmetros de municípios
Versão de criação: 5081511

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQMNM `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| CODFOR | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do fornecedor (FornecedorNfseEnum) |
| CODPAM | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do parâmetro (ParametroMunicipioNfseEnum) |
| PDRVAL | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Valor padrão |

### N140MNU — Estrutura de URLs
Versão de criação: 5081511

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQMNU `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| CODFOR | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do fornecedor (FornecedorNfseEnum) |
| TIPEND | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo endereço web service (TipoWebservice) |

### N140MMN — Parâmetros de municípios
Versão de criação: 5081511

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| CODFOR | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do fornecedor (FornecedorNfseEnum) |
| CODPAM | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do parâmetro (ParametroMunicipioNfseEnum) |
| DSCVAL | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Conteúdo do parâmetro |

**FKs:** `SEQFIL → N100FIL.SEQFIL` (NOT NULL) · `SEQMUN → N100MUN.SEQMUN` (NOT NULL)

### N140MPM — Municípios padrões
Versão de criação: 5081511

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQMPM `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| CODFOR | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do fornecedor (FornecedorNfseEnum) |

**FKs:** `SEQMUN → N100MUN.SEQMUN` (NOT NULL)

### N140MCM — Municípios customizados
Versão de criação: 5081511

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| CODFOR | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do fornecedor (FornecedorNfseEnum) |
| DATCUS | NOT NULL | DATE | DATETIME | TIMESTAMP | Data customização |

**FKs:** `SEQMUN → N100MUN.SEQMUN` (NOT NULL)

### N140MCF — Parâmetros customizados de fornecedores
Versão de criação: 5081511

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| CODFOR | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do fornecedor (FornecedorNfseEnum) |
| CODPAF | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do parâmetro (ParametroFornecedorNfseEnum) |
| DSCVAL | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Conteúdo do parâmetro |

**FKs:** `SEQMUN → N100MUN.SEQMUN` (NOT NULL)

### N140MPF — Parâmetros padrões de fornecedores
Versão de criação: 5081511

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQMPF `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| CODFOR | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do fornecedor (FornecedorNfseEnum) |
| CODPAF | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do parâmetro (ParametroFornecedorNfseEnum) |
| DSCVAL | NOT NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Conteúdo do parâmetro |

**FKs:** `SEQMUN → N100MUN.SEQMUN` (NOT NULL)

### N140MCU — Endereços customizados de URLs
Versão de criação: 5081511

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| CODFOR | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do fornecedor (FornecedorNfseEnum) |
| TIPEND | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo endereço web service (TipoWebservice) |
| TIPAMB | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Tipo de ambiente (TipoAmbiente) |
| DSCURL | NOT NULL | VARCHAR2(255) | NVARCHAR(255) | VARCHAR(255) | Endereço URL |

**FKs:** `SEQMUN → N100MUN.SEQMUN` (NOT NULL)

### N140MPU — Endereços padrões de URLs
Versão de criação: 5081511

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQMPU `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequência |
| CODFOR | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Código do fornecedor (FornecedorNfseEnum) |
| TIPEND | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo endereço web service (TipoWebservice) |
| TIPAMB | NOT NULL | NUMBER(1) | NUMERIC(1) | INTEGER | Tipo de ambiente (TipoAmbiente) |
| DSCURL | NOT NULL | VARCHAR2(255) | NVARCHAR(255) | VARCHAR(255) | Endereço URL |

**FKs:** `SEQMUN → N100MUN.SEQMUN` (NOT NULL)

## Campos — Módulo N220 (GNRE)

### N220GNR — GNRE
Versão de criação: 5081001

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQGNR `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial GNRE |
| SITGNR | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação do GNRE |
| SITIMP | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação da impressão |
| DATREF | NULL | DATE | DATETIME | TIMESTAMP | Data de referência |
| DATVEN | NULL | DATE | DATETIME | TIMESTAMP | Data de vencimento |
| DATPRO | NOT NULL | DATE | DATETIME | TIMESTAMP | Data de processamento |
| CEPEMI | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | CEP do emitente |
| IESEMI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Inscrição estadual do emitente |
| ENDEMI | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Endereço do emitente |
| TELEMI | NULL | VARCHAR2(20) | NVARCHAR(20) | VARCHAR(20) | Telefone do emitente |
| NOMEMI | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Nome do emitente |
| TDODES | NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Tipo de documento do destinatário |
| DOCDES | NULL | NUMBER(14,0) | NUMERIC(14) | NUMERIC(14,0) | Documento do destinatário |
| IEDEST | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Inscrição estadual do destinatário |
| NOMDES | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Razão social do destinatário |
| CHVORI | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave do documento que originou a GNRE |
| VERGNR | NOT NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Versão do GNRE |
| CODBAR | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Código de barras |
| NUMDOC | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Número do documento |
| SERDOC | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Série do documento |
| VALMON | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor atualização monetária |
| VALJUR | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor dos juros |
| VALMUL | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor da multa |
| NUMCTL | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Número controle |
| DESPRO | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Produto |
| REPNUM | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Representação numérica |
| TPDORI | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo do documento origem da GNRE |
| TIPAMB | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo de ambiente |
| CHVGNR | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Chave da GNRE |
| TIPGER | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo de geração da GNRE |
| SITRET | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Situação de retorno da GNRE |
| CODLOC | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Localizador |
| TIPORI | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo da criação |
| DATPAG | NULL | DATE | DATETIME | TIMESTAMP | Data de pagamento da GNRE |
| DESALF | NULL | VARCHAR2(14) | NVARCHAR(14) | VARCHAR(14) | CNPJ alfanumérico |

**FKs:** `→ N100FIL.SEQFIL` (NOT NULL) · `MUNDES → N100MUN.SEQMUN` (NULL) · `UFFAVO → N100EST.SEQEST` (NULL)
**Índices:** `IX_N220GNR_0` (FK_8cd08d3f, DATPRO, TIPAMB)

### N220CEG — Configuração por estados para GNRE
Versão de criação: 5081001

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCEG `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial do estado GNRE |
| SITEMI | NOT NULL | NUMBER(1) | NUMERIC(1) | BOOLEAN | Ativação de emissão automática |
| SITIMP | NOT NULL | NUMBER(1) | NUMERIC(1) | BOOLEAN | Ativação da impressão automática |
| QTDVEN | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Quantidade de dias de vencimento |
| TIPDOC | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo de documento vinculado à configuração |
| QTDPAG | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Quantidade de dias para pagamento da GNRE |

**FKs:** `SEQEST → N100EST.SEQEST` (NOT NULL) · `→ N100EMP.SEQEMP` (NOT NULL)

### N220CFG — Configuração de estado GNRE
Versão de criação: 5081001

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCFG `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial da configuração |
| CODCFG | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código do campo a ser enviado |
| CODREC | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código de receita vinculado à configuração |
| TIPDOC | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo do documento vinculado ao campo adicional |
| CONCAM | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Conteúdo do campo adicional |
| TIPAMB | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo do ambiente |
| TIPCAM | NOT NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Tipo do campo adicional (número, texto ou data) |

**FKs:** `UFCONF → N100EST.SEQEST` (NOT NULL)

### N220CUE — Customizações de campos adicionais de GNRE
Versão de criação: 5081101

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCUE `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial |
| CODCFG | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código do campo adicional |
| CODREC | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código de receita do campo |
| TIPDOC | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo de documento vinculado ao campo |
| CONCAM | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Conteúdo do campo adicional |
| NAOENV | NOT NULL | NUMBER(1) | NUMERIC(1) | BOOLEAN | Indica que o campo adicional não deve ser enviado |
| TIPAMB | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo de ambiente do campo |
| TIPCAM | NOT NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Tipo do campo (textual, numérico ou data) |

**FKs:** `SEQEMP → N100EMP.SEQEMP` (NOT NULL) · `UFCONF → N100EST.SEQEST` (NOT NULL)

### N220CGN — Complementos para geração de GNRE
Versão de criação: 5081026

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCGN `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial da tabela |
| CODGNR | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código para geração de GNRE |
| CONGNR | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Convênio para geração de GNRE |
| TIPGNR | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo de GNRE gerada com essas informações |
| DOCORI | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Documento origem |
| CODLOC | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Localizador |
| VALDOC | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Valor tipo documento origem |
| VLICST | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor do ICMS ST (composição unificada ICMS ST + FCP ST) |
| VLFCST | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor do FCP ST (composição unificada ICMS ST + FCP ST) |

**FKs:** `SEQISE → N130ISE.SEQISE` (NULL) · `SEQICT → N150ISE.SEQISE` (NULL)

### N220CRG — Complemento da receita de GNRE (InfSenior)
Versão de criação: 5081026

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQCRG `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial |
| DETREC | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Detalhamento da receita |
| CODPRO | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código do produto |
| VALDET | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor do detalhamento |
| CODLOC | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Localizador |
| VLICST | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor do ICMS ST (composição unificada) |
| VLFCST | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor do FCP ST (composição unificada) |

**FKs:** `SEQCGN → N220CGN.SEQCGN` (NOT NULL)

### N220DRG — Dados de receita de GNRE
Versão de criação: 5081140

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQDRG `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial da tabela |
| CODREC | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código da receita |
| VALTOT | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor total |
| CONGNR | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Convênio da GNRE |
| DETREC | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Detalhamento da receita |
| CODPRO | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código do produto |
| TIPIMP | NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo de imposto do documento |
| DOCORI | NULL | VARCHAR2(10) | NVARCHAR(10) | VARCHAR(10) | Documento origem |
| VALDOC | NULL | VARCHAR2(1000) | NVARCHAR(1000) | VARCHAR(1000) | Valor tipo documento origem |
| VLICST | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor do ICMS ST (composição unificada) |
| VLFCST | NULL | NUMBER(15,2) | NUMERIC(15,2) | NUMERIC(15,2) | Valor do FCP ST (composição unificada) |

**FKs:** `SEQGNR → N220GNR.SEQGNR` (NOT NULL)

### N220LOT — Lote GNRE
Versão de criação: 5081001

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQLOT `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial do lote de GNRE |
| SITLOT | NOT NULL | NUMBER(2) | NUMERIC(2) | NUMERIC(2) | Situação do lote |
| DATLOT | NULL | DATE | DATETIME | TIMESTAMP | Data do lote |
| PROLOT | NULL | VARCHAR2(100) | NVARCHAR(100) | VARCHAR(100) | Protocolo |

**FKs:** `→ N100FIL.SEQFIL` (NOT NULL)

### N220GNN — N-N de lote e GNRE
Versão de criação: 5081001

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQGNN `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial |
| INDGNR | NOT NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Índice da GNRE dentro do lote |

**FKs:** `→ N220LOT.SEQLOT` (NOT NULL) · `→ N220GNR.SEQGNR` (NOT NULL)

### N220EVT — Eventos de sistema GNRE
Versão de criação: 5081001

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQEVT `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial do evento |
| DSCUSU | NOT NULL | VARCHAR2(60) | NVARCHAR(60) | VARCHAR(60) | Usuário |
| DATEVT | NOT NULL | DATE | DATETIME | TIMESTAMP | Data do evento |
| TIPEVT | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo do evento |
| CODCRI | NULL | NUMBER(10) | NUMERIC(10) | NUMERIC(10) | Código da crítica |
| DESCRI | NULL | VARCHAR2(4000) | NVARCHAR(4000) | VARCHAR(4000) | Descrição |

**FKs:** `→ N220GNR.SEQGNR` (NULL) · `→ N220LOT.SEQLOT` (NULL)

### N220XML — N-N dos arquivos XML de GNRE
Versão de criação: 5081101

| Campo | Nulo | Oracle | SQL Server | PostgreSQL | Descrição |
|-------|:----:|--------|-----------|-----------|-----------|
| SEQGXM `[PK]` | NOT NULL | NUMBER(15,0) | NUMERIC(15) | BIGINT | Sequencial |
| HASARQ | NOT NULL | NUMBER(20) | NUMERIC(20) | NUMERIC(20) | Hash do arquivo XML |
| DATSAL | NOT NULL | DATE | DATETIME | TIMESTAMP | Data de salvamento do arquivo |
| TIPARQ | NOT NULL | NUMBER(3) | NUMERIC(3) | NUMERIC(3) | Tipo do arquivo |

**FKs:** `SEQXML → N100XML.SEQXML` (NOT NULL) · `SEQGNR → N220GNR.SEQGNR` (NOT NULL)
