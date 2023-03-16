///<reference types="cypress"/>
import Enderecopage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade endereco - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('Minha conta');
        cy.fixture('perfil').then(dados => {
                cy.login(dados.usuario, dados.senha)
           })
   
        })
  



    




it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
    Enderecopage.editarEnderecoFaturamento(
        dadosEndereco[1].nome,
        dadosEndereco[1].Sobrenome,
        dadosEndereco[1].Empresa,
        dadosEndereco[1].pais,
        dadosEndereco[1].Endereco,
        dadosEndereco[1].Numero,
        dadosEndereco[1].cidade,
        dadosEndereco[1].Estado,
        dadosEndereco[1].cep,
        dadosEndereco[1].telefone,
        dadosEndereco[1].email
    )
});
})






