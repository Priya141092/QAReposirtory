/// <reference types="Cypress"/>
import loginPage from './loginPage'
import orangeapplication from './loginPage'

import{ Before, After, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
//import { LoginPage } from "../pages/loginobjects"

Before(()=>{
    cy.reload()
})

Given("Launch Application",()=>
{
loginPage.loadPage()
})

When ("Enter valid username and password",()=>
{
   loginPage.entervalidcreds()

})


Then("Click on Login",()=>
{
loginPage.clickonsubmit()

})

And("Verify the page title",()=>{

    loginPage.verifypagetitle()
})