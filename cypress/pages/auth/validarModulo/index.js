import { elements as el } from "./elements";

class ValidarModulos {
  // Acessa a aplicação
  visitarPaginaLogin() {
    cy.visit(el.urlDV);
  }
  // Validar Modulos no ambiente de Desenvolvimento
  validarHome() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Home", { timeout: 10000 })
      .should("be.visible")
      .click();
  }
  validarResultados() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Resultados", { timeout: 10000 })
      .should("be.visible")
      .click();
  }
  validarTarifaMedia() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Tarifa Média", { timeout: 10000 })
      .should("be.visible")
      .click();
  }
  validarReceitas() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Receitas", { timeout: 10000 })
      .should("be.visible")
      .click();
  }
  validarDespesas() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Despesas", { timeout: 10000 })
      .should("be.visible")
      .click();
  }
  validarRevenue() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Revenue", { timeout: 10000 })
      .should("be.visible")
      .click();
  }
  validarParceiros() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Parceiros", { timeout: 10000 })
      .should("be.visible")
      .click();
  }
  validarUsuarios() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Usuários", { timeout: 10000 })
      .should("be.visible")
      .click();
  }
  validarDisponibilidade() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Disponibilidade", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();
  }
  validarTiposdeApartamento() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Tipos de Apartamento", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();
  }
  validarAgentes() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Agentes", { timeout: 10000 })
      .should("be.visible")
      .click();
  }
  validarPlanodeConta() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Plano de Conta", { timeout: 10000 })
      .should("be.visible")
      .click();
  }
  validarApartamentos() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Apartamentos", { timeout: 10000 })
      .should("be.visible")
      .click();
  }
  validarSobre() {
    cy.get('[aria-label="Financeiro"]', { timeout: 20000 })
      .should("be.visible")
      .click();

    cy.contains(".p-panelmenu-item-label", "Sobre", { timeout: 10000 })
      .should("be.visible")
      .click();
  }
}

export default new SistemaGeral();
