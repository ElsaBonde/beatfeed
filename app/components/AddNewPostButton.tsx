"use client";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useAuth } from "../authContext";
import Link from "next/link";

export default function AddNewPostButton() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn && (
        <Link href="/addPost" className="flex items-center gap-1">
          <AddAPhotoIcon /> <p>Add</p>
        </Link>
      )}
    </>
  );
}
