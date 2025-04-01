
//- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToOrangeHrm', (username, password) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')

    cy.get('[name="username"]').type(username)
    cy.get('[name="password"]').type(password)
    cy.get('button').contains('Login').click()
    cy.url().should('contain', '/dashboard')
})

Cypress.Commands.add('navigateToAdmin', () => {
    cy.get('.oxd-main-menu-item--name').should('be.visible')
        .contains('Admin').click();
    cy.url().should('contain', '/admin/viewSystemUsers')
})