class ConfirmationPage
{
    constructor() {
        this.country = '#country'
        this.countryList = '.suggestions ul li a'
        this.checkBox = '#checkbox2'
        this.purchaseButton = 'input[value="Purchase"]'
        this.successMessage = 'div.alert-success'
  
    }


    selectCountry(countryName) {

           cy.get(this.country).type(countryName)

      //  cy.get('.suggestions ul li a').click()

      cy.get(this.countryList)
  .should('be.visible')
  .contains(countryName)
  .click()

    }

    clickIAgrreeCheckBox (){
 
   cy.get(this.checkBox).check({force:true})

    }

    clickPurchaseButton() {
          cy.get(this.purchaseButton).click()
    }

    checkSuccessMessage(message) {
         cy.get(this.successMessage).contains(message)
    }

}

module.exports = { ConfirmationPage }