/// <reference types="cypress" />

describe('orange - Admin page',  ()=> {

    beforeEach(  ()=> {

//login first
    cy.visit('baseurl')
    
    cy.get('[name="username"]').type('Admin')
    cy.get('[type="password"]').type('admin123')
    cy.get('[type="submit"]').click()
    
    cy.url().should('contain', '/dashboard')
})

it.only('should verify sidepanel arrow button', () => {

    cy.get('.oxd-main-menu').should('exist')
    cy.get('[role="none]').should('eq', 'flex')
    .click()

    cy.get('oxd-main-menu').should('have.class', 'collapse')
    .and('not.be.visible')
    
    cy.get('flex').should('be.visible')
    .click()

    cy.get('oxd-main-menu').should('not.have.class', 'collapse')
    .and('be.visible')

})

it('should verify hover effect on the sidebar menu', ()=> {

    cy.get('.oxd-main-menu').should('be.visible')

    cy.get('.oxd-main-menu') 
      .each(($item) => {
          cy.wrap($item).trigger('mouseover'); 

          cy.wrap($item).find('.oxd-icon.bi_chevron-right').should('be.visible') 
          cy.wrap($item).find('.menu-item-text').should('be.visible')

          
          cy.wrap($item).should('have.css', 'background-color').and('not.eq', 'initial-bg-color')
      
});



})

it('should display dashboard header panel', ()=> {

    cy.get('.oxd-topbar-header-title').should('contain.text', 'Dashboard')

    cy.get('.orangehrm-upgrade-link').should('contain.text', 'Upgrade').click()
    cy.get('[href="https://orangehrm.com/open-source/upgrade-to-advanced"')
    .should('have.attr', 'target', '_blank')

    cy.get('.oxd-topbar-header-userarea')
    .should('be.visible')
    .within(() => {
      cy.get('.oxd-userdropdown-img').should('exist')
      cy.get('.oxd-userdropdown-name').should('be.visible')
    })
    })

it('should check elements on the side panel', () =>{

    cy.get('[src="/web/images/orangehrm-logo.png?v=1721393199309"]').should('exist')
    .and('be.visible')
    cy.get('[src="/web/images/orangehrm-logo.png?v=1721393199309"]').click()
    cy.url().should('eq', 'https://www.orangehrm.com/')


    cy.get('.oxd-main-menu-search').should('be.visible')
    cy.get('[placeholder="Search').should('be.visible')

    cy.get('.oxd-main-menu').should('exist')
    cy.get('.oxd-main-menu').should('have.length.greaterThan', 0)
    
    

})   

})     