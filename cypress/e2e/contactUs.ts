/// <reference types="Cypress"/>
import contactUs_POM from '../support/pageObjectModel/automationExercise/contact_us';
import homePage_POM from '../support/pageObjectModel/automationExercise/homePage';
describe('Contact Us Page', () => {
    const contactPage = new contactUs_POM();
    const homePage = new homePage_POM();

    beforeEach(() => {
        cy.accessHomePage();
        cy.clickOn(homePage.selectors.signup);
    });
    it('Contact Us', () => {
        cy.clickOn(homePage.selectors.contactUs);
        cy.getValue(contactPage.selectors.getInTouch, contactPage.selectors.getInTouchText);
        cy.fillInput(contactPage.selectors.name, 'Gent');
        cy.fillInput(contactPage.selectors.email, 'gent@gmail.com');
        cy.fillInput(contactPage.selectors.subject, 'AI');
        cy.fillInput(contactPage.selectors.message, 'Test....');
        cy.uploadFile(contactPage.selectors.fileUpload, 'cypress/fixtures/sample.pdf');
        cy.clickOn(contactPage.selectors.submit);
        cy.getValue(contactPage.selectors.success, 'Success! Your details have been submitted successfully.');
        cy.clickOn(contactPage.selectors.homeButton);
        cy.verifyUrlOfPage(homePage.selectors.homePageUrl);
    });

    it('Verify Test Cases Page', () => {
        cy.clickOn(homePage.selectors.testCase);
        cy.verifyUrlOfPage('/' + 'test_cases');
    });
});
