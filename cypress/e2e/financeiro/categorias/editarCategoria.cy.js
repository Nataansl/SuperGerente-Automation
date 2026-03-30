import categoria from "../../../pages/auth/categoria";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Editar Categoria", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    categoria.visitarPaginaLogin();
    Login.preencherCredenciasValidarDV;
    categoria.selecionarPropriedadeDEV();

    // Produção (Selecionar Propriedade)
    // categoria.selecionarPropriedade();

    // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  it("Editar Categoria", () => {
    // Act (Agir/Executar)
    inventory.acessarCategoria();
    categoria.selecionarCategoria();
    categoria.paginatorCategoria();
    categoria.editarCategoria("Teste Categoria");

    // Assert
    cy.url().should("include", "/financeiro/categoria-financeiro");
  });
});
