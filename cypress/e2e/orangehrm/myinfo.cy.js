/// <reference types="cypress" />
describe('Orange HRM - Admin Test', function() {

    let good_username='Admin'
    let bad_password='hello1234'
    let password='admin123'
    beforeEach(function() {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
    })

    it('Admin', () => {
        cy.get('[name="username"]').type(good_username)
        cy.get('[name="password"]').type(password)
        cy.get('button').contains('Login').click()
       cy.get('.oxd-main-menu-item--name').contains('Admin').click()//navigating to Admin menu
       cy.url().should('contain','/admin/viewSystemUsers')
       cy.get('.oxd-text--h6').should('contain', 'Admin').and('contain','User Management')
    })
})