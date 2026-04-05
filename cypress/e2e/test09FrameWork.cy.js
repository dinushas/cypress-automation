
const { HomePage } = require('../support/pageObjects/HomePage')
const { ProductPage } = require('../support/pageObjects/ProductPage')
const { CartPage } = require('../support/pageObjects/CartPage')
const { ConfirmationPage } = require('../support/pageObjects/ConfirmationPage')


describe('Submit Framework', () => {

    before(function(){

        // runs once before all thests in this section
         cy.fixture('example').then(function(data){

            this.data = data
            this.homePage = new HomePage()
            this.productPage  = new ProductPage()
            this.cartPage = new CartPage()
            this.confirmationPage  = new ConfirmationPage()
       
    })


    })

    it('End to end framework',function () {

        Cypress.config('defaultCommandTimeout', 10000)
        // const homePage = new HomePage()
       //  const productPage  = new ProductPage()


          const productName = this.data.productName

          cy.log(Cypress.env('baseUrl'))

//          // Go to URL
//    //       this.homePage.goToURL(Cypress.env('url') + "/loginpagePractise/")
//    cy.visit(Cypress.env('baseUrl') + "/loginpagePractise/")
// //    cy.visit('/')
// // cy.url().then(url => cy.log(url))

//           // Login to the System
//           this.homePage.login(Cypress.env('username'), Cypress.env('password'))

//           // Check Product Pahe page header
//           this.productPage.pageHeaderValidation('Shop Name')
//           this.productPage.verifyProductCardLinks(4) 

//           // Select Product 

//          this.productPage.selectProduct(productName)

//          // Select First Product

//          this.productPage.selectFirstProduct()

//          // Click checkout Button

//          this.productPage.clickCheckOutButton()

       
//         // check product price total is 200000
//         this.cartPage.checkSumLessthanExpectedAmount(200000)

//         // Click on checkout
//         this.cartPage.clickCheckOutButton('Checkout')

//         // Select Country

//         this.confirmationPage.selectCountry('India')

//         // Click I agree checkbox

//         this.confirmationPage.clickIAgrreeCheckBox ()

//        // Click on PurchaseButton

//        this.confirmationPage.clickPurchaseButton() 

//        // Check Success message

//        this.confirmationPage.checkSuccessMessage('Success') 
       


        

    })
})