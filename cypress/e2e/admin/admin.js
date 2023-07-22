/// <reference types="Cypress"/>
import {adminpage} from './adminpage'
import admin from './adminpage'

import{ Before, After, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
 //const adminpage1 = new adminpage()

Before(()=>{
    cy.reload()
})

Given("Launch Application and enter valid creds",()=>
{
    adminpage.loadPageadmin()
    adminpage.entervalidcredsforapp()
    adminpage.clickonsubmitbutton()
})



When ("Click on add employee",()=>
{
    adminpage.clickonpimmodule()
    adminpage.addemployee()


})

Then("Enter Details of employee and verify",()=>
{
   adminpage.enteremployeedetails()
})

