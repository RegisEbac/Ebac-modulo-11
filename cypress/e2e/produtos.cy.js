///<reference types="cypress"/>

describe('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block > .block-inner > .image > .product-image > .image-hover')
            //.first()
            //.last()
            .eq(3)
            .click()
    });


    it('Deve adicionar um produto ao carrinho', () => {
        
    });


});