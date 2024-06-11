import { db } from "../db";
import { mockPosts } from "./posts";
import { mockUsers } from "./users";

async function main() {
  await mockUsers(db);
  await mockPosts(db);
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
