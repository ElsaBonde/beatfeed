import { PostWithAuthor } from "@/types";

describe("Show all posts", () => {
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
          id: "clwad7xzi000108k0fosm1qs3"
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
        cy.get('iframe').should('have.attr', 'src').should('include', "https://www.youtube.com/embed/");
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
          id: "clwad7xzi000108k0fosm1qs3"
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