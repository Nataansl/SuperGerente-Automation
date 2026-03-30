import recuperarSenha from "../../pages/auth/RecuperarSenha";
import inventory from "../../pages/inventory";

describe("Esqueceu Senha", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    recuperarSenha.visitarPaginaLoginDEV();
  });

  it("Esqueceu minha senha", () => {
    // Act
    recuperarSenha.solicitarResetSenha();
  });

  it("Senha Alterda com sucesso", () => {
    // Act
    recuperarSenha.solicitarResetSenha();
    recuperarSenha.preencherResetSenha();

    // Assert
    recuperarSenha.validarMensagem();
    inventory.validarPagina;
  });

  it("Resetar senha com email inválido", () => {
    // Act
    recuperarSenha.solicitarResetSenha();
    recuperarSenha.emailInvalido();

    // Assert
    recuperarSenha.validarMessagemEmailInvalido();
  });
});
