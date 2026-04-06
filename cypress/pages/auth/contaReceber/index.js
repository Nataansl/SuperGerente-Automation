import { elements as el } from "./elements";


class ContaReceber {
  // Acessa a aplicação pelo link principal
  visitarPaginaLogin() {
    cy.visit(el.urlDV);
  }

  // Seleciona a propriedade produção
  selecionarPropriedade() {
    cy.get(el.selectCliente, { timeout: 10000 }).should("be.visible").click();

    cy.contains(el.opcaoPropriedade, "Teste PNatan", {
      timeout: 10000,
    }).click();

    cy.contains(el.botaoConfirmarPropriedade, "Confirmar propriedade")
      .should("not.be.disabled")
      .click();
  }

  // Selecionar a propriedade DEV
  selecionarPropriedadeDEV() {
    cy.get(el.selectCliente, { timeout: 10000 }).should("be.visible").click();

    cy.contains(el.opcaoPropriedade, "HOTEL_CENTRAL_DEV", {
      timeout: 10000,
    }).click();

    cy.contains(el.botaoConfirmarPropriedade, "Confirmar propriedade")
      .should("not.be.disabled")
      .click();
  }

  // Selecionar o Modulo Receber
  selecionarModuloReceber() {
    cy.contains(el.menuFinanceiro, "Financeiro", { timeout: 10000 })
      .closest(".p-panelmenu-header")
      .click();

    cy.contains(el.menuContasReceber, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  // Paginação
  paginatorContaReceber() {
    cy.get(el.paginatorDropdown, { timeout: 10000 }).click();

    cy.get("body")
      .find(el.paginatorOptions)
      .contains("30", { timeout: 10000 })
      .click();
  }

  // Novo lançamento
  novoLancamentoReceber() {
    this.selecionarModuloReceber();

    cy.contains(el.botaoNovoLancamento, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  // Toda Rede
  todaRede() {
    cy.get(el.selectCliente, { timeout: 10000 }).should("be.visible").click();

    cy.contains(el.opcaoPropriedade, "Teste PNatan", {
      timeout: 10000,
    }).click();

    cy.get(el.checkboxTodaRede).click();

    cy.contains(el.botaoConfirmarPropriedade, "Confirmar propriedade")
      .should("not.be.disabled")
      .click();

    cy.contains(el.menuContasReceber, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  // Categoria
  cadastrarCategoriaReceberExistente() {
    cy.get(el.botaoCadastrarCategoria).click();

    cy.get(el.inputDescricaoCategoria).should("be.visible").type("TESTE98");

    this.salvar();
  }

  // Cadastra uma nova categoria financeira
    cadastrarCategoria() {
      cy.get(el.botaoCadastrarCategoria).click();
  
      cy.get(el.inputDescricaoCategoria).should("be.visible").type("TESTE");
  
      this.salvar();
    }

  // Verificar a notificação
  verificarNotificacao(titulo, mensagem) {
    cy.get(el.NotificationTitle).should("be.visible").and("contain", "Atenção");

    cy.get(el.NotificationMessage, { timeout: 10000 })
      .should("be.visible")
      .and("contain", "Já existe uma categoria com esse nome.");
  }

  // Fornecedor
  cadastrarFornecedor() {
    cy.get(el.botaoCadastrarContato).click();

    cy.get(el.inputNome).type("Teste03");

    cy.get(el.selectTipoContato).click();

    cy.get("body")
      .find(el.opcaoSelect, { timeout: 10000 })
      .should("be.visible");

    cy.contains(el.opcaoSelect, "Fornecedor").click();

    cy.get(el.inputDocumento).type("00.000.000/0000.09");
    cy.get(el.inputTelefone).type("47996598596");
    cy.get(el.inputEmail).type("teste@gmail.com.br");
    cy.get(el.inputEndereco).type("Rua Cordeiro de Deus");

    cy.contains(el.botaoSalvar, "Salvar").should("not.be.disabled").click();
  }

  // Conta bancária
  cadastrarContaBancaria() {
    cy.get(el.botaoCadastrarContaBancaria).click();

    cy.get(el.inputNome).type("Conta Principal");
    cy.get(el.inputBankCode).type("001");
    cy.get(el.inputBankName).type("Banco do Brasil");
    cy.get(el.inputAgency).type("1234-5");
    cy.get(el.inputAccount).type("123456-7");

    cy.contains(el.botaoSalvar, "Salvar").should("not.be.disabled").click();
  }

  // Centro de custo
  cadastrarCentroCusto() {
    cy.get(el.botaoCadastrarCentroCusto).click();

    cy.get(el.inputNome).type("Marketing");

    cy.contains(el.botaoSalvar, "Salvar").should("not.be.disabled").click();
  }

  // Lançamentos
  incluirTitulo() {
    cy.get(el.inputDescricao).should("be.visible").type("TESTE6");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type("25/02/2026");
    cy.get(el.inputDataCompetencia).clear().type("24/03/2026");
    cy.get(el.checkboxPago).check();
  }

  duplicarLancamento() {
    cy.contains(el.colunaTabela, "TESTE6")
      .parents(el.linhaTabela)
      .find(el.botaoDuplicar)
      .click();
  }

  reabrirTitulo() {
    cy.contains(el.colunaTabela, "TESTE6")
      .first()
      .closest(el.linhaTabela)
      .find(el.botaoEditar)
      .click();

    cy.contains(el.botaoSalvar, "Reabrir Título")
      .should("not.be.disabled")
      .click();

    cy.get(el.botaoConfirmarOk).click();

    cy.get(el.inputDescricao).type("TESTE6");
  }

  editarLancamento() {
    cy.contains(el.colunaTabela, "A PAGAR223")
      .parents(el.linhaTabela)
      .find(el.botaoEditar)
      .click();
  }

  // Dropdown genérico
  dropdown(campo, opcao) {
    cy.get(campo).should("be.visible").click().type(opcao);

    cy.get(el.selectListbox, { timeout: 10000 }).should("be.visible");

    cy.contains(el.opcaoPropriedade, opcao).scrollIntoView().click();
  }

  // Parcelamento
  selecionarParcelamento() {
    cy.contains(el.campoParcelamento).click();

    cy.get(el.inputQtdParcelas).type(2);
  }

  selecionarFrequencia(tipo) {
    cy.get(el.selectFrequencia).click();

    cy.get(el.opcaoSelect, { timeout: 10000 }).should("be.visible");

    cy.contains(el.opcaoPropriedade, tipo).click();
  }

  // Observação
  observacaoTituloReceber() {
    cy.contains(el.abaDetalhes).click();

    cy.get(el.inputObservacao).type("Teste");

    cy.contains(el.botaoSalvar, "Salvar").should("not.be.disabled").click();
  }

  // Exclusão
  excluirLancamento(nome) {
    cy.contains(el.colunaTabela, nome)
      .closest(el.linhaTabela)
      .find(el.botaoExcluir)
      .click();

    cy.contains(el.opcaoExcluirUnico).should("not.be.disabled").click();

    cy.contains(el.botaoConfirmar, "Confirmar")
      .should("not.be.disabled")
      .click();
  }

  // Recorrência
  ativarRecorrencia() {
    cy.get(el.toggleRecorrencia).closest(".p-toggleswitch").click();
  }

  frequenciaRecorrente() {
    const dataSelecionada = dayjs().add(7, "day"); // +7 dias
    const ano = dataSelecionada.year();
    const mes = dataSelecionada.month(); // 0-11
    const dia = dataSelecionada.date();

    cy.get(el.inputDataFrequencia)
      .click()
      .invoke("attr", "aria-controls")
      .then((panelId) => {
        cy.get(`#${panelId}`).find('[data-date="2026-2-4"]').click();
      });

    cy.contains(el.botaoSalvar, "Salvar").should("not.be.disabled").click();
  }

  frequenciaPermanente() {
    cy.get(el.togglePermanente).closest(".p-toggleswitch").click();

    cy.contains(el.botaoSalvar, "Salvar").should("not.be.disabled").click();
  }

  // Botão salvar genérico
  salvar() {
    cy.contains(el.botaoSalvar, "Salvar").should("not.be.disabled").click();
  }

  // Retorna a data de hoje no formato DD/MM/YYYY
  dataHoje() {
    return dayjs().format("DD/MM/YYYY");
  }

  // Retorna data futura, adicionando X dias
  dataFutura(dias = 0) {
    return dayjs().add(dias, "day").format("DD/MM/YYYY");
  }

  // Exemplo: incluir um título com datas dinâmicas
  incluirTitulo() {
    const dataHoje = dayjs().format("DD/MM/YYYY"); // data de hoje
    const dataVencimento = dayjs().add(5, "day").format("DD/MM/YYYY"); // hoje + 5 dias

    cy.get(el.inputDescricao).should("be.visible").type("TESTE6");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(dataVencimento);
    cy.get(el.inputDataCompetencia).clear().type(dataHoje);
    cy.get(el.checkboxPago).check();
  }
}

export default new ContaReceber();
