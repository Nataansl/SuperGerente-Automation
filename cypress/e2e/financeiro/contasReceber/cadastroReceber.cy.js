import contaReceber from "../../../pages/auth/contaReceber";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Cadastros a Receber", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    contaReceber.visitarPaginaLogin();
    Login.preencherCredenciasValidarDV();
    contaReceber.selecionarPropriedadeDEV();
    contaReceber.novoLancamentoReceber();

    // Produção (Selecionar Propriedade)
    // categoria.selecionarPropriedade();
    
    // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  it("Cadastrar Categoria (Existente) ", () => {
    // Act (Agir/Executar)
    contaReceber.cadastrarCategoriaReceberExistente();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Cadastrar Nova Categoria ", () => {
    // Act (Agir/Executar)
    contaReceber.cadastrarCategoria();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Cadastrar Fornecedor", () => {
    // Act (Agir/Executar)
    contaReceber.cadastrarFornecedor();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Cadastrar Conta Bancaria", () => {
    // Act (Agir/Executar)
    contaReceber.cadastrarContaBancaria();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Cadastrar Centro de Custo", () => {
    // Act (Agir/Executar)
    contaReceber.cadastrarCentroCusto();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });
});
