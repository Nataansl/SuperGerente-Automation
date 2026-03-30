import CentroCusto from "../../../pages/auth/centroCusto";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Excluir Centro de Custo", () => {
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

  it.only("Excluir Centro de Custo", () => {
    // Act (Agir/Executar)
    CentroCusto.selecionarCentroCusto();
    CentroCusto.paginatorCentroCusto();
    CentroCusto.excluirCentroCusto("Teste Categoriaa");

    // Assert
    cy.url().should("include", "/financeiro/centro-custo");
  });
});
