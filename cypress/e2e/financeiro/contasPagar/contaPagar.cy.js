import contaPagar from "../../../pages/auth/contaPagar";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Conta a Pagar", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    contaPagar.visitarPaginaLogin();
    Login.preencherCredenciasValidarDV;
    contaPagar.selecionarPropriedadeDEV();

    // Produção (Selecionar Propriedade)
    // categoria.selecionarPropriedade();

    // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  // Abrir a Tela Conta a Pagar
  it("Conta A Pagar", () => {
    // Act
    contaPagar.novoLancamentoPagar();

    // Assert
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Incluir Titulo A Pagar
  it("Incluir Titulo A Pagar", () => {
    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "COMISSOES DE VENDA");
    contaPagar.dropdownCategoria("#contact", "ANTÔNIA E EDUARDA");
    contaPagar.dropdownCategoria("#bankAccount", "BANCO DO BRASIL");
    contaPagar.dropdownCategoria("#costCenter", "Despesas Fixas");

    contaPagar.salvar();

    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Incluir Titulo A Pagar (Pago)
  it("Incluir Titulo A Pagar (Pago)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "COMISSOES DE VENDA");
    contaPagar.dropdownCategoria("#contact", "ANTÔNIA E EDUARDA");
    contaPagar.dropdownCategoria("#bankAccount", "BANCO DO BRASIL");
    contaPagar.dropdownCategoria("#costCenter", "Despesas Fixas");

    contaPagar.salvar();

    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Incluir Titulo A Pagar (Parcelamento)
  it("Conta a Pagar (Parcelamento)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "COMISSOES DE VENDA");
    contaPagar.dropdownCategoria("#bankAccount", "BANCO DO BRASIL");

    contaPagar.selecionarParcelamento();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Observacao no Titulo A Pagar
  it("Observacao no Titulo", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "COMISSOES DE VENDA");
    contaPagar.dropdownCategoria("#bankAccount", "BANCO DO BRASIL");

    contaPagar.observacaoTituloPagar();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });
});
