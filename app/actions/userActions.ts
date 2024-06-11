"use server";

import { db } from "@/prisma/db";

export async function logInUser(username: string, password: string) {
  const user = await db.user.findFirst({
    where: {
      userName: username,
      password: password,
    },
  });
  if (!user || user.userName !== username || user.password !== password) {
    console.log("Username or password incorrect.");
    return null;
  }
  return user;
}

export async function registerUser(username: string, password: string) {
  try {
    const user = await db.user.create({
      data: {
        userName: username,
        password: password,
      },
    });
    if (!user) {
      throw new Error("Username already exists.");
    } 
    if (!username || !user.password || username === "" || password === "") {
      throw new Error("Username or password is missing.");
    }
    return user;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}
