"use client";

import Link from "next/link";
import { useAuth } from "../authContext";
import AddIcon from "@mui/icons-material/Add";

export default function Username() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <p className="font-bold">{user && user.userName}</p>
      ) : (
        <Link href="/register" className="flex gap-1">
          <AddIcon />
          <p>Register</p>
        </Link>
      )}
    </div>
  );
}
