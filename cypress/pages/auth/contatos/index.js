import { elements as el } from "./elements";

class contatos {
  visitarPaginaLoginPR() {
    cy.visit(el.urlPR);
  }

  visitarPaginaLoginST() {
    cy.visit(el.urlDV);
  }

  // Paginação
  paginatorContatos() {
    cy.get(el.paginatorDropdown, { timeout: 10000 }).click();

    cy.get("body")
      .find(el.paginatorOptions)
      .contains("30", { timeout: 10000 })
      .click();
  }

  // Pesquisa e já valida resultado
  pesquisarEValidar(nome) {
    this.pesquisarContato(nome);

    cy.contains(el.linhaContato, nome, { timeout: 10000 }).should("be.visible");
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

    cy.get(el.inputNome).type("ACriado Contato");
    cy.get(el.inputDocumento).type("00.000.000/0000.58");
    cy.get(el.inputTelefone).type("47996598596");
    cy.get(el.inputEmail).type("teste@gmail.com.br");
    cy.get(el.inputEndereco).type("Rua Cordeiro de Deus");

    cy.contains(el.botaoSalvar, "Salvar").should("not.be.disabled").click();
  }

  // Adicionar contato (Duplicado)
  adicionarContatoDuplicado() {
    cy.contains(el.botaoAdicionarContato, { timeout: 10000 }).click();

    cy.get(el.inputNome).type("ACriado Contato");
    cy.get(el.inputDocumento).type("00.000.000/0000.58");
    cy.get(el.inputTelefone).type("47996598596");
    cy.get(el.inputEmail).type("teste@gmail.com.br");
    cy.get(el.inputEndereco).type("Rua Cordeiro de Deus");

    cy.contains(el.botaoSalvar, "Salvar").should("not.be.disabled").click();

    cy.get(el.NotificationTitle)
      .should("be.visible")
      .and("contain", "Erro ao salvar");

    cy.get(el.NotificationMessage, { timeout: 10000 })
      .should("be.visible")
      .and("contain", "O CPF/CNPJ informado para este contato já existe.");
    }

  // Editar contato
  editarContatos(nomeAtual, novoNome) {
    cy.contains(el.linhaContato, nomeAtual)
      .find(el.botaoEditar)
      .closest("button")
      .click();

    cy.get(el.inputNome).should("be.visible").clear().type(novoNome);

    cy.contains(el.botaoSalvar, "Salvar").should("not.be.disabled").click();
  }

  // Excluir contato
  excluirContatos() {
    cy.contains(el.linhaContato, "Editado Contato")
      .find(el.botaoExcluir)
      .closest("button")
      .click();

    cy.contains(el.botaoConfirmar, "Confirmar").click();
  }

  // Excluir Forncedor
    excluirFornecedor() {
     cy.contains(el.linhaContato, "AFornecedor Teste")
      .find(el.botaoExcluir)
      .closest("button")
      .click();

    cy.contains(el.botaoConfirmar, "Confirmar").click();
    }
}

export default new contatos();
