describe('Blog page', () => {
  beforeEach(() => cy.visit('/blog'));
  beforeEach(() => cy.viewport(2000, 1200));

  it('contains posts', () => {
    cy.get('.blogWrapper__post');
  });

  it('sets breadcrumb on blog overview', () => {
    cy.get('wh-breadcrumb').contains('Blog');
    cy.get('wh-breadcrumb').contains('Overview');
  });

  it('can redirect to a specific post', () => {
    cy.contains('A post about organic hummus').click();
    cy.url().should('eq', Cypress.config().baseUrl + 'blog/post/1');
  });
});
