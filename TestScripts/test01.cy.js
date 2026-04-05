
///<reference typ="cypress">
describe('Test Scenario_01', () => {
    it('test01', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
       cy.get('input[class="search-keyword"]').type('ca')
        cy.get('.product:visible').should('have.length', 4)
       // let number = cy.get('.product')
      //  console.log(number)
      cy.get('.products').as('productLocator')
    //  cy.get('@productLocator').find('.product').should('have.length', 4)
    //  cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

      cy.get('@productLocator').find('.product').each(($e1, index, $list) => {

       const productName = $e1.find('h4.product-name').text()
       if(productName.includes('Carrot')){
        cy.wrap($e1).find('button').click()

      //  cy.contains('ADD TO CART').click()
       }




      })

      cy.get('a.cart-icon').click()
      cy.get('div.action-block').contains('PROCEED TO CHECKOUT').click()
      cy.get('button').contains('Place Order').click()



    })
})