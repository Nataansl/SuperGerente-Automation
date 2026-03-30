import contatos from "../../../pages/auth/contatos";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Criar Contatos", () => {
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

  it("Criar Contatos", () => {
    // Act (Agir/Executar)
    contatos.selecionarContatos();
    contatos.adicionarContato();

    // Assert
    cy.url().should(inventory.validarContatos);
  });
});
