/// <reference types="cypress" />
describe('Orange HRM - Maintenance Test', function() {

let username='Admin'
let password='admin123'
        
beforeEach(function() {
cy.visit('/') 
cy.loginToOrangeHrm('Admin','admin123')
cy.get(':nth-child(10) > .oxd-main-menu-item').contains('Maintenance').click()
cy.url().should('contain', '/maintenance/purgeEmployee')
cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
cy.get('.oxd-button--secondary').click()
        
})
        
/*cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
*/
    
it('Purge Records', () => {
//Employee Records
    
cy.get('.--parent').click()
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','Employee Records').click() 
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text','Purge Employee Records')
cy.url().should('contain','/purgeEmployee')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Maintenance') 
        
//Candidate Records
    
cy.get('.--parent').click()
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','Candidate Records').click()
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text','Purge Candidate Records')
cy.url().should('contain','/purgeCandidateData')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Maintenance')  

})
    
it('Access Records', () => {
    
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should('contain.text','Access Records').click()
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Download Personal Data')
cy.url().should('contain','/accessEmployeeData')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Maintenance')  
            
})
})
/*cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(1) > li > .oxd-topbar-body-nav-tab-link').click() // nationalities
        
cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
cy.get('.oxd-dropdown-menu > :nth-child(2) > li').click() //Corperate branding
cy.get('.oxd-button--secondary').click()// publish
        
cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click() //configuration
cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(1) > a').click() //email configuration
cy.get('.oxd-button--secondary').click() // save email config
cy.get('.oxd-toast') //successfully save
*/