import contaPagar from "../../../pages/auth/contaPagar";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Excluir Conta Pagar", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    contaPagar.visitarPaginaLogin();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();
      
        // Desevolvimento (Selecionar Propriedade)
    //contaPagar.selecionarPropriedadeDEV();

        // Produção (Selecionar Propriedade)
    // categoria.selecionarPropriedade();

       // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  // Na Classe EcluirLancamento pode informar o nome do Titulo para excluir. 
  // Excluir Lançamento
  it("Excluir Lancamento", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();
    contaPagar.excluirLancamento("");

    // Assert
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Excluir Lançamento (Pago)
  it("Excluir Lancamento", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();

    // Na Classe EcluirLancamento pode informar o nome do Titulo para excluir.  
    // Excluir Lançamento Pago
    contaPagar.excluirLancamentoPago("ANTECIPACAO CONTA 20754 (01)");

    // Assert
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Na Classe ExcluirApenasUm pode informar o titulo para ser selecionado.
  // Excluir apenas este lançamento (Recorrente)
  it("Apenas este lançamento(Recorrente)", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar;

    // Excluir Apenas Este Lançamento
    contaPagar.excluirApenasUm("");

    // Assert
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Na Classe ExcluirProximos pode informar o titulo para ser selecionado.
  // Excluir este e os próximos (Recorrente)
  it("Este e os proximos lançamentos (Recorrente)", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();

    // Excluir os proximos lançados e o selecionado
    contaPagar.excluirProximos("");

    // Assert
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Na Classe ExcluirTodos pode informar o titulo para ser selecionado.
  // Excluir toda a recorrência  (Recorrente)
  it("Todos os lançmentos (Recorrente)", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();

    // Excluir todos os titulos recorrentes
    contaPagar.excluirTodos("");

    // Assert
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Na Classe ExcluirProximo pode informar o titulo para ser selecionado.
  // Excluir Lancamento (Parcelamento)
  it("Excluir Lancamento (Parcelamento)", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();

    // Excluir os proximos e o selecionado
    contaPagar.excluirProximos("");

    // Assert
    cy.url().should("include", "/financeiro/contas-pagar");
  });
});
