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
    cy.url().should("include", "/financeiro/categoria-financeiro");
  }

  validarCentroCusto() {
    cy.visit("https://supergerente.hmax.com.br/#/financeiro/centro-custo");
  }

  validarContatos() {
    cy.visit("https://supergerente.hmax.com.br/#/financeiro/contatos");
  }

  validarHome() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/home");
  }

  validarResultados() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/resultado");
  }

  validarTarifaMedia() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/tarifas");
  }

  validarReceitas() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/receitas");
  }

  validarDespesas() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/despesas");
  }

  validarRevenue() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/revenue");
  }

  validarParceiros() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/parceiros");
  }

  validarUsuarios() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/usuarios");
  }

 validarDisponibilidade() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/disponibilidade");
  }

 validarTiposdeApartamento() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/tipo-apartamento");
  }

validarAgentes() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/painel/agente");
  }

validarPlanodeConta() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/painel/plano-conta");
  }

validarApartamentos() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/painel/apartamento");
  }
  
validarSobre() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/about");
  }
  
validarContasBancarias() {
    cy.visit("https://supergerente.hmax.com.br/#/financeiro/contas-bancaria");
  }

validarContato() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/financeiro/contatos");
}

}
export default new Inventory();
