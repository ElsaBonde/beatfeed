"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../authContext";
import LogInOutButton from "./LogInOutButton";

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="flex justify-between p-4 border-b-2 border-stone-400 sticky top-0 bg-white z-50">
      <Link href="/">
        <Image
          src="/soundstream.png"
          alt="Sound Stream"
          width={150}
          height={150}
        />
      </Link>
      <div className="block md:hidden">
        {isLoggedIn ? null : <LogInOutButton />}
      </div>
    </header>
  );
}
