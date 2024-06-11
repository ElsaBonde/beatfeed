"use server";

import { db } from "@/prisma/db";

export async function logInUser(username: string, password: string) {
  //jämför input från användaren med databasen och loggar in användaren om den finns och användarnamn och lösenord stämmer
  const user = await db.user.findFirst({
    where: {
      userName: username,
      password: password,
    },
  });

  if (!user) {
    console.log("User does not exist.");
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
    return user;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}
