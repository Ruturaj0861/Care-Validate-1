/// <reference types="Cypress" />

describe('Fixtures test',function(){

    beforeEach(function(){
        cy.fixture('ConduitData').as('data')
    })

    it('Conduit - Valid Credentials',function(){
        cy.conduitLogin(this.data.email,this.data.password)
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(8)').click()
        cy.get('.logout-btn').scrollIntoView()
        cy.get('.logout-btn').click()
    })

    it('Conduit - Invalid Credentials',function(){
        cy.conduitLogin(this.data.email,this.data.passwordWrong)
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(8)').click()
        cy.get('.error_modal_container_bottom').should('contain','INVALID PASSWORD')
    })
})