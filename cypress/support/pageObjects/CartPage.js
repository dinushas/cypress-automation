class CartPage
{
    constructor() {
        this.ProductPriceColumn = 'tr td:nth-child(4) strong'
        this.checkOutButton = '.btn-success'
      
    }


   checkSumLessthanExpectedAmount(expectedAmount){

    let sum = 0;
        cy.get(this.ProductPriceColumn ).each($e1 =>  {
          //  let sum = 0;
          const amount =   Number($e1.text().split(" ")[1].trim())
          sum = sum + amount

          

        }).then(function() {

            

            expect(sum).to.be.lessThan(expectedAmount)

        })

   }

   clickCheckOutButton(buttonName) {
        cy.get(this.checkOutButton).contains(buttonName).click()
   }

}

module.exports = { CartPage }