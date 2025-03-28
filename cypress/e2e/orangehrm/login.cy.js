/// <reference types="cypress" />
import loginPageObjects from "../pageObjects/login"

describe('Orange HRM - Login Test', () => {

let good_username = 'Admin'
let bad_password = 'hello1234'
let password = 'admin123'
const loginPage2 = new loginPageObjects()

beforeEach(() => {

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

it('Negative Testing', () => {

loginPage2.enterUsername(good_username)
loginPage2.enterPassword(bad_password)
loginPage2.loginButton().click()
loginPage2.loginErrorMessage('Invalid credentials')
cy.url().should('contain', '/login')

})

it('Positive Testing', () => {
    
loginPage2.enterUsername(good_username)
loginPage2.enterPassword(password)
loginPage2.loginButton().click()
cy.url().should('contain', '/dashboard')

})
})