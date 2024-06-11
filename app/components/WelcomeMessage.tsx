"use client";

import { useAuth } from "../authContext";

export default function WelcomeMessage() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div>{isLoggedIn && <p>Welcome back, {user && user.userName}!</p>}</div>
  );
}
