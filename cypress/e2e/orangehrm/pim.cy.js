/// <reference types="cypress" />
describe('Orange HRM - PIM Test', function() {

    let good_username='Admin'
    let bad_password='hello1234'
    let password='admin123'
    beforeEach(function() {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
    })

    
    it('PIM', () => {
        cy.get('[name="username"]').type(good_username)
        cy.get('[name="password"]').type(password)
        cy.get('button').contains('Login').click()
       cy.get('.oxd-main-menu-item--name').contains('PIM').click()//navigating to PIM menu
       cy.url().should('contain','/web/index.php/pim/viewEmployeeList')
       cy.get('.oxd-text oxd-text--h6 oxd').should('contain', 'PIM')

       
    })

   

})
