import contatos from "../../../pages/auth/contatos";

describe("Validação de Módulos e Logout", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    contatos.visitarPaginaLoginST();
    cy.get("#email").type("testenatan@gmail.com");
    cy.get("#password").type("Natan123");
    cy.get(".botaoAzul").click();
  });

  //MOBILE
  it("Validação do Menu Hamburguer (pi-bars)", () => {
    //Arrange
    cy.viewport(430, 932);
    cy.intercept("POST", "**/auth/login").as("login");
    cy.intercept("GET", "**/usuarios/**").as("usuario");
    cy.visit("https://supergerente.hmax.com.br/#/home");

    //Act
    cy.get(".pi-bars").click();
    cy.get(".p-ripple").click();

    //Assert
    cy.visit("https://supergerente.hmax.com.br/#/home");
  });

  // DESKTOP
  it("Validação (Sair)", () => {
    //Arrange
    cy.viewport(1280, 858);
    cy.visit("https://supergerente.hmax.com.br/#/home");

    //Arc
    cy.contains("Sair").click();

    //Assert
    cy.get(".notiflix-confirm-head").should("contain", "Atenção");
    cy.get(".notiflix-confirm-head").should(
      "contain",
      "Confirma logoff do Super Gerente? Você precisará fazer login novamente",
    );

    cy.get("#NXConfirmButtonOk").should("be.visible").click();
  });
});
