/// <reference types="Cypress"/>

describe('GET / POST - Products', () => {
    it('it should get all products', () => {
        cy.request('GET', 'https://automationexercise.com/api/productsList').then((response) => {
            expect(response.status).to.eq(200);
        });
    });
    // it("post to all products list", () => {
    //   cy.request("POST", "https://automationexercise.com/api/productsList").then((response) => {
    //       expect(response.status).to.eq(405);
    //     });
    // });

    it('should search for a product', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                userId: 1,
                id: 1,
                title: 'test',
                body: 'abc',
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            cy.log(JSON.stringify(response.body));
        });
    });
});
// 5748ac0a92bf5f0e7fc45d370e6b8816a6ff202d27a9a1a10089d38165a4b599
describe('Users', () => {
    it('it should return all users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            // headers: {
            //     authorization: '123132',
            // },
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
        });
    });

    it.only('should post a user',() => {

      cy.request({
        method:"POST",
        url:'https://gorest.co.in/public/v2/users',
        headers:{
          'authorization':'Bearer 5748ac0a92bf5f0e7fc45d370e6b8816a6ff202d27a9a1a10089d38165a4b599'
        },
        body: 
        {
          "id": 1243,
          "name": "test",
          "email": 'a@bc.com',
          "gender": "female",
          "status": "inactive"
        }
      }).then((response => {
        expect(response.status).to.eq(201)
      }))
    })

    
});
