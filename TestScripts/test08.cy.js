
import 'cypress-iframe'

///<reference types="cypress">
describe('Handling Mouse hover popus', () => {
    it('Handling Mouse hover popus', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

     cy.frameLoaded('#courses-iframe')

   //  cy.iframe().find("a[href='mentorship']").eq(0).click()
        cy.iframe('#courses-iframe')
          .find('a[href*="mentorship"]')
          .eq(0)
          .click()

   //  cy.ifrme()
       
       
    })
})

