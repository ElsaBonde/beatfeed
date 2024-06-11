import { db } from "@/prisma/db";

export default async function Home() {
  const posts = await db.post.findMany();

  if (!posts) {
    return <div>No posts found</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-slate-400">
        {posts.map((post) => (
          <div key={post.id} className="p-4">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <a href={post.song} target="_blank" rel="noreferrer">
              Listen to the song
            </a>
            <p>{post.likes} likes</p>
          </div>
        ))}
      </div>
    </main>
  );
}
