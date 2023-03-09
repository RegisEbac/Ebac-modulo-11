///<reference types="cypress"/>

describe('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block ')
            //.first()
            //.click()
            //.eq(3)
            .contains('Arcadio Gym Short') .click()

    });


    it.only('Deve adicionar um produto ao carrinho', () => {
var quantidade= 10

        cy.get(' .product-block ')
        .contains('Arcadio Gym Short') .click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.button-variable-item-34').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade)
        cy.get('.woocommerce-message').should('contain', '“Arcadio Gym Short” foram adicionados no seu carrinho.')
            

    });


});