import { getPosts } from "./actions/postActions";

export default async function Home() {
  const posts = await getPosts();

  if (!posts) {
    return <div>No posts found</div>;
  }

  return (
    <div>
      <main>
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 bg-stone-200 rounded-sm">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                    post.song
                  )}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className=" h-96"
                ></iframe>
              </div>
              <p>{post.likes} likes</p>
              <p className="font-bold">{post.author.userName}</p>
              <div>
                <p>{post.title}</p>
              </div>
              <p>{post.content}</p>
              <p className="">Posted för 5 minuter sen</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function getYouTubeVideoId(url: string) {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}
