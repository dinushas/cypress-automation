class HomePage
{
    constructor() {
        this.userName = '#username'
        this.password = '#password'
        this.signInButton = '#signInBtn'
    }


    goToURL(url) {

        cy.visit(url)

    }

    login(userName, password) {


        cy.login(userName, password)
        // cy.get(this.userName).type(userName)
        // cy.get(this.password).type(password)
        // cy.get(this.signInButton).click()

    }

}

module.exports = { HomePage }