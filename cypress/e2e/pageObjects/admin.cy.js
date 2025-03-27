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
    cy.get(':nth-child(1) > .oxd-main-menu-item').contains('Admin').click()
    cy.url().should('contain','/web/index.php/admin/viewSystemUsers')
    cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Admin')

    })

    /*cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
    */
  
    it('User Management', () => {

    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','Users').click()
    cy.get('.oxd-text.oxd-text--h5.oxd-table-filter-title').should('contain.text', 'System Users')
    cy.url().should('contain','/viewSystemUsers')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')  
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveSystemUser')

    })

    it('Job', () => {
    //Job Titles
   
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','Job Titles').click()
    cy.url().should('contain','/viewJobTitleList')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveJobTitle')

    //Pay Grades
       
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','Pay Grades').click()
    cy.url().should('contain','/viewPayGrades')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/payGrade')

    //Employment Status
        
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').should('contain.text','Employment Status').click()
    cy.url().should('contain','/employmentStatus')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveEmploymentStatus')   

    //Job Categories
           
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-link').should('contain.text','Job Categories').click()
    cy.url().should('contain','/jobCategory')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin') 
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveJobCategory')

    //Work Shifts
        
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-link').should('contain.text','Work Shifts').click()
    cy.url().should('contain','/workShift')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')  
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveWorkShifts')  
    
    }) 

    it('Organization', () => {
    //General Information
       
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','General Information').click()
    cy.url().should('contain','/viewOrganizationGeneralInformation')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')     
    
    //Locations
           
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','Locations').click()
    cy.url().should('contain','/viewLocations')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveLocation')
    
    //Structure
            
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').should('contain.text','Structure').click()
    cy.url().should('contain','/viewCompanyStructure')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')     
    
    }) 

    it('Qualifications', () => {
    //Skills
           
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').should('contain.text','Skills').click()
    cy.url().should('contain','/viewSkills')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')  
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveSkills')
        
    //Education
               
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').should('contain.text','Education').click()
    cy.url().should('contain','/viewEducation')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveEducation')
        
    //Licenses
                
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').should('contain.text','Licenses').click()
    cy.url().should('contain','/viewLicenses')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')  
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveLicenses')
        
    //Languages
                   
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-link').should('contain.text','Languages').click()
    cy.url().should('contain','/viewLanguages')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin') 
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveLanguages')
        
    //Memberships
                
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-link').should('contain.text','Memberships').click()
    cy.url().should('contain','/membership')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')  
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveMemberships')
    
    })
    
    it('Nationalities', () => {

    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1) > li').click()
    cy.get('.oxd-text.oxd-text--h6.orangehrm-main-title').contains('Nationalities')
    cy.url().should('contain','/nationality')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin') 
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveNationality')

    })

    it('Corporate Branding', () => {

    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-dropdown-menu > :nth-child(2) > li').click()
    cy.get('.oxd-text.oxd-text--h6.orangehrm-main-title').contains('Corporate Branding')
    cy.url().should('contain','/addTheme')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')  
    
    })
 
    it('Configuration', () => {
    //Email Configuration

    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click() 
    cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(1) > a').should('contain.text','Email Configuration').click()
    cy.url().should('contain','/listMailConfiguration')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')     

    //Email Subscriptions
   
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click() 
    cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(2) > a').should('contain.text','Email Subscriptions').click()
    cy.url().should('contain','/viewEmailNotification')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')     

    //Localization
    
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click() 
    cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(3) > a').should('contain.text','Localization').click()
    cy.url().should('contain','/localization')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')     

    //Language Packages
       
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click() 
    cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(4) > a').should('contain.text','Language Packages').click()
    cy.url().should('contain','/languagePackage')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')     

    //Modules
    
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click() 
    cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(5) > a').should('contain.text','Modules').click()
    cy.url().should('contain','/viewModules')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')     

    //Social Media Authentication
    
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click() 
    cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(6) > a').should('contain.text','Social Media Authentication').click()
    cy.url().should('contain','/openIdProvider')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')   
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/addAuthProvider')


    //Register OAuth Client
    
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click() 
    cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(7) > a').should('contain.text','Register OAuth Client').click()
    cy.url().should('contain','/registerOAuthClient')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin')     
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/saveOAuthClient')

    //LDAP Configuration
    
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click() 
    cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(8) > a').should('contain.text','LDAP Configuration').click()
    cy.url().should('contain','/ldapConfiguration')
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain.text', 'Admin') 
    
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
