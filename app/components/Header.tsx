import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-4 border-b-2 border-stone-400 bg-stone-200">
      <h1>BeatFeed</h1>
      <Link href="/login" className="underline underline-offset-2">
        Login
      </Link>
    </header>
  );
}
