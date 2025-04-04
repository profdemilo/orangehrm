//cypress/pageObject/PimPage.js

class PimPage {

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
    }
    Login(userName, password) {
        cy.get('[name="username"]').type(userName)
        cy.get('[name="password"]').type(password)
        cy.get('button').contains('Login').click() 
    }
     navigateToPimPage() {
         cy.get('aside').should('be.visible')
        cy.get('.oxd-main-menu-item--name').should('be.visible')
        .contains('PIM').click()
        cy.url().should('contain', '/pim/viewEmployeeList')
    }    
    verifyUrl(expectedUrl) {   
        cy.url().should('contain', expectedUrl)
    }
    getTitle(value) {
        cy.get('.oxd-topbar-header').should('exist')
        cy.get('.oxd-topbar-header-breadcrumb-module').contains(value)
    }
    getUserInfo() {
        cy.get('.oxd-topbar-header').should('exist')   
    }
    checkUpgradeLink()   {
        cy.get('.oxd-topbar-header').should('exist')
        cy.get('.orangehrm-upgrade-link').should('be.visible') 
         .and('not.be.disabled')
    }
    checkUserInfo(optionIndex) {
        
        cy.get('.oxd-topbar-header-userarea').click()
        cy.get('.oxd-userdropdown-link').eq(optionIndex).click()
    }
    verifyPageContent(expectedContent) {
        cy.get(expectedContent).should('be.visible')
    }
    getCloseButton() {
        cy.get('.oxd-dialog-sheet--gutters').within(()=>{
            cy.get('.oxd-dialog-close-button').click()
        })
    }
    clickPimMenu(menuIndex, OptionIndex) {

        cy.get('.oxd-topbar-body-nav-tab').eq(menuIndex).click()
        cy.get('.oxd-topbar-body-nav-tab-link').eq(OptionIndex).click()
    }
    clickQUestionSign() {
        cy.get('.oxd-topbar-header').should('exist')
        cy.get('.bi-question-lg').should('be.visible')
        .and('not.be.disabled')
    }
    getOtherOption(menuIndex) {
        cy.get('.oxd-topbar-body-nav-tab').eq(menuIndex).click()
   }

   }
   export default PimPage;
    

        