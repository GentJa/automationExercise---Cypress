/// <reference types="Cypress"/>'

class products_POM {

    selectors ={
        products:'.shop-menu > .nav > :nth-child(2) > a',
        allProducts:'.title',
        items:'.features_items .product-image-wrapper',
        viewProduct:':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a',
        price:':nth-child(5) > span',
        brand:'.product-information > :nth-child(8)',
        searchInput:'#search_product',
        searchInputButton:'#submit_search',
        expectedItem:'.productinfo > p',
        firstProduct:'.productinfo',
        priceOfFirstProd:':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > h2',
        priceOfFirstProdOnPurchase:'#product-1 > td.cart_price > p',
        addToCart:'a.btn.add-to-cart',
        modal:'.modal-footer > .btn',
        quantity:'#quantity',
        addProductToCartButton:':nth-child(5) > .btn',
        modalProductAdded:'.modal-title',
    }

     clickOnHover(selector:string) {
        cy.get(selector)
        .first()
        .should('be.visible')
        .within(() => {
          cy.get('a.btn.add-to-cart') // Adjust the selector if needed
            .click();
        });
    }
    addMultipleProducts(selector:string,el:string) {
        cy.get(selector).each(($el, $index, $list) => {
            if ($el.text().includes(el)) {
              cy.wrap($el)
                .find('a.btn.add-to-cart')
                .click();
                cy.wait(2000)
                cy.log(el)
                cy.clickOn(this.selectors.modal);
            }
          });
    }



    clearAndFillInput(selector:string,value:string) {
        cy.get(selector).clear().fillInput(selector,value);
    }
      
}

export default products_POM;