/// <reference types="Cypress"/>
class signup_POM{
    selectors = {
    gender: '#id_gender1',
      password: '[data-qa="password"]',
      dayOfBirth: '[data-qa="days"]',
      month: '[data-qa="months"]',
      year: '[data-qa="years"]',
      firstName: '[data-qa="first_name"]',
      lastName: '[data-qa="last_name"]',
      company: '[data-qa="company"]',
      address: '[data-qa="address"]',
      address2: '[data-qa="address2"]',
      country: '[data-qa="country"]',
      state: '[data-qa="state"]',
      city: '[data-qa="city"]',
      zipCode: '[data-qa="zipcode"]',
      mobileNumber: '[data-qa="mobile_number"]',
      createAccount: '[data-qa="create-account"]',
      accountCreated:'b',
      clickcreateAccountatTheEnd:'[data-qa="continue-button"]',
    }
}

export default signup_POM;