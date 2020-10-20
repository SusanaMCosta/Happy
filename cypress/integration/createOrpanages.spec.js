describe('Create Orpanage', () => {
    
    beforeEach(() => {
      cy.visit('/orphanages/create')
    })

    it('Preenchendo informações do orfanato', () => {
      cy.get(':nth-child(3) > #name').type("Orfanato cypress")

      cy.get(':nth-child(4) > #name').type("Orfanato é um local onde as crianças possam ser acolhidas e preparadas para o mundo")

      cy.get('#instructions').type("Aqui fica um pequeno texto onde é falado sobre as instruções de visitações")

      cy.get('#opening_hours').type("O orfanato é aberto das 8h às 18h, venha visitar e transformar a vida de uma criança")

      cy.get('.button-select > :nth-child(2)').click()

      cy.get('.confirm-button').click()
    })
})