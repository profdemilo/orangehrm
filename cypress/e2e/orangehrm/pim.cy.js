/// <reference types="cypress" />
describe('Orange HRM - PIM Test', function() {
   

    let username='Admin'
    let password='admin123'
    beforeEach(function() {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type(username)
    cy.get('[name="password"]').type(password)
    cy.get('button').contains('Login').click()
    cy.url().should('contain', '/dashboard')
    cy.get(':nth-child(2) > .oxd-main-menu-item').contains('PIM').click()
    cy.url().should('contain','/web/index.php/pim/viewEmployeeList')
    cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'PIM')
  
    })

   /*cy.get(':nth-child(2) > .oxd-main-menu-item').click()
   cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
   cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click() */
    
  
  
    it('Configuration', () => {
        //Optional Fields
        
            cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
            cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','Optional Fields').click()
            cy.url().should('contain','/configurePim')
            cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'PIM').and('contain', 'Configuration')    
        //Custom Fields 
        
            cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
            cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','Custom Fields').click()
            cy.url().should('contain','/listCustomFields')
            cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'PIM').and('contain', 'Configuration')    
        //Data Import
        
            cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
            cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').should('contain.text','Data Import').click()
            cy.url().should('contain','/pimCsvImport')
            cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'PIM').and('contain', 'Configuration')  
        //Reporting Methods
           
            cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
            cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-link').should('contain.text','Reporting Methods').click()
            cy.url().should('contain','/viewReportingMethods')
            cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'PIM').and('contain', 'Configuration')    
        //Termination Reasons
        
        cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
        cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-link').should('contain.text','Termination Reasons').click()
        cy.url().should('contain','/viewTerminationReasons')
        cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'PIM').and('contain', 'Configuration')    
        })

    it('Employee-List', () => {
    cy.get('.oxd-topbar-body-nav-tab-item').contains('Employee List').click()
    cy.get('.oxd-table-filter-header-title').contains('Employee Information')
    cy.url().should('contain','/web/index.php/pim/viewEmployeeList')
    cy.get('.oxd-topbar-header-title').should('contain', 'PIM')
    cy.get('button').contains('Add').click()
    cy.url().should('contain', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
   
    })

    it('Add-Employee', () => {
    cy.get('.oxd-topbar-body-nav').contains('Add Employee').click()
    cy.get('.orangehrm-background-container').contains('Add Employee') 
    cy.url().should('contain','/web/index.php/pim/addEmployee')
    cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'PIM')    
       
    })

   
    it('Reports', () => {
    cy.get('.oxd-topbar-body-nav').contains('Reports').click()
    cy.get('.oxd-table-filter-header-title').contains('Employee Reports')
    cy.url().should('contain','/web/index.php/pim/viewDefinedPredefinedReports')
    cy.get('.oxd-topbar-header-title').should('contain', 'PIM')
    cy.get('button').contains('Add').click()
    cy.url().should('contain', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/definePredefinedReport')
    })
  

})
