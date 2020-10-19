describe('Create Orpanage', () => {
    
    beforeEach(() => {
      cy.visit('/orphanages/create')
    })
  
    it('press the button', () => {
        //const input = "Learn about Cypress"
        
        cy.get('.leaflet-container').click()

        cy.get(':nth-child(3) > #name').type("Orfanato cypress")
        cy.get(':nth-child(4) > #name').type("Aqui fica uma breve descrição do orfanato de cadastro")

        //images

        cy.get('#instructions').type("Aqui fica um pequeno texto onde é falado sobre as instruções de visitações")
        cy.get('#opening_hours').type("O orfanato é aberto das 8h às 18h, venha visitar e transformar a vida de uma criança")

        //adicionar validação de que o hover é ativado ao selecionar a devida opção
        cy.get('.button-select > :nth-child(2)').click()

        cy.get('.confirm-button').click()
    })
})