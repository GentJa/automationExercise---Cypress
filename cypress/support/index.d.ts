declare namespace Cypress {
    interface Chainable<Subject> {
      fillInput(selector: string, value: string): Chainable<Subject>;
      getRandomNumber(mini: number, max: number): Chainable<Subject>;
      accessHomePage(): Chainable<Subject>;
      accessSpecificPage(page:string): Chainable<Subject>;
      clickOn(selector:string): Chainable<Subject>;
      clickCheck(selector:string): Chainable<Subject>;
      fillInput(selector:string,value:string): Chainable<Subject>;
      selectDropdown(selector:string,value:string): Chainable<Subject>;
      getValue(selector:string,value:string): Chainable<Subject>;
      verifyColor(selector:string,color:string): Chainable<Subject>;
      verifyUrlOfPage(value:string): Chainable<Subject>;
      scroll(value:string): Chainable<Subject>;
      verifyPresence(value:string): Chainable<Subject>;
      getTextContent(value:string): Chainable<Subject>;
      uploadFile(selector:string,path:string): Chainable<Subject>;
      verifyValues(selector:string,selector:string): Chainable<Subject>;
      insertCustomer(customerData:any): Chainable<Subject>;
    }
  }
  