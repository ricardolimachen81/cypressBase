/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage{
    //Acessar Site
    acessarSite(){
        cy.visit(url)
    }

    //Digitar o nome na pesquisa do google
    digitarNomePesquisa(){
        cy.get(loginElements.campoSearch()).type('Ricardo Chen').type('{enter}')
    }

    //Validar o retorno da pesquisa
    validarPesquisa(){
        cy.contains('Ricardo Chen')
    }
}
export default LoginPage;