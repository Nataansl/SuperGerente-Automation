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

    contaReceber.dropdownCategoria("#category", "Categoria Teste");
    contaReceber.dropdownCategoria("#bankAccount", "Conta TESTE");
    contaReceber.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaReceber.salvar();
    inventory.validarContaReceber();
  });

  it("Excluir Titulo", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    contaReceber.excluirLancamento("Titulo Teste");
    inventory.validarContaReceber();
  });

  it("Incluir Titulo (Pago)", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloPago();

    contaReceber.dropdownCategoria("#category", "Categoria Teste");
    contaReceber.dropdownCategoria("#bankAccount", "Conta TESTE");
    contaReceber.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaReceber.salvar();
    inventory.validarContaReceber();
  });

  it("Conta a Receber (Parcelamento)", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloParcelado();

    contaReceber.dropdownCategoria("#category", "Categoria Teste");
    contaReceber.dropdownCategoria("#bankAccount", "Conta TESTE");

    contaReceber.selecionarParcelamento();
    contaReceber.salvar();

    inventory.validarContaReceber();
  });

  it("Excluir Titulo (Parcelado)", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    contaReceber.excluirProximos("Titulo Teste Parcelado");
    inventory.validarContaReceber();
  });

  it("Observacao no Titulo", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloObservacao();

    contaReceber.dropdownCategoria("#category", "Categoria Teste");
    contaReceber.dropdownCategoria("#bankAccount", "Conta TESTE");

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

  it("Editar descrição", () => {
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

  it("Recorrencia Diario", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloDiario();

    contaReceber.dropdownCategoria("#category", "Categoria Teste");
    contaReceber.dropdownCategoria("#bankAccount", "Conta TESTE");
    contaReceber.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaReceber.ativarRecorrencia();
    contaReceber.selecionarFrequencia("Diário");
    contaReceber.salvar();

    inventory.validarContaReceber();
  });

  it("Excluir Recorrente Diario", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    contaReceber.excluirTodos("Titulo Teste Diário");
    inventory.validarContaReceber();
  });

  it("Recorrencia Semanal", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloSemanal();

    contaReceber.dropdownCategoria("#category", "Categoria Teste");
    contaReceber.dropdownCategoria("#bankAccount", "Conta TESTE");
    contaReceber.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaReceber.ativarRecorrencia();
    contaReceber.selecionarFrequencia("Semanal");
    contaReceber.salvar();
  });

  it("Excluir Recorrente Semanal", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.paginatorContaReceber();

    contaReceber.excluirProximos("Titulo Teste Semanal");
    inventory.validarContaReceber();
  });

  it("Recorrencia Anual", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloAnual();

    contaReceber.dropdownCategoria("#category", "Categoria Teste");
    contaReceber.dropdownCategoria("#bankAccount", "Conta TESTE");
    contaReceber.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaReceber.ativarRecorrencia();
    contaReceber.selecionarFrequencia("Anual");
    contaReceber.salvar();

    inventory.validarContaReceber();
  });

  it("Recorrencia Mensal", () => {
    contaReceber.novoLancamentoReceber();
    contaReceber.incluirTituloMensal();

    contaReceber.dropdownCategoria("#category", "Categoria Teste");
    contaReceber.dropdownCategoria("#bankAccount", "Conta TESTE");
    contaReceber.dropdownCategoria("#costCenter", "Centro de Custo TESTE");

    contaReceber.ativarRecorrencia();
    contaReceber.selecionarFrequencia("Mensal");
    contaReceber.salvar();

    inventory.validarContaReceber();
  });

  it("Excluir Recorrente Mensal", () => {
    contaReceber.selecionarModuloReceber();
    contaReceber.SelecionarMes();
    contaReceber.paginatorContaReceber();

    contaReceber.excluirTodos("Titulo Teste Mensal");
    inventory.validarContaReceber();
  });
});
