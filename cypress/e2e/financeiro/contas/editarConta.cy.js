import conta from "../../../pages/auth/conta";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Editar Conta", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    conta.visitarPaginaLogin();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();

        // Desevolvimento (Selecionar Propriedade)
    //conta.selecionarPropriedadeDEV();

        // Produção (Selecionar Propriedade)
    // conta.selecionarPropriedade();

       // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });


  // No campo (editarConta), insira o nome da conta que deseja editar, por exemplo: "Sicredi"
  it("Editar Conta", () => {
    // Act (Agir/Executar)
    conta.selecionarConta();
    conta.paginatorConta();
    conta.editarConta("Teste Conta1");

    // Assert
    cy.url().should("include", "/financeiro/contas-bancaria");
  });
});
