/// <reference types="cypress" />

class loginPageObjects{

elements={
    usernameTextbox : () => cy.get('[name="username"]'),
    passwordTextbox : () => cy.get('[name="password"]'),
    loginButton : ()=> cy.get('button').contains('Login')
}





}module.exports = new loginPageObjects()