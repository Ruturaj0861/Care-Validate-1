/// <reference types="Cypress"  />

describe('Login Functionality', function(){

    it ("Login EE", function(){
        cy.visit('http://139.5.189.142:3111/signin')
        cy.get('#email').type('ruturajdarekar24@gmail.com')
        cy.get('#password').type('Test@123')
        cy.get('.signinform-button').click()
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3)').click()
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > a:nth-child(1) > button:nth-child(1) > p:nth-child(1)').scrollIntoView()
        cy.get('button[aria-label="Next slide"]').click().click().click()
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > a:nth-child(1) > button:nth-child(1)').click()
        cy.get('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/label[1]/span[1]/*[name()="svg"][1]').scrollIntoView()
        cy.get('svg').should('not.be.checked').click()
    })
})
