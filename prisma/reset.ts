import { db } from "./db";

async function main() {
  await db.post.deleteMany({});
  await db.user.deleteMany({});
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
  });
