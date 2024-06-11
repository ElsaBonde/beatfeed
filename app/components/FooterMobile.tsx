"use client";

import { useAuth } from "../authContext";
import AddNewPost from "./AddNewPostButton";
import LogInOutButton from "./LogInOutButton";
import WelcomeMessage from "./Username";

export default function FooterMobile() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <footer className="flex justify-between p-4 border-t-2 border-stone-400 sticky bottom-0 bg-white z-50 md:hidden">
          <WelcomeMessage />
          <AddNewPost />
          <LogInOutButton />
        </footer>
      ) : null}
    </>
  );
}
