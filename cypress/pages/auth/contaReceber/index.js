import { elements as el } from "./elements";

function formatarData(data) {
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

function dataHoje() {
  return formatarData(new Date());
}

function dataFutura(dias) {
  const data = new Date();
  data.setDate(data.getDate() + dias);
  return formatarData(data);
}

class ContaReceber {
  visitarPaginaLogin() {
    cy.visit(el.urlDV);
  }

  // Selecionar CATEGORIA
  cadastrarCategoria() {
    cy.get(el.botaoCadastrarCategoria).click();

    cy.get(el.inputDescricaoCategoria)
      .should("be.visible")
      .type("Categoria Teste");

    this.salvar();
  }

  cadastrarCategoriaTD() {
    cy.get(el.botaoCadastrarCategoria).click();

    cy.get(el.inputDescricaoCategoria)
      .should("be.visible")
      .type("Categoria Teste TD");

    cy.get(el.selectCategoriaPai)
      .should("be.visible")
      .clear()
      .type("Categoria Teste");

    cy.get("body")
      .contains(".p-autocomplete-option", "Categoria Teste")
      .click();

    this.salvar();
  }

  verificarCategoria() {
    cy.get(el.botaoCadastrarCategoria).click();

    cy.get(el.inputDescricaoCategoria)
      .should("be.visible")
      .type("Categoria Teste");

    this.salvar();

    cy.get(el.NotificationTitle).should("be.visible").and("contain", "Atenção");

    cy.get(el.NotificationMessage)
      .should("be.visible")
      .and("contain", "Já existe uma categoria com esse nome.");
  }

  // Criar CONTATO
  cadastrarFornecedor() {
    cy.get(el.botaoCadastrarContato).click();

    cy.get(el.inputNome).type("RFornecedor Teste");

    cy.get(el.selectTipoContato).click();

    cy.get("body").find(el.opcaoSelect).should("be.visible");

    cy.contains(el.opcaoSelect, "Fornecedor").click();

    cy.get(el.inputDocumento).type("00.000.000/0000-00");
    cy.get(el.inputTelefone).type("11999999999");
    cy.get(el.inputEmail).type("teste@gmail.com");
    cy.get(el.inputEndereco).type("Rua Teste");

    this.salvar();
  }

  // Criar Conta Bancária
  cadastrarContaBancaria() {
    cy.get(el.botaoCadastrarContaBancaria).click();

    cy.get(el.inputNome).type("Conta TESTE");
    cy.get(el.inputBankCode).type("001");
    cy.get(el.inputBankName).type("Banco do Brasil");
    cy.get(el.inputAgency).type("1234");
    cy.get(el.inputAccount).type("123456");

    this.salvar();
  }

  // Criar Centro de Custo
  cadastrarCentroCusto() {
    cy.get(el.botaoCadastrarCentroCusto).click();

    cy.get(el.inputNome).type("Centro de Custo TESTE");

    this.salvar();
  }

  // Selecionar Propriedade

  selecionarPropriedadeDEV() {
    cy.get(el.selectCliente).click();

    cy.contains(el.opcaoPropriedade, "HOTEL_CENTRAL_DEV").click();

    cy.contains(el.botaoConfirmarPropriedade, "Confirmar propriedade")
      .should("not.be.disabled")
      .click();
  }

  // Selecionar MENU
  selecionarModuloReceber() {
    cy.contains(el.menuFinanceiro, "Financeiro")
      .closest(".p-panelmenu-header")
      .click();

    cy.contains(el.menuContasReceber).should("be.visible").click();
  }

  paginatorContaReceber() {
    cy.get(el.paginatorDropdown).click();

    cy.get("body").find(el.paginatorOptions).contains("30").click();
  }

  // Selecionar Novo Lançamento
  novoLancamentoReceber() {
    this.selecionarModuloReceber();

    cy.contains(el.botaoNovoLancamento).should("be.visible").click();
  }

  salvar() {
    cy.contains("button", "Salvar")
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  }

  // Preenchimento de Titulos
  incluirTitulo() {
    cy.get(el.inputDescricao).type("Titulo Teste");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(dataFutura(7));
    cy.get(el.inputDataCompetencia).clear().type(dataHoje());
  }

  incluirTituloPago() {
    this.incluirTitulo();
    cy.get(el.checkboxPago).check();
  }

  incluirTituloParcelado() {
    cy.get(el.inputDescricao).type("Titulo Teste Parcelado");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(dataFutura(7));
    cy.get(el.inputDataCompetencia).clear().type(dataHoje());
  }

  incluirTituloObservacao() {
    cy.get(el.inputDescricao).type("Titulo Teste Observação");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(dataFutura(7));
    cy.get(el.inputDataCompetencia).clear().type(dataHoje());
  }

  incluirTituloDiario() {
    cy.get(el.inputDescricao).type("Titulo Teste Diário");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(dataFutura(7));
    cy.get(el.inputDataCompetencia).clear().type(dataHoje());
    cy.get(el.checkboxPago).check();
  }

  incluirTituloSemanal() {
    cy.get(el.inputDescricao).type("Titulo Teste Semanal");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(dataFutura(7));
    cy.get(el.inputDataCompetencia).clear().type(dataHoje());
    cy.get(el.checkboxPago).check();
  }

  incluirTituloMensal() {
    cy.get(el.inputDescricao).type("Titulo Teste Mensal");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(dataFutura(30));
    cy.get(el.inputDataCompetencia).clear().type(dataHoje());
    cy.get(el.checkboxPago).check();
  }

  incluirTituloAnual() {
    const data = new Date();
    data.setDate(data.getDate() + 365);

    cy.get(el.inputDescricao).type("Titulo Teste Anual");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(formatarData(data));
    cy.get(el.inputDataCompetencia).clear().type(dataHoje());
    cy.get(el.checkboxPago).check();
  }

  // DROPDOWN

  dropdownCategoria(campo, opcao) {
    cy.get(campo).click().type(opcao);

    cy.get(el.selectListbox).should("be.visible");

    cy.contains(el.opcaoPropriedade, opcao).click();
  }

  // PARCELAMENTO
  selecionarParcelamento() {
    cy.contains(el.campoParcelamento).click();
    cy.get(el.inputQtdParcelas).type(2);
  }

  // RECORRÊNCIA

  ativarRecorrencia() {
    cy.get(el.toggleRecorrencia).click();
    cy.get(el.togglePermanente).click();
  }

  selecionarFrequencia(tipo) {
    cy.get(el.selectFrequencia).click();
    cy.contains(el.opcaoSelect, tipo).click();
  }

  // OBSERVAÇÃO
  observacaoTitulo() {
    cy.contains(el.abaDetalhes).click();
    cy.get(el.inputObservacao).type("Teste Observação");
    this.salvar();
  }

  // AÇÕES TABELA

  duplicarLancamento(nome) {
    cy.contains(el.colunaTabela, nome)
      .parents(el.linhaTabela)
      .find(el.botaoDuplicar)
      .click();

    this.salvar();
  }

  editarLancamento(nome, novo) {
    cy.contains(el.colunaTabela, nome)
      .parents(el.linhaTabela)
      .find(el.botaoEditar)
      .click();

    cy.get(el.inputDescricao).clear().type(novo);

    this.salvar();
  }

  excluirLancamento(nome) {
    cy.contains(el.colunaTabela, nome)
      .parents(el.linhaTabela)
      .find(el.botaoExcluir)
      .click();

    cy.contains("button", "Confirmar").click();
  }

  excluirProximos(nome) {
    cy.contains("tr", nome).find(el.iconeTrash).click();

    cy.contains(el.opcaoExcluirProximos).click();
    cy.contains("button", "Confirmar").click();
  }

  excluirTodos(nome) {
    cy.contains("tr", nome).find(el.iconeTrash).click();

    cy.contains(el.opcaoExcluirTodos).click();
    cy.contains("button", "Confirmar").click();
  }

  // OUTROS

  reabrirTitulo(nome) {
    cy.contains(el.colunaTabela, nome)
      .parents(el.linhaTabela)
      .find(el.botaoEditar)
      .click();

    cy.contains("button", "Reabrir Título").click();
    cy.get(el.botaoConfirmarOk).click();

    this.salvar();
  }

  SelecionarMes() {
    cy.get(".pi-chevron-circle-right").filter(":visible").first().click();
  }

  SelecionarAnoMes(ano, mes) {
    cy.get("#periodo input, #periodoMobile input")
      .first()
      .click({ force: true });

    cy.get(".p-datepicker-panel").should("be.visible");

    // abre seleção de anos (IMPORTANTE: clicar no header do ano)
    cy.get("body")
      .contains(".p-datepicker-select-year", ano.toString())
      .click({ force: true });

    // depois selecionar mês direto (como no seu HTML)
    cy.get("body").contains(".p-datepicker-month", mes).click({ force: true });
  }
}

export default new ContaReceber();
