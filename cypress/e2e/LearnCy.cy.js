describe("home page", () => {
    beforeEach (()=>{
        cy.visit("https://learn.cypress.io/")
    })

    it("the h1 contains the correct text", () => {
      cy.get("h1").contains("Real World Testing with Cypress")
    })
    it("the features on the homepage are correct", () => {
        cy.get("dt").eq(0).contains("Courses")
        cy.get("dt").eq(1).contains("Lessons")
        cy.get("dt").eq(2).contains("Examples")
    })
  })