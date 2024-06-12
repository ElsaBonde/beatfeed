import { PostWithAuthor } from "@/types";

describe("Show all posts", () => {
  beforeEach(() => {
    cy.exec("npm run reset && npm run seed");
  });
  it("should display all posts", () => {
    cy.visit("http://localhost:3000");
    cy.request("GET", "http://localhost:3000").then((response) => {
      expect(response.status).to.eq(200);
      const posts: PostWithAuthor[] = [
        {
          title: "Hip Hop is Dead",
          content: "I'm bringing it back to life, one beat at a time!",
          song: "https://www.youtube.com/watch?v=QFcv5Ma8u8k",
          likes: 1,
          author: { userName: "elsa" },
          id: "clwad7xzi000108k0fosm1qs3",
        },
        {
          title: "Tha Bomb",
          content: "Listen to my mixtape, it's the bomb!",
          song: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          likes: 13,
          author: { userName: "coolCat" },
          id: "clwad8lqc000208k0edr1419p",
        },
      ];

      posts.forEach((post: PostWithAuthor) => {
        cy.contains(post.author.userName).should("exist");
        cy.contains(post.title).should("exist");
        cy.contains(post.content).should("exist");
        cy.get("iframe")
          .should("have.attr", "src")
          .should("include", "https://www.youtube.com/embed/");
        cy.contains("likes").should("exist");
      });
    });
  });
});

describe("Play song", () => {
  it("should play the song when user hits play", () => {
    cy.visit("http://localhost:3000");
    cy.request("GET", "http://localhost:3000").then((response) => {
      expect(response.status).to.eq(200);
      const posts: PostWithAuthor[] = [
        {
          title: "Hip Hop is Dead",
          content: "I'm bringing it back to life, one beat at a time!",
          song: "https://www.youtube.com/watch?v=QFcv5Ma8u8k",
          likes: 1,
          author: { userName: "elsa" },
          id: "clwad7xzi000108k0fosm1qs3",
        },
        {
          title: "Tha Bomb",
          content: "Listen to my mixtape, it's the bomb!",
          song: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          likes: 13,
          author: { userName: "coolCat" },
          id: "clwad8lqc000208k0edr1419p",
        },
      ];

      //får fixa detta när jag vet hur jag ska ha frontend
      /*    posts.forEach((post: PostWithAuthor) => {
        
        });
      }); */
    });
  });
});

describe("Add new post", () => {
  it("should be able to add a new post", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Add new").click();
    cy.visit("http://localhost:3000/addPost");
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
  });
  it("should not be possible to add a new post without missing values", () => {});
});
