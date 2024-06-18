beforeEach(() => {
  cy.task("reseed");
  cy.visit("/");
  cy.clearAllLocalStorage();
});

describe("User login should fail with incorrect values", () => {
  it("should not be possible to login user with wrong password", () => {
    cy.login("coolCat", "password2");
    cy.contains("Invalid username or password.").should("exist");
  });
  it("should not be possible to login user with wrong username", () => {
    cy.login("coolCats", "password1");
    cy.contains("Invalid username or password.").should("exist");
  });
});

describe("Register new user", () => {
  it("should be possible to register a new user", () => {
    cy.register("frogz", "frogz");
    cy.login("frogz", "frogz");
    cy.wait(2000);
    cy.get("aside").contains("frogz").should("exist");
  });

  it("should not be possible to register with existing username", () => {
    cy.register("coolCat", "password1");
    cy.contains("Username already exists. Please try another.").should("exist");
  });
  it("should not be possible to register with empty fields", () => {
    cy.visit("/register");
    cy.get('button[type="submit"]').click();
    cy.contains("Username or password is missing.").should("exist");
  });
});

describe("Logout user", () => {
  it("should be possible to sign out", () => {
    cy.login("coolCat", "password1");
    cy.get("aside").contains("Logout").click();
    cy.wait(2000);
    cy.get("aside").contains("Logout").should("not.exist");
  });
});
