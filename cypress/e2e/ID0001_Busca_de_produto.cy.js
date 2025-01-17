/// <reference types="cypress" />

import locator from "../support/pageobjects";

describe('Fluxo de busca, filtro e validação de um produto', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.viewport(1920, 1024)

        cy.visit('https://www.amazon.com.br')
    });

    it('Buscar um produto e validar se existe da marca filtrada', () => {
        cy.get(locator.search.searchBox).type('Notebook');
        cy.get(locator.search.searchButton).click();

        cy.get(locator.filters.departments).should('be.visible');
        cy.get(locator.filters.brands).should('be.visible')
        .contains('VAIO').click();

        cy.get(locator.search.componentResult).should('contain', 'Notebook VAIO FE15');
    });

    
    it('Deve validar se o notebook não aparece na pesquisa', () => {
        cy.get(locator.search.searchBox).type('ZXCVBNM');
        cy.get(locator.search.searchButton).click();
        cy.get(locator.search.componentResult).should('not.include.text', 'Notebook VAIO FE15');
    });
});