import contaReceber from "../../../pages/auth/contaReceber";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Cuplicar o Lancamento", () => {
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

  it("Duplicar Lancamento", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.duplicarLancamento();
    contaReceber.botaoSalvar();

    // Assert
    cy.url().should("include", "/financeiro/contas-receber");
  });
});
