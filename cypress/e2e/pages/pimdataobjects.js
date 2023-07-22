 
class pimdataobjects
{
    static clickonpimmodule()
    {
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')

    }

    static useraddsemployeedetails()
    {
        cy.contains('Add Employee')
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('User1')

    }

    static saveallthedetails()
    {

    }
}
export default pimdataobjects