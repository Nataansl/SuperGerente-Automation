import contaPagar from "../../../pages/auth/contaPagar";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Conta a Pagar Recorrente", () => {
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

  it("Lançamentos Recorrente (Semanal)", () => {
    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Semanal");
    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  it("Lançamentos Recorrente (Mensal)", () => {
    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Mensal");
    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  it("Lançamentos Recorrente (Anual)", () => {
    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Anual");
    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  it("Incluir Titulo (Recorrente)", () => {
    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "COMISSOES DE VENDA");
    contaPagar.dropdownCategoria("#contact", "ANTÔNIA E EDUARDA");
    contaPagar.dropdownCategoria("#bankAccount", "BANCO DO BRASIL");
    contaPagar.dropdownCategoria("#costCenter", "Despesas Fixas");

    contaPagar.ativarRecorrencia();
    contaPagar.frequenciaRecorrente();

    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  it("Recorrencia Permanente (Diario)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "COMISSOES DE VENDA");
    contaPagar.dropdownCategoria("#contact", "ANTÔNIA E EDUARDA");
    contaPagar.dropdownCategoria("#bankAccount", "BANCO DO BRASIL");
    contaPagar.dropdownCategoria("#costCenter", "Despesas Fixas");

    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Diário");
    contaPagar.salvar();

    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  it("Recorrencia Permanente (Semanal)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "COMISSOES DE VENDA");
    contaPagar.dropdownCategoria("#contact", "ANTÔNIA E EDUARDA");
    contaPagar.dropdownCategoria("#bankAccount", "BANCO DO BRASIL");
    contaPagar.dropdownCategoria("#costCenter", "Despesas Fixas");

    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Semanal");

    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  it("Recorrencia Permanente (Anual)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "COMISSOES DE VENDA");
    contaPagar.dropdownCategoria("#contact", "ANTÔNIA E EDUARDA");
    contaPagar.dropdownCategoria("#bankAccount", "BANCO DO BRASIL");
    contaPagar.dropdownCategoria("#costCenter", "Despesas Fixas");

    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Anual");

    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  it("Recorrencia Permanente (Mensal)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "COMISSOES DE VENDA");
    contaPagar.dropdownCategoria("#contact", "ANTÔNIA E EDUARDA");
    contaPagar.dropdownCategoria("#bankAccount", "BANCO DO BRASIL");
    contaPagar.dropdownCategoria("#costCenter", "Despesas Fixas");

    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Mensal");

    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-pagar");
  });
});
