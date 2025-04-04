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
    CheckUserInfo() {
       cy.get('.oxd-userdropdown').should('exist')
    }
    searchUser(value) {
        cy.get('.oxd-form-row').within(() =>{
        cy.get('.oxd-input.oxd-input--active').type(value)
            })
        cy.get('[type="submit"]').click()
        }

    getRecordTable() {
        cy.get('.orangehrm-paper-container').should('be.visible')
    }

    getErrrorMessage() {
        cy.get('#oxd-toaster_1').should('exist')
    }
    clickSubmenuOption(locator, subIndex) {
        cy.get(locator).eq(subIndex).click();
    }
    clickMenuOption(menuIndex, OptionIndex) {

        cy.get('.oxd-topbar-body-nav-tab').eq(menuIndex).click()
        cy.get('.oxd-topbar-body-nav-tab-link').eq(OptionIndex).click()
    }
    getTableContent(eachRecord) {
        cy.get('.orangehrm-paper-container').should('contain', eachRecord); // Adjust `.oxd-table` selector based on your table structure
    }

    verifyUrl(expectedUrl) {
        cy.url().should('include', expectedUrl)
    }

} 
export default AdminPage;


    
  




