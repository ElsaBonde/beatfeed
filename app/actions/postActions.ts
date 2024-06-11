"use server";

import { db } from "@/prisma/db";

export async function getPosts() {
  const posts = await db.post.findMany({ include: {author: true}, orderBy: { published: "desc" } });
  return posts;
}
