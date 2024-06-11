import Posts from "./components/Posts";
import SideBar from "./components/SideBar";

export default async function Home() {
  return (
    <main className="flex gap-10 xs:flex-col md:flex-row">
      <SideBar />
      <div className="flex flex-col gap-4 flex-1">
        <Posts />
      </div>
    </main>
  );
}
