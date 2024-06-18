describe("Show all posts", () => {
  beforeEach(() => {
    cy.task("reseed");
  });

  it("should show all posts", () => {
    cy.getAllPosts();
    cy.get("@postCount").then((postCount) => {
      cy.get('[data-cy="post"]').should("have.length", postCount);
    });
  });
});

describe("Add new post", () => {
  it("should be able to add a new post", () => {
    cy.login("coolCat", "password1");
    cy.wait(2000);
    cy.get("aside").contains("coolCat").should("exist");
    cy.getAllPosts();
    cy.get("@postCount").then((initialPostCount) => {
      cy.contains("Add").click();
      cy.url().should("include", "/addPost");
      cy.get("input[name=title]").type("Crazy frog");
      cy.get("textarea[name=content]").type(
        "This song is tha shit, everybody loves is! (or not)"
      );
      cy.get("input[name=song]").type(
        "https://www.youtube.com/watch?v=P1KT_I1LmtA"
      );
      cy.get("button[type=submit]").click();

      cy.contains("Crazy frog").should("exist");
      cy.contains("This song is tha shit, everybody loves is! (or not)").should(
        "exist"
      );
      cy.get("iframe")
        .should("have.attr", "src")
        .should("include", "https://www.youtube.com/embed/");

      cy.getAllPosts();
      cy.get("@postCount").then((newPostCount) => {
        expect(newPostCount).to.equal(Number(initialPostCount) + 1);
      });
    });
  });

  it("should not be possible to add a new post with missing values", () => {
    cy.login("coolCat", "password1");
    cy.contains("coolCat").should("exist");
    cy.contains("Add").click();
    cy.url().should("include", "/addPost");
    cy.get("button[type=submit]").click();
    cy.url().should("include", "/addPost");
    cy.contains("Please fill in all the fields above.").should("exist");
  });
});
