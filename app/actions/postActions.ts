"use server";

import { db } from "@/prisma/db";

interface CreatePost {
  title: string;
  content: string;
  song: string;
  authorId: string;
}

export async function getPosts() {
  const posts = await db.post.findMany({ include: {author: true}, orderBy: { id: "desc" } });
  return posts;
}

export async function createPost(data: CreatePost) {
  const post = await db.post.create({ data });
  return post;
}