import contaPagar from "../../../pages/auth/contaPagar";
import Login from "../../../pages/auth/Login";
import inventory from "../../../pages/inventory";

describe("Editar conta a Pagar", () => {
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

  it("Reabrir Titulo", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar;
    contaPagar.reabrirTitulo("TESTE66");

    // Assert
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Na classe editarLacamento pode informar o nome do titlo entre 'NOME DO TITULO'
  it("Editar Titulo", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();
    contaPagar.editarLancamento();

    // Assert
    cy.url().should("include", "/financeiro/contas-pagar");
  });
});
