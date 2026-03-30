import { elements as el } from "./elements";

class contatos {

  visitarPaginaLoginPR() {
    cy.visit(el.urlPR);
  }

  visitarPaginaLoginST() {
   cy.visit(el.urlDV)
  } 

  // Paginação
  paginatorContatos() {
    cy.get(el.paginatorDropdown, { timeout: 10000 }).click();

    cy.get("body")
      .find(el.paginatorOptions)
      .contains("30", { timeout: 10000 })
      .click();
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

  // Menu
  selecionarContatos() {
    cy.contains(el.menuFinanceiro, "Financeiro", { timeout: 10000 })
      .closest(".p-panelmenu-header")
      .click();

    cy.contains(el.menuContatos, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  // Adicionar contato
  adicionarContato() {
    cy.contains(el.botaoAdicionarContato, { timeout: 10000 }).click();

    cy.get(el.inputNome).type("Teste03");
    cy.get(el.inputDocumento).type("00.000.000/0000.58");
    cy.get(el.inputTelefone).type("47996598596");
    cy.get(el.inputEmail).type("teste@gmail.com.br");
    cy.get(el.inputEndereco).type("Rua Cordeiro de Deus");

    cy.contains(el.botaoSalvar, "Salvar")
      .should("not.be.disabled")
      .click();
  }

  // Editar contato
  editarContatos() {
    cy.contains(el.linhaContato, "ADRIANA ESTHER")
      .find(el.botaoEditar)
      .closest("button")
      .click();

    cy.get(el.inputNome)
      .should("be.visible")
      .type("ESTHER");

    cy.contains(el.botaoSalvar, "Salvar")
      .should("not.be.disabled")
      .click();
  }

  // Nova conta
  novoContatos() {
    cy.contains(el.botaoAdicionarConta, { timeout: 10000 })
      .should("be.visible")
      .click();

    cy.get(el.inputNome).type("Teste Conta");
    cy.get(el.inputBankCode).type("100");
    cy.get(el.inputBankName).type("Teste Conta");
    cy.get(el.inputAgency).type("1234-5");
    cy.get(el.inputAccount).type("123456-7");

    cy.contains(el.botaoSalvar, "Salvar")
      .should("not.be.disabled")
      .click();
  }

  // Excluir contato
  excluirContatos() {
    cy.contains(el.linhaContato, "ADRIANA ESTHER")
      .find(el.botaoExcluir)
      .closest("button")
      .click();

    cy.contains(el.botaoConfirmar, "Confirmar").click();
  }
}

export default new contatos();