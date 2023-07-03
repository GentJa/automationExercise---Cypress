/// <reference types="Cypress"/>

describe('GET / POST - Products', () => {
    it("it should get all products", () => {
        cy.request("GET", "https://automationexercise.com/api/productsList").then((response) => {
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
           "title": "test",
           "body": "abc"
          }
        }).then((response) => {
          expect(response.status).to.eq(201); 
          cy.log(JSON.stringify(response.body));
        });
      });
});
