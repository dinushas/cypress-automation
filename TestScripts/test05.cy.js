


///<reference typ="cypress">
describe('Handling Alert', () => {
    it('Handling Child Tab', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.origin("https//www.test.com", () => {

            cy.get('#test').click()
            
        })

       
       
    })
})

