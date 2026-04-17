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

class ContaReceber {
  visitarPaginaLogin() {
    cy.visit(el.urlDV);
  }

  // Selecionar CATEGORIA
  cadastrarCategoria() {
    cy.get(el.botaoCadastrarCategoria).click();

    cy.get(el.inputDescricaoCategoria)
      .should("be.visible")
      .type("Categoria Teste");

    this.salvar();
  }

  cadastrarCategoriaTD() {
    cy.get(el.botaoCadastrarCategoria).click();

    cy.get(el.inputDescricaoCategoria)
      .should("be.visible")
      .type("Categoria Teste TD");

    cy.get(el.selectCategoriaPai)
      .should("be.visible")
      .clear()
      .type("Teste Categoria");

    cy.get("body")
      .contains(".p-autocomplete-option", "Teste CategoriaR")
      .click();

    this.salvar();
  }

  verificarCategoria() {
    cy.get(el.botaoCadastrarCategoria).click();

    cy.get(el.inputDescricaoCategoria)
      .should("be.visible")
      .type("Categoria Teste");

    this.salvar();

    cy.get(el.NotificationTitle).should("be.visible").and("contain", "Atenção");

    cy.get(el.NotificationMessage)
      .should("be.visible")
      .and("contain", "Já existe uma categoria com esse nome.");
  }

  // Criar CONTATO
  cadastrarFornecedor() {
    cy.get(el.botaoCadastrarContato).click();

    cy.get(el.inputNome).type("RFornecedor Teste");

    cy.get(el.selectTipoContato).click();

    cy.get("body").find(el.opcaoSelect).should("be.visible");

    cy.contains(el.opcaoSelect, "Fornecedor").click();

    cy.get(el.inputDocumento).type("00.000.000/0000-00");
    cy.get(el.inputTelefone).type("11999999999");
    cy.get(el.inputEmail).type("teste@gmail.com");
    cy.get(el.inputEndereco).type("Rua Teste");

    this.salvar();
  }

  // Criar Conta Bancária
  cadastrarContaBancaria() {
    cy.get(el.botaoCadastrarContaBancaria).click();

    cy.get(el.inputNome).type("Conta TESTE");
    cy.get(el.inputBankCode).type("001");
    cy.get(el.inputBankName).type("Banco do Brasil");
    cy.get(el.inputAgency).type("1234");
    cy.get(el.inputAccount).type("123456");

    this.salvar();
  }

  // Criar Centro de Custo
  cadastrarCentroCusto() {
    cy.get(el.botaoCadastrarCentroCusto).click().t;

    cy.get(el.inputNome).type("Centro de Custo TESTE");

    this.salvar();
  }

  // Selecionar Propriedade

  selecionarPropriedadeDEV() {
    cy.get(el.selectCliente).click();

    cy.contains(el.opcaoPropriedade, "HOTEL_CENTRAL_DEV").click();

    cy.contains(el.botaoConfirmarPropriedade, "Confirmar propriedade")
      .should("not.be.disabled")
      .click();
  }

  // Selecionar MENU
  selecionarModuloReceber() {
    cy.contains(el.menuFinanceiro, "Financeiro", { timeout: 10000 })
      .closest(".p-panelmenu-header")
      .click();

    cy.contains(el.menuContasReceber, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  paginatorContaReceber() {
    cy.get(el.paginatorDropdown, { timeout: 10000 }).click();

    cy.get("body")
      .find(el.paginatorOptions)
      .contains("30", { timeout: 10000 })
      .click();
  }

  // Selecionar Novo Lançamento
  novoLancamentoReceber() {
    this.selecionarModuloReceber();

    cy.contains(el.botaoNovoLancamento, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  salvar() {
    cy.contains("button", "Salvar")
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  }

  // Preenchimento de Titulos
  incluirTitulo() {
    cy.get(el.inputDescricao).type("Titulo Teste");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(dataFutura(7));
    cy.get(el.inputDataCompetencia).clear().type(dataHoje());
  }

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

  incluirTituloParcelado() {
    cy.get(el.inputDescricao).type("Titulo Teste Parcelado");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(dataFutura(7));
    cy.get(el.inputDataCompetencia).clear().type(dataHoje());
  }

  incluirTituloObservacao() {
    cy.get(el.inputDescricao).type("Titulo Teste Observação");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(dataFutura(7));
    cy.get(el.inputDataCompetencia).clear().type(dataHoje());
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

  incluirTituloAnual() {
    const data = new Date();
    data.setDate(data.getDate() + 365);

    cy.get(el.inputDescricao).type("Titulo Teste Anual");
    cy.get(el.inputValor).clear().type("260");
    cy.get(el.inputDataVencimento).clear().type(formatarData(data));
    cy.get(el.inputDataCompetencia).clear().type(dataHoje());
    cy.get(el.checkboxPago).check();
  }

  // DROPDOWN

  dropdownCategoria(campo, opcao) {
    cy.get(campo).click().type(opcao);

    cy.get(el.selectListbox).should("be.visible");

    cy.contains(el.opcaoPropriedade, opcao).click();
  }

  // PARCELAMENTO
  selecionarParcelamento() {
    cy.contains(el.campoParcelamento).click();
    cy.get(el.inputQtdParcelas).type(2);
  }

  // RECORRÊNCIA

  ativarRecorrencia() {
    cy.get(el.toggleRecorrencia).click();
    cy.get(el.togglePermanente).click();
  }

  selecionarFrequencia(tipo) {
    cy.get(el.selectFrequencia).click();
    cy.contains(el.opcaoSelect, tipo).click();
  }

  // OBSERVAÇÃO
  observacaoTitulo() {
    cy.contains(el.abaDetalhes).click();
    cy.get(el.inputObservacao).type("Teste Observação");
    this.salvar();
  }

  // AÇÕES TABELA

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

  excluirLancamento(nome) {
    cy.contains(el.colunaTabela, nome)
      .parents(el.linhaTabela)
      .find(el.botaoExcluir)
      .click();

    cy.contains("button", "Confirmar").should("not.be.disabled").click();
  }

  excluirProximos(nome) {
    cy.contains("tr", nome).find(el.iconeTrash).click();

    cy.contains(el.opcaoExcluirProximos).click();
    cy.contains("button", "Confirmar").click();
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

  // OUTROS

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

  SelecionarMes() {
    cy.get(".pi-chevron-circle-right").filter(":visible").first().click();
  }

  SelecionarAnoMes(ano, mes) {
    cy.get("#periodo input, #periodoMobile input")
      .first()
      .click({ force: true });

    cy.get(".p-datepicker-panel").should("be.visible");

    // abre seleção de anos (IMPORTANTE: clicar no header do ano)
    cy.get("body")
      .contains(".p-datepicker-select-year", ano.toString())
      .click({ force: true });

    // depois selecionar mês direto (como no seu HTML)
    cy.get("body").contains(".p-datepicker-month", mes).click({ force: true });
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

  // Ação de Excluir Titulo (Recorrente)
  ExcluirTudo() {
    cy.contains(el.Confirmar, "Excluir Tudo").should("not.be.disabled").click();
  }
}

export default new ContaReceber();
