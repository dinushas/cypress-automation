describe('template spec', () => {
  before(() => {
    cy.log("Hello from before hook")
  })

    after (() => {
    cy.log("Hello after hook")
  })

  beforeEach(() => {
    console.log("Hello from before each")
  })

   afterEach(() => {
    console.log("Hello from after each")
  })
  it('passes', () => {
   // cy.visit('https://example.cypress.io')
    cy.log("Hello World")
    
    
  })

  it('passes', () => {
    
    cy.log("Hello World")
    
  })


})