import CentroCusto from "../../../pages/auth/centroCusto";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Editar Centro de Custo", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    CentroCusto.visitarPaginaLogin();
    Login.preencherCredenciasValidarDV;
    CentroCusto.selecionarPropriedadeDEV();

    // Produção (Selecionar Propriedade)
    // categoria.selecionarPropriedade();

    // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  it("Editar Centro de Custo", () => {
    // Act (Agir/Executar)
    CentroCusto.selecionarCentroCusto();
    CentroCusto.paginatorCentroCusto();
    CentroCusto.editarCentroCusto("MarketingT");

    // Assert
    cy.url().should("include", "/financeiro/centro-custo");
  });
});
