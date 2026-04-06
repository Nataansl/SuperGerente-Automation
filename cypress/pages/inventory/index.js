class Inventory {
  validarPagina() {
    cy.visit("https://supergerente.hmax.com.br/#/home");
  }

  validarCamposVazios() {
    cy.visit("https://supergerente.hmax.com.br/#/");
  }

  validarRecuperarSenha(email) {
    cy.visit("https://supergerente.hmax.com.br/#/esqueceu-senha");
  }

  validarResetarSenha(email) {
    cy.visit("https://supergerente.hmax.com.br/#/resetar-senha");
  }

  validarContaPagar() {
    cy.visit("https://supergerente.hmax.com.br/#/financeiro/contas-pagar");
  }

  validarContaReceber() {
    cy.visit("https://supergerente.hmax.com.br/#/financeiro/contas-receber");
  }

   acessarCategoria() {
    cy.visit("/#/financeiro/categoria-financeiro");
  }

  validarUrlCategoria() {
    cy.url().should('include', '/financeiro/categoria-financeiro');
  }

  validarCentroCusto() {
    cy.visit("https://supergerente.hmax.com.br/#/financeiro/centro-custo");
  }

  validarContatos() {
    cy.visit("https://supergerente.hmax.com.br/#/financeiro/contatos");
  }
}
export default new Inventory();
