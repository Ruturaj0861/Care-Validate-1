/// <reference types="Cypress" />

const neatCsv = require('neat-csv')

describe('Csv test',function(){

    var table;

    beforeEach(function(){
        cy.fixture('ConduitCsv.csv')
        .then(neatCsv)
        .then(data=>{
            table = data
        })
    })

    it('condit valid credentials', function(){
        cy.visit('http://139.5.189.142:3111/signin')
        cy.get('#email').type(table[0].username)
        cy.get('#password').type(table[0].password)
        cy.get('.signinform-button').click()
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(8)').click()
        cy.get('.logout-btn').scrollIntoView()
        cy.get('.logout-btn').click()
    })

    it('condit Invalid credentials', function(){
        cy.visit('http://139.5.189.142:3111/signin')
        cy.get('#email').type(table[1].username)
        cy.get('#password').type(table[1].password)
        cy.get('.signinform-button').click()
        cy.get('.error_modal_container_bottom').should('contain','INVALID PASSWORD')
    })
})