import Link from "next/link";
import LogInOutButton from "./LogInOutButton";

export default function Header() {
  return (
    <header className="flex justify-between p-4 border-b-2 border-stone-400 bg-stone-200">
      <Link href="/">BeatFeed</Link>
      <LogInOutButton />
    </header>
  );
}
