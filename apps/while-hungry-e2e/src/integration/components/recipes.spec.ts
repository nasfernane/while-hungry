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

  it('can navigate paginator with next and previous buttons', () => {
    cy.get('mat-paginator').get('.mat-paginator-navigation-next').click();
    cy.contains(' 2 – 2 of 3 ');
    cy.get('mat-paginator').get('.mat-paginator-navigation-next').click();
    cy.contains(' 3 – 3 of 3 ');
    cy.get('mat-paginator').get('.mat-paginator-navigation-previous').click();
    cy.contains(' 2 – 2 of 3 ');
    cy.get('mat-paginator').get('.mat-paginator-navigation-previous').click();
    cy.contains(' 1 – 1 of 3 ');
  }) 

  it('can pick number of recipes in paginator with select button', () => {
    cy.get('mat-paginator').get('mat-select').click();
    cy.contains(2).click();
    cy.contains('Salmon tartare')
    cy.contains('Thuna tartare')
  })

  it('can redirect to a specific recipe', () => {
    cy.contains('Salmon tartare').click();
    cy.url().should('eq', Cypress.config().baseUrl + 'recipes/1')
  })


})