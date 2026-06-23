# Índice de Web Services internos da Senior

> Índice navegável de 434 web services do ERP Senior. Gerado por `scripts/buscar_ws.py --indice`.
> Detalhes (campos, envelopes, versões por porta): `python3 scripts/buscar_ws.py <pacote|porta>`.
> **[escrita]** = porta que cria/atualiza cadastro — prefira ao `INSERT` cru.

| Pacote (`interno.<pacote>`) | Portas de escrita (versão) | Demais portas |
| --- | --- | --- |
| `com.senior.g5.co.ast.ocorrencia` | `Importar`_1 | Exportar |
| `com.senior.g5.co.cad.agrupamentos` | — | Exportar, ConsultarGeral |
| `com.senior.g5.co.cad.cidades` | — | — |
| `com.senior.g5.co.cad.clientes` | — | Exportar, ConsultarCadastro, ConsultarFiscal, ConsultarGeral |
| `com.senior.g5.co.cad.condicaopagamento` | — | Exportar, ConsultarGeral |
| `com.senior.g5.co.cad.contribuinte` | — | — |
| `com.senior.g5.co.cad.deposito` | — | Exportar, ConsultarGeral |
| `com.senior.g5.co.cad.derivacao` | — | — |
| `com.senior.g5.co.cad.exportarrateio` | — | Exportar |
| `com.senior.g5.co.cad.familiaparametros` | — | — |
| `com.senior.g5.co.cad.familias` | — | Exportar, ConsultarGeral |
| `com.senior.g5.co.cad.filial` | — | Exportar, ConsultarCadastro, ConsultarFiscal, ConsultarGeral |
| `com.senior.g5.co.cad.formapagamento` | — | Exportar, ConsultarGeral |
| `com.senior.g5.co.cad.fornecedor` | — | Exportar, ConsultarCadastro, ConsultarFiscal, ConsultarGeral |
| `com.senior.g5.co.cad.parametrosintegracao` | `Gravar`_1 | ConsultarGeral, Exportar |
| `com.senior.g5.co.cad.produtos` | — | Exportar, ConsultarCadastro, ConsultarFiscal, ConsultarGeral |
| `com.senior.g5.co.cad.representante` | `Gravar`_1 | Exportar, ConsultarCadastro, ConsultarFiscal, ConsultarGeral |
| `com.senior.g5.co.cad.rotinasapiens` | — | — |
| `com.senior.g5.co.cad.servicos` | — | — |
| `com.senior.g5.co.cad.sittributarias.dispfiscal` | — | — |
| `com.senior.g5.co.cad.tabelapreco` | — | Exportar, ConsultarGeral, ConsultarTabela, ConsultarVigencia |
| `com.senior.g5.co.cad.transportadora` | — | Exportar, ConsultarCadastro, ConsultarGeral |
| `com.senior.g5.co.cad.unidadedemedida` | — | Exportar, ConsultarGeral |
| `com.senior.g5.co.ger.apr.niveisaprovacao` | — | — |
| `com.senior.g5.co.ger.cad.centrocusto` | — | Exportar, ConsultarGeral |
| `com.senior.g5.co.ger.cad.centrorecurso` | — | — |
| `com.senior.g5.co.ger.cad.clientes` | `GravarClientes`_5, `GravarContatos`_2 | ExcluirClientes, ObterCliente |
| `com.senior.g5.co.ger.cad.controladoria.tributos.dispositivosfiscais` | `InserirAlterar`_1 | Exportar, Excluir |
| `com.senior.g5.co.ger.cad.controladoria.tributos.unidadeimobiliaria` | `Inserir`_2, `Alterar` | Exportar, Excluir |
| `com.senior.g5.co.ger.cad.favorecido` | `GravarFavorecido`_1 | Exportar |
| `com.senior.g5.co.ger.cad.fornecedor` | — | — |
| `com.senior.g5.co.ger.cad.fornecedores` | `GravarContatos`_1, `GravarFornecedores`_8, `GravarDependentes`_2, `GravarReciboTerceiros`_1 | ExcluirFornecedores |
| `com.senior.g5.co.ger.cad.impostos` | — | — |
| `com.senior.g5.co.ger.cad.modeloplano` | — | ExcluirContas, GerarContas |
| `com.senior.g5.co.ger.cad.modeloveiculo` | `Importar`_1 | Excluir |
| `com.senior.g5.co.ger.cad.motivoparada` | — | — |
| `com.senior.g5.co.ger.cad.motivos` | — | — |
| `com.senior.g5.co.ger.cad.operador` | — | — |
| `com.senior.g5.co.ger.cad.produto` | `Cadastrar`_4 | ConverteUniMedida, Excluir |
| `com.senior.g5.co.ger.cad.produto.origemproduto` | — | — |
| `com.senior.g5.co.ger.cad.produto.safra` | — | — |
| `com.senior.g5.co.ger.cad.propriedadesubpropriedade` | — | Exportar, ConsultarGeral |
| `com.senior.g5.co.ger.cad.rpa.exclusaolotacao` | — | — |
| `com.senior.g5.co.ger.cad.rpa.exportacaolotacao` | — | — |
| `com.senior.g5.co.ger.cad.sacado` | `GravarSacado`_1 | ExportarSacado |
| `com.senior.g5.co.ger.cad.serienf` | — | — |
| `com.senior.g5.co.ger.cad.servico` | `Cadastrar`_4 | Excluir |
| `com.senior.g5.co.ger.cad.tipoveiculo` | `Importar`_1 | Excluir |
| `com.senior.g5.co.ger.cad.transportadora` | — | — |
| `com.senior.g5.co.ger.cad.usuario` | — | obterParametrosVendas, ExportarAbrangencia |
| `com.senior.g5.co.ger.cad.veiculo` | `Importar`_1 | Excluir |
| `com.senior.g5.co.ger.convenio` | — | Consumir, Estornar, ConsumirNoCupom, EstornarConvenioCupom |
| `com.senior.g5.co.ger.db` | — | GetDBDate, GetDBTime, GetDBInfo |
| `com.senior.g5.co.ger.mcserviceemail` | — | — |
| `com.senior.g5.co.ger.monitorprocesso` | — | Executar |
| `com.senior.g5.co.ger.portal.prop` | — | — |
| `com.senior.g5.co.ger.relatorio` | — | Executar, BloquetoFinanceiro |
| `com.senior.g5.co.ger.sid` | — | — |
| `com.senior.g5.co.int.agr.laudoclassificacao` | `GravarLaudoClassificacao`_1, `GravarTipoClassificacao`_1 | — |
| `com.senior.g5.co.int.agr.receituarioagronomico` | — | — |
| `com.senior.g5.co.int.cad.produtofornecedor` | — | — |
| `com.senior.g5.co.int.cre.titulo` | — | — |
| `com.senior.g5.co.int.eletronicos.documentos` | `ImportarRetornos` | Receber, EncerramentoMDFe, EmitirEventoComprovante, ConsultarEvento |
| `com.senior.g5.co.int.geral.cfop` | — | — |
| `com.senior.g5.co.int.geral.cotacoesmoedas` | — | — |
| `com.senior.g5.co.int.geral.cotacoesmoedashora` | — | — |
| `com.senior.g5.co.int.geral.exportacao` | — | ObterPendencias, Confirmar, ConfirmarSequencia |
| `com.senior.g5.co.int.geral.fotosprodutos` | — | — |
| `com.senior.g5.co.int.geral.intencaobaixatitulos` | — | Registrar, Cancelar |
| `com.senior.g5.co.int.geral.moedas` | — | — |
| `com.senior.g5.co.int.geral.relatorio` | — | IniciarGeracao, ObterSituacao |
| `com.senior.g5.co.int.geral.relatorio.davs` | — | — |
| `com.senior.g5.co.int.geral.relatorio.estoqueblocox` | — | — |
| `com.senior.g5.co.int.geral.relatorio.lfdp` | — | — |
| `com.senior.g5.co.int.geral.relatorio.registroj` | — | — |
| `com.senior.g5.co.int.geral.relatorio.sintegra` | — | — |
| `com.senior.g5.co.int.geral.relatorio.sped` | — | — |
| `com.senior.g5.co.int.geral.tributosprodutosservicovenda` | — | ExportarProduto, ExportarServico |
| `com.senior.g5.co.int.gs.produtogs` | — | — |
| `com.senior.g5.co.int.gs.titulo.receber` | — | — |
| `com.senior.g5.co.int.padrao.documentos` | — | Pedido, PedidoGrade |
| `com.senior.g5.co.int.padrao.pessoa` | — | — |
| `com.senior.g5.co.int.padrao.produtocaracteristica` | — | — |
| `com.senior.g5.co.int.tes.lancamentos` | — | — |
| `com.senior.g5.co.int.tms.cadastros` | — | ExportarCadastros, SolicitarCadastros |
| `com.senior.g5.co.int.varejo.agrupamento` | — | — |
| `com.senior.g5.co.int.varejo.analisecredito` | `ImportarSituacaoPedido`_1 | ExportarSituacaoPedido, ExportarCategorias |
| `com.senior.g5.co.int.varejo.atributovenda` | — | — |
| `com.senior.g5.co.int.varejo.autenticadores` | — | Consultar AutenticadoresCliente, Exportar |
| `com.senior.g5.co.int.varejo.bancos` | — | — |
| `com.senior.g5.co.int.varejo.cancelamentonotacompra` | — | — |
| `com.senior.g5.co.int.varejo.cartaopresente` | `IncluirCredito`_1, `GravarCartaoPresente`_1 | Gerar, CancelarOperacao, Consumir, Pagar, Consultar, ConsumirCartaoPresente, ConsultarCartaoPresente |
| `com.senior.g5.co.int.varejo.carteiracobranca` | — | — |
| `com.senior.g5.co.int.varejo.categoriaprodutos` | — | — |
| `com.senior.g5.co.int.varejo.cep` | `Importar`_1 | Exportar |
| `com.senior.g5.co.int.varejo.cfesat` | — | — |
| `com.senior.g5.co.int.varejo.cfop` | — | — |
| `com.senior.g5.co.int.varejo.chequepresente` | `Gravar`_1 | Consumo, Consultar |
| `com.senior.g5.co.int.varejo.classificacaofiscal` | — | — |
| `com.senior.g5.co.int.varejo.cliente` | `Importar`_8 | Exportar |
| `com.senior.g5.co.int.varejo.clientes` | `ImportarConsultaSPC`_1 | ExportarClientes, ConsultarCliente, ConsultarCredito, ConsultarHistoricoFinanceiro |
| `com.senior.g5.co.int.varejo.colecoes` | — | — |
| `com.senior.g5.co.int.varejo.comissaorepresentante` | — | — |
| `com.senior.g5.co.int.varejo.condicaopagamento` | — | — |
| `com.senior.g5.co.int.varejo.condicaopagamentovarejoem` | — | — |
| `com.senior.g5.co.int.varejo.configurarcampocliente` | — | — |
| `com.senior.g5.co.int.varejo.consumonumerosorte` | — | — |
| `com.senior.g5.co.int.varejo.contafinanceira` | — | — |
| `com.senior.g5.co.int.varejo.containternatesouraria` | — | — |
| `com.senior.g5.co.int.varejo.contratovenda` | — | — |
| `com.senior.g5.co.int.varejo.convenios` | — | Exportar, ExportarItens, Consultar |
| `com.senior.g5.co.int.varejo.cupomespelho` | — | — |
| `com.senior.g5.co.int.varejo.cupomfiscal` | `Gravar` | Consultar |
| `com.senior.g5.co.int.varejo.cupomfiscalve` | `Gravar` | Consultar |
| `com.senior.g5.co.int.varejo.definicaometa` | — | — |
| `com.senior.g5.co.int.varejo.depositos` | — | Exportar, ExportarLigacoesProdutosDepositos |
| `com.senior.g5.co.int.varejo.empresafilial` | — | — |
| `com.senior.g5.co.int.varejo.entrega` | — | — |
| `com.senior.g5.co.int.varejo.equipamento` | — | — |
| `com.senior.g5.co.int.varejo.escrituracao` | — | — |
| `com.senior.g5.co.int.varejo.estados` | — | — |
| `com.senior.g5.co.int.varejo.estoque` | — | — |
| `com.senior.g5.co.int.varejo.fabricante` | — | — |
| `com.senior.g5.co.int.varejo.familia` | — | — |
| `com.senior.g5.co.int.varejo.feriado` | — | — |
| `com.senior.g5.co.int.varejo.financeiras` | — | — |
| `com.senior.g5.co.int.varejo.formapagamentovarejoem` | — | — |
| `com.senior.g5.co.int.varejo.formaspagamento` | — | — |
| `com.senior.g5.co.int.varejo.fornecedores` | `Importar` | Exportar |
| `com.senior.g5.co.int.varejo.garantiaestentidanaovendida` | — | — |
| `com.senior.g5.co.int.varejo.grupofiscalproduto` | — | — |
| `com.senior.g5.co.int.varejo.historicofinanceiro` | — | — |
| `com.senior.g5.co.int.varejo.historicospc` | — | — |
| `com.senior.g5.co.int.varejo.importarferiado` | — | — |
| `com.senior.g5.co.int.varejo.integracoespendentes` | — | — |
| `com.senior.g5.co.int.varejo.inventario` | — | — |
| `com.senior.g5.co.int.varejo.ligacaocategoriasprodutousuarios` | — | — |
| `com.senior.g5.co.int.varejo.listapresente` | `Importar`_1 | Consultar |
| `com.senior.g5.co.int.varejo.marca` | — | — |
| `com.senior.g5.co.int.varejo.montagem` | `Importar` | Exportar, Reabilitar |
| `com.senior.g5.co.int.varejo.motivo` | — | — |
| `com.senior.g5.co.int.varejo.motoristas` | — | — |
| `com.senior.g5.co.int.varejo.movimentoestoque` | `Importar`_1 | Exportar, SaldoInicial |
| `com.senior.g5.co.int.varejo.naturezagasto` | — | — |
| `com.senior.g5.co.int.varejo.nfce` | `Gravar`, `ImportarNfce` | — |
| `com.senior.g5.co.int.varejo.notaautorizada` | — | — |
| `com.senior.g5.co.int.varejo.notacompra` | — | — |
| `com.senior.g5.co.int.varejo.notafiscal` | — | — |
| `com.senior.g5.co.int.varejo.notavenda` | — | — |
| `com.senior.g5.co.int.varejo.obteraliquotaicmspartilha` | — | — |
| `com.senior.g5.co.int.varejo.operacoesnotafiscal` | — | — |
| `com.senior.g5.co.int.varejo.operadorascartao` | — | — |
| `com.senior.g5.co.int.varejo.operadoratelefonia` | — | — |
| `com.senior.g5.co.int.varejo.oportunidadesvenda` | — | — |
| `com.senior.g5.co.int.varejo.ordemcompra` | — | — |
| `com.senior.g5.co.int.varejo.pais` | — | — |
| `com.senior.g5.co.int.varejo.parametrosfilial` | — | — |
| `com.senior.g5.co.int.varejo.pdv` | — | — |
| `com.senior.g5.co.int.varejo.pedido` | `AlterarTipoEntrega`, `GravarPedidosVarejo` | ConsultarStatus, AnularEntregaFuturaPeloCD, ExportarPedido |
| `com.senior.g5.co.int.varejo.pendenciacarga` | — | — |
| `com.senior.g5.co.int.varejo.perfilusuario` | — | — |
| `com.senior.g5.co.int.varejo.pessoas` | — | — |
| `com.senior.g5.co.int.varejo.portador` | — | — |
| `com.senior.g5.co.int.varejo.posicaocompras` | — | — |
| `com.senior.g5.co.int.varejo.produto` | — | Exportar, ExportarPrecoMedio, PosicaoEstoqueRede |
| `com.senior.g5.co.int.varejo.produtosservicos` | — | — |
| `com.senior.g5.co.int.varejo.quantidadedevolvida` | — | — |
| `com.senior.g5.co.int.varejo.reabilitacaonotacompra` | — | — |
| `com.senior.g5.co.int.varejo.recebimentostef` | — | — |
| `com.senior.g5.co.int.varejo.reducaoz` | — | — |
| `com.senior.g5.co.int.varejo.relatorio.davs` | — | — |
| `com.senior.g5.co.int.varejo.relatorio.estoque` | — | — |
| `com.senior.g5.co.int.varejo.relatorio.meiospagamento` | — | — |
| `com.senior.g5.co.int.varejo.relatorio.u1` | — | — |
| `com.senior.g5.co.int.varejo.remessa` | — | — |
| `com.senior.g5.co.int.varejo.representantes` | — | — |
| `com.senior.g5.co.int.varejo.restricaodestinatario` | — | Exportar |
| `com.senior.g5.co.int.varejo.retornoautenticadoresexternocreditos` | — | — |
| `com.senior.g5.co.int.varejo.retornointegracao` | — | — |
| `com.senior.g5.co.int.varejo.sacado` | — | — |
| `com.senior.g5.co.int.varejo.seguradora` | — | — |
| `com.senior.g5.co.int.varejo.seguroparcelaprotegidanaovendido` | — | — |
| `com.senior.g5.co.int.varejo.seguros` | — | — |
| `com.senior.g5.co.int.varejo.serienf` | — | — |
| `com.senior.g5.co.int.varejo.servico` | — | — |
| `com.senior.g5.co.int.varejo.servicofrete` | `Importar` | Exportar, Reabilitar |
| `com.senior.g5.co.int.varejo.tabelaibpt` | — | — |
| `com.senior.g5.co.int.varejo.tabelajuros` | — | — |
| `com.senior.g5.co.int.varejo.tabelaprecofrete` | — | — |
| `com.senior.g5.co.int.varejo.tabelaspreco` | — | — |
| `com.senior.g5.co.int.varejo.tabelasprecove` | — | — |
| `com.senior.g5.co.int.varejo.tabelastributos` | — | — |
| `com.senior.g5.co.int.varejo.tipotitulo` | — | — |
| `com.senior.g5.co.int.varejo.titulocredito` | — | — |
| `com.senior.g5.co.int.varejo.titulos` | `GravarTitulosCPVarejo`, `ImportarTitulosReceber`, `ImportarBaixaTitulosReceber`_1, `AlterarTitulosReceber`, `AlterarTitulosPagar`_1 | ExportarTitulosCP, ConsultarTitulosCP, BaixarTitulosCPVarejo, ExportarBaixaTitulosCP, SubstituirTitulosCPVarejo, SubstituirTitulosCRVarejo, AproveitamentoCreditoCPVarejo, BaixaCompensacaoCPCRVarejo, ExportarTitulosReceber, ExportarBaixaTitulosReceber, EstornoBaixaTitulosCRVarejo, EstornoBaixaTitulosCPVarejo |
| `com.senior.g5.co.int.varejo.titulosreceber` | — | Consultar |
| `com.senior.g5.co.int.varejo.transportadoras` | `Importar`_1 | Exportar |
| `com.senior.g5.co.int.varejo.tributos` | — | ExportarSintegra, ExportarSped |
| `com.senior.g5.co.int.varejo.unidademedida` | — | — |
| `com.senior.g5.co.int.varejo.usuarios` | — | — |
| `com.senior.g5.co.int.varejo.usuariosxprodutos` | — | — |
| `com.senior.g5.co.int.varejo.vendatitulo` | — | — |
| `com.senior.g5.co.int.varejo.vendedoresusuarios` | — | — |
| `com.senior.g5.co.int.varejo.verbacompra` | `Importar`_1 | Exportar |
| `com.senior.g5.co.int.venda.cartadecorrecao` | — | — |
| `com.senior.g5.co.int.venda.documentofiscal` | — | CalcularRetencoes, Cancelar, Emitir, EmitirCartaCorrecao, EmitirReferenciado, Imprimir |
| `com.senior.g5.co.int.vetorh.abrangencia` | — | — |
| `com.senior.g5.co.int.vetorh.centrodecustos` | — | — |
| `com.senior.g5.co.int.vetorh.complementohistoricopadrao` | — | — |
| `com.senior.g5.co.int.vetorh.fornecedores` | — | — |
| `com.senior.g5.co.int.vetorh.titulos` | — | — |
| `com.senior.g5.co.lgpd` | — | Excluir, Exportar |
| `com.senior.g5.co.mcm.cpr.aprovarcotacoes` | — | — |
| `com.senior.g5.co.mcm.cpr.contratocompra` | — | — |
| `com.senior.g5.co.mcm.cpr.cotacoes` | — | — |
| `com.senior.g5.co.mcm.cpr.cotacoespendentes` | — | — |
| `com.senior.g5.co.mcm.cpr.manifestacaodestinatario` | — | — |
| `com.senior.g5.co.mcm.cpr.nfdevolucaovianfsaida` | — | — |
| `com.senior.g5.co.mcm.cpr.nfentradatransfvianfsaida` | — | — |
| `com.senior.g5.co.mcm.cpr.notafiscal` | `GravarNotasFiscaisEntrada` | ReabilitaCancelaNota, FecharNota, DevolverCupom |
| `com.senior.g5.co.mcm.cpr.notafiscalentrada` | — | Exportar, ConsultarGerar |
| `com.senior.g5.co.mcm.cpr.ordemcompra` | — | — |
| `com.senior.g5.co.mcm.cpr.pesagemviabalancacontrato` | — | — |
| `com.senior.g5.co.mcm.cpr.recebimentoeletronico` | — | — |
| `com.senior.g5.co.mcm.cpr.resumoextratoprodutor` | — | — |
| `com.senior.g5.co.mcm.est.analiserepestoqueagrupada` | — | — |
| `com.senior.g5.co.mcm.est.aprovarrequisicoes` | — | — |
| `com.senior.g5.co.mcm.est.assistencia` | — | — |
| `com.senior.g5.co.mcm.est.calculoconsumomedio` | — | — |
| `com.senior.g5.co.mcm.est.contageminventario` | — | — |
| `com.senior.g5.co.mcm.est.embalagemestoque` | — | — |
| `com.senior.g5.co.mcm.est.estoques` | — | — |
| `com.senior.g5.co.mcm.est.finalizacaoinventario` | — | — |
| `com.senior.g5.co.mcm.est.finalizacaoinventariogernota` | — | — |
| `com.senior.g5.co.mcm.est.geracaoinventario` | — | — |
| `com.senior.g5.co.mcm.est.geracaosolicitacaocompra` | — | — |
| `com.senior.g5.co.mcm.est.matrizdistribuicaocustos` | `Importar` | — |
| `com.senior.g5.co.mcm.est.ordemcompra` | — | buscarPendentes, aprovar, reprovar |
| `com.senior.g5.co.mcm.est.precomediomovimento` | — | — |
| `com.senior.g5.co.mcm.est.requisicoes` | — | Cancelar, BuscarPendentesConfirmacao, Buscar, Confirmar, RequisicaoIndividual, RequisicaoAgrupada, RequisicaoAgrupadaComposta, ConsultarGeral, Exportar |
| `com.senior.g5.co.mcm.est.requisicoespendentes` | — | — |
| `com.senior.g5.co.mcm.est.saldoestoque` | — | — |
| `com.senior.g5.co.mcm.est.saldoestoqueloteserie` | — | — |
| `com.senior.g5.co.mcm.est.solicitacaocompra` | — | BuscarPendentes, Aprovar, Reprovar, Cancelar |
| `com.senior.g5.co.mcm.ven.analiseembarque` | — | — |
| `com.senior.g5.co.mcm.ven.cartafrete` | — | — |
| `com.senior.g5.co.mcm.ven.cbsibs` | — | SimularCalculo |
| `com.senior.g5.co.mcm.ven.conhecimentotransporte` | — | — |
| `com.senior.g5.co.mcm.ven.contratovenda` | — | — |
| `com.senior.g5.co.mcm.ven.divergenciaspedidonfvenda` | — | — |
| `com.senior.g5.co.mcm.ven.docdevolucaotransferencia` | — | — |
| `com.senior.g5.co.mcm.ven.embalagempfa` | — | — |
| `com.senior.g5.co.mcm.ven.entregas` | `ImportarEntregaMercadoria`_1 | ExportarEntregaMercadoria |
| `com.senior.g5.co.mcm.ven.faturas` | — | — |
| `com.senior.g5.co.mcm.ven.frete` | — | — |
| `com.senior.g5.co.mcm.ven.gerardocumentos` | — | — |
| `com.senior.g5.co.mcm.ven.loteseriepfa` | — | — |
| `com.senior.g5.co.mcm.ven.manualpedidos` | — | — |
| `com.senior.g5.co.mcm.ven.notafiscal` | `GravarNotasFiscaisSaida`, `GravarNotasFiscaisSaidaVarejo`_5 | ObterFaturamento, MovimentarEstoquePendente, MovimentarFinanceiroPendente, SolicitarCancelamentoWms |
| `com.senior.g5.co.mcm.ven.notafiscalservico` | — | — |
| `com.senior.g5.co.mcm.ven.notafiscalvenda` | — | — |
| `com.senior.g5.co.mcm.ven.orcamento` | `GravarOrcamentos`_1 | CalculaImpostosOrcamento, CarregarOrcamentos |
| `com.senior.g5.co.mcm.ven.pedidos` | `GravarPedidos`, `GravarPedidosEmGrade`_3, `InserirObservacoes`_1 | ExportarPedidos, ExportarResumoPedidos, CalculaValoresItem, ObterPedidosBloqueados, ObterItensPedido, LiberarPedidosBloqueados, ReabilitarPedidosBloqueados, CancelarPedidosBloqueados, ObterObservacoesPedido, SimularPedidos, GerarEmbalagemGrade, SimularFrete |
| `com.senior.g5.co.mcm.ven.prefatura` | — | ExportaPreFatura, FormarEmbalagem, CancelarPreFatura |
| `com.senior.g5.co.mct.ctb. relacionamentocriteriodistribuicao` | — | — |
| `com.senior.g5.co.mct.ctb.aglutinacaocomposicao` | — | — |
| `com.senior.g5.co.mct.ctb.aglutinacaocontabil` | — | — |
| `com.senior.g5.co.mct.ctb.apropriacaodoscustos` | — | — |
| `com.senior.g5.co.mct.ctb.conciliacaosaldos` | — | — |
| `com.senior.g5.co.mct.ctb.criteriodedistribuicao` | — | — |
| `com.senior.g5.co.mct.ctb.custoprodutoperiodo` | — | — |
| `com.senior.g5.co.mct.ctb.exportacaoempresafilial` | — | — |
| `com.senior.g5.co.mct.ctb.exportacaoorcado` | — | — |
| `com.senior.g5.co.mct.ctb.exportacaoperiodoiniciallcto` | — | — |
| `com.senior.g5.co.mct.ctb.exportacaoplanocontas` | — | — |
| `com.senior.g5.co.mct.ctb.exportacaorealizado` | — | — |
| `com.senior.g5.co.mct.ctb.gerarlotectb` | — | — |
| `com.senior.g5.co.mct.ctb.importacaolctctb` | — | — |
| `com.senior.g5.co.mct.ctb.integracao` | — | — |
| `com.senior.g5.co.mct.ctb.inversaogerencial` | — | — |
| `com.senior.g5.co.mct.ctb.orcamento` | — | — |
| `com.senior.g5.co.mct.ctb.processarlotectb` | — | — |
| `com.senior.g5.co.mct.ctb.saldocontabilpororigem` | — | — |
| `com.senior.g5.co.mct.ctb.visaocontabil` | — | — |
| `com.senior.g5.co.mct.dimp` | — | — |
| `com.senior.g5.co.mct.fci` | — | Calcular, Exportar |
| `com.senior.g5.co.mct.imp.arquivosfiscais.iss` | — | — |
| `com.senior.g5.co.mct.imp.calculofiscal.apuracao` | — | — |
| `com.senior.g5.co.mct.imp.escrituracao` | — | — |
| `com.senior.g5.co.mct.imp.escrituracao.integracao.guiarecolhimento` | — | — |
| `com.senior.g5.co.mct.imp.escrituracao.integracao.notasfiscais` | — | — |
| `com.senior.g5.co.mct.imp.escrituracao.integracao.producaoestoque` | — | IntegrarOrdemProducao, IntegrarRemessaIndRetorno, IntegrarSaldoEstoque, IntegrarSaldosEstoqueProdutoKit, IntegrarFichaTecnicaPadrao, IntegrarFichaTecnicaReal, IntegrarTransferencia, IntegrarProdutoKit, IntegrarDesmontagemProdutos, IntegrarReprocessos |
| `com.senior.g5.co.mct.imp.escrituracao.lancamento.controleproducaousina.movimento` | — | — |
| `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.apontamentosproducao` | `AlterarApontamentoComponente`_1, `AlterarApontamentoProduzido`_1, `IncluirApontamentoComponente`_1, `IncluirApontamentoProducao`_1 | ExcluirApontamentoComponente, ExcluirApontamentoProduzido, Listar |
| `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.correcaoapontamentos` | `AlterarCorrecaoApontamento`_1, `AlterarCorrecaoConsumo`_1, `IncluirCorrecaoApontamento`_1, `IncluirCorrecaoConsumo`_1 | ExcluirCorrecaoApontamento, ExcluirCorrecaoConsumo, Listar |
| `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.correcaoestoque` | `Alterar`_1, `Incluir`_1 | Excluir, Listar |
| `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.desmontemercadoria` | `AlterarProdutoDestino`_1, `AlterarProdutoOrigem`_1, `IncluirProdutoDestino`_1, `IncluirProdutoOrigem`_1 | ExcluirProdutoDestino, ExcluirProdutoOrigem, Listar |
| `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.fichatecnica` | `AlterarComponente`_1, `IncluirComponente`_1, `IncluirFicha`_1 | ExcluirComponente, ExcluirFicha, Listar |
| `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.periodoapuracao` | `Alterar`_1, `Incluir`_1 | Excluir, Listar |
| `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.producaoconjunta` | `Importar`_1 | Consultar, Excluir |
| `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.reprocessoordemproducao` | — | — |
| `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.saldoestoque` | `Alterar`_1, `Incluir`_2 | Excluir, Listar |
| `com.senior.g5.co.mct.imp.escrituracao.lancamento.producaoestoque.transferenciaentreprodutos` | `Alterar`_1, `Incluir`_1 | Excluir, Listar |
| `com.senior.g5.co.mct.imp.escrituracao.lancamentos.estornolancamentos` | — | ExcluirNotaEntrada, ExcluirNotaSaida, ExcluirControleExportacao, ExcluirOutrosDocumentos, ExcluirInventarioFiscal, ExcluirReducaoZ, ExcluirTitulo |
| `com.senior.g5.co.mct.imp.escrituracao.lancamentos.imobiliarias.locacaointermediacao` | `Inserir`_1 | Excluir |
| `com.senior.g5.co.mct.imp.escrituracao.lancamentos.imobiliarias.regimesespeciaistributacao` | `Inserir`_1 | Excluir |
| `com.senior.g5.co.mct.imp.escrituracao.lancamentos.imobiliarias.unidadeimobiliariavendida` | `Inserir`_1 | Excluir |
| `com.senior.g5.co.mct.imp.escrituracao.lancamentos.imobiliarias.unidadeimobiliariavendida.custoincorrido` | `Inserir`_1 | Excluir |
| `com.senior.g5.co.mct.imp.escrituracao.lancamentos.imobiliarias.unidadeimobiliariavendida.custoorcado` | `Inserir`_1 | Excluir |
| `com.senior.g5.co.mct.imp.escrituracao.lancamentos.imobiliarias.unidadeimobiliariavendida.valoresrecebidos` | `Inserir`_1 | Excluir |
| `com.senior.g5.co.mct.imp.escrituracao.lancamentos.titulos` | — | — |
| `com.senior.g5.co.mct.imp.esocial.aquisicaoprodutorrural` | — | — |
| `com.senior.g5.co.mct.imp.excluirnotafiscalentrada` | — | — |
| `com.senior.g5.co.mct.imp.exclusaocalculo` | — | — |
| `com.senior.g5.co.mct.imp.gravarnotafiscalentrada` | — | — |
| `com.senior.g5.co.mct.imp.gravarnotafiscalsaida` | — | — |
| `com.senior.g5.co.mct.imp.gravaroutrosdocumentos` | — | — |
| `com.senior.g5.co.mct.imp.importarcadastrocombustiveis` | — | — |
| `com.senior.g5.co.mct.imp.importarcontrolesembarqueexportacao` | — | — |
| `com.senior.g5.co.mct.imp.importarinventariofiscal` | — | — |
| `com.senior.g5.co.mct.imp.importarinventariofiscalsimplificado` | — | — |
| `com.senior.g5.co.mct.imp.importarmovimentacaocombustiveis` | — | — |
| `com.senior.g5.co.mct.imp.importarnotasfiscaisentrada` | — | — |
| `com.senior.g5.co.mct.imp.importarreducoesz` | — | — |
| `com.senior.g5.co.mct.imp.notafiscalentradasimplificado` | — | — |
| `com.senior.g5.co.mct.imp.notafiscalsaidasimplificado` | — | — |
| `com.senior.g5.co.mct.imp.reinf.comercializacaoproducaorural` | — | — |
| `com.senior.g5.co.mct.imp.reinf.contribuicaoprevidenciaria` | — | — |
| `com.senior.g5.co.mct.imp.reinf.detalhamentoretencoes` | — | — |
| `com.senior.g5.co.mct.imp.reinf.entidadepromotoraespetaculodesportivo` | — | — |
| `com.senior.g5.co.mct.imp.reinf.importaraquisicaoproducaorural` | — | — |
| `com.senior.g5.co.mct.imp.reinf.receitasrecebidas` | — | — |
| `com.senior.g5.co.mct.imp.reinf.receitasrepassadas` | — | — |
| `com.senior.g5.co.mct.imp.reinf.retencaobeneficiarionaoidentificado` | — | — |
| `com.senior.g5.co.mct.imp.reinf.retencaopessoafisica` | — | — |
| `com.senior.g5.co.mct.imp.reinf.retencaopessoajuridica` | — | — |
| `com.senior.g5.co.mct.imp.reinf.retencaorecebimento` | — | — |
| `com.senior.g5.co.mct.imp.reinf.servicosprestados` | — | — |
| `com.senior.g5.co.mct.imp.reinf.servicostomados` | — | — |
| `com.senior.g5.co.mct.imp.rpa.exclusaolancamentos` | — | — |
| `com.senior.g5.co.mct.imp.rpa.exportacaolancamentos` | — | — |
| `com.senior.g5.co.mct.imp.rpa.importacaolancamentos` | — | — |
| `com.senior.g5.co.mct.pat.bem` | — | — |
| `com.senior.g5.co.mct.pat.bloquear` | — | — |
| `com.senior.g5.co.mct.pat.calculobem` | — | Calcular, Excluir |
| `com.senior.g5.co.mct.pat.conciliarsaldo` | — | — |
| `com.senior.g5.co.mct.pat.espbem` | — | — |
| `com.senior.g5.co.mct.pat.importarbem` | — | — |
| `com.senior.g5.co.mct.pat.localizacaobem` | — | — |
| `com.senior.g5.co.mct.pat.movimentarbens` | — | — |
| `com.senior.g5.co.mcu.ctc.consumossaldos` | — | — |
| `com.senior.g5.co.mcu.fpr.custopadrao` | — | — |
| `com.senior.g5.co.mcu.fpr.fichatecnica` | — | — |
| `com.senior.g5.co.mfi.cpa.alteratituloscp` | — | — |
| `com.senior.g5.co.mfi.cpa.gerarcomissao` | — | — |
| `com.senior.g5.co.mfi.cpa.titulos` | `GravarTitulosCP`_4 | ConsultarTitulosCP, ConsultarCP, ConsultarTitulosAbertosCP, EntradaTitulosLoteCP, BaixarTitulosCP, ExportarBaixaTitulosPagarIntegracao, ExcluirTitulosCP, SubstituirTitulosCP, GerarBaixaAproveitamentoCP, GerarBaixaPorLoteCP, EstornoBaixaTitulosCP, buscarPendentesCP, aprovarCP, reprovarCP, ProcessarAVM, ProcessarVariacaoCambial, ProcessarTitulosAVP |
| `com.senior.g5.co.mfi.cre.alteratituloscr` | — | — |
| `com.senior.g5.co.mfi.cre.titulos` | `GravarTitulosCR`_2 | ConsultarTitulosCR, ConsultarTitulosAbertosCR, EntradaTitulosLoteCR, BaixarTitulosCR, ExcluirTitulosCR, SubstituirTitulosCR, GerarBaixaAproveitamentoCR, GerarBaixaPorLoteCR, EstornoBaixaTitulosCR, ExportarBaixaTitulosReceberVenda, ExportarBaixaTitulosReceberIntegração, ProcessarAVM, ProcessarVariacaoCambial, ProcessarTitulosAVP, AlteracaoParcialTitulosCR |
| `com.senior.g5.co.mfi.pla.conciliacaosaldoscontasfinanceiras` | — | — |
| `com.senior.g5.co.mfi.pla.planofinanceiro` | — | — |
| `com.senior.g5.co.mfi.prj.alteraprazofase` | — | — |
| `com.senior.g5.co.mfi.prj.alteraprazoprojeto` | — | — |
| `com.senior.g5.co.mfi.prj.alteraprestacaocontas` | — | — |
| `com.senior.g5.co.mfi.prj.alterasitsolicitacaoadt` | — | — |
| `com.senior.g5.co.mfi.prj.alterasituacaodaprestacao` | — | — |
| `com.senior.g5.co.mfi.prj.alterasituacaoprojeto` | — | — |
| `com.senior.g5.co.mfi.prj.alterasolitacaoadiantamento` | — | — |
| `com.senior.g5.co.mfi.prj.aprovaprojeto` | — | — |
| `com.senior.g5.co.mfi.prj.aproveitamentodecreditoviaprestacao` | — | — |
| `com.senior.g5.co.mfi.prj.atenderreabriritens` | — | — |
| `com.senior.g5.co.mfi.prj.buscacampoprojeto` | — | — |
| `com.senior.g5.co.mfi.prj.buscaorcamentofisicoprojeto` | — | — |
| `com.senior.g5.co.mfi.prj.buscaorcamentoprojeto` | — | — |
| `com.senior.g5.co.mfi.prj.buscaposicaofisicaprojeto` | — | — |
| `com.senior.g5.co.mfi.prj.buscaposicaofisicaprojetogrid` | — | — |
| `com.senior.g5.co.mfi.prj.buscaposicaoprojeto` | — | — |
| `com.senior.g5.co.mfi.prj.buscaposicaoprojetogrid` | — | — |
| `com.senior.g5.co.mfi.prj.buscasaldofinanceiroprojetogrid` | — | — |
| `com.senior.g5.co.mfi.prj.buscasaldofisicoprojetogrid` | — | — |
| `com.senior.g5.co.mfi.prj.cadastrainformacoesprojeto` | — | — |
| `com.senior.g5.co.mfi.prj.cadastrofase` | — | CadFase, CadFaseLote |
| `com.senior.g5.co.mfi.prj.cadastroobservacaoprestacaoctaadt` | — | — |
| `com.senior.g5.co.mfi.prj.cadastroobservacaosolicitacaoadt` | — | — |
| `com.senior.g5.co.mfi.prj.cadastroparametrosoladiantamento` | — | — |
| `com.senior.g5.co.mfi.prj.cadastroprojeto` | — | — |
| `com.senior.g5.co.mfi.prj.cadastroprotocolo` | — | — |
| `com.senior.g5.co.mfi.prj.cadastropublicoalvo` | — | — |
| `com.senior.g5.co.mfi.prj.cadastroquestionario` | — | — |
| `com.senior.g5.co.mfi.prj.cadastroremetentedesinatario` | — | — |
| `com.senior.g5.co.mfi.prj.conciliacao` | — | — |
| `com.senior.g5.co.mfi.prj.consultarecursosprevistosgrid` | — | — |
| `com.senior.g5.co.mfi.prj.defereprojeto` | — | — |
| `com.senior.g5.co.mfi.prj.devcreditoforviaprestacao` | — | — |
| `com.senior.g5.co.mfi.prj.duplicacaoprojetos` | — | — |
| `com.senior.g5.co.mfi.prj.gerarorcamentofinanceiro` | — | — |
| `com.senior.g5.co.mfi.prj.gerarorcamentofinanceirogrid` | — | — |
| `com.senior.g5.co.mfi.prj.gerarorcamentofisico` | — | — |
| `com.senior.g5.co.mfi.prj.gerarorcamentofisicogrid` | — | — |
| `com.senior.g5.co.mfi.prj.gerartituloadiantamento` | — | — |
| `com.senior.g5.co.mfi.prj.incluiralteraitens` | — | — |
| `com.senior.g5.co.mfi.prj.indefereprojeto` | — | — |
| `com.senior.g5.co.mfi.prj.lancamento` | — | — |
| `com.senior.g5.co.mfi.prj.projetofase` | — | — |
| `com.senior.g5.co.mfi.prj.projetorecursos` | — | — |
| `com.senior.g5.co.mfi.prj.recursosprevistosgrid` | — | — |
| `com.senior.g5.co.mfi.prj.registroocorrencia` | — | — |
| `com.senior.g5.co.mfi.prj.registroocorrenciaaprovacaobaixa` | — | — |
| `com.senior.g5.co.mfi.prj.relacionafasemunicipio` | — | — |
| `com.senior.g5.co.mfi.prj.relacionamentosprojetos` | — | — |
| `com.senior.g5.co.mfi.prj.relacionaprojetomunicipio` | — | — |
| `com.senior.g5.co.mfi.prj.relacionapublicoalvo` | — | — |
| `com.senior.g5.co.mfi.tes.contas` | — | — |
| `com.senior.g5.co.mfi.tes.creditofornecedor` | — | — |
| `com.senior.g5.co.mfi.tes.lancamentos` | — | — |
| `com.senior.g5.co.mfi.tes.movimentotesouraria` | — | — |
| `com.senior.g5.co.mfi.tes.transferenciatesouraria` | — | — |
| `com.senior.g5.co.mmt.coleta` | — | — |
| `com.senior.g5.co.mmt.equipamento` | `Inserir`_1 | VerificarDesuso |
| `com.senior.g5.co.mmt.manutencao` | — | Solicitar, Apontar |
| `com.senior.g5.co.mpr.cha.apontamentoopmega` | — | — |
| `com.senior.g5.co.mpr.cha.baixacomponentemega` | — | — |
| `com.senior.g5.co.mpr.cha.movimentoop` | — | Acertar, RecalculoTempo |
| `com.senior.g5.co.mpr.cha.parada` | — | Programar, Apontar |
| `com.senior.g5.co.mpr.cha.separacao` | — | — |
| `com.senior.g5.co.mpr.eng.leituraopremessaretorno` | — | — |
| `com.senior.g5.co.mpr.eng.modelo` | — | Modelo, ComponenteModelo, ConsumoComponente, DerivacaoModelo |
| `com.senior.g5.co.mpr.pcp.ordemproducao` | — | GerarOrdemProducaoViaPedidoGrade, GerarOrdemProducaoPorProduto |
| `com.senior.g5.co.prj.contaspagar` | — | Exportar, ConsultarGeral |
| `com.senior.g5.co.prj.contasreceber` | — | Exportar, ConsultarGeral |
| `com.senior.g5.co.prj.tipostitulo` | — | Exportar, ConsultarGeral |
| `com.senior.g5.co.sgq.execucaoinspecao` | — | Execucao, Inspecao, Verificacao, Defeito |
| `com.senior.g5.co.utils` | — | GetMenuItems, GetLeafMenuItemsSet |
| `com.senior.g5.co.ven.notafiscalsaida` | — | Exportar, ExportarIntegracao, ConsultarGeral |
| `com.senior.g5.co.ven.pedido` | — | Exportar, ConsultarGeral |

_Total: 434 web services._
