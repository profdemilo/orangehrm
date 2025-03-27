/// <reference types="cypress" />
import loginPageObject_1 from '../pageObjects/loginPageObjects_1'

describe('Orange HRM - Login Test', () => {

    let good_username='Admin'
    let bad_password='hello1234'
    let password='admin123'
    const loginPage = new loginPageObjects_1()



    beforeEach(() => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
    })

    it('Negative Testing', () => {
        cy.screenshot('login_HomePage')
        loginPage.enterUsername(good_username)
        loginPage.enterPassword(bad_password)
       loginPage.clickLogin()
       loginPage.errorMessage('Invalid credentials')
       cy.url().should('contain','/login')
       cy.screenshot('nagativeTestingActualResult')
    })

    it('Positive Testing', () => {
        cy.screenshot('positiveTesting')
        loginPage.enterUsername(good_username)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        cy.url().should('contain','/dashboard')
        cy.screenshot('positiveTestingclearActualResult')
    })


})