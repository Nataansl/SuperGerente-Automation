import contaPagar from "../../../pages/auth/contaPagar";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Cadastros Conta Pagar", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    contaPagar.visitarPaginaLogin();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();
    
        // Desevolvimento (Selecionar Propriedade)
    //contaPagar.selecionarPropriedadeDEV();

        // Produção (Selecionar Propriedade)
    // categoria.selecionarPropriedade();

       // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  // Cadastrar Categoria 
  it("Cadastrar Categoria", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.novoLancamentoPagar();
    contaPagar.cadastrarCategoria();

    // Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });


  // Verificar Categoria Duplicada
   ("Verificar Categoria Duplicada", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.novoLancamentoPagar();
    contaPagar.verificarCategoria();

    // Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });


  // Cadastrar Categoria (TodaRede)
  it("Cadastrar Categoria (TodaRede)", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.novoLancamentoPagar();
    contaPagar.cadastrarCategoriaTD();

    // Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });


  // Cadastrar Fornecedor
  it("Cadastrar Fornecedor", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.novoLancamentoPagar();
    contaPagar.cadastrarFornecedor();

    // Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });


  // Cadastrar Conta Bancaria
  it("Cadastrar Conta Bancaria", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.novoLancamentoPagar();
    contaPagar.cadastrarContaBancaria();

    // Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });


  // Cadastrar Centro de Custo
  it("Cadastrar Centro de Custo", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.novoLancamentoPagar();
    contaPagar.cadastrarCentroCusto();

    // Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });

});
