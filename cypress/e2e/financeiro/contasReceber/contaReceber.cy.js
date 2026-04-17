import contaReceber from "../../../pages/auth/contaReceber";
import Login from "../../../pages/auth/login";
import inventory from "../../../pages/inventory";
import categoria from "../../../pages/auth/categoria";
import contatos from "../../../pages/auth/contatos";

describe("Conta a Receber", () => {
  beforeEach(() => {
    cy.viewport(1280, 858);
    contaReceber.visitarPaginaLogin();
    Login.visitarPaginaLoginDEV();
    Login.preencherCredenciasValidarDV();
  });

  it("Conta A Receber", () => {
    // Act
    contaReceber.novoLancamentoReceber();

    // Assert (Verificar/Validar)
    inventory.validarContaReceber();
  });

  it("Incluir Titulo A Receber", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTitulo();

    contaReceber.dropdownCategoria("#category", "Teste CategoriaR");
    contaReceber.dropdownCategoria("#bankAccount", "Teste Conta Bancaria");
    contaReceber.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    cy.contains("button", "Salvar").should("not.be.disabled").click();

    //Assert (Verificar/Validar)
    inventory.validarContaReceber();
  });

  it("Excluir Titulo", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();
    contaReceber.excluirLancamento("Titulo Teste");

    //Assert (Verificar/Validar)
    inventory.validarContaReceber();
  });

  it("Incluir Titulo (Pago)", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloPago();

    contaReceber.dropdownCategoria("#category", "Teste CategoriaR");
    contaReceber.dropdownCategoria("#bankAccount", "Teste Conta Bancaria");
    contaReceber.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaReceber.salvar();

    //Assert (Verificar/Validar)
    inventory.validarContaReceber();
  });

  it("Conta a Receber (Parcelamento)", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloParcelado();

    contaReceber.dropdownCategoria("#category", "Teste CategoriaR");
    contaReceber.dropdownCategoria("#bankAccount", "Teste Conta Bancaria");

    contaReceber.selecionarParcelamento();
    contaReceber.salvar();

    inventory.validarContaReceber();
  });

  // Na Classe ExcluirProximo pode informar o titulo para ser selecionado.
  // Excluir Lancamento (Parcelamento)
  it("Excluir Titulo (Parcelado)", () => {
    // Act (Agir/Executar)
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    // Excluir os proximos e o selecionado
    contaReceber.excluirProximos("Titulo Teste Parcelado");

    // Assert
    inventory.validarContaReceber();
  });


  it("Observacao no Titulo", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloObservacao();

    contaReceber.dropdownCategoria("#category", "Teste CategoriaR");
    contaReceber.dropdownCategoria("#bankAccount", "Teste Conta Bancaria");
    contaReceber.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaReceber.observacaoTitulo();
    inventory.validarContaReceber();
  });

  it("Duplicar Lancamento", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    contaReceber.duplicarLancamento("Titulo Teste Observação");
    inventory.validarContaReceber();
  });

  it("Reabrir Titulo", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    contaReceber.reabrirTitulo("Titulo Teste Pago");
    inventory.validarContaReceber();
  });

  // Incluir Titulo A Pagar
    it("Incluir Titulo A Receber", () => {
      // Act (Agir/Executar)
      contaReceber.novoLancamentoReceber();
      contaReceber.incluirTitulo();
  
      contaReceber.dropdownCategoria("#category", "Teste CategoriaR");
      contaReceber.dropdownCategoria("#bankAccount", "Teste Conta Bancaria");
      contaReceber.dropdownCategoria("#costCenter", "Centro de Custo TESTE");
  
      contaReceber.salvar();
  
      //Assert (Verificar/Validar)
      inventory.validarContaReceber();
    });


  it("Editar descrição de lançamento", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    contaReceber.editarLancamento("Titulo Teste", "Editado Titulo Descrição");

    inventory.validarContaReceber();
  });

  it("Editar Titulo", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    contaReceber.editarLancamento(
      "Editado Titulo Descrição",
      "Titulo Teste Editado",
    );

    inventory.validarContaReceber();
  });

  it("Excluir Titulo Editado", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    contaReceber.excluirLancamento("Titulo Teste Editado");
    inventory.validarContaReceber();
  });

  it("Recorrencia Permanente (Diario)", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloDiario();

    contaReceber.dropdownCategoria("#category", "Teste CategoriaR");
    contaReceber.dropdownCategoria("#bankAccount", "Teste Conta Bancaria");


    contaReceber.ativarRecorrencia();
    contaReceber.selecionarFrequencia("Diário");
    contaReceber.salvar();

    inventory.validarContaReceber();
  });

  it("Excluir Recorrente Permanente (Diario)", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    contaReceber.excluirTodos("Titulo Teste Diário");
    inventory.validarContaReceber();
  });

  it("Recorrencia Permanente (Semanal)", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloSemanal();

    contaReceber.dropdownCategoria("#category", "Teste CategoriaR");
    contaReceber.dropdownCategoria("#bankAccount", "Teste Conta Bancaria");


    contaReceber.ativarRecorrencia();
    contaReceber.selecionarFrequencia("Semanal");
    contaReceber.salvar();
  });

  it("Excluir Recorrente Permanente (Semanal)", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    contaReceber.excluirProximos("Titulo Teste Semanal");
    inventory.validarContaReceber();
  });

  it("Recorrencia Permanente (Anual)", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloAnual();

    contaReceber.dropdownCategoria("#category", "Teste CategoriaR");
    contaReceber.dropdownCategoria("#bankAccount", "Teste Conta Bancaria");

    contaReceber.ativarRecorrencia();
    contaReceber.selecionarFrequencia("Anual");
    contaReceber.salvar();

    inventory.validarContaReceber();
  });

  it("Recorrencia Permanente (Mensal)", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloMensal();

    contaReceber.dropdownCategoria("#category", "Teste CategoriaR");
    contaReceber.dropdownCategoria("#bankAccount", "Teste Conta Bancaria");


    contaReceber.ativarRecorrencia();
    contaReceber.selecionarFrequencia("Mensal");
    contaReceber.salvar();

    inventory.validarContaReceber();
  });

  it("Excluir Titulo (Recorrente Mensal)", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.SelecionarMes();
    contaReceber.paginatorContaReceber();

    contaReceber.excluirTodos("Titulo Teste Mensal");
    inventory.validarContaReceber();
  });
});
