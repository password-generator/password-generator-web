describe('Generate password tests', () => {
  it('should generate only uppercase letters', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('#numbers').uncheck();
    cy.get('#generatePasswordButton').click();
    cy.get('#generatePasswordButton');
    cy.get('#resultSpan')
      .invoke('text')
      .should('match', /^[A-Z]{7}$/);
  });

  it('should generate only lowercase letters', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('#uppercase').uncheck();
    cy.get('#lowercase').check();
    cy.get('#numbers').uncheck();
    cy.get('#generatePasswordButton').click();
    cy.get('#generatePasswordButton');
    cy.get('#resultSpan')
      .invoke('text')
      .should('match', /^[a-z]{7}$/);
  });

  it('should generate only numbers', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('#uppercase').uncheck();
    cy.get('#generatePasswordButton').click();
    cy.get('#resultSpan')
      .invoke('text')
      .should('match', /^[0-9]{7}$/);
  });

  it('should generate only symbols', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('#uppercase').uncheck();
    cy.get('#numbers').uncheck();
    cy.get('#symbols').check();
    cy.get('#generatePasswordButton').click();
    cy.get('#resultSpan')
      .invoke('text')
      .should('match', /^[!@#$%^&*(){}[\]=<>/,.]{7}$/);
  });

  it('should generate a pronuceable password', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('#pronounceable').check();
    cy.get('#generatePasswordButton').click();
    cy.get('#resultSpan')
      .invoke('text')
      .should('match', /^[a-z]{7}$/);
  });

  it('should generate with uppercase and lowercase letters', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('#numbers').uncheck();
    cy.get('#lowercase').check();
    cy.get('#generatePasswordButton').click();
    cy.get('#resultSpan')
      .invoke('text')
      .should('match', /^[a-z]{7}$/i);
  });

  it('should generate uppercase letters and numbers', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('#generatePasswordButton').click();
    cy.get('#resultSpan')
      .invoke('text')
      .should('match', /^[A-Z0-9]{7}$/);
  });

  it('should generate uppercase letters and symbols', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('#numbers').uncheck();
    cy.get('#symbols').check();
    cy.get('#generatePasswordButton').click();
    cy.get('#resultSpan')
      .invoke('text')
      .should('match', /^[A-Z!@#$%^&*(){}[\]=<>/,.]{7}$/);
  });

  it('should generate lowercase letters and numbers', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('#uppercase').uncheck();
    cy.get('#lowercase').check();
    cy.get('#generatePasswordButton').click();
    cy.get('#resultSpan')
      .invoke('text')
      .should('match', /^[a-z0-9]{7}$/);
  });
  it('should generate lowercase letters and symbols', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('#uppercase').uncheck();
    cy.get('#numbers').uncheck();
    cy.get('#lowercase').check();
    cy.get('#symbols').check();
    cy.get('#generatePasswordButton').click();
    cy.get('#resultSpan')
      .invoke('text')
      .should('match', /^[a-z!@#$%^&*(){}[\]=<>/,.]{7}$/);
  });

  it('should generate numbers and symbols', () => {
    cy.visit('/');
    cy.get('#passwordLengthInput').type('{selectall}7');
    cy.get('#uppercase').uncheck();
    cy.get('#symbols').check();
    cy.get('#generatePasswordButton').click();
    cy.get('#resultSpan')
      .invoke('text')
      .should('match', /^[0-9!@#$%^&*(){}[\]=<>/,.]{7}$/);
  });
});
