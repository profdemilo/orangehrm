/// <reference types="cypress" />
describe('Orange HRM - Performance Test', function() {

let username='Admin'
let password='admin123'
    
beforeEach(function() {
cy.visit('/') 
cy.loginToOrangeHrm('Admin','admin123')
cy.get(':nth-child(7) > .oxd-main-menu-item').contains('Performance').click()
cy.url().should('contain', '/searchEvaluatePerformanceReview')
    
})
    
/*cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
*/

it('Configure', () => {
//KPIs

cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click()
cy.get('.oxd-dropdown-menu > :nth-child(1)').should('contain.text','KPIs').click() 
cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain.text','Key Performance Indicators for Job Title')
cy.url().should('contain','/performance/searchKpi')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Performance') 
cy.get('button').contains('Add').click()
cy.url().should('contain', '/performance/saveKpi')    
    
//Trackers

cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click()
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','Trackers').click()
cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain.text','Performance Trackers')
cy.url().should('contain','/viewPerformanceTracker')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Performance') 
cy.get('button').contains('Add').click()
cy.url().should('contain', '/addPerformanceTracker')    

})

it('Manage Reviews', () => {
//Manage Reviews

cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
cy.get('.oxd-dropdown-menu > :nth-child(1)').should('contain.text','Manage Reviews').click() 
cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain.text','Manage Performance Reviews')
cy.url().should('contain','/searchPerformanceReview')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Performance') 
cy.get('button').contains('Add').click()
cy.url().should('contain', '/saveReview')    

//My Reviews
   
cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','My Reviews').click() 
cy.get('.orangehrm-header-container > .oxd-text').should('contain.text','My Reviews')
cy.url().should('contain','/myPerformanceReview')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Performance')     

//Employee Reviews
    
cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').should('contain.text','Employee Reviews').click() 
cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain.text','Employee Reviews')
cy.url().should('contain','/searchEvaluatePerformanceReview')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Performance')     

})

it('My Trackers', () => {

cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
cy.get('.orangehrm-header-container > .oxd-text').should('contain.text', 'My Performance Trackers')
cy.url().should('contain','/viewMyPerformanceTrackerList')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Performance')  
        
})
         
it('Employee Trackers', () => {

cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain.text', 'Employee Performance Trackers')  
cy.url().should('contain','/viewEmployeePerformanceTrackerList')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Performance')  
            
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