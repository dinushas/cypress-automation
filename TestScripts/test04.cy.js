


///<reference typ="cypress">
describe('Handling Alert', () => {
    it('test01', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click()

     //   cy.get('#confirmbtn').click()

        // Window alert
        cy.on('window:alert', (string) => {

            expect(string).to.equal('Hello , share this practice page and share your knowledge')


        })

         cy.get('#confirmbtn').click()

          cy.on('window:confirm', (string) => {

            expect(string).to.equal('Hello , Are you sure you want to confirm?')


        })
     
       
       
    })
})

