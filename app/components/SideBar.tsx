import AddNewPost from "./AddNewPost";
import LogInOutButton from "./LogInOutButton";
import WelcomeMessage from "./Username";

export default function SideBar() {
  return (
    <aside className="flex flex-col gap-10 border-r-2 border-stone-400 p-4">
      <WelcomeMessage />
      <AddNewPost />
      <LogInOutButton />
    </aside>
  );
}
