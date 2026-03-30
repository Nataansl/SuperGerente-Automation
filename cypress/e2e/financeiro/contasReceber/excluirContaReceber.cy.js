import contaReceber from "../../../pages/auth/contaReceber";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Editar Receber", () => {
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

  // Excluir Lançamento

  it("Excluir Lancamento", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();
    contaReceber.excluirLancamento();
    contaReceber.botaoSalvar();

    // Assert
    cy.url().should("include", "/financeiro/contas-receber");
  });

  // Excluir apenas este lançamento (Recorrente)

  it("Apenas este lançamento(Recorrente)", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();
    contaReceber.excluirRecorrente();

    // Assert
    cy.url().should("include", "/financeiro/contas-receber");
  });

  // Excluir este e os próximos (Recorrente)

  it("Este e os proximos lançamentos (Recorrente)", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    contaReceber.excluirEsteProximos();

    // Assert
    cy.url().should("include", "/financeiro/contas-receber");
  });

  // Excluir toda a recorrência  (Recorrente)

  it("Todos os lançmentos (Recorrente)", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();
    contaReceber.excluirTodaRecorrencia();

    // Assert
    cy.url().should("include", "/financeiro/contas-receber");
  });

  // Excluir Lancamento (Parcelamento)

  it("Excluir Lancamento (Parcelamento)", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();
    contaReceber.excluirLancamento();

    // Assert
    cy.url().should("include", "/financeiro/contas-receber");
  });
});
