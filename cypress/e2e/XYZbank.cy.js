describe('XYZ Bank', () =>{
    it('Open website', () =>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.title().should('eq','XYZ Bank')
        cy.get("button[ng-click='customer()']").click()
        cy.get('#userSelect').select('Neville Longbottom').should('have.value','5')
        cy.get("button[type='submit']").click();
        cy.get('.fontBig').should('contain','Neville Longbottom')
        cy.xpath("//strong[normalize-space()='Dollar']").should('contain','Dollar')
        cy.xpath("//button[normalize-space()='Deposit']").click()
        cy.get("input[type='number']").type('1000')
        cy.get("button[type='submit']").click();
        cy.get('.error').should('contain','Deposit Successful')
        cy.xpath("//button[normalize-space()='Transactions']").click()
        cy.get('#anchor0').should('contain','1000').should('contain.text','Credit')
        cy.get("button[ng-click='back()']").click()
        cy.xpath("//button[normalize-space()='Withdrawl']").click()
        cy.get('.form-control').type('1000')
        cy.get("button[type='submit']").click();
        cy.get('.error').should('contain','Transaction successful')
        cy.xpath("//button[normalize-space()='Transactions']").click()
        cy.get('#anchor1').should('contain.text','Debit')
    })
})