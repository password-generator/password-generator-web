/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
Cypress.Commands.add('getByTestId', (testId: string) =>
  cy.get(`[data-test-id=${testId}]`),
);
