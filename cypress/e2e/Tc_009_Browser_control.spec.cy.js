/// <reference types="Cypress" />

describe ('Browsers controls', function(){

    it ('controls', function(){
        cy.visit('http://139.5.189.142:3111/signin')
        cy.get('#email').type('ruturajdarekar24@gmail.com')
        cy.get('#password').type('Test@123')
        cy.get('.signinform-button').click()
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)').click()
        cy.go('back')
        cy.go('forward')
        cy.reload()
    })
})