import CentroCusto from "../../../pages/auth/centroCusto";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Criar Centro de Custo", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    CentroCusto.visitarPaginaLogin();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();

    // Selecionar Propriedade (Desenvolvimento)
    //CentroCusto.selecionarPropriedadeDEV();

    // Produção (Selecionar Propriedade)
    // CentroCusto.selecionarPropriedade();

    // Produção (Login)
    // Login.preencherCredenciaisValidas();
  });

  it("Novo Centro de Custo", () => {
    // Act (Agir/Executar)
    CentroCusto.selecionarCentroCusto();
    CentroCusto.novoCentroCusto();

    // Assert
    inventory.validarCentroCusto();
  });

  it("Centro de Custo Duplicado", () => {
    // Act (Agir/Executar)
    CentroCusto.selecionarCentroCusto();
    CentroCusto.CentroCustoDuplicado("Teste Centro de Custo");

    // Assert
    inventory.validarCentroCusto();
  });

  // No campo Centro de Custo pode informar o nome do centro de custo existente e o novo nome.
  it("Editar Centro de Custo", () => {
    // Act (Agir/Executar)
    CentroCusto.selecionarCentroCusto();
    CentroCusto.paginatorCentroCusto();
    CentroCusto.editarCentroCusto(
      "Teste Centro de Custo",
      "Teste Centro Editado",
    );

    // Assert
    inventory.validarCentroCusto();
  });

  // No campo excluirCategoria pode informar o nome da categoria existente.
  it("Excluir Centro de Custo", () => {
    // Act (Agir/Executar)
    CentroCusto.selecionarCentroCusto();
    CentroCusto.paginatorCentroCusto();
    CentroCusto.excluirCentroCusto("Teste Centro Editado");

    // Assert
    inventory.validarCentroCusto();
  });
});
