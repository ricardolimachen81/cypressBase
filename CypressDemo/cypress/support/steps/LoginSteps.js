/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("que o usuário esteja no site do google", () => {
    loginPage.acessarSite();
})

When("adiciono um nome para pesquisa", () => {
    loginPage.digitarNomePesquisa();
})

Then("valido o nome pesquisado", () => {
    loginPage.validarPesquisa();
})