beforeEach(() => {
  cy.task("reseed");
  cy.visit("/");
  cy.clearAllLocalStorage();
});

describe("User should be able to like and unlike a post", () => {
  it("should be possible to like and unlike a post", () => {
    cy.register("cool_tjej_96", "coolgirl");
    cy.wait(2000);
    cy.login("cool_tjej_96", "coolgirl");
    cy.wait(2000);
    cy.get('[data-cy="like"]').first().click();
    cy.wait(3000);
    cy.get('[data-cy="liked"]').first().should("exist");
    cy.get('[data-cy="likeCount"]').first().contains(2).should("exist");
    cy.get('[data-cy="like"]').first().click();
    cy.wait(1000);
    cy.get('[data-cy="notLiked"]').first().should("exist");
    cy.get('[data-cy="likeCount"]').first().contains("1").should("exist");
  });

  it("should not be possible to like a post if not logged in", () => {
    cy.get('[data-cy="like"]').first().click();
    cy.url().should("include", "/login");
  });
});
