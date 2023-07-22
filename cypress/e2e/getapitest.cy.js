/// <reference types="Cypress"/>

describe('Get user API',()=>{
    it('get single user',()=>{
        cy.request({

            method: 'GET',
            url:'https://reqres.in/api/users?page=2'
        }).then((res)=>{
            expect(res.status).to.eq(200)

        })

    })

})