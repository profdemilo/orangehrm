/// <reference types="cypress" />

import AdminPage from '../../PageObject/AdminPage.js'
import PimPage from '../../PageObject/PimPage.js'

describe('Orange HRM - Pim Page', ()=> {

    const pimPage = new PimPage()
//define varibles
let userName = 'Admin'
let wrong_username ='notcorrect'
let password = 'admin123'
let wrong_password = 'notcorrect123'

beforeEach(() => {

    pimPage.visit()
    pimPage.Login('Admin', 'admin123')
    pimPage.verifyUrl('/dashboard')
})

it('verify PIM Page Header', ()=> {
   
    pimPage.navigateToPimPage()
   pimPage.getTitle('PIM')
   pimPage.checkUpgradeLink()
   pimPage.getUserInfo()
})

it.only('verify user dropdown information', () => {
       
    pimPage.navigateToPimPage()
        const links =[
            { index: 0 }, { index: 1 },  { index: 2 },  { index: 3 }, ]

       pimPage.checkUserInfo(0)
      
       pimPage.checkUserInfo(1)
       
       pimPage.verifyUrl('/help/support')
          cy.get('.orangehrm-card-container').should('exist') //support
   })

it('check PIM menu options', () =>{

    pimPage.navigateToPimPage()
    const links =[
      { index: 0 }, { index: 1 },  { index: 2 },  { index: 3 },  { index: 4 }]

     pimPage.clickPimMenu(0, 0)
     pimPage.verifyUrl('/pim/configurePim')
     pimPage.getTitle('PIM', 'Configuration')

     pimPage.clickPimMenu(0, 1)
     pimPage.verifyUrl('/pim/listCustomFields')
     pimPage.getTitle('PIM', 'Configuration')

     pimPage.clickPimMenu(0, 2)
     pimPage.verifyUrl('/pim/pimCsvImport')
     pimPage.getTitle('PIM', 'Configuration')

     pimPage.clickPimMenu(0, 3)
     pimPage.verifyUrl('/pim/viewReportingMethods')
     pimPage.getTitle('PIM', 'Configuration')

     pimPage.clickPimMenu(0, 4)
     pimPage.verifyUrl('/pim/viewTerminationReasons')
     pimPage.getTitle('PIM', 'Configuration')

     pimPage.getOtherOption(1)
     pimPage.verifyUrl('/pim/viewEmployeeList')
     
     pimPage.getOtherOption(2)
     pimPage.verifyUrl('/pim/addEmployee')

     pimPage.getOtherOption(3)
     pimPage.verifyUrl('/pim/viewDefinedPredefinedReports')
})

it('verify the Question sign', () => {

    pimPage.navigateToPimPage()
    pimPage.clickQUestionSign()
    pimPage.visit()
})


})
