import categoria from "../../../pages/auth/categoria";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Excluir Categoria", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    categoria.visitarPaginaLogin();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();
       
        // Selecionar Propriedade (Desenvolvimento)
    //categoria.selecionarPropriedadeDEV();

       // Produção (Selecionar Propriedade)
    // categoria.selecionarPropriedade();

        // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

    // No campo excluirCategoria pode informar o nome da categoria existente.
  it("Excluir Conta", () => {
    // Act (Agir/Executar)
    categoria.selecionarCategoria();
    categoria.paginatorCategoria();
    categoria.excluirCategoria("Teste Categoria");

    // Assert
    cy.url().should("include", "/financeiro/categoria-financeiro");
  });
});
