import contaReceber from "../../../pages/auth/contaReceber";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Conta a Receber Recorrente", () => {
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

  it("Lançamentos Recorrente (Semanal)", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();
    contaReceber.ativarRecorrencia();
    contaReceber.selecionarFrequencia("Semanal");

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Lançamentos Recorrente (Mensal)", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();
    contaReceber.ativarRecorrencia();
    contaReceber.selecionarFrequencia("Mensal");

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Lançamentos Recorrente (Anual)", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();
    contaReceber.ativarRecorrencia();
    contaReceber.selecionarFrequencia("Anual");

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Incluir Titulo (Recorrente)", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTitulo();

    contaReceber.dropdown("#category", "CAIXA GERAL");
    contaReceber.dropdown("#contact", "ANTÔNIA E EDUARDA");
    contaReceber.dropdown("#bankAccount", "BANCO DO BRASIL");
    contaReceber.dropdown("#costCenter", "Despesas Fixas");
    contaReceber.ativarRecorrencia();
    contaReceber.frequenciaRecorrente();

    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Recorrencia Permanente (Diario)", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTitulo();

    contaReceber.dropdown("#category", "CAIXA GERAL");
    contaReceber.dropdown("#contact", "ANTÔNIA E EDUARDA");
    contaReceber.dropdown("#bankAccount", "BANCO DO BRASIL");
    contaReceber.dropdown("#costCenter", "Despesas Fixas");
    contaReceber.ativarRecorrencia();

    contaReceber.frequenciaDiario();

    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Recorrencia Permanente (Semanal)", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTitulo();

    contaReceber.dropdown("#category", "CAIXA GERAL");
    contaReceber.dropdown("#contact", "ANTÔNIA E EDUARDA");
    contaReceber.dropdown("#bankAccount", "BANCO DO BRASIL");
    contaReceber.dropdown("#costCenter", "Despesas Fixas");

    contaReceber.ativarRecorrencia();
    contaReceber.frequenciaSemanal();

    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Recorrencia Permanente (Mensal)", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTitulo();

    contaReceber.dropdown("#category", "CAIXA GERAL");
    contaReceber.dropdown("#contact", "ANTÔNIA E EDUARDA");
    contaReceber.dropdown("#bankAccount", "BANCO DO BRASIL");
    contaReceber.dropdown("#costCenter", "Despesas Fixas");

    contaReceber.ativarRecorrencia();
    contaReceber.frequenciaMesal();

    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Recorrencia Permanente (Anual)", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTitulo();

    cy.selectPrime("#category", "CAIXA GERAL");
    cy.selectPrime("#contact", "ANTÔNIA E EDUARDA");
    cy.selectPrime("#bankAccount", "BANCO DO BRASIL");
    cy.selectPrime("#costCenter", "Despesas Fixas");

    contaReceber.ativarRecorrencia();
    contaReceber.frequenciaAnual();
    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });
});
