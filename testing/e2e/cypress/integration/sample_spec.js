describe('My First Test', function () {
    it ('Finds an element', function() {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})

