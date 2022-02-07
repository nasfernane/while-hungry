describe('Login page', () => {
  const email = 'furimi@seed.com';
  const password = 'seed123';

  beforeEach(() => cy.visit('/login'));
  beforeEach(() => cy.viewport(2000, 1200));

  it('should display a title', () => {
    cy.get('h1').contains('Login');
  });

  it('should contain a form with two fields', () => {
    cy.get('form').children().contains('Email');
    cy.get('form').children().contains('Password');
  })

  it('should contain a form button', () => {
    cy.get('form').get('button');
  })

  it('should display incorrect email', () => {
    cy.get('form').get(`[formControlName='email']`).type('incorrectemail');
    cy.get('form').get(`[formControlName='password']`).click();
    cy.get('form').contains('Incorrect email adress');
  }) 

  it('should disable button if password missing', () => {
    cy.get('form').get(`[formControlName='email']`).type(email);
    cy.get('form').contains('Login').should('be.disabled');
  })

  it('should disable button if email missing', () => {
    cy.get('form').get(`[formControlName='password']`).type(password);
    cy.get('form').contains('Login').should('be.disabled');
  })

  it('can connect and redirect', () => {
    cy.get('form').get(`[formControlName='email']`).type(email);
    cy.get('form').get(`[formControlName='password']`).type(password);
    cy.get('form').contains('Login').click();
    cy.contains('Furimi');
    cy.url().should('eq', Cypress.config().baseUrl)
  })

  it('can disconnect when user is logged', () => {
    cy.get('form').get(`[formControlName='email']`).type(email);
    cy.get('form').get(`[formControlName='password']`).type(password);
    cy.get('form').contains('Login').click();
    cy.contains('Furimi').click();
    cy.contains('Disconnect').click();
    cy.contains('Login');
  })
});