beforeEach(() => {
  cy.exec("npm run reset && npm run seed");
  cy.visit("/");
  cy.clearAllLocalStorage();
});

describe("Login user", () => {
  it("should be possible to sign in", () => {
    cy.contains("Login").click({ force: true });
    cy.visit("/login");
    cy.get('input[name="username"]').type("coolCat");
    cy.get('input[name="password"]').type("password1");
    cy.get('button[type="submit"]').click();
    cy.contains("coolCat").should("exist");
  });

  it("should not be possible to sign in with wrong password or username", () => {
    cy.visit("/login");
    cy.get('input[name="username"]').type("coolDog");
    cy.get('input[name="password"]').type("pazzword");
    cy.get('button[type="submit"]').click();
    cy.contains("coolCat").should("not.exist");
  });
});

describe("Register new user", () => {
  it("should be possible to register a new user", () => {
    cy.contains("Register").click();
    cy.url().should("include", "/register");
    cy.get('input[name="username"]').type("frogz");
    cy.get('input[name="password"]').type("frogz");
    cy.get('button[type="submit"]').click();
    cy.visit("/login");
    cy.get('input[name="username"]').type("frogz");
    cy.get('input[name="password"]').type("frogz");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/"); //felaktig vill ju kolla om den stannar exakt på 'url'
  });

  it("should not be possible to register with existing username", () => {
    cy.visit("/register");
    cy.get('input[name="username"]').type("coolCat");
    cy.get('input[name="password"]').type("password1");
    cy.get('button[type="submit"]').click();
    cy.contains("Username already exists. Please try another.").should("exist");
    cy.contains("coolCat").should("not.exist");
  });
  it("should not be possible to register with empty fields", () => {
    cy.visit("/register");
    cy.get('button[type="submit"]').click();
    cy.contains("Username or password is missing.").should("exist");
  });
});

describe("Logout user", () => {
  it("should be possible to sign out", () => {
    cy.contains("Login").click({ force: true });
    cy.url().should("include", "/login");
    cy.get('input[name="username"]').type("coolCat");
    cy.get('input[name="password"]').type("password1");
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
    cy.visit("/");
    cy.contains("coolCat").should("exist");
    cy.contains("Logout").click({ force: true });
    cy.contains("Login").should("exist");
  });
});
