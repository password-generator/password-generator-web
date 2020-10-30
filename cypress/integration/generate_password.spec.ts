describe('Generate password tests', () => {
  it('should generate exacly 15 characters', () => {
    cy.visit('/');
    cy.getByTestId('passwordLengthInput').type('{selectall}15');
    cy.getByTestId('generatePasswordButton').click();
    cy.getByTestId('resultSpan').invoke('val').should('lengthOf', 15);
  });

  it('should generate only uppercase letters', () => {
    cy.visit('/');
    cy.getByTestId('passwordLengthInput').type('{selectall}7');
    cy.getByTestId('numbers').uncheck();
    cy.getByTestId('generatePasswordButton').click();
    cy.getByTestId('resultSpan')
      .invoke('val')
      .should('match', /^[A-Z]{7}$/);
  });

  it('should generate only lowercase letters', () => {
    cy.visit('/');
    cy.getByTestId('passwordLengthInput').type('{selectall}7');
    cy.getByTestId('uppercase').uncheck();
    cy.getByTestId('lowercase').check();
    cy.getByTestId('numbers').uncheck();
    cy.getByTestId('generatePasswordButton').click();
    cy.getByTestId('resultSpan')
      .invoke('val')
      .should('match', /^[a-z]{7}$/);
  });

  it('should generate only numbers', () => {
    cy.visit('/');
    cy.getByTestId('passwordLengthInput').type('{selectall}7');
    cy.getByTestId('uppercase').uncheck();
    cy.getByTestId('generatePasswordButton').click();
    cy.getByTestId('resultSpan')
      .invoke('val')
      .should('match', /^[0-9]{7}$/);
  });

  it('should generate only symbols', () => {
    cy.visit('/');
    cy.getByTestId('passwordLengthInput').type('{selectall}7');
    cy.getByTestId('uppercase').uncheck();
    cy.getByTestId('numbers').uncheck();
    cy.getByTestId('symbols').check();
    cy.getByTestId('generatePasswordButton').click();
    cy.getByTestId('resultSpan')
      .invoke('val')
      .should('match', /^[!@#$%^&*(){}[\]=<>/,.]{7}$/);
  });

  it('should generate a pronuceable password', () => {
    cy.visit('/');
    cy.getByTestId('passwordLengthInput').type('{selectall}7');
    cy.getByTestId('pronounceable').check();
    cy.getByTestId('generatePasswordButton').click();
    cy.getByTestId('resultSpan')
      .invoke('val')
      .should('match', /^[a-z]{7}$/);
  });

  it('should generate with uppercase and lowercase letters', () => {
    cy.visit('/');
    cy.getByTestId('passwordLengthInput').type('{selectall}7');
    cy.getByTestId('numbers').uncheck();
    cy.getByTestId('lowercase').check();
    cy.getByTestId('generatePasswordButton').click();
    cy.getByTestId('resultSpan')
      .invoke('val')
      .should('match', /^[a-z]{7}$/i);
  });

  it('should generate uppercase letters and numbers', () => {
    cy.visit('/');
    cy.getByTestId('passwordLengthInput').type('{selectall}7');
    cy.getByTestId('generatePasswordButton').click();
    cy.getByTestId('resultSpan')
      .invoke('val')
      .should('match', /^[A-Z0-9]{7}$/);
  });

  it('should generate uppercase letters and symbols', () => {
    cy.visit('/');
    cy.getByTestId('passwordLengthInput').type('{selectall}7');
    cy.getByTestId('numbers').uncheck();
    cy.getByTestId('symbols').check();
    cy.getByTestId('generatePasswordButton').click();
    cy.getByTestId('resultSpan')
      .invoke('val')
      .should('match', /^[A-Z!@#$%^&*(){}[\]=<>/,.]{7}$/);
  });

  it('should generate lowercase letters and numbers', () => {
    cy.visit('/');
    cy.getByTestId('passwordLengthInput').type('{selectall}7');
    cy.getByTestId('uppercase').uncheck();
    cy.getByTestId('lowercase').check();
    cy.getByTestId('generatePasswordButton').click();
    cy.getByTestId('resultSpan')
      .invoke('val')
      .should('match', /^[a-z0-9]{7}$/);
  });
  it('should generate lowercase letters and symbols', () => {
    cy.visit('/');
    cy.getByTestId('passwordLengthInput').type('{selectall}7');
    cy.getByTestId('uppercase').uncheck();
    cy.getByTestId('numbers').uncheck();
    cy.getByTestId('lowercase').check();
    cy.getByTestId('symbols').check();
    cy.getByTestId('generatePasswordButton').click();
    cy.getByTestId('resultSpan')
      .invoke('val')
      .should('match', /^[a-z!@#$%^&*(){}[\]=<>/,.]{7}$/);
  });

  it('should generate numbers and symbols', () => {
    cy.visit('/');
    cy.getByTestId('passwordLengthInput').type('{selectall}7');
    cy.getByTestId('uppercase').uncheck();
    cy.getByTestId('symbols').check();
    cy.getByTestId('generatePasswordButton').click();
    cy.getByTestId('resultSpan')
      .invoke('val')
      .should('match', /^[0-9!@#$%^&*(){}[\]=<>/,.]{7}$/);
  });
});
