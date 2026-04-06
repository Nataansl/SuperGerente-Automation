import conta from "../../../pages/auth/conta";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Criar Conta", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    conta.visitarPaginaLogin();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();
    
        // Desevolvimento (Selecionar Propriedade)
    //conta.selecionarPropriedadeDEV();

        // Produção (Selecionar Propriedade)
    // conta.selecionarPropriedade();

       // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  it("Criar Conta", () => {
    // Act (Agir/Executar)
    //conta.selecionarCategoria();
    conta.selecionarConta();
    conta.novaConta();

    // Assert
    cy.url().should("include", "/financeiro/contas-bancaria");
  });
});
