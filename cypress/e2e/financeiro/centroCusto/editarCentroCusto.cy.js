import CentroCusto from "../../../pages/auth/centroCusto";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Editar Centro de Custo", () => {
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

    // No campo Centro de Custo pode informar o nome do centro de custo existente e o novo nome.
  it("Editar Centro de Custo", () => {
    // Act (Agir/Executar)
    CentroCusto.selecionarCentroCusto();
    CentroCusto.paginatorCentroCusto();
    CentroCusto.editarCentroCusto("Teste Centro de Custo");

    // Assert
    cy.url().should("include", "/financeiro/centro-custo");
  });
});
