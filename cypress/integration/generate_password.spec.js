/* eslint-disable no-undef */

describe('Generate password tests', () => {
  it('should generate only numbers', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('input[type=checkbox]').uncheck();
    cy.get('#numbers').check();
    cy.get('#generatePasswordButton').click();
    cy.get('#generatePasswordButton');
    cy.get('#resultSpan').invoke('text').should('match', /^[0-9]{7}$/);
  });

  it('should generate only lowercase letters', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('input[type=checkbox]').uncheck();
    cy.get('#lowercase').check();
    cy.get('#generatePasswordButton').click();
    cy.get('#generatePasswordButton');
    cy.get('#resultSpan').invoke('text').should('match', /^[a-z]{7}$/);
  });

  it('should generate only uppercase letters', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('input[type=checkbox]').uncheck();
    cy.get('#uppercase').check();
    cy.get('#generatePasswordButton').click();
    cy.get('#generatePasswordButton');
    cy.get('#resultSpan').invoke('text').should('match', /^[A-Z]{7}$/);
  });
});
