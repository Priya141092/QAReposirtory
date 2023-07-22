export class adminpage
{
   // elements={
   // username_textbox : () => 
   // }

 static loadPageadmin()
     {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/")
        cy.url().should('include','orangehrmlive')
     }

   
   
      static entervalidcredsforapp()
      {
       
         cy.fixture('orangejrm').then( (userdata)=>{
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username)
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password)
         
         
      })
     }

     static clickonsubmitbutton()
     {
        cy.get('.oxd-button').click()
     }

     
     static clickonpimmodule()
     {
      cy.contains('PIM').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','PIM')
    

     }
     
     static addemployee()
     {
      cy.contains('Add Employee').click()
      cy.contains('Add Employee').and('be.visible')
      
     }

     static enteremployeedetails()
     {
      cy.fixture('orangejrm').then( (userdata)=>{
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(userdata.firstname)
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(userdata.lastname)
      cy.get('.oxd-button--secondary').click()
      cy.wait(3000)
      cy.contains('Personal Details').should('have.text','Personal Details')

     })
     
   }
}
