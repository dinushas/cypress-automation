class ProductPage
{
    constructor() {
        this.productCard = 'app-card'
        this.checkOutButton = '.btn-primary'
        
    }


    pageHeaderValidation(headerTitle) {

        cy.contains(headerTitle).should('be.visible')

    }

    verifyProductCardLinks(count) {

        cy.get(this.productCard).should('have.length', count )

    }

    selectProduct(productName) {

          cy.get(this.productCard).filter(`:contains("${productName}")`)
        .then($element => 
        {
            cy.wrap($element).should('have.length', 1)
            cy.wrap($element).contains('button', 'Add').click()      
        })

    }

    selectFirstProduct() {

         cy.get(this.productCard).eq(0).contains('button', 'Add').click()

    }

    clickCheckOutButton() {

          cy.get(this.checkOutButton).contains('Checkout').click()

    } 

  

}

module.exports = { ProductPage }