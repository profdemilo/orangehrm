/// <reference types="cypress" />

describe('Orange HRM - Admin page', ()=> {
 
     //define variables
     let userName = 'Admin'
     let wrong_username ='notcorrect'
     let password = 'admin123'
     let wrong_password = 'notcorrect123'

beforeEach( ()=> {
    //navigate to the admin page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
    cy.get('[name="username"]').type(userName)
    cy.get('[name="password"]').type(password)
    cy.get('button').contains('Login').click()

    cy.url().should('contain', '/dashboard')
    cy.get('.oxd-main-menu-item--name').should('be.visible')
    .contains('Admin').click()
   cy.url().should('contain', '/admin/viewSystemUsers')
})

it('verify Admin page header', () => {
    
    cy.get('.oxd-text--h6').should('contain', 'Admin')
    .and('contain','User Management')
    cy.get('.orangehrm-upgrade-link').should('be.visible')
    .and('not.be.disabled')

    cy.get('.oxd-userdropdown').should('exist')
    cy.get('.oxd-userdropdown').should('exist')
 })
 
 it('verify search functionality with existing user', ()=> {

   cy.get('.oxd-form-row').within(() =>{
   cy.get('.oxd-input.oxd-input--active').type('Admin')
   })
   cy.get('[type="submit"]').click()
   

   

 



})
})


    