/// <reference types="cypress" />

import AdminPage from '../../PageObject/AdminPage.js'
import PimPage from '../../PageObject/PimPage.js'

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
       adminPage.verifyUrl('/dashboard')
      })

it('Verify Admin Page Header', ()=> {
   
   adminPage.navigateToAdminPage()
   adminPage.verifyUrl('/admin/viewSystemUsers')
   adminPage.VerifyPageHeader()
   adminPage.CheckUserInfo()  
})
 
 it('verify search functionality with existing user', ()=> {

   adminPage.navigateToAdminPage()
    adminPage.searchUser('Admin') 
 })

it('verify search functinality with notexisting user', ()=> {

   adminPage.navigateToAdminPage()
   adminPage.searchUser('notcorrect123')
   adminPage.getErrrorMessage()
})

it('User Management menu', ()=> {
  
   adminPage.navigateToAdminPage()
   adminPage.clickMenuOption(0,0) 
   adminPage.verifyUrl('/admin/viewSystemUsers') 
})

it('job Menu ', ()=>{
  
   adminPage.navigateToAdminPage()
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

 it('Organization menu', ()=> {
    
   adminPage.navigateToAdminPage()
   adminPage.clickMenuOption(2,0) 
   adminPage.verifyUrl('/admin/viewOrganizationGeneralInformation') //General information

   adminPage.clickMenuOption(2,1)  //Location
   adminPage.verifyUrl('/admin/viewLocations')

   adminPage.clickMenuOption(2,2) //Structure
   adminPage.verifyUrl('admin/viewCompanyStructure') 
})

 it('Qualifications', ()=> {
  
   adminPage.navigateToAdminPage()  //Skills
   adminPage.clickMenuOption(3,0) 
   adminPage.verifyUrl('/admin/viewSkills')
   adminPage.getRecordTable()

   adminPage.clickMenuOption(3,1) 
   adminPage.verifyUrl('/admin/viewEducation')  //Education
   adminPage.getRecordTable()

   adminPage.clickMenuOption(3,2) 
   adminPage.verifyUrl('/admin/viewLicenses') //Licenses
   adminPage.getRecordTable()

   adminPage.clickMenuOption(3,3) 
   adminPage.verifyUrl('/admin/viewLanguages')  //Languages
   adminPage.getRecordTable()

   adminPage.clickMenuOption(3,4) 
   adminPage.verifyUrl('/admin/membership')  //Membership
   adminPage.getRecordTable()
})   

it('More Menu options', ()=> {

   adminPage.navigateToAdminPage()  
   adminPage.clickMenuOption(4,0) 
   adminPage.verifyUrl('/admin/nationality')  //Membership
   adminPage.getRecordTable()

   adminPage.clickMenuOption(4,1) 
   adminPage.verifyUrl('/admin/addTheme')  //Membership
 
   adminPage.clickMenuOption(4,2) 
})


})
   

    