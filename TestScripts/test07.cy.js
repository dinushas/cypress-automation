

///<reference types="cypress">
describe('Handling Mouse hover popus', () => {
    it('Handling Mouse hover popus', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

     // cy.get('.mouse-hover-content').invoke('show')
      cy.contains('Top').click({force:true})
      cy.url().should('include', 'top')

       
       
    })
})

