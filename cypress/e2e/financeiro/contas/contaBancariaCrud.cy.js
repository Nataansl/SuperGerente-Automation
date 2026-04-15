import conta from "../../../pages/auth/conta";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Criar Conta", () => {
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

  it("Criar Conta", () => {
    // Act (Agir/Executar)
    //conta.selecionarCategoria();
    conta.selecionarConta();
    conta.novaConta();

    // Assert
    inventory.validarContasBancarias();
  });

  // Criar Task (Melhoria)
  it("Conta Duplicada", () => {
    // Act (Agir/Executar)
    conta.selecionarConta();
    conta.novaContaDuplica();

    // Assert
    inventory.validarContasBancarias();
  });

  // No campo (editarConta), insira o nome da conta que deseja editar, por exemplo: "Sicredi"
  it("Editar Conta", () => {
    // Act (Agir/Executar)
    conta.selecionarConta();
    conta.paginatorConta();
    conta.editarConta("Teste Conta Bancaria", "Teste Conta Bancaria Editada");

    // Assert
    inventory.validarContasBancarias();
  });

  // No campo (excluirConta), insira o nome da conta que deseja excluir, por exemplo: "Sicredi"
  it("Excluir Conta", () => {
    // Act (Agir/Executar)
    conta.selecionarConta();
    conta.paginatorConta();
    conta.excluirConta("Teste Conta Bancaria Editada");

    // Assert
    inventory.validarContasBancarias();
  });
});
