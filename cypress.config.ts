import { defineConfig } from "cypress";
import { db } from "./prisma/db";
import { mockPosts } from "./prisma/seed/posts";
import { mockUsers } from "./prisma/seed/users";

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 10_000,
    baseUrl: "http://localhost:3100",
    setupNodeEvents(on, config) {
      on("task", {
        reseed,
      });
    },
  },
});

async function reseed() {
  //reset the database
  if (process.env.NODE_ENV === "test") return null;

  await db.post.deleteMany();
  await db.user.deleteMany();

  //seed the database
  await mockUsers(db);
  await mockPosts(db);

  return null;
}
