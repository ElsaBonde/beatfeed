describe('Login user', () => {
  it('should be possible to sign in', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Login').click();
    cy.visit('http://localhost:3000/login')
    cy.get('input[name="username"]').type('coolCat');
    cy.get('input[name="password"]').type('password1');
    cy.get('button[type="submit"]').click();
    cy.contains('Welcome back, coolCat').should('exist');
  })

  it('should not be possible to sign in with wrong password or username', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('input[name="username"]').type('coolDog');
    cy.get('input[name="password"]').type('pazzword');
    cy.get('button[type="submit"]').click();
    cy.contains('coolCat').should('not.exist');
  })
})

describe('Register new user', () => {
  it('should be possible to sign up', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Register').click();
    cy.visit('http://localhost:3000/register')
    cy.get('input[name="username"]').type('cypressUser');
    cy.get('input[name="password"]').type('iLoveCypress');
    cy.get('button[type="submit"]').click();
    cy.visit('http://localhost:3000/')
    cy.contains('Welcome, coolDog').should('exist');
  })

  it('should not be possible to register with existing username', () => {
    cy.visit('http://localhost:3000/register')
    cy.get('input[name="username"]').type('coolCat');
    cy.get('input[name="password"]').type('password1');
    cy.get('button[type="submit"]').click();
    cy.contains('Username already exists. Please try another.').should('exist');
    cy.contains('coolCat').should('not.exist');
  })
});