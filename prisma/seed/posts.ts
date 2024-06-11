import { PrismaClient } from '@prisma/client'

export async function mockPosts(db: PrismaClient) {
    await db.post.upsert({
        where: { id: "clwad7xzi000108k0fosm1qs3" },
        update: {},
        create: {
          id: "clwad7xzi000108k0fosm1qs3",
          title: "Tha Bomb",
          content: "Listen to my mixtape, it's the bomb!",
          song: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          likes: 13,
          authorId: "clwad7xzi000108k0fosm1qs3",
        },
      });
    
      await db.post.upsert({
        where: { id: "clwad8lqc000208k0edr1419p" },
        update: {},
        create: {
          id: "clwad8lqc000208k0edr1419p",
          title: "Hip Hop is Dead",
          content: "I'm bringing it back to life, one beat at a time!",
          song: "https://www.youtube.com/watch?v=QFcv5Ma8u8k",
          likes: 1,
          authorId: "clwad8lqc000208k0edr1419p",
        },
      })
    };