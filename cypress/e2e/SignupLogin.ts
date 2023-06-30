/// <reference types="Cypress"/>

import contactUs_POM from "../support/pageObjectModel/automationExercise/contact_us";
import homePage_POM from "../support/pageObjectModel/automationExercise/homePage";
import signup_POM from "../support/pageObjectModel/automationExercise/signup";


describe('Create and login', () => {
  const homePage = new homePage_POM();
  const signUpPage = new signup_POM();
  const contactPage = new contactUs_POM();
  let data: any; // Define the data variable

  before(() => {
    cy.fixture('example').then((exampleData: any) => {
      data = exampleData; // Assign the loaded fixture data to the data variable
      cy.wrap(data).as('data'); // Alias the data variable for later use
    });
  });

  beforeEach(() => {
    cy.accessHomePage();
    cy.clickOn(homePage.selectors.signup);
  });

  it('Create account', function () { // Use a regular function instead of an arrow function to preserve the 'this' context
   
    cy.get('.signup-form > h2').then((itemText) => {
      const signUpText = itemText.text();
      expect(signUpText).to.equal('New User Signup!');
    });

    cy.fillInput(homePage.selectors.usernname, 'Gent');
    // homePage.fillInput(homePage.selectors.email, `gentjashari${homePage.getRandomNumber(1000, 9999)}@gmaiil.com`);
    cy.fillInput(homePage.selectors.email, `gent@gmail.com`);
    cy.clickOn(homePage.selectors.submitSingupButton);
    cy.clickCheck(signUpPage.selectors.gender);
    cy.fillInput(signUpPage.selectors.password, this.data.password); // Access the data variable using 'this'
    cy.selectDropdown(signUpPage.selectors.dayOfBirth, '1');
    cy.selectDropdown(signUpPage.selectors.month, '3');
    cy.selectDropdown(signUpPage.selectors.year, '1991');
    cy.fillInput(signUpPage.selectors.firstName, 'Gent');
    cy.fillInput(signUpPage.selectors.lastName, 'Jashari');
    cy.fillInput(signUpPage.selectors.company, 'Polymath');
    cy.fillInput(signUpPage.selectors.address, 'Kroi i bardhe');
    cy.fillInput(signUpPage.selectors.address2, 'Dardani');
    cy.selectDropdown(signUpPage.selectors.country, 'New Zealand');
    cy.fillInput(signUpPage.selectors.state, 'USA');
    cy.fillInput(signUpPage.selectors.city, 'New zeland');
    cy.fillInput(signUpPage.selectors.zipCode, '10000');
    cy.fillInput(signUpPage.selectors.mobileNumber, '146-123-123');
    cy.clickOn(signUpPage.selectors.createAccount);
    cy.getValue(signUpPage.selectors.accountCreated,'Account Created!');
    cy.clickOn(signUpPage.selectors.clickcreateAccountatTheEnd);
    homePage.verifyLoggedInUsername();
  });

  it.only('Login with correct data',() => {
    homePage.login('gent@gmail.com',data.password);
  })

  it.only('Try to login with incorrect data',() => {
    homePage.login('gent@gmail.com','123123');
    homePage.incorrectData();
})

it('Logut user',() => {
    cy.getValue(homePage.selectors.homePageText,'Login to your account');
    cy.fillInput(homePage.selectors.loginEmail,'gent@gmail.com');
    cy.fillInput(homePage.selectors.loginPassword,data.password); 
    cy.clickOn(homePage.selectors.loginButton);
    homePage.verifyLoggedInUsername();
    cy.clickOn(homePage.selectors.logout)
    cy.verifyUrlOfPage(homePage.selectors.loginUrl)
})
after(()=>{
  
})
});
