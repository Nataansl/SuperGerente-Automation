import contaPagar from "../../../pages/auth/contaPagar";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Duplicar o Lancamento (APagar) ", () => {
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

  // No duplicarLancameto pode ser informado o nome do titulo entre os 'Nome do Titulo'.
  it("Duplicar Lancamento", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.duplicarLancamento("Receber Antecipação");

    // Assert
    cy.url().should("include", "/financeiro/contas-pagar");
  });
});
