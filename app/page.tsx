import Posts from "./components/Posts";

export default async function Home() {
  return (
    <main className="flex flex-col gap-4 flex-1">
      <Posts />
    </main>
  );
}
