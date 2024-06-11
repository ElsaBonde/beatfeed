"use client";

import Link from "next/link";
import { useAuth } from "../authContext";

export default function LogInOutButton() {
  const { isLoggedIn } = useAuth();

    const handleLogOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.reload();
    };

  return (
    <>
      {isLoggedIn ? (
        <p className="underline underline-offset-2 cursor-pointer" onClick={handleLogOut}>
          Logout
        </p>
      ) : (
        <Link href="/login" className="underline underline-offset-2">
          Login
        </Link>
      )}
    </>
  );
}
