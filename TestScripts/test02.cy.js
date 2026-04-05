
///<reference typ="cypress">
describe('Test Scenario_01', () => {
    it('test01', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')

        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            const countryName = $e1.text()

            if(countryName === 'India'){

               cy.wrap($e1).click()
                
            }

        })

cy.get('#autocomplete').should('have.value', 'India')


    })
})