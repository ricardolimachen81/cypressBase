@login
Feature: Realizar validação de uma pesquisa no google
    @pesquisaGoogle
    Scenario: Pesquisa no google
        Given que o usuário esteja no site do google
        When adiciono um nome para pesquisa
        Then valido o nome pesquisado
