/// <reference types="cypress" />
var faker =require('faker');

describe('Funcionalidade Pre cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    it('Deve completar o pre cadastro com sucesso', () => {
       cy.get('#reg_email').type(faker.internet.email())
       cy.get('#reg_password').type('!teste@teste$') 
       cy.get(':nth-child(4) > .button').click()

    });
        

    





    
});