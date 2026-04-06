import contaReceber from "../../../pages/auth/contaReceber";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Conta a Receber", () => {
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

  it("Conta a receber", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();

    // Assert
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Incluir Titulo A Receber", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTitulo();

    contaReceber.dropdown("#category", "CAIXA GERAL");
    contaReceber.dropdown("#contact", "ANTÔNIA E EDUARDA");
    contaReceber.dropdown("#bankAccount", "BANCO DO BRASIL");
    contaReceber.dropdown("#costCenter", "Despesas Fixas");

    cy.contains("button", "Salvar").should("not.be.disabled").click();

    //Assert (Verificar/Validar)

    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Incluir Titulo A Receber (Pago)", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTitulo();

    contaReceber.dropdown("#category", "CAIXA GERAL");
    contaReceber.dropdown("#contact", "ANTÔNIA E EDUARDA");
    contaReceber.dropdown("#bankAccount", "BANCO DO BRASIL");
    contaReceber.dropdown("#costCenter", "Despesas Fixas");

    contaReceber.botaoSalvar();

    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Campos Obrigatorios", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTitulo();

    contaReceber.dropdown("#category", "CAIXA GERAL");
    contaReceber.dropdown("#bankAccount", "BANCO DO BRASIL");

    contaReceber.botaoSalvar();

    //Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Parcelamento", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTitulo();

    contaReceber.dropdown("#category", "CAIXA GERAL");
    contaReceber.dropdown("#bankAccount", "BANCO DO BRASIL");

    contaReceber.selecionarParcelamento();

    contaReceber.botaoSalvar();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });

  it("Observacao no Titulo", () => {
    // Act (Agir/Executar)
    contaReceber.novoLancamentoReceber();

    contaReceber.dropdown("#category", "CAIXA GERAL");
    contaReceber.dropdown("#bankAccount", "BANCO DO BRASIL");

    contaReceber.observacaoTituloReceber();

    contaReceber.botaoSalvar();

    // Assert (Verificar/Validar)
    cy.url().should("include", "/financeiro/contas-receber");
  });
});
