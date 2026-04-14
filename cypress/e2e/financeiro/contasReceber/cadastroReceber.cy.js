import contaReceber from "../../../pages/auth/contaReceber";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Cadastros Conta Receber", () => {

  beforeEach(() => {
    cy.viewport(1280, 858);
    contaReceber.visitarPaginaLogin();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();

    // DEV
    // contaReceber.selecionarPropriedadeDEV();

    // PROD
    // Login.preencherCredenciaisValidas();
  });

  // =============================
  // CATEGORIA
  // =============================
  it("Cadastrar Categoria", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.novoLancamentoReceber();
    contaReceber.cadastrarCategoria();

    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Verificar Categoria Duplicada", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.novoLancamentoReceber();
    contaReceber.verificarCategoria();

    cy.url().should("include", "/financeiro/contas-receber");
  });

  it.only("Cadastrar Categoria (TodaRede)", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.novoLancamentoReceber();
    contaReceber.cadastrarCategoriaTD();

    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Cadastro Duplicado", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.novoLancamentoReceber();
    contaReceber.verificarCategoria();

    cy.url().should("include", "/financeiro/contas-receber");
  });

  // =============================
  //  FORNECEDOR
  // =============================
  it("Cadastrar Fornecedor", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.novoLancamentoReceber();
    contaReceber.cadastrarFornecedor();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });


  // =============================
  // CONTA BANCÁRIA
  // =============================
  it("Cadastrar Conta Bancaria", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.novoLancamentoReceber();
    contaReceber.cadastrarContaBancaria();

    cy.url().should("include", "/financeiro/contas-receber");
  });
  
 
  // =============================
  // CENTRO DE CUSTO
  // =============================
  it("Cadastrar Centro de Custo", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.novoLancamentoReceber();
    contaReceber.cadastrarCentroCusto();

    cy.url().should("include", "/financeiro/contas-receber");
  });

});