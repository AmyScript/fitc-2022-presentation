describe('fitc presentation', () => {
  before(() => {
    cy.visit('http://localhost:3000/?slideIndex=0&stepIndex=0');
  });
  it('has the correct title', () => {
    cy.get('[data-cy="title"]').contains("FITC presentation");
  })
})