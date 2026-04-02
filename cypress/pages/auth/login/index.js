import { elements as el } from "./elements";

class Login {
  visitarPaginaLoginPR() {
    cy.visit("https://supergerente.hmax.com.br/#/");
  }

visitarPaginaLoginDEV() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/");
  }
  
   // Credencia de Produção
   // Preenche as credenciais válidas para ambiente de produção (Essas informações pode ser adicionado no .env.example).  
  preencherCredenciaisValidas(email, senha) {
    cy.get(el.emailInput).type('');
    cy.get(el.passwordInput).type("");
    cy.get(el.loginButton).click();
  }

  // Credencia de Desenvolvimento 
   // Preenche as credenciais válidas para ambiente de produção (Essas informações pode ser adicionado no .env.example).
 preencherCredenciasValidarDV(email, senha) { 
    cy.get(el.emailInput).type('');
    cy.get(el.passwordInput).type('');
    cy.get(el.loginButton).click();
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

  preencherCredenciaisInvalidas(email, senha) {
    cy.get(el.emailInput).type("user.invalid@gmail.com");
    cy.get(el.passwordInput).type("12345678");
    cy.get(el.loginButton).click();
  }

  verificarMensagemAtenção(mensagem) {
    cy.get(el.NotificationTitle).should("contain", "Atenção");
    cy.get(el.NotificationMessage).should(
      "contain",
      "Usuário ou Senha inválida",
    );
  }

  loginComCamposVazios() {
    cy.get(el.emailInput).should("be.empty");
    cy.get(el.passwordInput).should("be.empty");
    cy.get(el.loginButton).click();
  }

  verificarMensagemCamposVazios(mensagem) {
    cy.get(el.NotificationTitle).should("contain", "Atenção");
    cy.get(el.NotificationMessage).should(
      "contain",
      "Informe o email e a senha",
    );
  }
}

export default new Login();
