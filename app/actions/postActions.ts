"use server";

import { db } from "@/prisma/db";

interface CreatePost {
  title: string;
  content: string;
  song: string;
  authorId: string;
};

export async function getPosts() {
  const posts = await db.post.findMany({ include: {author: true, Like: true
  }, orderBy: { id: "desc" } });
  return posts.map((post) => {
    return {
      ...post,
      userLiked: post.Like.some((like) => like.userId === post.authorId),
    }});
};

export async function createPost(data: CreatePost) {
  const post = await db.post.create({ data });
  if (!post.title || !post.content || !post.song || post.title === "" || post.content === "" || post.song === "") {
    throw new Error("Please fill in all the fields above.");
  }
  return post;
};

export const checkIfLiked = async (postId: string, userId: string): Promise<boolean> => {
  const like = await db.like.findFirst({
    where: {
      postId,
      userId,
    },
  });

  return !!like;
};

export const likePost = async (postId: string, userId: string): Promise<number> => {
  await db.like.create({
    data: {
      postId,
      userId,
    },
  });

  const post = await db.post.update({
    where: { id: postId },
    data: { likes: { increment: 1 } },
  });

  return post.likes;
};

export const unlikePost = async (postId: string, userId: string): Promise<number> => {
  await db.like.delete({
    where: {
      postId_userId: {
        postId,
        userId,
      },
    },
  });

  const post = await db.post.update({
    where: { id: postId },
    data: { likes: { decrement: 1 } },
  });

  return post.likes;
};