
///<reference typ="cypress">
describe('Test Scenario_01', () => {
    it('test01', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').should('be.visible')

        cy.get('input[value ="radio1"]').check().should('be.checked')

       
    })
})