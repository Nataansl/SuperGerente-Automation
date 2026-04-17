import categoria from "../../../pages/auth/categoria";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Criar Categoria", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1300, 858);
    // categoria.visitarPaginaLogin();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();
    categoria.selecionarCategoria();
       
      // Selecionar Propriedade (Desenvolvimento)
    //categoria.selecionarPropriedadeDEV();

       // Selecionar Propriedade (Produção)
    // categoria.selecionarPropriedade();

        // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

   it("Nova Categoria", () => {
    // Act (Agir/Executar)
    categoria.novaCategoria();

    // Assert
    inventory.validarUrlCategoria();
  });
  

    it("Nova Categoria", () => {
    // Act (Agir/Executar)
    categoria.novaCategoriaReceita();

    // Assert
    inventory.validarUrlCategoria();
  });



  it("Categoria Duplicada", () => {
    // Act (Agir/Executar)
    categoria.categoriaDuplicada();

    // Assert
    inventory.validarUrlCategoria();
  });

  // No campo editarCategoria pode informar o nome da categoria existente e o novo nome.
  it("Editar Categoria", () => {
    // Act (Agir/Executar)
    // categoria.selecionarCategoria();
    categoria.paginatorCategoria();
    categoria.editarCategoria("Teste Categoria", "Teste Categoria Editada");

    // Assert
    inventory.validarUrlCategoria();
  });

  // No campo excluirCategoria pode informar o nome da categoria existente.
  it("Excluir Conta", () => {
    // Act (Agir/Executar)
    // categoria.selecionarCategoria();
    categoria.paginatorCategoria();
    categoria.excluirCategoria("Teste Categoria Editada");

    // Assert
    inventory.validarUrlCategoria();
  });





















});
