describe('Recipes', () => {
  beforeEach(() => cy.visit('/recipes'));
  beforeEach(() => cy.viewport(2000, 1200));

  it('sets breadcrumb on recipes overview', () => {
    cy.get('wh-breadcrumb').contains('Recipes');
    cy.get('wh-breadcrumb').contains('Overview');
  })

  it('sets breadcrumb on recipe detail', () => {
    cy.contains('Salmon tartare').click();
    cy.get('wh-breadcrumb').contains('Recipe');
    cy.get('wh-breadcrumb').contains('Salmon tartare');
  })

  it('contains recipes', () => {
    cy.get('wh-recipes-overview-item')
  })

  it('contains a paginator', () => {
    cy.get('mat-paginator')
  })

  it('can redirect to a specific recipe', () => {
    cy.contains('Salmon tartare').click();
    cy.url().should('eq', Cypress.config().baseUrl + 'recipes/1')
  })
})