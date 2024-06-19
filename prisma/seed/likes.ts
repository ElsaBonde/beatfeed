import { PrismaClient } from "@prisma/client";

export async function mockLikes(db: PrismaClient) {
    await db.like.upsert({
        where: { postId_userId: { postId: "clwad7xzi000108k0fosm1qs3", userId: "clwad7xzi000108k0fosm1qs3" } },
        update: {},
        create: {
        postId: "clwad7xzi000108k0fosm1qs3",
        userId: "clwad7xzi000108k0fosm1qs3",
        },
    });
    
    await db.like.upsert({
        where: { postId_userId: { postId: "clwad8lqc000208k0edr1419p", userId: "clwad8lqc000208k0edr1419p" } },
        update: {},
        create: {
        postId: "clwad8lqc000208k0edr1419p",
        userId: "clwad8lqc000208k0edr1419p",
        },
    });
}

/* model Post {
    id        String   @id @default(cuid())
    title     String
    content   String
    song      String
    likes     Int      @default(0)
    published Boolean  @default(true)
    createdAt DateTime @default(now())
    author    User     @relation(fields: [authorId], references: [id])
    authorId  String
    Like      Like[]
  }
  
  model Like {
    post   Post   @relation(fields: [postId], references: [id])
    postId String
    user   User   @relation(fields: [userId], references: [id])
    userId String
  
    @@id([postId, userId])
  } */
