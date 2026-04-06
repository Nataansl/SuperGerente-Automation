import { elements as el } from "./elements";

class Conta {
  // Acessa a aplicação
  visitarPaginaLogin() {
    cy.visit(el.urlDV);
  }

  // Define a quantidade de registros exibidos na tabela
  paginatorConta() {
    cy.get(el.paginatorDropdown, { timeout: 10000 }).click();

    cy.get("body")
      .find(el.paginatorOptions)
      .contains("30", { timeout: 10000 })
      .click();
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

  // Navega até o módulo de Centro de Custo
  selecionarConta() {
    cy.contains(el.menuFinanceiro, "Financeiro", { timeout: 10000 })
      .closest(".p-panelmenu-header")
      .click();

    cy.contains("a", /^Contas$/).click();
  }

  // Edita uma conta existente com base no nome informado
  editarConta(nome) {
    cy.contains(el.linhaTabela, nome)
      .find(el.botaoEditarIcon)
      .closest("button")
      .click();

    // Atualiza a descrição da categoria
    cy.get(el.inputNome).should("be.visible").clear().type("Teste Conta11");

    this.salvar();
  }

  // Cadastra uma nova conta bancária
  novaConta() {
    cy.contains(el.botaoAdicionarConta, { timeout: 10000 })
      .should("be.visible")
      .click();

    cy.get(el.inputNome).should("be.visible").type("Teste Conta1");
    cy.get(el.inputBankCode).type("100");
    cy.get(el.inputBankName).type("Teste Conta");
    cy.get(el.inputAgency).type("1234-5");
    cy.get(el.inputAccount).type("123456-7");

    this.salvar();
  }

  // Exclui uma conta com base no nome informado
  excluirConta(nome) {
    cy.contains(el.linhaTabela, nome)
      .find(el.botaoExcluir)
      .closest("button")
      .click();

    this.salvar();
  }

  // Ação padrão de salvar
  salvar() {
    cy.contains(el.botaoSalvar, "Salvar").should("not.be.disabled").click();
  }
}

export default new Conta();
