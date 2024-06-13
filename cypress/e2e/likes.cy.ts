describe("Like posts", () => {
  it("should be able to like a post", () => {
    cy.exec("npm run reset && npm run seed");
    cy.login("coolCat", "password1");
    cy.wait(2000);
    cy.get("aside").contains("coolCat").should("exist");
    cy.getAllPosts();
    
  });
});
