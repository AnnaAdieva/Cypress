describe('My first test', () =>
{
    it('Verify Title Positive', () =>
    {
        cy.visit("http://www.888sport.com/football/")
        cy.title().should('eq','Football Betting & Football Odds > 888sport')
    })
    it.skip('verify title negative',() =>
    {
        cy.visit("http://www.888sport.com/football/")
        cy.title().should('eq','Tennis Betting & Football Odds > 888sport')
    })
})