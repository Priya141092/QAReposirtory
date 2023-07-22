/// <reference types="Cypress"/>

describe('POST user API',()=>{
    it('Create a single user',()=>{
        cy.request({

            method: 'POST',
            url:'https://reqres.in/api/users?page=2',
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(201)
            //expect(res.body).has.property('name','morpheus')

        })

    })

})