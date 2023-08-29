describe('RS 1st test Suite', () =>
{
    it('RS 1st TestCase', () =>{
        cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        //cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').should('have.length',4)
    })
})