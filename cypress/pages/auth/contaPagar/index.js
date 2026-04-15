import { elements as el } from "./elements";

function formatarData(data) {
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

function dataHoje() {
  return formatarData(new Date());
}

function dataFutura(dias) {
  const data = new Date();
  data.setDate(data.getDate() + dias);
  return formatarData(data);
}

function mesAnoFromDate(data) {
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = String(data.getFullYear()).slice(-2);

  return `${mes}/${ano}`;
}

class ContaPagar {
  // Acessa a aplicação pelo link principal
  visitarPaginaLogin() {
    cy.visit(el.urlDV);
  }

  selecionarPeriodo(mes, ano) {
    // 1. Abrir o calendário (usa first por causa do ID duplicado)
    cy.get("#icondisplay").first().click();

    // 2. Espera o painel abrir
    cy.get(".p-datepicker-panel").should("be.visible");

    // 3. Ajustar o ano
    cy.get(".p-datepicker-title").contains(ano).should("be.visible");

    // Se precisar navegar ano (ex: próximo)
    // cy.get('[aria-label="Next Year"]').click();

    // 4. Selecionar o mês
    cy.contains(".p-datepicker-month", mes).should("be.visible").click();
  }

  // Seleciona a propriedade produção
  selecionarPropriedade() {
    cy.get(el.selectCliente, { timeout: 10000 }).should("be.visible").click();

    cy.contains(el.opcaoPropriedade, "Teste PNatan", {
      timeout: 10000,
    }).click();

    cy.contains(el.botaoConfirmarPropriedade, "Confirmar propriedade")
      .should("not.be.disabled")
      .click();
  }

  // Selecionar a propriedade DEV
  selecionarPropriedadeDEV() {
    cy.get(el.selectCliente, { timeout: 10000 }).should("be.visible").click();

    cy.contains(el.opcaoPropriedade, "HOTEL_CENTRAL_DEV", {
      timeout: 10000,
    }).click();

    cy.contains(el.botaoConfirmarPropriedade, "Confirmar propriedade")
      .should("not.be.disabled")
      .click();
  }

  // Navega até o módulo de Contas a Pagar dentro do menu Financeiro
  selecionarModuloPagar() {
    cy.contains(el.menuFinanceiro, "Financeiro", { timeout: 10000 })
      .closest(".p-panelmenu-header")
      .click();

    cy.contains(el.menuContasPagar, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  // Altera a quantidade de registros exibidos na tabela para 30 itens
  paginatorContaPagar() {
    cy.get(el.paginatorDropdown, { timeout: 10000 }).click();

    cy.get("body")
      .find(el.paginatorOptions)
      .contains("30", { timeout: 10000 })
      .click();
  }

  // Acessa a tela de criação de um novo lançamento
  novoLancamentoPagar() {
    this.selecionarModuloPagar();

    cy.contains(el.botaoNovoLancamento, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  // Cadastra uma nova categoria financeira
  cadastrarCategoria() {
    cy.get(el.botaoCadastrarCategoria).click();

    cy.get(el.inputDescricaoCategoria)
      .should("be.visible")
      .type("Categoria Teste");

    this.salvar();
  }

  // Cadastra categoria (TodaRede)
  cadastrarCategoriaTD() {
    cy.get(el.botaoCadastrarCategoria).click();

    cy.get(el.inputDescricaoCategoria)
      .should("be.visible")
      .type("Categoria Teste TD");

    // Autocomplete correto
    cy.get(el.selectCategoriaPai)
      .should("be.visible")
      .clear()
      .type("Categoria Teste");

    cy.get("body", { timeout: 10000 })
      .contains(".p-autocomplete-option", "Categoria Teste")
      .should("be.visible")
      .click();

    this.salvar();
  }

  // Verificar Registro Duplicado
  verificarCategoria() {
    cy.get(el.botaoCadastrarCategoria).click();

    cy.get(el.inputDescricaoCategoria)
      .should("be.visible")
      .type("Categoria Teste");

    this.salvar();

    cy.get(el.NotificationTitle).should("be.visible").and("contain", "Atenção");

    cy.get(el.NotificationMessage, { timeout: 10000 })
      .should("be.visible")
      .and("contain", "Já existe uma categoria com esse nome.");
  }

  // Cadastra um fornecedor (contato)
  cadastrarFornecedor() {
    cy.get(el.botaoCadastrarContato).click();

    cy.get(el.inputNome).type("AFornecedor Teste");

    // Seleciona tipo de contato como Fornecedor
    cy.get(el.selectTipoContato).click();

    cy.get("body")
      .find(el.opcaoSelect, { timeout: 10000 })
      .should("be.visible");

    cy.contains(el.opcaoSelect, "Fornecedor").click();

    // Preenche dados do fornecedor
    cy.get(el.inputDocumento).type("00.000.000/0000.09");
    cy.get(el.inputTelefone).type("47996598596");
    cy.get(el.inputEmail).type("teste@gmail.com.br");
    cy.get(el.inputEndereco).type("Rua Cordeiro de Deus");

    this.salvar();
  }

  // Cadastra uma nova conta bancária
  cadastrarContaBancaria() {
    cy.get(el.botaoCadastrarContaBancaria).click();

    cy.get(el.inputNome).type("Conta TESTE");
    cy.get(el.inputBankCode).type("001");
    cy.get(el.inputBankName).type("Banco do Brasil");
    cy.get(el.inputAgency).type("1234-5");
    cy.get(el.inputAccount).type("123456-7");

    this.salvar();
  }

  // Cadastra um centro de custo
  cadastrarCentroCusto() {
    cy.get(el.botaoCadastrarCentroCusto).click();

    cy.get(el.inputNome).type("Centro de Custo TESTE");

    this.salvar();
  }

  // Preenche os dados básicos de um lançamento a pagar
  incluirTituloPago() {
    const competencia = dataHoje();
    const vencimento = dataFutura(7);

    cy.get(el.inputDescricao).should("be.visible").type("Titulo Teste Pago");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(vencimento);
    cy.get(el.inputDataCompetencia).clear().type(competencia);

    // Marca como Titulo já pago
    cy.get(el.checkboxPago).check();
  }

  // Incluir Titulo Diário
  incluirTituloDiario() {
    const competencia = dataHoje();
    const vencimento = dataFutura(7);

    cy.get(el.inputDescricao).should("be.visible").type("Titulo Teste Diário");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(vencimento);
    cy.get(el.inputDataCompetencia).clear().type(competencia);

    // Marca como Titulo já pago
    cy.get(el.checkboxPago).check();
  }

  // Incluir Titulo Semanal
  incluirTituloSemanal() {
    const competencia = dataHoje();
    const vencimento = dataFutura(7); // +7 dias

    cy.get(el.inputDescricao).should("be.visible").type("Titulo Teste Semanal");

    cy.get(el.inputValor).clear().type("260");

    cy.get(el.inputDataVencimento).clear().type(vencimento);

    cy.get(el.inputDataCompetencia).clear().type(competencia);

    // Marca como Título já pago
    cy.get(el.checkboxPago).check();
  }

  // Incluir Titulo Anual
  incluirTituloAnual() {
    const hoje = new Date();

    const competencia = formatarData(hoje);

    const vencimentoDate = new Date();
    vencimentoDate.setDate(vencimentoDate.getDate() + 365);

    const vencimento = formatarData(vencimentoDate);

    this.periodoVencimento = mesAnoFromDate(vencimentoDate);

    cy.get(el.inputDescricao).should("be.visible").type("Titulo Teste Anual");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(vencimento);
    cy.get(el.inputDataCompetencia).clear().type(competencia);

    cy.get(el.checkboxPago).check();
  }

  // Incluir Titulo Mensal
  incluirTituloMensal() {
    const competencia = dataHoje();
    const vencimento = dataFutura(30); // +30 dias

    cy.get(el.inputDescricao).should("be.visible").type("Titulo Teste Mensal");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(vencimento);
    cy.get(el.inputDataCompetencia).clear().type(competencia);

    // Marca como Titulo já pago
    cy.get(el.checkboxPago).check();
  }

  // Preenche os dados básicos de um lançamento a pagar
  incluirTitulo() {
    const competencia = dataHoje();
    const vencimento = dataFutura(7);

    cy.get(el.inputDescricao).should("be.visible").type("Titulo Teste");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(vencimento);
    cy.get(el.inputDataCompetencia).clear().type(competencia);
  }

  // Preenche os dados básicos de um lançamento a pagar (Parcelamento)
  incluirTituloParcelado() {
    const competencia = dataHoje();
    const vencimento = dataFutura(7);

    cy.get(el.inputDescricao)
      .should("be.visible")
      .type("Titulo Teste Parcelado");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(vencimento);
    cy.get(el.inputDataCompetencia).clear().type(competencia);
  }

  // Preenche os dados básicos de um lançamento a pagar (Observação)
  incluirTituloObservacao() {
    const competencia = dataHoje();
    const vencimento = dataFutura(7); // +7 dias

    cy.get(el.inputDescricao)
      .should("be.visible")
      .type("Titulo Teste Observação");

    cy.get(el.inputValor).clear().type("260");

    cy.get(el.inputDataVencimento)
      .clear()
      .should("have.value", "")
      .type(vencimento);

    cy.get(el.inputDataCompetencia)
      .clear()
      .should("have.value", "")
      .type(competencia);
  }

  // Duplica um lançamento existente baseado no nome informado
  duplicarLancamento(nome) {
    cy.contains(el.colunaTabela, nome)
      .parents(el.linhaTabela)
      .find(el.botaoDuplicar)
      .click();

    this.salvar();
  }

  // Editar Lançamento - Edita a descrição de um lançamento existente baseado no nome informado
  editarLancamento(descricaoAtual, novaDescricao) {
    cy.contains(el.colunaTabela, descricaoAtual)
      .parents(el.linhaTabela)
      .within(() => {
        cy.get(el.botaoEditar).click();
      });

    // Garantir que o modal abriu
    cy.get(".p-dialog").should("be.visible");

    // Agora o campo fica acessível
    cy.get(el.inputDescricao).type(novaDescricao);

    cy.contains("button", "Salvar").should("be.visible").click();
  }

  // Exclui um lançamento específico
  excluirLancamento(nome) {
    cy.contains(el.colunaTabela, nome)
      .parents(el.linhaTabela)
      .find(el.botaoExcluir)
      .click();

    cy.contains(el.botaoConfirmar, "Confirmar")
      .should("not.be.disabled")
      .click();
  }

  // Excluir um lançamento (Pago)
  excluirLancamentoPago(nome) {
    // 1. Garante que a linha existe
    cy.contains("tr", nome, { timeout: 10000 })
      .should("be.visible")
      .within(() => {
        cy.get(el.botaoExcluir).should("be.visible").click();
      });

    // 2. Espera o modal abrir (ESSENCIAL)
    cy.get(".p-dialog", { timeout: 10000 }).should("be.visible");

    // 3. Confirma exclusão direto
    cy.contains("button", "Excluir")
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  }

  // Exclui lançamentos recorrentes conforme o tipo escolhido
  excluirRecorrente(nome, tipo) {
    cy.contains(el.colunaTabela, nome)
      .closest(el.linhaTabela)
      .find(el.iconeTrash)
      .click();

    cy.contains(tipo).should("not.be.disabled").click();

    cy.contains(el.botaoConfirmar, "Confirmar")
      .should("not.be.disabled")
      .click();
  }

  excluirApenasUm(nome) {
    // 1. Clica no botão excluir da tabela
    cy.contains("tr", nome, { timeout: 10000 })
      .should("be.visible")
      .within(() => {
        cy.get(el.iconeTrash).closest("button").click();
      });

    // 2. Espera modal abrir
    cy.get(".p-dialog", { timeout: 10000 }).should("be.visible");

    // 3. Clica na opção correta (CARD!)
    cy.contains("div.font-medium", "Excluir apenas este lançamento", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();

    this.Confimar();
  }

  excluirProximos(nome) {
    // 1. Clica no botão excluir da tabela
    cy.contains("tr", nome, { timeout: 10000 })
      .should("be.visible")
      .within(() => {
        cy.get(el.iconeTrash).closest("button").click();
      });

    // 2. Espera modal abrir
    cy.get(".p-dialog", { timeout: 10000 }).should("be.visible");

    // 3. Clica na opção correta (CARD!)
    cy.contains("div.font-medium", "Excluir este e os próximos", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();

    this.Confimar();
  }

  excluirTodos(nome) {
    // 1. Clica no botão excluir da tabela
    cy.contains("tr", nome, { timeout: 10000 })
      .should("be.visible")
      .within(() => {
        cy.get(el.iconeTrash).closest("button").click();
      });

    // 2. Espera modal abrir
    cy.get(".p-dialog", { timeout: 10000 }).should("be.visible");

    // 3. Clica na opção correta (CARD!)
    cy.contains("div.font-medium", "Excluir toda a recorrência", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();

    this.ExcluirTudo();

    this.Confimar();
  }

  // Reabre um Titulo previamente fechado/pago
  reabrirTitulo(nome) {
    cy.contains(el.colunaTabela, nome)
      .first()
      .closest(el.linhaTabela)
      .find(el.botaoEditar)
      .click();

    cy.contains(el.botaoSalvar, "Reabrir Título")
      .should("not.be.disabled")
      .click();

    cy.get(el.botaoConfirmarOk).click();

    cy.get(el.inputDescricao).type(nome);

    this.salvar();
  }

  // Ativa a recorrência de um lançamento
  ativarRecorrencia() {
    cy.get(el.toggleRecorrencia).closest(".p-toggleswitch").click();
    cy.get('input[name="endless"]')
      .parents('[data-pc-name="toggleswitch"]')
      .click();
  }

  // Seleciona o tipo de frequência (Mensal, Semanal, Anual, etc.)
  selecionarFrequencia(tipo) {
    cy.get(el.selectFrequencia).should("be.visible").click();

    cy.get("body").find(el.opcaoSelect).should("have.length.greaterThan", 0);

    cy.get("body").contains(el.opcaoSelect, tipo).should("be.visible").click();

    // garante que o dropdown fechou
    cy.get(el.opcaoSelect).should("not.exist");

    this.salvar();
  }

  // Define a data da recorrência
  frequenciaRecorrente() {
    cy.get(el.inputDataFrequencia)
      .click()
      .invoke("attr", "aria-controls")
      .then((panelId) => {
        cy.get(`#${panelId}`).find('[data-date="2026-2-4"]').click();
      });

    this.salvar();
  }

  // Adiciona observação ao Titulo
  observacaoTituloPagar() {
    cy.contains(el.abaDetalhes).click();

    cy.get(el.inputObservacao).type("Teste Editado Observação");

    this.salvar();
  }

  // Adiciona observação ao Titulo
  observacaoTitulo() {
    cy.contains(el.abaDetalhes).click();

    cy.get(el.inputObservacao).type("Teste Editado Observação");

    this.salvar();
  }

  // Seleciona uma opção em dropdown customizado
  dropdownCategoria(campo, opcao) {
    cy.get(campo).click().type(opcao);

    cy.get(el.selectListbox).should("be.visible");

    cy.contains(el.opcaoPropriedade, opcao).click();
  }

  // Parcelamento
  selecionarParcelamento() {
    cy.contains(el.campoParcelamento).click();

    cy.get(el.inputQtdParcelas).type(2);
  }

  selecionarFrequencia(tipo) {
    cy.get(el.selectFrequencia).click();

    cy.get(el.opcaoSelect, { timeout: 10000 }).should("be.visible");

    cy.get("body").contains(el.opcaoSelect, tipo).click();
  }

  // Ação padrão para salvar formulários
  salvar() {
    cy.contains("button", "Salvar", { timeout: 10000 })
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  }

  // Acão padrão para Confirmar
  Confimar() {
    cy.contains(el.Confirmar, "Confirmar").should("not.be.disabled").click();
  }

  ExcluirTudo() {
    cy.contains(el.Confirmar, "Excluir Tudo").should("not.be.disabled").click();
  }

  SelecionarMes() {
    cy.get(".pi-chevron-circle-right").filter(":visible").first().click();
  }
}

export default new ContaPagar();
