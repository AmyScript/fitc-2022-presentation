describe('Presentation Title', () => {
  before(() => {
    cy.visit('http://localhost:3000/?slideIndex=0&stepIndex=0');
  });

  it('has the correct intro title', () => {
    cy.get('[data-cy="title"]').contains("End To End Testing");
  });

  it('has all 26 slides', () => {
    cy.get('div[data-testid="animated-progress-circle"]').should('have.length', 26);
  });

  it('has the correct conclusion title', () => {
    cy.get('div[data-testid="animated-progress-circle"]').last().click();
    cy.get('[data-cy="conclusion"').contains("THANK YOU");
  })
})