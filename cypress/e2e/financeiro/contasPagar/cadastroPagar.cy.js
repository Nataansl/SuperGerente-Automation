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
    cy.url().should("include", "/financeiro/contas-pagar");
  });


  // Verificar Categoria Duplicada
   ("Verificar Categoria Duplicada", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.novoLancamentoPagar();
    contaPagar.verificarCategoria();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });


  // Cadastrar Categoria (TodaRede)
  it.only("Cadastrar Categoria (TodaRede)", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.novoLancamentoPagar();
    contaPagar.cadastrarCategoriaTD();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Verificar registro duplicado
  it("Cadastro Duplicado", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.novoLancamentoPagar();
    contaPagar.verificarCategoria();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Cadastrar Fornecedor
  it("Cadastrar Fornecedor", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.novoLancamentoPagar();
    contaPagar.cadastrarFornecedor();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Cadastrar Conta Bancaria
  it("Cadastrar Conta Bancaria", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.novoLancamentoPagar();
    contaPagar.cadastrarContaBancaria();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Cadastrar Centro de Custo
  it("Cadastrar Centro de Custo", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.novoLancamentoPagar();
    contaPagar.cadastrarCentroCusto();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });
});
