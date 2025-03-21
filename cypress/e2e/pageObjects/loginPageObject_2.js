/// <reference types="cypress" />
class loginPageObjects_2 {
    enterUsername(value){
        return cy.get('[name="username"]').type(value)
    }
   enterPassword(value){
        return cy.get('[name="password"]').type(value)
    }
    loginButton(){
       return cy.get('button').contains('Login')
    }
    loginErrorMessage(value){
      return  cy.get('.oxd-alert-content--error').should('contain.text',value)
    }
} export default loginPageObjects_2;