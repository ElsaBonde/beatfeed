import { getPosts } from "./actions/postActions";

export default async function Home() {
  const posts = await getPosts();

  if (!posts) {
    return <div>No posts found</div>;
  }

  return (
    <>
      <header className="flex justify-between">
        <h1>BeatFeed</h1> 
        <button>Login</button>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 bg-gray-900 text-zinc-50 ">
               <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(post.song)}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <p>{post.likes} likes</p>
                <p className="font-bold">{post.author.userName}</p>
              <div>
                <p>{post.title}</p>
              </div>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

function getYouTubeVideoId(url: string) {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}