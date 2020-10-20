describe('Create Orpanage', () => {
    
    beforeEach(() => {
      cy.visit('/orphanages/9')
    })

    it('Garantindo a listagem de informações do orfanato', () => {
        
        cy.get('h1').should('contain', 'Orfanato Russas')

        cy.get('.orphanage-details-content > :nth-child(2)').should('contain', 'Sobre o orfanato')

        cy.get('.leaflet-container').should('be.visible')

        cy.get('.orphanage-details-content > :nth-child(6)').should('contain','Instruções sobre visitação')

        cy.get('.hour')
            .should('contain', 'Segunda à Sexta 8h - 10h')

        cy.get('.open-on-weekends').should('contain', 'Não atendemos fim de semana')

    })
})
