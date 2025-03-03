/// <reference types="cypress" />
describe('Orange HRM', () => {

    let good_username='Admin'
    let bad_password='hello1234'
    let password='admin123'
    beforeEach(() => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Negative Testing', () => {
        
        cy.get('[name="username"]').type(good_username)
        cy.get('[name="password"]').type(bad_password)
        cy.get('button').contains('Login').click()
        cy.get('.oxd-alert-content--error').should('contain.text','Invalid credentials')
        cy.url().should('contain','/login')
    })

    it('Positive Testing', () => {
        cy.get('[name="username"]').type(good_username)
        cy.get('[name="password"]').type(password)
        cy.get('button').contains('Login').click()
        cy.url().should('contain','/dashboard')
    })


})