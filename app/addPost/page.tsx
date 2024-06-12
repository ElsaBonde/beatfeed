"use client";

import { createPost } from "../actions/postActions";
import { useAuth } from "../authContext";

export default function AddPostPage() {
  const { isLoggedIn, user } = useAuth();

  const handleAddPost = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const data = {
      title: form.title.value,
      content: form.content.value,
      song: form.song.value,
      authorId: user.id,
    };
    try {
      const post = await createPost(data);
      console.log("Post created successfully:", post);
      form.title.value = "";
      form.content.value = "";
      form.song.value = "";
      window.location.href = "/";
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen p-8 bg-stone-200 gap-12">
      {isLoggedIn ? (
        <>
          <h1 className="text-xl">Add new post</h1>
          <div className="flex flex-col gap-4">
            <form className="flex flex-col gap-3" onSubmit={handleAddPost}>
              <div className="flex flex-col gap-2">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="content">Content</label>
                <textarea name="content" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="song">Song url</label>
                <input type="text" name="song" required />
              </div>
              <button
                type="submit"
                className="bg-black text-white p-2 rounded-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </>
      ) : (
        <h1 className="text-xl">You must be logged in to add a post</h1>
      )}
    </div>
  );
}
