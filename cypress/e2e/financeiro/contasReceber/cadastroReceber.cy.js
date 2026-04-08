import contaReceber from "../../../pages/auth/contaReceber";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Cadastros a Receber", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    contaReceber.visitarPaginaLogin();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();

      // Selecionar Propriedade (Desenvolvimento)
    //contaReceber.selecionarPropriedadeDEV();

       // Produção (Selecionar Propriedade)
    // categoria.selecionarPropriedade();

       // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  it("Cadastrar Categoria (Existente) ", () => {
    // Act (Agir/Executar)
    contaReceber.cadastrarCategoriaReceberExistente();

    // Assert (Verificar/Validar)
    inventory.validarContaReceber();
  });

  it.only("Cadastrar Nova Categoria ", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.novoLancamentoReceber(); 
    contaReceber.cadastrarCategoria();

    // Assert (Verificar/Validar)
     inventory.validarContaReceber();
  });

  it("Cadastrar Fornecedor", () => {
    // Act (Agir/Executar)
    contaReceber.cadastrarFornecedor();

    // Assert (Verificar/Validar)
    inventory.validarContaReceber();
  });

  it("Cadastrar Conta Bancaria", () => {
    // Act (Agir/Executar)
    contaReceber.cadastrarContaBancaria();

    // Assert (Verificar/Validar)
    inventory.validarContaReceber();
  });

  it("Cadastrar Centro de Custo", () => {
    // Act (Agir/Executar)
    contaReceber.cadastrarCentroCusto();

    // Assert (Verificar/Validar)
    inventory.validarContaReceber();
  });
});
