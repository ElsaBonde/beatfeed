beforeEach(() => {
  cy.task("reseed");
  cy.visit("/");
  cy.clearAllLocalStorage();
});

describe("User should be able to like and unlike a post", () => {
  it("should be possible to like a post", () => {
    cy.login("coolCat", "password1");
    cy.wait(2000);
    cy.get('[data-cy="like"]').first().click();
    cy.wait(1000);
    cy.get('[data-cy="liked"]').should("exist");
    cy.get('[data-cy="likeCount"]').contains("1").should("exist");
  });

//ta bort disabled={!isLoggedIn} från Likes.tsx och flytta serveractions och redirecta eller nåt sånt

  it("should be possible to unlike a post", () => {
    cy.login("coolCat", "password1");
    cy.get('[data-cy="like"]').first().click();
    cy.wait(1000);
    cy.get('[data-cy="liked"]').should("exist");
    cy.get('[data-cy="likeCount"]').contains("1").should("exist");
    cy.get('[data-cy="like"]').first().click();
    cy.get('[data-cy="notLiked"]').should("exist");
    cy.get('[data-cy="likeCount"]').should("not.exist");
  });

  it("should not be possible to like a post if not logged in", () => {
    cy.get('[data-cy="like"]').first().click();
    cy.url().should("include", "/login");
  });
});
