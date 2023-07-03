/// <reference types="Cypress"/>

describe('GET / POST - Products', () => {
    it("it should get all products", () => {
        cy.request("GET", "https://automationexercise.com/api/brandsList").then((response) => {
            expect(response.status).to.eq(200);
          });
      });
});
