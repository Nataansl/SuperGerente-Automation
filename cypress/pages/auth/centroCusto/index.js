import { elements as el } from "./elements";

class CentroCusto {
  // Acessa a aplicação
  visitarPaginaLogin() {
    cy.visit(el.urlDV);
  }

  // Define a quantidade de registros exibidos na tabela
  paginatorCentroCusto() {
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
  selecionarCentroCusto() {
    cy.contains(el.menuFinanceiro, "Financeiro", { timeout: 10000 })
      .closest(".p-panelmenu-header")
      .click();

    cy.contains(el.menuCentroCusto, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  // Edita um centro de custo com base no nome informado
  editarCentroCusto(nomeAtual, nomeNovo) {
    cy.contains(el.linhaTabela, nomeAtual)
      .find(el.botaoEditar)
      .closest("button")
      .click();

    // Atualiza o nome do centro de custo
    cy.get(el.inputNome).should("be.visible").clear().type(nomeNovo);

    this.salvar();
  }

  // No campo Type e atualiza para um novo nome. No campo .type pode informar o nome da categoria existente e o novo nome. 
  CentroCustoDuplicado() {
    cy.contains(el.botaoAdicionarCentroCusto, { timeout: 10000 }).click();

    cy.get(el.inputNome).type("Teste Centro de Custo");

    this.salvar();

    cy.get(el.NotificationTitle).should("be.visible").and("contain", "Atenção");

    cy.get(el.NotificationMessage, { timeout: 10000 })
      .should("be.visible")
      .and("contain", "Já existe um centro de custo com esse nome.");
  }

  // Novo Centro de Custo
  // Type pode informar o nome do Centro de Custo
  novoCentroCusto() {
    cy.contains(el.botaoAdicionarCentroCusto, { timeout: 10000 }).click();

    cy.get(el.inputNome).type("Teste Centro de Custo");

    this.salvar();
  }

  // Exclui um centro de custo com base no nome informado
  excluirCentroCusto(nome) {
    cy.contains(el.linhaTabela, nome)
      .find(el.botaoExcluir)
      .closest("button")
      .click();

    cy.contains(el.botaoConfirmar, "Confirmar").click();
  }

  // Ação padrão para salvar
  salvar() {
    cy.contains(el.botaoSalvar, "Salvar").should("not.be.disabled").click();
  }
}

export default new CentroCusto();
