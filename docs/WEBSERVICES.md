# Índice de Web Services Senior (ERP G5)

> **449 web services** extraídos da documentação oficial Senior.
> O host dos URLs WSDL é do ambiente do cliente — substitua pelo endereço do seu servidor Senior.

## Sumário de módulos

- [ast](#módulo-ast) (1)
- [cad](#módulo-cad) (23)
- [fsw](#módulo-fsw) (2)
- [ger](#módulo-ger) (37)
- [int](#módulo-int) (155)
- [lgpd](#módulo-lgpd) (1)
- [mcm](#módulo-mcm) (52)
- [mct](#módulo-mct) (92)
- [mcu](#módulo-mcu) (3)
- [mfi](#módulo-mfi) (65)
- [mmt](#módulo-mmt) (3)
- [mpr](#módulo-mpr) (8)
- [prj](#módulo-prj) (3)
- [sgq](#módulo-sgq) (1)
- [utils](#módulo-utils) (1)
- [ven](#módulo-ven) (2)

## Módulo ast

### `com.senior.g5.co.ast.ocorrencia`

_(sem descrição)_

**Portas:** `Exportar_3`, `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ast_ocorrencia?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ast_ocorrencia?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ast_ocorrencia?wsdl`


## Módulo cad

### `com.senior.g5.co.cad.agrupamentos`

O serviço de Agrupamento é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_agrupamentos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_agrupamentos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_agrupamentos?wsdl`

### `com.senior.g5.co.cad.cidades`

Este web service permite exportar o cadastro de cidades da tabela **Cidades para RAIS - SIG** (E008RAI).

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_cidades?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_cidades?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_cidades?wsdl`

### `com.senior.g5.co.cad.clientes`

O serviço de Cliente é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarCadastro`, `ConsultarFiscal`, `ConsultarGeral_3`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_clientes?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_clientes?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_clientes?wsdl`

### `com.senior.g5.co.cad.condicaopagamento`

O serviço de Condição de pagamento é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_condicaopagamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_condicaopagamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_condicaopagamento?wsdl`

### `com.senior.g5.co.cad.contribuinte`

Serviço para consultar cadastro do contribuinte. Quando for enviado o valor "S - Sim" no parâmetro indConsultaSefaz e o valor do parâmetro tipoDocumento for "1", "2" ou "3", caso os dados sejam encontrados na SEFAZ, os seguintes campos do cadastro de cliente serão atualizados conforme o que foi retornado pela SEFAZ:

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_contribuinte?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_contribuinte?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_contribuinte?wsdl`

### `com.senior.g5.co.cad.deposito`

O serviço de Depósito é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_deposito?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_deposito?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_deposito?wsdl`

### `com.senior.g5.co.cad.derivacao`

Este web service tem por finalidade realizar a alteração do preço de custo de uma ou mais derivações de produto

**Portas:** `AlterarPrecoCusto`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens.Synccom.senior.g5.co.cad.produto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens.Synccom.senior.g5.co.cad.produto?wsd`
- Agendado: `/g5-senior-services/sapiens.Synccom.senior.g5.co.cad.produto?wsd`

### `com.senior.g5.co.cad.duplicarempresa`

Este web service permite duplicar empresas. Tem como parâmetros empresa origem e destino e a opção de duplicar apenas os dados da empresa ou as informações de filiais relacionadas. A duplicação é idêntica ao processo da tela F070DEM. Caso ocorra uma falha no processamento da requisição, ela será abortada, sendo necessário enviá-la novamente.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_duplicarempresa?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_duplicarempresa?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_duplicarempresa?wsdl`

### `com.senior.g5.co.cad.exportarrateio`

Este web service faz o retorno dos rateios do tipo "C"

**Portas:** `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_exportarrateio?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_exportarrateio?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_exportarrateio?wsdl`

### `com.senior.g5.co.cad.familiaparametros`

Na porta Consultar geral é possível obter uma coleção de dados através dos filtros disponíveis.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom.senior.g5.co.cad.familiaparametros?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom.senior.g5.co.cad.familiaparametros?wsdl`

### `com.senior.g5.co.cad.familias`

O serviço de Família é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_familias?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_familias?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_familias?wsdl`

### `com.senior.g5.co.cad.filial`

O serviço de Filial é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarCadastro`, `ConsultarFiscal`, `ConsultarGeral_2`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_filial?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_filial?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_filial?wsdl`

### `com.senior.g5.co.cad.formapagamento`

O serviço de Forma de pagamento é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_formapagamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_formapagamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_formapagamento?wsdl`

### `com.senior.g5.co.cad.fornecedor`

O serviço de Fornecedor é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarCadastro_3`, `ConsultarFiscal_4`, `ConsultarGeral_8`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_fornecedor?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_fornecedor?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_fornecedor?wsdl`

### `com.senior.g5.co.cad.parametrosintegracao`

_(sem descrição)_

**Portas:** `ConsultarGeral_2`, `Exportar`, `Gravar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_parametrosintegracao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_parametrosintegracao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_parametrosintegracao?wsdl`

### `com.senior.g5.co.cad.produtos`

O serviço de Produto é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta, que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarCadastro`, `ConsultarFiscal`, `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_produtos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_produtos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_produtos?wsdl`

### `com.senior.g5.co.cad.representante`

O serviço de Representante é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contem portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarCadastro`, `ConsultarFiscal`, `ConsultarGeral`, `Exportar`, `Gravar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_representante?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_representante?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_representante?wsdl`

### `com.senior.g5.co.cad.rotinasapiens`

Permite executar Rotinas Sapiens sem necessidade de agendamento por meio da tela Cadastro de Processo Automático (F000AGE). Atende a chamada das seguintes rotinas:

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_rotinasapiens?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_rotinasapiens?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_rotinasapiens?wsdl`

### `com.senior.g5.co.cad.servicos`

_(sem descrição)_

**Portas:** `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_servicos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_servicos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_servicos?wsdl`

### `com.senior.g5.co.cad.sittributarias.dispfiscal`

O serviço tem por finalidade tratar a exportação das Situações Tributárias X Dispositivo Fiscal inerentes a cada cliente desde que estejam devidamente cadastradas no sistema. Estas informações são utilizadas para o preenchimento do campo cBenef - Código de Benefício Fiscal, nos documentos fiscais eletrônicos para atender a Nota Técnica 2019.001. Para maiores informações consultar a documentação da tela F027BNF.

**Portas:** `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_sittributarias_dispfiscal?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_sittributarias_dispfiscal?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_sittributarias_dispfiscal?wsdl`

### `com.senior.g5.co.cad.tabelapreco`

O serviço de Tabela de preço é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contem portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `ConsultarTabela`, `ConsultarVigencia`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_tabelapreco?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_tabelapreco?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_tabelapreco?wsdl`

### `com.senior.g5.co.cad.transportadora`

O serviço de Transportadora é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também conéem portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarCadastro`, `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_transportadora?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_transportadora?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_transportadora?wsdl`

### `com.senior.g5.co.cad.unidadedemedida`

O serviço de Unidade de medida é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_cad_unidadedemedida?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_cad_unidadedemedida?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_cad_unidadedemedida?wsdl`


## Módulo fsw

### `com.senior.fsw.cad.cep`

Web service customizado para utilização do processo de importação de CEPs.

**WSDL:**
- Síncrono: `/sapiens_Synccom_senior_fsw_cad_cep?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_fsw_cad_cep?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_fsw_cad_cep?wsdl`

### `com.senior.fsw.cad.rais`

Web service customizado para utilização do processo de importação de CEPs.

**WSDL:**
- Síncrono: `/sapiens_Synccom_senior_fsw_cad_rais?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_fsw_cad_rais?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_fsw_cad_rais?wsdl`


## Módulo ger

### `com.senior.g5.co.ger.apr.niveisaprovacao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_apr_niveisaprovacao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_apr_niveisaprovacao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_apr_niveisaprovacao?wsdl`

### `com.senior.g5.co.ger.cad.centrocusto`

O serviço de Centros de Custos é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_centrocusto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_centrocusto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_centrocusto?wsdl`

### `com.senior.g5.co.ger.cad.centrorecurso`

Este web service permite a consulta de centros de recurso.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_centrorecurso?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_centrorecurso?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_centrorecurso?wsdl`

### `com.senior.g5.co.ger.cad.clientes`

Importante

**Portas:** `ExcluirClientes`, `GravarClientes`, `GravarContatos`, `ObterCliente`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_clientes?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_clientes?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_cad_clientes?wsdl`

### `com.senior.g5.co.ger.cad.controladoria.tributos.dispositivosfiscais`

_(sem descrição)_

**Portas:** `Excluir`, `Exportar`, `InserirAlterar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_controladoria_tributos_dispositivosfiscais?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_controladoria_tributos_dispositivosfiscais?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_controladoria_tributos_dispositivosfiscais?wsdl`

### `com.senior.g5.co.ger.cad.controladoria.tributos.tarifabancaria`

Permite inserir, alterar e excluir tarifas bancárias. Está relacionado à tela Tarifas bancárias (F050TAR).

**Portas:** `Excluir`, `InserirAlterar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_controladoria_tributos_tarifabancaria?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_controladoria_tributos_tarifabancaria?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_controladoria_tributos_tarifabancaria?wsdl`

### `com.senior.g5.co.ger.cad.controladoria.tributos.unidadeimobiliaria`

Este web service permite incluir, alterar ou excluir as unidades imobiliárias.

**Portas:** `Alterar_2`, `Excluir`, `Exportar`, `Inserir_2`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_controladoria_tributos_unidadeimobiliaria?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_controladoria_tributos_unidadeimobiliaria?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_controladoria_tributos_unidadeimobiliaria?wsdl`

### `com.senior.g5.co.ger.cad.favorecido`

_(sem descrição)_

**Portas:** `Exportar`, `GravarFavorecido`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_favorecido?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_favorecido?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_cad_favorecido?wsdl`

### `com.senior.g5.co.ger.cad.fornecedor`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_fornecedor?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_fornecedor?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_cad_fornecedor?wsdl`

### `com.senior.g5.co.ger.cad.fornecedores`

Importante

**Portas:** `ExcluirFornecedores`, `GravarContatos`, `GravarDependentes`, `GravarFornecedores`, `GravarReciboTerceiros`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_fornecedores?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_fornecedores?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_cad_fornecedores?wsdl`

### `com.senior.g5.co.ger.cad.impostos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_impostos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_impostos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_impostos?wsdl`

### `com.senior.g5.co.ger.cad.marcaveiculo`

Permite incluir ou excluir a marca do veículo.

**Portas:** `Excluir`, `Importar`

**WSDL:**
- Síncrono: ``http://servidor:1234/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_marcaveiculo?wsdl``
- Assíncrono: ``http://servidor:1234/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_marcaveiculo?wsdl``
- Agendado: ``http://servidor:1234/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_marcaveiculo?wsdl``

### `com.senior.g5.co.ger.cad.modeloplano`

_(sem descrição)_

**Portas:** `ExcluirContas`, `GerarContas_2`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_ModeloPlano?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_ModeloPlano?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_cad_ModeloPlano?wsdl`

### `com.senior.g5.co.ger.cad.modeloveiculo`

Permite incluir ou excluir o modelo do veículo.

**Portas:** `Excluir`, `Importar`

**WSDL:**
- Síncrono: ``http://servidor:1234/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_modeloveiculo?wsdl``
- Assíncrono: ``http://servidor:1234/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_modeloveiculo?wsdl``
- Agendado: ``http://servidor:1234/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_modeloveiculo?wsdl``

### `com.senior.g5.co.ger.cad.motivoparada`

Este web service permite a consulta de motivos de parada.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_motivoparada?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_motivoparada?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_motivoparada?wsdl`

### `com.senior.g5.co.ger.cad.motivos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_motivos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_motivos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_cad_motivos?wsdl`

### `com.senior.g5.co.ger.cad.operador`

Este web service permite a consulta de operadores.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_operador?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_operador?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_operador?wsdl`

### `com.senior.g5.co.ger.cad.produto`

_(sem descrição)_

**Portas:** `Cadastrar`, `ConverteUniMedida`, `Excluir`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_produto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_produto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_cad_produto?wsdl`

### `com.senior.g5.co.ger.cad.produto.origemproduto`

O serviço de origens do produto é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_produto_origemProduto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_produto_origemProduto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_produto_origemProduto?wsdl`

### `com.senior.g5.co.ger.cad.produto.safra`

O serviço de safras é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_produto_safra?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_produto_safra?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_produto_safra?wsdl`

### `com.senior.g5.co.ger.cad.propriedadesubpropriedade`

O serviço de propriedades e subpropriedades é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_propriedadeSubpropriedade?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_propriedadeSubpropriedade?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_propriedadeSubpropriedade?wsdl`

### `com.senior.g5.co.ger.cad.rpa.exclusaolotacao`

Web service para exclusão da lotação tributária.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_rpa_exclusaolotacao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_rpa_exclusaolotacao?wsdl`

### `com.senior.g5.co.ger.cad.rpa.exportacaolotacao`

Web service para exportação do cadastro de lotação e suas ligações.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_rpa_exportacaolotacao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_rpa_exportacaolotacao?wsdl`

### `com.senior.g5.co.ger.cad.sacado`

_(sem descrição)_

**Portas:** `ExportarSacado`, `GravarSacado`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_sacado?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_sacado?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_cad_sacado?wsdl`

### `com.senior.g5.co.ger.cad.serienf`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_SerieNF?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_SerieNF?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_SerieNF?wsdl`

### `com.senior.g5.co.ger.cad.servico`

_(sem descrição)_

**Portas:** `Cadastrar`, `Excluir`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_servico?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_servico?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_servico?wsdl`

### `com.senior.g5.co.ger.cad.tipoveiculo`

Este web service permite importar ou excluir os dados de tipo de veículos.

**Portas:** `Excluir`, `Importar`

**WSDL:**
- Síncrono: ``http://servidor:1234/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_tipoveiculo?wsdl``
- Assíncrono: ``http://servidor:1234/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_tipoveiculo?wsdl``
- Agendado: ``http://servidor:1234/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_tipoveiculo?wsdl``

### `com.senior.g5.co.ger.cad.transportadora`

Importante

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_transportadora?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_transportadora?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_cad_transportadora?wsdl`

### `com.senior.g5.co.ger.cad.usuario`

Permite exportar os campos do cadastro do usuário.

**Portas:** `ExportarAbrangencia`, `obterParametrosVendas`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_usuario?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_usuario?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_usuario?wsdl`

### `com.senior.g5.co.ger.cad.veiculo`

Este web service permite a importar ou excluir os dados de veículos.

**Portas:** `Excluir`, `Importar`

**WSDL:**
- Síncrono: ``http://servidor:1234/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_cad_veiculo?wsdl``
- Assíncrono: ``http://servidor:1234/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_cad_veiculo?wsdl``
- Agendado: ``http://servidor:1234/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_cad_veiculo?wsdl``

### `com.senior.g5.co.ger.convenio`

_(sem descrição)_

**Portas:** `Consumir`, `ConsumirNoCupom`, `Estornar`, `EstornarConvenioCupom`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_convenio?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_convenio?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_convenio?wsdl`

### `com.senior.g5.co.ger.db`

_(sem descrição)_

**Portas:** `GetDBDate`, `GetDBInfo`, `GetDBTime`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_db?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_db?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_db?wsdl`

### `com.senior.g5.co.ger.mcserviceemail`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_mcserviceemail?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_mcserviceemail?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_mcserviceemail?wsdl`

### `com.senior.g5.co.ger.monitorprocesso`

O web service de Monitor de Processos tem como objetivo retornar a visão geral de como está a execução dos Processos automáticos e Web services. O retorno das informações é feito no padrão JSON, dividindo em dois blocos as informações:

**Portas:** `Executar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_monitorprocesso?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_monitorprocesso?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ger_monitorprocesso?wsdl`

### `com.senior.g5.co.ger.portal.prop`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_portal_prop?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_portal_prop?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_portal_prop?wsdl`

### `com.senior.g5.co.ger.relatorio`

_(sem descrição)_

**Portas:** `BloquetoFinanceiro`, `Executar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_relatorio?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_relatorio?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_relatorio?wsdl`

### `com.senior.g5.co.ger.sid`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ger_sid?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ger_sid?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_ger_sid?wsdl`


## Módulo int

### `com.senior.g5.co.int.agr.laudoclassificacao`

_(sem descrição)_

**Portas:** `GravarLaudoClassificacao`, `GravarTipoClassificacao`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_agr_laudoclassificacao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_agr_laudoclassificacao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_agr_laudoclassificacao?wsdl`

### `com.senior.g5.co.int.agr.pesagem`

O serviço permite cadastrar o peso de entrada e saída do veículo para as operações de balança.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_agr_pesagem?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_agr_pesagem?wsdl`

### `com.senior.g5.co.int.agr.receituarioagronomico`

Na porta ExportarAplicacao é possível obter as séries das notas fiscais através dos filtros disponíveis.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_agr_receituarioagronomico?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_agr_receituarioagronomico?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_agr_receituarioagronomico?wsd`

### `com.senior.g5.co.int.cad.produtofornecedor`

Esse web service permite exportar as ligações de Produto x Fornecedor cadastradas no sistema quando o tipo de sistema integrado for 07 -Supermercados Senior.

**Portas:** `ExportarLigacao`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_cad_produtofornecedor?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_cad_produtofornecedor?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_cad_produtofornecedor?wsdl`

### `com.senior.g5.co.int.cre.titulo`

É usado pelo Varejo para exportar exclusões de titulos do Contas a Receber.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_cre_titulo?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_cre_titulo?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_cre_titulo?wsd`

### `com.senior.g5.co.int.eletronicos.documentos`

_(sem descrição)_

**Portas:** `ConsultarEvento`, `EmitirEventoComprovante`, `EncerramentoMDFe`, `ImportarRetornos_6`, `Receber`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_eletronicos_documentos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_eletronicos_documentos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_eletronicos_documentos?wsdl`

### `com.senior.g5.co.int.geral.cfop`

Este serviço faz a exportação das CFOPs cadastradas no sistema.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_geral_cfop?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_geral_cfop?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_geral_cfop?wsdl`

### `com.senior.g5.co.int.geral.cotacoesmoedas`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_geral_cotacoesmoedas?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_geral_cotacoesmoedas?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_geral_cotacoesmoedas?wsdl`

### `com.senior.g5.co.int.geral.cotacoesmoedashora`

Na porta Consultar geral é possível obter uma coleção de dados através dos filtros disponíveis.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom.senior.g5.co.int.geral.cotacoesmoedashora?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom.senior.g5.co.int.geral.cotacoesmoedashora?wsdl`

### `com.senior.g5.co.int.geral.exportacao`

Serviço executado para obter quais entidades possuem pendência de integração, evitando executar o web service de cada entidade para verificar que não têm registro e só descobrir depois que não há registro pendente de integração.

**Portas:** `Confirmar`, `ConfirmarSequencia`, `ObterPendencias`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_geral_exportacao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_geral_exportacao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_geral_exportacao?wsdl`

### `com.senior.g5.co.int.geral.fotosprodutos`

O serviço tem por finalidade tratar a exportação das fotos de produtos que estejam devidamente cadastrados no sistema.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_geral_fotosprodutos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_geral_fotosprodutos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_geral_fotosprodutos?wsdl`

### `com.senior.g5.co.int.geral.intencaobaixatitulos`

_(sem descrição)_

**Portas:** `Cancelar`, `Registrar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_geral_intencaobaixatitulos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_geral_intencaobaixatitulos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_geral_intencaobaixatitulos?wsdl`

### `com.senior.g5.co.int.geral.moedas`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_geral_moedas?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_geral_moedas?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_geral_moedas?wsdl`

### `com.senior.g5.co.int.geral.relatorio`

_(sem descrição)_

**Portas:** `IniciarGeracao`, `ObterSituacao`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_geral_relatorio?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_geral_relatorio?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_geral_relatorio?wsdl`

### `com.senior.g5.co.int.geral.relatorio.davs`

Web service responsável por gerar os arquivos do PAF.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_geral_relatorio_davs?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_geral_relatorio_davs?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_geral_relatorio_davs?wsdl`

### `com.senior.g5.co.int.geral.relatorio.estoqueblocox`

A finalidade deste web service é gerar o arquivo de estoque mensal (Bloco X) dos registros do PAF. Este arquivo é gerado no formato XML.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_geral_relatorio_estoqueblocox?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_geral_relatorio_estoqueblocox?wsdl`

### `com.senior.g5.co.int.geral.relatorio.lfdp`

Web service utilizado para exportação do Ato Cotepe 70/05.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom.senior.g5.co.int.geral.relatorio.lfdp?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom.senior.g5.co.int.geral.relatorio.lfdp?wsdl`

### `com.senior.g5.co.int.geral.relatorio.registroj`

Este web service tem a finalidade de gerar as informações para os registro J1 (notas fiscais manuais e eletrônicas) e J2 (itens das notas fiscais) dos registros do PAF.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_geral_relatorio_registroj?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_geral_relatorio_registroj?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_geral_relatorio_registroj?wsdl`

### `com.senior.g5.co.int.geral.relatorio.sintegra`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_geral_relatorio_sintegra?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_geral_relatorio_sintegra?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_geral_relatorio_sintegra?wsdl`

### `com.senior.g5.co.int.geral.relatorio.sped`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_geral_relatorio_sped?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_geral_relatorio_sped?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_geral_relatorio_sped?wsdl`

### `com.senior.g5.co.int.geral.tributosprodutosservicovenda`

_(sem descrição)_

**Portas:** `ExportarProduto`, `ExportarServico`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_geral_tributosProdutosServicoVenda?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_geral_tributosProdutosServicoVenda?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_geral_tributosProdutosServicoVenda?wsdl`

### `com.senior.g5.co.int.gs.produtogs`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_gs_produtogs?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_gs_produtogs?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_gs_produtogs?wsdl`

### `com.senior.g5.co.int.gs.titulo.receber`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_gs_titulo_receber?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_gs_titulo_receber?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_gs_titulo_receber?wsdl`

### `com.senior.g5.co.int.padrao.documentos`

_(sem descrição)_

**Portas:** `Pedido`, `PedidoGrade`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_padrao_documentos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_padrao_documentos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_padrao_documentos?wsdl`

### `com.senior.g5.co.int.padrao.pessoa`

**Importante**

**WSDL:**
- _(não disponível)_

### `com.senior.g5.co.int.padrao.produtocaracteristica`

O objetivo deste web service é exportar as características do produto e derivação.

**Portas:** `ConsultarGeral`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_padrao_produtocaracteristica?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_padrao_produtocaracteristica?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_padrao_produtocaracteristica?wsdl`

### `com.senior.g5.co.int.tes.lancamentos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_tes_lancamentos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_tes_lancamentos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_tes_lancamentos?wsdl`

### `com.senior.g5.co.int.tms.cadastros`

_(sem descrição)_

**Portas:** `ExportarCadastros`, `SolicitarCadastros`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_tms_cadastros?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_tms_cadastros?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_tms_cadastros?wsdl`

### `com.senior.g5.co.int.varejo.agrupamento`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_agrupamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_agrupamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_agrupamento?wsdl`

### `com.senior.g5.co.int.varejo.analisecredito`

_(sem descrição)_

**Portas:** `ExportarCategorias`, `ExportarSituacaoPedido_3`, `ImportarSituacaoPedido`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_analisecredito?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_analisecredito?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_analisecredito?wsdl`

### `com.senior.g5.co.int.varejo.atributovenda`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_atributovenda?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_atributovenda?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_atributovenda?wsdl`

### `com.senior.g5.co.int.varejo.autenticadores`

Web service para consulta e gerenciamento de autenticadores associados a clientes no sistema de varejo. Permite verificar autenticadores específicos e suas respectivas situações para um determinado cliente.

**Portas:** `Consultar AutenticadoresCliente`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_autenticadores?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_autenticadores?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_autenticadores?wsdl`

### `com.senior.g5.co.int.varejo.bancos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_bancos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_bancos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_bancos?wsdl`

### `com.senior.g5.co.int.varejo.cancelamentonotacompra`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_cancelamentonotacompra?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_cancelamentonotacompra?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_cancelamentonotacompra?wsdl`

### `com.senior.g5.co.int.varejo.cartaopresente`

_(sem descrição)_

**Portas:** `CancelarOperacao`, `Consultar`, `ConsultarCartaoPresente`, `Consumir`, `ConsumirCartaoPresente`, `Gerar`, `GravarCartaoPresente`, `IncluirCredito`, `Pagar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_cartaopresente?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_cartaopresente?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_cartaopresente?wsdl`

### `com.senior.g5.co.int.varejo.carteiracobranca`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_carteiracobranca?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_carteiracobranca?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_carteiracobranca?wsdl`

### `com.senior.g5.co.int.varejo.categoriaprodutos`

O serviço tem por finalidade tratar a exportação das categorias de clientes que estejam devidamente cadastradas no sistema.

**Portas:** `Exportar`

**WSDL:**
- Síncrono: `http:///example.g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_categoriaprodutos?wsdl`
- Assíncrono: `http:///example.g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_categoriaprodutos?wsdl`
- Agendado: `http:///example.g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_categoriaprodutos?wsdl`

### `com.senior.g5.co.int.varejo.cep`

O serviço tem por finalidade tratar a exportação e importação dos cadastros de CEP.

**Portas:** `Exportar`, `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_cep?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_cep?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_cep?wsdl`

### `com.senior.g5.co.int.varejo.cfesat`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_cfesat?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_cfesat?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_cfesat?wsdl`

### `com.senior.g5.co.int.varejo.cfop`

Este serviço faz a exportação das CFOPs cadastradas no sistema.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_cfop?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_cfop?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_cfop?wsdl`

### `com.senior.g5.co.int.varejo.chequepresente`

Web service para gestão e gravação de Cartões Presente no sistema de varejo. Permite o registro, emissão e configuração de cartões presente, com definição de valores e datas de validade.

**Portas:** `Consultar`, `Consumo`, `Gravar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_chequepresente?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_chequepresente?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_chequepresente?wsdl`

### `com.senior.g5.co.int.varejo.classificacaofiscal`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_ClassificacaoFiscal?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_ClassificacaoFiscal?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_ClassificacaoFiscal?wsdl`

### `com.senior.g5.co.int.varejo.cliente`

_(sem descrição)_

**Portas:** `Exportar`, `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_cliente?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_cliente?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_cliente?wsdl`

### `com.senior.g5.co.int.varejo.clientes`

_(sem descrição)_

**Portas:** `ConsultarCliente`, `ConsultarCredito`, `ConsultarHistoricoFinanceiro_2`, `ExportarClientes`, `ImportarConsultaSPC`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_clientes?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_clientes?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_clientes?wsdl`

### `com.senior.g5.co.int.varejo.colecoes`

O serviço de Coleções é utilizado para permitir a exportação das informações da coleção do produto.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_colecoes?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_colecoes?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_colecoes?wsdl`

### `com.senior.g5.co.int.varejo.comissaorepresentante`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_ComissaoRepresentante?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_ComissaoRepresentante?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_ComissaoRepresentante?wsdl`

### `com.senior.g5.co.int.varejo.condicaopagamento`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_condicaopagamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_condicaopagamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_condicaopagamento?wsdl`

### `com.senior.g5.co.int.varejo.condicaopagamentovarejoem`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_condicaopagamentovarejoEm?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_condicaopagamentovarejoEm?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_condicaopagamentovarejoEm?wsdl`

### `com.senior.g5.co.int.varejo.configurarcampocliente`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_configurarcampocliente?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_configurarcampocliente?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_configurarcampocliente?wsdl`

### `com.senior.g5.co.int.varejo.consumonumerosorte`

Este web service realiza o consumo síncrono de números da sorte.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_ConsumoNumeroSorte?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_ConsumoNumeroSorte?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_ConsumoNumeroSorte?wsdl`

### `com.senior.g5.co.int.varejo.contafinanceira`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_contafinanceira?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_contafinanceira?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_contafinanceira?wsdl`

### `com.senior.g5.co.int.varejo.containternatesouraria`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_containternatesouraria?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_containternatesouraria?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_containternatesouraria?wsdl`

### `com.senior.g5.co.int.varejo.contratovenda`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_contratovenda?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_contratovenda?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_contratovenda?wsdl`

### `com.senior.g5.co.int.varejo.convenios`

_(sem descrição)_

**Portas:** `Consultar`, `Exportar`, `ExportarItens`, `Exportar_2`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_convenios?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_convenios?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_convenios?wsdl`

### `com.senior.g5.co.int.varejo.cupomespelho`

Este Web service possibilita o serviço para importação de notas fiscais de venda que servirão de espelho para os cupons fiscais emitidos no varejo.

**Portas:** `ImportarNotaEspelhoCupom`

**WSDL:**
- Síncrono: `hhttp://servidor:1234/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_cupomespelho?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_cupomespelho?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_cupomespelho?wsdl`

### `com.senior.g5.co.int.varejo.cupomfiscal`

_(sem descrição)_

**Portas:** `Consultar_14`, `Gravar_6`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_cupomfiscal?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_cupomfiscal?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_cupomfiscal?wsdl`

### `com.senior.g5.co.int.varejo.cupomfiscalve`

_(sem descrição)_

**Portas:** `Consultar`, `Gravar_5`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_cupomfiscalve?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_cupomfiscalve?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_cupomfiscalve?wsdl`

### `com.senior.g5.co.int.varejo.definicaometa`

O serviço tem por finalidade tratar a exportação das metas que estejam devidamente cadastradas no sistema.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_definicaometa?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_definicaometa?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_definicaometa?wsdl`

### `com.senior.g5.co.int.varejo.depositos`

_(sem descrição)_

**Portas:** `ExportarLigacoesProdutosDepositos`, `Exportar_3`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_depositos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_depositos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_depositos?wsdl`

### `com.senior.g5.co.int.varejo.empresafilial`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_empresafilial?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_empresafilial?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_empresafilial?wsdl`

### `com.senior.g5.co.int.varejo.entrega`

Este web service integra as informações de entrega do Gestão de Lojas para o Gestão Empresarial | ERP.

**Portas:** `Exportar`, `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_entrega?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_entrega?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_entrega?wsdl`

### `com.senior.g5.co.int.varejo.equipamento`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_equipamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_equipamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_equipamento?wsdl`

### `com.senior.g5.co.int.varejo.escrituracao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_escrituracao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_escrituracao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_escrituracao?wsdl`

### `com.senior.g5.co.int.varejo.estados`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_estados?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_estados?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_estados?wsdl`

### `com.senior.g5.co.int.varejo.estoque`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_estoque?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_estoque?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_estoque?wsdl`

### `com.senior.g5.co.int.varejo.fabricante`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_fabricante?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_fabricante?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_fabricante?wsdl`

### `com.senior.g5.co.int.varejo.familia`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_familia?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_familia?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_familia?wsdl`

### `com.senior.g5.co.int.varejo.feriado`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_feriado?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_feriado?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_feriado?wsdl`

### `com.senior.g5.co.int.varejo.financeiras`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_financeiras?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_financeiras?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_financeiras?wsdl`

### `com.senior.g5.co.int.varejo.formapagamentovarejoem`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_formapagamentovarejoEm?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_formapagamentovarejoEm?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_formapagamentovarejoEm?wsdl`

### `com.senior.g5.co.int.varejo.formaspagamento`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_formaspagamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_formaspagamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_formaspagamento?wsdl`

### `com.senior.g5.co.int.varejo.fornecedores`

_(sem descrição)_

**Portas:** `Exportar_9`, `Importar_4`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_fornecedores?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_fornecedores?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_fornecedores?wsdl`

### `com.senior.g5.co.int.varejo.garantiaestentidanaovendida`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_garantiaestentidanaovendida?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_garantiaestentidanaovendida?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_garantiaestentidanaovendida?wsdl`

### `com.senior.g5.co.int.varejo.grupofiscalproduto`

Este web service tem por objetivo exportar os grupos fiscais dos produtos, os quais são gerados na carga inicial ou através do processo agendado 89 - Gerar grupos fiscais para serem exportados ao sistema Retaguarda. Ele somente busca os dados da Tabelas – Integrações – Grupo Fiscal (E000GPF) e retorna para o web service com base nos registros pendentes. Somente aceita Requisição do tipo A – "Alterados".

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_grupofiscalproduto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_grupofiscalproduto?wsdl`

### `com.senior.g5.co.int.varejo.historicofinanceiro`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_historicofinanceiro?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_historicofinanceiro?wsdl``
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_historicofinanceiro?wsdl``

### `com.senior.g5.co.int.varejo.historicospc`

<Breve descrição do serviço>

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_historicospc?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_historicospc?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_historicospc?wsdl`

### `com.senior.g5.co.int.varejo.importarferiado`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_importarferiado?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_importarferiado?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_importarferiado?wsdl`

### `com.senior.g5.co.int.varejo.integracoespendentes`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_IntegracoesPendentes?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_IntegracoesPendentes?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_IntegracoesPendentes?wsdl`

### `com.senior.g5.co.int.varejo.inventario`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_inventario?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_inventario?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_inventario?wsdl`

### `com.senior.g5.co.int.varejo.ligacaocategoriasprodutousuarios`

Web service para exportação de dados de ligações entre categorias de produtos e usuários no sistema de varejo. Permite a consulta de relacionamentos entre usuários e categorias de produtos com diversos filtros.

**Portas:** `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_ligacaocategoriasprodutousuarios?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_ligacaocategoriasprodutousuarios?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_ligacaocategoriasprodutousuarios?wsdl`

### `com.senior.g5.co.int.varejo.listapresente`

_(sem descrição)_

**Portas:** `Consultar`, `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_listapresente?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_listapresente?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_listapresente?wsdl`

### `com.senior.g5.co.int.varejo.marca`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_marca?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_marca?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_marca?wsdl`

### `com.senior.g5.co.int.varejo.montagem`

_(sem descrição)_

**Portas:** `Exportar`, `Importar_2`, `Reabilitar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_montagem?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_montagem?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_montagem?wsdl`

### `com.senior.g5.co.int.varejo.motivo`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_motivo?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_motivo?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_motivo?wsdl`

### `com.senior.g5.co.int.varejo.motoristas`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_motoristas?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_motoristas?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_motoristas?wsdl`

### `com.senior.g5.co.int.varejo.movimentoestoque`

_(sem descrição)_

**Portas:** `Exportar`, `Importar`, `SaldoInicial`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_movimentoestoque?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_movimentoestoque?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_movimentoestoque?wsdl`

### `com.senior.g5.co.int.varejo.naturezagasto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_naturezagasto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_naturezagasto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_naturezagasto?wsdl`

### `com.senior.g5.co.int.varejo.nfce`

_(sem descrição)_

**Portas:** `Gravar_8`, `ImportarNfce_10`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_nfce?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_nfce?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_nfce?wsdl`

### `com.senior.g5.co.int.varejo.notaautorizada`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_NotaAutorizada?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_NotaAutorizada?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_NotaAutorizada?wsdl`

### `com.senior.g5.co.int.varejo.notacompra`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_notaCompra?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_notaCompra?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_notaCompra?wsdl`

### `com.senior.g5.co.int.varejo.notafiscal`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_notafiscal?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_notafiscal?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_notafiscal?wsdl`

### `com.senior.g5.co.int.varejo.notavenda`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_notaVenda?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_notaVenda?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_notaVenda?wsdl`

### `com.senior.g5.co.int.varejo.obteraliquotaicmspartilha`

Serviço para obtenção das alíquotas de ICMS para partilha entre estados de origem e destino nas operações interestaduais.

**Portas:** `ObterAliquotaIcmsPartilha`

**WSDL:**
- _(não disponível)_

### `com.senior.g5.co.int.varejo.operacoesnotafiscal`

Destinado a exportar o cadastro de operações de nota fiscal.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_operacoesnotafiscal?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_operacoesnotafiscal?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_operacoesnotafiscal?wsdl`

### `com.senior.g5.co.int.varejo.operadorascartao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_operadorascartao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_operadorascartao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_operadorascartao?wsdl`

### `com.senior.g5.co.int.varejo.operadoratelefonia`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_operadoratelefonia?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_operadoratelefonia?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_operadoratelefonia?wsdl`

### `com.senior.g5.co.int.varejo.oportunidadesvenda`

Possibilita consultar oportunidades de venda em vendas efetuadas anteriormente.

**WSDL:**
- Síncrono: `/sapiens_Synccom_senior_g5_co_int_varejo_oportunidadesvenda?wsdl`
- Assíncrono: `/sapiens_Asynccom_senior_g5_co_int_varejo_oportunidadesvenda?wsdl`
- Agendado: `/sapiens_Schedulecom_senior_g5_co_int_varejo_oportunidadesvenda?wsdl`

### `com.senior.g5.co.int.varejo.ordemcompra`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_ordemcompra?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_ordemcompra?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_ordemcompra?wsdl`

### `com.senior.g5.co.int.varejo.pais`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_pais?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_pais?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_pais?wsdl`

### `com.senior.g5.co.int.varejo.parametrosfilial`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_parametrosfilial?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_parametrosfilial?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_parametrosfilial?wsdl`

### `com.senior.g5.co.int.varejo.pdv`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_pdv?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_pdv?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_pdv?wsdl`

### `com.senior.g5.co.int.varejo.pedido`

_(sem descrição)_

**Portas:** `AlterarTipoEntrega`, `AnularEntregaFuturaPeloCD`, `ConsultarStatus`, `ExportarPedido`, `GravarPedidosVarejo_7`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_pedido?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_pedido?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_pedido?wsdl`

### `com.senior.g5.co.int.varejo.pendenciacarga`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_pendenciacarga?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_pendenciacarga?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_pendenciacarga?wsdl`

### `com.senior.g5.co.int.varejo.perfilusuario`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_perfilusuario?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_perfilusuario?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_perfilusuario?wsdl`

### `com.senior.g5.co.int.varejo.pessoas`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_pessoas?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_pessoas?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_pessoas?wsdl`

### `com.senior.g5.co.int.varejo.portador`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_portador?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_portador?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_portador?wsdl`

### `com.senior.g5.co.int.varejo.posicaocompras`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_posicaocompras?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_posicaocompras?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_posicaocompras?wsdl`

### `com.senior.g5.co.int.varejo.produto`

_(sem descrição)_

**Portas:** `Exportar`, `ExportarPrecoMedio`, `PosicaoEstoqueRede`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_produto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_produto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_produto?wsdl`

### `com.senior.g5.co.int.varejo.produtosservicos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_produtosservicos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_produtosservicos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_produtosservicos?wsdl`

### `com.senior.g5.co.int.varejo.quantidadedevolvida`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_quantidadedevolvida?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_quantidadedevolvida?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_quantidadedevolvida?wsdl`

### `com.senior.g5.co.int.varejo.reabilitacaonotacompra`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_reabilitacaonotacompra?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_reabilitacaonotacompra?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_reabilitacaonotacompra?wsdl`

### `com.senior.g5.co.int.varejo.recebimentostef`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_RecebimentosTef?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_RecebimentosTef?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_RecebimentosTef?wsdl`

### `com.senior.g5.co.int.varejo.reducaoz`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_reducaoz?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_reducaoz?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_reducaoz?wsdl`

### `com.senior.g5.co.int.varejo.relatorio.davs`

Web service utilizado para geração e exportaçao dos registros D2, D3 e D4 do arquivo de **Registros do PAF-ECF.**

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom.senior.g5.co.int.varejo.relatorio.davs?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom.senior.g5.co.int.varejo.relatorio.davs?wsdl`

### `com.senior.g5.co.int.varejo.relatorio.estoque`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_relatorio_estoque?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_relatorio_estoque?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_relatorio_estoque?wsdl`

### `com.senior.g5.co.int.varejo.relatorio.meiospagamento`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_relatorio_MeiosPagamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_relatorio_MeiosPagamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_relatorio_MeiosPagamento?wsdl`

### `com.senior.g5.co.int.varejo.relatorio.u1`

Este web service envia para a Megasul o registro U1, contendo evidências de alteração no arquivo **Registros do PAF-ECF**.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom.senior.g5.co.int.varejo.relatorio.u1?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom.senior.g5.co.int.varejo.relatorio.u1?wsdl`

### `com.senior.g5.co.int.varejo.remessa`

Este web service integra a solicitação de geração de remessa feita pelo Retaguarda. Quando recebe a requisição, o ERP gera uma remessa em nome da filial de venda.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_remessa?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_remessa?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_remessa?wsdl`

### `com.senior.g5.co.int.varejo.representantes`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_representantes?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_representantes?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_representantes?wsdl`

### `com.senior.g5.co.int.varejo.restricaodestinatario`

Destinado a exportar o cadastro de restrição de destinatários em notas fiscais de transferência.

**Portas:** `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_RestricaoDestinatario?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_RestricaoDestinatario?wsdl`
- Agendado: `/http://servidor:1234/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_RestricaoDestinatario?wsdl`

### `com.senior.g5.co.int.varejo.retornoautenticadoresexternocreditos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_retornoautenticadoresexternocreditos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_retornoautenticadoresexternocreditos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_retornoautenticadoresexternocreditos?wsdl`

### `com.senior.g5.co.int.varejo.retornointegracao`

O webservice de retorno de integração tem o objetivo de retornar, através de uma integração, o resultado do processamento de um webservice executado no ERP.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_RetornoIntegracao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_RetornoIntegracao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_RetornoIntegracao?wsdl`

### `com.senior.g5.co.int.varejo.sacado`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_sacado?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_sacado?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_sacado?wsdl`

### `com.senior.g5.co.int.varejo.seguradora`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_seguradora?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_seguradora?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_seguradora?wsdl`

### `com.senior.g5.co.int.varejo.seguroparcelaprotegidanaovendido`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_seguroparcelaprotegidanaovendido?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_seguroparcelaprotegidanaovendido?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_seguroparcelaprotegidanaovendido?wsdl`

### `com.senior.g5.co.int.varejo.seguros`

Este web service exporta os dados cadastrados na tela F080CSI - Cadastro de seguros, com exceção da guia Filiais, pois nela é definido para quais filiais o seguro é exportável.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_seguros?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_seguros?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_seguros?wsdl`

### `com.senior.g5.co.int.varejo.serienf`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_SerieNF?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_SerieNF?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_SerieNF?wsdl`

### `com.senior.g5.co.int.varejo.servico`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_servico?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_servico?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_servico?wsdl`

### `com.senior.g5.co.int.varejo.servicofrete`

_(sem descrição)_

**Portas:** `Exportar_3`, `Importar_4`, `Reabilitar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_servicofrete?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_servicofrete?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_servicofrete?wsdl`

### `com.senior.g5.co.int.varejo.tabelaibpt`

Serviço para exportação de dados da tabela IBPT (Imposto Brasileiro sobre Produtos e Serviços). Permite a consulta e extração de informações tributárias para cálculo de impostos aproximados em sistemas de varejo.

**Portas:** `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_tabelaibpt?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_tabelaibpt?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_tabelaibpt?wsdl`

### `com.senior.g5.co.int.varejo.tabelajuros`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_tabelajuros?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_tabelajuros?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_tabelajuros?wsdl`

### `com.senior.g5.co.int.varejo.tabelaprecofrete`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_tabelaprecofrete?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_tabelaprecofrete?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_tabelaprecofrete?wsdl`

### `com.senior.g5.co.int.varejo.tabelaspreco`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_tabelaspreco?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_tabelaspreco?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_tabelaspreco?wsdl`

### `com.senior.g5.co.int.varejo.tabelasprecove`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_tabelasprecove?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_tabelasprecove?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_tabelasprecove?wsdl`

### `com.senior.g5.co.int.varejo.tabelastributos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_tabelastributos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_tabelastributos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_tabelastributos?wsdl`

### `com.senior.g5.co.int.varejo.tipotitulo`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_tipotitulo?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_tipotitulo?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_tipotitulo?wsdl`

### `com.senior.g5.co.int.varejo.titulocredito`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_tituloCredito?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_tituloCredito?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_tituloCredito?wsdl`

### `com.senior.g5.co.int.varejo.titulos`

_(sem descrição)_

**Portas:** `AlterarTitulosPagar`, `AlterarTitulosReceber_2`, `AproveitamentoCreditoCPVarejo`, `BaixaCompensacaoCPCRVarejo`, `BaixarTitulosCPVarejo_2`, `ConsultarTitulosCP_4`, `EstornoBaixaTitulosCPVarejo_2`, `EstornoBaixaTitulosCRVarejo_2`, `ExportarBaixaTitulosCP`, `ExportarBaixaTitulosReceber`, `ExportarTitulosCP_4`, `ExportarTitulosReceber_8`, `GravarTitulosCPVarejo_3`, `ImportarBaixaTitulosReceber`, `ImportarTitulosReceber_2`, `SubstituirTitulosCPVarejo`, `SubstituirTitulosCRVarejo`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_titulos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_titulos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_titulos?wsdl`

### `com.senior.g5.co.int.varejo.titulosreceber`

_(sem descrição)_

**Portas:** `Consultar_6`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_titulosreceber?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_titulosreceber?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_titulosreceber?wsdl`

### `com.senior.g5.co.int.varejo.tokenwiipo`

Serviço para exportação de tokens de integração com o sistema Wiipo. Gerencia a criação e manutenção de tokens para autenticação entre sistemas.

**Portas:** `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_tokenwiipo?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_tokenwiipo?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_tokenwiipo?wsdl`

### `com.senior.g5.co.int.varejo.transportadoras`

_(sem descrição)_

**Portas:** `Exportar_2`, `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_transportadoras?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_transportadoras?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_transportadoras?wsdl`

### `com.senior.g5.co.int.varejo.tributos`

_(sem descrição)_

**Portas:** `ExportarSintegra`, `ExportarSped`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_tributos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_tributos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_tributos?wsdl`

### `com.senior.g5.co.int.varejo.unidademedida`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_unidademedida?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_unidademedida?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_unidademedida?wsdl`

### `com.senior.g5.co.int.varejo.usuarios`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_usuarios?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_usuarios?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_usuarios?wsdl`

### `com.senior.g5.co.int.varejo.usuariosxprodutos`

Serviço de integração para exportação de dados de relacionamento entre usuários e produtos no sistema de varejo.

**Portas:** `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_usuariosxprodutos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_usuariosxprodutos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_varejo_usuariosxprodutos?wsdl`

### `com.senior.g5.co.int.varejo.vendatitulo`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_vendatitulo?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_vendatitulo?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_vendatitulo?wsdl`

### `com.senior.g5.co.int.varejo.vendedoresusuarios`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_VendedoresUsuarios?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_VendedoresUsuarios?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_VendedoresUsuarios?wsdl`

### `com.senior.g5.co.int.varejo.verbacompra`

_(sem descrição)_

**Portas:** `Exportar`, `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_varejo_verbacompra?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_varejo_verbacompra?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_varejo_verbacompra?wsdl`

### `com.senior.g5.co.int.venda.cartadecorrecao`

Web service para cadastro de carta de correção eletrônica.

**Portas:** `Gravar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_venda_cartadecorrecao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_venda_cartadecorrecao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_int_venda_cartadecorrecao?wsdl`

### `com.senior.g5.co.int.venda.documentofiscal`

Web service para cálculo de retenção. As alíquotas de retenção de PIS, COFINS, CSLL, Outras Retenções e IRRF são sugeridas quando:

**Portas:** `CalcularRetencoes`, `Cancelar`, `Emitir`, `EmitirCartaCorrecao`, `EmitirReferenciado`, `Imprimir`

**WSDL:**
- Síncrono: ``http://example.com/g5-senior-services/sapiens_Synccom_senior_g5_co_int_venda_documentofiscal?wsdl``
- Assíncrono: ``http://example.com/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_venda_documentofiscal?wsdl``

### `com.senior.g5.co.int.vetorh.abrangencia`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_vetorh_abrangencia?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_vetorh_abrangencia?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_vetorh_abrangencia?wsdl`

### `com.senior.g5.co.int.vetorh.centrodecustos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_vetorh_centrodecustos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_vetorh_centrodecustos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_vetorh_centrodecustos?wsdl`

### `com.senior.g5.co.int.vetorh.complementohistoricopadrao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_vetorh_complementohistoricopadrao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_vetorh_complementohistoricopadrao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_vetorh_complementohistoricopadrao?wsdl`

### `com.senior.g5.co.int.vetorh.fornecedores`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_vetorh_fornecedores?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_vetorh_fornecedores?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_vetorh_fornecedores?wsdl`

### `com.senior.g5.co.int.vetorh.titulos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_int_vetorh_titulos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_int_vetorh_titulos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_int_vetorh_titulos?wsdl`


## Módulo lgpd

### `com.senior.g5.co.lgpd`

Web service para consulta e exclusão de dados de pessoas físicas cadastradas no sistema.

**Portas:** `Excluir`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_lgpd?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_lgpd?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_lgpd?wsdl`


## Módulo mcm

### `com.senior.g5.co.mcm.cpr.aprovarcotacoes`

**Importante**

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_cpr_aprovarcotacoes?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_cpr_aprovarcotacoes?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_cpr_aprovarcotacoes?wsdl`

### `com.senior.g5.co.mcm.cpr.contratocompra`

Este web service tem como finalidade possibilitar a consulta dos contratos de compra.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens.Synccom.senior.g5.co.mcm.cpr.contratocompra?wsdl`
- Assíncrono: `/g5-senior-services/sapiens.Synccom.senior.g5.co.mcm.cpr.contratocompra?wsdl`

### `com.senior.g5.co.mcm.cpr.cotacoes`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_cpr_cotacoes?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_cpr_cotacoes?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_cpr_cotacoes?wsdl`

### `com.senior.g5.co.mcm.cpr.cotacoespendentes`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_cpr_cotacoespendentes?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_cpr_cotacoespendentes?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_cpr_cotacoespendentes?wsdl`

### `com.senior.g5.co.mcm.cpr.manifestacaodestinatario`

Este web service é utilizado para a geração da Manifestação do Destinatário, reproduzindo o mesmo processo executado pela tela F440MDE. O funcionamento ocorre da seguinte forma:

**Portas:** `Gravar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens.Synccom.senior.g5.co.mcm.cpr.manifestacaodestinatario?wsdl`
- Assíncrono: `/g5-senior-services/sapiens.Synccom.senior.g5.co.mcm.cpr.manifestacaodestinatario?wsdl`

### `com.senior.g5.co.mcm.cpr.nfdevolucaovianfsaida`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_cpr_nfdevolucaovianfsaida?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_cpr_nfdevolucaovianfsaida?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_cpr_nfdevolucaovianfsaida?wsdl`

### `com.senior.g5.co.mcm.cpr.nfentradatransfvianfsaida`

Fiscal de Saída](../menu_mercado/nf-transferencia.htm)

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_cpr_nfentradatransfvianfsaida?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_cpr_nfentradatransfvianfsaida?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_cpr_nfentradatransfvianfsaida?wsdl`

### `com.senior.g5.co.mcm.cpr.notafiscal`

**Observação**

**Portas:** `DevolverCupom`, `FecharNota`, `GravarNotasFiscaisEntrada`, `ReabilitaCancelaNota`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_cpr_notafiscal?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_cpr_notafiscal?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_cpr_notafiscal?wsdl`

### `com.senior.g5.co.mcm.cpr.notafiscalentrada`

O serviço de Nota Fiscal de Entrada é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGerar`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_cpr_notafiscalentrada?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_cpr_notafiscalentrada?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mcm_cpr_notafiscalentrada?wsdl`

### `com.senior.g5.co.mcm.cpr.ordemcompra`

Este web service permite a exportação de registros com controle de integração, utilizando a porta Exportar. Também tem uma porta de ConsultarGeral que perdadosGerais.codEmpmite obter informações específicas da entidade principal, podendo aplicar alguns filtros pré-definidos, além da porta GravarOrdensCompra para alterar e cancelar ordens de compra.

**Portas:** `ConsultarGeral`, `Exportar`, `Exportar4`, `GravarOrdensCompra`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_cpr_ordemcompra?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_cpr_ordemcompra?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mcm_cpr_ordemcompra?wsdl`

### `com.senior.g5.co.mcm.cpr.pesagemviabalancacontrato`

Nota

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_cpr_pesagemviabalancacontrato?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_cpr_pesagemviabalancacontrato?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_cpr_pesagemviabalancacontrato?wsdl`

### `com.senior.g5.co.mcm.cpr.recebimentoeletronico`

Esse serviço tem como objetivo processar o recebimento de documentos eletrônicos.

**Portas:** `Processar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_cpr_recebimentoeletronico?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_cpr_recebimentoeletronico?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mcm_cpr_recebimentoeletronico?wsdl`

### `com.senior.g5.co.mcm.cpr.resumoextratoprodutor`

Este web service tem como objetivo proporcionar uma consulta do extrato do produtor de forma resumida tanto para quantidade quanto para valores. Permite também a visualização de forma detalhada das informações.

**Portas:** `Consultar_2`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_cpr_resumoextratoprodutor?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_cpr_resumoextratoprodutor?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mcm_cpr_resumoextratoprodutor?wsdl`

### `com.senior.g5.co.mcm.est.analiserepestoqueagrupada`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_analiserepestoqueagrupada?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_analiserepestoqueagrupada?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_analiserepestoqueagrupada?wsdl`

### `com.senior.g5.co.mcm.est.aprovarrequisicoes`

Este web service trata apenas da aprovação de requisições que tenham o controle de aprovação multinível.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_aprovarrequisicoes?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_aprovarrequisicoes?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_aprovarrequisicoes?wsdl`

### `com.senior.g5.co.mcm.est.assistencia`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_assistencia?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_assistencia?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_assistencia?wsdl`

### `com.senior.g5.co.mcm.est.calculoconsumomedio`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_calculoconsumomedio?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_calculoconsumomedio?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_calculoconsumomedio?wsdl`

### `com.senior.g5.co.mcm.est.contageminventario`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_contageminventario?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_contageminventario?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_contageminventario?wsdl`

### `com.senior.g5.co.mcm.est.embalagemestoque`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_embalagemestoque?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_embalagemestoque?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_embalagemestoque?wsdl`

### `com.senior.g5.co.mcm.est.estoques`

Este web service permite a automatização dos processos ligados ao Estoque.

**Portas:** `ConsultaMovimentosEstoque`, `ConsultarEstoque`, `ExcluirMovimento`, `ExcluirMovimentoBloco`, `Fechar`, `MovimentarEstoque`, `TransferenciaProdutos`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_estoques?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_estoques?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_estoques?wsdl`

### `com.senior.g5.co.mcm.est.finalizacaoinventario`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_finalizacaoinventario?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_finalizacaoinventario?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_finalizacaoinventario?wsdl`

### `com.senior.g5.co.mcm.est.finalizacaoinventariogernota`

Este serviço tem como objetivo finalizar inventário com a possibilidade de gerar nota de movimento, normal ou de acerto.

**Portas:** `FinalizarInventarioEstoqueGerarNota`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_finalizacaoinventariogernota?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_finalizacaoinventariogernota?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mcm_est_finalizacaoinventariogernota?wsdl`

### `com.senior.g5.co.mcm.est.geracaoinventario`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_geracaoinventario?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_geracaoinventario?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_geracaoinventario?wsdl`

### `com.senior.g5.co.mcm.est.geracaosolicitacaocompra`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_geracaosolicitacaocompra?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_geracaosolicitacaocompra?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_geracaosolicitacaocompra?wsdl`

### `com.senior.g5.co.mcm.est.matrizdistribuicaocustos`

Este web service é responsável pela integração dos dados da Matriz de distribuição e seus respectivos itens. Além disso, é possível dar manutenção(Inserir/Alterar/Excluir) nestas tabelas.

**Portas:** `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_requisicoes?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_requisicoes?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_requisicoes?wsdl`

### `com.senior.g5.co.mcm.est.ordemcompra`

_(sem descrição)_

**Portas:** `aprovar`, `buscarPendentes_4`, `reprovar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_ordemcompra?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_ordemcompra?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_ordemcompra?wsdl`

### `com.senior.g5.co.mcm.est.precomediomovimento`

Este web service é responsável pelo envio das informações de preço médio de produtos na integração de sistema terceiros, possibilitando a consulta por diversos filtros, além de permitir a busca total de produtos, produtos que sofreram alterações em seu preço médio (por exemplo, fechamento de estoque), ou produtos que houveram movimentos de requisições.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_precomediomovimento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_precomediomovimento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mcm_est_precomediomovimento?wsdl`

### `com.senior.g5.co.mcm.est.requisicoes`

_(sem descrição)_

**Portas:** `Buscar`, `BuscarPendentesConfirmacao`, `Cancelar`, `Confirmar`, `ConsultarGeral`, `Exportar`, `RequisicaoAgrupada`, `RequisicaoAgrupadaComposta`, `RequisicaoIndividual`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_requisicoes?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_requisicoes?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_requisicoes?wsdl`

### `com.senior.g5.co.mcm.est.requisicoespendentes`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_requisicoespendentes?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_requisicoespendentes?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_requisicoespendentes?wsdl`

### `com.senior.g5.co.mcm.est.saldoestoque`

Web service responsável por exportar as informações referentes ao saldo em estoque para o produto/derivação/depósito, contendo além do saldo, os dados da última compra.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_saldoestoque?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_saldoestoque?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mcm_est_saldoestoque?wsdl`

### `com.senior.g5.co.mcm.est.saldoestoqueloteserie`

Web service responsável pela exportação dos dados dos lotes de produto com saldo disponível por lote e série.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_saldoestoqueloteserie?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_saldoestoqueloteserie?wsdl`

### `com.senior.g5.co.mcm.est.solicitacaocompra`

_(sem descrição)_

**Portas:** `Aprovar`, `BuscarPendentes_3`, `Cancelar`, `Reprovar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_est_solicitacaocompra?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_est_solicitacaocompra?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_est_solicitacaocompra?wsdl`

### `com.senior.g5.co.mcm.ven.analiseembarque`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_analiseembarque?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_analiseembarque?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_analiseembarque?wsdl`

### `com.senior.g5.co.mcm.ven.cartafrete`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_cartafrete?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_cartafrete?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_cartafrete?wsdl`

### `com.senior.g5.co.mcm.ven.cbsibs`

Permite realizar a simulação do calculo do CBS/IBS de um item, conforme parâmetrizações do ERP

**Portas:** `SimularCalculo`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_cbsibs?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_cbsibs?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mcm_ven_cbsibs?wsdl`

### `com.senior.g5.co.mcm.ven.conhecimentotransporte`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_conhecimentotransporte?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_conhecimentotransporte?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_conhecimentotransporte?wsdl`

### `com.senior.g5.co.mcm.ven.contratovenda`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_contratovenda?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_contratovenda?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_contratovenda?wsdl`

### `com.senior.g5.co.mcm.ven.divergenciaspedidonfvenda`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_divergenciaspedidonfvenda?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_divergenciaspedidonfvenda?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_divergenciaspedidonfvenda?wsdl`

### `com.senior.g5.co.mcm.ven.docdevolucaotransferencia`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_docdevolucaotransferencia?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_docdevolucaotransferencia?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_docdevolucaotransferencia?wsdl`

### `com.senior.g5.co.mcm.ven.embalagempfa`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_embalagempfa?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_embalagempfa?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_embalagempfa?wsdl`

### `com.senior.g5.co.mcm.ven.entregas`

_(sem descrição)_

**Portas:** `ExportarEntregaMercadoria`, `ImportarEntregaMercadoria`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_entregas?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_entregas?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_entregas?wsdl`

### `com.senior.g5.co.mcm.ven.faturas`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_faturas?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_faturas?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_faturas?wsdl`

### `com.senior.g5.co.mcm.ven.frete`

Este web service é utilizado na solução de integração do ERP (Gestão Empresarial | ERP) com o Gestão de Fretes.

**Portas:** `ExportarDadosCalculoFrete`, `ExportarNotaFiscal`, `ExportarPedidoCancelado`, `ImportarDadosCalculoFrete`, `TrocarTransportadora`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_frete?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_frete?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mcm_ven_frete?wsdl`

### `com.senior.g5.co.mcm.ven.gerardocumentos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_gerardocumentos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_gerardocumentos?wsdl`

### `com.senior.g5.co.mcm.ven.loteseriepfa`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_loteseriepfa?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_loteseriepfa?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_loteseriepfa?wsdl`

### `com.senior.g5.co.mcm.ven.manualpedidos`

Quando a chamada do identificador de regra VEN-135QTATE01 tiver como origem este web service, porta AtenderManualPedidos, a variável **VSTelaOrigem** terá o valor igual a **WEB**. Também estarão disponíveis as variáveis **VSNumAne** e **VSNumPFa** contendo, respectivamente, o número da análise/carga e o número da pré-fatura. Quando a chamada do web service for por meio da tela F135APM, a variável VSTelaOrigem terá valor igual a **F135APM**.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_manualpedidos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_manualpedidos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_manualpedidos?wsdl`

### `com.senior.g5.co.mcm.ven.notafiscal`

Importante

**Portas:** `GravarNotasFiscaisSaida`, `GravarNotasFiscaisSaidaVarejo`, `MovimentarEstoquePendente`, `MovimentarFinanceiroPendente`, `ObterFaturamento`, `SolicitarCancelamentoWms`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_notafiscal?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_notafiscal?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_notafiscal?wsdl`

### `com.senior.g5.co.mcm.ven.notafiscalservico`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_notafiscalservico?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_notafiscalservico?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_notafiscalservico?wsdl`

### `com.senior.g5.co.mcm.ven.notafiscalvenda`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_notafiscalvenda?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_notafiscalvenda?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_notafiscalvenda?wsdl`

### `com.senior.g5.co.mcm.ven.orcamento`

_(sem descrição)_

**Portas:** `CalculaImpostosOrcamento`, `CarregarOrcamentos`, `CarregarOrcamentos_3`, `GravarOrcamentos`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_orcamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_orcamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_orcamento?wsdl`

### `com.senior.g5.co.mcm.ven.pedidos`

_(sem descrição)_

**Portas:** `CalculaValoresItem`, `CancelarPedidosBloqueados`, `ExportarPedidos`, `ExportarResumoPedidos`, `GerarEmbalagemGrade`, `GravarPedidos`, `GravarPedidosEmGrade`, `InserirObservacoes`, `LiberarPedidosBloqueados`, `ObterItensPedido`, `ObterObservacoesPedido`, `ObterPedidosBloqueados`, `ReabilitarPedidosBloqueados`, `SimularFrete`, `SimularPedidos`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_pedidos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_pedidos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_pedidos?wsdl`

### `com.senior.g5.co.mcm.ven.prefatura`

Esse serviço permite exportar as pré-faturas do sistema..

**Portas:** `CancelarPreFatura`, `ExportaPreFatura`, `FormarEmbalagem`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_prefatura?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcm_ven_prefatura?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcm_ven_prefatura?wsdl`


## Módulo mct

### `com.senior.g5.co.mct.ctb.aglutinacaocomposicao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_aglutinacaocomposicao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_aglutinacaocomposicao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_ctb_aglutinacaocomposicao?wsdl`

### `com.senior.g5.co.mct.ctb.aglutinacaocontabil`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_aglutinacaocontabil?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_aglutinacaocontabil?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_ctb_aglutinacaocontabil?wsdl`

### `com.senior.g5.co.mct.ctb.apropriacaodoscustos`

O serviço de Apropriação dos Custos é usado para consultar a apropriação dos custos, retornando a participação em percentual de cada centro de custo e conta contábil.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_apropriacaodoscustos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_apropriacaodoscustos?wsdl`

### `com.senior.g5.co.mct.ctb.conciliacaosaldos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_conciliacaosaldos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_conciliacaosaldos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_ctb_conciliacaosaldos?wsdl`

### `com.senior.g5.co.mct.ctb.criteriodedistribuicao`

O serviço de Critério de Distribuição é usado para inserir, alterar e excluir critérios de distribuição, bem como suas definições utilizando a porta Integrar.

**Portas:** `Integrar_2`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_criteriodedistribuicao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_criteriodedistribuicao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_ctb_criteriodedistribuicao?wsdl`

### `com.senior.g5.co.mct.ctb.custoprodutoperiodo`

Este webservice irá exportar os registros adicionados na tela de Custo de produto por data (F075MES). Caso seja inserido/alterado/excluído algum produto, o mesmo será exportado pelo webservice.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_custoprodutoperiodo?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_custoprodutoperiodo?wsdl`

### `com.senior.g5.co.mct.ctb.exportacaoempresafilial`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_exportacaoempresafilial?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_exportacaoempresafilial?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_ctb_exportacaoempresafilial?wsdl`

### `com.senior.g5.co.mct.ctb.exportacaoorcado`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_exportacaoorcado?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_exportacaoorcado?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_ctb_exportacaoorcado?wsdl`

### `com.senior.g5.co.mct.ctb.exportacaoperiodoiniciallcto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_exportacaoperiodoiniciallcto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_exportacaoperiodoiniciallcto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_ctb_exportacaoperiodoiniciallcto?wsdl`

### `com.senior.g5.co.mct.ctb.exportacaoplanocontas`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_exportacaoplanocontas?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_exportacaoplanocontas?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_ctb_exportacaoplanocontas?wsdl`

### `com.senior.g5.co.mct.ctb.exportacaorealizado`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_exportacaorealizado?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_exportacaorealizado?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_ctb_exportacaorealizado?wsdl`

### `com.senior.g5.co.mct.ctb.gerarlotectb`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_gerarlotectb?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_gerarlotectb?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_ctb_gerarlotectb?wsdl`

### `com.senior.g5.co.mct.ctb.importacaolctctb`

Este web service permite importar os lançamentos contábeis para a Gestão de Contabilidade.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_importacaolctctb?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_importacaolctctb?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_ctb_importacaolctctb?wsdl`

### `com.senior.g5.co.mct.ctb.integracao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_integracao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_integracao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_ctb_integracao?wsdl`

### `com.senior.g5.co.mct.ctb.inversaogerencial`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_inversaogerencial?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_inversaogerencial?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_ctb_inversaogerencial?wsdl`

### `com.senior.g5.co.mct.ctb.orcamento`

Este web service realiza a importação de orçamentos contábeis.

**Portas:** `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_orcamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_orcamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_ctb_orcamento?wsdl`

### `com.senior.g5.co.mct.ctb.origemlancamentocontabil`

Realiza a exportação da lista de Origem de Lançamento Contábil para integração com outros sistemas. Não é obrigatório informar um parâmetro de entrada, pois quando ele não for informado será retornada a lista inteira da Origem de Lançamento Contábil. Ao definir uma origem especifica para consulta, será validado se a origem existe/é válida.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_origemlancamentocontabil?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_origemlancamentocontabil?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_ctb_origemlancamentocontabil?wsdl`

### `com.senior.g5.co.mct.ctb.planocontacontabil`

Realiza a exportação do Plano de Contas Contábeis para integração com outros sistemas.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_planocontacontabil?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_planocontacontabil?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_ctb_planocontacontabil?wsdl`

### `com.senior.g5.co.mct.ctb.processarlotectb`

_(sem descrição)_

**Portas:** `Integrar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_relacionamentocriteriodistribuicao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_relacionamentocriteriodistribuicao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_ctb_relacionamentocriteriodistribuicao?wsdl`

### `com.senior.g5.co.mct.ctb.saldocontabilpororigem`

O serviço de Relacionamento entre Conta Contábil X Centro de Custo para Distribuição é usado para inserir, alterar e excluir relacionamentos de contas contábeis/centros de custos e critérios utilizando a porta Integrar, podendo consolidar filiais. Além disso, a porta Exportar é responsável por exportar o saldo das contas contábeis do mês, agrupando por Empresa, Conta, Centro de Custo e Origem.

**Portas:** `Exportar`, `Integrar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_relacionamentocriteriodistribuicao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_relacionamentocriteriodistribuicao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_ctb_relacionamentocriteriodistribuicao?wsdl`

### `com.senior.g5.co.mct.ctb.visaocontabil`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_ctb_visaocontabil?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_ctb_visaocontabil?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_ctb_visaocontabil?wsdl`

### `com.senior.g5.co.mct.dimp`

Quando o parâmetro <excluirDados> não for informado na requisição ou for definido como "N - Não", o web service realizará a inserção dos dados na base. Quando o parâmetro for enviado com o valor "S - Sim", o web service excluirá os dados informados na requisição, desde que tenham sido gravados anteriormente.

**Portas:** `Inserir`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_dimp?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_dimp?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_dimp?wsdl`

### `com.senior.g5.co.mct.fci`

_(sem descrição)_

**Portas:** `Calcular`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_fci?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_fci?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_fci?wsdl`

### `com.senior.g5.co.mct.imp.arquivosfiscais.desif`

Destinado a geração de arquivos da DES-IF.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_arquivosfiscais_desif?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_arquivosfiscais_desif?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_arquivosfiscais_desif?wsdl`

### `com.senior.g5.co.mct.imp.arquivosfiscais.iss`

Destinado a geração de arquivos da DES-IF e ISS Municipal.

**Portas:** `Desif`, `Municipal`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_arquivosfiscais_iss?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_arquivosfiscais_iss?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_arquivosfiscais_iss?wsdl`

### `com.senior.g5.co.mct.imp.calculofiscal.apuracao`

Web service para processamento do cálculo dos impostos "65 - ISS Retido" e "72 - ISS Próprio das instituições financeiras".

**Portas:** `ISSProprioIF`, `ISSRetido`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_calculofiscal_apuracao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_calculofiscal_apuracao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_calculofiscal_apuracao?wsdl`

### `com.senior.g5.co.mct.imp.detalhamentoreceitasdeducoesexclusoespiscofins`

Permite a importação/exclusão de receitas/deduções e exclusões de PIS/COFINS. Ver também tela F660MBI.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_detalhamentoreceitasdeducoesexclusoespiscofins?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_detalhamentoreceitasdeducoesexclusoespiscofins?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_detalhamentoreceitasdeducoesexclusoespiscofins?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_escrituracao?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.integracao.guiarecolhimento`

Permite exportar e modificar Guias de Recolhimento, registrando impostos a recolher e seus pagamentos através de outros sistemas. O Web service possibilita consultar guias de recolhimento geradas na gestão de tributos e alterar campos relacionados ao pagamento.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_integracao_guiarecolhimento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_integracao_guiarecolhimento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_integracao_guiarecolhimento?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.integracao.notasfiscais`

Tem como objetivo fazer a integração dos documentos fiscais (notas fiscais de entrada, notas fiscais de saída e controle de embarque) das Gestões de Mercado e Suprimentos para a Gestão de Tributos, conforme é feito pela tela F660INT.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_integracao_notasfiscais?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_integracao_notasfiscais?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.integracao.producaoestoque`

Este web service integra para o sistema as informações das fichas técnicas reais e padrão, ordens de produção, produtos kit, remessas e retornos de industrialização, saldos em estoques e transferências entre produtos utilizadas para a geração do bloco K, do SPED Fiscal, da mesma forma que ocorre com a tela do sistema Integração da Produção e Estoque (F660ISP).

**Portas:** `IntegrarDesmontagemProdutos`, `IntegrarFichaTecnicaPadrao`, `IntegrarFichaTecnicaReal`, `IntegrarOrdemProducao`, `IntegrarProdutoKit`, `IntegrarRemessaIndRetorno`, `IntegrarReprocessos`, `IntegrarSaldoEstoque`, `IntegrarSaldosEstoqueProdutoKit`, `IntegrarTransferencia`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_integracao_producaoestoque?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_integracao_producaoestoque?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_escrituracao_integracao_producaoestoque?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamento.controleproducaousina.movimento`

Este web service permite a manutenção das informações que serão geradas nos arquivos do SPED Fiscal e SINTEGRA.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamento_controleproducaousina_movimento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamento_controleproducaousina_movimento?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.apontamentosproducao`

Este web service integra para o sistema as informações dos apontamentos da produção utilizados para a geração do bloco K, do SPED Fiscal, da mesma forma que ocorre com a tela do sistema Apontamentos da Produção (F660APP).

**Portas:** `AlterarApontamentoComponente`, `AlterarApontamentoProduzido`, `ExcluirApontamentoComponente`, `ExcluirApontamentoProduzido`, `IncluirApontamentoComponente`, `IncluirApontamentoProducao`, `Listar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_apontamentosproducao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_apontamentosproducao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_apontamentosproducao?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.correcaoapontamentos`

Este web service integra para o sistema as informações das correções de apontamentos utilizados para a geração do bloco K, do SPED Fiscal, da mesma forma que ocorre com a tela Correção de apontamentos (F660COR).

**Portas:** `AlterarCorrecaoApontamento`, `AlterarCorrecaoConsumo`, `ExcluirCorrecaoApontamento`, `ExcluirCorrecaoConsumo`, `IncluirCorrecaoApontamento`, `IncluirCorrecaoConsumo`, `Listar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_correcaoapontamentos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_correcaoapontamentos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_correcaoapontamentos?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.correcaoestoque`

Este web service integra para o sistema as informações das correções de estoque utilizados para a geração do bloco K, do SPED Fiscal, da mesma forma que ocorre com a tela Correção de Estoque (F660COE).

**Portas:** `Alterar`, `Excluir`, `Incluir`, `Listar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_correcaoestoque?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_correcaoestoque?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_correcaoestoque?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.desmontemercadoria`

Este web service integra para o sistema as informações de movimentos de desmontes de mercadorias utilizados para a geração do bloco K, do SPED Fiscal, da mesma forma que ocorre com a tela Desmonte de Mercadorias (F660DES).

**Portas:** `AlterarProdutoDestino`, `AlterarProdutoOrigem`, `ExcluirProdutoDestino`, `ExcluirProdutoOrigem`, `IncluirProdutoDestino`, `IncluirProdutoOrigem`, `Listar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_desmontemercadoria?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_desmontemercadoria?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_desmontemercadoria?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.fichatecnica`

Este web service integra para o sistema as informações das fichas técnicas utilizadas para a geração do bloco K, do SPED Fiscal, da mesma forma que ocorre com a tela do sistema Fichas Técnicas (F660FTE).

**Portas:** `AlterarComponente`, `ExcluirComponente`, `ExcluirFicha`, `IncluirComponente`, `IncluirFicha`, `Listar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_fichatecnica?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_fichatecnica?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_fichatecnica?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.periodoapuracao`

Este web service integra para o sistema as informações do período de apuração de estoque e produção para a geração do bloco K, do SPED Fiscal, da mesma forma que ocorre com a tela do sistema Períodos de Apurações de Estoques e Produção (F660PAE).

**Portas:** `Alterar`, `Excluir`, `Incluir`, `Listar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_periodoapuracao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_periodoapuracao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_periodoapuracao?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.producaoconjunta`

Permite importar, consultar e excluir ordens de produção conjunta.

**Portas:** `Consultar`, `Excluir`, `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_producaoconjunta?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_producaoconjunta?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_producaoconjunta?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.reprocessoordemproducao`

Este web service integra para o sistema as informações de ordens de produção de reprocesso utilizados para a geração do bloco K, do SPED Fiscal, da mesma forma que ocorre com a tela Reprocesso/Reparo de Mercadorias (F660REP).

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_reprocessoordemproducao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_reprocessoordemproducao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_reprocessoordemproducao?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.saldoestoque`

Este web service integra ao sistema as informações dos saldos em estoque para a geração do bloco K do SPED Fiscal, da mesma forma que ocorre com a tela do sistema Saldos de Estoques (F660EST). Através da porta Incluir, também será gravado o período de apuração do estoque (E660PAE), caso não exista um período previamente cadastrado com a data informada nos parâmetros do saldo de estoque.

**Portas:** `Alterar`, `Excluir`, `Incluir`, `Listar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_saldoestoque?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_saldoestoque?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_saldoestoque?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.transferenciaentreprodutos`

Este web service integra para o sistema as informações das transferências entre produtos para a geração do bloco K, do SPED Fiscal, da mesma forma que ocorre com a tela do sistema Transferência entre Produtos (F660TEP).

**Portas:** `Alterar`, `Excluir`, `Incluir`, `Listar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_transferenciaentreprodutos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_transferenciaentreprodutos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamento_producaoestoque_transferenciaentreprodutos?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamentos.estornolancamentos`

Este web service tem a finalidade de extornar notas fiscais de entrada e saída, controles de exportação, outros documentos, inventários fiscais e reduções Z de acordo com a porta utilizada.

**Portas:** `ExcluirControleExportacao`, `ExcluirInventarioFiscal`, `ExcluirNotaEntrada`, `ExcluirNotaSaida`, `ExcluirOutrosDocumentos`, `ExcluirReducaoZ`, `ExcluirTitulo`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamentos_estornolancamentos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamentos_estornolancamentos?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamentos.imobiliarias.locacaointermediacao`

Este web service permite a inclusão ou a exclusão de Locações/Intermediações.

**Portas:** `Excluir`, `Inserir`

**WSDL:**
- Síncrono: ``http://example.com/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_locacaointermediacao?wsdl``
- Assíncrono: ``http://example.com/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_locacaointermediacao?wsdl``
- Agendado: ``http://example.com/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_locacaointermediacao?wsdl``

### `com.senior.g5.co.mct.imp.escrituracao.lancamentos.imobiliarias.regimesespeciaistributacao`

O web service de incorporação imobiliária RET possui o objetivo de inserir ou excluir as informações da tela de incorporação imobiliária RET.

**Portas:** `Excluir`, `Inserir`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_regimesespeciaistributacao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_regimesespeciaistributacao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_regimesespeciaistributacao?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamentos.imobiliarias.unidadeimobiliariavendida`

Este web service permite inserir ou excluir as unidades imobiliárias vendidas.

**Portas:** `Excluir`, `Inserir`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_unidadeimobiliariavendida?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_unidadeimobiliariavendida?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_unidadeimobiliariavendida?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamentos.imobiliarias.unidadeimobiliariavendida.custoincorrido`

Este web service permite inserir e excluir os custos orçados de unidades imobiliárias vendidas. Pode ser informado o número do contrato ao invés do número do lançamento. Nesse caso, somente pode haver uma unidade imobiliária vendida vinculada ao número de contrato.

**Portas:** `Excluir`, `Inserir`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_unidadeimobiliariavendida_custoincorrido?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_unidadeimobiliariavendida_custoincorrido?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_unidadeimobiliariavendida_custoincorrido?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamentos.imobiliarias.unidadeimobiliariavendida.custoorcado`

Este web service permite inserir ou excluir os custos orçados de unidades imobiliárias vendidas. Pode ser informado o número do contrato ao invés do número do lançamento. Nesse caso, somente pode haver uma unidade imobiliária vendida vínculada a esse número de contrato.

**Portas:** `Excluir`, `Inserir`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_unidadeimobiliariavendida_custoorcado?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_unidadeimobiliariavendida_custoorcado?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_unidadeimobiliariavendida_custoorcado?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamentos.imobiliarias.unidadeimobiliariavendida.valoresrecebidos`

Este web service permite inserir ou excluir os valores recebidos de unidades imobiliárias vendidas. Pode ser informado o número do contrato ao invés do número do lançamento. Nesse caso, somente pode haver uma unidade imobiliária vendida vinculada ao número de contrato.

**Portas:** `Excluir`, `Inserir`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_unidadeimobiliariavendida_valoresrecebidos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_unidadeimobiliariavendida_valoresrecebidos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamentos_imobiliarias_unidadeimobiliariavendida_valoresrecebidos?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamentos.instituicoesfinaceiras.receitatributavelissqn`

Permite inserir, alterar e excluir os demonstrativos de apuração da receita tributável e ISSQN devido por substituto. Está relacionado à tela Demonstrativo apuração da receita tributável e ISSQN devido por substituto (F669DAR).

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamentos_instituicoesfinaceiras_receitatributavelissqn?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamentos_instituicoesfinaceiras_receitatributavelissqn?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamentos_instituicoesfinaceiras_receitatributavelissqn?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamentos.instituicoesfinaceiras.resumotarifas`

Permite inserir, alterar e excluir os resumos das movimentações de tarifas bancárias. Está relacionado à tela Resumo das tarifas bancárias (F660ATA).

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamentos_instituicoesfinaceiras_resumotarifas?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamentos_instituicoesfinaceiras_resumotarifas?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamentos_instituicoesfinaceiras_resumotarifas?wsdl`

### `com.senior.g5.co.mct.imp.escrituracao.lancamentos.titulos`

Web service destinado à integração dos títulos, rateios e baixas.

**Portas:** `Integrar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_escrituracao_lancamentos_titulos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_escrituracao_lancamentos_titulos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_escrituracao_lancamentos_titulos?wsdl`

### `com.senior.g5.co.mct.imp.esocial.aquisicaoprodutorrural`

Este web service permite o envio das nota fiscais de entrada para o sistema Gestão de Pessoas, para que sejam apresentadas ao Fisco no registro S-1250 do eSocial.  Lembrando que este registro é gerado apenas para a versão 2.5 do eSocial. Atende também a geração do registro R-2055 (Aquisição de Produção Rural) da EFD-Reinf (F690ILA).

**Portas:** `Exportar_2`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_esocial_aquisicaoprodutorrural?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_esocial_aquisicaoprodutorrural?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_esocial_aquisicaoprodutorrural?wsdl`

### `com.senior.g5.co.mct.imp.excluirnotafiscalentrada`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_excluirnotafiscalentrada?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_excluirnotafiscalentrada?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_excluirnotafiscalentrada?wsdl`

### `com.senior.g5.co.mct.imp.exclusaocalculo`

Permite realizar a exclusão das apurações de impostos.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_exclusaocalculo?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_exclusaocalculo?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_exclusaocalculo?wsdl`

### `com.senior.g5.co.mct.imp.gravarnotafiscalentrada`

Este web service apenas grava a nota fiscal do modulo de tributos, não atualiza o campo E440NFC.IntImp (Indica se a nota foi integrada com gestão de tributos).

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_gravarnotafiscalentrada?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_gravarnotafiscalentrada?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_gravarnotafiscalentrada?wsdl`

### `com.senior.g5.co.mct.imp.gravarnotafiscalsaida`

_(sem descrição)_

**Portas:** `Gravar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_gravarnotafiscalsaida?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_gravarnotafiscalsaida?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_gravarnotafiscalsaida?wsdl`

### `com.senior.g5.co.mct.imp.gravaroutrosdocumentos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_gravaroutrosdocumentos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_gravaroutrosdocumentos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_gravaroutrosdocumentos?wsdl`

### `com.senior.g5.co.mct.imp.importarcadastrocombustiveis`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_importarcadastrocombustiveis?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_importarcadastrocombustiveis?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_importarcadastrocombustiveis?wsdl`

### `com.senior.g5.co.mct.imp.importarcontrolesembarqueexportacao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_importarcontrolesembarqueexportacao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_importarcontrolesembarqueexportacao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_importarcontrolesembarqueexportacao?wsdl`

### `com.senior.g5.co.mct.imp.importarinventariofiscal`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_importarinventariofiscal?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_importarinventariofiscal?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_importarinventariofiscal?wsdl`

### `com.senior.g5.co.mct.imp.importarinventariofiscalsimplificado`

O Web services de inventário fiscal simplificado permite fazer a integração e realizar o cadastro automaticamente de Produtos, Clientes e Fornecedores.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Syn/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_importarinventariofiscalsimplificado?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Syn/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_importarinventariofiscalsimplificado?wsdl`

### `com.senior.g5.co.mct.imp.importarmovimentacaocombustiveis`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_importarmovimentacaocombustiveis?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_importarmovimentacaocombustiveis?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_importarmovimentacaocombustiveis?wsdl`

### `com.senior.g5.co.mct.imp.importarnotasfiscaisentrada`

_(sem descrição)_

**Portas:** `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_importarnotasfiscaisentrada?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_importarnotasfiscaisentrada?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_importarnotasfiscaisentrada?wsdl`

### `com.senior.g5.co.mct.imp.importarreducoesz`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_importarreducoesz?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_importarreducoesz?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_imp_importarreducoesz?wsdl`

### `com.senior.g5.co.mct.imp.notafiscalentradasimplificado`

Este web service permite importar notas fiscais de entrada diretamente para Tributos na Gestão de Controladoria, simplificando o processo quando o cliente tem somente a solução de Compliance Fiscal. É possível cadastrar/atualizar RAIS/CEP/Série Nota Fiscal/Fornecedor/Transportadora/Produto e Serviço, além da nota fiscal de entrada.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_notafiscalentradasimplificado?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_notafiscalentradasimplificado?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_notafiscalentradasimplificado?wsdl`

### `com.senior.g5.co.mct.imp.notafiscalsaidasimplificado`

Este web service facilita a importação de notas fiscais para a Gestão de Tributos quando o cliente tem somente a solução de Compliance Fiscal. A partir dele é possível cadastrar e atualizar RAIS, CEP, Série da Nota Fiscal, Cliente, Fornecedor, Transportadora, Produto e Serviço, além da nota fiscal de saída.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_notafiscalsaidasimplificado?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_notafiscalsaidasimplificado?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_notafiscalsaidasimplificado?wsdl`

### `com.senior.g5.co.mct.imp.processousuario`

Usado para integração com sistemas de workflow cujo objetivo é notificar o usuário caso ele não tenha permissão para executar um determinado processo.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_processousuario?wsdl``
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_processousuario?wsdl``
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_processousuario?wsdl``

### `com.senior.g5.co.mct.imp.reinf.comercializacaoproducaorural`

Este web service permite importar os documentos de comercialização de produção rural.

**WSDL:**
- Síncrono: ``http://servidor:1234/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_reinf_comercializacaoproducaorural?wsdl``
- Assíncrono: ``http://servidor:1234/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_reinf_comercializacaoproducaorural?wsdl``
- Agendado: ``http://servidor:1234/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_reinf_comercializacaoproducaorural?wsdl``

### `com.senior.g5.co.mct.imp.reinf.contribuicaoprevidenciaria`

Este web service permite importar e alterar os lançamentos.

**WSDL:**
- Síncrono: ``http://servidor:1234/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_reinf_contribuicaoprevidenciaria?wsdl``
- Assíncrono: ``http://servidor:1234/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_reinf_contribuicaoprevidenciaria?wsdl``
- Agendado: ``http://servidor:1234/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_reinf_contribuicaoprevidenciaria?wsdl``

### `com.senior.g5.co.mct.imp.reinf.detalhamentoretencoes`

Este web service permite inserir e alterar os lançamentos.

**WSDL:**
- Síncrono: ``http://servidor:1234/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_reinf_detalhamentoretencoes?wsdl``
- Assíncrono: ``http://servidor:1234/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_reinf_detalhamentoretencoes?wsdl``
- Agendado: ``http://servidor:1234/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_reinf_detalhamentoretencoes?wsdl``

### `com.senior.g5.co.mct.imp.reinf.entidadepromotoraespetaculodesportivo`

Este web service permite importar as entidades promotoras de espetáculos desportivos.

**WSDL:**
- Síncrono: ``http://servidor:1234/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_reinf_receitasrecebidas?wsdl``
- Assíncrono: ``http://servidor:1234/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_reinf_receitasrecebidas?wsdl``
- Agendado: ``http://servidor:1234/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_reinf_receitasrecebidas?wsdl``

### `com.senior.g5.co.mct.imp.reinf.importaraquisicaoproducaorural`

Esta rotina permite o registro das aquisições de produção rural na estrutura criada para o registro R-2055 (tela F690APR), seguindo o leiaute da tabela E690APR, e dos processos vinculados à aquisição, seguindo o leiaute da tabela E690PPR.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_reinf_importaraquisicaoproducaorural?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_reinf_importaraquisicaoproducaorural?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_reinf_importaraquisicaoproducaorural?wsdl`

### `com.senior.g5.co.mct.imp.reinf.receitasrecebidas`

Este web service permite importar as receitas recebidas.

**WSDL:**
- Síncrono: ``http://servidor:1234/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_reinf_receitasrecebidas?wsdl``
- Assíncrono: ``http://servidor:1234/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_reinf_receitasrecebidas?wsdl``
- Agendado: ``http://servidor:1234/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_reinf_receitasrecebidas?wsdl``

### `com.senior.g5.co.mct.imp.reinf.receitasrepassadas`

Este web service permite importar as receitas repassadas.

**WSDL:**
- Síncrono: ``http://servidor:1234/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_reinf_receitasrepassadas?wsdl``
- Assíncrono: ``http://servidor:1234/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_reinf_receitasrepassadas?wsdl``
- Agendado: ``http://servidor:1234/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_reinf_receitasrepassadas?wsdl``

### `com.senior.g5.co.mct.imp.reinf.retencaobeneficiarionaoidentificado`

Este web service tem por finalidade importar as retenções para beneficiários não identificados da tela R-4040 - Retenções de beneficiários não identificados (F690BNI) para a EFD-Reinf.

**Portas:** `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_reinf_retencaobeneficiarionaoidentificado?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_reinf_retencaobeneficiarionaoidentificado?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_reinf_retencaobeneficiarionaoidentificado?wsdl`

### `com.senior.g5.co.mct.imp.reinf.retencaopessoafisica`

Este web service tem por finalidade importar as retenções para pessoa física da tela R-4010 - Retenções na Fonte - Pessoa Fisica (F690RPF) para a EFD-Reinf.

**Portas:** `Excluir`, `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_reinf_retencaopessoafisica?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_reinf_retencaopessoafisica?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_reinf_retencaopessoafisica?wsdl`

### `com.senior.g5.co.mct.imp.reinf.retencaopessoajuridica`

Este web service tem por finalidade importar as retenções para pessoa jurídica da tela R-4020 - Retenções na Fonte - Pessoa Jurídica (F690RPJ) para a EFD-Reinf.

**Portas:** `Excluir`, `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_reinf_retencaopessoajuridica?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_reinf_retencaopessoajuridica?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_reinf_retencaopessoajuridica?wsdl`

### `com.senior.g5.co.mct.imp.reinf.retencaorecebimento`

Na porta Importar é possível incluir os registros R-4080 - Retenção no recebimento que vão ser apresentados na EFD-Reinf.

**Portas:** `Importar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_reinf_retencaorecebimento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_reinf_retencaorecebimento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_reinf_retencaorecebimento?wsdl`

### `com.senior.g5.co.mct.imp.reinf.servicosprestados`

Este web service permite importar os documentos de serviços prestados.

**WSDL:**
- Síncrono: ``http://servidor:1234/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_reinf_servicosprestados?wsdl``
- Assíncrono: ``http://servidor:1234/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_reinf_servicosprestados?wsdl``
- Agendado: ``http://servidor:1234/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_reinf_servicosprestados?wsdl``

### `com.senior.g5.co.mct.imp.reinf.servicostomados`

Este web service permite importar os documentos de serviços tomados.

**WSDL:**
- Síncrono: ``http://servidor:1234/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_reinf_servicostomadoss?wsdl``
- Assíncrono: ``http://servidor:1234/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_reinf_servicostomadoss?wsdl``
- Agendado: ``http://servidor:1234/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_reinf_servicostomadoss?wsdl``

### `com.senior.g5.co.mct.imp.rpa.exclusaolancamentos`

Permite excluir RPAs em lote ou individualizada na Gestão de Tributos.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_rpa_exclusaolancamentos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_rpa_exclusaolancamentos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_rpa_exclusaolancamentos?wsdl`

### `com.senior.g5.co.mct.imp.rpa.exportacaolancamentos`

Permite exportar RPAs em lote ou individualizada na Gestão de Tributos.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_rpa_exportacaolancamentos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_rpa_exportacaolancamentos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_rpa_exportacaolancamentos?wsdl`

### `com.senior.g5.co.mct.imp.rpa.importacaolancamentos`

Este web service permite importar RPAs em lote ou de forma individualizada na Gestão de Tributos.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_imp_rpa_importacaolancamentos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_imp_rpa_importacaolancamentos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_imp_rpa_importacaolancamentos?wsdl`

### `com.senior.g5.co.mct.pat.bem`

O serviço de bens é usado para permitir a exportação de registros com controle de integração e das localizações de um bem (por padrão, será exportada somente a ultima localização, utilizando a porta Exportar. Esse mesmo serviço também contém portas de consulta, que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar_5`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_pat_bem?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_pat_bem?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_pat_bem?wsdl`

### `com.senior.g5.co.mct.pat.bloquear`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_pat_bloquear?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_pat_bloquear?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_pat_bloquear?wsdl`

### `com.senior.g5.co.mct.pat.calculobem`

_(sem descrição)_

**Portas:** `Calcular_4`, `Excluir_3`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_pat_calculobem?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_pat_calculobem?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_pat_calculobem?wsdl`

### `com.senior.g5.co.mct.pat.conciliarsaldo`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_pat_conciliarsaldo?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_pat_conciliarsaldo?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_pat_conciliarsaldo?wsdl`

### `com.senior.g5.co.mct.pat.espbem`

O serviço de espécie de bens é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarEspBens`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_pat_espbem?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_pat_espbem?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_pat_espbem?wsdl`

### `com.senior.g5.co.mct.pat.importarbem`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_pat_importarbem?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_pat_importarbem?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_pat_importarbem?wsdl`

### `com.senior.g5.co.mct.pat.localizacaobem`

Exporta as informações de Cadastro de Locais (E674LOR), possibilitando que sistemas terceiros consigam ter acesso ao cadastro completo de locais.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_pat_localizacaobem?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_pat_localizacaobem?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mct_pat_localizacaobem?wsdl`

### `com.senior.g5.co.mct.pat.movimentarbens`

Este web service não permite nenhum tipo de movimentação que envolva quantidade. Isso ocorre pois ao realizar uma movimentação que envolva quantidade na tela Geração de Movimentos (F670MAN), o sistema abre a tela de localizações para que seja selecionada a quantidade/localização que será movimentada. No web service, esse tipo de situação não é permitida, pois não há como abrir a tela de localizações durante a execução.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mct_pat_movimentarbens?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mct_pat_movimentarbens?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mct_pat_movimentarbens?wsdl`


## Módulo mcu

### `com.senior.g5.co.mcu.ctc.consumossaldos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcu_ctc_consumossaldos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcu_ctc_consumossaldos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcu_ctc_consumossaldos?wsdl`

### `com.senior.g5.co.mcu.fpr.custopadrao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcu_fpr_custopadrao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcu_fpr_custopadrao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcu_fpr_custopadrao?wsdl`

### `com.senior.g5.co.mcu.fpr.fichatecnica`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mcu_fpr_fichatecnica?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mcu_fpr_fichatecnica?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mcu_fpr_fichatecnica?wsdl`


## Módulo mfi

### `com.senior.g5.co.mfi.cpa.alteratituloscp`

O serviço permite alterar títulos a pagar por lote.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_cpa_alteratituloscp?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_cpa_alteratituloscp?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_cpa_alteratituloscp?wsdl`

### `com.senior.g5.co.mfi.cpa.gerarcomissao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_cpa_gerarcomissao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_cpa_gerarcomissao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_cpa_gerarcomissao?wsdl`

### `com.senior.g5.co.mfi.cpa.titulos`

_(sem descrição)_

**Portas:** `BaixarTitulosCP`, `ConsultarCP`, `ConsultarTitulosAbertosCP`, `ConsultarTitulosCP`, `EntradaTitulosLoteCP`, `EstornoBaixaTitulosCP`, `ExcluirTitulosCP`, `ExportarBaixaTitulosPagarIntegracao`, `GerarBaixaAproveitamentoCP`, `GerarBaixaPorLoteCP`, `GravarTitulosCP`, `ProcessarAVM`, `ProcessarTitulosAVP`, `ProcessarVariacaoCambial`, `SubstituirTitulosCP`, `aprovarCP`, `buscarPendentesCP`, `reprovarCP`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_cpa_titulos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_cpa_titulos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_cpa_titulos?wsdl`

### `com.senior.g5.co.mfi.cre.alteratituloscr`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_cre_alteratituloscr?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_cre_alteratituloscr?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_cre_alteratituloscr?wsdl`

### `com.senior.g5.co.mfi.cre.instrucoesbancarias`

Este web service permite alterar os campos **SitItb, NumArb e RetIns** da tabela E310ITB. Disponível caso a proprietária do cliente tenha o módulo **FRCR** ou **FTON**.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_cre_instrucoesbancarias?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_cre_instrucoesbancarias?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mfi_cre_instrucoesbancarias?wsdl`

### `com.senior.g5.co.mfi.cre.titulos`

_(sem descrição)_

**Portas:** `AlteracaoParcialTitulosCR`, `BaixarTitulosCR`, `ConsultarTitulosAbertosCR`, `ConsultarTitulosCR`, `EntradaTitulosLoteCR`, `EstornoBaixaTitulosCR`, `ExcluirTitulosCR`, `ExportarBaixaTitulosReceberIntegração`, `ExportarBaixaTitulosReceberVenda`, `GerarBaixaAproveitamentoCR`, `GerarBaixaPorLoteCR`, `GravarTitulosCR`, `ProcessarAVM`, `ProcessarTitulosAVP`, `ProcessarVariacaoCambial`, `SubstituirTitulosCR`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_cre_titulos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_cre_titulos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_cre_titulos?wsdl`

### `com.senior.g5.co.mfi.pla.conciliacaosaldoscontasfinanceiras`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_pla_conciliacaosaldoscontasfinanceiras?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_pla_conciliacaosaldoscontasfinanceiras?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_pla_conciliacaosaldoscontasfinanceiras?wsdl`

### `com.senior.g5.co.mfi.pla.planofinanceiro`

Este web service realiza a consulta do plano financeiro.

**Portas:** `ConsultarGeral_2`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_prj_planofinanceiro?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_prj_planofinanceiro?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_prj_planofinanceiro?wsdl`

### `com.senior.g5.co.mfi.prj.alteraprazofase`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_alteraprazofase?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_alteraprazofase?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_alteraprazofase?wsdl`

### `com.senior.g5.co.mfi.prj.alteraprazoprojeto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_alteraprazoprojeto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_alteraprazoprojeto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_alteraprazoprojeto?wsdl`

### `com.senior.g5.co.mfi.prj.alteraprestacaocontas`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_alteraprestacaocontas?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_alteraprestacaocontas?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_alteraprestacaocontas?wsdl`

### `com.senior.g5.co.mfi.prj.alterasitsolicitacaoadt`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_alterasitsolicitacaoadt?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_alterasitsolicitacaoadt?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_alterasitsolicitacaoadt?wsdl`

### `com.senior.g5.co.mfi.prj.alterasituacaodaprestacao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_alterasituacaodaprestacao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_alterasituacaodaprestacao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_alterasituacaodaprestacao?wsdl`

### `com.senior.g5.co.mfi.prj.alterasituacaoprojeto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_alterasituacaoprojeto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_alterasituacaoprojeto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_alterasituacaoprojeto?wsdl`

### `com.senior.g5.co.mfi.prj.alterasolitacaoadiantamento`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_alterasolitacaoadiantamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_alterasolitacaoadiantamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_alterasolitacaoadiantamento?wsdl`

### `com.senior.g5.co.mfi.prj.aprovaprojeto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_aprovaprojeto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_aprovaprojeto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_aprovaprojeto?wsdl`

### `com.senior.g5.co.mfi.prj.aproveitamentodecreditoviaprestacao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_aproveitamentodecreditoviaprestacao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_aproveitamentodecreditoviaprestacao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_aproveitamentodecreditoviaprestacao?wsdl`

### `com.senior.g5.co.mfi.prj.atenderreabriritens`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_atenderReabrirItens?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_atenderReabrirItens?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_atenderReabrirItens?wsdl`

### `com.senior.g5.co.mfi.prj.buscacampoprojeto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_buscacampoprojeto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_buscacampoprojeto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_buscacampoprojeto?wsdl`

### `com.senior.g5.co.mfi.prj.buscaorcamentofisicoprojeto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_buscaorcamentofisicoprojeto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_buscaorcamentofisicoprojeto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_buscaorcamentofisicoprojeto?wsdl`

### `com.senior.g5.co.mfi.prj.buscaorcamentoprojeto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_buscaorcamentoprojeto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_buscaorcamentoprojeto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_buscaorcamentoprojeto?wsdl`

### `com.senior.g5.co.mfi.prj.buscaposicaofisicaprojeto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_buscaposicaofisicaprojeto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_buscaposicaofisicaprojeto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_buscaposicaofisicaprojeto?wsdl`

### `com.senior.g5.co.mfi.prj.buscaposicaofisicaprojetogrid`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_buscaposicaofisicaprojetogrid?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_buscaposicaofisicaprojetogrid?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_buscaposicaofisicaprojetogrid?wsdl`

### `com.senior.g5.co.mfi.prj.buscaposicaoprojeto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_buscaposicaoprojeto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_buscaposicaoprojeto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_buscaposicaoprojeto?wsdl`

### `com.senior.g5.co.mfi.prj.buscaposicaoprojetogrid`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_buscaposicaoprojetogrid?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_buscaposicaoprojetogrid?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_buscaposicaoprojetogrid?wsdl`

### `com.senior.g5.co.mfi.prj.buscasaldofinanceiroprojetogrid`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_buscasaldofinanceiroprojetogrid?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_buscasaldofinanceiroprojetogrid?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_buscasaldofinanceiroprojetogrid?wsdl`

### `com.senior.g5.co.mfi.prj.buscasaldofisicoprojetogrid`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_buscasaldofisicoprojetogrid?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_buscasaldofisicoprojetogrid?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_buscasaldofisicoprojetogrid?wsdl`

### `com.senior.g5.co.mfi.prj.cadastrainformacoesprojeto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_cadastrainformacoesprojeto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_cadastrainformacoesprojeto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_cadastrainformacoesprojeto?wsdl`

### `com.senior.g5.co.mfi.prj.cadastrofase`

_(sem descrição)_

**Portas:** `CadFase`, `CadFaseLote`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_cadastrofase?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_cadastrofase?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_cadastrofase?wsdl`

### `com.senior.g5.co.mfi.prj.cadastroobservacaoprestacaoctaadt`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_cadastroobservacaoprestacaoctaadt?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_cadastroobservacaoprestacaoctaadt?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_cadastroobservacaoprestacaoctaadt?wsdl`

### `com.senior.g5.co.mfi.prj.cadastroobservacaosolicitacaoadt`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_cadastroobservacaosolicitacaoadt?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_cadastroobservacaosolicitacaoadt?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_cadastroobservacaosolicitacaoadt?wsdl`

### `com.senior.g5.co.mfi.prj.cadastroparametrosoladiantamento`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_cadastroparametrosoladiantamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_cadastroparametrosoladiantamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_cadastroparametrosoladiantamento?wsdl`

### `com.senior.g5.co.mfi.prj.cadastroprojeto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_cadastroprojeto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_cadastroprojeto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_cadastroprojeto?wsdl`

### `com.senior.g5.co.mfi.prj.cadastroprotocolo`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_cadastroprotocolo?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_cadastroprotocolo?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_cadastroprotocolo?wsdl`

### `com.senior.g5.co.mfi.prj.cadastropublicoalvo`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_cadastropublicoalvo?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_cadastropublicoalvo?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_cadastropublicoalvo?wsdl`

### `com.senior.g5.co.mfi.prj.cadastroquestionario`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_cadastroquestionario?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_cadastroquestionario?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_cadastroquestionario?wsdl`

### `com.senior.g5.co.mfi.prj.cadastroremetentedesinatario`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_cadastroremetentedesinatario?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_cadastroremetentedesinatario?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_cadastroremetentedesinatario?wsdl`

### `com.senior.g5.co.mfi.prj.conciliacao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_conciliacao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_conciliacao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_conciliacao?wsdl`

### `com.senior.g5.co.mfi.prj.consultarecursosprevistosgrid`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_consultarecursosprevistosgrid?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_consultarecursosprevistosgrid?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_consultarecursosprevistosgrid?wsdl`

### `com.senior.g5.co.mfi.prj.defereprojeto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_defereprojeto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_defereprojeto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_defereprojeto?wsdl`

### `com.senior.g5.co.mfi.prj.devcreditoforviaprestacao`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_devcreditoforviaprestacao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_devcreditoforviaprestacao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_devcreditoforviaprestacao?wsdl`

### `com.senior.g5.co.mfi.prj.duplicacaoprojetos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_duplicacaoprojetos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_duplicacaoprojetos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_duplicacaoprojetos?wsdl`

### `com.senior.g5.co.mfi.prj.gerarorcamentofinanceiro`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_gerarorcamentofinanceiro?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_gerarorcamentofinanceiro?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_gerarorcamentofinanceiro?wsdl`

### `com.senior.g5.co.mfi.prj.gerarorcamentofinanceirogrid`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_gerarorcamentofinanceirogrid?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_gerarorcamentofinanceirogrid?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_gerarorcamentofinanceirogrid?wsdl`

### `com.senior.g5.co.mfi.prj.gerarorcamentofisico`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_gerarorcamentofisico?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_gerarorcamentofisico?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_gerarorcamentofisico?wsdl`

### `com.senior.g5.co.mfi.prj.gerarorcamentofisicogrid`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_gerarorcamentofisicogrid?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_gerarorcamentofisicogrid?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_gerarorcamentofisicogrid?wsdl`

### `com.senior.g5.co.mfi.prj.gerartituloadiantamento`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_gerartituloadiantamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_gerartituloadiantamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_gerartituloadiantamento?wsdl`

### `com.senior.g5.co.mfi.prj.incluiralteraitens`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_incluiralteraitens?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_incluiralteraitens?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_incluiralteraitens?wsdl`

### `com.senior.g5.co.mfi.prj.indefereprojeto`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_indefereprojeto?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_indefereprojeto?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_indefereprojeto?wsdl`

### `com.senior.g5.co.mfi.prj.lancamento`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_lancamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_lancamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_lancamento?wsdl`

### `com.senior.g5.co.mfi.prj.projetofase`

Esse web service exportará os projetos e fases, de acordo com os parâmetros informados.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_projetofase?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_projetofase?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mfi_prj_projetofase?wsdl`

### `com.senior.g5.co.mfi.prj.projetorecursos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_projetorecursos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_projetorecursos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_projetorecursos?wsdl`

### `com.senior.g5.co.mfi.prj.recursosprevistosgrid`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_recursosprevistosgrid?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_recursosprevistosgrid?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_recursosprevistosgrid?wsdl`

### `com.senior.g5.co.mfi.prj.registroocorrencia`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_registroocorrencia?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_registroocorrencia?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_registroocorrencia?wsdl`

### `com.senior.g5.co.mfi.prj.registroocorrenciaaprovacaobaixa`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_registroocorrenciaaprovacaobaixa?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_registroocorrenciaaprovacaobaixa?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_registroocorrenciaaprovacaobaixa?wsdl`

### `com.senior.g5.co.mfi.prj.relacionafasemunicipio`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_relacionafasemunicipio?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_relacionafasemunicipio?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_relacionafasemunicipio?wsdl`

### `com.senior.g5.co.mfi.prj.relacionamentosprojetos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_relacionamentosprojetos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_relacionamentosprojetos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_relacionamentosprojetos?wsdl`

### `com.senior.g5.co.mfi.prj.relacionaprojetomunicipio`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_relacionaprojetomunicipio?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_relacionaprojetomunicipio?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_relacionaprojetomunicipio?wsdl`

### `com.senior.g5.co.mfi.prj.relacionapublicoalvo`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_prj_relacionapublicoalvo?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_prj_relacionapublicoalvo?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_prj_relacionapublicoalvo?wsdl`

### `com.senior.g5.co.mfi.tes.contas`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_tes_contas?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_tes_contas?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_tes_contas?wsdl`

### `com.senior.g5.co.mfi.tes.creditofornecedor`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_tes_creditofornecedor?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_tes_creditofornecedor?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_tes_creditofornecedor?wsdl`

### `com.senior.g5.co.mfi.tes.extrato`

Este web service tem por objetivo a inclusão de extratos, visando atender a integração com sistemas terceiros. Disponível caso a proprietária do cliente tenha o módulo **FRCR** ou **FTON**.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_tes_extrato?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_tes_extrato?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mfi_tes_extrato?wsdl`

### `com.senior.g5.co.mfi.tes.lancamentos`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_tes_lancamentos?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_tes_lancamentos?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_tes_lancamentos?wsdl`

### `com.senior.g5.co.mfi.tes.movimentotesouraria`

_(sem descrição)_

**Portas:** `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_tes_movimentotesouraria?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_tes_movimentotesouraria?wsdl`

### `com.senior.g5.co.mfi.tes.transferenciatesouraria`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mfi_tes_transferenciatesouraria?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mfi_tes_transferenciatesouraria?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mfi_tes_transferenciatesouraria?wsdl`


## Módulo mmt

### `com.senior.g5.co.mmt.coleta`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mmt_coleta?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mmt_coleta?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mmt_coleta?wsdl`

### `com.senior.g5.co.mmt.equipamento`

_(sem descrição)_

**Portas:** `Inserir`, `VerificarDesuso`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mmt_equipamento?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mmt_equipamento?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mmt_equipamento?wsdl`

### `com.senior.g5.co.mmt.manutencao`

_(sem descrição)_

**Portas:** `Apontar`, `Solicitar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mmt_manutencao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mmt_manutencao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mmt_manutencao?wsdl`


## Módulo mpr

### `com.senior.g5.co.mpr.cha.apontamentoopmega`

Web service interno para integração com o aplicativo Aponta da MEGA.

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mpr_cha_apontamentoopmega?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mpr_cha_apontamentoopmega?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mpr_cha_apontamentoopmega?wsdl`

### `com.senior.g5.co.mpr.cha.baixacomponentemega`

Web service interno para Baixar Componentes de Ordens de Produção (MEGA).

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mpr_cha_baixacomponenteopmega?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mpr_cha_baixacomponenteopmega?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mpr_cha_baixacomponenteopmega?wsdl`

### `com.senior.g5.co.mpr.cha.movimentoop`

_(sem descrição)_

**Portas:** `Acertar`, `RecalculoTempo`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mpr_cha_movimentoop?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mpr_cha_movimentoop?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mpr_cha_movimentoop?wsdl`

### `com.senior.g5.co.mpr.cha.parada`

_(sem descrição)_

**Portas:** `Apontar`, `Programar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mpr_cha_parada?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mpr_cha_parada?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mpr_cha_parada?wsdl`

### `com.senior.g5.co.mpr.cha.separacao`

Atualizar a reserva/separação dos componentes da O.P.

**Portas:** `ReservaSeparacaoComponente`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mpr_cha_separacao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mpr_cha_separacao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mpr_cha_separacao?wsdl`

### `com.senior.g5.co.mpr.eng.leituraopremessaretorno`

_(sem descrição)_

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mpr_eng_leituraopremessaretorno?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mpr_eng_leituraopremessaretorno?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mpr_eng_leituraopremessaretorno?wsdl`

### `com.senior.g5.co.mpr.eng.modelo`

Nota

**Portas:** `ComponenteModelo`, `ConsumoComponente`, `DerivacaoModelo`, `Modelo`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mpr_eng_modelo?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mpr_eng_modelo?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_mpr_eng_modelo?wsdl`

### `com.senior.g5.co.mpr.pcp.ordemproducao`

Este web service chama a mesma rotina de geração de ordem de produção utilizada pela função programador GerarOP ou pela tela F910GPR e trata a geração de O.P. de forma detalhada.

**Portas:** `GerarOrdemProducaoPorProduto`, `GerarOrdemProducaoViaPedidoGrade`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_mpr_pcp_ordemproducao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_mpr_pcp_ordemproducao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_mpr_pcp_ordemproducao?wsdl`


## Módulo prj

### `com.senior.g5.co.prj.contaspagar`

O serviço de Contas a pagar é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_prj_contaspagar?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_prj_contaspagar?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_prj_contaspagar?wsdl`

### `com.senior.g5.co.prj.contasreceber`

O serviço de Contas a receber é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_prj_contasreceber?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_prj_contasreceber?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_prj_contasreceber?wsdl`

### `com.senior.g5.co.prj.tipostitulo`

Serviço para exportação de tipos de títulos no sistema, permitindo consultar, adicionar ou atualizar dados de tipos de títulos através de integração.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_prj_tipostitulo?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_prj_tipostitulo?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_prj_tipostitulo?wsdl`


## Módulo sgq

### `com.senior.g5.co.sgq.execucaoinspecao`

_(sem descrição)_

**Portas:** `Defeito`, `Execucao`, `Inspecao`, `Verificacao`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_sgq_execucaoinspecao?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_sgq_execucaoinspecao?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_sgq_execucaoinspecao?wsdl`


## Módulo utils

### `com.senior.g5.co.utils`

_(sem descrição)_

**Portas:** `GetLeafMenuItemsSet`, `GetMenuItems`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_utils?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_utils?wsdl`
- Agendado: `/g5-senior-services/sapiens_Scheduledcom_senior_g5_co_utils?wsdl`


## Módulo ven

### `com.senior.g5.co.ven.notafiscalsaida`

O serviço de Nota fiscal de saída é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`, `ExportarIntegracao`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ven_notafiscalsaida?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ven_notafiscalsaida?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ven_notafiscalsaida?wsdl`

### `com.senior.g5.co.ven.pedido`

O serviço de Pedido é usado para permitir a exportação de registros com controle de integração utilizando a porta exportar. Esse mesmo serviço também contém portas de consulta que permitem obter informações específicas da entidade principal, podendo realizar alguns filtros pré-definidos no serviço.

**Portas:** `ConsultarGeral`, `Exportar`

**WSDL:**
- Síncrono: `/g5-senior-services/sapiens_Synccom_senior_g5_co_ven_pedido?wsdl`
- Assíncrono: `/g5-senior-services/sapiens_Asynccom_senior_g5_co_ven_pedido?wsdl`
- Agendado: `/g5-senior-services/sapiens_Schedulecom_senior_g5_co_ven_pedido?wsdl`
