import conta from "../../../pages/auth/conta";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Criar Conta", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    conta.visitarPaginaLogin();
    Login.preencherCredenciasValidarDV;
    conta.selecionarPropriedadeDEV();

    // Produção (Selecionar Propriedade)
    // categoria.selecionarPropriedade();
    
    // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  it("Criar Conta", () => {
    // Act (Agir/Executar)
    conta.selecionarConta();

    // Assert
    cy.url().should("include", "/financeiro/contas-bancaria");
  });
});
