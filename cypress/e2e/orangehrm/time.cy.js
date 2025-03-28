/// <reference types="cypress" />
describe('Orange HRM - Time Test', function() {

let username='Admin'
let password='admin123'

beforeEach(function() {
cy.visit('/') 
cy.loginToOrangeHrm('Admin','admin123')
cy.get(':nth-child(4) > .oxd-main-menu-item').contains('Time').click()
cy.url().should('contain', '/viewEmployeeTimesheet')

})
    
/*cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
*/
 
it('Timesheets', () => {
//My Timesheets
       
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','My Timesheets').click()
cy.url().should('contain','/viewMyTimesheet')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Time')
    
//Employee Timesheets
           
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','Employee Timesheets').click()
cy.url().should('contain','/viewEmployeeTimesheet')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Time')
    
}) 

it('Attendance', () => {
//My Records
   
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','My Records').click()
cy.url().should('contain','/viewMyAttendanceRecord')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Attendance')

//Punch In/Out
       
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','Punch In/Out').click()
cy.url().should('contain','/attendance/punch')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Attendance')

//Employee Records
        
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').should('contain.text','Employee Records').click()
cy.url().should('contain','/viewAttendanceRecord')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Attendance')

//Configuration
           
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-link').should('contain.text','Configuration').click()
cy.url().should('contain','/attendance/configure')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Attendance')

}) 

it('Reports', () => {
//Project Reports
   
cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','Project Reports').click()
cy.url().should('contain','/displayProjectReportCriteria')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Time')

//Employee Reports
       
cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','Employee Reports').click()
cy.url().should('contain','/displayEmployeeReportCriteria')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Time')

//Attendance Summary
        
cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').should('contain.text','Attendance Summary').click()
cy.url().should('contain','/displayAttendanceSummaryReportCriteria')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Time')
 
}) 

it('Project Info', () => {
//Customers
   
cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','Customers').click()
cy.url().should('contain','/viewCustomers')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Time')
cy.get('button').contains('Add').click()
cy.url().should('contain', '/addCustomer')

//Projects
       
cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','Projects').click()
cy.url().should('contain','/viewProjects')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Time')
cy.get('button').contains('Add').click()
cy.url().should('contain', '/saveProject')

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