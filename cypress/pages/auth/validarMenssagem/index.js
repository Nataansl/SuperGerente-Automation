import { elements as el } from "./elements";

  
class validarMenssagem {
// Validar Messagem (Resetar Senha)
  validarMensagem(mensagem) {
    cy.get(el.validarMessagem, { timeout: 10000 })
      .should("be.visible")
      .and("contain", "Atenção");

    cy.get(el.validarMensagemTexto)
      .should("be.visible")
      .and(
        "contain",
        "Uma mensagem foi enviada ao seu e-mail com o código para resetar sua senha",
      );

    cy.get(el.confirmarMessagem).click();
  }

// Validar Messagem (Categoria Duplicada)
   validarMensagemCategoria(mensagem) {
       cy.get(el.NotificationTitle).should("be.visible").and("contain", "Atenção");
    
        cy.get(el.NotificationMessage, { timeout: 10000 })
          .should("be.visible")
          .and("contain", "Já existe uma categoria com esse nome.");

   }  
 
// Validar Messagem (Excluir Categoria)  











}



export default new validarMenssagem();