// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillInput', (selector: string, value: string) => {
  cy.get(selector).type(value);
});


Cypress.Commands.add('getRandomNumber', (min: number, max: number): Cypress.Chainable<number> => {
  return cy.wrap(Math.floor(Math.random() * (max - min + 1)) + min);
});

Cypress.Commands.add('accessHomePage', (): void => {
  cy.visit('/');
})

Cypress.Commands.add('accessSpecificPage', (page: string): void => {
  cy.visit('/' + page)
})

Cypress.Commands.add('clickOn', (selector: string): void => {
  cy.get(selector).click();
})

Cypress.Commands.add('clickCheck', (selector: string): void => {
  cy.get(selector).check();
})

Cypress.Commands.add('fillInput', (selector: string, value: string): void => {
  cy.get(selector).type(value);
})

Cypress.Commands.add('selectDropdown', (selector: string, value: string): void => {
  cy.get(selector).select(value);
})

Cypress.Commands.add('getValue', (selector: string, expected: string): void => {
  cy.get(selector).then((item) => {
    const value = item.text();
    expect(value).to.eq(expected)
  })
})

Cypress.Commands.add('verifyColor', (selector: string, color: string) => {
  cy.get(selector).should('have.css', 'color', color);
})

Cypress.Commands.add('verifyUrlOfPage', (value: string) => {
  cy.url().should('eq', `${value}`)
})

Cypress.Commands.add('uploadFile', (selector, path) => {
  cy.get(selector).selectFile(`${path}`)
})

Cypress.Commands.add('scroll', (selector: string) => {
  cy.get(selector).scrollIntoView();
})

Cypress.Commands.add('verifyPresence', (selector: string) => {
  cy.get(selector).should('be.visible')
})


Cypress.Commands.add('verifyValues', (value1: string, value2: string) => {
  expect(value1).to.equal(value2);
});

Cypress.Commands.add('getTextContent', (selector: string): void => {
  cy.get(selector).then((item) => {
    const value = item.text();
    return value;
  })
})









