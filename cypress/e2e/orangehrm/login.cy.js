
import LoginPage from '../../PageObject/LoginPage.js'

describe('orange - login page', ()=> {
    const lg = new LoginPage()

    //define variables
    let userName = 'Admin'
    let wrong_username ='notcorrect'
    let password = 'admin123'
    let wrong_password = 'notcorrect123'

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
      })
   
it('check elements on the page', ()=> {

        cy.get('[src="/web/images/ohrm_branding.png?v=1721393199309"]')
                  .should('be.visible')
        cy.get('h5').should('contain', 'Login')  
        cy.get('[src="/web/images/ohrm_logo.png"]').should('be.visible')
        cy.get('.orangehrm-login-error').should('contain.text', 'Username : Admin')
        .and('contain.text', 'Password : admin123' )
        
        cy.get('.oxd-form-row').should('exist')
        cy.get('button').contains('Login')
        cy.get('.orangehrm-login-forgot').should('contain.text', 'Forgot your password?')
        cy.get('.orangehrm-login-footer').should('exist')
        cy.url().should('contain', '/login')
        })
    
    //positive testing
it('Login in correctly', ()=> {

    lg.getUserName(userName)
    lg.getPassword(password)
    lg.clickLogin()
    lg.verifyUrl('/dashboard')
})

it('Login with no credentials', ()=>{

    lg.clickLogin()
    lg.getRequiredError()
    lg.verifyUrl('/login')
})

it('Login with wrong username ', ()=>{
   
    lg.getUserName(wrong_username)
    lg.getPassword(password)
    lg.clickLogin()
    lg.getErrorMessage()
    lg.verifyUrl('/login')
})

it('Login with wrong password', ()=>{
    
    lg.getUserName(userName)
    lg.getPassword(wrong_password)
    lg.clickLogin()
    lg.getErrorMessage()
    lg.verifyUrl('/login')
})

it('Login with no username', ()=> {
    
    lg.getPassword(password)
    lg.clickLogin()
    lg.getRequiredError()
    lg.verifyUrl('/login')
})

it('Login with no password', ()=> {
    
    lg.getUserName(userName)
    lg.clickLogin()
    lg.getRequiredError()
    lg.verifyUrl('/login')
})

})