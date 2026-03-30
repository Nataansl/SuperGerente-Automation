import { elements as el } from "./elements";

class ContaPagar {
  // Acessa a aplicação pelo link principal
  visitarPaginaLogin() {
    cy.visit(el.urlDV);
  }

   // Seleciona a propriedade produção
   selecionarPropriedade() {
     cy.get(el.selectCliente, { timeout: 10000 })
       .should("be.visible")
       .click();
 
     cy.contains(el.opcaoPropriedade, "Teste PNatan", { timeout: 10000 })
       .click();
 
     cy.contains(el.botaoConfirmarPropriedade, "Confirmar propriedade")
       .should("not.be.disabled")
       .click();
   }
 
  // Selecionar a propriedade DEV 
   selecionarPropriedadeDEV() {
     cy.get(el.selectCliente, { timeout: 10000 })
       .should("be.visible")
       .click();
 
     cy.contains(el.opcaoPropriedade, "HOTEL_CENTRAL_DEV", { timeout: 10000 })
       .click();
 
     cy.contains(el.botaoConfirmarPropriedade, "Confirmar propriedade")
       .should("not.be.disabled")
       .click();
  }

  // Navega até o módulo de Contas a Pagar dentro do menu Financeiro
  selecionarModuloPagar() {
    cy.contains(el.menuFinanceiro, "Financeiro", { timeout: 10000 })
      .closest(".p-panelmenu-header")
      .click();

    cy.contains(el.menuContasPagar, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  // Altera a quantidade de registros exibidos na tabela para 30 itens
  paginatorContaPagar() {
    cy.get(el.paginatorDropdown, { timeout: 10000 }).click();

    cy.get("body")
      .find(el.paginatorOptions)
      .contains("30", { timeout: 10000 })
      .click();
  }

  // Acessa a tela de criação de um novo lançamento
  novoLancamentoPagar() {
    this.selecionarModuloPagar();

    cy.contains(el.botaoNovoLancamento, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  // Cadastra uma nova categoria financeira
  cadastrarCategoria() {
    cy.get(el.botaoCadastrarCategoria).click();

    cy.get(el.inputDescricaoCategoria).should("be.visible").type("TESTE98");

    this.salvar();
  }

  // Cadastra categoria (TodaRede)
  cadastrarCategoriaTD() {
    cy.get(el.botaoCadastrarCategoria).click();

    cy.get(el.inputDescricaoCategoria).should("be.visible").type("TESTE98");

    // Autocomplete correto
    cy.get(el.selectCategoriaPai).should("be.visible").clear().type("ENER");

    cy.get("body", { timeout: 10000 })
      .contains(".p-autocomplete-option", "ENERGIA ELETRICA")
      .should("be.visible")
      .click();

    cy.get(el.checkboxCategoriaTodasEmpresas).click();

    this.salvar();
  }

  // Verificar Registro Duplicado
  cadastrarCategoria() {
    cy.get(el.botaoCadastrarCategoria).click();

    cy.get(el.inputDescricaoCategoria).should("be.visible").type("TESTE98");

    this.salvar();

    cy.get(el.NotificationTitle).should("be.visible").and("contain", "Atenção");

    cy.get(el.NotificationMessage, { timeout: 10000 })
      .should("be.visible")
      .and("contain", "Já existe uma categoria com esse nome.");
  }

  // Cadastra um fornecedor (contato)
  cadastrarFornecedor() {
    cy.get(el.botaoCadastrarContato).click();

    cy.get(el.inputNome).type("Teste03");

    // Seleciona tipo de contato como Fornecedor
    cy.get(el.selectTipoContato).click();

    cy.get("body")
      .find(el.opcaoSelect, { timeout: 10000 })
      .should("be.visible");

    cy.contains(el.opcaoSelect, "Fornecedor").click();

    // Preenche dados do fornecedor
    cy.get(el.inputDocumento).type("00.000.000/0000.09");
    cy.get(el.inputTelefone).type("47996598596");
    cy.get(el.inputEmail).type("teste@gmail.com.br");
    cy.get(el.inputEndereco).type("Rua Cordeiro de Deus");

    this.salvar();
  }

  // Cadastra uma nova conta bancária
  cadastrarContaBancaria() {
    cy.get(el.botaoCadastrarContaBancaria).click();

    cy.get(el.inputNome).type("Conta Principal");
    cy.get(el.inputBankCode).type("001");
    cy.get(el.inputBankName).type("Banco do Brasil");
    cy.get(el.inputAgency).type("1234-5");
    cy.get(el.inputAccount).type("123456-7");

    this.salvar();
  }

  // Cadastra um centro de custo
  cadastrarCentroCusto() {
    cy.get(el.botaoCadastrarCentroCusto).click();

    cy.get(el.inputNome).type("Marketing");

    this.salvar();
  }

  // Preenche os dados básicos de um lançamento a pagar
  incluirTituloPago() {
    cy.get(el.inputDescricao).should("be.visible").type("TESTE6");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type("25/02/2026");
    cy.get(el.inputDataCompetencia).clear().type("24/03/2026");

    // Marca como título já pago
    cy.get(el.checkboxPago).check();
  }

  // Duplica um lançamento existente baseado no nome informado
  duplicarLancamento(nome) {
    cy.contains(el.colunaTabela, nome)
      .parents(el.linhaTabela)
      .find(el.botaoDuplicar)
      .click();

    this.salvar();
  }

  // Edita um lançamento existente
  editarLancamento(nome) {
    cy.contains(el.colunaTabela, nome)
      .parents(el.linhaTabela)
      .find(el.botaoEditar)
      .click();

    this.salvar();
  }

  // Exclui um lançamento específico
  excluirLancamento(nome) {
    cy.contains(el.colunaTabela, nome)
      .parents(el.linhaTabela)
      .find(el.botaoExcluir)
      .click();

    cy.contains(el.botaoConfirmar, "Confirmar")
      .should("not.be.disabled")
      .click();
  }

  // Excluir um lançamento (Pago)
  excluirLancamentoPago(nome) {
    // 1. Garante que a linha existe
    cy.contains("tr", nome, { timeout: 10000 })
      .should("be.visible")
      .within(() => {
        cy.get(el.botaoExcluir).should("be.visible").click();
      });

    // 2. Espera o modal abrir (ESSENCIAL)
    cy.get(".p-dialog", { timeout: 10000 }).should("be.visible");

    // 3. Confirma exclusão direto
    cy.contains("button", "Excluir")
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  }

  // Exclui lançamentos recorrentes conforme o tipo escolhido
  excluirRecorrente(nome, tipo) {
    cy.contains(el.colunaTabela, nome)
      .closest(el.linhaTabela)
      .find(el.iconeTrash)
      .click();

    cy.contains(tipo).should("not.be.disabled").click();

    cy.contains(el.botaoConfirmar, "Confirmar")
      .should("not.be.disabled")
      .click();
  }

  excluirApenasUm(nome) {
    // 1. Clica no botão excluir da tabela
    cy.contains("tr", nome, { timeout: 10000 })
      .should("be.visible")
      .within(() => {
        cy.get(el.iconeTrash).closest("button").click();
      });

    // 2. Espera modal abrir
    cy.get(".p-dialog", { timeout: 10000 }).should("be.visible");

    // 3. Clica na opção correta (CARD!)
    cy.contains("div.font-medium", "Excluir apenas este lançamento", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();

    this.Confimar();
  }

  excluirProximos(nome) {
    // 1. Clica no botão excluir da tabela
    cy.contains("tr", nome, { timeout: 10000 })
      .should("be.visible")
      .within(() => {
        cy.get(el.iconeTrash).closest("button").click();
      });

    // 2. Espera modal abrir
    cy.get(".p-dialog", { timeout: 10000 }).should("be.visible");

    // 3. Clica na opção correta (CARD!)
    cy.contains("div.font-medium", "Excluir este e os próximos", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();

    this.Confimar();
  }

  excluirTodos(nome) {
    // 1. Clica no botão excluir da tabela
    cy.contains("tr", nome, { timeout: 10000 })
      .should("be.visible")
      .within(() => {
        cy.get(el.iconeTrash).closest("button").click();
      });

    // 2. Espera modal abrir
    cy.get(".p-dialog", { timeout: 10000 }).should("be.visible");

    // 3. Clica na opção correta (CARD!)
    cy.contains("div.font-medium", "Excluir toda a recorrência", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();

    this.Confimar();
  }

  // Reabre um título previamente fechado/pago
  reabrirTitulo(nome) {
    cy.contains(el.colunaTabela, nome)
      .first()
      .closest(el.linhaTabela)
      .find(el.botaoEditar)
      .click();

    cy.contains(el.botaoSalvar, "Reabrir Título")
      .should("not.be.disabled")
      .click();

    cy.get(el.botaoConfirmarOk).click();

    cy.get(el.inputDescricao).type(nome);

    this.salvar();

    cy.contains("Apenas a parcela", { timeout: 10000 }).should("be.visible");

    cy.contains("Alterar apenas este lançamento", { timeout: 10000 })
      .should("be.visible")
      .click();

    this.Confimar();
  }

  // Ativa a recorrência de um lançamento
  ativarRecorrencia() {
    cy.get(el.toggleRecorrencia).closest(".p-toggleswitch").click();
    cy.get('input[name="endless"]')
      .parents('[data-pc-name="toggleswitch"]')
      .click();
  }

  // Seleciona o tipo de frequência (Mensal, Semanal, Anual, etc.)
  selecionarFrequencia(tipo) {
    cy.get(el.selectFrequencia).should("be.visible").click();

    cy.get("body").find(el.opcaoSelect).should("have.length.greaterThan", 0);

    cy.get("body").contains(el.opcaoSelect, tipo).should("be.visible").click();

    // garante que o dropdown fechou
    cy.get(el.opcaoSelect).should("not.exist");

    this.salvar();
  }

  // Define a data da recorrência
  frequenciaRecorrente() {
    cy.get(el.inputDataFrequencia)
      .click()
      .invoke("attr", "aria-controls")
      .then((panelId) => {
        cy.get(`#${panelId}`).find('[data-date="2026-2-4"]').click();
      });

    this.salvar();
  }

  // Adiciona observação ao título
  observacaoTituloPagar() {
    cy.contains(el.abaDetalhes).click();

    cy.get(el.inputObservacao).type("Teste");

    this.salvar();
  }

  // Seleciona uma opção em dropdown customizado
  dropdownCategoria(campo, opcao) {
    cy.get(campo).click().type(opcao);

    cy.get(el.selectListbox).should("be.visible");

    cy.contains(el.opcaoPropriedade, opcao).click();
  }

  // Parcelamento
  selecionarParcelamento() {
    cy.contains(el.campoParcelamento).click();

    cy.get(el.inputQtdParcelas).type(2);
  }

  selecionarFrequencia(tipo) {
    cy.get(el.selectFrequencia).click();

    cy.get(el.opcaoSelect, { timeout: 10000 }).should("be.visible");

    cy.get("body").contains(el.opcaoSelect, tipo).click();
  }

  // Ação padrão para salvar formulários
    salvar() {
  cy.contains('button', 'Salvar', { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled')
    .click();
}

  // Acão padrão para Confirmar
  Confimar() {
    cy.contains(el.Confirmar, "Confirmar").should("not.be.disabled").click();
  }
}

export default new ContaPagar();
