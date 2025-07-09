/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByData(selector: string): Chainable<JQuery<HTMLElement>>;
    typeIntoInput(selector: string, value: string): void;
  }
}

Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test='${selector}']`);
});

Cypress.Commands.add('typeIntoInput', (selector, value) => {
  cy.getByData(selector).should('exist').clear().type(value);
});
