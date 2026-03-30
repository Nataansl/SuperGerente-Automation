import categoria from "../../../pages/auth/categoria";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Criar Categoria", () => {
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

  it("Categoria Duplicada", () => {
    // Act (Agir/Executar)
    categoria.selecionarCategoria();
    categoria.categoriaDuplicada();

    // Assert
    cy.url().should("include", "/financeiro/categoria-financeiro");
  });

  it.only("Nova Categoria", () => {
    // Act (Agir/Executar)
    categoria.selecionarCategoria();
    categoria.novaCategoria();

    // Assert
    cy.url().should("include", "/financeiro/categoria-financeiro");
  });
});
