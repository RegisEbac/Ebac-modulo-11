/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade pre cadastro',() => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o pre cadastro com sucesso',() => {
    

        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('@jheni1008!')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Jheni')
        cy.get('#account_last_name').type('Monticelli')
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });


});


        

    





    
