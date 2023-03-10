///<reference types="cypress"/>
import Enderecopage from '../support/page-objects/endereco.page'

describe('funcionalidade endereços - faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados => {
             cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
Enderecopage.editarEnderecoFaturamento('Regis', 'rosa', 'google', 'Brasil', 'Rua vinicius de moraes', '752', 'Porto alegre', 'Rio grande do sul', '94930300', '08000800', 'regis@ebac.com',)
cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso')
    });

});



