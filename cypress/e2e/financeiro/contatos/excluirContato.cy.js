import contatos from "../../../pages/auth/contatos";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Excluir Contato", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    contatos.visitarPaginaLoginST();
    Login.preencherCredenciasValidarDV;
    contatos.selecionarPropriedadeDEV();

    // Produção (Selecionar Propriedade)
    // categoria.selecionarPropriedade();
    
    // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  it("Excluir Conta", () => {
    // Act (Agir/Executar)
    contatos.selecionarContatos();
    contatos.paginatorContatos();
    contatos.excluirContatos();

    // Assert

    //Messagem (Validar)
    cy.url().should(inventory.validarContatos);
  });
});
