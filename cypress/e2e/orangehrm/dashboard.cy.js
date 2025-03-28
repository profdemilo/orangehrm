/// <reference types="cypress" />
describe('Orange HRM - Dashboard Test', function() {

let username='Admin'
let password='admin123'
                
beforeEach(function() {
cy.visit('/') 
cy.loginToOrangeHrm('Admin','admin123')
cy.get(':nth-child(8) > .oxd-main-menu-item').contains('Dashboard').click()
cy.url().should('contain', '/dashboard/index')
                
})
                
/*cy.get(':nth-child(2) > .oxd-main-menu-item').click()
cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
*/

it('Time at Work', () => { 

cy.get(':nth-child(1) > .oxd-sheet')
cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('contain.text', 'Time at Work')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Dashboard')
cy.get('.orangehrm-attendance-card-bar > .oxd-icon-button > .oxd-icon').click()
cy.url().should('contain','/attendance/punch')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Attendance')
        
})

it('My Actions', () => {
//Pending Self Review
        
cy.get(':nth-child(2) > .oxd-sheet')
cy.get(':nth-child(2) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('contain.text','My Actions')
cy.url().should('contain','/dashboard/index')
cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')
cy.get('.orangehrm-todo-list > :nth-child(1) > .oxd-text').should('contain.text','Pending Self Review').click() 
cy.get('.orangehrm-header-container > .oxd-text').should('contain.text', 'My Reviews') 
cy.url().should('contain', '/myPerformanceReview') 

//Candidate to Interview

cy.get(':nth-child(8) > .oxd-main-menu-item').contains('Dashboard').click()
cy.get(':nth-child(2) > .oxd-sheet')
cy.get(':nth-child(2) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('contain.text','My Actions')
cy.url().should('contain','/dashboard/index')
cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')
cy.get('.orangehrm-todo-list > :nth-child(2) > .oxd-text').should('contain.text','Candidate to Interview').click() 
cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain.text', 'Candidates') 
cy.url().should('contain', '/viewCandidates?statusId=4') 
cy.get('button').contains('Add').click()
cy.url().should('contain', '/addCandidate')

})

it('Quick Launch', () => {
//Assign Leave
            
cy.get(':nth-child(3) > .oxd-sheet')
cy.get(':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('contain.text','Quick Launch')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Dashboard') 
cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(1)').should('contain.text','Assign Leave').click() 
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text','Assign Leave')
cy.url().should('contain','/assignLeave')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave') 
 
//Leave List
        
cy.get(':nth-child(8) > .oxd-main-menu-item').contains('Dashboard').click()
cy.get(':nth-child(3) > .oxd-sheet')
cy.get(':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('contain.text','Quick Launch')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Dashboard') 
cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(2)').should('contain.text','Leave List').click() 
cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain.text','Leave List')
cy.url().should('contain','/viewLeaveList')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave') 

//Timesheets
            
cy.get(':nth-child(8) > .oxd-main-menu-item').contains('Dashboard').click()
cy.get(':nth-child(3) > .oxd-sheet')
cy.get(':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('contain.text','Quick Launch')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Dashboard') 
cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(3)').should('contain.text','Timesheets').click() 
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text','Select Employee')
cy.url().should('contain','/viewEmployeeTimesheet')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Time') 

//Apply Leave
            
cy.get(':nth-child(8) > .oxd-main-menu-item').contains('Dashboard').click()
cy.get(':nth-child(3) > .oxd-sheet')
cy.get(':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('contain.text','Quick Launch')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Dashboard') 
cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(4)').should('contain.text','Apply Leave').click() 
cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text','Apply Leave')
cy.url().should('contain','/applyLeave')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave') 

//My Leave
            
cy.get(':nth-child(8) > .oxd-main-menu-item').contains('Dashboard').click()
cy.get(':nth-child(3) > .oxd-sheet')
cy.get(':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('contain.text','Quick Launch')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Dashboard') 
cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(5)').should('contain.text','My Leave').click() 
cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain.text','My Leave List')
cy.url().should('contain','/viewMyLeaveList')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave') 

//My Timesheet
            
cy.get(':nth-child(8) > .oxd-main-menu-item').contains('Dashboard').click()
cy.get(':nth-child(3) > .oxd-sheet')
cy.get(':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('contain.text','Quick Launch')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Dashboard') 
cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(6)').should('contain.text','My Timesheet').click() 
cy.get('.orangehrm-timesheet-header--title > .oxd-text').should('contain.text','My Timesheet')
cy.url().should('contain','/viewMyTimesheet')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Time') 

})

it('Buzz Latest Posts', () => { 

cy.get('.orangehrm-dashboard-grid > :nth-child(4)')
cy.get(':nth-child(4) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('contain.text', 'Buzz Latest Posts')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Dashboard')
cy.get(':nth-child(1) > .orangehrm-buzz-widget-header').click()
cy.get('.orangehrm-buzz-newsfeed > .oxd-text--card-title').should('contain.text', 'Buzz Newsfeed')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Buzz')
cy.get('.orangehrm-post-filters > :nth-child(1)').click()
cy.get('.orangehrm-post-filters > :nth-child(2)').click()
cy.get('.orangehrm-post-filters > :nth-child(3)').click()
cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-buzz-post > .orangehrm-buzz-post-header > .orangehrm-buzz-post-header-config > li > .oxd-icon-button > .oxd-icon').click()
cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
cy.get('.oxd-button--label-danger').click()
cy.url().should('contain','/buzz/viewBuzz')

})

it('Employees on Leave Today', () => { 

cy.get(':nth-child(5) > .oxd-sheet')
cy.get(':nth-child(5) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('contain.text', 'Employees on Leave Today')
cy.get('.bi-gear-fill').click()
cy.get('.oxd-switch-input').click()
cy.get('.oxd-button--secondary').click()
cy.url().should('contain','/dashboard/index')
cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Dashboard')
            
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