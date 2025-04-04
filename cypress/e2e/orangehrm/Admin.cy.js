/// <reference types="cypress" />

import AdminPage from '../../PageObject/AdminPage.js'

describe('Orange HRM - Admin page', ()=> {
 
     const adminPage = new AdminPage()
     //define varibles
     let userName = 'Admin'
     let wrong_username ='notcorrect'
     let password = 'admin123'
     let wrong_password = 'notcorrect123'

      
      beforeEach(() => {
       adminPage.visit('')
       adminPage.Login('Admin', 'admin123')
       adminPage.navigateToAdminPage()
      })

it('Verify Admin Page Header', ()=> {
   
   adminPage.VerifyPageHeader()
   adminPage.CheckDropDownMenu()  
})
 
 it('verify search functionality with existing user', ()=> {
    adminPage.searchUser('Admin')  
 })

it('verify search functinality with non existing user', ()=> {
   adminPage.searchUser('notcorrect123')  
   adminPage.getErrrorMessage()
})

it('User Management dropdown menu', ()=> {
  
   cy.get('.oxd-topbar-body-nav-tab').eq(0).click()
   cy.get('.oxd-topbar-body-nav-tab-link').should('contain.text', 'Users').click()
   cy.url().should('contain', '/admin/viewSystemUsers')   
})

it('job', ()=>{
   const links = [
      { index: 0, url: '/admin/viewJobTitleList' },    
      { index: 1, url: '/admin/viewPayGrades' },          
      { index: 2, url: 'admin/employmentStatus' },       
      { index: 3, url: '/admin/jobCategory' },            
      { index: 4, url: '/admin/workShift' }              
  ]
  
  adminPage.clickMenuOption(1,0) 
  adminPage.verifyUrl('/admin/viewJobTitleList')
 

  adminPage.clickMenuOption(1,1) 
  adminPage.verifyUrl('/admin/viewPayGrades')

  adminPage.clickMenuOption(1,2) 
  adminPage.verifyUrl('admin/employmentStatus') 

  adminPage.clickMenuOption(1,3) 
  adminPage.verifyUrl('/admin/jobCategory')

  adminPage.clickMenuOption(1,4) 
  adminPage.verifyUrl('/admin/workShift')
})

 it('Organization drop down menu', ()=> {
    const links = [
      {index: 0 }, {index: 1 }, {index: 2 } ]
      
      adminPage.clickMenuOption(2,0) 
      adminPage.verifyUrl('/admin/viewOrganizationGeneralInformation')

      adminPage.clickMenuOption(2,1) 
      adminPage.verifyUrl('/admin/viewLocations')

      adminPage.clickMenuOption(2,2) 
      adminPage.verifyUrl('admin/viewCompanyStructure') 
})

 it('Qualifications', ()=> {
   const links = [
      {index: 0, url: '/admin/viewSkills'},
      {index: 1, url: '/admin/viewEducation'},
      {index: 2, url: '/admin/viewLicenses'},
      {index: 3, url: '/admin/viewLanguages'},
      {index: 4, url: '/admin/membership'}
]
   adminPage.clickMenuOption(3,0) 
   adminPage.verifyUrl('/admin/viewSkills')

   adminPage.clickMenuOption(3,1) 
   adminPage.verifyUrl('/admin/viewEducation')

   adminPage.clickMenuOption(3,2) 
   adminPage.verifyUrl('/admin/viewLicenses') 

   adminPage.clickMenuOption(3,3) 
   adminPage.verifyUrl('/admin/viewLanguages')

   adminPage.clickMenuOption(3,4) 
   adminPage.verifyUrl('/admin/membership')

 })   

it('Nationalities', ()=> {

   cy.get('.oxd-topbar-body-nav-tab').eq(4).click()
   cy.url().should('include', '/admin/nationality')
})

it('Coperate branding', ()=> {

   cy.get('.oxd-topbar-body-nav-tab.--parent.--visited').should('contain', 'Coporate Branding').click()
   cy.url().should('include', '/admin/addTheme')


})

})
   

    