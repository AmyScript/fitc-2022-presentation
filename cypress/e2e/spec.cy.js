describe('Presentation Title', () => {
  before(() => {
    cy.visit('http://localhost:3000/?slideIndex=0&stepIndex=0');
  });

  it('has all 23 slides', () => {
    cy.get('div[data-testid="animated-progress-circle"]').should('have.length', 23);
  });

  it('moves to the next slide when the right arrow is pressed', () => {
    cy.get('body').type('{rightArrow}');
    cy.url().should('contain', 'slideIndex=1&stepIndex=0');
  });

  it('when the SHOW MILO button is clicked, an image is shown', () => {
    cy.visit('http://localhost:3000/?slideIndex=11&stepIndex=0');
    cy.get('[data-cy="get-image-button"]').click();
    cy.get('[data-cy="milo-image"]').should('be.visible');
  });
})