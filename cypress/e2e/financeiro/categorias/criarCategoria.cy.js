import categoria from "../../../pages/auth/categoria";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Criar Categoria", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1300, 858);
    categoria.visitarPaginaLogin();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();
    categoria.selecionarCategoria();
       
      // Selecionar Propriedade (Desenvolvimento)
    //categoria.selecionarPropriedadeDEV();

       // Produção (Selecionar Propriedade)
    // categoria.selecionarPropriedade();

        // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  it("Categoria Duplicada", () => {
    // Act (Agir/Executar)
    categoria.categoriaDuplicada();

    // Assert
    cy.url().should("include", "/financeiro/categoria-financeiro");
  });

  it("Nova Categoria", () => {
    // Act (Agir/Executar)
    categoria.novaCategoria();

    // Assert
    cy.url().should("include", "/financeiro/categoria-financeiro");
  });
});
