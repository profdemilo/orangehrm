/// <reference types="cypress" />
class loginPageObjects_1 {
    elements = {
        usernameTextbox: () => cy.get('[name="username"]'),
        passwordTextbox: () => cy.get('[name="password"]'),
        loginButton: () => cy.get('button').contains('Login'),
        loginErrorMessage: () => cy.get('.oxd-alert-content--error')
    }
    enterUsername(value) {
        this.elements.usernameTextbox().type(value)
    }
    enterPassword(value) {
        this.elements.passwordTextbox().type(value)
    }
    clickLogin() {
        this.elements.loginButton().click({force: true})
    }
    errorMessage(value) {
        this.elements.loginErrorMessage().should('contain.text',value)
    }
} export default loginPageObjects_1;