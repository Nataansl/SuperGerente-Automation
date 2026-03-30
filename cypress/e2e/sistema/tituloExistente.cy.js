import contatos from "../../../pages/auth/contatos";
describe("Registro Existente", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    cy.login();
    cy.visit("https://supergerente.hmax.com.br/#/home");
  });

  it("Cadastrar Categoria (Existente) ", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    cy.novoLancamentoPagar();

    cy.get('button[ptooltip="Cadastrar Categoria"]').click();
    cy.get("#descricao").should("be.visible").type("TESTE58");

    cy.selectPrime("#parentCategoryId", "ENERGIA ELETRICA");

    cy.get("#createForEveryBusiness").click();

    cy.contains("button", "Salvar").should("not.be.disabled").click();

    cy.contains(".p-toast-summary", "Atenção").should("be.visible");
    cy.contains(
      ".p-toast-detail",
      "Já existe uma categoria com esse nome.",
    ).should("be.visible");

    // Assert (Verificar/Validar)
    cy.visit("https://supergerente.hmax.com.br/#/financeiro/contas-receber");
  });

  it("Conta Banco (Existente)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    cy.novoLancamentoReceber();

    cy.get('button[ptooltip="Cadastrar Conta Bancária"]').click();

    cy.get("#name").type("Conta Principal");
    cy.get("#bankCode").type("001");
    cy.get("#bankName").type("Banco do Brasil");
    cy.get("#agency").type("1234-5");
    cy.get("#account").type("123456-7");

    cy.contains("button", "Salvar").should("not.be.disabled").click();

    cy.contains(".p-toast-summary", "Atenção").should("be.visible");
    cy.contains(
      ".p-toast-detail",
      "Já existe uma categoria com esse nome.",
    ).should("be.visible");

    // Assert
    cy.visit("https://supergerente.hmax.com.br/#/financeiro/contas-bancaria ");
  });

  it("Contatos (Existente)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    cy.novoLancamentoPagar();

    cy.get('button[ptooltip="Cadastrar Contato"]').click();

    cy.get("#document").type("00.000.000/0000.09");
    cy.get("#phone").type("47996598596");
    cy.get("#email").type("teste@gmail.com.br");
    cy.get("#address").type("Rua Cordeiro de Deus");

    cy.contains("button", "Salvar").should("not.be.disabled").click();

    cy.get('[data-pc-section="summary"]', { timeout: 10000 }).should(
      "contain",
      "Erro ao salvar",
    );

    cy.get('[data-pc-section="detail"]').should(
      "contain",
      "O CPF/CNPJ informado para este contato já existe.",
    );

    // Assert
    cy.visit("https://supergerente.hmax.com.br/#/financeiro/contatos");
  });

  it("Centro de Custo (Existente)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    cy.novoLancamentoPagar();
    cy.get('button[ptooltip="Cadastrar Centro de Custo"]').click();

    cy.get("#name").type("Marketing");

    cy.contains("button", "Salvar").should("not.be.disabled").click();

    cy.get('[data-pc-section="summary"]', { timeout: 10000 }).should(
      "contain",
      " Atenção ",
    );

    cy.get('[data-pc-section="detail"]').should(
      "contain",
      "Já existe um centro de custo com esse nome.",
    );

    // Assert
  });
});
