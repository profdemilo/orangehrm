/// <reference types="cypress" />
describe('Orange HRM - My Info Test', function() {

let username='Admin'
let password='admin123'

beforeEach(function() {
cy.visit('/') 
cy.loginToOrangeHrm('Admin','admin123')
cy.get(':nth-child(6) > .oxd-main-menu-item').contains('My Info').click()
cy.url().should('contain', '/viewPersonalDetails/empNumber/7')

})

/*cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
*/

it('My Info', () => {
//Personal Details

cy.get('.orangehrm-tabs')
cy.get(':nth-child(1) > .orangehrm-tabs-item').should('contain.text','Personal Details').click()
cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('contain.text','Personal Details')
cy.url().should('contain','/viewPersonalDetails/empNumber/7')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'PIM')
cy.get('.orangehrm-action-header > .oxd-button').click()
cy.get('.orangehrm-attachment > .orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Add Attachment')

//Contact Details

cy.get('.orangehrm-tabs')
cy.get(':nth-child(2) > .orangehrm-tabs-item').should('contain.text','Contact Details').click()
cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .orangehrm-main-title').should('contain.text','Contact Details')
cy.url().should('contain','/contactDetails/empNumber/7')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'PIM')
cy.get('.orangehrm-action-header > .oxd-button').click()
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Add Attachment')

//Emergency Contacts
        
cy.get('.orangehrm-tabs')
cy.get(':nth-child(3) > .orangehrm-tabs-item').should('contain.text','Emergency Contacts').click()
cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-text').should('contain.text','Assigned Emergency Contacts')
cy.url().should('contain','/viewEmergencyContacts/empNumber/7')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'PIM')
cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click()
cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('contain.text', 'Save Emergency Contact')
cy.get(':nth-child(2) > .orangehrm-action-header > .oxd-button').click()
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Add Attachment')

//Dependents
           
cy.get('.orangehrm-tabs')
cy.get(':nth-child(4) > .orangehrm-tabs-item').should('contain.text','Dependents').click()
cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-text').should('contain.text','Assigned Dependents')
cy.url().should('contain','/viewDependents/empNumber/7')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'PIM') 
cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click()
cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('contain.text', 'Add Dependent') 
cy.get(':nth-child(2) > .orangehrm-action-header > .oxd-button').click()
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Add Attachment') 

//Immigration 
        
cy.get('.orangehrm-tabs')
cy.get(':nth-child(5) > .orangehrm-tabs-item').should('contain.text','Immigration').click()
cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-text').should('contain.text','Assigned Immigration Records')
cy.url().should('contain','/viewImmigration/empNumber/7')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'PIM')  
cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click()
cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('contain.text', 'Add Immigration')  
cy.get(':nth-child(2) > .orangehrm-action-header > .oxd-button').click()
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Add Attachment') 

//Job
        
cy.get('.orangehrm-tabs')
cy.get(':nth-child(6) > .orangehrm-tabs-item').should('contain.text','Job').click()
cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('contain.text','Job Details')
cy.url().should('contain','/viewJobDetails/empNumber/7')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'PIM') 

//Salary 
        
cy.get('.orangehrm-tabs')
cy.get(':nth-child(7) > .orangehrm-tabs-item').should('contain.text','Salary').click()
cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-text').should('contain.text','Assigned Salary Components')
cy.url().should('contain','/viewSalaryList/empNumber/7')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'PIM')  

//Report-to 
        
cy.get('.orangehrm-tabs')
cy.get(':nth-child(8) > .orangehrm-tabs-item').should('contain.text','Report-to').click()
cy.get('.orangehrm-top-padding > .oxd-text').should('contain.text','Report to')
cy.url().should('contain','/viewReportToDetails/empNumber/7')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'PIM')  

//Qualifications 
        
cy.get('.orangehrm-tabs')
cy.get(':nth-child(9) > .orangehrm-tabs-item').should('contain.text','Qualifications').click({ multiple: true })
cy.get('.orangehrm-top-padding > .oxd-text').should('contain.text','Qualifications')
cy.url().should('contain','/viewQualifications/empNumber/7')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'PIM')  
cy.get(':nth-child(2) > :nth-child(1) > .orangehrm-action-header > .oxd-button').click({ multiple: true })
cy.get('.orangehrm-edit-employee-content > :nth-child(2) > .orangehrm-top-padding > .oxd-text--h6').should('contain.text', 'Add Work Experience') 
cy.get(':nth-child(3) > :nth-child(1) > .orangehrm-action-header > .oxd-button').click({ multiple: true })
cy.get(':nth-child(3) > .orangehrm-top-padding > .oxd-text--h6').should('contain.text', 'Add Education') 
cy.get(':nth-child(4) > :nth-child(1) > .orangehrm-action-header > .oxd-button').click({ multiple: true })
cy.get(':nth-child(4) > .orangehrm-top-padding > .oxd-text--h6').should('contain.text', 'Add Skill') 
cy.get(':nth-child(5) > :nth-child(1) > .orangehrm-action-header > .oxd-button').click({ multiple: true })
cy.get(':nth-child(5) > .orangehrm-top-padding > .oxd-text--h6').should('contain.text', 'Add Language') 
cy.get(':nth-child(6) > :nth-child(1) > .orangehrm-action-header > .oxd-button').click({ multiple: true })
cy.get(':nth-child(6) > .orangehrm-top-padding > .oxd-text--h6').should('contain.text', 'Add License') 
cy.get(':nth-child(2) > .orangehrm-action-header > .oxd-button').click({ multiple: true })
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Add Attachment') 

//Memberships
        
cy.get('.orangehrm-tabs')
cy.get(':nth-child(10) > .orangehrm-tabs-item').should('contain.text','Memberships').click()
cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-text').should('contain.text','Assigned Memberships')
cy.url().should('contain','/viewMemberships/empNumber/7')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'PIM')  
cy.get(':nth-child(1) > .orangehrm-action-header > .oxd-button').click()
cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('contain.text', 'Add Membership') 
cy.get(':nth-child(2) > .orangehrm-action-header > .oxd-button').click()
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Add Attachment') 

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