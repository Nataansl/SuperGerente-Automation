import CentroCusto from "../../../pages/auth/centroCusto";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Criar Centro de Custo", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    CentroCusto.visitarPaginaLogin();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();
    
        // Selecionar Propriedade (Desenvolvimento)
    //CentroCusto.selecionarPropriedadeDEV();

        // Produção (Selecionar Propriedade)
    // CentroCusto.selecionarPropriedade();

      // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  it("Centro de Custo Duplicado", () => {
    // Act (Agir/Executar)
    CentroCusto.selecionarCentroCusto();
    CentroCusto.CentroCustoDuplicado("Teste Centro de Custo");

    // Assert
    cy.url().should("include", "/financeiro/centro-custo");
  });

  it("Novo Centro de Custo", () => {
    // Act (Agir/Executar)
    CentroCusto.selecionarCentroCusto();
    CentroCusto.novoCentroCusto();

    // Assert
    cy.url().should("include", "/financeiro/centro-custo");
  });
});
