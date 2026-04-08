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

  // Excluir Lançamento

  it("Excluir Lancamento", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();
    contaReceber.excluirLancamento();
    contaReceber.botaoSalvar();

    // Assert
    inventory.validarContaReceber();
  });

  // Excluir apenas este lançamento (Recorrente)

  it("Apenas este lançamento(Recorrente)", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();
    contaReceber.excluirRecorrente();

    // Assert
    inventory.validarContaReceber();
  });

  // Excluir este e os próximos (Recorrente)

  it("Este e os proximos lançamentos (Recorrente)", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    contaReceber.excluirEsteProximos();

    // Assert
    inventory.validarContaReceber();
  });

  // Excluir toda a recorrência  (Recorrente)

  it("Todos os lançmentos (Recorrente)", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();
    contaReceber.excluirTodaRecorrencia();

    // Assert
    inventory.validarContaReceber();
  });

  // Excluir Lancamento (Parcelamento)

  it("Excluir Lancamento (Parcelamento)", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();
    contaReceber.excluirLancamento();

    // Assert
   inventory.validarContaReceber();
  });
});
