import sistemaGeral from "../../pages/auth/validarModulo";
import Login from "../../pages/auth/validarModulo";
import inventory from "../../pages/inventory";

describe("Esqueceu Senha", () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.viewport(1280, 858);
    Login.visitarPaginaLogin();
    Login.preencherCredenciasValidarDV();
  });

  it("Validar Modulos Home", () => {
    sistemaGeral.validarHome();

    // Assert
    inventory.validarHome();
  });

  it("Validar Modulos Resultados", () => {
    sistemaGeral.validarResultados();

    // Assert
    inventory.validarResultados();
  });

  it("Validar Modulos Tarifa Média", () => {
    sistemaGeral.validarTarifaMedia();

    // Assert
    inventory.validarTarifaMedia();
  });

  it("Validar Modulos Receitas", () => {
    sistemaGeral.validarReceitas();

    // Assert
    inventory.validarReceitas();
  });

  it("Validar Modulos Despesas", () => {
    sistemaGeral.validarDespesas();

    // Assert
    inventory.validarDespesas();
  });

  it("Validar Modulos Revenue", () => {
    sistemaGeral.validarRevenue();

    // Assert
    inventory.validarRevenue();
  });

  it("Validar Modulos Parceiros", () => {
    sistemaGeral.validarParceiros();

    // Assert
    inventory.validarParceiros();
  });

  it("Validar Modulos Usuários", () => {
    sistemaGeral.validarUsuarios();

    // Assert
    inventory.validarUsuarios();
  });

  it("Validar Modulos Disponibilidade", () => {
    sistemaGeral.validarDisponibilidade();

    // Assert
    inventory.validarDisponibilidade();
  });

  it("Validar Modulos Tipos de Apartamento", () => {
    sistemaGeral.validarTiposdeApartamento();

    // Assert
    inventory.validarTiposdeApartamento();
  });

  it("Validar Modulos Agentes", () => {
    sistemaGeral.validarAgentes();

    // Assert
    inventory.validarAgentes();
  });

  it("Validar Modulos Plano de Conta", () => {
    sistemaGeral.validarPlanodeConta();

    // Assert
    inventory.validarPlanodeConta();
  });

  it("Validar Modulos Apartamentos", () => {
    sistemaGeral.validarApartamentos();

    // Assert
    inventory.validarApartamentos();
  });

  it("Validar Modulos Sobre", () => {
    sistemaGeral.validarSobre();

    // Assert
    inventory.validarSobre();
  });
});
