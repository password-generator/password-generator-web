describe("Generate password tests", () => {
    it("should generate only numbers", () => {
        cy.visit("/")
        cy.get('input[type=checkbox]').uncheck()
        cy.get('#numbers').check()
        cy.get('#generatePasswordButton').click()
        cy.get('#generatePasswordButton')
        cy.get('#resultSpan').invoke('text').should('match', /[0-9]{6}/)
    }) 

    it("should generate only lowercase letters", () => {
        cy.visit("/")
        cy.get('input[type=checkbox]').uncheck()
        cy.get('#lowercase').check()
        cy.get('#generatePasswordButton').click()
        cy.get('#generatePasswordButton')
        cy.get('#resultSpan').invoke('text').should('match', /[a-z]{6}/)
    })
    
    it("should generate only uppercase letters", () => {
        cy.visit("/")
        cy.get('input[type=checkbox]').uncheck()
        cy.get('#uppercase').check()
        cy.get('#generatePasswordButton').click()
        cy.get('#generatePasswordButton')
        cy.get('#resultSpan').invoke('text').should('match', /[A-Z]{6}/)
    })
})