/// <reference types="Cypress"/>'

class homePage_POM {
    selectors = {
      signup: '.shop-menu > .nav > :nth-child(4) > a',
      usernname: '[data-qa="signup-name"]',
      email: '[data-qa="signup-email"]',
      submitSingupButton: '[data-qa="signup-button"]',
      contactUs: ':nth-child(8) > a',
      testCase:':nth-child(5) > a',
      homePageText:'.login-form > h2',
      loginEmail:'[data-qa="login-email"]',
      loginPassword:'[data-qa="login-password"]',
      loginButton:'[data-qa="login-button"]',
      incorrectLogin:'.login-form > form > p',
      logout:'.shop-menu > .nav > :nth-child(4) > a',
      loginUrl:'https://www.automationexercise.com/login',
      homePageUrl:'https://www.automationexercise.com/',
      footer:'.footer-widget > .container > .row',
      subscription:'footer > div.footer-widget > div > div > div.col-sm-3.col-sm-offset-1 > div > h2',
      subscribeInput:'#susbscribe_email',
      subscribeButton:'#subscribe',
      alertSuccess:'.alert-success'
    };

    verifyLoggedInUsername() {
      return cy.contains(`Logged in as`).should('be.visible');
    }    

    login(email:string,password:string) {
    cy.getValue(this.selectors.homePageText,'Login to your account');
    cy.fillInput(this.selectors.loginEmail,email);
    cy.fillInput(this.selectors.loginPassword,password); 
    cy.clickOn(this.selectors.loginButton);
    // this.verifyLoggedInUsername();
    // cy.clickOn(this.selectors.logout)
    // cy.verifyUrlOfPage(this.selectors.loginUrl)
    }


    incorrectData() {
      cy.getValue(this.selectors.incorrectLogin,'Your email or password is incorrect!');
      cy.verifyColor(this.selectors.incorrectLogin, 'rgb(255, 0, 0)');
    }
  }
  
  export default homePage_POM;
  