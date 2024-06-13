"use server";

import { db } from "@/prisma/db";

interface CreatePost {
  title: string;
  content: string;
  song: string;
  authorId: string;
};

export async function getPosts() {
  const posts = await db.post.findMany({ include: {author: true}, orderBy: { id: "desc" } });
  return posts;
};

export async function createPost(data: CreatePost) {
  const post = await db.post.create({ data });
  if (!post.title || !post.content || !post.song || post.title === "" || post.content === "" || post.song === "") {
    throw new Error("Please fill in all the fields above.");
  }
  return post;
};

export const likePost = async (postId: string): Promise<number> => {
  const post = await db.post.update({
    where: { id: postId },
    data: { likes: { increment: 1 } },
  });

  return post.likes; 
};

export const unlikePost = async (postId: string): Promise<number> => {
  const post = await db.post.update({
    where: { id: postId },
    data: { likes: { decrement: 1 } },
  });

  return post.likes;
};