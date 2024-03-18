/// <reference types="Cypress"  />

describe('Login Functionality', function(){

    it ("Login", function(){
        cy.log('Starting the login test...');

        cy.visit('http://139.5.189.142:3111/signin');
        cy.log('Visiting the login page...');

        cy.get('#email').type('ruturajdarekar24@gmail.com');
        cy.log('Typing email...');

        cy.get('#password').type('Test@123');
        cy.log('Typing password...');

        cy.get('.signinform-button').click();
        cy.log('Clicking the sign-in button...');

        cy.title().should('eq', 'My Funding Account');
        cy.log('Asserting the title...');

        cy.log('Login test completed.');
    });
});
