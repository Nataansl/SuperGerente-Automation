import { elements as el } from "./elements";

class SistemaGeral {
  // Acessa a aplicação
  visitarPaginaLogin() {
    cy.visit(el.urlDV);
  }

  // Define a quantidade de registros exibidos (30 por página)
  paginator() {
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

  // Validar Messagem
  validarMensagem(mensagem) {
    cy.get(el.validarMessagem, { timeout: 10000 })
      .should("be.visible")
      .and("contain", "Atenção");

    cy.get(el.validarMensagemTexto)
      .should("be.visible")
      .and(
        "contain",
        "Uma mensagem foi enviada ao seu e-mail com o código para resetar sua senha",
      );

    cy.get(el.confirmarMessagem).click();
  }
}

export default new SistemaGeral();
