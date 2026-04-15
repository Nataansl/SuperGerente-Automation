import contaPagar from "../../../pages/auth/contaPagar";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";
import categoria from "../../../pages/auth/categoria";
import contatos from "../../../pages/auth/contatos";

describe("Conta a Pagar", () => {
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

  // Abrir a Tela Conta a Pagar
  it("Conta A Pagar", () => {
    // Act
    contaPagar.novoLancamentoPagar();

    // Assert
    inventory.validarContaPagar();
  });

  // Incluir Titulo A Pagar
  it("Incluir Titulo A Pagar", () => {
    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTitulo();

    contaPagar.dropdownCategoria("#category", "Categoria Teste");
    contaPagar.dropdownCategoria("#bankAccount", "Conta TESTE");
    contaPagar.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaPagar.salvar();

    //Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });

  // Na Classe ExcluirLancamento pode informar o nome do Titulo para excluir.
  // Excluir Lançamento
  it("Excluir Titulo) ", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();
    contaPagar.excluirLancamento("Titulo Teste");

    // Assert
    inventory.validarContaPagar();
  });

  // Incluir Titulo A Pagar (Pago)
  it("Incluir Titulo A Pagar (Pago)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloPago();

    contaPagar.dropdownCategoria("#category", "Categoria Teste");
    contaPagar.dropdownCategoria("#bankAccount", "Conta TESTE");
    contaPagar.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaPagar.salvar();

    //Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });

  // Incluir Titulo A Pagar (Parcelamento)
  it("Conta a Pagar (Parcelamento)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloParcelado();

    contaPagar.dropdownCategoria("#category", "Categoria Teste");
    contaPagar.dropdownCategoria("#bankAccount", "Conta TESTE");

    contaPagar.selecionarParcelamento();
    contaPagar.salvar();

    // Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });

  // Na Classe ExcluirProximo pode informar o titulo para ser selecionado.
  // Excluir Lancamento (Parcelamento)
  it("Excluir Titulo (Parcelado)", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();

    // Excluir os proximos e o selecionado
    contaPagar.excluirProximos("Titulo Teste Parcelado");

    // Assert
    inventory.validarContaPagar();
  });

  // Incluir um Titulo com Observacao
  it("Observacao no Titulo", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloObservacao();

    contaPagar.dropdownCategoria("#category", "Categoria Teste");
    contaPagar.dropdownCategoria("#bankAccount", "Conta TESTE");

    contaPagar.observacaoTitulo();

    // Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });

  // No duplicarLancameto pode ser informado o nome do titulo entre os 'Nome do Titulo'.
  it("Duplicar Lancamento", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();
    contaPagar.duplicarLancamento("Titulo Teste Observação");

    // Assert
    inventory.validarContaPagar();
  });

  it("Reabrir Titulo", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();
    contaPagar.reabrirTitulo("Titulo Teste Pago");

    // Assert
    inventory.validarContaPagar();
  });

  // Incluir Titulo A Pagar
  it("Incluir Titulo A Pagar", () => {
    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTitulo();

    contaPagar.dropdownCategoria("#category", "Categoria Teste");
    contaPagar.dropdownCategoria("#bankAccount", "Conta TESTE");
    contaPagar.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaPagar.salvar();

    //Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });

  it("Editar descrição de lançamento", () => {
    // Act
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();
    contaPagar.editarLancamento("Titulo Teste", "Editado Titulo Descrição");

    // Assert
    inventory.validarContaPagar();
  });

  // Na classe editarLacamento pode informar o nome do titlo entre 'NOME DO TITULO'
  it("Editar Titulo", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();
    contaPagar.editarLancamento(
      "Editado Titulo Descrição",
      "Titulo Teste Editado",
    );

    // Assert
    inventory.validarContaPagar();
  });

  // Excluir Lançamento (Pago)
  it("Excluir Titulo (Editado)", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();

    // Na Classe EcluirLancamento pode informar o nome do Titulo para excluir.
    // Excluir Lançamento Pago
    contaPagar.excluirLancamento("Titulo Teste Editado");

    // Assert
    inventory.validarContaPagar();
  });

  it("Recorrencia Permanente (Diario)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloDiario();

    contaPagar.dropdownCategoria("#category", "Categoria Teste");
    contaPagar.dropdownCategoria("#bankAccount", "Conta TESTE");
    contaPagar.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Diário");
    contaPagar.salvar();

    //Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });

  // Na Classe ExcluirApenasUm pode informar o titulo para ser selecionado.
  // Excluir apenas este lançamento (Recorrente) (Diario)
  it("Excluir Titulo (Recorrente Diario)", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar;

    // Excluir Apenas Este Lançamento
    contaPagar.excluirTodos("Titulo Teste Diário");

    // Assert
    inventory.validarContaPagar();
  });

  it("Recorrencia Permanente (Semanal)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloSemanal();

    contaPagar.dropdownCategoria("#category", "Categoria Teste");
    contaPagar.dropdownCategoria("#bankAccount", "Conta TESTE");
    contaPagar.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Semanal");
    contaPagar.salvar();
  });

  // Na Classe ExcluirProximos pode informar o titulo para ser selecionado.
  // Excluir este e os próximos (Recorrente)
  it("Excluir Titulo (Recorrente Semanal)", () => {
    // Act (Agir/Executar)
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();

    // Excluir os proximos lançados e o selecionado
    contaPagar.excluirProximos("Titulo Teste Semanal");

    // Assert
    inventory.validarContaPagar();
  });

  it("Recorrencia Permanente (Anual)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloAnual();

    contaPagar.dropdownCategoria("#category", "Categoria Teste");
    contaPagar.dropdownCategoria("#bankAccount", "Conta TESTE");
    contaPagar.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Anual");
    contaPagar.salvar();

    //Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });
 
  // Na Classe ExcluirTodos pode informar o titulo para ser selecionado.
  // Excluir toda a recorrência  (Recorrente)
  it.only("Excluir Titulo (Recorrente Anual)", () => {
    contaPagar.selecionarModuloPagar();
    contaPagar.paginatorContaPagar();

    contaPagar.expandirTitulo("Titulo Teste Anual");

    contaPagar.excluirTodos("Titulo Teste Anual");

    inventory.validarContaPagar();
  });
   
  it("Recorrencia Permanente (Mensal)", () => {
    //Arrange (Organizar/Configurar)

    // Act (Agir/Executar)
    contaPagar.novoLancamentoPagar();
    contaPagar.incluirTituloMensal();

    contaPagar.dropdownCategoria("#category", "Categoria Teste");
    contaPagar.dropdownCategoria("#bankAccount", "Conta TESTE");
    contaPagar.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaPagar.ativarRecorrencia();
    contaPagar.selecionarFrequencia("Mensal");
    contaPagar.salvar();

    //Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });

  // Na Classe ExcluirTodos pode informar o titulo para ser selecionado.
  // Excluir toda a recorrência  (Recorrente)
  it("Excluir Titulo (Recorrente Mensal)", () => {
    contaPagar.selecionarModuloPagar();
    contaPagar.SelecionarMes();
    contaPagar.paginatorContaPagar();

    // Excluir todos os títulos recorrentes
    contaPagar.excluirTodos("Titulo Teste Mensal");

    //Assert (Verificar/Validar)
    inventory.validarContaPagar();
  });
});
