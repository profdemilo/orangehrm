    /// <reference types="cypress" />
    describe('Orange HRM - Leave Test', function() {

    let username='Admin'
    let password='admin123'
        
    beforeEach(function() {
    cy.visit('/') 
    cy.loginToOrangeHrm('Admin','admin123')
    cy.get(':nth-child(3) > .oxd-main-menu-item').contains('Leave').click()
    cy.url().should('contain', '/viewLeaveList')
    
    })
        

    /*cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
    */
      
    it('Apply', () => {

    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-text.oxd-text--h6.orangehrm-main-title').should('contain.text', 'Apply Leave')
    cy.url().should('contain','/applyLeave')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave')  
    
    })
  
    it('My Leave', () => {

    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-text.oxd-text--h5.oxd-table-filter-title').should('contain.text', 'My Leave List')
    cy.url().should('contain','/viewMyLeaveList')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave')  
    
    })
    
    it('Entitlements', () => {
    //Add Entitlements
       
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','Add Entitlements').click()
    cy.url().should('contain','/addLeaveEntitlement')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave')
       
    //Employee Entitlements
           
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','Employee Entitlements').click()
    cy.url().should('contain','/viewLeaveEntitlements')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave')
    
    //My Entitlements
            
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').should('contain.text','My Entitlements').click()
    cy.url().should('contain','/viewMyLeaveEntitlements')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave') 
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/addLeaveEntitlement')  
    
    })
    
    it('Reports', () => {
    //Leave Entitlements and Usage Report
       
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','Leave Entitlements and Usage Report').click()
    cy.url().should('contain','/viewLeaveBalanceReport')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave')
      
    //My Leave Entitlements and Usage Report
           
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','My Leave Entitlements and Usage Report').click()
    cy.url().should('contain','/viewMyLeaveBalanceReport')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave')
    
    })
    
    it('Configure', () => {
    //Leave Period
   
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','Leave Period').click()
    cy.url().should('contain','/defineLeavePeriod')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave')
  
    //Leave Types
       
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','Leave Types').click()
    cy.url().should('contain','/leaveTypeList')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave')
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/defineLeaveType')

    //Work Week
        
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').should('contain.text','Work Week').click()
    cy.url().should('contain','/defineWorkWeek')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave')
    
    //Holidays
           
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-link').should('contain.text','Holidays').click()
    cy.url().should('contain','/viewHolidayList')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave')
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveHolidays')
    
    }) 
    
    //:nth-child(6) > .oxd-topbar-body-nav-tab-item
    //cy.get(':nth-child(1) > li > .oxd-topbar-body-nav-tab-link')
    //cy.get(':nth-child(2) > li > .oxd-topbar-body-nav-tab-link')
    
    it('Leave List', () => { 

    cy.get(':nth-child(6) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(1) > li > .oxd-topbar-body-nav-tab-link').should('contain.text', 'Leave List').click()
    cy.get('.oxd-text.oxd-text--h5.oxd-table-filter-title').should('contain.text', 'Leave List')
    cy.url().should('contain','/viewLeaveList')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave')
    
    })

    it('Assign Leave', () => {
    
    cy.get(':nth-child(6) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(2) > li > .oxd-topbar-body-nav-tab-link').should('contain.text', 'Assign Leave').click()
    cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain.text', 'Assign Leave')
    cy.url().should('contain','/assignLeave')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Leave')
    
    })
    })
      
    /*
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
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