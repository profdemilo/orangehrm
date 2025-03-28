/// <reference types="cypress" />
describe('Orange HRM - Recruitment', function() {

let username='Admin'
let password='admin123'
    
beforeEach(function() {
cy.visit('/') 
cy.loginToOrangeHrm('Admin','admin123')
cy.get(':nth-child(5) > .oxd-main-menu-item').contains('Recruitment').click()
cy.url().should('contain', '/viewCandidates')
    
})
        
/*cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
*/
     
it('Candidates', () => {

cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').should('contain.text','Candidates').click()
cy.get('.oxd-text.oxd-text--h5.oxd-table-filter-title').should('contain.text', 'Candidates')
cy.url().should('contain','/viewCandidates')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Recruitment')  
cy.get('button').contains('Add').click()
cy.url().should('contain', '/addCandidate')
    
})

it('Vacancies', () => {

cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should('contain.text','Vacancies').click()
cy.get('.oxd-text.oxd-text--h5.oxd-table-filter-title').should('contain.text', 'Vacancies')
cy.url().should('contain','/viewJobVacancy')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Recruitment')  
cy.get('button').contains('Add').click()
cy.url().should('contain', '/addJobVacancy')
        
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
