import contaReceber from "../../../pages/auth/contaReceber";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";
describe("Editar Receber", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    contaReceber.visitarPaginaLogin();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();
    contaReceber.novoLancamentoReceber();

       // Selecionar Propriedade (Desenvolvimento)
    //contaReceber.selecionarPropriedadeDEV();

       // Produção (Selecionar Propriedade)
    // categoria.selecionarPropriedade();

       // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  it("Reabrir Tutilo (Editar)", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.selecionarFrequencia();
    contaReceber.reabrirTitulo();
    contaReceber.botaoSalvar();

    // Assert
    inventory.validarContaReceber();
  });

  it("Editar", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.selecionarFrequencia();
    contaReceber.editarLancamento();
    contaReceber.botaoSalvar();
  });
});
