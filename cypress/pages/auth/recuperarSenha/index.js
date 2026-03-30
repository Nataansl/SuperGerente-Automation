import { recuperar as el } from "./elements";

class RecuperarSenha {
  visitarPaginaLoginPR() {
    cy.visit("https://supergerente.hmax.com.br/#/");
  }

  visitarPaginaLoginDEV() {
    cy.visit("https://hmax-api-hub-dev.web.app/#/");
  }

  solicitarResetSenha(email) {
    cy.get(el.forgotPasswordLink).should("be.visible").click();

    cy.get(el.emailInput).clear().type("hmaxteste3@gmail.com");

    cy.get(el.enviarButton).click();

    cy.url().should("include", "/esqueceu-senha");
  }

  validarMensagem(mensagem){
    cy.get(el.validarMessagem, { timeout: 10000 })
      .should("be.visible")
      .and("contain", "Atenção");

    cy.get(el.validarMensagemTexto)
      .should("be.visible")
      .and("contain", "Uma mensagem foi enviada ao seu e-mail com o código para resetar sua senha");

    cy.get(el.confirmarMessagem).click();
  }

  preencherResetSenha(email, codigo, novaSenha, confirmarSenha) {
    cy.get(el.Recuperacao).clear().type("hmaxteste3@gmail.com");
    cy.get(el.codigoRecuperacao).clear().type(45658);
    cy.get(el.novaSenha).clear().type("ZpwwPtIbjv123");
    cy.get(el.confirmarSenha).clear().type("ZpwwPtIbjv123");
    cy.get(el.buttonConfirmar).click();
  }

  validarMensagem(mensagem) {
    cy.get(el.validarMessagem, { timeout: 10000 })
      .should("be.visible")
      .and("contain", "Atenção");

    cy.get(el.validarMensagemTexto)
      .should("be.visible")
      .and("contain", "Sua senha foi resetada com sucesso, por favor faça o login novamente utilizando sua nova senha");

    cy.get(el.confirmarMessagem).click();
  }

  emailInvalido(email, codigo, novaSenha, confirmarSenha) {
    cy.get(el.Recuperacao).clear().type("testehmaxteste3gmail.com");
    cy.get(el.codigoRecuperacao).clear().type(45658);
    cy.get(el.novaSenha).clear().type("ZpwwPtIbjv123");
    cy.get(el.confirmarSenha).clear().type("ZpwwPtIbjv123");
    cy.get(el.buttonConfirmar).click();
}

  validarMessagemEmailInvalido() {
    cy.get(validarMessagem).should("contain", "Atenção");
    cy.get(validarMensagemTexto).should("contain", "Email inválido");
    cy.get(confirmarMessagem).click();

    cy.url().should("eq", "https://supergerente.hmax.com.br/#/esqueceu-senha");
  }
}




export default new RecuperarSenha();
