"use client";

import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import { useAuth } from "../authContext";

export default function LogInOutButton() {
  const { isLoggedIn, logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
    window.location.reload();
  };

  return (
    <>
      {isLoggedIn ? (
        <p onClick={handleLogOut} className="cursor-pointer flex gap-1">
          <LogoutIcon />
          <p>Logout</p>
        </p>
      ) : (
        <Link href="/login" className="flex gap-1">
          {" "}
          <LoginIcon />
          <p>Login</p>
        </Link>
      )}
    </>
  );
}
