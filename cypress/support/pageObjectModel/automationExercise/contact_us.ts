/// <reference types="Cypress"/>
class contactUs_POM {

    selectors = {
        getInTouch: 'div.contact-form > .title',
        getInTouchText: 'Get In Touch',
        name: '[data-qa="name"]',
        email: '[data-qa="email"]',
        subject: '[data-qa="subject"]',
        message: '[data-qa="message"]',
        fileUpload: ':nth-child(6) > .form-control',
        submit: '[data-qa="submit-button"]',
        success: '.status',
        homeButton: '#form-section > .btn'
    }

}
export default contactUs_POM;