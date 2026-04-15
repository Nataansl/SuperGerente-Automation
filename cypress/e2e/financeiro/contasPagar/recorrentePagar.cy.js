import contaPagar from "../../../pages/auth/contaPagar";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";

describe("Conta a Pagar Recorrente", () => {
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

    // Validar o campo (Semanal)
  it("Lançamentos Recorrente (Semanal)", () => {
    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Semanal");
    // Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });
    
   // Validar o campo (Mensal) 
  it("Lançamentos Recorrente (Mensal)", () => {
    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Mensal");
    // Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });

    // Validar o campo (Anual)
  it("Lançamentos Recorrente (Anual)", () => {
    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Anual");
    // Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });


  it("Recorrencia Permanente (Diario)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "COMISSOES DE VENDA");
    contaPagar.dropdownCategoria("#contact", "Adriana e Melissa Contábil Ltda");
    contaPagar.dropdownCategoria("#bankAccount", "Banco do Brasil");
    contaPagar.dropdownCategoria("#costCenter", "Despesas Fixas");

    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Diário");
    contaPagar.salvar();

    //Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });

  it("Recorrencia Permanente (Semanal)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "COMISSOES DE VENDA");
    contaPagar.dropdownCategoria("#contact", "Adriana e Melissa Contábil Ltda");
    contaPagar.dropdownCategoria("#bankAccount", "Banco do Brasil");
    contaPagar.dropdownCategoria("#costCenter", "Despesas Fixas");

    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Semanal");

    //Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });

  it("Recorrencia Permanente (Anual)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "COMISSOES DE VENDA");
    contaPagar.dropdownCategoria("#contact", "Adriana e Melissa Contábil Ltda");
    contaPagar.dropdownCategoria("#bankAccount", "Banco do Brasil");
    contaPagar.dropdownCategoria("#costCenter", "Despesas Fixas");

    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Anual");

    //Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });

  it("Recorrencia Permanente (Mensal)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "COMISSOES DE VENDA");
    contaPagar.dropdownCategoria("#contact", "Adriana e Melissa Contábil Ltda");
    contaPagar.dropdownCategoria("#bankAccount", "Banco do Brasil");
    contaPagar.dropdownCategoria("#costCenter", "Despesas Fixas");

    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Mensal");

    //Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });
});
