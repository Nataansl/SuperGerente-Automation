import contatos from "../../../pages/auth/contatos";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Editar Contato", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    contatos.visitarPaginaLoginST();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();
       
       // Selecionar Propriedade (Desenvolvimento)
     //contatos.selecionarPropriedadeDEV();

       // Produção (Selecionar Propriedade)
    // categoria.selecionarPropriedade();

       // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  it("Editar Categoria", () => {
    // Act (Agir/Executar)
    contatos.selecionarContatos();
    contatos.paginatorContatos();
    contatos.editarContatos();

    // Assert
    cy.url().should(inventory.validarContatos);
  });
});
