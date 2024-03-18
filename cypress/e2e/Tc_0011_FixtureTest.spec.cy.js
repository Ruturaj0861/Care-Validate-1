/// <reference types="Cypress" />

describe('Fixture Test', function(){
    beforeEach(function(){
        cy.fixture('ConduitData').as('data')
    })

    it('condit valid credentials', function(){
        cy.visit('http://139.5.189.142:3111/signin')
        cy.get('#email').type(this.data.email)
        cy.get('#password').type(this.data.password)
        cy.get('.signinform-button').click()
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(8)').click()
        cy.get('.logout-btn').scrollIntoView()
        cy.get('.logout-btn').click()
    })

    it('condit Invalid credentials', function(){
        cy.visit('http://139.5.189.142:3111/signin')
        cy.get('#email').type(this.data.email)
        cy.get('#password').type(this.data.passwordWrong)
        cy.get('.signinform-button').click()
        cy.get('.error_modal_container_bottom').should('contain','INVALID PASSWORD')
    })
})
