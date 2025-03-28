/// <reference types="cypress" />
describe('Orange HRM - Claim Test', function() {

let username='Admin'
let password='admin123'
            
beforeEach(function() {
cy.visit('/') 
cy.loginToOrangeHrm('Admin','admin123')
cy.get(':nth-child(11) > .oxd-main-menu-item').contains('Claim').click()
cy.url().should('contain', '/claim/viewAssignClaim')
            
})
            
/*cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
*/
        
it('Configuration', () => {
//Events
        
cy.get('.--parent').click()
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','Events').click() 
cy.get('.oxd-table-filter-header').should('contain.text','Events')
cy.url().should('contain','/viewEvents')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Claim') 
cy.get('button').contains('Add').click()
cy.url().should('contain', '/saveEvents') 

//Expense Types
        
cy.get('.--parent').click()
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','Expense Types').click()
cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain.text','Expense Types')
cy.url().should('contain','/viewExpense')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Claim')  
cy.get('button').contains('Add').click()
cy.url().should('contain', '/saveExpense') 

})
        
it('Submit Claim', () => {
        
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should('contain.text','Submit Claim').click()
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Create Claim Request')
cy.url().should('contain','/submitClaim')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Claim')  
                
})

it('My Claims', () => {
        
cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').should('contain.text','My Claims').click()
cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain.text', 'My Claims')
cy.url().should('contain','/viewClaim')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Claim')  
cy.get('button').contains('Submit Claim').click()
cy.url().should('contain', '/submitClaim') 

})

it('Employee Claims', () => {
        
cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').should('contain.text','Employee Claims').click()
cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain.text', 'Employee Claims')
cy.url().should('contain','/viewAssignClaim')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Claim')  
cy.get('button').contains('Assign Claim').click()
cy.url().should('contain', '/assignClaim') 

})

it('Assign Claim', () => {
        
cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').should('contain.text','Assign Claim').click()
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Create Claim Request')
cy.url().should('contain','/assignClaim')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Claim')  
                            
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