//const { get } = require("cypress/types/lodash");
/// <reference types="Cypress"/>

describe('New tab',()=>
{
    beforeEach(()=>{
cy.visit('https://practice.automationbro.com')


    });
    it('Handling new tab',()=>{

        cy.get('#contact-us').invoke('removeAttr','target')
        .click()
        cy.get('h1').should('have.text','Contact')

    }
    )

})