import contaPagar from "../../../pages/auth/contaPagar";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Editar conta a Pagar", () => {
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

  it.only("Reabrir Titulo", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar;
    contaPagar.reabrirTitulo("Receber AntecipaçãoReceber Antecipação");

    // Assert
    cy.url().should("include", "/financeiro/contas-pagar");
  });

  // Na classe editarLacamento pode informar o nome do titlo entre 'NOME DO TITULO'
  it("Editar Titulo", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();
    contaPagar.editarLancamento("Receber Antecipação 55");

    // Assert
    cy.url().should("include", "/financeiro/contas-pagar");
  });
});
