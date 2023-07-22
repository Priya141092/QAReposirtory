export class LoginPage
{
    username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
 enterusername(username)
 {
    cy.get(this.username_textbox).type(username)
 }
 
 enterpassword(password)
 {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
 }

 clicklogin()
 {
    cy.get('.oxd-button').click()
 }


}