/// <reference types="Cypress"/>
import homePage_POM from '../support/pageObjectModel/automationExercise/homePage';
describe('HomePage', () => {
    const homePage = new homePage_POM();

    beforeEach(() => {
        cy.accessHomePage();
    });
    it('Verify Subscription in home page', () => {
        cy.scroll(homePage.selectors.footer)
        cy.getValue(homePage.selectors.subscription,'Subscription')
        cy.fillInput(homePage.selectors.subscribeInput,'Test@gmail.com');
        cy.clickOn(homePage.selectors.subscribeButton);
        cy.verifyPresence(homePage.selectors.alertSuccess);
    });
});