import AddNewPost from "./AddNewPostButton";
import LogInOutButton from "./LogInOutButton";
import WelcomeMessage from "./Username";

export default function SideBar() {
  return (
    <aside className="hidden md:flex flex-col gap-10 border-r-2 border-stone-400 p-4 ">
      <WelcomeMessage />
      <AddNewPost />
      <LogInOutButton />
    </aside>
  );
}
