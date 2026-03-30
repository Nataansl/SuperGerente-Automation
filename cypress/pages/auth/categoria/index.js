import { elements as el } from "./elements";

class Categoria {

  // Acessa a aplicação
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



  // Navega até o módulo de Categoria
  selecionarCategoria() {
    cy.contains(el.menuFinanceiro, "Financeiro", { timeout: 10000 })
      .closest(".p-panelmenu-header")
      .click();

    cy.contains(el.menuCategoria, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  // Categoria Duplicada
  // No campo .type pode informar o nome da categoria existente. 
  categoriaDuplicada() {
    cy.contains(el.botaoAdicionarCategoria, { timeout: 10000 })
      .click();

    cy.get(el.inputDescricao)
      .should("be.visible")
      .type("Teste Categoria");

    this.salvar();

    cy.get(el.NotificationTitle)
      .should("be.visible")
      .and("contain", "Atenção");

    cy.get(el.NotificationMessage, { timeout: 10000 })
  .should("be.visible")
  .and("contain", "Já existe uma categoria com esse nome.");
  }

 // Nova Categoria 
 // No campo .type pode informar o nome da categoria. 
   novaCategoria() {
    cy.contains(el.botaoAdicionarCategoria, { timeout: 10000 })
      .click();

    cy.get(el.inputDescricao)
      .should("be.visible")
      .type("");

    this.salvar();
   }


  // Define a quantidade de registros exibidos na tabela
  paginatorCategoria() {
    cy.get(el.paginatorDropdown, { timeout: 10000 }).click();

    cy.get("body")
      .find(el.paginatorOptions)
      .contains("30", { timeout: 10000 })
      .click();
  }


  // Edita uma categoria com base no nome informado
  editarCategoria(nome) {
    cy.contains(el.linhaTabela, nome)
    .find(el.botaoEditarIcon)
    .closest("button")
    .click();

    // Atualiza a descrição da categoria
    cy.get(el.inputDescricao)
      .should("be.visible")
      .clear()
      .type("Teste Categoria");

    this.salvar();
  }

  // Exclui uma categoria com base no nome informado
  excluirCategoria(nome) {
    cy.contains(el.linhaTabela, nome)
      .find(el.botaoExcluir)
      .closest("button")
      .click();

    
    this.salvar();
  }

  // Ação padrão para salvar
  salvar() {
    cy.contains(el.botaoSalvar, "Salvar")
      .should("not.be.disabled")
      .click();
  }
}

export default new Categoria();