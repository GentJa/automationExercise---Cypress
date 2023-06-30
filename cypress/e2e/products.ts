/// <reference types="Cypress"/>

import carts_POM from '../support/pageObjectModel/automationExercise/carts';
import homePage_POM from '../support/pageObjectModel/automationExercise/homePage';
import products_POM from '../support/pageObjectModel/automationExercise/products';

describe('Products', () => {
    const homePage = new homePage_POM();
    const products = new products_POM();
    const carts = new carts_POM();
    before(function () {
        cy.fixture("products").then(function (data) {
            (globalThis as any).data = data;
        })
    })

    beforeEach(() => {
        // cy.accessHomePage();
        // cy.clickOn(products.selectors.products);
        cy.accessSpecificPage(Cypress.env("products"))
        cy.getValue(products.selectors.allProducts, 'All Products');
    });

    it('Verify All Products and product detail page', () => {
        cy.get(products.selectors.viewProduct).click();
        cy.get(products.selectors.price).should('be.visible');
        cy.get(products.selectors.brand).should('be.visible');
    });
    it('Search Products', () => {
        cy.fillInput(products.selectors.searchInput, 'Premium Polo T-Shirts');
        cy.clickOn(products.selectors.searchInputButton);
        cy.getValue(products.selectors.expectedItem, 'Premium Polo T-Shirts');
    });

    it('Add multiple prodcuts to cart', () => {
        (globalThis as any).data.productName.forEach(function (el: string) {

            products.addMultipleProducts(products.selectors.firstProduct, el);
            debugger;
            // cy.wait(2000)
            // cy.clickOn(products.selectors.modal);
            // cy.clickOn(carts.selectors.carts);
        });

    })

    it('Add Products to Cart', () => {
        let firstProductValue: string;
        products.clickOnHover(products.selectors.firstProduct);

        // Get the value of the first product on the first page
        cy.get(products.selectors.priceOfFirstProd)
            .invoke('text')
            .then((value) => {
                firstProductValue = value;
            });

        cy.clickOn(products.selectors.modal);
        cy.clickOn(carts.selectors.carts);

        // Get the value of the first product on the last page
        cy.get(products.selectors.priceOfFirstProdOnPurchase)
            .invoke('text')
            .then((lastPageValue) => {
                // Verify the values only if the first product exists on the first page
                if (firstProductValue) {
                    cy.verifyValues(firstProductValue, lastPageValue);
                }
            });
    });
    it('Verify Product quantity in Cart', {
        // retries: {
        //     runMode: 2,
        //     openMode: 2
        // }
    },
        () => {

            let qunatity = '10';
            cy.get(products.selectors.viewProduct).click();
            products.clearAndFillInput(products.selectors.quantity, qunatity);
            cy.clickOn(products.selectors.addProductToCartButton);
            cy.getValue(products.selectors.modalProductAdded, 'Added!');
            cy.clickOn(products.selectors.modal);
            cy.clickOn(carts.selectors.carts);
            cy.get(carts.selectors.quantity)
                .invoke('text')
                .then((item) => {
                    cy.verifyValues(qunatity, item);
                });
        });
});
