describe('Login user', () => {
  it('should be possible to sign in', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Login').click();
    cy.visit('http://localhost:3000/login')
    cy.get('input[name="username"]').type('coolCat');
    cy.get('input[name="password"]').type('password1');
    cy.get('button[type="submit"]').click();
    cy.contains('coolCat').should('exist');
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
  it('should be possible to register a new user', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Register').click();
    cy.visit('http://localhost:3000/register')
    cy.get('input[name="username"]').type('testingUser');
    cy.get('input[name="password"]').type('pls');
    cy.get('button[type="submit"]').click();
    cy.visit('http://localhost:3000/login')
    cy.get('input[name="username"]').type('testingUser');
    cy.get('input[name="password"]').type('pls');
    cy.get('button[type="submit"]').click();
    cy.visit('http://localhost:3000/')
    cy.contains('testingUser').should('exist');
  })

  it('should not be possible to register with existing username', () => {
    cy.visit('http://localhost:3000/register')
    cy.get('input[name="username"]').type('coolCat');
    cy.get('input[name="password"]').type('password1');
    cy.get('button[type="submit"]').click();
    cy.contains('Username already exists. Please try another.').should('exist');
    cy.contains('coolCat').should('not.exist');
  })
  it('should not be possible to register with empty fields', () => {
    cy.visit('http://localhost:3000/register')
    cy.get('button[type="submit"]').click();
    cy.contains('Username or password is missing.').should('exist');
});
});

describe('Logout user', () => {
  it('should be possible to sign out', () => {
    cy.clearAllLocalStorage();
    cy.visit('http://localhost:3000/')
    cy.contains('Login').click();
    cy.visit('http://localhost:3000/login')
    cy.get('input[name="username"]').type('elzabonde');
    cy.get('input[name="password"]').type('funny');
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
    cy.visit('http://localhost:3000/')
    cy.contains('elzabonde').should('exist');
    cy.contains('Logout').click();
    cy.contains('Login').should('exist');
  })
});