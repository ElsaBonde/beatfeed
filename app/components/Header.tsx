import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-4 border-b-2 border-stone-400 sticky top-0 bg-white z-50">
      <Link href="/">BeatFeed</Link>
    </header>
  );
}
