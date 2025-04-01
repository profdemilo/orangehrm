//cypress/pageObject/loginPage.js

class LoginPage {
    
    getUserName(userName) {
        cy.get('[name="username"]').type(userName)
    }
    getPassword(password){
        cy.get('[name="password"]').type(password)
    }
    clickLogin() {
        cy.get('button[type="submit"]').click()
    }
    getRequiredError(){
        cy.get('span').should('include.text', 'Required')
    }
    getErrorMessage() {
        cy.get('.oxd-alert-content.oxd-alert-content--error').should('be.visible')
    }
    verifyUrl(expectedUrl) {
        cy.url().should('contain', expectedUrl)
    }
   
    verifyLoginOrDashboard(expectedUrl) {
        if (expectedUrl === 'login') {
          cy.url().should('contain', '/login') 
          } else if (expectedOutcome === 'dashboard') {
          cy.url().should('contain', '/dashboard')
        }
    }
}

export default Login;