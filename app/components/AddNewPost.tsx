"use client";

import { useAuth } from "../authContext";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default function AddNewPost() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn && (
        <div className="flex items-center gap-1">
          <AddAPhotoIcon /> <p>Add new</p>
        </div>
      )}
    </>
  );
}
