//cypress/pageObject/AdminPage.js

class AdminPage {

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
    }
    
    Login(userName, password) {
        cy.get('input[name="username"]').type(userName);
        cy.get('input[name="password"]').type(password);

        cy.get('button').contains('Login').click() 
    }
    checkUrl() {
       cy.url().should('contain', '/dashboard')
    }
    getSidePanel() {
        cy.get('aside').should('be.visible')
    }
    navigateToAdminPage() {
       cy.get('.oxd-main-menu-item--name').should('be.visible')
        .contains('Admin').click()
       cy.url().should('contain', '/admin/viewSystemUsers')
    }
    VerifyPageHeader() {
       cy.get('.oxd-text--h6').should('contain', 'Admin')
         .and('contain','User Management')
       cy.get('.orangehrm-upgrade-link').should('be.visible') 
         .and('not.be.disabled')
    }
    PageContent() {
        cy.get('.orangehrm-header-container').within(() =>{
            cy.get('.orangehrm-main-title').should('contain', 'Job Titles')
            
        })
    }
    CheckDropDownMenu() {
       cy.get('.oxd-userdropdown').should('exist')
    }
    searchUser(value) {
        cy.get('.oxd-form-row').within(() =>{
        cy.get('.oxd-input.oxd-input--active').type(value)
            })
        cy.get('[type="submit"]').click()
    }
    getErrrorMessage() {
        cy.get('#oxd-toaster_1').should('exist')
    }
    clickMenu(menuIndex) {
        cy.get('.oxd-topbar-body-nav-tab').eq(menuIndex).click()
    }
    clickMenuOption(menuIndex, OptionIndex) {

        cy.get('.oxd-topbar-body-nav-tab').eq(menuIndex).click()
        cy.get('.oxd-topbar-body-nav-tab-link').eq(OptionIndex).click()
    }
    verifyUrl(expectedUrl) {
        cy.url().should('include', expectedUrl)
    }

} 
export default AdminPage;


    
  




