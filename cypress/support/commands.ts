/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(userName: string, password: string): void;
    register(userName: string, password: string): void;
    getAllPosts(): void;
  }
}

Cypress.Commands.add("login", (userName: string, password: string) => {
  cy.visit("/login");
  cy.get('input[name="username"]').type(userName);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("register", (userName: string, password: string) => {
  cy.visit("/register");
  cy.get('input[name="username"]').type(userName);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("getAllPosts", () => {
    cy.visit("/");
    cy.get('[data-cy="post"]').then((posts) => {
      cy.wrap(posts.length).as('postCount');
    });
  });
