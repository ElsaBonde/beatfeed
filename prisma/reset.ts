import { db } from "./db";

async function main() {
    //Never run this outside of test environment
  if (process.env.NODE_ENV !== "test") return;

  // Clear all data in the database so DON'T DO THIS IN PRODUCTION/DEVELOPMENT
  await db.like.deleteMany({});
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
