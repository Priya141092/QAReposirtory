class loginPage
{
    //username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'

     static loadPage()
     {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/")
        cy.url().should('include','orangehrmlive')
     }

     static entervalidcreds()
     {
          cy.fixture('orangejrm').then( (userdata)=>{
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username)
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password)
      })
     }
     
     static clickonsubmit()
     {

        cy.get('.oxd-button').click().and('be.enabled')
     }

     static verifypagetitle()
     {
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
     }
     
     static opnenewtab()
     {
      cy.get().sh
     }
}
export default loginPage