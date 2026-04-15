import Login from "../../pages/auth/login";
import inventory from "../../pages/inventory";

describe("Login", () => {
  // Executa antes de cada teste
  beforeEach(() => {});

  // Login Ambiente de Desenvolvimento
  it("Realizar login com sucesso", () => {
    // Act
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();

    // Assert
    inventory.validarPagina();
  });

  // Login Ambiente de Produção
  it("Realizar login com sucesso", () => {
    // Act
    Login.visitarPaginaLoginPR();
    Login.preencherCredenciaisValidas();

    // Assert
    inventory.validarPagina();
  });

  // Senha ou Email com informações inválidas
  it("Realizar login com falha", () => {
    // Act
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciaisInvalidas();
    Login.verificarMensagemAtenção();

    // Assert
    inventory.validarPagina();
  });

  // Login com campos vazios 
  it("Realizar login com campos vazios", () => {
    // Act
    Login.visitarPaginaLoginDEV();
    Login.loginComCamposVazios();

    // Assert
    Login.verificarMensagemCamposVazios();
    inventory.validarCamposVazios();
  });
});
