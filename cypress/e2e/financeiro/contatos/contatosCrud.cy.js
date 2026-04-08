import contatos from "../../../pages/auth/contatos";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Criar Contatos", () => {
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

  it("Criar Contatos", () => {
    // Act (Agir/Executar)
    contatos.selecionarContatos();
    contatos.adicionarContato();

    // Assert
    inventory.validarContato(); 
  });

  it("Criar Contatos (Duplicado)", () => {
    // Act (Agir/Executar)
    contatos.selecionarContatos();
    contatos.adicionarContatoDuplicado();
  });

  it("Editar Contato", () => {
    // Act (Agir/Executar)
    contatos.selecionarContatos();
    contatos.paginatorContatos();
    contatos.editarContatos("ACriado Contato", "AAEditado Contato");

    // Assert
    inventory.validarContato();
  });

  it("Excluir Conta", () => {
    // Act (Agir/Executar)
    contatos.selecionarContatos();
    contatos.paginatorContatos();
    contatos.excluirContatos();

    // Assert

    //Messagem (Validar)
    inventory.validarContato();
  });
});
